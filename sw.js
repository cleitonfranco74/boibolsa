// Boi na Bolsa — funciona sem internet: guarda as páginas do site e usa a rede quando houver.
const CACHE = 'boibolsa-v1';
const ARQUIVOS = ['./', './index.html', './simulador.html', './cotacoes.html', './contador.js', './feedback.js', './manifest.webmanifest', './icon.svg'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ARQUIVOS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});

// Só arquivos do próprio site: rede primeiro (para pegar atualizações), cache se estiver sem sinal.
// Cotações da B3 e demais serviços externos não passam por aqui — o simulador usa a última cotação salva.
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  e.respondWith(
    fetch(req).then(res => {
      if (res.ok) { const cp = res.clone(); caches.open(CACHE).then(c => c.put(req, cp)); }
      return res;
    }).catch(() => caches.match(req, {ignoreSearch: true}).then(r => r || (req.mode === 'navigate' ? caches.match('./simulador.html') : undefined)))
  );
});
