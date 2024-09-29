'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "32b6a7e32224d506c0e694faebecff3a",
"version.json": "ff966ab969ba381b900e61629bfb9789",
"index.html": "96ab824dcd76bad26de7415202baa986",
"/": "96ab824dcd76bad26de7415202baa986",
"main.dart.js": "03395a249e178fd173654a2ea64b6f99",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "0867c3e13649ac4d06fe34b7b3ddce08",
".git/config": "7ce13a899cf2e39e419f6f16f42ac120",
".git/objects/0d/d34a4664d73834e64ccfd6b4fe95969e6261f5": "8f07cb951610cd2105a8259f79311ac3",
".git/objects/95/5b57819befdb9e531c6566fb830b10d0b67f7d": "f986e08ed1a6c5e6c00b8c25256282b6",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/5f/2722c5e99a2202315763a259330312fa57c337": "8c2c7c807d21a8a9f07949866731aaad",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/b3/f607f0da195ef4ed202f76594729a9311dfe9b": "93e5d088ce27ccefa4b703a7f7d997cc",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/d1/d3a194145a120c92416bd7f7fc7241bd26cbcd": "30cbdcba0d8fd1293eec4269ed2bd236",
".git/objects/c0/b7faecfd0b44de6b0d78306cc673cc9d605f8a": "5aa68cccfb9f7c7d1e1f83f83dd6e013",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/ed/89e83c6d1ae702ab0d6fa0551260209de12ec9": "f82f0c09455fc4fc2184f9eca8280ed2",
".git/objects/27/1018b43eab6514829d133b1885aad7c102d456": "6f864204be710953485b342f6888df72",
".git/objects/pack/pack-930f64ad91335851202a4f1a92e79e1d104b4fc1.idx": "9e9522b14041188a9bc167fd92dc07b8",
".git/objects/pack/pack-930f64ad91335851202a4f1a92e79e1d104b4fc1.pack": "a20b5c6acec90b17d855cb259c5f6cdc",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/87/0651fbe085980676c1bc051cbfdacc36a41b1b": "b8066b4af8a20363847c828531aa952a",
".git/objects/87/4ac75737129e77732839243446ac9e1077d7f5": "78c34f183330b038b2a7a9f7efe804b6",
".git/objects/80/1ab1ec0d424cbafc56c4f98732fe33ba8b6134": "e75f15390c5fadbc2c580be92005b8ae",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/31/d358f673c973b9f439d31c3b4c13f29fa8392b": "65567622ea7e233fd0d6bbd7534a47e2",
".git/objects/62/87f8d3027599a0aa14ac4ee79d67f3feaf98d2": "60d831b19665961954fc771e6e091291",
".git/objects/96/8d4434ed200d834c9c4047915e7ecc7cb5712b": "dc810bc406999e4eeb5f90a98c11a609",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/90/8f2f62f06ee4889a2774078aee53e67109e094": "15b84d782924c08b19fdb503ce2f2003",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/a9/9732abd0c3edd445cebaba4a55c0cbf68a6020": "052656403e1e6e64a310a6394bec3b4d",
".git/objects/a9/0813f06cfdcd2c141d088fdebd1a8663f6bd6d": "56eb2e4f975df583c2ae778aa8da3d91",
".git/objects/de/cfc8f3a0cc575a6a55e4d5b381e5d5b669bd7e": "f45d55c0e4fe55ac2077bb53933a4ccf",
".git/objects/ef/15b3323e9f74ad55b2d3227c53437f0a100675": "44867adedf55708aa5caa92bb712e2a2",
".git/objects/e1/3b0b92c33fdc157f353a5b6ef3edd99b039ddd": "128a32e1b1fc4eb552e25f74e1f62ab0",
".git/objects/cc/43e9af99500f07eef48c753d7560f82e051a95": "432f1ac37c6dfcf78d6272ae01348f5a",
".git/objects/84/37c6909e038d73ae9e04224fc32cdab10b9eac": "930a2ebb221128df74a4743933ee5f1e",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/24/06ea6bcf54769a2ed566343164c373338d73f2": "8020ff1eb2172a5c6945a97bc5100c9e",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/1c/82742f846997e0c903e6ad88b09dbe875a475b": "6d94cf417dabd070470d438501360217",
".git/objects/2e/06b4b11ef273ea3fc3810d5d92c0386500d49e": "96f43e3df0ae94f94adb32b30fcfb9db",
".git/objects/2b/4b774459e75b1c2713e564affd5897b527db45": "e3842a3754a131f28ab5a97fbdb32efd",
".git/objects/78/9602cbdcfbce39a86686f90d35e4142d106a60": "36033fe808527778cb0a6815488ca531",
".git/objects/8e/f7fc453952100c803472d9e845d30ddde7482f": "4ff9ce7389fd33b51262c23ec4469870",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "252e389f06ebd82faca206ebebb539cf",
".git/logs/refs/heads/main": "252e389f06ebd82faca206ebebb539cf",
".git/logs/refs/remotes/origin/HEAD": "5e097debcf410982db3374c099d52251",
".git/logs/refs/remotes/origin/main": "2f663764aa1c6a34ae23e7d38d1110e3",
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
".git/refs/heads/main": "83ae413411b04809a60cf3381c339378",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "83ae413411b04809a60cf3381c339378",
".git/index": "614caaa5e5e85537d842ae62df0b1013",
".git/packed-refs": "8fa5a5fb18d7b8b552cc37d9158c83dc",
".git/COMMIT_EDITMSG": "ad9235abb88576f2f435d1507b1a2866",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "249f25c8ba0f64b56aee76e9169bf2e4",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/fonts/MaterialIcons-Regular.otf": "b4c042a9d90b70fffb649d70d11f6cef",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
