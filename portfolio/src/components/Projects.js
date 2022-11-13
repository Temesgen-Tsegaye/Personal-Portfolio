import { gsap } from "gsap";
import { useRef, useLayoutEffect } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Project = () => {
  const pro1 = useRef(null);
 
  const pro2=useRef(null)

  const pro3=useRef(null)
  const pro4=useRef(null)
  const pro5=useRef(null)

  useLayoutEffect(() => {
    
    let ctx = gsap.context(() => {
      gsap.from(".sleft1", {
        xPercent: -100,
        duration: 1,
        scale: 0.5,
        ease: "bounce.out",
        scrollTrigger: {
          trigger: pro1.current,

          start: "top center",
          toggleActions: "restart reverse restart reverse",
        },
      });
      gsap.from(".sright1", {
        xPercent: 100,
        scale: 0.5,
        duration: 1,
        ease: "bounce.out",
        scrollTrigger: {
          trigger: pro1.current,

          start: "top center",
          toggleActions: "restart reverse restart reverse",
        },
      });
    }, pro1);
    return () => ctx.revert();
  }, []);
  useLayoutEffect(() => {
    
    let ctx = gsap.context(() => {
      gsap.from(".sleft2", {
        xPercent: -100,
        duration: 1,
        scale: 0.5,
        ease: "bounce.out",
        scrollTrigger: {
          trigger: pro2.current,

          start: "top center",
          toggleActions: "restart reverse restart reverse",
        },
      });
      gsap.from(".sright2", {
        xPercent: 100,
        scale: 0.5,
        duration: 1,
        ease: "bounce.out",
        scrollTrigger: {
          trigger: pro2.current,

          start: "top center",
          toggleActions: "restart reverse restart reverse",
        },
      });
    }, pro2);
    return () => ctx.revert();
  }, []);
  useLayoutEffect(() => {
    
    let ctx = gsap.context(() => {
      gsap.from(".sleft3", {
        xPercent: -100,
        duration: 1,
        scale: 0.5,
        ease: "bounce.out",
        scrollTrigger: {
          trigger: pro3.current,

          start: "top center",
          toggleActions: "restart reverse restart reverse",
        },
      });
      gsap.from(".sright3", {
        xPercent: 100,
        scale: 0.5,
        duration: 1,
        ease: "bounce.out",
        scrollTrigger: {
          trigger: pro3.current,

          start: "top center",
          toggleActions: "restart reverse restart reverse",
        },
      });
    }, pro3);
    return () => ctx.revert();
  }, []);
  useLayoutEffect(() => {
    
    let ctx = gsap.context(() => {
      gsap.from(".sleft4", {
        xPercent: -100,
        duration: 1,
        scale: 0.5,
        ease: "bounce.out",
        scrollTrigger: {
          trigger: pro4.current,

          start: "top center",
          toggleActions: "restart reverse restart reverse",
        },
      });
      gsap.from(".sright4", {
        xPercent: 100,
        scale: 0.5,
        duration: 1,
        ease: "bounce.out",
        scrollTrigger: {
          trigger: pro4.current,

          start: "top center",
          toggleActions: "restart reverse restart reverse",
        },
      });
    }, pro4);
    return () => ctx.revert();
  }, []);
  useLayoutEffect(() => {
    
    let ctx = gsap.context(() => {
      gsap.from(".sleft5", {
        xPercent: -100,
        duration: 1,
        scale: 0.5,
        ease: "bounce.out",
        scrollTrigger: {
          trigger: pro5.current,

          start: "top center",
          toggleActions: "restart reverse restart reverse",
        },
      });
      gsap.from(".sright5", {
        xPercent: 100,
        scale: 0.5,
        duration: 1,
        ease: "bounce.out",
        scrollTrigger: {
          trigger: pro5.current,

          start: "top center",
          toggleActions: "restart reverse restart reverse",
        },
      });
    }, pro5);
    return () => ctx.revert();
  }, []);
  
  return (
      <>
    <div ref={pro1} className="project">
      <div className="sleft sleft1" ></div>
      <div className="sright sright1"></div>
    </div>
    <div ref={pro2} className="project">
      <div className="sleft sleft2" ></div>
      <div className="sright sright2"></div>
    </div>
    <div ref={pro3} className="project">
      <div className="sleft sleft3" ></div>
      <div className="sright sright3"></div>
    </div>
    <div ref={pro4} className="project">
      <div className="sleft sleft4" ></div>
      <div className="sright sright4"></div>
    </div>
    <div ref={pro5} className="project">
      <div className="sleft sleft5" ></div>
      <div className="sright sright5"></div>
    </div>
    </>
  );
};
export default Project;
