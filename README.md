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

Páginas em HTML/CSS/JavaScript puro, sem dependências — publicadas via GitHub Pages. O rodapé de todas as páginas mostra um contador de visitas (`contador.js`, via serviço gratuito [Abacus](https://abacus.jasoncameron.dev); cada visita conta uma vez por sessão do navegador). Todas as páginas têm também o botão **💬 Dê sua opinião** (`feedback.js`): nota de 1 a 5 estrelas, perfil de quem usa, comentário livre e e-mail opcional para resposta. Cada aba do simulador termina com "Esta ferramenta foi útil? 👍 👎" e a capa mostra a nota média a partir de 5 avaliações. As respostas vão para uma Planilha Google; `feedback.js` é o mesmo arquivo do [dashboard financeiro](https://github.com/cleitonfranco74/dashboard_financeiro), cujo README explica como ligar a planilha (seção Feedback). O simulador busca na B3, ao abrir, a **cotação atual da @** (vencimento BGI mais próximo) e o **preço futuro da @** (primeiro vencimento depois do abate), além do milho CCM, e monta o exemplo de todas as abas a partir deles — cenários, quanto travar, futuro × put, confinamento, história dos dois pecuaristas, diário de ajustes, risco de base e exercícios. O que o usuário digita prevalece; o botão “↺ Voltar à cotação de hoje” refaz o exemplo. Sem conexão, usa a última cotação salva no navegador ou os preços de referência da planilha. No Painel, o bloco **📍 Sua praça: Mato Grosso** recebe os preços digitados pelo usuário (boi gordo MT, milho disponível MT, reposição MT e custo de produção do IMEA, com fonte e data): o boi MT define a base da praça (venda física = futuro B3 + base), o milho e o magro de MT entram no custo, e o custo do IMEA aparece como referência. Campo vazio = usa a B3; os valores ficam salvos no navegador. O confinamento calcula as arrobas com o **rendimento de carcaça** (abate: peso × 54% ÷ 15; compra do magro: peso × 50% ÷ 15, ambos editáveis). A história dos dois pecuaristas tem um controle deslizante do preço no abate e um gráfico do bolso de cada um, e o Painel gera o **Meu plano de hedge** (lote, custo, preços, veredito, contratos, caixa e a frase para a corretora) para enviar no WhatsApp, copiar ou imprimir. Para quem chega pela primeira vez, um **guia rápido** de 4 perguntas (cabeças, pesos e dias, preço do magro) leva direto ao veredito. Os números principais têm um botão **?** com a explicação em linguagem de fazenda, o **Diário de ajustes** vira jogo (mercado sorteado e decisão na chamada de margem) e **Mitos e verdades** vira quiz com placar.

Ferramenta educativa — não é recomendação de investimento.

## Autor

Desenvolvido por **Prof. Dr. Cleiton Franco** · Doutor em Economia · Professor Adjunto da UNEMAT, Câmpus de Sinop.

© 2026 Cleiton Franco
