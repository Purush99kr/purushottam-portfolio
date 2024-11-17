import sonam from "../assets/profile-pictures/sonam.jpg";
import Sweety from "../assets/profile-pictures/sweety.jpg";
import raju from "../assets/profile-pictures/raju.jpg";
import satyam from "../assets/profile-pictures/satyam.jpg";
import guri from "../assets/profile-pictures/guri.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

export const navItems = [
  { title: "Home", text: "HeroSection", path: "/"},
  { title: "About Me", text: "About", path: "/"},
  { title: "Projects", text: "Project", path: "/"},
  { title: "Testimonials", text: "Testimonials", path: "/"},
];

export const testimonials = [
  {
    user: "Sonam Kumari",
    company: "Alfa Solutions",
    image: sonam,
    text: "I couldn't be happier with the outcome of my own projects. His creativity and problem-solving skills were instrumental in bringing my vision to life",
  },
  {
    user: "Sharma Sweety",
    company: "DeltaX",
    image: Sweety,
    text: "I am extremely satisfied with the services provided. It was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Saloni",
    company: "Skolar pvt ltd",
    image: user6,
    text: "His attention to detail and commitment to excellence are commendable. I would highly recommend to anyone looking for top-notch service.",
  },
  {
    user: "Satyam kumar",
    company: "Fusion Dynamics",
    image: satyam,
    text: "His attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for such expertise and professionalism!",
  },
  {
    user: "Gurpreet Singh",
    company: "Visionary Creations",
    image: guri,
    text: "I am amazed by the level of professionalism and dedication shown. More capable and able to exceed our expectations and delivered outstanding results.",
  },
  {
    user: "Raju Kumar",
    company: "Sensation Software Solutions",
    image: raju,
    text: "More capable and able to exceed our expectations and delivered outstanding results. I recommend and look forward to working with him in the future.",
  },
];

export const aboutItems = [
  {
    title: "PURUSHOTTAM KUMAR",
    description:"I'm a B-tech Graduate in CSE, dynamic & driven with a strong academic foundations, having keen interest in leveraging emerging technologies and software development. Eager to apply theoretical knowledge and practical skills acquired through coursework and projects to contribute effectively to the innovative software development team!",
  },
  {
    title: "PROFICIENCY",
    description:"Full Stack Development",
  },
];

export const projectOptions = [
  {
    video: video1,
    title: "Weather Viewer",
    text: "This project is created by using html, css & javascript. Here user can get the live weather conditions by providing the locations inside the input option. In order to fetch the live weather condition weather API is used. ",
    url: "https://weather-application-pk.vercel.app/",
  },

  {
    video: video2,
    title: "Age Calculator",
    text: "This project is created by using html, css & javascript. Here user can get their age by providing DOB. In order to fetch the age of the user after providing their date of birth Date & Time functionality is used. ",
    url: "https://age-calculator-pk.vercel.app/",
  },
];

export const projectPageOptions = [
  {
    video: video1,
    title: "Weather Viewer",
    text: "This project is created by using html, css & javascript. Here user can get the live weather conditions by providing the locations inside the input option. In order to fetch the live weather condition weather API is used. ",
    url: "https://weather-application-pk.vercel.app/",
  },

  {
    video: video2,
    title: "Age Calculator",
    text: "This project is created by using html, css & javascript. Here user can get their age by providing DOB. In order to fetch the age of the user after providing their date of birth Date & Time functionality is used. ",
    url: "https://age-calculator-pk.vercel.app/",
  },
];

