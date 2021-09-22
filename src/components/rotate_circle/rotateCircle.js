function scrollRotate() {
  const image = document.querySelector("rotatecircle");
  image.style.transform = "rotate(" + window.pageYOffset/2 + "deg)";
    }

    window.addEventListener("scroll", scrollRotate);

// Html

// <div class="wrapper">
//   <div class="circle">
//     <img 
//       src="./img/scrollToRotate_img/ring.png" 
//       class="rotateCircle"
//       id="rotatecircle"/>
//   </div>
// </div>
