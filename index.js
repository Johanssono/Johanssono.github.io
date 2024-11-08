if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/service-worker.js");
  });
}

// The name of my cache
const cacheName = "my-pwa-shell-v1.0";
//The files I'm going to cache
const filesToCache = [
  "/",
  "/html/index.html",
  "./javascript/index.js",
  "./style/styles.css",
  "/manifest.json",
  "./assets/icons/icon.png",
];

self.addEventListener("install", (e) => {
  console.log("[ServiceWorker] - Install");
  e.waitUntil(
    (async () => {
      const cache = await caches.open(cacheName);
      console.log("[ServiceWorker] - Caching app shell");
      await cache.addAll(filesToCache);
    })(),
  );
});
