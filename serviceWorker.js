const staticDevAbue = "EQUIPO ABUE"
const assets = [
  "index.html",
  "css/estilos.css",
  "js/nucleo.js",
  "img/arboles.PNG",
  "img/cactus1.png",
  "img/cactus2.png",
  "img/dino.PNG",
  "img/nube.png",
  "img/suelo.png",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevAbue).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })
  