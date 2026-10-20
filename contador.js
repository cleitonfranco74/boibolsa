/* Contador de visitas do site (todas as páginas).
 * Usa o Abacus (abacus.jasoncameron.dev), serviço gratuito e sem cadastro.
 * Cada visita conta uma vez por sessão do navegador: a primeira página aberta soma 1,
 * as demais só leem o total. Se o serviço falhar, o contador fica escondido. */
(() => {
  const API = 'https://abacus.jasoncameron.dev', NS = 'boibolsa-cleitonfranco74', KEY = 'visitas';
  const el = document.getElementById('contador');
  if (!el) return;
  let nova = true;
  try { nova = !sessionStorage.getItem('bb-visita'); } catch {}
  const ctl = new AbortController(); setTimeout(() => ctl.abort(), 8000);
  fetch(`${API}/${nova ? 'hit' : 'get'}/${NS}/${KEY}`, { signal: ctl.signal })
    .then(r => { if (!r.ok) throw 0; return r.json(); })
    .then(j => {
      const n = Number(j.value);
      if (!isFinite(n) || n < 1) return;
      if (nova) try { sessionStorage.setItem('bb-visita', '1'); } catch {}
      el.textContent = `👁️ ${n.toLocaleString('pt-BR')} ${n === 1 ? 'visita' : 'visitas'} ao site`;
      el.hidden = false;
    })
    .catch(() => {});
})();
