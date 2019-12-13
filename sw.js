// Set a name for the current cache
var cacheName = 'final-exam-app'; 

// Default files to always cache
var cacheFiles = [
	'./',
	'./index.html',
    './script.js',
    './style.css',
    './page-content/about.html',
    './page-content/answers.html',
    './page-content/apod.html',
    './page-content/canvas.html',
    './page-content/schools.html'
]


//install event
self.addEventListener('install', evt => {
    console.log('Service Worker Installed');
    evt.waitUntil(caches.open(cacheName).then(cache => {
        console.log('Adding Cache');
        cache.addAll(assets);
    }));
});

//activate event
self.addEventListener('activate', evt => {
    console.log('Service Worker Activated');
});

//fetch event
self.addEventListener('fetch', evt => {
    //           console.log('Fetching: ', evt);
    evt.respondWith(
        caches.match(evt.request).then(cacheRes => {
            return cacheRes || fetch(evt.request);
        })
    );
});