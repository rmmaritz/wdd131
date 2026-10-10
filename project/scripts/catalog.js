// Product data array
const products = [
  {
    id: "leotard1",
    category: "leotards",
    name: "RAD Black Leotard",
    imageUrl: "images/leotard1.webp",
    description: "Comfortable and durable leotard for practice.",
    sizes: "8 - 14"
  },
  {
    id: "leotard2",
    category: "leotards",
    name: "Red Spider Strap Leotard",
    imageUrl: "images/leotard2.webp",
    description: "Spider strap leotard for stage performance.",
    sizes: "12 - 18"
  },
  {
    id: "tights1",
    category: "tights",
    name: "Footless Honey Tights",
    imageUrl: "images/tights1.webp",
    description: "For Contemporary Dance.",
    sizes: "8 - 14"
  },
  {
    id: "tights2",
    category: "tights",
    name: "Convertible Pink Tights",
    imageUrl: "images/tights2.webp",
    description: "Tights for Ballet Dancing.",
    sizes: "12 - 18"
  },
  {
    id: "accessory1",
    category: "accessories",
    name: "Shoe Covers",
    imageUrl: "images/accessory1.webp",
    description: "Shoe covers for protection of dance shoes.",
    sizes: "1 - 10"
  },
  {
    id: "accessory2",
    category: "accessories",
    name: "Hair Kit",
    imageUrl: "images/accessory2.webp",
    description: "Hair care kit for dancers.",
    sizes: "One Size"
  }
];

// Display function
function displayProducts(productArray) {
  const container = document.getElementById("catalog-container");
  container.innerHTML = ""; // clear old content

  productArray.forEach(product => {
    const card = `
      <div class="product-card">
        <img src="${product.imageUrl}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p>Sizes: ${product.sizes}</p>
        <button id="${product.id}-btn" class="secondary-btn">Inquire</button>
      </div>
    `;
    container.innerHTML += card;
  });

  // Attach redirect listeners after rendering
  productArray.forEach(product => {
    const btn = document.getElementById(`${product.id}-btn`);
    if (btn) {
      btn.addEventListener("click", () => {
        window.location.href = `contact.html?product=${encodeURIComponent(product.name)}`;
      });
    }
  });
}

// Filter functions 
function filterByCategory(category) {
  return products.filter(p => p.category === category);
}

// Utility: clear active state
function clearActiveFilters() {
  document.querySelectorAll(".catalog-filters button")
    .forEach(btn => btn.classList.remove("active-filter"));
}

// Handle page load with hash navigation
window.addEventListener("DOMContentLoaded", () => {
  const hash = window.location.hash.replace("#", "");
  clearActiveFilters();

  if (hash) {
    displayProducts(filterByCategory(hash));
    const btn = document.getElementById(`filter-${hash}`);
    if (btn) btn.classList.add("active-filter");
  } else {
    displayProducts(products);
    document.getElementById("show-all").classList.add("active-filter");
  }
});

// Show all
document.getElementById("show-all").addEventListener("click", () => {
  displayProducts(products);
  clearActiveFilters();
  document.getElementById("show-all").classList.add("active-filter");
  window.location.hash = ""; // reset hash
});

// Filter by category
document.getElementById("filter-leotards").addEventListener("click", () => {
  displayProducts(filterByCategory("leotards"));
  clearActiveFilters();
  document.getElementById("filter-leotards").classList.add("active-filter");
  window.location.hash = "leotards";
});

document.getElementById("filter-tights").addEventListener("click", () => {
  displayProducts(filterByCategory("tights"));
  clearActiveFilters();
  document.getElementById("filter-tights").classList.add("active-filter");
  window.location.hash = "tights";
});

document.getElementById("filter-accessories").addEventListener("click", () => {
  displayProducts(filterByCategory("accessories"));
  clearActiveFilters();
  document.getElementById("filter-accessories").classList.add("active-filter");
  window.location.hash = "accessories";
});
