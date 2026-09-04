# Histórico de Atualizações — Portfólio Paulo Jefferson

Aqui fui registrando as mudanças que realmente ficaram no portfólio ao longo do projeto. Não é um log de cada tentativa: entram só as versões e ajustes que fizeram parte da evolução do site.

A **V2.7.3** virou a base principal e, depois dela, continuei fazendo pequenos refinamentos na linha `.pro`, sem jogar fora o que já estava funcionando.

---

## V2.0 — Base visual aprovada

- Definição da identidade visual principal do portfólio.
- Tema escuro em grafite/preto com destaques em ciano e azul elétrico.
- Estética tecnológica profissional, evitando excesso de elementos “hacker”.
- Estrutura base com apresentação, experiência, projetos, laboratórios, roadmap, formação e contato.

---

## V2.1 — Currículo e SEO

- Sincronização das informações profissionais com o currículo.
- Ajustes de título profissional e conteúdo de experiência.
- Inclusão e revisão de metadados para SEO.
- Preparação de dados para compartilhamento do portfólio.

---

## V2.2 — Expansão de projetos

- Inclusão e reorganização dos principais projetos técnicos.
- Melhor separação entre experiência profissional e projetos pessoais/acadêmicos.
- Reforço de tecnologias e competências aplicadas em cada projeto.

---

## V2.3 — Projetos, Labs e Roadmap

- Criação de uma estrutura mais clara para:
  - Projetos em destaque.
  - Infrastructure Labs.
  - Labs & Builds.
  - Roadmap técnico.
- Melhor diferenciação entre projetos concluídos, laboratórios contínuos e estudos futuros.

---

## V2.4 — Roadmap reorganizado

- Active Directory definido como prioridade atual.
- Trilha DevOps reorganizada.
- Python marcado como competência em evolução.
- Docker mantido como competência já aplicada na prática.
- Sistema PDV reclassificado como projeto secundário em planejamento.
- Inclusão de ideias futuras:
  - Monitoramento de infraestrutura.
  - Help Desk / ITSM.
  - WireGuard.
  - Inventário automatizado.
  - Disaster Recovery.
  - Segmentação de redes.

---

## V2.5 — Hero premium

- Reformulação da primeira dobra do site.
- Hero com maior impacto visual.
- Melhor hierarquia entre nome, área de atuação e chamada profissional.
- Reorganização dos botões e tecnologias de destaque.
- Navbar mais integrada ao visual do portfólio.

---

## V2.5.1 — Tema claro/escuro

- Remoção de elementos visuais que não combinavam com a proposta final.
- Implementação funcional de tema claro e escuro.
- Persistência da preferência de tema no navegador.
- Ajustes de contraste e legibilidade entre os dois modos.

---

## V2.5.2 — Terminal simplificado

- Simplificação do terminal exibido no hero.
- Conteúdo reduzido para informações relevantes:
  - Identidade.
  - Foco profissional.
  - Stack de laboratório.
  - Localização.
  - Status.
- Inclusão dos badges:
  - Fedora.
  - Docker.
  - Git.
  - AEGIS.
  - Ollama.

---

## V2.6 — Acessibilidade

- Inclusão de link “Pular para o conteúdo principal”.
- Melhorias de navegação por teclado.
- Estados de foco visíveis.
- Uso de `aria-expanded`, `aria-controls` e `aria-pressed`.
- Fechamento de menu por `Esc`.
- Suporte a `prefers-reduced-motion`.
- Melhorias para `forced-colors`.
- Status do roadmap deixaram de depender apenas de cor.
- Imagens com carregamento otimizado.
- Estrutura semântica aprimorada com `main`, `nav` e `footer`.
- Inclusão de nota de acessibilidade sem alegação de certificação formal.

---

## V2.6.1 — Tooltips acessíveis

- Inclusão de balões explicativos para tecnologias e termos técnicos.
- Tooltips acionados por:
  - Hover.
  - Foco de teclado.
- Uso de `aria-describedby` para leitores de tela.
- Tooltips aplicados inicialmente em:
  - Tecnologias do hero.
  - Badges do terminal.
  - Etapas da trilha DevOps.
- Descrições contextualizadas com o uso real das tecnologias no laboratório.

---

