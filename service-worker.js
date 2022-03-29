const PREFIX = '#1.0.0'
const urlsToCache = [ '/shelter-shop' ]

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(PREFIX)
            .then(function(cache) {
                console.log('Opened cache')
                return cache.addAll(urlsToCache)
            })
    )
})

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                    if (response) {
                        return response
                    }
                    return fetch(event.request)
                }
            )
    )
})

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (PREFIX.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            )
        })
    )
})
