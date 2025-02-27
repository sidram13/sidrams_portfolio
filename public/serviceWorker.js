const staticAnimeshData = "site-cache-v1";
const assets = [
  //   "/",
  "/index.html",
  "/assets/css/styles.css",
  "/assets/css/swiper-bundle.min.css",
  "/assets/js/main.js",
  "/assets/js/swiper-bundle.min.js",
  "/assets/pdf/Sidram_Resume1.pdf",
  "/assets/img/blob.svg",
  "assets/img/sidram1.jpg",
  "/assets/img/mt-fuji.jpg",
  "/assets/img/travel-pic3.png",
  "/assets/img/skills/html.svg",
  "/assets/img/skills/css.svg",
  "/assets/img/skills/javascript.svg",
  "/assets/img/skills/c-1.svg",
  "/assets/img/skills/cpp.svg",
  "/assets/img/skills/java.svg",
  "/assets/img/skills/mysql-logo-pure.svg",
  "/assets/img/skills/python-5.svg",
  "/assets/img/skills/azure-2.svg",
  "/assets/img/portfolio/loan-approval-system.png",
];

self.addEventListener("install", (installEvent) => {
  installEvent.waitUntil(
    caches.open(staticAnimeshData).then((cache) => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", (fetchEvent) => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then((res) => {
      return res || fetch(fetchEvent.request);
    })
  );
});
