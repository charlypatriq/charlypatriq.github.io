'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "3afaf15bf5a5d4060bdd49fab7e8090f",
"assets/AssetManifest.bin.json": "4856d5021632affbe0b1a9f892fba5ae",
"assets/AssetManifest.json": "60aec52ebee8b41d4928732805da4953",
"assets/assets/icon/icon.png": "b8dbc33de7aef982ecc7a8a3ec744863",
"assets/FontManifest.json": "209e66e2f71c646cc7eb744ea1cea0dc",
"assets/fonts/MaterialIcons-Regular.otf": "e4ab7957b9731ec44cf6ef26adcf2a15",
"assets/lib/icons/back.png": "a45e14c8775862ace3cf61de0e82d73b",
"assets/lib/icons/delivery.png": "0381b07124ef173dfbef13410dc0df64",
"assets/lib/icons/grocery.png": "d9e01eb0fe936451f7d788aa74829c5f",
"assets/lib/icons/img.png": "b8dbc33de7aef982ecc7a8a3ec744863",
"assets/lib/icons/shop.png": "ab3bb6d7195ed9922bc0ba0f79a4c7b9",
"assets/lib/images/112468-online-shopping.json": "2f3dabe6008527dd2412434cdb4616d8",
"assets/lib/images/30826-online-shopping.json": "5f4f9e2eaf52143364966e8c7eab112c",
"assets/lib/images/37141-shopping-checlist-app.json": "4ffba1d0287b940c1df3e37a8f4a9e46",
"assets/lib/images/54350-online-shopping-delivery.json": "b805b15430aef859beab671b50ca6148",
"assets/lib/images/58915-online-shop.json": "eefe83c90ed6132ad634d42f08422b30",
"assets/lib/images/83548-online-shopping-black-friday.json": "7d9db972ffe2b369ac15ebf13a4e4876",
"assets/lib/images/90690-shopping.json": "402ec3380515631c80034167d991f6b9",
"assets/lib/images/aov.jpg": "faf603d967d3c141be9b97e336057210",
"assets/lib/images/atmcard.json": "94dbd0766c7749aa1fecf0c20e37fe14",
"assets/lib/images/bucket.jpg": "01e06112828de36de50f85098bae1a51",
"assets/lib/images/clv.png": "560d71178c76f52ea4b0d1fc6f2c1abd",
"assets/lib/images/coleslawsalad.avif": "7784a2b0699b55b7c915748deda34735",
"assets/lib/images/cr.png": "361ef26e954215501bdb9680b67aa12e",
"assets/lib/images/customersegmentation.png": "7547db0a48f0de9e68184782f9a81914",
"assets/lib/images/customerspend.png": "0a60f396eddc09c614329a76b4d4d5ea",
"assets/lib/images/ia.jpg": "5163c4e001a555550cb942a5db4e0784",
"assets/lib/images/men.png": "93ac5f2fcb57a78e64ffd4e5f1829010",
"assets/lib/images/men2.png": "93ac5f2fcb57a78e64ffd4e5f1829010",
"assets/lib/images/pleasewait.json": "3906472e2ad066d691dbbe405efdc38e",
"assets/lib/images/rp.jpg": "a37045dc987340f3a31782b6b86fff5a",
"assets/lib/images/sbc.jpg": "76b15ce9eb142031007af693fa2a38c1",
"assets/lib/images/tp.jpg": "8988bd9c6cee3c2720ad04c160563f34",
"assets/lib/images/visitors.png": "97805ea70321e4568ad2b659d59ed57a",
"assets/lib/images/women.png": "93ac5f2fcb57a78e64ffd4e5f1829010",
"assets/lib/images/women2.png": "93ac5f2fcb57a78e64ffd4e5f1829010",
"assets/lib/images/women3.jpg": "67b14b5fb32fa2861674b633d5609758",
"assets/NOTICES": "66bb3af1bf7addc6b238e9037e7f97bc",
"assets/packages/awesome_snackbar_content/assets/back.svg": "ba1c3aebba280f23f5509bd42dab958d",
"assets/packages/awesome_snackbar_content/assets/bubbles.svg": "1df6817bf509ee4e615fe821bc6dabd9",
"assets/packages/awesome_snackbar_content/assets/types/failure.svg": "cb9e759ee55687836e9c1f20480dd9c8",
"assets/packages/awesome_snackbar_content/assets/types/help.svg": "7fb350b5c30bde7deeb3160f591461ff",
"assets/packages/awesome_snackbar_content/assets/types/success.svg": "6e273a8f41cd45839b2e3a36747189ac",
"assets/packages/awesome_snackbar_content/assets/types/warning.svg": "cfcc5fcb570129febe890f2e117615e0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_charts/google_fonts/Comforter-Regular.ttf": "cff123ea94f9032380183b8bbbf30ec1",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"canvaskit%20-%20Shortcut.lnk": "9188bd401f43b0ef7c6f842f16eac843",
"favicon.png": "b8dbc33de7aef982ecc7a8a3ec744863",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "da68bfde63c549e011db22e3a5c45ae8",
"icons/Icon-192.png": "b8dbc33de7aef982ecc7a8a3ec744863",
"icons/Icon-512.png": "b8dbc33de7aef982ecc7a8a3ec744863",
"icons/Icon-maskable-192.png": "b8dbc33de7aef982ecc7a8a3ec744863",
"icons/Icon-maskable-512.png": "b8dbc33de7aef982ecc7a8a3ec744863",
"index.html": "14c830f8891ae2cb1c4c73d06e2a5ea5",
"/": "14c830f8891ae2cb1c4c73d06e2a5ea5",
"main.dart.js": "eeb41226f4248f1d8c716cb4a4209c70",
"manifest.json": "67088cefdf000f2804231c8c46f59b97",
"version.json": "246f3af4bab18431dab805ea669e22ca"};
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
