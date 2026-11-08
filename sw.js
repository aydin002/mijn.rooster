// Service worker: de app werkt ook zonder internet. Verhoog VERSIE bij een nieuwe release.
var VERSIE = "werkplanner-v3";
var BESTANDEN = ["./", "index.html", "manifest.webmanifest", "icon-192.png", "icon-512.png"];

self.addEventListener("install", function (e) {
  e.waitUntil(caches.open(VERSIE).then(function (c) { return c.addAll(BESTANDEN); }));
  self.skipWaiting();
});
self.addEventListener("activate", function (e) {
  e.waitUntil(caches.keys().then(function (k) {
    return Promise.all(k.filter(function (x) { return x !== VERSIE; }).map(function (x) { return caches.delete(x); }));
  }));
  self.clients.claim();
});
// Eerst online proberen (altijd de nieuwste versie), anders uit de cache.
self.addEventListener("fetch", function (e) {
  if (e.request.method !== "GET") return;
  e.respondWith(
    fetch(e.request).then(function (r) {
      var kopie = r.clone();
      caches.open(VERSIE).then(function (c) { c.put(e.request, kopie); });
      return r;
    }).catch(function () { return caches.match(e.request); })
  );
});
