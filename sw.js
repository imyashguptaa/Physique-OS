const C='physique-v1';
const A=['physique.html','manifest.webmanifest','icon-192.png','icon-512.png','fonts/Inter-400.ttf','fonts/Inter-500.ttf','fonts/Inter-600.ttf','fonts/SpaceGrotesk-400.ttf','fonts/SpaceGrotesk-500.ttf','fonts/SpaceGrotesk-600.ttf','fonts/SpaceGrotesk-700.ttf','fonts/Unbounded-600.ttf','fonts/Unbounded-800.ttf'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(A)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))).then(()=>clients.claim()))});
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(fetch(e.request).then(r=>{if(r.ok){const c=r.clone();caches.open(C).then(x=>x.put(e.request,c))}return r}).catch(()=>caches.match(e.request,{ignoreSearch:true}).then(r=>r||caches.match('physique.html'))))});
