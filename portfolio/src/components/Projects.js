import { gsap } from "gsap";
import {useRef,useLayoutEffect} from 'react'
import ScrollTrigger from "gsap/ScrollTrigger";
   
gsap.registerPlugin(ScrollTrigger)

const Project=()=>{
    const pro1=useRef(null)
    const pro1l=useRef(null)
    // const pro2=useRef(null)
    
    // const pro3=useRef(null)
    // const pro4=useRef(null)
    // const pro5=useRef(null)

    useLayoutEffect(()=>{
        let ctx=gsap.context(()=>{
            gsap.to(pro1l.current,{backgroundColor:'red',duration:2,scrollTrigger:{
                trigger:pro1.current,
                
                start:'top bottom',
                toggleActions:'restart reverse restart reverse'
            }})

        },pro1)
        return () => ctx.revert();

    },[])
    return(
        // <div className='project'>
           <div ref={pro1} className='project'>
           <div className='projectslider'>
                <div className='sleft1' ref={pro1l} ></div>
                <div className='sright1'></div>
                </div>
 {/* <div ref={pro2}>
           <div className='projectslider2'>
                  <div className='sleft2'></div>
                <div className='sright2'></div>
                
            </div>
           </div>
         
           <div ref={pro3}>
           <div className='projectslider'>
                 <div className='sleft'></div>
                <div className='sright'></div>
                </div>
           </div>
           
            
         <div ref={pro4}>
         <div className='projectslider'>
               <div className='sleft'></div>
                <div className='sright'></div>
                </div>
         </div>
        
            
           <div ref={pro5}>
           <div className='projectslider'>
                 <div className='sleft'></div>
                <div className='sright'></div>
            
            </div>
           </div>
           */}
           </div>
               
                

          
            
        // </div>
    )
}
export default Project