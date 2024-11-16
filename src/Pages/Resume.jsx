import cv from "../assets/cv.jpg";

const Resume = () => {
  
  return (
    <div className= "flex flex-col md:p-40 md:m-8 md:pt-0 md:mt-0 justify-center items-center">
        <div className="m-10">
          <img  className="p-4 shadow-md shadow-orange-500 rounded-md" src={cv} alt="My cv" />
        </div>

        <div className="flex justify-center mt-0">
        <a href="/CVnew.pdf" download="PurushottamCV.pdf" 
        className="bg-gradient-to-r from-orange-500 to-orange-800 hover:bg-gradient-to-r hover:from-orange-400 hover:to-orange-700 hover:-translate-y-1 py-3 px-4 mx-3 focus focus:outline-none active:focus:ring-1 transition-all duration-100 ease-in-out rounded-lg" >Download CV</a>
        </div>
    </div>
  )
}

export default Resume
