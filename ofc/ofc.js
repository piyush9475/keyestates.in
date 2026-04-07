function toggleMenu() {
  alert("Menu clicked");
}

const projects = [
  {
    name:"Altamount",
    location:"EM Bypass, Kolkata",
    price:"₹2.7Cr",
    type:"office",
    status:"new",
    image:"https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=800"
  },
  {
    name:"Ambuja Ecospace",
    location:"New Town",
    price:"₹55L",
    type:"office",
    status:"ready",
    image:"https://images.unsplash.com/photo-1497366216548-37526070297c?w=800"
  },
  {
    name:"Amta Industrial Park",
    location:"Howrah",
    price:"₹9Cr",
    type:"warehouse",
    status:"ready",
    image:"https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800"
  },
  {
    name:"Elita Chambers",
    location:"New Town",
    price:"₹79L",
    type:"retail",
    status:"under",
    image:"https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800"
  },
  {
    name: "Emami Business Bay",
    location: "Sector V",
    price: "₹ 1.40 Cr - 7 Cr",
    type: "retail",
    status: "under",
    statusText: "Under Construction",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c"
  },
  {
    name: "Godrej Genesis",
    location: "Sector V",
    price: "₹ 3.99 Cr - 4.23 Cr",
    type: "office",
    status: "ready",
    statusText: "Ready",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
  },
   {
    name: "Keventer One",
    location: "Strand Road",
    price: "₹ 2 Cr Onwards",
    type: "office",
    status: "new",
    statusText: "New Launch",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e"
  },
  {
    name: "Mani Casadona",
    location: "New Town",
    price: "₹ 53 L - 1.22 Cr",
    type: "office",
    status: "under",
    statusText: "Under Construction",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab"
  },
   {
    name: "Martin Burn Business Park",
    location: "Salt Lake, Sector V",
    price: "₹ 7 L - 18 L",
    type: "office",
    status: "under",
    statusText: "Under Construction",
    image: "https://www.propvestors.in/wp-content/uploads/2023/06/martin-burn-business-park-project.webp"
  },
  {
    name: "Merlin The Summit",
    location: " Sector V",
    price: "₹ 1.12 Cr - 2.10 Cr",
    type: "office",
    status: "under",
    statusText: "Under Construction",
    image: "https://www.propvestors.in/wp-content/uploads/2023/06/merlin-the-summit-project.webp"
  },
  {
    name: "Merlin World Trade Centre",
    location: " Salt Lake, Sector V",
    price: "₹ 5.25 Cr Onwards",
    type: "office",
    status: "under",
    statusText: "Under Construction",
    image: "https://www.propvestors.in/wp-content/uploads/2025/06/world-trade-centre-banner.webp"
  },
  {
    name: "MG Squarentre",
    location: " Central ",
    price: "₹ 28 L - 4 Cr",
    type: "office",
    status: "under",
    statusText: "Under Construction",
    image: "https://www.propvestors.in/wp-content/uploads/2023/07/mg-square-project.jpeg"
  },
  {
    name: "Orbit Urban Park",
    location: " Action Area II, New Town",
    price: "₹ 28 L - 4 Cr",
    type: "office",
    status: "under",
    statusText: "Under Construction",
    image: "https://www.propvestors.in/wp-content/uploads/2023/07/mg-square-project.jpeg"
  },
  {
    name: "PARK NX",
    location: " Park Street, Central",
    price: "₹ 1.20 Cr Onwards",
    type: "office",
    status: "under",
    statusText: "Under Construction",
    image: "https://www.propvestors.in/wp-content/uploads/2023/09/ginni-park-nx-project.webp"
  },
  {
    name: "Primarc Chambers",
    location: " EM Bypass",
    price: "₹ 57 L Onwards",
    type: "office",
    status: "under",
    statusText: "Under Construction",
    image: "https://www.propvestors.in/wp-content/uploads/2023/06/Primarc-Chamber-EM-Bypass-Project-Image.webp"
  },
   {
    name: "PS Abacus",
    location: " Action Area II, New Town",
    price: "₹ 70 L - 1.45 Cr",
    type: "office",
    status: "under",
    statusText: "Under Construction",
    image: "https://www.propvestors.in/wp-content/uploads/2023/06/ps-abacus-project.webp"
  },
   {
    name: "PS Dominion",
    location: "Bhawanipur, Sarat Bose Road, Central",
    price: "₹ 1.25 Cr Onwards",
    type: "office",
    status: "under",
    statusText: "Under Construction",
    image: "https://www.propvestors.in/wp-content/uploads/2023/05/ps-dominion-project.webp"
  },
  {
    name: "PS Logistics Park",
    location: "Santragachi, Howrah",
    price: "₹ 1.76 Cr Onwards",
    type: "office",
    status: "under",
    statusText: "Under Construction",
    image: "https://www.propvestors.in/wp-content/uploads/2025/09/ps-logistics-park-banner.webp"
  },
  {
    name: "PS Qube",
    location: "Action Area II, New Town",
    price: "₹91 L Onwards",
    type: "office",
    status: "under",
    statusText: "Under Construction",
    image: "https://www.propvestors.in/wp-content/uploads/2026/02/ps-cube-banner.webp"
  },
  {
    name: "PS Srijan Corporate Park",
    location: "Salt Lake, Sector V",
    price: "₹4 L - 10 L",
    type: "office",
    status: "under",
    statusText: "Under Construction",
    image: "https://www.propvestors.in/wp-content/uploads/2023/06/ps-srijan-corporate-park-project-1.webp"
  },
  {
    name: "PS Srijan Tech Park",
    location: "Salt Lake, Sector V",
    price: "₹ 8 L - 4.69 Cr",
    type: "office",
    status: "under",
    statusText: "Under Construction",
    image: "https://www.propvestors.in/wp-content/uploads/2023/06/ps-srijan-techpark-banner.webp"
  },
   {
    name: "Q Industrial Park",
    location: "Belmuri, Dhaniakhali",
    price: "₹ 1 Cr Onwards",
    type: "office",
    status: "under",
    statusText: "Under Construction",
    image: "https://www.propvestors.in/wp-content/uploads/2025/08/q-industrial-park-banner.webp"
  },
  {
    name: "Shree RSH Crest",
    location: "Action Area II, New Town",
    price: "₹ 36 L Onwards",
    type: "office",
    status: "under",
    statusText: "Under Construction",
    image: "https://www.propvestors.in/wp-content/uploads/2023/08/rsh-crest-project.webp"
  },
   {
    name: "Siddha Esplanade",
    location: "Esplanade, Central",
    price: "₹ 84 L - 1.88 Cr",
    type: "office",
    status: "under",
    statusText: "Under Construction",
    image: "https://www.propvestors.in/wp-content/uploads/2025/04/Siddha-Esplanade-Central-Esplanade-Project-Image-5.webp"
  },
  {
    name: "Soham Industrial Hub",
    location: "Kazipara, Barasat",
    price: "₹ 1.70 Cr Onwards",
    type: "office",
    status: "under",
    statusText: "Under Construction",
    image: "https://www.propvestors.in/wp-content/uploads/2024/09/Soham-Industrial-Hub-Kazipara-Barasat-Project-Image.webp"
  },
   {
    name: "Soham Prime Spaces",
    location: "Central",
    price: "₹ 18 L Onwards",
    type: "office",
    status: "under",
    statusText: "Under Construction",
    image: "https://www.propvestors.in/wp-content/uploads/2023/08/soham-prime-spaces-project.webp"
  },
   {
    name: "Soham Syner G",
    location: "Action Area II, New Town",
    price: "₹ 82 L - 1.17 Cr",
    type: "office",
    status: "under",
    statusText: "Under Construction",
    image: "https://www.propvestors.in/wp-content/uploads/2024/05/Soham-SynerG-Action-Area-II-New-Town-Projct-Image-.webp"
  },
   {
    name: "Srijan Industrial Logistic Park – Alampur",
    location: "Alampur, Hooghly",
    price: "₹ On Request",
    type: "office",
    status: "under",
    statusText: "Under Construction",
    image: "https://www.propvestors.in/wp-content/uploads/2024/01/Srijan-Industrial-Logistic-Park-Alampur-Hooghly-Prop-Vestors-Project-Image.webp"
  },
  {
    name: "Srijan Industrial Logistic Park – BT Road",
    location: "B.T. Road",
    price: "₹ On Request",
    type: "office",
    status: "under",
    statusText: "Under Construction",
    image: "https://www.propvestors.in/wp-content/uploads/2023/07/srijan-industrial-logistic-project.webp"
  },
  {
    name: "Srijan Intellia Business Park",
    location: "Park Circus, Central",
    price: "₹ 2.20 Cr Onwards",
    type: "office",
    status: "under",
    statusText: "Under Construction",
    image: "https://www.propvestors.in/wp-content/uploads/2023/06/srijan-intellia-project.webp"
  },
   {
    name: "Srijan Logos",
    location: "AJC Bose Road, Central",
    price: "₹ 1.30 Cr - 5.96 Cr",
    type: "office",
    status: "under",
    statusText: "Under Construction",
    image: "https://www.propvestors.in/wp-content/uploads/2023/06/srijan-logos-project.webp"
  },
  
  {
    name: "Tashvi Central",
    location: "Rajarhat",
    price: "₹ 37 L Onwards",
    type: "office",
    status: "under",
    statusText: "Under Construction",
    image: "https://www.propvestors.in/wp-content/uploads/2025/07/tashvi-central-banner.webp"
  },
   
  {
    name: "Tata Avenida Plaza",
    location: "New Town, Action Area II",
    price: "₹ On Request",
    type: "office",
    status: "under",
    statusText: "Under Construction",
    image: "https://www.propvestors.in/wp-content/uploads/2023/12/Tata-Avenida-Plaza-New-Town-Action-Area-II-Prop-Vestors-Project-Image.webp"
  },
   {
    name: "Tata Boulevard",
    location: "Action Area II, New Town",
    price: "₹ 29 L - 82 L",
    type: "office",
    status: "under",
    statusText: "Under Construction",
    image: "https://www.propvestors.in/wp-content/uploads/2024/09/Tata-Bolevard-Action-Area-II-New-Town-Project-Image-1.webp"
  },
  {
    name: "The Nostalgia",
    location: " Action Area I, New Town",
    price: "₹ 9 L Onwards",
    type: "office",
    status: "under",
    statusText: "Under Construction",
    image: "https://www.propvestors.in/wp-content/uploads/2023/07/sun-articus-noatalgia-project.webp"
  },
   {
    name: "West Walk",
    location: " Esplanade, Central",
    price: "₹ 70 L Onwards",
    type: "office",
    status: "under",
    statusText: "Under Construction",
    image: "https://www.propvestors.in/wp-content/uploads/2025/01/West-Walk-Central-Strand-Road-Project-Image-7.webp"
  },
  {
    name: "Arch Starwood",
    location: "Chinar Park, Rajarhat",
    price: "₹ 38 L - 1.05 Cr",
    type: "office",
    status: "under",
    statusText: "Under Construction",
    image: "https://www.propvestors.in/wp-content/uploads/2025/07/tashvi-central-banner.webp"
  },

];

