let staticCacheName = 'restaurant-static-v1';

// add event listener for SW install event
self.addEventListener('install', function(event) {
    event.waitUntil(
        // open a cache to hold pages we want to cache
        // at install of SW
        caches.open(staticCacheName).then(function(cache){
            return cache.addAll([
                './',
                './index.html',
                './restaurant.html',
                './css/styles.css',
                './js/dbhelper.js',
                './js/main.js',
                './js/regist.js',
                './js/restaurant_info.js',
                './data/restaurants.json',
                './img/1.jpg',
                './img/2.jpg',
                './img/3.jpg',
                './img/4.jpg',
                './img/5.jpg',
                './img/6.jpg',
                './img/7.jpg',
                './img/8.jpg',
                './img/9.jpg',
                './img/10.jpg'
            ])
        })
    );
});

// self.addEventListener('install', (event) => {
//     event.waitUntil(
//         caches.open('staticCacheName').then(cache => {
//             return cache.addAll([
//                 './',
//                 './index.html',
//                 './restaurant.html',
//                 './css/styles.css',
//                 './js/dbhelper.js',
//                 './js/main.js',
//                 './js/regist.js',
//                 './js/restaurant_info.js',
//                 './data/restaurants.json',
//                 './img/1.jpg',
//                 './img/2.jpg',
//                 './img/3.jpg',
//                 './img/4.jpg',
//                 './img/5.jpg',
//                 './img/6.jpg',
//                 './img/7.jpg',
//                 './img/8.jpg',
//                 './img/9.jpg',
//                 './img/10.jpg'
//             ])
//         })
//     );
// });

// add event listener for fetch event
// self.addEventListener('fetch', function(event){
//     console.log(event.request.url);
//     // response from our caches array if matched one found
//     // fecth the request link if no matched one found in caches array
//     event.respondWith(
//         caches.match(event.request)
//         .then(function(response) {
//             console.log(this);

//             if(response) return response;
//             console.log(response);
//             console.log(event.request);
//             return fetch(event.request);
//         })
//         .catch(function(error) {
//             console.log('error cannot fetch');
//         })
//     );
// });

self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request)
        .then(function(response) {
            // Cache hit - return response
            if (response) {
                console.log(event.request);
                return response;
            }
  
            // IMPORTANT: Clone the request. A request is a stream and
            // can only be consumed once. Since we are consuming this
            // once by cache and once by the browser for fetch, we need
            // to clone the response.
            var fetchRequest = event.request.clone();
  
            return fetch(fetchRequest).then(
                function(response) {
                    // Check if we received a valid response
                    if(!response || response.status !== 200 || response.type !== 'basic') {
                        return response;
                    }
    
                    // IMPORTANT: Clone the response. A response is a stream
                    // and because we want the browser to consume the response
                    // as well as the cache consuming the response, we need
                    // to clone it so we have two streams.
                    var responseToCache = response.clone();
    
                    caches.open(staticCacheName)
                        .then(function(cache) {
                            cache.put(event.request, responseToCache);
                        });

                    return response;
                }   
            );
        })
        .catch(function(error) {
            console.log('error cannot fetch');
        })
    );
});
// self.addEventListener('fetch', (event) => {
//     console.log(self);
//     console.log(event.request.url);
//     event.respondWith(
//         caches.match(event.request)
//         .then((response) => {
//             console.log(this);

//             if(response) return response;
//             console.log(response);
//             console.log(event.request);
//             return fetch(event.request);
//         })
//         .catch((error) => 
//             console.log('error cannot fetch')
//         )
//     );
// });

// add event listener for activate event
// delete the old one 
self.addEventListener('activate', function(event) {
    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                
                cacheNames.filter(function(cacheName) {
                    return cacheName.startsWith('restaurant-static') && cacheName != staticCacheName;
                }).map(function(cacheName) {
                    return caches.delete(cacheName);
                })
            )
        }) 
    );
});

// self.addEventListener('activate', (event) => {
//     event.waitUntil(
//         caches.keys().then(cacheNames => {
//             return Promise.all(
                
//                 cacheNames.filter(cacheName => {
//                     return cacheName.startsWith('restaurant-static') && cacheName != staticCacheName;
//                 }).map(cacheName => {
//                     return caches.delete(cacheName);
//                 })
//             )
//         }) 
//     );
// });