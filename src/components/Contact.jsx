import { MdWifiCalling } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaSquareGithub, FaLinkedin, FaInstagram,FaTwitter, FaFacebook } from "react-icons/fa6";
import { BsFillSendFill } from "react-icons/bs";
import Swal from 'sweetalert2'

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "a1c40f78-4316-4653-bbce-63e5094578dc");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Message has been sent successfully!",
        icon: "success",
        confirmButtonColor: "#3085d6",
      });
    }
  };


  return (

      <div name="Contact" className="mt-10 tracking-wide flex flex-col w-full min-h-screen justify-center items-center">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20 bg-gradient-to-r from-blue-500 via-yellow-500 to-green-500 text-transparent bg-clip-text">
        Let's have a connection!</h2>
      {/*  style flex flex-col md:flex-row md:space-x-12 space-y-6 md:space-y-0 bg-gray-400 w-full max-w-4xl p-8 sm:p-12 rounded-xl shadow-lg text-white border */}
        <div className="flex flex-col md:flex-row w-full max-w-4xl p-2 space-y-6 md:space-y-0 shadow-md shadow-orange-200 rounded-sm">
          <div className="lg:space-y-8 space-y-4 bg-gray-400 shadow-md shadow-orange-200 w-full  p-8 sm:p-12 rounded-xl">       
            <div>
              <h1 className="text-4xl text-center font-bold tracking-wide bg-gradient-to-r from-orange-900 to-red-800 text-transparent bg-clip-text">Connect with</h1>
              <p className="pt-2 text-sm font-bold  text-black">Just make connections and have a work better. HavLooking full- mind or an opportunity to discuss? Let’s connect! Feel free to reach out, and I’d be happy to discuss how we can work together</p>
            </div>

            {/* contact icons begins */}
            <div className="flex flex-col">
              <div className="inline-flex space-x-4 items-center text-black">
                <MdWifiCalling className="text-xl" />
                <span>+91-9876543210</span>
              </div>
              <div className="inline-flex space-x-4 items-center text-black">
                <IoMdMail className="text-xl" />
                <span>info@yourdomain.com</span>
              </div>
              <div className="inline-flex space-x-4 items-center text-black">
                <FaMapMarkerAlt className=" text-xl" />
                <span>123,G block, Aayanagar, New Delhi</span>
              </div>
            </div>
            
            <div className="inline-flex space-x-4 text-2xl lg:text-4xl  text-black text-center">
              <div className="hover:text-blue-500" ><a href="">< FaFacebook /></a></div>
              <div className="hover:text-red-500" ><a href="https://www.instagram.com/purus_uttam/" target="_blank"><FaInstagram /></a></div>
              <div className="hover:text-blue-500" ><a href="https://www.linkedin.com/in/purushottam-kumar-81883723b/" target="_blank"><FaLinkedin /></a></div>
              <div className="hover:text-white" ><a href="https://github.com/Purush99kr" target="_blank"><FaSquareGithub /></a></div>
            </div>
          </div>
          {/* contact icons ends */}

          {/* contact form begins */}
          <div className="bg-black rounded-xl shadow-md shadow-orange-200  p-8 w-full ">
            <form action="" onSubmit={onSubmit} method="POST" className="flex flex-col space-y-2 md:space-y-6  text-red-800">
              <div><input type="text"  placeholder="Your Name" 
                className="ring-1 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:bg-black focus:shadow-md focus:shadow-orange-100"  name="name" required/></div>
              <div><input type="text" placeholder="Your Email" 
                className="ring-1 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:bg-black focus:shadow-md focus:shadow-orange-100" name="email" required/></div>
              <div><input type="text" placeholder="Your contact" 
                className="ring-1 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:bg-black focus:shadow-md focus:shadow-orange-100" name="contact" required/></div>
              <div><textarea name="message" id=""  rows={4} placeholder="Your Message" 
                className="ring-1 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:bg-black focus:shadow-md focus:shadow-orange-100"  required></textarea></div>
              <button type="submit" className="inline-flex items-center text-xl justify-center ring-1 w-full rounded-md px-4 py-2 outline-none text-black bg-gradient-to-r from-primary via-secondary to-primary hover:bg-gradient-to-r hover:from-secondary hover:via-primary hover:to-secondary hover:font-semibold  focus:ring-2">
                <BsFillSendFill /> Send Message</button>
            </form>
          </div>
        </div>
      </div>
  );
};

export default Contact;