## V2.6.2 — Private Cloud e ampliação dos tooltips

### Private Cloud & Home Infrastructure

- Projeto reformulado para representar melhor a infraestrutura self-hosted.
- Servidor identificado corretamente como:
  - Placa TN5095A.
  - Intel N5095.
  - 16 GB DDR4.
  - Operação 24/7.
- Organização do projeto em:
  - Serviços.
  - Rede e DNS.
  - Armazenamento e backup.
  - Segurança e administração.
- Inclusão de:
  - Ubuntu Server 24.04 LTS.
  - Docker / Compose.
  - Portainer.
  - Nextcloud.
  - n8n.
  - AdGuard Home.
  - Cockpit.
  - OpenSSH.
  - Bash e Cron.
- Representação da arquitetura:
  `Internet → Roteador → DNS / AdGuard → Rede local`.
- Backup automatizado destacado com execução diária.

### Retro Gaming System

- Correção do hardware para uma segunda placa física TN5095A.
- Mantida como máquina independente do servidor.
- Intel N5095 e 16 GB DDR4.

### Tooltips

- Expansão dos balões para termos de:
  - Experiência.
  - Linux.
  - Windows.
  - Redes.
  - IA.
  - Roadmap.
  - Infraestrutura.

---

## V2.6.3 — Windows Support Automation Platform

- Projeto renomeado e reposicionado como ferramenta de automação de suporte Windows.
- Destaque para arquitetura CLI baseada em PowerShell.
- Organização em sete módulos:
  1. Verificação administrativa.
  2. DISM.
  3. DNS / Winsock.
  4. Limpeza e manutenção.
  5. Winget.
  6. Otimização de armazenamento.
  7. Inventário via CIM/WMI.
- Inclusão do conceito de **AI-Assisted Development**.
- Tooltips específicos para:
  - PowerShell.
  - CIM/WMI.
  - DISM.
  - Winget.
  - Winsock.
  - Optimize-Volume.
  - AI-Assisted Development.
- Projeto apresentado como solução de suporte e diagnóstico, e não apenas como um script.

---

## V2.6.4 — AEGIS e Local AI Lab

### AEGIS

- Atualização para:
  - **22 Tools**.
  - **96 Skills**.
- Reposicionamento como **Personal AI Environment / Local AI Assistant**.
- Melhor explicação da implementação baseada no Hermes Agent.
- Fluxo conceitual:
  `Usuário → AEGIS → Tools + Skills → Fedora / Ollama`.
- Destaques:
  - Automação.
  - Local AI.
  - Linux Workflow.
  - Extensibilidade.
- Ajustes de texto:
  - “Experimentação assistida por agente em fluxos e tarefas técnicas.”
  - “Integração ao Fedora como parte do laboratório técnico diário.”

### Local AI Lab

- Seção reposicionada como laboratório de infraestrutura, desempenho e integração de IA local.
- Destaque para:
  - Modelos e quantização.
  - VRAM e desempenho.
  - Integração.
  - Local-first.
- Hardware contextualizado:
  - Ryzen 7 5700X.
  - 32 GB DDR4.
  - Radeon RX 6600 8 GB.
- Integração com Fedora, Ollama e AEGIS.

---

## V2.6.6 — Hero equilibrado

- Remoção definitiva do terminal grande do lado direito.
- Inclusão do bloco editorial **Current Focus**.
- Organização em três áreas:
  - Suporte & Field Service.
  - Infraestrutura & Homelab.
  - Automação & IA Local.
- Inclusão do status:
  `BUILDING • LEARNING • SOLVING`.
- Retorno da estrutura original da seção “Sobre”.
- Manutenção das métricas e citação com melhor equilíbrio visual.

---

## V2.6.7 — Projects & Labs expansíveis

- Cards grandes substituídos por linhas retangulares compactas.
- Exibição inicial apenas de:
  - Categoria.
  - Número.
  - Nome do projeto.
  - Botão de expansão.
- Conteúdo completo aberto por:
  - Hover.
  - Clique.
  - Toque.
  - Teclado.
- Apenas um projeto aberto por vez.
- Tooltips internos preservados.
- Grande redução de altura da seção.

---

## V2.6.8 — Primeira tela compacta

