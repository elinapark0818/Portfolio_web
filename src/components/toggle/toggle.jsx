import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import styles from './toggle.module.css';

const Toggle = () => {
  const [isToggle, setToggle] = useState(false);
  const fade = useSpring({
    opacity: isToggle ? 1 : 0
  });

  return (
    <div className={styles.container}>
      
      <button onClick={()=> setToggle(!isToggle)}
        className={styles.btn}
        >Click
      </button>
      <animated.h1 style={fade}>"방문해주셔서 감사합니다.😃"</animated.h1>
      
    </div>
  );
};

export default Toggle;
