// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createBrowserRouter, RouterProvider,Routes,Route,redirect,Link, BrowserRouter } from "react-router-dom";
import Main from "./components/main";
import About from "./Pages/About";
import Project from "./Pages/Project";
import Resume from "./Pages/Resume";

const App = () => {

  return (
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project/>} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;


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

