import { gsap } from "gsap";
   import {useRef,useLayoutEffect} from 'react'

const Top=()=>{
    const app = useRef();
    const tl = useRef();
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
        tl.current = gsap.timeline()
    .from(".blue", {y:'-100vh',duration:2, ease:'bounce.out'})

    .from('.hello>p',{xPercent:100,duration:2})
    .from('.insideblue',{ scale: 5,duration:2})

    

    }, app);
    
    return () => ctx.revert();
  });
    return(
        <div className='top' ref={app} >
            <div className='blue'>
                <div className='insideblue'>dshfkjdhfjd</div>
            </div>
            <div className='hello'><p>HELLO I AM TEMESGEN FRONT END WEB DEV</p></div>

        </div>
    )
}
export default Top