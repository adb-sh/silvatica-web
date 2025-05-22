!(function () {
  "use strict";
  
  const lat = 49.103;
  const lon = 9.7995278;
  
  const map = L.map('map').setView([lat,lon], 16);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);
  // L.marker([lat,lon]).addTo(map).openPopup();

  L.polygon([
    [49.10385112133803, 9.799948565000571],
    [49.102928897668534, 9.800983114253627],
    [49.102055343164636, 9.799245443017673],
    [49.103146505030516, 9.79748379380008],
    [49.103468983861795, 9.799328038590133]
  ], {
    color: 'red',
  }).addTo(map).bindPopup("<b>Festival</b>").openPopup()

  L.polygon([
    [49.102900339970866, 9.801023087715418],
    [49.10205276859128, 9.802195524691394],
    [49.101160228013285, 9.80062657734916],
    [49.10201837581494, 9.799337305889434]
  ]).addTo(map).bindPopup("<b>Zeltplatz</b>")

  const myIcon = L.icon({
    iconUrl: 'wc-icon.svg',
    iconSize: [30, 30],
    iconAnchor: [15, 15],
  });
  L.marker([49.102461404450686, 9.800525107587717], {icon: myIcon, alt: "WC"}).addTo(map).bindPopup("<b>WC</b>", {minWidth: 20});

})();
