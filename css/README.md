# Organização do CSS — V2.7.3.pro

O CSS original foi dividido sem alterar a ordem da cascata. O arquivo `styles.css` na raiz funciona apenas como ponto de entrada e importa estes módulos na ordem correta.

- `01-core.css` — variáveis, base, estrutura inicial, cabeçalho e responsividade base.
- `02-projects-roadmap.css` — projetos técnicos, labs e primeiras versões do roadmap.
- `03-hero-theme.css` — hero premium, terminal, tema claro/escuro e refinamentos V2.5.x.
- `04-accessibility-tooltips.css` — foco, reduced motion, forced colors, acessibilidade e tooltips.
- `05-infrastructure-ai.css` — Private Cloud, AEGIS e Local AI Lab.
- `06-hero-final.css` — evolução e composição final do hero V2.6.5/V2.6.6.
- `07-accordions.css` — cards expansíveis de Projects & Labs, métricas e roadmap expansível.
- `08-footer-final.css` — footer compacto e ajustes finais do hero V2.7.1–V2.7.3.
- `09-game-mode.css` — Easter Egg / AEGIS Game Mode, Breakout, Dodge e pistas.

## Regra importante

Não altere a ordem dos `@import` em `styles.css` sem revisar a cascata, pois versões posteriores do portfólio sobrescrevem regras anteriores de propósito.
