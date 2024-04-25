import { useState } from "react";
import { Link } from "react-scroll";
import { RxCross1 } from "react-icons/rx";



export default function Header() {

  const [mobileNav, setMobileNav ] = useState(false)

  function HandleNav (){
    setMobileNav(!mobileNav)
  }
  

  return (
    
    <header className="shadow  w-full  fixed z-10 top-0 ">
      <nav className={` ${mobileNav ? "bg-slate-100" : ""} lg:bg-transparent z-44 backdrop-blur-sm border-gray-200 px-4 lg:px-6 py-2.5`}>
        <div className="flex flex-wrap items-center mx-auto max-w-screen-xl">
          <Link to="/"
           className="flex items-center h-[50px]">
            <h1 className="text-black text-2xl font-bold DMsans">Umar <span className="text-orange-500 font-bold DMsans">Waqar</span></h1>
          </Link>


          <div className="block lg:hidden ml-auto " >
          {
              mobileNav === false ? 
              <button className="text-gray-600   hover:text-gray-900 focus:outline-none focus:text-gray-900" onClick={HandleNav}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button> : <RxCross1 className="cursor-pointer"  onClick={HandleNav}/>
            }
            
</div>


          <div
            className={`${mobileNav === true ? "block" : "hidden" }  ml-auto mr-auto justify-between items-center w-full lg:flex lg:w-auto lg:order-1`}
            id="mobile-menu-2"
          > 
            <ul className="flex flex-col border-0 outline-none mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                
                <Link 
                to="home"
                  className="focus:outline-none focus:bg-transparent bg-transparent   
                    block py-2 pr-4 pl-3 duration-200  cursor-pointer
                    text-gray-700  lg:bg-transparent  lg:hover:bg-transparent lg:border-0 hover:text-orange-700 
                     lg:p-0 "
                   spy={true} smooth={true} offset={-105} duration={500} onClick ={()=>setMobileNav(false)}
                >
                  HOME
                </Link>
              </li>
              <li>
                <Link
                   to="about"
                  className="    lg:bg-transparent focus:outline-none focus:bg-transparent  block py-2 pr-4 pl-3 duration-200  cursor-pointer
                           text-gray-700 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 
                            lg:p-0"
                            spy={true} smooth={true} offset={-105} duration={500} onClick ={()=>setMobileNav(false)}
                >
                  ABOUT
                </Link>
                </li>
                
               
                <li>
                <Link
                to="skills"
                className="lg:bg-transparent   focus:outline-none focus:bg-transparent  block py-2 pr-4 pl-3 duration-200  cursor-pointer
                text-gray-700  lg:hover:bg-transparent lg:border-0 hover:text-orange-700 
                 lg:p-0" 
                 spy={true} smooth={true} offset={-105} duration={500} onClick ={()=>setMobileNav(false)}
                >
                  SKILLS 
                </Link>
              </li>
              <li>
                <Link
                   to="projects"
                   className=" lg:bg-transparent   focus:outline-none focus:bg-transparent  block py-2 pr-4 pl-3 duration-200  cursor-pointer
                   text-gray-700  lg:hover:bg-transparent lg:border-0 hover:text-orange-700 
                    lg:p-0"
                    spy={true} smooth={true} offset={-105} duration={500} onClick ={()=>setMobileNav(false)}
                >
                  PROJECTS 
                </Link>
              </li>
                <li>
                <Link
                   to="contact"
                   className="  lg:bg-transparent  focus:outline-none focus:bg-transparent  block py-2 pr-4 pl-3 duration-200  cursor-pointer
                   text-gray-700 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 
                    lg:p-0"
                    spy={true} smooth={true} offset={-105} duration={500} onClick ={()=>setMobileNav(false)}
                >
                  CONTACT
                </Link>
              </li>

            </ul>
          </div>
        </div>
      
      </nav>
    </header>
    
  );
}