'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "ff966ab969ba381b900e61629bfb9789",
"index.html": "eb9f136df36a59a25f33ec895fc42b3b",
"/": "570640b997746fcafd2c0689982a8c64",
"demo_web_date_picker/version.json": "ff966ab969ba381b900e61629bfb9789",
"demo_web_date_picker/index.html": "570640b997746fcafd2c0689982a8c64",
"demo_web_date_picker/main.dart.js": "38619b392d420dc99ae67faa71087a1e",
"demo_web_date_picker/flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"demo_web_date_picker/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"demo_web_date_picker/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"demo_web_date_picker/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"demo_web_date_picker/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"demo_web_date_picker/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"demo_web_date_picker/manifest.json": "0867c3e13649ac4d06fe34b7b3ddce08",
"demo_web_date_picker/.git/config": "7ce13a899cf2e39e419f6f16f42ac120",
"demo_web_date_picker/.git/objects/03/649481203d766f25b9f4f360108aad164f6ebb": "982fdac86a20ba9c8955705df82707b0",
"demo_web_date_picker/.git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
"demo_web_date_picker/.git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
"demo_web_date_picker/.git/objects/51/3ed409dcebea779eccac5bc86edef2c2986b69": "43b3d835bd40499c82fd6f13bc26d415",
"demo_web_date_picker/.git/objects/67/749ccd9bff9d38f617b847c61db9efd5c43f06": "877a10b8db67bae9000dde3deaddc049",
"demo_web_date_picker/.git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
"demo_web_date_picker/.git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
"demo_web_date_picker/.git/objects/a3/aa8603e8eb12b8f16003c9bd16a535eaf89469": "35e640d82b8c078d862df2e55287ad87",
"demo_web_date_picker/.git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
"demo_web_date_picker/.git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
"demo_web_date_picker/.git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
"demo_web_date_picker/.git/objects/ca/c1f2adfa4ded6e5222fd5118f1fe1e69c64c41": "8b34c9824474ba8dd05c8cc91d086c3d",
"demo_web_date_picker/.git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
"demo_web_date_picker/.git/objects/4b/08c92a6448f807045994c6de22d8ee9093aaab": "73d0aae290bed3c22142aa1a7a3ba56f",
"demo_web_date_picker/.git/objects/pack/pack-835840c394306e95eab6c4e98bba27fad1d47870.idx": "cecf959b7bcebe7c8c7f82b465ddfad4",
"demo_web_date_picker/.git/objects/pack/pack-835840c394306e95eab6c4e98bba27fad1d47870.pack": "b9bfaa06abad7f61e9522dd4fa69a3ea",
"demo_web_date_picker/.git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
"demo_web_date_picker/.git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
"demo_web_date_picker/.git/objects/5c/c6b490a6d2abcb3104cd22d8091b93110b3719": "d4c8ffaa5603b7e1787b74cceb0cd761",
"demo_web_date_picker/.git/objects/5d/03cdb149d862e4b1a1070c9bd37d5b6fbe631c": "7dd163ced0adf442d6590fb224f74365",
"demo_web_date_picker/.git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
"demo_web_date_picker/.git/objects/63/bf755626f0e67fe76a29416fcde085c1c12405": "80517270d81062284fba3c0f29598dcc",
"demo_web_date_picker/.git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
"demo_web_date_picker/.git/objects/a9/24305782a68a6ac344c15090d2cd6501622726": "8a4d1182d23bbe8f7b37b32a460e3c2c",
"demo_web_date_picker/.git/objects/b0/81838ccfce9595d596a887029302dc2030b4af": "3cf86e789381466c410f91a967322c28",
"demo_web_date_picker/.git/objects/cc/f66c80de3086c2ea08ebab2cb981287465a328": "b3a87cbad684b6411c7defd4bf5346ef",
"demo_web_date_picker/.git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
"demo_web_date_picker/.git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
"demo_web_date_picker/.git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
"demo_web_date_picker/.git/objects/15/a52d6d2619795504e277d0ccd50ceb63a9d547": "962808ad4a605ef871e8be8a0c55fa02",
"demo_web_date_picker/.git/objects/49/24bf92fa991af233198bd316b3e5d7bd39f7ea": "7356beb217c537ec62bfe8b334bed001",
"demo_web_date_picker/.git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
"demo_web_date_picker/.git/objects/8e/dadf8a87dc63e0068ca0a10734dd6b55da0c69": "b6631333aec7c828e22bc436e7cb379a",
"demo_web_date_picker/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"demo_web_date_picker/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"demo_web_date_picker/.git/logs/HEAD": "4341926e0f88628d18d430a875d37ea6",
"demo_web_date_picker/.git/logs/refs/heads/main": "4341926e0f88628d18d430a875d37ea6",
"demo_web_date_picker/.git/logs/refs/remotes/origin/HEAD": "31bc20d5f6dc493094b0243852843643",
"demo_web_date_picker/.git/logs/refs/remotes/origin/main": "29552988b3254d977a1af2a67e727bc6",
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
"demo_web_date_picker/.git/refs/heads/main": "440bb93e5adff0436aa0757424888f85",
"demo_web_date_picker/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"demo_web_date_picker/.git/refs/remotes/origin/main": "440bb93e5adff0436aa0757424888f85",
"demo_web_date_picker/.git/index": "e9cceef7be3ff6d0d5ec0d0618be7a1d",
"demo_web_date_picker/.git/packed-refs": "89b185897c5cf2ead5446a8eac4477db",
"demo_web_date_picker/.git/COMMIT_EDITMSG": "73f8865d14d26594cf793ec7907dc981",
"demo_web_date_picker/assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"demo_web_date_picker/assets/NOTICES": "4fe04c5afd87d54a53f0ffd0ca3f1fd1",
"demo_web_date_picker/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"demo_web_date_picker/assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"demo_web_date_picker/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"demo_web_date_picker/assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"demo_web_date_picker/assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"demo_web_date_picker/assets/fonts/MaterialIcons-Regular.otf": "7bf193cf08407241eda4b66f6d4d3479",
"demo_web_date_picker/canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"demo_web_date_picker/canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"demo_web_date_picker/canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"demo_web_date_picker/canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"demo_web_date_picker/canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"demo_web_date_picker/canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"demo_web_date_picker/canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
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
"assets/NOTICES": "f043303d6eebe26292a1c67380d61aa0",
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
