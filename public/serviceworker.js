//set up cache name and files to add to it
const CACHE_NAME = 'my-site-v1';
const CACHE_URLS =  ['/','index.html', 
                     'about-us-page.html',
                     'animals-page.html',
                     'donation-page.html',
                     'kids-page.html',
                     'prototype-page.html',                   
                     'manifest.json',
                     'css/main.css',
                     'css/pages.css',
                     'img/bg/bg-404.png',
                     'img/bg/hero-bg.webp',
                     'img/boy.png',
                     'img/image-1.webp',
                     'img/image-10.jpg',
                     'img/image-10.webp',
                     'img/image-11.jpg',
                     'img/image-11.webp',
                     'img/image-12.jpg',
                     'img/image-12.webp',
                     'img/image-13.jpg',
                     'img/image-13.webp',
                     'img/image-14.jpg',
                     'img/image-14.webp',
                     'img/image-15.jpg', 
                     'img/image-15.webp',
                     'img/image-16.jpg',
                     'img/image-16.webp',
                     'img/image-18.jpg',
                     'img/image-18.webp',
                     'img/image-2.webp',
                     'img/image-20.jpg',
                     'img/image-20.webp',
                     'img/image-21.jpg',
                     'img/image-21.webp',
                     'img/image-22.jpg',
                     'img/image-22.webp',
                     'img/image-23.jpg',
                     'img/image-23.webp',
                     'img/image-24.jpg',
                     'img/image-24.webp',
                     'img/image-25.jpg',
                     'img/image-25.webp',
                     'img/image-26.jpg',
                     'img/image-26.webp',
                     'img/image-27.jpg',
                     'img/image-27.webp',
                     'img/image-3.webp',
                     'img/image-30.jpg',
                     'img/image-31.jpg',
                     'img/image-32.jpg',
                     'img/image-33.jpg',
                     'img/image-4.webp',
                     'img/image-5.webp',
                     'img/image-6.jpg',
                     'img/image-7.png',
                     'img/image-8.jpg',
                     'img/image-9.png',
                     'img/rainbow.png',
                     'img/rocket-planet.png',
                     'img/logo/logo-dark.svg',
                     'img/logo/logo.svg',
                     'img/icons/active-2.svg',
                     'img/icons/active-3.svg',
                     'img/icons/active-4.svg',
                     'img/icons/active.svg',
                     'img/icons/arrow_down.svg',
                     'img/icons/arrow_forward_24px.svg',
                     'img/icons/arrow_forward_24px_outlined.svg',
                     'img/icons/arrow_forward_green_24px.svg',
                     'img/icons/back_icon.svg',
                     'img/icons/btn-mobile.svg',
                     'img/icons/calendar-icon.svg',
                     'img/icons/close.svg',
                     'img/icons/facebook-logo.svg',
                     'img/icons/info.svg',
                     'img/icons/instagram-logo.svg',
                     'img/icons/line.png',
                     'img/icons/line.svg',
                     'img/icons/mobile-bg.webp',
                     'img/icons/money-icon.svg',
                     'img/icons/stars.png',
                     'img/icons/schedule_24px.svg',
                     'img/icons/twitter-logo.svg',
                     'img/icons/youtube-logo.svg',];

//set up cache and files to add to it
//...

//add all URLs to cache when installed
self.addEventListener("install", function(event){
    console.log("Service worker installed");
    event.waitUntil(
        //create and open cache
        caches.open(CACHE_NAME)
            .then(function(cache){
                console.log("Cache opened");
                //add all URLs to cache
                return cache.addAll(CACHE_URLS);
        })
    );
});

//On activate update the cache with the new version and clean out old caches
self.addEventListener('activate', function(event) {
    event.waitUntil(
      caches.keys().then(function(cacheNames) {
        return Promise.all(
          cacheNames.map(function(cacheName) {
            if (cacheName.startsWith('my-site-') && CACHE_NAME !== cacheName) {
              return caches.delete(cacheName);
            }
          })
        );
      })
    );
  });
  
//add all URLs to cache when installed
//...
//user has navigated to page - fetch required assets
self.addEventListener("fetch", function(event){
    event.respondWith(
        caches.match(event.request).then(function(response){
            //check whether asset is in cache
            if(response){
                //asset in cache, so return it
                console.log(`Return ${event.request.url} from cache`);
                return response;
            }
            //asset not in cache so fetch asset from network
            console.log(`Fetch ${event.request.url} from network`);
            return fetch(event.request);
        })
    );
});
