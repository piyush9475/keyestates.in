const projects = [
{
name:"Urban Greens",
location:"Chinar Park",
price:"₹72L+",
bhk:"2 BHK",
status:"Under Construction",
image:"https://is1-3.housingcdn.com/4f2250e8/a37aa996e29aa395c712a14a54bb13c3/v0/fs/loharuka_urban_greens_phase_ii_b-rajarhat-kolkata-loharuka_group.jpeg"
},
{
name:"Freshia",
location:"Gopalpur",
price:"₹65L+",
bhk:"3 BHK",
status:"Ready",
image:"https://newprojects.99acres.com/projects/loharuka_group/loharuka_freshia/images/lnfsn5q6_sm.jpg"
},
{
name:"Siddha Happyville",
location:"Rajarhat Main Road",
price:"₹64L - 74L",
bhk:"2 / 2.5 BHK",
status:"Ready",
image:"https://www.happyville.in/images/happyville-about.jpg"
},
{
name:"DTC Downtown",
location:"Rajarhat",
price:"₹55L - 1.17Cr",
bhk:"2-4 BHK",
status:"New Launch",
image:"https://downtown-rajarhat.in/images/dtc-downtown-banner.webp"
},
{
name:"Bhawani Paraiso",
location:"Jogardanga",
price:"₹96L - 2Cr",
bhk:"2-4 BHK",
status:"New Launch",
image:"https://img.staticmb.com/mbimages/project/Photo_h470_w1080/Photo_h310_w462/2026/02/10/Project-Photo-7-Bhawani-Paraiso-Kolkata-5444331_410_1440_310_462_470_1080.jpg"
},
{
name:"Pravya",
location:"Jogardanga",
price:"₹1.15Cr+",
bhk:"3-4 BHK",
status:"New Launch",
image:"https://static.360realtors.com/properties/photos/7742/mini/soham-dtc-pravya-image-17728661870.webp"
},
{
name:"Purti Tatsam",
location:"Jogardanga More, Rajarhat",
price:"₹ 1.12 Cr - 1.57 Cr",
bhk:"2, 3, 3.5, 4 BHK",
status:"New Launch",
image:"https://www.propvestors.in/wp-content/uploads/2026/01/purti-tatsam-banner.webp"
},
{
name:"Bellagio Level Next",
location:"Jogardanga More, Rajarhat",
price:"₹ 80 L - 1.40 Cr",
bhk:"3-4 BHK",
status:"Ready to Move",
image:"https://www.propvestors.in/wp-content/uploads/2025/04/Bellagio-Level-Next-Rajarhat-Jogardanga-More-Project-Image-4.webp"
},
{
name:"Saltee Splendora",
location:"Rajarhat Main Road, Rajarhat",
price:"₹80 L - 1.05 Cr",
bhk:"3, 3.5, 4 BHK",
status:"Ready to Move",
image:"https://www.propvestors.in/wp-content/uploads/2025/04/Bellagio-Level-Next-Rajarhat-Jogardanga-More-Project-Image-4.webp"
},
{
name:"Silveroak Estate",
location:"Rajarhat Main Road, Rajarhat",
price:"₹1.20 Cr - 2 Cr",
bhk:"2, 3 BHK",
status:"Ready to Move",
image:"https://www.propvestors.in/wp-content/uploads/2025/04/Silver-Oak-Rajarhat-Main-Road-Rajarhat-Project-Image.webp"
},
{
name:"Siddha Pines",
location:"Rajarhat Main Road, Rajarhat",
price:"₹60 L - 1.40 Cr",
bhk:" 2, 3, 4 BHK ",
status:"Ready to Move",
image:"https://www.propvestors.in/wp-content/uploads/2025/04/Siddha-Pines-Rajarhat-Main-Road-Rajarhat-Project-Image-2.webp"
},
{
name:"Ideal Enclave",
location:"Gopalpur, Rajarhat",
price:"₹75 L - 1.70 Cr",
bhk:" 2, 3, 4 BHK ",
status:"New Launch",
image:"https://www.propvestors.in/wp-content/uploads/2025/04/Ideal-Enclave-Gopalpur-Rajarhat-Project-Image-2.webp"
},
{
name:"Srijan Optima",
location:" Rajarhat Chowmatha, Rajarhat",
price:"₹65 L - 75 L",
bhk:" 2, 3 BHK ",
status:"Ready to Move",
image:"https://www.propvestors.in/wp-content/uploads/2024/11/srijan-optima-banner.webp"
},
{
name:"F Residences",
location:" Jogardanga More, Rajarhat",
price:"₹1.60 Cr - 2.01 Cr",
bhk:" 2, 3 BHK ",
status:"New Launch",
image:"https://www.propvestors.in/wp-content/uploads/2024/10/F-Residences-Jogardanga-More-Rajarhat-Project-Image-1.webp"
},
{
name:"Green Vega",
location:" Rajarhat Main Road, Rajarhat",
price:"₹50 L - 68 L",
bhk:" 2, 3 BHK ",
status:"New Launch",
image:"https://www.propvestors.in/wp-content/uploads/2024/03/Green-Vega-Rajarhat-Main-Road-Prop-Vestors-Project-Image.webp"
},
{
name:"Kosmic Essence",
location:"Bishnupur, Rajarhat",
price:"₹ 35 L Onwards",
bhk:"1, 2, 3 BHK",
status:"Ready to Move",
image:"https://www.propvestors.in/wp-content/uploads/2024/02/Kosmic-Essence.webp"
},
{
name:"AV Courtyard",
location:"Bishnupur, Rajarhat",
price:"₹30 L Onwards",
bhk:"2, 3 BHK",
status:"New Launch",
image:"https://www.propvestors.in/wp-content/uploads/2023/06/astha-vinayak-av-courtyard-project.webp"
},
{
name:"Purti Aroma",
location:"Gopalpur, Rajarhat",
price:"₹55 L - 75 L",
bhk:"2, 3 BHK",
status:"Ready to Move",
image:"https://www.propvestors.in/wp-content/uploads/2023/05/Purti-Aroma-Gopalpur-Rajarhat-Project-Image.webp"
},
{
name:"Vedic Wellness Villas",
location:"Lauhati, Rajarhat",
price:"₹1.15 Cr Onwards",
bhk:"4, 5 BHK",
status:"Under Construction",
image:"https://www.propvestors.in/wp-content/uploads/2023/05/vedic-wellness-villas-project.webp"
},
{
name:"Amazonia",
location:" Rajarhat Main Road, Rajarhat",
price:"₹57 L - 1.08 Cr",
bhk:"2, 3, 4 BHK",
status:"New Launch",
image:"https://www.propvestors.in/wp-content/uploads/2022/11/kosmic-the-amazonia-project.webp"
},
{
name:"DTC Capital City",
location:" Rajarhat Main Road, Rajarhat",
price:"₹57 L - 1.25 Cr",
bhk:"2, 3, 4 BHK",
status:"Under Construction",
image:"https://www.propvestors.in/wp-content/uploads/2022/09/dtc-rajarhat-banner.webp"
},
{
name:"Unimark Springfield",
location:"  Gopalpur, Rajarhat",
price:"₹75 L - 85 L",
bhk:"3 BHK",
status:"Ready to Move",
image:"https://www.propvestors.in/wp-content/uploads/2022/05/springfield-banner.webp"
},
{
name:"Green Heights",
location:"Rajarhat Main Road, Rajarhat",
price:"₹65 L Onwards",
bhk:"2  BHK",
status:"Near Possession",
image:"https://www.propvestors.in/wp-content/uploads/2021/12/green-heights-banner.webp"
},
{
name:"Urban Vista",
location:"Rajarhat Main Road, Rajarhat",
price:"₹67 L - 88 L",
bhk:"2, 2.5, 3 BHK",
status:"Under Construction",
image:"https://www.propvestors.in/wp-content/uploads/2021/12/urban-vista-banner.webp"
},
{
name:"Merlin Rise",
location:"Rajarhat Main Road, Rajarhat",
price:"₹62 L - 1.55 Cr",
bhk:"2, 3 BHK",
status:"Under Construction",
image:"https://www.propvestors.in/wp-content/uploads/2021/12/merlin-rise-banner.webp"
},
{
name:"Tashvi Central",
location:"Rajarhat",
price:"₹37 L Onwards",
bhk:"Retail Space",
status:"New Launch",
image:"https://www.propvestors.in/wp-content/uploads/2025/07/tashvi-central-banner.webp"
},
{
name:"Arch Starwood",
location:"Chinar Park, Rajarhat",
price:"₹38 L - 1.05 Cr",
bhk:"Office Space",
status:"Ready to Move",
image:"https://www.propvestors.in/wp-content/uploads/2023/07/arch-group-starwood-project-1.webp"
},
];

