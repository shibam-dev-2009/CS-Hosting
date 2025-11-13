document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".nav");
  const pricingSection = document.querySelector(".pricing");
  const menuIcon = document.querySelector(".bars");
  const menu = document.querySelector(".menu");
  const claimButtons = document.querySelectorAll(".pack .btn");

  // Scroll behavior
  window.addEventListener("scroll", function () {
    if (!pricingSection || !nav) return;

    const pricingTop = pricingSection.offsetTop;
    const scrollY = window.scrollY;

    if (scrollY >= pricingTop - 100) {
      nav.classList.add("active");
    } else {
      nav.classList.remove("active");
    }
  });

  // Mobile menu
  if (menuIcon && menu) {
    menuIcon.addEventListener("click", () => {
      menu.classList.toggle("active");
    });
  }

  // Claim buttons
  claimButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const pack = button.closest(".pack");
      if (!pack) return;

      const planName = pack.querySelector("h2")?.textContent || "";
      const planprice = pack.querySelector("h1")?.textContent || ""; // ✅ fixed
      const planDesc = pack.querySelector("p")?.textContent || "";
      const features = Array.from(pack.querySelectorAll("ul li")).map(
        (li) => li.textContent
      );

      const checkoutData = {
        price: planprice,
        name: planName,
        description: planDesc,
        features: features,
      };

      localStorage.setItem("checkoutPlan", JSON.stringify(checkoutData));
      window.location.href = "checkout.html";
    });
  });
});
