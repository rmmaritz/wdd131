const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

document.getElementById("lastmodifieddate").textContent = document.lastModified;

const menuButton = document.getElementById("menu");
const navList = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
  const isOpen = navList.classList.toggle("show");
  menuButton.textContent = isOpen ? "✖" : "☰";
});

