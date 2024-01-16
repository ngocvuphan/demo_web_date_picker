'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "ff966ab969ba381b900e61629bfb9789",
"index.html": "570640b997746fcafd2c0689982a8c64",
"/": "6fe8319c5ef364e163abc53a0df3479d",
"demo_web_date_picker/version.json": "ff966ab969ba381b900e61629bfb9789",
"demo_web_date_picker/index.html": "6fe8319c5ef364e163abc53a0df3479d",
"demo_web_date_picker/main.dart.js": "fe9d958df2a80b7b87d230dea07bfb23",
"demo_web_date_picker/flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"demo_web_date_picker/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"demo_web_date_picker/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"demo_web_date_picker/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"demo_web_date_picker/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"demo_web_date_picker/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"demo_web_date_picker/manifest.json": "0867c3e13649ac4d06fe34b7b3ddce08",
"demo_web_date_picker/.git/config": "7ce13a899cf2e39e419f6f16f42ac120",
"demo_web_date_picker/.git/objects/pack/pack-835840c394306e95eab6c4e98bba27fad1d47870.idx": "cecf959b7bcebe7c8c7f82b465ddfad4",
"demo_web_date_picker/.git/objects/pack/pack-835840c394306e95eab6c4e98bba27fad1d47870.pack": "b9bfaa06abad7f61e9522dd4fa69a3ea",
"demo_web_date_picker/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"demo_web_date_picker/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"demo_web_date_picker/.git/logs/HEAD": "31bc20d5f6dc493094b0243852843643",
"demo_web_date_picker/.git/logs/refs/heads/main": "31bc20d5f6dc493094b0243852843643",
"demo_web_date_picker/.git/logs/refs/remotes/origin/HEAD": "31bc20d5f6dc493094b0243852843643",
"demo_web_date_picker/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"demo_web_date_picker/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"demo_web_date_picker/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"demo_web_date_picker/.git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
"demo_web_date_picker/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"demo_web_date_picker/.git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
"demo_web_date_picker/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"demo_web_date_picker/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"demo_web_date_picker/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"demo_web_date_picker/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"demo_web_date_picker/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"demo_web_date_picker/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"demo_web_date_picker/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"demo_web_date_picker/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"demo_web_date_picker/.git/refs/heads/main": "088c923ee3003719ac7f540582767a67",
"demo_web_date_picker/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"demo_web_date_picker/.git/index": "78f4cc263ac5661152dc801e3b92f2a0",
"demo_web_date_picker/.git/packed-refs": "89b185897c5cf2ead5446a8eac4477db",
"demo_web_date_picker/assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"demo_web_date_picker/assets/NOTICES": "8fb88a9b38570b47a0a1f93c2e0ebd2c",
"demo_web_date_picker/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"demo_web_date_picker/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"demo_web_date_picker/assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"demo_web_date_picker/canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"demo_web_date_picker/canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"demo_web_date_picker/canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"demo_web_date_picker/canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"main.dart.js": "38619b392d420dc99ae67faa71087a1e",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "0867c3e13649ac4d06fe34b7b3ddce08",
".git/config": "38881ccff4dc4e249623736f3cd97a15",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "4fe04c5afd87d54a53f0ffd0ca3f1fd1",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/fonts/MaterialIcons-Regular.otf": "7bf193cf08407241eda4b66f6d4d3479",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