- Redução da altura dos indicadores principais.
- Métricas menores.
- Citação mais compacta.
- Menor espaçamento vertical.
- Mais conteúdo visível sem necessidade de rolagem imediata.

---

## V2.6.9 — Roadmap expansível

- Roadmap convertido para o mesmo padrão visual dos Projects & Labs.
- Cada item passou a aparecer como linha retangular compacta.
- Expansão por hover, clique, toque e teclado.
- Apenas um item aberto por vez.
- Active Directory, DevOps e projetos planejados reorganizados.
- Tooltips técnicos mantidos dentro dos conteúdos expandidos.

---

## V2.7.1 — Rodapé compacto

- Remoção do bloco grande de assinatura.
- Paulo Jefferson e AEGIS reunidos em uma assinatura discreta no rodapé.
- Estrutura final:
  `© 2026 PAULO JEFFERSON // AEGIS`
- Linha complementar:
  `SUPPORT • INFRA • AUTOMATION • LOCAL AI`
- Frase “Built for the field. Powered by curiosity.” mantida de forma discreta.
- Informação de acessibilidade preservada.

---

## V2.7.2 — Hero mais alto e melhor aproveitamento da tela

- Redução do espaço vazio entre header e hero.
- Conteúdo principal deslocado para cima.
- Menor distância entre:
  - Hero.
  - Current Focus.
  - Métricas.
  - Citação.
  - Sobre.
- Melhor aproveitamento da resolução desktop.

---

## V2.7.3 — Versão final escolhida

- Redução adicional do hero sem perder impacto visual.
- Nome principal levemente menor.
- Menos espaço entre:
  - Título.
  - Descrição.
  - Botões.
  - Tecnologias.
- Current Focus mais compacto.
- Métricas menores.
- Citação mais fina.
- Seção “Sobre” inicia mais cedo.
- Mantidos:
  - Projects & Labs expansíveis.
  - Roadmap expansível.
  - Tooltips acessíveis.
  - Tema claro/escuro.
  - Melhorias de acessibilidade.
  - AEGIS com 22 Tools e 96 Skills.
  - Private Cloud & Home Infrastructure.
  - Windows Support Automation Platform.
  - Local AI Lab.
  - Rodapé compacto Paulo Jefferson // AEGIS.


### Refinamento do conteúdo profissional

- Seção **Sobre** reescrita para apresentar melhor a trajetória profissional, experiência prática e evolução para Infraestrutura e Administração de Sistemas.
- Título atualizado para **“Experiência prática. Evolução contínua.”**
- Inclusão da evolução entre suporte, laboratórios de infraestrutura, automação, IA local e roadmap técnico, sem transformar a seção em uma lista de tecnologias.

### AEGIS Game Mode / Easter Egg

- Inclusão de um easter egg interativo sem alterar a proposta profissional do portfólio.
- O **AEGIS Game Mode** fica escondido durante a navegação normal e pode ser desbloqueado de duas formas:
  - 3 cliques rápidos em **AEGIS** no rodapé.
  - Konami Code: `↑ ↑ ↓ ↓ ← → ← → B A`.
- Inclusão de pistas discretas espalhadas pelo site para incentivar a descoberta do easter egg, sem entregar diretamente o segredo.
- Entre as pistas usadas estão mensagens como:
  - “Nem tudo aqui está à vista.”
  - “Já pensou em dar um rolezinho por aqui?”
  - “Alguns projetos têm segredos. Nem todos estão documentados.”
  - “Dica antiga: certas sequências eram usadas antes mesmo de existir achievements.”
  - “Se chegou até aqui, talvez já tenha passado perto de uma entrada escondida.”
  - A sequência parcial `↑ ↑ ↓ ↓ ← → ← →` acompanhada da frase “Algumas sequências antigas ainda funcionam.”
  - A pequena indicação `3x?` próxima ao AEGIS.
- O Game Mode recebeu dois minigames executados diretamente no navegador e sem dependências externas:
  - **Neon Breakout** — jogo arcade de rebater a bola e destruir os blocos.
  - **Signal Dodge** — jogo de sobrevivência em que o jogador precisa desviar de obstáculos enquanto a dificuldade aumenta.
