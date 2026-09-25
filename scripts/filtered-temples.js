const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "London England Temple",
    location: "London, United Kingdom",
    dedicated: "1958, September, 7",
    area: 42652,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/london-england-temple/london-england-temple-53699.jpg"
  },
  {
    templeName: "Johannesburg South Africa Temple",
    location: "Park Town, South Africa",
    dedicated: "1985, August, 24-25",
    area: 19184,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/johannesburg-south-africa-temple/johannesburg-south-africa-temple-22474.jpg"
  },
  {
    templeName: "Durban South Africa Temple",
    location: "Kwazulu-Natal, South Africa",
    dedicated: "2020, February, 16",
    area: 19860,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/durban-south-africa-temple/durban-south-africa-temple-7940.jpg"
  },
  {
    templeName: "Hong Kong China Temple",
    location: "Kowloon City, Hong Kong",
    dedicated: "1996, May, 26-27",
    area: 51921,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/hong-kong-china-temple/hong-kong-china-temple-28222.jpg"
  },
  {
    templeName: "Port-au-Prince Haiti Temple",
    location: "Petion-Ville, Haiti",
    dedicated: "2019, September, 1",
    area: 10396,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/port-au-prince-haiti-temple/port-au-prince-haiti-temple-57.jpg"
  },
];

const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

document.getElementById("lastmodifieddate").textContent = document.lastModified;

const menuButton = document.getElementById("menu");
const navList = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
  const isOpen = navList.classList.toggle("show");
  menuButton.textContent = isOpen ? "✖" : "☰";
});

function createTempleCard(temple) {
  const card = document.createElement("section");
  card.classList.add("temple-card");

  card.innerHTML = `
    <h2>${temple.templeName}</h2>
    <p><strong>Location:</strong> ${temple.location}</p>
    <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
    <p><strong>Size:</strong> ${temple.area} sq ft</p>
    <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
  `;
  return card;
}

function displayTemples(filteredTemples) {
  const container = document.getElementById("temples");
  container.innerHTML = ""; // clear old content
  filteredTemples.forEach(t => container.appendChild(createTempleCard(t)));
}

displayTemples(temples);

function getYear(dateString) {
  const match = dateString.match(/\d{4}/); // finds any 4-digit year
  return match ? parseInt(match[0]) : 0;
}

document.getElementById("home").addEventListener("click", () => displayTemples(temples));

document.getElementById("old").addEventListener("click", () =>
  displayTemples(temples.filter(t => getYear(t.dedicated) < 1900))
);

document.getElementById("new").addEventListener("click", () =>
  displayTemples(temples.filter(t => getYear(t.dedicated) > 2000))
);

document.getElementById("large").addEventListener("click", () =>
  displayTemples(temples.filter(t => t.area > 90000))
);

document.getElementById("small").addEventListener("click", () =>
  displayTemples(temples.filter(t => t.area < 10000))
);
