window.onload = function() {
  const profileBtn = document.getElementById("profile");
  const profileContainer = document.getElementById("profileContainer");

  profileBtn.addEventListener("click", profileToggle);

  function profileToggle() {
    profileContainer.classList.toggle("hidden");
  }
}