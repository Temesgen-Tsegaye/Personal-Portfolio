

import phone from '../images/phone.svg'
import mail from "../images/mail.svg";

const Contact = () => {
 
  return (
    <div className="contact">
          
        <div>
        <p className="getintouch">Get in touch</p>
        
            <a className='acontact'  href="mailto:temesgentsegaye9891@gmail.com">
              <img className='contacticons' src={mail} alt="" /> <p className='emailNo'>temesgentsegaye9891@gmail.com</p> 
            </a>
            <div className='acontact'>
              <img className='contacticons' src={phone} alt="" /><p className="emailNo">0970800555</p> 
            </div>
    
       
         
        
        
        </div>
         
     

     
    </div>
  );
};
export default Contact;
