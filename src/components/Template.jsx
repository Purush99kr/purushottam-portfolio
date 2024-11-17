import HeroSection from "./HeroSection";
import About from "./About";
import Testimonials from "./Testimonials";
import Project from "./Project";
import Contact from "./Contact";
import ScrollToTop from './Scrollup';

const Template = () => {
  return (
    <div className="max-w-7xl pt-5 mx-auto lg:pt-14 px-6">
        <HeroSection />
        <About />
        <Project />
        <Testimonials />
        <Contact  />
        <ScrollToTop />
    </div>
  )
}

export default Template
