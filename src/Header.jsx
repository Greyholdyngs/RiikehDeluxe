import { useState } from "react";
import { Link } from "react-router-dom";
import moon from './assets/images/darkmode.png';
import sun from './assets/images/lightmode.png';
import burgerLight from './assets/images/burgerLight.png';
import burgerDark from './assets/images/burgerDark.png';
import closeDark from './assets/images/closeDark.png';
import closeLight from './assets/images/closeLight.png';
import logoLight from './assets/images/logolight.png';
import logoDark from './assets/images/logodark.png'


const Header = ({darkMode, setDarkMode}) => {

    const [dropDown, setDropDown] = useState(false)

    return(
        <header className={`sticky top-0 flex justify-between items-center lg:py-4 py-2 lg:px-20 md:px-15 px-5 shadow-lg z-20
                            ${darkMode ? "bg-gray-900 text-gray-100 shadow-gray-600" : "bg-gray-100 text-gray-900 shadow-gray-600"}`}>
            <nav>
                <a href="#">
                    <img className={`rounded-full md:w-13 w-10`} src={darkMode ? logoDark : logoLight } alt="" />
                </a>
            </nav>
            <ul className={`md:flex hidden gap-10 items-center font-semibold text-xl`}>
                <li className={`hover:border-b-1 transform duration-500 ease-in-out
                                ${darkMode ? "hover:text-yellow-500" : "hover:text-yellow-700"}`}>
                    <Link to="/">Home</Link>
                </li>
                <li className={`hover:border-b-1 transform duration-500 ease-in-out
                                ${darkMode ? "hover:text-yellow-500" : "hover:text-yellow-700"}`}>
                    <Link to="/about">About</Link>
                </li>
                <li className={`hover:border-b-1 transform duration-500 ease-in-out
                                ${darkMode ? "hover:text-yellow-500" : "hover:text-yellow-700"}`}>
                    <Link to="/contact">Contact Us</Link>
                </li>
                <li>
                    <button className={`cursor-pointer rounded-full p-2 ${darkMode ? "bg-gray-700" : "bg-white"}`} onClick={() => setDarkMode(!darkMode)}>
                        <img className="w-7" src={darkMode ? sun : moon } alt="" />
                    </button>
                </li>
            </ul>
            <div className={`md:hidden flex flex-col`}>
                <div>
                    <button onClick={() => setDropDown(true)}>
                        <img src={darkMode ? burgerDark : burgerLight } alt="" />
                    </button>
                </div>
                <div>
                    {
                    dropDown && (
                        <ul className={`absolute top-0 left-0 w-2/3 py-3 px-5 z-10 duration-1000 ease-in-out
                                        transition-transform transform focus:translate-x-2 text-left
                                        ${darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-900"}`}>
                            <li className={``}>
                                <button onClick={() => setDropDown(false)}>
                                    <img src={darkMode ? closeLight : closeDark } alt="" />
                                </button>
                            </li> 
                            <li className={`my-3`}>
                                <Link to="/">Home</Link>
                            </li>
                            <li className={`my-3`}>
                                <Link to="/about">About</Link>
                            </li>
                            <li className={`my-3`}>
                                <Link to="/contact">Contact Us</Link>
                            </li>
                            <li className={`my-5`}>
                                <button className={`cursor-pointer rounded-full p-2 ${darkMode ? "bg-gray-700" : "bg-white"}`} onClick={() => setDarkMode(!darkMode)}>
                                    <img className="w-4" src={darkMode ? sun : moon } alt="" />
                                </button>
                            </li>
                        </ul>
                    )
                }
                </div>
            </div>

        </header>
    )
}
export default Header