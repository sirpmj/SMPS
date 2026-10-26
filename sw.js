// SMPS service worker — v13 (i18n.js jodi, JS bhi network-first): HTML/manifest network-first (naya version turant dikhe), baaki cache-first
const CACHE = "smps-app-v21";
const PRE = ["./", "./index.html", "./app.html", "./i18n.js", "./og-image.jpg", "./manifest.json", "./Logo-192.png", "./Logo-512.png"];
self.addEventListener("install", e => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(c => Promise.allSettled(PRE.map(u => c.add(u)))));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const r = e.request;
  if (r.method !== "GET" || new URL(r.url).origin !== location.origin) return;
  const isDoc = r.mode === "navigate" || /\.(html|json|webmanifest|js)$/.test(new URL(r.url).pathname);
  if (isDoc) {
    e.respondWith(fetch(r).then(res => { const cp = res.clone(); caches.open(CACHE).then(c => c.put(r, cp)); return res; })
      .catch(() => caches.match(r).then(m => m || caches.match("./index.html"))));
  } else {
    e.respondWith(caches.match(r).then(m => m || fetch(r).then(res => { const cp = res.clone(); caches.open(CACHE).then(c => c.put(r, cp)); return res; })));
  }
});