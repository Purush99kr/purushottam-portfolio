import cv from "../assets/cv.jpg";

const Resume = () => {
  return (
    <div>
        <div className="p-8 m- lg:w-1/2 item-center">
          <img  src={cv} alt="My cv" />
        </div>
    </div>
  )
}

export default Resume
