'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"UnityLibrary/index.html": "d429cf70c93d23c073c9a2c6e3acd9e0",
"/": "de95b5bab455ba2c01dc36a20b105d29",
"UnityLibrary/StreamingAssets/aa/settings.json": "bda6c3ea78027c2af40ec4e0994aadac",
"UnityLibrary/StreamingAssets/aa/WebGL/catalog_2022.05.17.22.14.46.json": "8cbe076e468337f00453e391c6ca3bae",
"UnityLibrary/StreamingAssets/aa/WebGL/arpost_assets_all.bundle": "e9ebabb35845050ce2153501c37a4f5e",
"UnityLibrary/StreamingAssets/aa/WebGL/catalog_2022.05.17.22.14.46.hash": "9677490350d6241046df6c61016da40a",
"UnityLibrary/StreamingAssets/aa/catalog.json": "8cbe076e468337f00453e391c6ca3bae",
"UnityLibrary/StreamingAssets/aa/AddressablesLink/link.xml": "a87212e157d4d390119bb455c18b35bd",
"UnityLibrary/Build/UnityLibrary.framework.js.unityweb": "e2267912bf0f57d100fe02624e17f9eb",
"UnityLibrary/Build/UnityLibrary.loader.js": "4d58751c9cf5f1e5652d370ade4206d0",
"UnityLibrary/Build/UnityLibrary.data.unityweb": "7ce3de87c075f9c2d61395f0f31ec06d",
"UnityLibrary/Build/UnityLibrary.wasm.unityweb": "cda5a7080a28078082fa2646755cd6e6",
"version.json": "e2ab54aef3b546c2903134e3cc8782ab",
"index.html": "de95b5bab455ba2c01dc36a20b105d29",
"main.dart.js": "a1de46e099b4a7ead1ae912b3a4d3fb7",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "505e8534aee68cd7c7d1766979bbf920",
"assets/AssetManifest.json": "1296249cc26e37c57d2c99b87bcc80c8",
"assets/NOTICES": "18d7a7aa685bf1252793cde4439eccb0",
"assets/FontManifest.json": "febf271f0f94110332b72d8d414153c9",
"assets/AssetManifest.bin.json": "15a6ec87f3fa379423e929a2966ff281",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/core/assets/images/camera_background_loader.jpg": "79cf47c88595a7076e486d32bcc512a8",
"assets/packages/core/assets/logos/app_logo.svg": "aeea6c1097a8f6ae59dd3ea1d086cef8",
"assets/packages/core/assets/logos/app_logo_text.svg": "a5fd88ea5a48aef9184ac834047b34a8",
"assets/packages/core/assets/fonts/BebasNeue-Regular.ttf": "47f711bd1524b9283aa92d3d74db16a8",
"assets/packages/core/assets/fonts/ProductSans-Medium.ttf": "9c51beb79b8ab173abd924ce39178f0b",
"assets/packages/core/assets/fonts/ProductSans-Bold.ttf": "a19a7b108b2e3961fc855c6ea5a6546f",
"assets/packages/core/assets/fonts/ProductSans-Regular.ttf": "b61c0ab33a818a0162f3e868babcef4b",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "3ab951aa6a0212b43c41ff3193da34c5",
"assets/fonts/MaterialIcons-Regular.otf": "ae34a5b6ba1d142490ab57f6617726a1",
"assets/assets/images/filters/filter_1.png": "468169d0b227382c49e5a97a8d480bde",
"assets/assets/images/filters/filter_3.png": "d2f1ffe917ec95aa3753c3fb6a05c812",
"assets/assets/images/filters/filter_2.png": "d281584d102caeba3f1d4400ec837b97",
"assets/assets/images/filters/filter_4.png": "adfc1bfbb8c76afb06275b12e6d47d9b",
"assets/assets/images/camera_background_loader.jpg": "79cf47c88595a7076e486d32bcc512a8",
"assets/assets/images/camera_background_loader.svg": "9f9b89e071d6cdf462c4b7ae1749e18d",
"assets/assets/images/others.png": "902f3de0d0b3ec868c7270f34e182288",
"assets/assets/social_media/apple.png": "a8b0e6fac04c43e040a8eb6bfd74b100",
"assets/assets/social_media/google.png": "ca2f7db280e9c773e341589a81c15082",
"assets/assets/social_media/facebook.png": "8f5ce27564945d2c9a10ef827549a78c",
"assets/assets/icons/saved/creepandwaffles.svg": "06c17476bb95948a3807e9ac8997708c",
"assets/assets/icons/saved/location.svg": "1f5742e23bf1213ae67aaa2a2b51905a",
"assets/assets/icons/category/popcorn.svg": "61a99402f751f6272aeba22b5ad2e30b",
"assets/assets/icons/category/culture.svg": "0e704b7fe75e1be6094cf5b3ea7ea381",
"assets/assets/icons/category/security.svg": "8f2c74feea58a5e87e8f44f5a51be330",
"assets/assets/icons/category/food.svg": "d503c5e727ff752ba555a91a3ad6a639",
"assets/assets/icons/change.svg": "c8ce84358ecdae592381cda80af158c2",
"assets/assets/icons/saved_icon.svg": "a41c009ac6eed3fbbe2548f4d83faa3b",
"assets/assets/icons/favorite_icon.svg": "14af599255752bf0b94ef6a1415353af",
"assets/assets/icons/x.svg": "f23e48cb7c715fc34c11d6c0610563cf",
"assets/assets/icons/large_arrow_icon.svg": "df0615d94f66ee2f794037fce8cd62cb",
"assets/assets/icons/small_arrow_icon.svg": "ea5b5ab4e41cad4f830bd9e56affeab2",
"assets/assets/icons/close_icon.svg": "f23e48cb7c715fc34c11d6c0610563cf",
"assets/assets/icons/plus_icon.svg": "386569aff224a83a2a94386c73aa5c76",
"assets/assets/asd.webm": "ea4a1541dd5a00905f21b54a5b22f7fc",
"assets/assets/emojis/smiling-face-with-smiling-eyes.gif": "2c865793b1f197b82cec1778809b334c",
"assets/assets/emojis/loudly-crying-face.gif": "5a7d89545aee20c6319fdbd390de3e2c",
"assets/assets/emojis/face-with-tears-of-joy.gif": "25aeac931f4bbc9c118e36ea4adf382c",
"assets/assets/emojis/face-with-open-mouth.gif": "91299ed684b40e70249e6776d6187474",
"assets/assets/emojis/pouting-face.gif": "2186bd6b98cd0bb4f913666497d6b24a",
"assets/assets/emojis/smiling-face-with-hearts.gif": "312ba2fa9657049299364f970b682dbb",
"assets/assets/fonts/AppleGaramond.ttf": "a6f12191d6abbba09d3ed0fd81b128bb",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
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
