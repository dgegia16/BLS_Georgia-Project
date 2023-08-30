document.addEventListener("DOMContentLoaded", function () {
    const boxesToAnimate = document.querySelectorAll(".iframe-container");
    let currentIndex = 0; 
  
    function showNextBox() {
      if (currentIndex < boxesToAnimate.length) {
        const box = boxesToAnimate[currentIndex];
        box.classList.add("visible");
        currentIndex++;
        setTimeout(showNextBox, 750);
      }
    }
  
    showNextBox();
  });