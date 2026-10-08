// Newsletter form submission
document.getElementById("newsletter-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const email = document.getElementById("email").value;
  alert(`Thank you for subscribing, ${email}!`);
});

// Product buttons
document.getElementById("product1-btn").addEventListener("click", () => {
  window.location.href = "products.html#leotards";
});
document.getElementById("product2-btn").addEventListener("click", () => {
  window.location.href = "products.html#tights";
});
document.getElementById("product3-btn").addEventListener("click", () => {
  window.location.href = "products.html#accessories";
});