// SMPS service worker — v14: app.html turant cache se khulti hai (stale-while-revalidate) + peeche se naya version; naya mile to page par "अपडेट" toast.
// checkin.html / i18n.js / manifest abhi bhi network-first (naya turant), baaki cache-first.
const CACHE = "smps-app-v24";
const PRE = ["./", "./index.html", "./app.html", "./checkin.html", "./i18n.js", "./og-image.jpg", "./manifest.json", "./Logo-192.png", "./Logo-512.png"];
self.addEventListener("install", e => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(c => Promise.allSettled(PRE.map(u => c.add(u)))));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
const sig = x => (x.headers.get("etag") || "") + "|" + (x.headers.get("last-modified") || "") + "|" + (x.headers.get("content-length") || "");
function notify() { return self.clients.matchAll({ type: "window" }).then(cs => cs.forEach(c => c.postMessage({ type: "SW_UPDATED" }))); }
self.addEventListener("fetch", e => {
  const r = e.request, u = new URL(r.url);
  if (r.method !== "GET" || u.origin !== location.origin) return;
  if (/\/app\.html$/.test(u.pathname)) {                       // ⚡ तुरंत cache से, peeche se update
    const cachedP = caches.match(r, { ignoreSearch: true });
    const upd = cachedP.then(cached => fetch(r, { cache: "no-cache" }).then(res => {      // no-cache = ETag se सीधे server से जाँच (browser का 10-min cache बीच में न आए)
      if (res && res.ok) { const cp = res.clone(); caches.open(CACHE).then(c => c.put("./app.html", cp)); if (cached && sig(cached) !== "||" && sig(cached) !== sig(res)) { caches.open(CACHE).then(c => c.put("./__upd", new Response("1"))); notify(); } }
      return res;
    }).catch(() => null));
    e.waitUntil(upd);
    e.respondWith(cachedP.then(cached => cached || upd.then(res => res || caches.match("./index.html"))));
    return;
  }
  const isDoc = r.mode === "navigate" || /\.(html|json|webmanifest|js)$/.test(u.pathname);
  if (isDoc) {
    e.respondWith(fetch(r).then(res => { const cp = res.clone(); caches.open(CACHE).then(c => c.put(r, cp)); return res; })
      .catch(() => caches.match(r).then(m => m || caches.match("./index.html"))));
  } else {
    e.respondWith(caches.match(r).then(m => m || fetch(r).then(res => { const cp = res.clone(); caches.open(CACHE).then(c => c.put(r, cp)); return res; })));
  }
});

// page ne (load hone ke baad) poochha: koi naya version aaya? — page ke taiyar hone se pehle bheja message kho sakta hai, isliye marker cache mein rakhte hain
self.addEventListener("message", e => {
  const d = e.data || {};
  if (d.type === "ASK_UPDATE") e.waitUntil(caches.open(CACHE).then(c => c.match("./__upd").then(m => { if (m) { c.delete("./__upd"); return notify(); } })));
  if (d.type === "CLEAR_UPDATE") e.waitUntil(caches.open(CACHE).then(c => c.delete("./__upd")));
});
