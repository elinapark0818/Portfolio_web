import React from 'react'
import { useState, useEffect } from 'react/cjs/react.development';
import './topBtn.css';

export default function TopBtn() {
  const [ScrollY, setScrollY] = useState(0);
    const [BtnStatus, setBtnStatus] = useState(false);

    const handleFollow = () => {
      setScrollY(window.pageYOffset);
      if(ScrollY > 300) {
        setBtnStatus(true);
      } else {
        setBtnStatus(false);
      }
    }

    const handleTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
      setScrollY(0);
      setBtnStatus(false);
    }

    useEffect(() => {
      const watch = () => {
        window.addEventListener('scroll', handleFollow)
      }
      watch();
      return () => {
        window.removeEventListener('scroll', handleFollow)
      }
    })

  return (
    <div>
      <div className="wrap">
        <button 
          className={BtnStatus ? "topBtn active" : "topBtn"}
          onClick={handleTop}
        >TOP
        </button>
      </div>
    </div>
  )
}
