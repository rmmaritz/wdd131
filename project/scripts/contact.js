// Read product from URL query string
const params = new URLSearchParams(window.location.search);
const product = params.get("product");

if (product) {
  // Auto-fill subject and message
  document.getElementById("inquiry-subject").value = `Inquiry about ${product}`;
  document.getElementById("inquiry-message").value =
    `Hello,\n\nI would like to know more about pricing and ordering for ${product}.\n\nThank you.`;
}

