import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from 'aos';
import avater from './assets/images/CEO.jpg';
import Header  from "./Header";

const About = () => {


    const [darkMode, setDarkMode] = useState(false)

    useEffect(() => {
        AOS.init({
            duration: 2000,
            once: true,
        });
    },)

    return(
        <div className={`h-full lg:px-20 md:px-15 px-5 pb-10
                      ${darkMode ? "bg-[#121212] text-[#ffffff] shadow-[0_4px_12px_rgba(255,255,255,0.8)]" : "bg-[#ffffff] text-[#121212] shadow-[0_4px_12px_rgba(0,0,0,0.2)]"}`}>
            <Header darkMode={darkMode} setDarkMode={setDarkMode} />
            <div>
                <h1 className={`font-bold text-5xl text-center md:pt-15 pt-8`}>About Us</h1>
            </div>
            <div  className="lg:flex justify-between gap-20 items-center md:py-15 py-7">
                <div data-aos="fade-right" className="m-auto flex justify-center items-center text-center">
                    <img className="md:mb-o mb-10" src={avater} alt="" />
                </div>
                <div data-aos="fade-left" className="font-base text-lg">
                    <p>Every piece tells a story, and at <span><strong>RiikehDeluxe</strong></span>, that story is one of elegance, confidence, and timeless beauty.</p>
                    <p className="py-2">Founded by Dorcas Olatomiwa, RiikehDeluxe was born from a passion for creating accessories that do more than complete an outfit, they celebrate individuality. 
                        From sleek watches to delicate waist chains, bold rings to elegant earrings, each piece is carefully selected to help you express who you truly are.
                    </p>
                    <p className="py-2">For us, jewelry is more than an accessory. It's a statement of love, style, 
                        and self expression. Whether it's a necklace that turns heads, a wedding ring that seals forever, 
                        or a simple chain that makes you feel unstoppable, we design for life's every moment</p>
                    <p className="py-2">At RiikehDeluxe, we believe luxury should feel personal. That's why every collection is crafted with attention to detail, quality, and the little spark that makes you stand out.</p>
                    <p className="py-2">
                        <strong>Our Promise: </strong><span>To bring you accessories that don't just shine on the outside, but make you feel beautiful and confident on the inside </span>
                    </p>
                    <p className="py-2">RiikehDeluxe isn't just jewelry, it's your <span><strong>story</strong></span>, your <span><strong>style</strong></span>, your <span><strong>sparkle</strong></span>.</p>
                </div>
            </div>
            <div className="flex justify-end">
                <button className={`px-5 py-2 rounded-4xl cursor-pointer shadow-md transform duration-500 ease-in-out font-semibold text-lg
                                    ${darkMode ? "hover:bg-gray-900 bg-yellow-600 hover:text-yellow-600 text-gray-900 shadow-gray-600 hover:border-2" : 
                                    "hover:bg-gray-100 bg-yellow-700 hover:border-2 hover:text-yellow-700 text-white shadow-gray-600"}`}>
                    <Link to="/">Back</Link>
                </button>
            </div>
        </div>
    )

}
export default About