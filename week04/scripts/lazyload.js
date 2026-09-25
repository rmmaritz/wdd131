document.getElementById("lastModified").textContent =
  "Last Modified: " + document.lastModified

document.querySelectorAll("img").forEach(img => {
  img.addEventListener("load", () => {
    img.style.animation = "fadeIn 2s ease-in";
  });
});
