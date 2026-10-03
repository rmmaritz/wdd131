window.onload = () => {

  let count = localStorage.getItem("reviewCount") || 0;
  count++;
  localStorage.setItem("reviewCount", count);
  document.getElementById("counter").textContent = `Total Reviews: ${count}`;

  const params = new URLSearchParams(window.location.search);
  let output = "<h2>Review Details</h2><ul>";

  for (const [key, value] of params.entries()) {
    output += `<li><strong>${key}:</strong> ${value}</li>`;
  }

  output += "</ul>";
  document.getElementById("submittedData").innerHTML = output;
};
