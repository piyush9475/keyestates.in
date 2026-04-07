
// ===================== ZONES =====================
// ===================== ZONES =====================
const zones = [
  { name: "New Town", projects: 38, img: "https://www.propvestors.in/wp-content/uploads/2021/05/biswa-bangla.webp", link: "newtown.html" },
  { name: "EM Bypass", projects: 27, img: "https://www.propvestors.in/wp-content/uploads/2021/05/em-bypass-3-150x150.webp", link: "embypass.html" },
  { name: "Southern Bypass", projects: 23, img: "https://www.propvestors.in/wp-content/uploads/2021/05/southern-bypass-2-150x150.webp", link: "southernbypass.html" },
  { name: "Alipore", projects: 7, img: "https://www.propvestors.in/wp-content/uploads/2021/05/alipore-150x150.webp", link: "alipore.html" },
  { name: "Maheshtala", projects: 38, img: "https://www.propvestors.in/wp-content/uploads/2021/05/maheshtala-150x150.webp", link: "maheshtala.html" },
  { name: "BT Road", projects: 27, img: "https://www.propvestors.in/wp-content/uploads/2021/05/bt-road-150x150.webp", link: "btroad.html" },
  { name: "Dum Dum", projects: 23, img: "https://www.propvestors.in/wp-content/uploads/2021/05/dumdum-1-150x150.webp", link: "dumdum.html" },
  { name: "Central", projects: 7, img: "https://www.propvestors.in/wp-content/uploads/2021/07/central-150x150.webp", link: "central.html" },
  { name: "Howrah", projects: 7, img: "https://www.propvestors.in/wp-content/uploads/2021/05/howrah-150x150.webp", link: "howrah.html" },
  { name: "Hooghly", projects: 38, img: "https://www.propvestors.in/wp-content/uploads/2021/05/hooghly-150x150.webp", link: "hooghly.html" },
  { name: "Tollygunge", projects: 27, img: "https://www.propvestors.in/wp-content/uploads/2021/05/tollygunge-1-150x150.webp", link: "tollygunge.html" },
  { name: "Rajarhat", projects: 23, img: "https://www.propvestors.in/wp-content/uploads/2021/05/rajarhat-150x150.webp", link: "rajarhat.html" },
  { name: "Joka", projects: 7, img: "https://www.propvestors.in/wp-content/uploads/2021/05/joka-150x150.webp", link: "joka.html" },
  { name: "Madhyamgram", projects: 38, img: "https://www.propvestors.in/wp-content/uploads/2021/05/madhyamgram-150x150.webp", link: "madhyamgram.html" },
  { name: "Sector v", projects: 8, img: "https://www.propvestors.in/wp-content/uploads/2021/05/sector-v-150x150.webp", link: "sectorv.html" }
];

const zoneContainer = document.getElementById("zoneContainer");

if (zoneContainer) {
  zones.forEach(zone => {
    const card = document.createElement("div");
    card.className = "zone-card";

    // ✅ CLICK REDIRECT (same folder)
    card.onclick = () => {
      window.location.href = zone.link;
    };

    card.innerHTML = `
      <img src="${zone.img}" alt="${zone.name}">
      <div class="zone-info">
        <h3>${zone.name}</h3>
        <p>${zone.projects} Projects</p>
      </div>
    `;

    zoneContainer.appendChild(card);
  });
}

// ===================== CALLBACK FORM =====================
document.getElementById("callbackForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name")?.value;
  const email = document.getElementById("email")?.value;
  const phone = document.getElementById("phone")?.value;

  alert(`Callback Requested!\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}`);

  this.reset();
});






