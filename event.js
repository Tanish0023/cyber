window.onload = function () {
  const aptTitle = document.querySelector(".apt-title");
  aptTitle.style.opacity = "1";
  aptTitle.style.transform = "translateY(0)";
  aptTitle.style.textShadow = "0px 0px 0px rgba(255, 255, 255, 0.5)";

  setTimeout(function () {
    aptTitle.style.textShadow = "30px 30px 40px rgba(255, 255, 255, 0.7)";
    if (window.innerWidth < 840) {
      aptTitle.style.textShadow = "10px 12px 30px rgba(255, 255, 255, 0.7)";
    }
  }, 500); // Change the delay to 1000 milliseconds (1 second)
};

function openModal(modalId) {
  console.log(modalId);

  document.getElementById(modalId).classList.remove("hidden");
  document.getElementById(modalId).classList.add("flex");
}

function closeModal(modalId) {
  console.log(modalId);

  document.getElementById(modalId).classList.remove("flex");
  document.getElementById(modalId).classList.add("hidden");
}
