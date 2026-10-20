# Boi na Bolsa — Simulador de Hedge BGI/B3

Kit de gestão e risco no mercado futuro do boi gordo, em versão web interativa da planilha *Simulador Boi na Bolsa*.

**Acesse:** https://cleitonfranco74.github.io/boibolsa/ (capa) · [simulador](https://cleitonfranco74.github.io/boibolsa/simulador.html) · [cotações ao vivo](https://cleitonfranco74.github.io/boibolsa/cotacoes.html)

## O que tem

- **Cotações ao vivo** ([cotacoes.html](https://cleitonfranco74.github.io/boibolsa/cotacoes.html)) — curva BGI e CCM buscada direto da B3 a cada minuto, com semáforo de trava para o seu custo
- **Painel do Lote** — os 6 números que decidem e o veredito 🟢/🟡/🔴
- **Hedge BGI** — cenários de preço no abate, ponto de equilíbrio, quanto travar, margem de garantia e diário de ajustes
- **Futuro × Put** — trava de preço vs. seguro de preço, comprado × vendido
- **Confinamento 90 dias** — custos, ROI, trava de milho CCM, sensibilidade e a história dos dois pecuaristas
- **Mercado** — histórico CEPEA, previsão (Holt-Winters + ARIMA), taxa de conversão milho × boi e risco de base MT × B3
- **Aprenda** — passo a passo, mitos e verdades, dicionário do pecuarista e exercícios

Páginas em HTML/CSS/JavaScript puro, sem dependências — publicadas via GitHub Pages. O rodapé de todas as páginas mostra um contador de visitas (`contador.js`, via serviço gratuito [Abacus](https://abacus.jasoncameron.dev); cada visita conta uma vez por sessão do navegador). Todas as páginas têm também o botão **💬 Dê sua opinião** (`feedback.js`): nota de 1 a 5 estrelas, perfil de quem usa, comentário livre e e-mail opcional para resposta. Cada aba do simulador termina com "Esta ferramenta foi útil? 👍 👎" e a capa mostra a nota média a partir de 5 avaliações. As respostas vão para uma Planilha Google; `feedback.js` é o mesmo arquivo do [dashboard financeiro](https://github.com/cleitonfranco74/dashboard_financeiro), cujo README explica como ligar a planilha (seção Feedback). O Painel do simulador busca a cotação do dia na B3 e aplica nos campos com um clique.

Ferramenta educativa — não é recomendação de investimento.

## Autor

Desenvolvido por **Prof. Dr. Cleiton Franco** · Doutor em Economia · Professor Adjunto da UNEMAT, Câmpus de Sinop.

© 2026 Cleiton Franco