const grid = document.getElementById("grid");

function display(data){
  grid.innerHTML="";
  data.forEach(p=>{
    grid.innerHTML+=`
    <div class="project-card" onclick="openProject('${p.name}')">
      <div class="project-img">
        <img src="${p.image}">
      </div>
      <div class="project-content">
        <h3>${p.name}</h3>
        <p>📍 ${p.location}</p>
        <p class="price">${p.price}</p>
        <div class="status-indicator ${p.status}"></div>
      </div>
    </div>`;
  });
}

function showSuggestions() {
  let inputEl = document.getElementById("searchInput");
  let box = document.getElementById("suggestions");

  if (!inputEl || !box) return; // 🔥 prevents crash

  let input = inputEl.value.toLowerCase();

  box.innerHTML = "";

  if (!input) {
    box.style.display = "none";
    return;
  }

  let filtered = projects.filter(p =>
    p.name.toLowerCase().includes(input) ||
    p.location.toLowerCase().includes(input)
  );

  filtered.forEach(p => {
    let div = document.createElement("div");

    div.innerHTML = `${p.name} - ${p.location}`;

    div.onclick = () => {
      openProject(p.name);
      box.style.display = "none";
    };

    box.appendChild(div);
  });

  box.style.display = "block";
}
// SEARCH BUTTON
function searchProject() {
  let input = document.getElementById("searchInput").value.toLowerCase();

  let match = projects.find(p =>
    p.name.toLowerCase().includes(input) ||
    p.location.toLowerCase().includes(input)
  );

  if (match) {
    openProject(match.name);
  } else {
    alert("Project not found");
  }
}

// MENU
function toggleMenu() {
  alert("Menu clicked");
}
display(projects);
