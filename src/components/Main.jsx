import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import About from "./About";
import Footer from "./Footer";
import Testimonials from "./Testimonials";
import Project from "./Project";
import Contact from "./Contact";
import ScrollToTop from './Scrollup';

const main = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl pt-5 mx-auto lg:pt-14 px-6">
        <HeroSection />
        <About />
        <Project />
        <Testimonials />
        <Contact  />
        <ScrollToTop />
      </div>
      <Footer />
    </div>
  )
}

export default main
