import React, { useEffect, useState } from 'react';
import "./scrollIndicator.css";

function ScrollIndicator() {

  const [scrollTop, setScrollTop] = useState(0)
  
  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    
    const scrolled = (winScroll / height) * 100;
    
    setScrollTop(scrolled);
  }
  
  useEffect(() => {
    window.addEventListener("scroll", onScroll)

    return () => window.removeEventListener("scroll", onScroll)
  }, [])
  


  return (
    <div className="container">
      <div className="wrap">
        <div className="style"
          style={{width: `${scrollTop}%`}}
          ></div>
      </div>
      <h1>Scroll Load Indicator</h1>
    </div>
  )
}

export default ScrollIndicator