/* DISPLAY */
function display(data){
let html="";
data.forEach(p=>{
html+=`
<div class="project-card">
<img src="${p.image}">
<div class="project-body">
<h3>${p.name}</h3>
<p>${p.location}</p>
<p class="price">${p.price}</p>
<p>${p.bhk}</p>
<p class="status">${p.status}</p>

<a class="btn whatsapp" href="https://wa.me/919875329416?text=Interested in ${p.name}" target="_blank">WhatsApp</a>
<a class="btn call" href="tel:+919875329416">Call</a>
<button class="btn call" onclick="openMap('${p.location}')">Map</button>
</div>
</div>`;
});
document.getElementById("projects").innerHTML=html;
}
display(projects);

/* MAP */
function openMap(loc){
window.open(`https://www.google.com/maps/search/?api=1&query=${loc} Rajarhat Kolkata`);
}

/* FILTER */
["All","Chinar Park","Gopalpur","Rajarhat","Jogardanga"].forEach(loc=>{
let chip=document.createElement("div");
chip.className="filter-chip";
chip.innerText=loc;

chip.onclick=()=>{
if(loc==="All") display(projects);
else display(projects.filter(p=>p.location.includes(loc)));
};

document.getElementById("filters").appendChild(chip);
});

/* POPUP */
setTimeout(()=>{document.getElementById("popup").style.display="block";},4000);

/* LEAD */
function submitLead(){
let name=document.getElementById("name").value;
let phone=document.getElementById("phone").value;

if(!phone){ alert("Enter phone"); return; }

fetch("YOUR_GOOGLE_SCRIPT_URL",{
method:"POST",
body: JSON.stringify({name,phone})
});

window.location.href=`https://wa.me/919875329416?text=Hi, I am ${name}, interested in Rajarhat properties`;
}