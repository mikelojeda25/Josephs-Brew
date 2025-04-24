/************** TOGGLE BUTTON **************/
const navMenu = document.getElementById("nav-menu")
const navLink = document.querySelectorAll(".nav-link")
const hamburger = document.getElementById("hamburger")

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("left-[0]")
  hamburger.classList.toggle('ri-close-large-line')
})

navLink.forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.toggle("left-[0]")
    hamburger.classList.toggle('ri-close-large-line')
  })
});

/*************** SWIPER *******************/
const swiper = new Swiper('.swiper', {
  // Optional parameters
  speed:400,
  spaceBetween:30,
  autoplay:{
    delay:3000,
    disableOnInteraction:false
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  grabCursor: true,
  breakpoints: {
    640: {
      slidesPerView:1
    },
    768: {
      slidesPerView:2
    },
    1024: {
      slidesPerView:3
    },
  }

  
});

/*************** SHOW SCROLL UP *******************/
const scrollUp = () => {
  const scrollUpBtn = document.getElementById("scroll-up")

  if(window.scrollY >= 250) {
    scrollUpBtn.classList.remove("-bottom-1/2")
    scrollUpBtn.classList.add("bottom-4")
  } else {
    scrollUpBtn.classList.add("-bottom-1/2")
    scrollUpBtn.classList.remove("bottom-4")
  }
}
window.addEventListener("scroll", scrollUp)

/*************** HEADER DESIGN *******************/
const scrollHeader = () => {
  const header = document.getElementById("navbar")

  if(window.scrollY >= 250) {
    header.classList.add("border-b", "border-yellow-500")
  } else {
    header.classList.remove("border-b", "border-yellow-500")
  }
}
window.addEventListener("scroll", scrollHeader)

/*************** SCROLL SECTION ACTIVE *******************/
const activeLink = () => {
  const sections = document.querySelectorAll('section')
  const navLinks = document.querySelectorAll(".nav-link")

  let current = "home"

  const scrollY = window.pageYOffset

  sections.forEach(section => {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    if (scrollY >= sectionTop - 100 && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id")
    }
  })

  navLinks.forEach(item => {
    item.classList.remove("active")
    if (item.href.includes(`#${current}`)) {
      item.classList.add("active")
    }
  })
}

window.addEventListener("scroll", activeLink)

/*************** SCROLL REVEAL ANIMATION *******************/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 200,
  reset: true
})

sr.reveal(`.home__data, .about__top, .popular__top, .review__top, .review__swiper`)
sr.reveal(`.home__image`,{delay: 500, scale: 0.5})

sr.reveal(`.service__card, .popular__card`, {interval: 100})
sr.reveal(`.about__item__1-content, .about__item__2-img`, {origin: "right"})
sr.reveal(`.about__item__2-content, .about__item__1-img`, {origin: "left"})
