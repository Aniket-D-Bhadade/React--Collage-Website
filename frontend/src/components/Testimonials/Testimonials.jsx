import React, { useRef } from 'react'
import './Testimonials.css'
import Next_icon from '../../assets/next-icon.png'
import Back_icon from '../../assets/back-icon.png'
import User1 from '../../assets/user-1.png'
import User2 from '../../assets/user-2.png'
import User3 from '../../assets/user-3.png'
import User4 from '../../assets/user-4.png'

const Testimonials = () => {
    const Slider = useRef(null);
const tx = useRef(0);

const Forward = () => {
    if (tx.current > -50) {
        tx.current -= 25;
    }
    if (Slider.current) {
        Slider.current.style.transform = `translateX(${tx.current}%)`;
    }
};

    const Backward = () => {
    if (tx.current < 0) {
        tx.current += 25;
    }
    if (Slider.current) {
        Slider.current.style.transform = `translateX(${tx.current}%)`;
    }
};
  return (
    <div className='testimonials'>
        <img src={Next_icon} alt="" className='next-btn' onClick={Forward}/>
        <img src={Back_icon} alt="" className='back-btn' onClick={Backward} />
        <div className="slider">
            <ul ref={Slider} >
                <li>
                    <div className="slide">
                        <div className="userinfo">
                            <img src={User1} alt="" />
                            <div>
                                <h3>AniketBhadade</h3>
                                <span>Govt. collage</span>
                            </div>
                        </div>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae ipsam ex vel, fugiat temporibus quo animi quos fuga molestiae odio. Et maxime voluptate nisi incidunt a sed ad dolorum ullam!</p>
                        
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="userinfo">
                            <img src={User2} alt="" />
                            <div>
                                <h3>AniketBhadade</h3>
                                <span>Govt. collage</span>
                            </div>
                        </div>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae ipsam ex vel, fugiat temporibus quo animi quos fuga molestiae odio. Et maxime voluptate nisi incidunt a sed ad dolorum ullam!</p>

                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="userinfo">
                            <img src={User3} alt="" />
                            <div>
                                <h3>AniketBhadade</h3>
                                <span>Govt. collage</span>
                            </div>
                        </div>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae ipsam ex vel, fugiat temporibus quo animi quos fuga molestiae odio. Et maxime voluptate nisi incidunt a sed ad dolorum ullam!</p>

                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="userinfo">
                            <img src={User4} alt="" />
                            <div>
                                <h3>AniketBhadade</h3>
                                <span>Govt. collage</span>
                            </div>
                        </div>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae ipsam ex vel, fugiat temporibus quo animi quos fuga molestiae odio. Et maxime voluptate nisi incidunt a sed ad dolorum ullam!</p>

                    </div>
                </li>
            </ul>
        </div>
      
    </div>
  )
}

export default Testimonials
