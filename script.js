const toggleBtn = document.querySelector(".toggle-btn");

toggleBtn.addEventListener("click", () => {
  document.querySelector(".navbar-links").classList.toggle("active");
});
