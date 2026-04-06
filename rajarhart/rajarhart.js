const zones = {

  "Rajarhat": {
    image: "https://www.propvestors.in/wp-content/uploads/2021/05/rajarhat.webp",
    desc: "Key Estate presents Rajarhat as one of the most prominent and rapidly developing residential destinations on the northern outskirts of Kolkata. Falling under the jurisdiction of the Bidhan Nagar Municipal Corporation in the North 24 Parganas district, Rajarhat is strategically located and well-connected to major nearby localities such as Dum Dum, Baguiati, Keshtopur, New Town, Salt Lake, and Lake Town. This makes it an ideal choice for modern urban living..",
    
    localities: [
      {name: "Bishnupur", projects: "02 Projects"},
      {name: "Chinar Park", projects: "02 Projects"},
      {name: "Gopalpur", projects: "04 Projects"},
      {name: "Jogardanga More", projects: "05 Projects"},
      {name: "Lauhati", projects: "01 Projects"},
      {name: "Rajarhat Chowmatha", projects: "02 Projects"},
      {name: "Rajarhat Main Road", projects: "11 Projects"}
    ]
  }

};

/* GET ZONE */
const params = new URLSearchParams(window.location.search);
const zone = params.get("zone") || "Rajarhat";

/* LOAD PAGE */
if (zones[zone]) {

  document.getElementById("zoneTitle").innerText = zone;
  document.getElementById("zoneName2").innerText = zone;
  document.getElementById("zoneDesc").innerText = zones[zone].desc;
  document.getElementById("zoneImage").src = zones[zone].image;

  loadMap(zone);

  const grid = document.getElementById("localGrid");

  zones[zone].localities.forEach(loc => {
    const card = document.createElement("div");
    card.className = "local-card";

    card.innerHTML = `
      <img src="https://maps.gstatic.com/tactile/basepage/pegman_sherlock.png">
      <div>
        <h3>${loc.name}</h3>
        <p>${loc.projects}</p>
      </div>
    `;

    /* CLICK ACTION */
    card.onclick = () => {
      loadMap(loc.name);
      openMap(loc.name);
    };

    grid.appendChild(card);
  });

}

/* EMBED MAP */
function loadMap(location) {
  const map = document.getElementById("mapFrame");
  map.src = `https://www.google.com/maps?q=${encodeURIComponent(location + ", Kolkata")}&output=embed`;
}

/* OPEN GOOGLE MAP */
function openMap(location) {
  const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location + ", Kolkata")}`;
  window.open(url, "_blank");
}