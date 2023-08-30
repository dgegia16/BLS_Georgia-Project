const cars = document.querySelector(".mainpage-ambulance-cards");
const users = [
  {
    image: "GlobalImages/BLS_FRONTLINE-200x227.jpg",
    title: "BLS Frontline",
    alt: "ambulance",
    href: "frontline-ambulance.html"
  },
  {
    image: "GlobalImages/BLS_MINIBUS-200x227.jpg",
    title: "Minibus",
    alt: "ambulance",
    href: "minibus.html"
  },
  {
    image: "GlobalImages/BLS_PTS-200x227.jpg",
    title: "Stretcher",
    alt: "ambulance",
    href: "PTS-stretcher.html"
  },
  {
    image: "GlobalImages/BLS_SECURE-200x227.jpg",
    title: "Secure",
    alt: "ambulance",
    href: "secure-transport.html"
  },
  {
    image: "GlobalImages/BLS_WAV-200x227.jpg",
    title: "WAV",
    alt: "ambulance",
    href:"wav.html"
  },
  {
    image: "GlobalImages/BLS_HDU-200x227.jpg",
    title: "BLS HDU",
    alt: "ambulance",
    href: "hdu-ambulance.html"
  },
];
for (let i = 0; i < users.length; i++) {
  let linkTitle = encodeURIComponent(users[i].title);
  
  if (users[i].title === "Stretcher") {
    linkTitle = encodeURIComponent("Stretcher");
  }

  cars.insertAdjacentHTML(
    "beforeend",
    `<a href="our-vehicles.html?title=${linkTitle}" class="card">
      <div class="card-image">
        <img src="${users[i].image}" alt="ambulance">
      </div>
      <div class="card-title">
        <h3>
          ${users[i].title}
        </h3>
      </div>
    </a>`
  );
}

document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {
      document.querySelector(".first-slide-f-title").classList.add("show");
  }, 500); 
});
document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {
  document.querySelector(".first-slide-s-title").classList.add("show");
}, 1250);
});
const cardElements = cars.querySelectorAll('.card');

cardElements.forEach((card, index) => {
  card.addEventListener('click', () => {
    
    const selectedUserData = users[index];
    
    changeContent(selectedUserData);
    
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const boxesToAnimate = document.querySelectorAll(".mainpage-info-section-box, .mainpage-info-section-vehicles-box");

  function animateBoxes() {
    boxesToAnimate.forEach((box) => {
      const boxPosition = box.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (boxPosition < windowHeight - 100) {
        box.classList.add("visible");
      }
    });
  }

  animateBoxes();

  window.addEventListener("scroll", animateBoxes);
});