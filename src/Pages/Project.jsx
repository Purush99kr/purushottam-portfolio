import { projectPageOptions } from "../constants";
import { LuExternalLink } from "react-icons/lu";
const Project = () => {
  return (
    <>
    <div name="Project" className="">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide bg-gradient-to-r from-orange-500  to-red-800 text-transparent bg-clip-text">
        Projects
      </h2>
      <div className="flex flex-wrap justify-center items-center">
        {projectPageOptions.map((option, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <div className="border border-neutral-700 shadow-md shadow-orange-50 rounded-lg hover:-translate-y-1">
              <div className="flex justify-center">
                <video autoPlay loop muted 
                className="w-full rounded-lg  shadow-sm shadow-neutral-500 outline-none">
                <source src={option.video} type="video/mp4" />Your browser does not support the video tag.</video>
              </div>

                <p className="text-2xl p-4 bg-gradient-to-r from-orange-800 to-red-500 text-transparent bg-clip-text">
                  {option.title}</p>
                <p className="bg-neutral-900 rounded-lg  text-sm font-thin pt-0 mt-0 p-1">
                  {option.text}</p>

                <a href="#"
                className="inline-flex justify-center items-center text-center font-medium w-full h-12 p-5 mt-2 text-xl hover:bg-orange-500 hover:text-black border border-orange-900 rounded-lg transition duration-200 tracking-wide hover:-translate-y-1">
                 Live Demo <LuExternalLink className="ml-4" /> </a>
            </div>
          </div>
        ))}
      </div>

    </div>
    </>
  );
};

export default Project;
