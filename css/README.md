# Estrutura CSS — V2.7.3.pro.5.2

O `styles.css` da raiz é o ponto de entrada do portfólio e importa os módulos abaixo na ordem necessária para preservar a cascata original.

- `01-core.css` — base, variáveis, layout e responsividade inicial.
- `02-projects-roadmap.css` — projetos, labs e roadmap inicial.
- `03-hero-theme.css` — hero premium, terminal e tema claro/escuro.
- `04-accessibility-tooltips.css` — acessibilidade e tooltips.
- `05-infrastructure-ai.css` — Private Cloud, AEGIS e Local AI Lab.
- `06-hero-final.css` — evolução e ajustes finais do hero.
- `07-accordions.css` — Projects & Labs, métricas e Roadmap expansível.
- `08-footer-final.css` — rodapé e compactação final da V2.7.3.
- `09-game-mode.css` — AEGIS Game Mode, pistas, minigames e refinamentos mobile finais.

- `10-mobile-menu.css` — refinamento final do posicionamento e comportamento visual do menu em celulares/tablets.

> A ordem dos `@import` deve ser mantida, pois faz parte da cascata aprovada da V2.7.3.


## Revisão V2.7.3.pro.5.1

- `10-mobile-menu.css`: bloqueio de deslocamento horizontal em `html` e `body` e limite de largura do painel ao espaço disponível no cabeçalho, em telas de até 900 px.
- Animação lateral e ordem dos imports preservadas.
- Verificação no Firefox em larguras equivalentes a 360, 390 e 430 px, incluindo abertura e fechamento do Game Mode.
