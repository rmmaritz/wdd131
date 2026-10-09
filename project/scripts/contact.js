const params = new URLSearchParams(window.location.search);
const product = params.get("product");
const subjectField = document.getElementById("inquiry-subject");
const messageField = document.getElementById("inquiry-message");

if (product) {
  // Coming from products page → auto-fill and lock subject
  subjectField.value = `Inquiry about ${product}`;
  subjectField.readOnly = true;

  messageField.value = `Hello,\n\nI would like to know more about pricing and ordering for ${product}.\n\nThank you.`;
} else {
  // Coming directly to contact page → subject editable
  subjectField.readOnly = false;
}
