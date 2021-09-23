import React, { useState, useEffect } from 'react'

export default function ParallaxScroll() {

  const [position, setPositon] = useState(0);
  function onScroll() {
    setPositon(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll",onScroll);
    };
  }, []);

  return (
    <div className="container">
      <div
        className="backgoundImg_1"
        style={{
          backgroundPositionY: position / 2,
        }}>
      </div>
      <div
        className="backgoundImg_2"
        style={{
          backgroundPositionY: position / 3,
        }}>
      </div>

      <div
        className="description_1"
        style={{
          transform: `translateX(${-position}px)`
        }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id deserunt eligendi esse odio, minus, laudantium architecto mollitia provident ullam porro laboriosam iusto omnis commodi, dicta quaerat ipsum! Est, quaerat placeat.
      </div>
      <div
        className="description_2"
        style={{
          transform: `translateX(${position}px)`
        }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id deserunt eligendi esse odio, minus, laudantium architecto mollitia provident ullam porro laboriosam iusto omnis commodi, dicta quaerat ipsum! Est, quaerat placeat.
      </div>

      <div
        className="opacity_3"
        style={{
          opacity: (position - 800) / 50,
        }}>
          OPACITY FIRST
      </div>
      <div
        className="opacity_4"
        style={{
          opacity: (position - 900) / 50,
        }}>
          OPACITY SECOND
      </div>
      <div
        className="opacity_5"
        style={{
          opacity: (position - 1000) / 50,
        }}>
          OPACITY THIRD
      </div>
    </div>
  )
}