- Inclusão de seletor para alternar entre os dois jogos.
- Controles por teclado e botões para dispositivos móveis.
- Suporte a:
  - `←` / `→` ou `A` / `D` para movimentação.
  - `Espaço` para pausar e continuar.
  - `Esc` para fechar o Game Mode.
- Interface integrada à identidade visual escura/ciano do portfólio.
- HUD com **Score**, **Lives** e **Level**.
- O recurso foi mantido como um detalhe opcional e escondido, preservando a experiência principal para recrutadores e visitantes que acessarem apenas o conteúdo profissional.

---

# Estado final

**Versão final: V2.7.3**

A V2.7.3 foi escolhida como base final por oferecer o melhor equilíbrio entre:

- identidade visual;
- leitura profissional;
- densidade de conteúdo;
- responsividade;
- acessibilidade;
- destaque aos projetos;
- navegação compacta;
- apresentação técnica sem excesso visual;
- easter egg interativo integrado sem tirar o foco profissional do site.

O portfólio permanece preparado para publicação via **GitHub Pages**, utilizando a branch `main` e a raiz do repositório como fonte de deploy.

## E daqui para frente?

A **V2.7.3** é a versão que escolhi para fechar esta etapa do portfólio, mas o projeto não termina aqui.

A ideia é continuar mexendo nele aos poucos, conforme eu for aprendendo coisas novas, colocando novos projetos em prática e ganhando mais experiência na área. Então é bem provável que apareçam novos labs, tecnologias, projetos, recursos interativos e também ajustes no próprio visual do site.

Por enquanto, a V2.7.3 representa bem o momento atual do portfólio. As próximas mudanças entram quando realmente tiver algo novo que faça sentido mostrar.

**Status:** projeto ativo e em evolução.


### Refinamento profissional e mobile — V2.7.3

- Substituição do indicador **PJ / MEI** por **INFRA**, priorizando competência técnica na apresentação inicial.
- Novo indicador: **INFRA — Infraestrutura de TI — Windows • Linux • Redes**.
- Correção do bloco de citação em telas pequenas, evitando quebra excessiva de palavras e sobreposição entre frase, assinatura e complemento.
- Desktop preservado; ajuste direcionado ao breakpoint mobile.
- Mantidos AEGIS Game Mode, Neon Breakout, Signal Dodge e demais recursos da V2.7.3.


### Priorização dos indicadores profissionais — V2.7.3

- Reorganização dos cinco indicadores do hero por prioridade profissional: **Experiência → Suporte → Infraestrutura → Automação → IA Local**.
- Remoção da redundância entre os antigos indicadores **INFRA** e **LAB**.
- **880+** passa a destacar experiência prática em suporte técnico e Field Service.
- **SUPORTE** destaca N1/N2, Windows, hardware e redes.
- **INFRA** concentra laboratório prático com Linux, Docker e Homelab.
- **AUTOMAÇÃO** destaca Bash, PowerShell, Python, rotinas e produtividade.
- **IA LOCAL** permanece como diferencial técnico com AEGIS, Ollama e LLMs.


---

## V2.7.3.pro — Organização estrutural do CSS

- Mantida a V2.7.3 aprovada como base visual e funcional.
- Reorganização interna do CSS sem alteração visual intencional.
- `styles.css` transformado em ponto de entrada leve.
- Regras distribuídas em módulos dentro da pasta `css/`.
- Ordem original da cascata preservada.
- Criado `css/README.md` para documentar a responsabilidade de cada módulo.
- Preservados os refinamentos profissionais e mobile da V2.7.3.
- Preservados tema claro/escuro, acessibilidade, tooltips, Projects & Labs expansíveis, Roadmap expansível e AEGIS Game Mode.
- Preservados Neon Breakout e Signal Dodge.
- A revisão `.pro` melhora manutenção e legibilidade do código sem representar uma nova identidade visual.

**Estado atual:** V2.7.3.pro — projeto ativo e em evolução.


### Ajuste de contato público — V2.7.3.pro

- Removido o botão/link público de WhatsApp do portfólio para reduzir a exposição do número pessoal.
- E-mail público do portfólio alterado para `pjsolucoes3@gmail.com`.
- LinkedIn e GitHub permanecem como canais profissionais públicos.
- README atualizado para utilizar o novo e-mail profissional.


---

