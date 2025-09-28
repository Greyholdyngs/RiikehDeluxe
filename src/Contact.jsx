import { useState } from "react";
import Header from "./Header";

const Contact = () => {

    const [darkMode, setDarkMode] = useState(false)

    return(
        <div className={`h-screen lg:px-20 md:px-15 px-5 pb-10
                      ${darkMode ? "bg-[#121212] text-[#ffffff] shadow-[0_4px_12px_rgba(255,255,255,0.8)]" : "bg-[#ffffff] text-[#121212] shadow-[0_4px_12px_rgba(0,0,0,0.2)]"}`}>
            <Header darkMode={darkMode} setDarkMode={setDarkMode} />
            <div className="flex flex-col justify-center">
                <div>
                    <h4 className="font-bold lg:text-3xl md:text-2xl text-lg my-10">Jewelries/Accessories, and wristwatches for both men and women</h4>
                </div>
                <ul>
                    <li>
                        <p className="font-bold text-xl pb-2">Hot Line</p>
                        <p>+234 816 598 9580</p>
                    </li>
                    <li className="">
                        <p className="font-bold text-xl pb-2">Location</p>
                        <p>Igbogbo, Ikorudu Lagos</p>
                    </li>
                    <li>
                        <p className="font-bold text-xl pb-2">Email -</p>
                        <a href="">dfajemise@gmail.com</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Contact