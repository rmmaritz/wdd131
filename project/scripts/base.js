const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

// Format the last modified date
const lastModifiedRaw = new Date(document.lastModified);
const options = {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit"
};
const formattedDate = lastModifiedRaw.toLocaleDateString("en-US", options);

document.getElementById("lastmodifieddate").textContent = formattedDate;

// Hamburger menu toggle
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");

  if (navLinks.classList.contains("show")) {
    menuToggle.textContent = "✖";
  } else {
    menuToggle.textContent = "☰";
  }
});

