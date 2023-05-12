const sideMenu = document.querySelector("aside");
const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const themeToggler = document.querySelector(".theme-toggler");

// Show sidebar
menuBtn.addEventListener("click", () => {
  sideMenu.style.display = "block";
});

// Close sidebar
closeBtn.addEventListener("click", () => {
  sideMenu.style.display = "none";
});

//Change theme
themeToggler.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme-variables");

  themeToggler.querySelector("span").classList.toggle("active");
});
