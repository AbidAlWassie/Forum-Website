window.onload = function() {
  const profileBtn = document.getElementById("profile");
  const profileContainer = document.getElementById("profileContainer");

  profileBtn.addEventListener("click", profileToggle);

  function profileToggle() {
    profileContainer.classList.toggle("hidden");
  }

  const navBtn = document.getElementById("navBtn");
  const mobileMenu = document.getElementById("mobile-menu");
  navBtn.addEventListener("click", navToggle);

  function navToggle() {
    mobileMenu.classList.toggle("hidden");
  }
}