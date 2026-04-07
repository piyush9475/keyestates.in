const projects = [
  {
    name: "Purti Veda",
    dev: "Purti Realty",
    location: "Action Area I, New Town",
    price: "₹ 90L - 1.3Cr",
    img: "https://www.propvestors.in/wp-content/uploads/2021/05/purti-realty-purti-veda-elevation.webp"
  },
  {
    name: "PS One 10",
    dev: "PS Group",
    location: "Action Area I, New Town",
    price: "₹ 4.8Cr - 5.2Cr",
    img: "https://www.propvestors.in/wp-content/uploads/2021/05/one-10-banner-1.webp"
  },
  {
    name: "Elita Garden Vista",
    dev: "JB Group",
    location: "Action Area III",
    price: "₹ 62L - 1.05Cr",
    img: "https://www.propvestors.in/wp-content/uploads/2021/05/shapoorji-pallonji-elita-garden-vista-banner.webp"
  }
];

const container = document.getElementById("projects");

projects.forEach(p => {
  container.innerHTML += `
    <div class="col-md-4">
      <div class="project-card">
        <div class="project-img">
          <img src="${p.img}">
        </div>
        <div class="project-info">
          <h5>${p.name}</h5>
          <p>${p.dev}</p>
          <p>${p.location}</p>
          <p class="price">${p.price}</p>
        </div>
      </div>
    </div>
  `;
});