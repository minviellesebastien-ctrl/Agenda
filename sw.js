const CACHE = "agenda-v1";

const FILES = [

    "./",

    "index.html",

    "style.css",

    "script.js",

    "ajout.html",
    "ajout.css",
    "ajout.js",

    "evenements.html",
    "evenements.css",
    "evenements.js",

    "details.html",
    "details.css",
    "details.js",

    "manifest.json",

    "icon-192.png",
    "icon-512.png",
    "icon-maskable-512.png"

];

self.addEventListener("install", event => {

    event.waitUntil(

        caches.open(CACHE)

            .then(cache => cache.addAll(FILES))

    );

});

self.addEventListener("fetch", event => {

    event.respondWith(

        caches.match(event.request)

            .then(response =>

                response || fetch(event.request)

            )

    );

});