## V2.7.3.pro.1 — Refinamento profissional e acessibilidade

- Mantida a identidade visual e funcional aprovada da V2.7.3.pro.
- CTA principal alterado de `Conheça meu trabalho` para `Ver projetos e laboratórios`.
- CTA do currículo alterado de `Baixar currículo` para `Baixar CV em PDF`.
- Seção `Vamos conversar?` alterada para `Entre em contato`.
- Texto de contato revisado para linguagem mais profissional e objetiva, com foco em Suporte de TI, Field Service e Infraestrutura.
- Mantidos LinkedIn, GitHub e o e-mail profissional `pjsolucoes3@gmail.com` como canais públicos.
- WhatsApp/telefone continuam fora do site público.
- Comunicação de acessibilidade ampliada para deixar explícito que o conteúdo essencial não depende de áudio.
- Informações e interações principais permanecem disponíveis visualmente e em texto.
- Para eventual conteúdo multimídia futuro, fica registrada a diretriz de utilizar legendas e/ou transcrição.
- README atualizado em conjunto com o histórico.

**Estado atual:** V2.7.3.pro.1 — projeto ativo e em evolução.


---

## V2.7.3.pro.2 — Refinamento do menu mobile

- Mantida a identidade visual e funcional da V2.7.3.pro.1.
- Corrigido o posicionamento do menu de navegação em telas menores.
- O menu continua entrando lateralmente, porém agora abre como um painel alinhado ao cabeçalho, com margem das bordas da tela.
- Largura ajustada para celulares e tablets, evitando aparência de menu “colado” ou deslocado.
- Altura limitada à viewport com rolagem interna quando necessário.
- Adicionados borda, raio e sombra coerentes com o restante da interface.
- Links ganharam área de toque mais equilibrada e estados de foco/hover mais claros.
- Mantido suporte a teclado, `Escape`, `aria-expanded` e `prefers-reduced-motion`.
- README e documentação da estrutura CSS atualizados.

**Estado atual:** V2.7.3.pro.2 — projeto ativo e em evolução.


---

## V2.7.3.pro.3 — Textos mais naturais

Essa revisão não nasceu para mudar o visual do site. A ideia foi mexer justamente no que estava me incomodando: alguns textos estavam com cara de apresentação pronta demais e não pareciam muito com a forma como eu realmente contaria minha experiência.

O que mudou:

- Reescrevi o hero para chegar mais rápido ao ponto e explicar o que faço sem tanta frase de efeito.
- O **Sobre mim** passou para primeira pessoa e ficou mais próximo da minha rotina: suporte em campo, resolução de problemas e os laboratórios que mantenho em casa para continuar estudando.
- Corrigi a experiência atual para deixar clara a relação profissional: atuo pela **PJ Soluções em TI** como prestador de serviços e hoje realizo atendimentos por meio da FindUP e da Positivo S+.
- Mantive a Cencosud como uma das operações atendidas, sem dar a entender que existe vínculo direto com a empresa.
- Na Electrolux e na Pingon, voltei a usar os cargos reais — **Almoxarife I** e **Assistente de Compras** — em vez de tentar puxar essas experiências para TI.
- Reescrevi os projetos contando mais o que eu montei, uso, testei e aprendi. Isso vale para o Private Cloud, automação em PowerShell, Fedora, Windows, Local AI, Batocera e AEGIS.
- Cortei parte das frases promocionais, slogans e textos que pareciam estar tentando “vender” demais o portfólio.
- O AEGIS continua no projeto com os números atuais de **22 Tools e 96 Skills**, mas sem transformar isso no centro da apresentação.
- O que ainda está em estudo continua aparecendo como estudo ou roadmap. Não transformei tecnologia planejada em experiência profissional.
- Atualizei a referência principal do site para `paulojeffersonx.vercel.app`.

Por baixo, continuei usando a estrutura da **V2.7.3.pro.2**. Menu mobile, tema claro/escuro, CSS modular, acessibilidade, projetos expansíveis, roadmap e o AEGIS Game Mode continuam no projeto.

**Status:** essa é a versão que melhor representa o portfólio hoje, mas ele continua em construção e vai mudar conforme eu tiver projetos e experiências novas que realmente façam sentido colocar aqui.
