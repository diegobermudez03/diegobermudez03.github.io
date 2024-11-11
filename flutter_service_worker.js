'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "5b0e302c510bdef441b6966d0831f84e",
".git/config": "6ea95dd96611341784312430808ffba8",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "f32f816d200b7c4663594840901a5a88",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6c7f0015306b3eb4711be30e17b61c56",
".git/logs/refs/heads/main": "39f177651b66981eff78bfade5e126ef",
".git/logs/refs/remotes/origin/main": "bbdb8ebbf1406c9ee0e86da5b4a3c46b",
".git/objects/02/f00b20e5efd591eadf846bf38e6d7be3cbc85d": "187e5af821340c6f7eb6e318ebbb749a",
".git/objects/07/b4d651266e265b95ff9dc47df745743f4081a1": "9a3cdcaa5a2f9be407525bc9d2dcf214",
".git/objects/0a/4ccd3b504c206f66e2ab996602f8dc82fa2378": "c00eeaa73d7f0146df436f8485f4d2ab",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/14/de8767cdffb606a101c6f313602827c559a3ad": "7a58264d424f2dc0de7a6d74f6f6ef97",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/1b/072cac6288bf02b6f62c86868768d3eb37642e": "e8fb684a7860e27726038fd18aebdc9c",
".git/objects/1c/da82c2bc2abf2d55dfd17b122beafd4fc7108b": "f63613a605da5e5d43fe4193a075201e",
".git/objects/1e/402151c166b1c550bf0df6b1cbb9331b1b52f3": "4c89f962ff9137820d8258ddbd9b64fe",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/21/4a7bdacf50f33118e69d840af040fcb09f3a0c": "abe8931c0fb1e9f370168a7f2c9c97bb",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/2b/9cba3cf1aaa22835644996a27faa1a629d690a": "fb24b7df8d0322091ee7e969c9dc76a5",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4a/4c4fa16de49126ff55313a5a32965c6e07de98": "66d40f9ed97dd4554911218b629b2c00",
".git/objects/4b/21b1c62c5ffe0ef99712e31a4374e07ce5a9eb": "fd5319092a5cdc4c7d4852422d6e22ce",
".git/objects/4c/cd70b0a746da17bc24bc0d9d4d129e80f91f92": "3331305659643d29720ab11004c912ff",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/5a/24028523eb55ddb18505b4edee42dbc888ac2a": "64a65e30ba3c6d70ad0a9b1d8f6bdb6e",
".git/objects/5f/447a551b46c1741b43f04dbc47f9e6771e8f53": "33ac247be2ca94b2d82eecba94974b82",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/6b/0c59b6dfc27d4846f72c086b8a1e0c2bbf9f71": "1816a59ff49c28db9da2e304ca210af8",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/75/2119a9d2ef492277ee7dea7be77427976de2f4": "ae2da51273ec35f1b3709e148493ea9f",
".git/objects/7c/7b776b4823e16802f917f6f722c22b8941af8d": "0f7f66082d610c78a0aaf8a12e3fad95",
".git/objects/85/4583689c9f19a62e53ef8d21d136634b48f305": "cfa786eb22bffbf4419211f6eb4fdc51",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/86/30c6a5ac69eae13497c9cf2679cd60bb45f474": "90c4b8a06c0ff71db3fdcb21cee50166",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/98/65720f7a19067fbad649e6cdb629be92260290": "5c2121648ca961edce4f1d108c385ff7",
".git/objects/9b/dbfcb9b1ed79ff22483cde3682c00bf3d645d4": "64fd8c161e7c2222ce178735eeae4ba2",
".git/objects/a5/720e2dbe05afc25f7e63bd62b2cb0a7200cef4": "87fa216f0d1843c73c401eb0e1f1e4fd",
".git/objects/af/17a7104a245277b8917c3ad6575d1fb3c687cc": "891395db9479b13bc1e74e318e151a37",
".git/objects/b1/ee8d5744b6cbdaa558391b0aea422772c14207": "a6dcea87d92be029118f4eb8380654de",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bf/9b9eebea4e6f3129b45f61e36153b479a6295f": "ce6443e6f2b446692f1b5a1af7f2be14",
".git/objects/c3/15383e550f46a03462e96493e1c03448d9838b": "f293d1ef83a858f3a70e80a05fddaac4",
".git/objects/c7/d6ccab3eca54078995afe57c1ae156c375e2b2": "b2043e4e06159f4c42c7dff6b566ba5d",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/cc/86762f7f8f97f75e50c395c4ddfc288f06239d": "4086f1381dbe036d94191bf0c4149d1e",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/bb6d44cf1d8f40aacac99baff84e5d7e59c5cf": "351e4c559e707e302eefe64f136696d1",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/b16091edc513ce2d6f8b087860a52e6ebc113e": "28c98bbcb76511507d333d72f7df0d33",
".git/objects/db/c2bef22d225a75b5eb50c4b6d98ae09dc7b8f6": "849ea5e44c3040cc338b48afaf59270e",
".git/objects/e3/e7fb7519813f8283bdff45bc06771fb4d47c87": "efe36143448196a237cd08e1a6f9f3e7",
".git/objects/e6/d70449b54cf2765103008322a7711e6d4e5b36": "100bf1c164047fc3b0c2de2a8a1aa0f5",
".git/objects/e9/f80e04fc4a3661de46430f89a9fddd3eff0ea1": "87a0152a8ac11322f4ed9d3fc8f0935a",
".git/objects/ea/7c1a9ae8152b78599ea7f10aa98681f51a885c": "751653a63b60423bd7c4b9b3f4188978",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f9/5b6689d21266fe615ec34991a8644b818ab5e8": "3936d3a45053a296eeaa0c2840e1c0a4",
".git/objects/fe/b923193313be2c33af92df86fc627fc96aa89c": "48d3914d107178d5a36ac94eb3d8b760",
".git/refs/heads/main": "1b564891e53bcdadf251f8b2a8dc9796",
".git/refs/remotes/origin/main": "1b564891e53bcdadf251f8b2a8dc9796",
"assets/AssetManifest.bin": "0e84ae961e155fab6e3c5860fa101a89",
"assets/AssetManifest.bin.json": "8809a9af465984f0d7524dff87d70a9d",
"assets/AssetManifest.json": "a77fef861441b70886666358ce3f4eaa",
"assets/assets/images/hero_background.jpg": "04229027319ecf59f25111628f41e28b",
"assets/assets/images/logo.png": "23f7881f3132d632af833fc4d22175e9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "b515848961a119ec08c57e28260eaa1b",
"assets/NOTICES": "2e382b5850f99d0371416d3e46ee0030",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "815d844d4dbbf3c5e2f3a11a7548a9bc",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/logo.png": "46914eb12a712a89e8ab206263cf4df7",
"index.html": "1183ff62b9a6ed384c30103439d4e373",
"/": "1183ff62b9a6ed384c30103439d4e373",
"main.dart.js": "27924c18636590ef3809920a47a807ac",
"manifest.json": "c233c9c5e39e78c709c3a41688381948",
"version.json": "3137c6a551d4bdc867e3c1ffd8851877"};
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
