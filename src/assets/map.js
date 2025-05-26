!(function () {
  "use strict"
  
  // Create map
  const map = L.map('map', {
    zoomDelta: 0.5,
    zoomSnap: 0.5,
  }).setView([49.10276269937602, 9.800461743328235], 16.5)

  // load openstreetmap tiles
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map)

  // festival area
  L.polygon([
    [49.10190054569826, 9.80236433044067],
    [49.10149109059444, 9.801700684537481],
    [49.10210375244401, 9.800936124223107],
    [49.102502443711046, 9.801627368806745],
  ], {
    color: 'red',
  }).addTo(map).bindPopup("<b>Festival</b>")

  // camping area
  L.polygon([
    [49.101578074793885, 9.801237074746485],
    [49.10200180365436, 9.80068888502479],
    [49.101598709941115, 9.799932836777817],
    [49.10116722978656, 9.800521780279146],
  ], {
  }).addTo(map).bindPopup("<b>Camping</b>")

  // parking/van-camping area
  L.polygon([
    [49.1029517945239, 9.800807967719841],
    [49.10212747425644, 9.799240272978945],
    [49.10279852691794, 9.798216875323075],
    [49.10370523666938, 9.799955282941688]
  ]).addTo(map).bindPopup("<b>Parken + Van-Camping</b>")

  // Toilets
  const myIcon = L.icon({
    iconUrl: 'wc-icon.svg',
    iconSize: [30, 30],
    iconAnchor: [15, 15],
  })
  L.marker([49.10167207285711, 9.801660013726533], {icon: myIcon, alt: "WCs"}).addTo(map).bindPopup("<b>WCs</b>", {minWidth: 20})
  L.marker([49.10203947743715, 9.800081054503767], {icon: myIcon, alt: "WCs"}).addTo(map).bindPopup("<b>WCs</b>", {minWidth: 20})

  // Entrance
  L.marker([49.10347742083176, 9.799590040395572]).addTo(map).bindPopup("<b>Einfahrt</b>").openPopup()

})()
