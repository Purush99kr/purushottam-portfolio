import React, { useState, useEffect } from 'react';

const ScrollToTop = () => {
  // State to track if the user has scrolled down
  const [isVisible, setIsVisible] = useState(false);

  // Function to handle scroll and check scroll position
  const handleScroll = () => {
    if (window.scrollY > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Function to scroll back to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scroll
    });
  };

  // useEffect to add the scroll event listener on mount
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-6 right-6">
          <button
            onClick={scrollToTop}
            className="
              p-3 rounded-full bg-blue-500 text-white shadow-lg hover:bg-blue-700 
              transition-all duration-300 ease-in-out focus:outline-none"
          >
            ⬆️ {/* This can be replaced with an icon */}
          </button>
        </div>
      )}
    </>
  );
};

export default ScrollToTop;