// ===================== PROJECTS =====================
const projects = [
  {
    name: "Adi Guru Residency",
    builder: "Diganta Construction",
    location: "Action Area II, New Town",
    price: "₹ 59 L Onwards",
    type: "2, 3 BHK Apartment",
    status: "New Launch",
    class: "launch",
    img: "https://www.propvestors.in/wp-content/uploads/2024/09/Adi-Guru-Residency-Action-Area-II-New-Town-Project-Image-7.webp"
  },
  {
    name: "Alcove Regency",
    builder: "Alcove Realty",
    location: " Topsia EM Bypass",
    price: "₹ 1.63 Cr Onwards",
    type: "3, 4 BHK Apartment",
    status: "Ready to Move",
    class: "ready",
    img: "https://www.propvestors.in/wp-content/uploads/2023/07/alove-regency-project.webp"
  },
  {
    name: "Amazonia",
    builder: "Kosmic Estate",
    location: "Rajarhat Main Road , Rajarhat",
    price: "₹ 57 L - 1.08 Cr",
    type: "2, 3, 4 BHK Apartment",
    status: "New Launch",
    class: "launch",
    img: "https://www.propvestors.in/wp-content/uploads/2022/11/kosmic-the-amazonia-project.webp"
  },
    {
    name: "Ambuja Udyatt",
    builder: "Ambuja Udyatt",
    location: "chingrighata EM Bypass",
    price: "₹ 4.50 cr Onwards",
    type: "3, 4 BHK Apartment",
    status: "New Launch",
    class: "launch",
    img: "https://www.propvestors.in/wp-content/uploads/2026/01/ambuja-udyatt-banner.webp"
  },
  {
    name: "Alcove Regency",
    builder: "Alcove Realty",
    location: "EM Bypass",
    price: "₹ 1.63 Cr Onwards",
    type: "3, 4 BHK Apartment",
    status: "Ready to Move",
    class: "ready",
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400"
  },
  {
    name: "Amazonia",
    builder: "Kosmic Estate",
    location: "Rajarhat",
    price: "₹ 57 L - 1.08 Cr",
    type: "2, 3, 4 BHK Apartment",
    status: "New Launch",
    class: "launch",
    img: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=400"
  },
    {
    name: "Adi Guru Residency",
    builder: "Diganta Construction",
    location: "New Town",
    price: "₹ 59 L Onwards",
    type: "2, 3 BHK Apartment",
    status: "New Launch",
    class: "launch",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400"
  },
  {
    name: "Alcove Regency",
    builder: "Alcove Realty",
    location: "EM Bypass",
    price: "₹ 1.63 Cr Onwards",
    type: "3, 4 BHK Apartment",
    status: "Ready to Move",
    class: "ready",
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400"
  },
  {
    name: "Amazonia",
    builder: "Kosmic Estate",
    location: "Rajarhat",
    price: "₹ 57 L - 1.08 Cr",
    type: "2, 3, 4 BHK Apartment",
    status: "New Launch",
    class: "launch",
    img: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=400"
  },
    {
    name: "Adi Guru Residency",
    builder: "Diganta Construction",
    location: "New Town",
    price: "₹ 59 L Onwards",
    type: "2, 3 BHK Apartment",
    status: "New Launch",
    class: "launch",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400"
  },
  {
    name: "Alcove Regency",
    builder: "Alcove Realty",
    location: "EM Bypass",
    price: "₹ 1.63 Cr Onwards",
    type: "3, 4 BHK Apartment",
    status: "Ready to Move",
    class: "ready",
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400"
  },
  {
    name: "Alcove Regency",
    builder: "Alcove Realty",
    location: "EM Bypass",
    price: "₹ 1.63 Cr Onwards",
    type: "3, 4 BHK Apartment",
    status: "Ready to Move",
    class: "ready",
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400"
  },
  {
    name: "Amazonia",
    builder: "Kosmic Estate",
    location: "Rajarhat",
    price: "₹ 57 L - 1.08 Cr",
    type: "2, 3, 4 BHK Apartment",
    status: "New Launch",
    class: "launch",
    img: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=400"
  },
    {
    name: "Adi Guru Residency",
    builder: "Diganta Construction",
    location: "New Town",
    price: "₹ 59 L Onwards",
    type: "2, 3 BHK Apartment",
    status: "New Launch",
    class: "launch",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400"
  },
  {
    name: "Alcove Regency",
    builder: "Alcove Realty",
    location: "EM Bypass",
    price: "₹ 1.63 Cr Onwards",
    type: "3, 4 BHK Apartment",
    status: "Ready to Move",
    class: "ready",
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400"
  },
  {
    name: "Amazonia",
    builder: "Kosmic Estate",
    location: "Rajarhat",
    price: "₹ 57 L - 1.08 Cr",
    type: "2, 3, 4 BHK Apartment",
    status: "New Launch",
    class: "launch",
    img: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=400"
  },
    {
    name: "Adi Guru Residency",
    builder: "Diganta Construction",
    location: "New Town",
    price: "₹ 59 L Onwards",
    type: "2, 3 BHK Apartment",
    status: "New Launch",
    class: "launch",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400"
  },
  {
    name: "Alcove Regency",
    builder: "Alcove Realty",
    location: "EM Bypass",
    price: "₹ 1.63 Cr Onwards",
    type: "3, 4 BHK Apartment",
    status: "Ready to Move",
    class: "ready",
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400"
  },
  {
    name: "Amazonia",
    builder: "Kosmic Estate",
    location: "Rajarhat",
    price: "₹ 57 L - 1.08 Cr",
    type: "2, 3, 4 BHK Apartment",
    status: "New Launch",
    class: "launch",
    img: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=400"
  },
    {
    name: "Adi Guru Residency",
    builder: "Diganta Construction",
    location: "New Town",
    price: "₹ 59 L Onwards",
    type: "2, 3 BHK Apartment",
    status: "New Launch",
    class: "launch",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400"
  },
  {
    name: "Alcove Regency",
    builder: "Alcove Realty",
    location: "EM Bypass",
    price: "₹ 1.63 Cr Onwards",
    type: "3, 4 BHK Apartment",
    status: "Ready to Move",
    class: "ready",
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400"
  },
  {
    name: "Alcove Regency",
    builder: "Alcove Realty",
    location: "EM Bypass",
    price: "₹ 1.63 Cr Onwards",
    type: "3, 4 BHK Apartment",
    status: "Ready to Move",
    class: "ready",
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400"
  },
  {
    name: "Amazonia",
    builder: "Kosmic Estate",
    location: "Rajarhat",
    price: "₹ 57 L - 1.08 Cr",
    type: "2, 3, 4 BHK Apartment",
    status: "New Launch",
    class: "launch",
    img: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=400"
  },
    {
    name: "Adi Guru Residency",
    builder: "Diganta Construction",
    location: "New Town",
    price: "₹ 59 L Onwards",
    type: "2, 3 BHK Apartment",
    status: "New Launch",
    class: "launch",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400"
  },
  {
    name: "Alcove Regency",
    builder: "Alcove Realty",
    location: "EM Bypass",
    price: "₹ 1.63 Cr Onwards",
    type: "3, 4 BHK Apartment",
    status: "Ready to Move",
    class: "ready",
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400"
  },
  {
    name: "Amazonia",
    builder: "Kosmic Estate",
    location: "Rajarhat",
    price: "₹ 57 L - 1.08 Cr",
    type: "2, 3, 4 BHK Apartment",
    status: "New Launch",
    class: "launch",
    img: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=400"
  },
    {
    name: "Adi Guru Residency",
    builder: "Diganta Construction",
    location: "New Town",
    price: "₹ 59 L Onwards",
    type: "2, 3 BHK Apartment",
    status: "New Launch",
    class: "launch",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400"
  },
  {
    name: "Alcove Regency",
    builder: "Alcove Realty",
    location: "EM Bypass",
    price: "₹ 1.63 Cr Onwards",
    type: "3, 4 BHK Apartment",
    status: "Ready to Move",
    class: "ready",
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400"
  },
  {
    name: "Amazonia",
    builder: "Kosmic Estate",
    location: "Rajarhat",
    price: "₹ 57 L - 1.08 Cr",
    type: "2, 3, 4 BHK Apartment",
    status: "New Launch",
    class: "launch",
    img: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=400"
  },
    {
    name: "Adi Guru Residency",
    builder: "Diganta Construction",
    location: "New Town",
    price: "₹ 59 L Onwards",
    type: "2, 3 BHK Apartment",
    status: "New Launch",
    class: "launch",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400"
  },
  {
    name: "Alcove Regency",
    builder: "Alcove Realty",
    location: "EM Bypass",
    price: "₹ 1.63 Cr Onwards",
    type: "3, 4 BHK Apartment",
    status: "Ready to Move",
    class: "ready",
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400"
  },
  {
    name: "Amazonia",
    builder: "Kosmic Estate",
    location: "Rajarhat",
    price: "₹ 57 L - 1.08 Cr",
    type: "2, 3, 4 BHK Apartment",
    status: "New Launch",
    class: "launch",
    img: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=400"
  },
    {
    name: "Adi Guru Residency",
    builder: "Diganta Construction",
    location: "New Town",
    price: "₹ 59 L Onwards",
    type: "2, 3 BHK Apartment",
    status: "New Launch",
    class: "launch",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400"
  },
  {
    name: "Alcove Regency",
    builder: "Alcove Realty",
    location: "EM Bypass",
    price: "₹ 1.63 Cr Onwards",
    type: "3, 4 BHK Apartment",
    status: "Ready to Move",
    class: "ready",
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400"
  },
  {
    name: "Amazonia",
    builder: "Kosmic Estate",
    location: "Rajarhat",
    price: "₹ 57 L - 1.08 Cr",
    type: "2, 3, 4 BHK Apartment",
    status: "New Launch",
    class: "launch",
    img: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=400"
  },
    {
    name: "Adi Guru Residency",
    builder: "Diganta Construction",
    location: "New Town",
    price: "₹ 59 L Onwards",
    type: "2, 3 BHK Apartment",
    status: "New Launch",
    class: "launch",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400"
  },
  {
    name: "Alcove Regency",
    builder: "Alcove Realty",
    location: "EM Bypass",
    price: "₹ 1.63 Cr Onwards",
    type: "3, 4 BHK Apartment",
    status: "Ready to Move",
    class: "ready",
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400"
  },
  {
    name: "Amazonia",
    builder: "Kosmic Estate",
    location: "Rajarhat",
    price: "₹ 57 L - 1.08 Cr",
    type: "2, 3, 4 BHK Apartment",
    status: "New Launch",
    class: "launch",
    img: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=400"
  },
    {
    name: "Adi Guru Residency",
    builder: "Diganta Construction",
    location: "New Town",
    price: "₹ 59 L Onwards",
    type: "2, 3 BHK Apartment",
    status: "New Launch",
    class: "launch",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400"
  },
  {
    name: "Alcove Regency",
    builder: "Alcove Realty",
    location: "EM Bypass",
    price: "₹ 1.63 Cr Onwards",
    type: "3, 4 BHK Apartment",
    status: "Ready to Move",
    class: "ready",
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400"
  },
  {
    name: "Amazonia",
    builder: "Kosmic Estate",
    location: "Rajarhat",
    price: "₹ 57 L - 1.08 Cr",
    type: "2, 3, 4 BHK Apartment",
    status: "New Launch",
    class: "launch",
    img: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=400"
  },
    {
    name: "Adi Guru Residency",
    builder: "Diganta Construction",
    location: "New Town",
    price: "₹ 59 L Onwards",
    type: "2, 3 BHK Apartment",
    status: "New Launch",
    class: "launch",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400"
  },
  {
    name: "Alcove Regency",
    builder: "Alcove Realty",
    location: "EM Bypass",
    price: "₹ 1.63 Cr Onwards",
    type: "3, 4 BHK Apartment",
    status: "Ready to Move",
    class: "ready",
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400"
  },
  {
    name: "Amazonia",
    builder: "Kosmic Estate",
    location: "Rajarhat",
    price: "₹ 57 L - 1.08 Cr",
    type: "2, 3, 4 BHK Apartment",
    status: "New Launch",
    class: "launch",
    img: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=400"
  },
    {
    name: "Adi Guru Residency",
    builder: "Diganta Construction",
    location: "New Town",
    price: "₹ 59 L Onwards",
    type: "2, 3 BHK Apartment",
    status: "New Launch",
    class: "launch",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400"
  },
  {
    name: "Alcove Regency",
    builder: "Alcove Realty",
    location: "EM Bypass",
    price: "₹ 1.63 Cr Onwards",
    type: "3, 4 BHK Apartment",
    status: "Ready to Move",
    class: "ready",
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400"
  },
  {
    name: "Amazonia",
    builder: "Kosmic Estate",
    location: "Rajarhat",
    price: "₹ 57 L - 1.08 Cr",
    type: "2, 3, 4 BHK Apartment",
    status: "New Launch",
    class: "launch",
    img: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=400"
  },
    {
    name: "Adi Guru Residency",
    builder: "Diganta Construction",
    location: "New Town",
    price: "₹ 59 L Onwards",
    type: "2, 3 BHK Apartment",
    status: "New Launch",
    class: "launch",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400"
  },
  {
    name: "Alcove Regency",
    builder: "Alcove Realty",
    location: "EM Bypass",
    price: "₹ 1.63 Cr Onwards",
    type: "3, 4 BHK Apartment",
    status: "Ready to Move",
    class: "ready",
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400"
  },
  {
    name: "Amazonia",
    builder: "Kosmic Estate",
    location: "Rajarhat",
    price: "₹ 57 L - 1.08 Cr",
    type: "2, 3, 4 BHK Apartment",
    status: "New Launch",
    class: "launch",
    img: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=400"
  },
    {
    name: "Adi Guru Residency",
    builder: "Diganta Construction",
    location: "New Town",
    price: "₹ 59 L Onwards",
    type: "2, 3 BHK Apartment",
    status: "New Launch",
    class: "launch",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400"
  },
  {
    name: "Alcove Regency",
    builder: "Alcove Realty",
    location: "EM Bypass",
    price: "₹ 1.63 Cr Onwards",
    type: "3, 4 BHK Apartment",
    status: "Ready to Move",
    class: "ready",
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400"
  },
  {
    name: "Amazonia",
    builder: "Kosmic Estate",
    location: "Rajarhat",
    price: "₹ 57 L - 1.08 Cr",
    type: "2, 3, 4 BHK Apartment",
    status: "New Launch",
    class: "launch",
    img: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=400"
  },
    {
    name: "Adi Guru Residency",
    builder: "Diganta Construction",
    location: "New Town",
    price: "₹ 59 L Onwards",
    type: "2, 3 BHK Apartment",
    status: "New Launch",
    class: "launch",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400"
  },
  {
    name: "Alcove Regency",
    builder: "Alcove Realty",
    location: "EM Bypass",
    price: "₹ 1.63 Cr Onwards",
    type: "3, 4 BHK Apartment",
    status: "Ready to Move",
    class: "ready",
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400"
  },
  {
    name: "Amazonia",
    builder: "Kosmic Estate",
    location: "Rajarhat",
    price: "₹ 57 L - 1.08 Cr",
    type: "2, 3, 4 BHK Apartment",
    status: "New Launch",
    class: "launch",
    img: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=400"
  },
    {
    name: "Adi Guru Residency",
    builder: "Diganta Construction",
    location: "New Town",
    price: "₹ 59 L Onwards",
    type: "2, 3 BHK Apartment",
    status: "New Launch",
    class: "launch",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400"
  },
  {
    name: "Alcove Regency",
    builder: "Alcove Realty",
    location: "EM Bypass",
    price: "₹ 1.63 Cr Onwards",
    type: "3, 4 BHK Apartment",
    status: "Ready to Move",
    class: "ready",
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400"
  },
  {
    name: "Amazonia",
    builder: "Kosmic Estate",
    location: "Rajarhat",
    price: "₹ 57 L - 1.08 Cr",
    type: "2, 3, 4 BHK Apartment",
    status: "New Launch",
    class: "launch",
    img: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=400"
  },
    {
    name: "Adi Guru Residency",
    builder: "Diganta Construction",
    location: "New Town",
    price: "₹ 59 L Onwards",
    type: "2, 3 BHK Apartment",
    status: "New Launch",
    class: "launch",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400"
  },
  {
    name: "Alcove Regency",
    builder: "Alcove Realty",
    location: "EM Bypass",
    price: "₹ 1.63 Cr Onwards",
    type: "3, 4 BHK Apartment",
    status: "Ready to Move",
    class: "ready",
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400"
  },
  {
    name: "Amazonia",
    builder: "Kosmic Estate",
    location: "Rajarhat",
    price: "₹ 57 L - 1.08 Cr",
    type: "2, 3, 4 BHK Apartment",
    status: "New Launch",
    class: "launch",
    img: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=400"
  },
    {
    name: "Adi Guru Residency",
    builder: "Diganta Construction",
    location: "New Town",
    price: "₹ 59 L Onwards",
    type: "2, 3 BHK Apartment",
    status: "New Launch",
    class: "launch",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400"
  },
  {
    name: "Alcove Regency",
    builder: "Alcove Realty",
    location: "EM Bypass",
    price: "₹ 1.63 Cr Onwards",
    type: "3, 4 BHK Apartment",
    status: "Ready to Move",
    class: "ready",
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400"
  },
  {
    name: "Amazonia",
    builder: "Kosmic Estate",
    location: "Rajarhat",
    price: "₹ 57 L - 1.08 Cr",
    type: "2, 3, 4 BHK Apartment",
    status: "New Launch",
    class: "launch",
    img: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=400"
  },
  {
    name: "Ambuja Ujaas",
    builder: "Ambuja Neotia",
    location: "Dum Dum",
    price: "₹ 90 L - 1.08 Cr",
    type: "3, 4 BHK Apartment",
    status: "Ready to Move",
    class: "ready",
    img: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400"
  }

];

const projectContainer = document.getElementById("projectContainer");

if (projectContainer) {
  projects.forEach(p => {
    const card = document.createElement("div");
    card.className = "project-card";

    card.innerHTML = `
      <div class="project-img">
        <img src="${p.img}" alt="${p.name}">
        <div class="badge">✔ CERTIFIED</div>
      </div>

      <div class="project-info">
        <h3>${p.name}</h3>
        <small>by ${p.builder}</small>
        <p class="location">📍 ${p.location}</p>
        <p class="price">${p.price}</p>
        <p class="type">${p.type}</p>
        <p class="status ${p.class}">${p.status}</p>
      </div>
    `;

    projectContainer.appendChild(card);
  });
}
