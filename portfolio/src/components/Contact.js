import { gsap } from "gsap/all";
import { useRef, useState } from "react";
import tempo from "../images/tempoo.jpg";
import { FaGithub, FaPhone } from "react-icons/fa";
import mail from "../images/mail.svg";

const Contact = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className='contact'>
        <div className='contactcontent'>
        <div className='contactleft' >
        <p>Get in touch</p>
        <div>
        <a href="http://">
          <img src={mail} alt="" /> temesgentsegaye9891@gmail.com
        </a>
        <p>
          <FaPhone /> 0970800555
        </p>
        <a href="http://">
          <FaGithub />
        </a>
        </div>
       
        
        
      </div>
      <div className='contactright'>
        <button
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          
          see tempo
        </button>
        {toggle && <img className='tempoimg' src={tempo} alt="" />}
      </div>
        </div>
      
      <div>footer</div>
    </div>
  );
};
export default Contact;
