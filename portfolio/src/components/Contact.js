

import tempo from "../images/tempoo.jpg";
import phone from '../images/phone.svg'
import mail from "../images/mail.svg";

const Contact = () => {
 
  return (
    <div className="contact">
            <img className="tempoimg" src={tempo} alt="" />
        <div>
        <p className="getintouch">Get in touch</p>
        
            <div className='acontact' href="http://">
              <img className='contacticons' src={mail} alt="" /> <p className='emailNo'>temesgentsegaye9891@gmail.com</p> 
            </div>
            <div className='acontact'>
              <img className='contacticons' src={phone} alt="" /><p className="emailNo">0970800555</p> 
            </div>
    
       
         
        
        
        </div>
         
     

     
    </div>
  );
};
export default Contact;
