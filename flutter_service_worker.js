'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "b585b9b3e9f91ea5252f22c6f4fcf7f0",
"assets/AssetManifest.bin.json": "b5c329a9cb4b1d1b353500e53442a284",
"assets/AssetManifest.json": "02e524c4d4e68ac7b2f40557ffa2a7ad",
"assets/assets/lola_gallery_button.png": "12a9523e279ef9791c7dc0bdfe12d9e4",
"assets/FontManifest.json": "c75353fbeebcd695f0652f190c83d46c",
"assets/fonts/MaterialIcons-Regular.otf": "160b32070bf7e390a79b0a2b18704ccc",
"assets/NOTICES": "2be1642d103b2bf2346c376c6197ad51",
"assets/packages/material_symbols_icons/lib/fonts/MaterialSymbolsOutlined.ttf": "0480188fb50e9da697fe0909e22a935e",
"assets/packages/material_symbols_icons/lib/fonts/MaterialSymbolsRounded.ttf": "c62d427003f203068f4b7120b1f83085",
"assets/packages/material_symbols_icons/lib/fonts/MaterialSymbolsSharp.ttf": "e9fb4792d10318116e8a3ea224ddb5e0",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "860635fd1e9a78cdad16f95050a8fe4a",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "d407a9d2b510c43e53f355a08c3e2bee",
"icons/Icon-192.png": "10c7bc6f904adf94d8eef76616944e18",
"icons/Icon-512.png": "a40c2be98758a444a2a8d0ecf70e1847",
"icons/Icon-maskable-192.png": "10c7bc6f904adf94d8eef76616944e18",
"icons/Icon-maskable-512.png": "a40c2be98758a444a2a8d0ecf70e1847",
"index.html": "fea00c7f971dfa225ccac6a38f7c8526",
"/": "fea00c7f971dfa225ccac6a38f7c8526",
"main.dart.js": "4dd15d52d72dd08d511b57ac76bb76f0",
"manifest.json": "a75f45ee973afbca88aa482a211bf7df",
"photos/1771326098_scaled_image.jpg": "399e4407da555486ba81822185339f3f",
"photos/1771430936_scaled_image.jpg": "665f5760ab53e4676f1d195aeb28e7a7",
"photos/1771857281_scaled_17718572479395922400249949258630.jpg": "06a8ccc9b7c0c451bfc016de04ece387",
"photos/1773681781_scaled_17736817650447140850667360321836.jpg": "d928c74db123d1fa0a2c8a5bcbb075d4",
"photos/1773937248_scaled_image.jpg": "1dbc691adc02548249cfe52bff152705",
"photos/1774968390_scaled_image.jpg": "c7f28592355c36652fbea29a28ec0e98",
"photos/1776587627_scaled_1776587617882756987465762180118.jpg": "357c1c5fc86aff3232a42d101d084544",
"photos/1776764138_scaled_image.jpg": "30c1341b3f2b768ee5fe39c0c7dc6b0b",
"photos/1776877191_scaled_17768771786835831596024465262506.jpg": "876d49639fb64f6f10f42d4f6814297d",
"photos/1776884787_scaled_image.jpg": "bc89a36c403ef7f63878b0a565ecd6c2",
"photos/1776937121_scaled_image.jpg": "41690963f391c47cfea9c7e48bbc3d7a",
"photos/1777140231_scaled_17771402120741245238257471771725.jpg": "dff2b10ccbed5fbb2b11440d795b44fe",
"photos/1777196668_scaled_1777196659432905191941560795155.jpg": "d4888593e9b87d507607f36778b05550",
"photos/1777459985_scaled_image.jpg": "23a98d0c436ea88848740beae199b0c9",
"photos/1778066406_scaled_image.jpg": "0f81b54fd8a43578e225d431d051fb6c",
"photos/1778316614_scaled_17783166041778859324476705845229.jpg": "d9d770363d42714ba500549a52783928",
"photos/1778350767_scaled_17783507583282415678100724000312.jpg": "c5ff45c80279e9928ddd5706fa0b974d",
"photos/1778429482_scaled_17784294488078204555286072504405.jpg": "5336dc164984c015a7fe6adbec80fe9b",
"photos/1778510241_scaled_image.jpg": "188bf9f6f4837bf8a98a8802dd0e8316",
"photos/1778572620_scaled_17785726081215218175431336806410.jpg": "67dc81457909ab53f7e201d05f191062",
"php/auth_helper.php": "9600e83323c0bc8dc5c6e6230f6646a4",
"php/get_photo.php": "27fcd73c1e5cb21f6a255351a59e20aa",
"php/list_photos.php": "7e618103347f6f7ffaaefb93c8cfdee5",
"php/lola_config.php": "283c32d6aa67e990378cd6600a84d79e",
"php/me.php": "54f106dcc16a0c974e4719a91a2e46f6",
"php/test.php": "7aaf7acb737e485459c407da35f1b7a0",
"php/upload.php": "1a78f6010909e48efbac59a7fc72b70c",
"version.json": "21943d8ecae970e7df0c7d3f46eb7d8f"};
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
