import logo from "../assets/logo.png";
import { ReactTyped } from "react-typed";
import { Link } from "react-scroll";

const HeroSection = () => {
  return (
    <div name="HeroSection" className="flex flex-col items-center">
      <img className="h-28 w-28 mr-2 rounded-full mt-0" src={logo} alt="Logo" />
      <h1 className="text-4xl mt-7 sm:text-6xl lg:text-7xl text-center tracking-wide">
       <span className="bg-gradient-to-r from-blue-500 via-yellow-500 to-green-500 text-transparent bg-clip-text"> Hey there! most welcome, I'm a</span>
        {" "}
        <div>
        <ReactTyped className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text"
          strings={["Programmer", "Developer", "Designer","Coder"]}
          typeSpeed={40}
          backSpeed={50}
          loop={true}
        />
        </div>

      </h1> <p className="mt-10 text-lg  text-center text-neutral-400 max-w-4xl">
      I'm a final year B-tech Graduate in CSE(2021-25 batch), dynamic & driven with a strong academic foundations, having proficiency in [React.js, Node.js, Express, MongoDB]. Seeking opportunities effectively to apply & develop my skills to drive innovation & growth.</p>
      <div className="flex justify-center my-10">
        <a href="/CVnew.pdf" download="PurushottamCV.pdf" 
        className="bg-gradient-to-r from-orange-500 to-orange-800 hover:bg-gradient-to-r hover:from-orange-400 hover:to-orange-700 hover:-translate-y-1 py-3 px-4 mx-3 focus focus:outline-none active:focus:ring-1 transition-all duration-100 ease-in-out rounded-lg" >Download CV</a>

        <Link to="Project" smooth={true}  duration={1200}  offset={-70}  activeClass="active" 
        className="relative overflow-hidden bg-transparent  group transition-all duration-500 ease-in-out py-3 px-4 mx-3 rounded-lg border border-blue-900 shadow-lg focus active:focus: hover:-translate-y-1 hover:cursor-pointer">
        <span className="relative z-10">View Projects</span> <span 
        className="absolute inset-0 bg-blue-950 transition-transform duration-500 ease-in-out  transform -translate-x-full group-hover:translate-x-0"></span> </Link>
      </div>
    </div>
  );
};

export default HeroSection;
