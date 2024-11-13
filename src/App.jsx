// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createBrowserRouter, RouterProvider,Routes,Route,redirect,Link, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Workflow from "./components/About";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import Project from "./components/Project";
import Contact from "./components/Contact";
import ScrollToTop from './components/Scrollup';
import Resume from "./Pages/Resume";

const App = () => {

// const router = createBrowserRouter([
//   // {
//   //   element:<Layout />,
//   //   children:[
//       {
//         path: "/",
//         element: <HeroSection />
//       },
//       {
//         path: "contact",
//         element: <Workflow />
//       },
//       {
//         path: "about",
//         element: <FeatureSection />
//       },
//       {
//         path: "project",
//         element: <Pricing />
//       },
//       {
//         path: "resume",
//         element: <Testimonials />
//       },
//     // ]
//   // },
// ])


  return (
    <BrowserRouter>
      <Navbar />
      {/* <RouterProvider router={router} /> */}
      <div className="max-w-7xl pt-5 mx-auto lg:pt-14 px-6">
        <HeroSection />
        <Workflow />
        <Project />
        <Testimonials />
        <Contact  />
        <ScrollToTop />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
