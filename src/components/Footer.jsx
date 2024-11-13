import { FaSquareGithub, FaLinkedin, FaInstagram,FaTwitter, FaFacebook } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="mt-10 border-t py-10 border-neutral-700 ">
      <div className="justify-center text-center space-y-4 md:flex md:space-x-16 lg:space-x-44 gap-4 border-spacing-0">
        <div className="text-xl tracking-tight py-0  bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">Purushottam Kumar</div>
        <div className="bg-gradient-to-r from-blue-500 via-yellow-500 to-green-500 text-transparent bg-clip-text">
          <p>Copyright &copy;2024; All rights reserved</p></div>
        <div className="inline-flex space-x-4 text-2xl lg:text-4xl  text-center">
              <div className="hover:translate-y-1 hover:text-blue-700" ><a href="">< FaFacebook /></a></div>
              <div className="hover:translate-y-1 hover:text-red-500" ><a href="https://www.instagram.com/purus_uttam/" target="_blank"><FaInstagram /></a></div>
              <div className="hover:translate-y-1 hover:text-blue-400" ><a href="https://www.linkedin.com/in/purushottam-kumar-81883723b/" target="_blank"><FaLinkedin /></a></div>
              <div className="hover:translate-y-1 focus" ><a href="https://github.com/Purush99kr" target="_blank"><FaSquareGithub /></a></div>
          </div>
      </div>
    </footer>
  );
};

export default Footer;
