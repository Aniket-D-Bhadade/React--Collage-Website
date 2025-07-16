import React from 'react'
import './Contact.css'
import Msg_icon from '../../assets/msg-icon.png'
import Mail_icon from '../../assets/phone-icon.png'
import Phone_icon from '../../assets/msg-icon.png'
import Location_icon from '../../assets/location-icon.png'
import White_arrow from '../../assets/white-arrow.png'
const EmailKey = import.meta.env.EmailKey;


const Contact = () => {
const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", EmailKey);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      event.target.reset()
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };



  return (
    <div className='contact'>
        <div className="contact-cal">
            <h3>Send us a Massage <img src={Msg_icon} alt="" /></h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum vel recusandae nam, tempore placeat numquam ratione perferendis sequi explicabo aliquid molestias quam cum possimus minima deserunt dicta! Ut consequuntur, eius quasi aspernatur repellendus enim ab iste aliquid, dignissimos quaerat voluptatem, cumque magnam ducimus quia porro!</p>
            <ul>
                <li><img src={Mail_icon} alt="" />aniketb@gmail.com</li>
                <li><img src={Phone_icon} alt="" />+91 887890000</li>
                <li><img src={Location_icon} alt="" />Nagpur MH</li>
            </ul>
        </div>
        <div className="contact-cal">
          <form onSubmit={onSubmit}>
            <label >Your Name </label>
            <input type="text" name ='name' placeholder='Enter your name' required/>
            <label >Phone number</label>
            <input type="tel" name ='phone' placeholder='Enter your moblile number ' required/>
            <label >Write your massage</label>
            <textarea name="massage" rows='6' placeholder='Enter your massage' required></textarea>
            <button type='submit' className='btn dark-btn'>Submit <img src={White_arrow} alt="" /></button>
          </form>
          <span>{result}</span>
        </div>
      
    </div>
  )
}

export default Contact
