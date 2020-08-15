let cacheData = "PWA Sample";

this.addEventListener("install", (event) => {
//add data in cache
    event.waitUntil(
        caches.open(cacheData).then((cache) => {
            cache.addAll([
                "/",
                '/static/js/bundle.js',
                '/static/js/0.chunk.js',
                '/sockjs-node',
                '/static/js/main.chunk.js',
                '/manifest.json',
                'index.html',
                '/coins.png',
                'https://fonts.gstatic.com/s/bitter/v16/raxhHiqOu8IVPmnRc6SY1KXhnF_Y8fbfOLjOXQ.woff2',
                'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap',
                ' https://fonts.googleapis.com/icon?family=Material+Icons',

            ])
        })
    )
})
//get data from cache
self.addEventListener('fetch', (e) => {
    e.respondWith(
      caches.match(e.request).then((r) => {
            console.log('[Service Worker] Fetching resource: '+e.request.url);
        return r || fetch(e.request).then((response) => {
                  return caches.open(cacheData).then((cache) => {
            console.log('[Service Worker] Caching new resource: '+e.request.url);
            cache.put(e.request, response.clone());
            return response;
          });
        });
      })
    );
  });

  // deleted data from cached
  self.addEventListener('activate', event => {
    console.log('Activating new service worker...');
  
    const cacheAllowlist = [cacheData];
  
    event.waitUntil(
      caches.keys().then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (cacheAllowlist.indexOf(cacheName) === -1) {
              return caches.delete(cacheName);
            }
          })
        );
      })
    );
  });
