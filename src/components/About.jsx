import { CheckCircle2, Code } from "lucide-react";
import img from "../assets/img.jpg";
import { aboutItems } from "../constants";

const About = () => {
  return (
    <div name="About" className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide bg-gradient-to-r from-blue-500 via-yellow-500 to-green-500 text-transparent bg-clip-text">
        About Personal Profile
      </h2>
      <div className="flex flex-wrap justify-center">
        <div className="p-8 m- lg:w-1/2 item-center">
          <img className="max-h-screen w-96 p-6 shadow-md shadow-orange-500" src={img} alt="My image" />
        </div>
        <div className="pt-12 w-full lg:w-1/2">
          {aboutItems.map((item, index) => (
            <div key={index} className="flex mb-12">
              <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                <CheckCircle2 />
              </div>
              <div>
                <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                <p className="text-md text-neutral-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
