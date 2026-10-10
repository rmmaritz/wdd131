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

// Load saved data when page opens
window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("inquiry-name").value = localStorage.getItem("inquiryName") || "";
  document.getElementById("inquiry-email").value = localStorage.getItem("inquiryEmail") || "";
  document.getElementById("inquiry-subject").value = localStorage.getItem("inquirySubject") || "";
  document.getElementById("inquiry-message").value = localStorage.getItem("inquiryMessage") || "";
});

// Save data when form is submitted
document.getElementById("contact-form").addEventListener("submit", (e) => {
  e.preventDefault(); // prevent page reload for demo
  localStorage.setItem("inquiryName", document.getElementById("inquiry-name").value);
  localStorage.setItem("inquiryEmail", document.getElementById("inquiry-email").value);
  localStorage.setItem("inquirySubject", document.getElementById("inquiry-subject").value);
  localStorage.setItem("inquiryMessage", document.getElementById("inquiry-message").value);

  alert("Inquiry submitted! Your details are saved for next time.");
});