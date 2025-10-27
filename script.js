
  window.addEventListener("scroll", function () {
    const nav = document.querySelector(".nav");
    const pricingSection = document.querySelector(".pricing");

    const pricingTop = pricingSection.offsetTop;
    const scrollY = window.scrollY;

    if (scrollY >= pricingTop - 100) {
      nav.classList.add("active");
    } else {
      nav.classList.remove("active");
    }
  });

  const menuIcon = document.querySelector(".bars");
  const menu = document.querySelector(".menu");

  menuIcon.addEventListener("click", () => {
    menu.classList.toggle("active");
  });

