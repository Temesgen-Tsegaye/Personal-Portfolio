import pics from "../data";
import { gsap } from "gsap/all";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);
const Skills = () => {
  const second = useRef(null);
  const images = pics.map((items, index) => {
    if (index > 11) {
      return;
    }
    return (
      <img
        className="skillimg"
        key={items.id}
        src={items.image}
        alt=""
        srcset=""
      />
    );
  });

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".skillimg", {
        duration: 2,
        scale: 0.2,
        opacity: 0,
        stagger: 0.1,
        ease: "elastic",
        repeat: -1,
      });
      gsap.to(second.current, {
        backgroundColor: "black",
        color: "white",
        duration: 4,
        scrollTrigger: {
          trigger: second.current,
          start: "top bottom",
          toggleActions: "restart reverse restart reverse",
        },
      });
    }, second);

    return () => ctx.revert();
  }, []);
  return (
    <div className="second" ref={second}>
      <p>SKILLS</p>
      <div>
        <div className="skillexplaniation">
         
        Hi, I'm Temesgen, a passionate self-motivated web developer
         I'm proficient with Vanilla JavaScript, React,Redux,Jest,GSAP,MUI,Firebase,Node.js Express.js, and MongoDB.
         I've used my creativity and problem-solving skills to design and implement websites for clients.
        </div>
        <div className="skilllogo">{images}</div>
      </div>
    </div>
  );
};
export default Skills;
