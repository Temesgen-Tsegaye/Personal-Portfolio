import { gsap } from "gsap";
import { useRef, useLayoutEffect } from "react";
import mypic from "../images/mypic3.jpg";

const Top = () => {
  const app = useRef();
  const tl = useRef();
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      tl.current = gsap
        .timeline()
        .from(".blue>img", { yPercent:-100, duration: 2.5,})

        .from(".pfirst", { scale:0, duration: 1.5 ,ease:'bounce.out'})
        .from(".psecond", { scale:0, duration: 1.5 ,ease:'bounce.out'})
        ;
        gsap.from('.scroll',{yPercent:10,duration:0.4,yoyo:true,repeat:-1,ease:'linear'})
    }, app);

    return () => ctx.revert();
  });
  return (
    <div className="top" ref={app}>
      <div className="blue">
        <img src={mypic} alt="" />
      </div>
      <div className="hello">
        <p className='pfirst'> TEMESGEN TSEGAYE </p>
        <p className='psecond'>Front-End Developer</p>
      </div>
      
      <p className='scroll'>^</p>
    </div>
  );
};
export default Top;
