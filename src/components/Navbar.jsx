import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center ">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2 rounded-full" src={logo} alt="Logo" />
            <span className="text-xl tracking-tight py-0 bg-gradient-to-r from-blue-500 via-yellow-500 to-green-500 text-transparent bg-clip-text"> Purushottam Kumar<p className="font-thin text-sm text-orange-200">software developer</p></span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link   // className={(e)=>{return e.isActive?"red":""}}
                to={item.text} 
                smooth={true} 
                duration={1200} 
                offset={-70} 
                activeClass="active" 
                className="hover:text-red-800 hover:cursor-pointer"  

                onClick={() => {
                  if (window.location.pathname !== item.path) {
                    window.location.href = item.path;
                  }
                }}
                
                >{item.title}</Link>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex justify-center space-x-10 item-center">
            <Link to="Contact"  smooth={true}  duration={1200}  offset={-70}  activeClass="active" 
             className="relative overflow-hidden bg-transparent  group transition-all duration-500 ease-in-out py-2 px-3 border rounded-lg border-blue-900 hover:cursor-pointer"> 
             <span className="relative z-10" >Contact me</span> <span 
             className=" absolute inset-0 bg-blue-950 transition-transform duration-500 ease-in-out transform -translate-x-full group-hover:translate-x-0"></span> </Link>

            <NavLink to="/resume"  smooth={true}  duration={1200}  offset={-70}  activeClass="active"  
            className="bg-gradient-to-r from-orange-500 to-orange-800 hover:bg-gradient-r hover:from-orange-400 hover:to-orange-700 focus focus:outline-none active:focus:ring-1 transition-all duration-50 ease-in-out py-2 px-3 rounded-lg hover:cursor-pointer">Resume</NavLink>
          </div>

{/* mobile section start */}

          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                <Link  // className={(e)=>{return e.isActive?"red":""}}
                onClick={toggleNavbar}
                to={item.text}
                smooth={true} 
                duration={1200} 
                offset={-70} 
                activeClass="active"
                className="hover:text-red-800 hover:cursor-pointer"
                >{item.title}</Link>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <Link to="Contact" onClick={toggleNavbar} smooth={true}  duration={1200}  offset={-70}  activeClass="active" 
              className="relative overflow-hidden bg-transparent  group transition-all duration-500 ease-in-out py-2 px-3 border rounded-lg border-blue-900 hover:cursor-pointer"> 
              <span className="relative z-10">Contact me</span><span 
              className=" absolute inset-0 bg-blue-900 transition-transform duration-500 ease-in-out transform -translate-x-full group-hover:translate-x-0"></span></Link>
              <NavLink to="/resume"   onClick={toggleNavbar} smooth={true}  duration={1200}  offset={-70}  activeClass="active" 
              className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800 hover:bg-gradient-to-r hover:from-orange-400 hover:to-orange-700 hover:cursor-pointer">Resume</NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
