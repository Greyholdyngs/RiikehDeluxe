import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './Header';
import watch from './assets/images/watchpack.jpg';
import waistChain from './assets/images/waistchain.jpg';
import necklace from './assets/images/necklace1.jpg';
import bands from './assets/images/wristband.jpg';
import search from './assets/images/searchicon.png';
import Items from '../products.json'
import filterIcon from './assets/images/filtericon.png'
import logoLight from './assets/images/logolight.png';
import logoDark from './assets/images/logodark.png'
import photo1 from '../public/RiikehProductImages/photo_11.jpg'
import photo2 from '../public/RiikehProductImages/photo_48.jpg'
import photo3 from '../public/RiikehProductImages/photo_55.jpg'
import photo4 from '../public/RiikehProductImages/photo_77.jpg'
import photo5 from '../public/RiikehProductImages/photo_126.jpg'
import igIcon from './assets/ig.png'
import tiktokIcon from './assets/tiktok.png'

function App() {

  const [darkMode, setDarkMode] = useState(false);

  const [searchInput, SetSearchInput] = useState("");

  const [category, setCategory] = useState("all");

  const [products, setProducts] = useState([]);

  const imageSlide = [ photo1, photo2, photo3, photo4, photo5];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  },[])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % imageSlide.length);
    },3500);
    return () => clearInterval(interval);
  },[imageSlide.length]);

  useEffect(() => {
    setProducts(Items)
  }, [])

  const filteredItems = products.filter((p) => {

    const matchesCategory = category === "all" || p.category === category;

    const matchSearch = p.name.toLowerCase().includes(searchInput.toLowerCase());

    return matchesCategory && matchSearch
  })

  const handleChange = (e) => {
    SetSearchInput(target.event.value)
    console.log(e)
  }

  return (
    <div className={`h-full
                      ${darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-900"}`}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <div data-aos="fade-up" className={`search-area flex justify-between items-center py-15 lg:px-20 md:px-15 px-5 `}>
        <div>
          <label className={``} htmlFor="">
          <input  data-aos="fade-right" className={`focus:outline-none ring-2 rounded-lg lg:w-160 lg:w-100 md:w-75 w-2/3 py-2 shadow-lg md:pl-12 pl-2 text-xl
                            ${darkMode ? "ring-[#D4AF37] shadow-gray-500" : "ring-[#C5A029] shadow-gray-600"}`}
                  type="text" placeholder='Search Items'
                  onChange={handleChange}
                  />
          <img className={`relative -top-8 md:left-4 left-31 w-6`} src={search} alt="" />
        </label>
        </div>
        <div className={`categories flex`}> 
          <select data-aos="fade-left" className={`focus:outline-none ring-2 md:pr-10 pl-3 py-1 lg:w-70 md:w-50 w-25 rounded-lg font-semibold cursor-pointer
                          ${darkMode ? "ring-[#D4AF37]" : "ring-[#C5A029]"}
                          `}
                value={category} 
                onChange={(e) => setCategory(e.target.value)}>
            <option className={`bg-[#C5A029] text-white ${category ? "bg-[#C5A029] text-white" : ""}`} value="all">Filter</option>
            <option className={`${darkMode ? "bg-gray-900 text-gray-100 shadow-gray-600" : "bg-gray-100 text-gray-900 shadow-gray-600"}`} value="Men-watch">Men Watches</option>
            <option className={`${darkMode ? "bg-gray-900 text-gray-100 shadow-gray-600" : "bg-gray-100 text-gray-900 shadow-gray-600"}`} value="Ladies-watch">Female Watches</option>
            <option className={`${darkMode ? "bg-gray-900 text-gray-100 shadow-gray-600" : "bg-gray-100 text-gray-900 shadow-gray-600"}`} value="Men-steelrings">Men Rings</option>
            <option className={`${darkMode ? "bg-gray-900 text-gray-100 shadow-gray-600" : "bg-gray-100 text-gray-900 shadow-gray-600"}`} value="women-rings">Women Rings</option>
            <option className={`${darkMode ? "bg-gray-900 text-gray-100 shadow-gray-600" : "bg-gray-100 text-gray-900 shadow-gray-600"}`} value="Men-bracelet">Men Bracelet</option>
            <option className={`${darkMode ? "bg-gray-900 text-gray-100 shadow-gray-600" : "bg-gray-100 text-gray-900 shadow-gray-600"}`} value="women-bangles">Women Bracelet</option>
            <option className={`${darkMode ? "bg-gray-900 text-gray-100 shadow-gray-600" : "bg-gray-100 text-gray-900 shadow-gray-600"}`} value="women-necklace">Women Necklaces</option>
            <option className={`${darkMode ? "bg-gray-900 text-gray-100 shadow-gray-600" : "bg-gray-100 text-gray-900 shadow-gray-600"}`} value="Men-earrings">Men Ear Rings</option>
            <option className={`${darkMode ? "bg-gray-900 text-gray-100 shadow-gray-600" : "bg-gray-100 text-gray-900 shadow-gray-600"}`} value="women-earrings">Women Ear Rings</option>
            <option className={`${darkMode ? "bg-gray-900 text-gray-100 shadow-gray-600" : "bg-gray-100 text-gray-900 shadow-gray-600"}`} value="waist-chains">Waist Chain</option>
            <option className={`${darkMode ? "bg-gray-900 text-gray-100 shadow-gray-600" : "bg-gray-100 text-gray-900 shadow-gray-600"}`} value="unisex">Unisex</option>
            <option className={`${darkMode ? "bg-gray-900 text-gray-100 shadow-gray-600" : "bg-gray-100 text-gray-900 shadow-gray-600"}`} value="wedding-rings">Wedding Rings</option>
          </select>
          <img className={`md:w-4 w-3 relative md:right-15 cursor-pointer md:flex hidden`} src={filterIcon} alt="" />
        </div>
      </div>
      <div data-aos="fade-up" className={`second-section relative w-full py-12
                      overflow-hidden md:flex justify-between lg:px-20 md:px-15 px-5 items-center`}>
        {
          imageSlide.map((img,index) => (
            <div key={index} className={`absolute inset-0 bg-cover bg-center transition-opacity 
                                        duration-1000 ease-in-out
                                        ${index === currentIndex ? "opacity-100" : "opacity-0"}`}
                              style={{
                                backgroundImage: `url(${img})`
                              }}></div>
          ))
        }
        <div className={`relative z-10 pb-20`}>
            <div data-aos="fade-up" className={`my-5`}>
              <h1 className={`font-semibold lg:text-5xl text-3xl`}>Elevate your look </h1>
              <h1 className={`font-semibold lg:text-5xl text-3xl`}>with <span className={`font-bold ${darkMode ? "text-yellow-600" : "text-yellow-700"}`}>RIIKEHDELUXE</span></h1>
            </div>
            <div data-aos="fade-up">
              <p className={`lg:text-xl text-lg pb-2 font-semibold`}>Waist Chains. Necklaces. Watches. Rings.</p>
              <p className={`lg:text-xl text-lg font-semibold border-b-1 pb-2 w-2/3
                            ${darkMode ? "border-yellow-500" : "border-yellow-700"}`}>Crafted to define your style</p>
            </div>
            <div data-aos="fade-up" className={`mt-15`}>
              <button className={`text-center text-lg font-bold rounded-4xl cursor-pointer px-5 py-2 hover:text-white
                                  shadow-md transform duration-500 ease-in-out border-2 hover:border-none 
                                  ${darkMode ? "hover:bg-yellow-600 border-yellow-600 text-yellow-600" : "hover:bg-yellow-700 text-yellow-700 border-yellow-700"}`}>
                <a href="https://wa.me/message/BV3K4JAM24USH1">Book Now</a>
              </button>
            </div>
        </div>
        <div data-aos="fade-left" className={`relative z-10 Image-wrap grid grid-cols-2 items-center gap-6 md:m-0 m-auto py-10 `}>
            <img className={`w-70 h-60 rounded-t-3xl cursor-pointer -z-index-50
                            transition-transform transform duration-500 ease-in-out hover:scale-110 shadow-gray-600
                            `} src={watch} alt="" />
            <img className={`w-70 h-60 rounded-t-3xl cursor-pointer
                            transition-transform transform duration-500 ease-in-out hover:scale-110 shadow-gray-600
                            `} src={bands} alt="" />
            <img className={`w-70 h-60 rounded-b-3xl cursor-pointer
                            transition-transform transform duration-500 ease-in-out hover:scale-110 shadow-gray-600
                            `} src={necklace} alt="" />
            <img className={`w-70 h-60 rounded-b-3xl cursor-pointer
                            transition-transform transform duration-500 ease-in-out hover:scale-110 shadow-gray-600
                            `} src={waistChain} alt="" />
        </div>
      </div>
      <div className={`grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 
                        md:gap-10 gap-5 cursor-pointer lg:px-20 md:px-15 px-5 py-15
                    ${darkMode ? "bg-gray-800 text-gray-100" : "bg-gray-200 text-gray-900"}`}>
        {
          filteredItems.map((p) => (
            <div data-aos="fade-up">
              <div className={`shadow-lg rounded-t-4xl transition-transform 
                                duration-1000 ease-in-out hover:scale-110
                            ${darkMode ? "shadow-gray-600 bg-gray-900 text-gray-100" : "shadow-gray-600 bg-gray-100 text-gray-900"}`} key={p.id}>
                <div className=''>
                  <img className={`rounded-t-4xl w-full h-70 `} src={p.image} alt="" />
                </div>
                <div className={`text-center my-5`}>
                  <h1 className={`md:text-xl text-lg`}>
                    <strong>{p.name}</strong>
                  </h1>
                  <p><small>{p.type}</small></p>
                  <p>{p.category}</p>
                  <p>
                    <strong>{p.price}</strong>
                  </p>
                  <p className='px-2'>{p.color}</p>
                  <p className={`py-3 mt-7 
                                ${darkMode ? "bg-yellow-600 text-gray-900" : "bg-yellow-700 text-white"}`}>
                    <strong>{p.quantity}</strong>
                  </p>
                </div>
             
            </div>
            </div>
          ) )
        }
      </div>
      <div className={`contact-button fixed z-20 bottom-20 lg:right-20 md:right-15 right-5`}>
        <button className={`px-5 py-2 rounded-4xl cursor-pointer shadow-md transform duration-500 ease-in-out
                          ${darkMode ? "hover:bg-gray-900 bg-yellow-600 hover:text-yellow-600 text-gray-900 shadow-gray-600 hover:border-2" : "hover:bg-gray-100 bg-yellow-700 hover:border-2 hover:text-yellow-700 text-white shadow-gray-600"}`}>
          <a href="https://wa.me/message/BV3K4JAM24USH1">
            <strong>Contact Us Now</strong>
          </a>
        </button>
      </div>
      <footer className={`sticky bottom-0 flex justify-between items-center lg:py-3 py-2 lg:px-20 md:px-15 px-5 shadow-2xl z-20
                            ${darkMode ? "bg-gray-900 text-gray-100 shadow-gray-600" : "bg-gray-100 text-gray-900 shadow-gray-600"}`}>
        <nav>
          <a href="#">
            <img className={`rounded-full md:w-7 w-10`} src={darkMode ? logoDark : logoLight } alt="" />
          </a>
        </nav>
        <ul className='flex gap-2 items-center'>
          <li>
            <a href="https://www.instagram.com/rd___jewel?igsh=MXB6eXo0dWdoanU1MA==">
              <img className='w-5' src={igIcon} alt="" />
            </a>
          </li>
          <li>
            <a href="https://www.tiktok.com/@rd_jewelry?_t=ZS-902vzkzT0Cu&_r=1">
              <img className='w-5' src={tiktokIcon} alt="" />
            </a>
          </li>
          <li>
            <small>
              <strong>&copy;</strong>Copyright
            </small>
          </li>
        </ul>
      </footer>
   </div>
  )
}

export default App
