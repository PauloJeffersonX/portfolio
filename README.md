# Paulo Jefferson — Portfólio

Sou Paulo Jefferson da Silva, do Rio de Janeiro, formado em **Análise e Desenvolvimento de Sistemas**. Trabalho com **Suporte de TI e Field Service** e reuni aqui um pouco da minha experiência e dos projetos que mantenho em casa.

No trabalho, lido com usuários, equipamentos e problemas que precisam ser resolvidos no local. Fora dele, continuo mexendo com Linux, infraestrutura, automação e IA. Às vezes para resolver alguma necessidade minha; outras vezes porque quero entender como alguma coisa funciona.

**Versão atual do portfólio: V2.7.3.pro.5.2**

**Site:** [paulojeffersonx.vercel.app](https://paulojeffersonx.vercel.app/)

## Sobre mim

Minha experiência está principalmente no suporte técnico presencial, em ambientes corporativos e de varejo. Trabalho com diagnóstico de hardware e software, manutenção, Windows, Linux, redes, impressoras, PDVs e periféricos.

Já passei de **880 chamados atendidos**. Cada atendimento exige entender o problema, testar as possibilidades e conferir se o equipamento ou serviço voltou a funcionar dentro do procedimento do cliente.

Em casa, uso meus laboratórios para estudar e experimentar com mais calma. Pesquiso, configuro, testo e, quando alguma coisa dá errado, tento entender o motivo. Também documento o que funcionou para conseguir consultar depois.

## Projetos em destaque

### Private Cloud & Home Infrastructure

Montei esse servidor para centralizar alguns serviços que uso em casa e estudar Linux e infraestrutura ao mesmo tempo. Ele fica ligado 24 horas por dia.

**Equipamento**

- Placa TN5095A com Intel N5095.
- 16 GB de RAM DDR4.
- M.2/NVMe para o sistema.
- SSD para dados e containers.
- HD de 1 TB para backup.

**O que uso nele**

- Ubuntu Server 24.04 LTS.
- Docker e Docker Compose.
- Portainer.
- Nextcloud.
- n8n.
- AdGuard Home.
- Cockpit.
- OpenSSH.
- Bash e Cron.

O AdGuard Home funciona como DNS da rede de casa. Também uso esse ambiente para administrar serviços pelo terminal, organizar o armazenamento, acompanhar o servidor e testar automações.

O backup tem uma sequência definida: o script para os containers, compacta os dados, grava a cópia no HD, inicia os serviços novamente e remove os backups antigos conforme a retenção configurada.

### Windows Support Automation Platform

Criei essa ferramenta em PowerShell para reunir tarefas de suporte, manutenção e diagnóstico do Windows em um só lugar, pelo terminal.

Ela tem módulos para:

1. Conferir se está sendo executada como administrador.
2. Verificar e reparar a imagem do Windows com DISM.
3. Executar rotinas de DNS e Winsock.
4. Fazer limpeza e manutenção.
5. Atualizar aplicativos com Winget.
6. Executar rotinas de otimização do armazenamento.
7. Consultar informações de hardware e sistema com CIM/WMI.

Usei IA como apoio para gerar, revisar, reorganizar e depurar o código. A definição da ferramenta, sua organização, os testes e a validação ficaram sob minha responsabilidade.

### AEGIS — AI Core

A AEGIS é minha assistente virtual baseada no **Hermes Agent**, que venho personalizando e integrando cada vez mais ao meu ambiente Fedora. Hoje ela reúne ferramentas, skills e automações que uso e testo no meu próprio dia a dia.

O projeto continua evoluindo conforme vou descobrindo novas possibilidades e adaptando a AEGIS para a forma como eu trabalho.

O Hermes Agent fornece a base. Meu trabalho sobre ela envolve a experiência de uso, a organização, o comportamento, as skills, as integrações e a interface, incluindo a identidade visual da AEGIS.

**Dados confirmados em 14/09/2026**

- AEGIS-AGENT v0.21.2 (2026.9.11).
- 25 tools.
- 72 skills.
- Base: Hermes Agent.
- Ambiente: Fedora Linux.

Python, Ollama e modelos de linguagem locais também fazem parte desse ambiente de estudo e experimentação.

O fluxo abaixo resume a ideia:

`Usuário → AEGIS → Tools + Skills → Fedora / Ollama`

## Meus laboratórios

### Fedora Infrastructure Lab

Uso Fedora no meu computador principal. Ele também é o ambiente onde estudo Linux e faço boa parte dos meus testes.

No uso e na manutenção desse sistema, trabalho com Btrfs, rsync, Bash, Git, permissões, montagem de discos e configurações no `fstab`.

Uma das situações que documentei foi a recuperação de aproximadamente **98 GB de dados** depois de uma reinstalação, junto com a restauração seletiva do ambiente.

### Windows Workstation Engineering

Uso esse laboratório para testar manutenção e recuperação do Windows 11.

Os testes envolvem organização de discos, NTFS, GPT/UEFI e criação e restauração de imagens com Clonezilla. Também trabalho com armazenamento utilizado entre Windows e Linux.

### Local AI Lab

Faço testes com modelos de IA na minha própria máquina. Quero entender como eles se comportam com o hardware que tenho: quanto usam de memória da placa de vídeo, como a quantização afeta a execução e como integrar os modelos às ferramentas do ambiente.

**Meu computador**

- AMD Ryzen 7 5700X.
- 32 GB de RAM DDR4.
- AMD Radeon RX 6600 com 8 GB de VRAM.
- Fedora.
- Ollama e AEGIS.

### Retro Gaming System

Montei outra máquina compacta com Batocera para jogos retrô e emulação. Ela usa uma segunda TN5095A, separada do servidor.

**Configuração**

- Intel N5095.
- 16 GB de RAM DDR4.
- M.2 para o sistema.
- SSD de 480 GB.
- Batocera.
- Dois joysticks.
- Adaptador Bluetooth USB.

Esse projeto também faz parte do que gosto de explorar com hardware e Linux.

## AEGIS Game Mode

O portfólio tem dois minigames escondidos. Coloquei pequenas pistas pelo site para quem quiser descobrir esse extra durante a navegação.

Existem duas formas de abrir:

- Clicar três vezes rapidamente em **AEGIS**, no rodapé.
- Digitar o **Konami Code**: `↑ ↑ ↓ ↓ ← → ← → B A`.

### Neon Breakout

Você controla a plataforma, rebate a bola e tenta destruir os blocos.

### Signal Dodge

Você desvia dos obstáculos enquanto a pontuação e a dificuldade aumentam.

**Controles pelo teclado**

- `← →` ou `A D`: movimentar.
- `Espaço`: pausar ou continuar.
- `Esc`: fechar o jogo.

Os jogos rodam diretamente no navegador, com HTML, CSS e JavaScript, sem dependências externas. Eles seguem a mesma identidade visual do restante do portfólio.

## O que estou estudando

Meu foco está em **Suporte, Infraestrutura e Administração de Sistemas**. A prioridade é aprofundar o que já encontro no trabalho e nos laboratórios.

O laboratório de **Active Directory e Windows Server** faz parte dessa direção, com estudos de domínio, usuários, OUs, grupos, GPO, DNS, compartilhamentos e permissões NTFS.

Também tenho estudos e projetos planejados para:

- Monitoramento com Grafana, Prometheus ou Zabbix.
- Gestão de chamados e ativos com GLPI.
- Acesso remoto com WireGuard.
- Inventário automatizado de TI.
- Recuperação de ambientes e estratégia de backup 3-2-1.
- VLANs, DHCP, DNS e roteamento.

Na trilha de automação e DevOps, quero continuar avançando em Python e depois explorar CI/CD, cloud, Terraform, Kubernetes e observabilidade.

Esses pontos são estudos e planos. O que já uso na prática está descrito nos projetos e laboratórios acima.

## Tecnologias e ferramentas

Uso essas ferramentas em contextos diferentes: trabalho, computador pessoal, laboratórios ou estudos. Os projetos ajudam a mostrar onde cada uma entra.

- **Sistemas:** Windows 11, Fedora e Ubuntu Server; Windows Server na trilha de estudos.
- **Infraestrutura:** TCP/IP, LAN, DNS, DHCP, SSH, Btrfs, NTFS e GPT/UEFI.
- **Containers:** Docker, Docker Compose e Portainer.
- **Automação:** PowerShell, Bash, Cron e Python.
- **Versionamento:** Git e GitHub.
- **IA:** Ollama, modelos de linguagem e AEGIS sobre o Hermes Agent.
- **Serviços no laboratório:** Nextcloud, n8n, AdGuard Home e Cockpit.
- **Suporte Windows:** DISM, Winget, CIM/WMI e Clonezilla.
- **Portfólio:** HTML, CSS e JavaScript.

## Acessibilidade

O site tem recursos para facilitar a navegação e o acesso ao conteúdo:

- Navegação por teclado e foco visível.
- Link para pular ao conteúdo principal.
- HTML semântico e atributos ARIA nos componentes interativos.
- Suporte à preferência por redução de movimento.
- Ajustes para modos de cores forçadas.
- Cuidados com o contraste.
- Componentes expansíveis acessíveis por clique, toque e teclado.
- Informações essenciais disponíveis visualmente e em texto, sem depender de áudio.

Se eu adicionar vídeos ou áudios, a proposta é incluir legendas ou transcrição.

Uso a WCAG 2.2 como referência para essas melhorias. O portfólio não tem certificação formal de acessibilidade.

## Publicação

O site está hospedado na **Vercel**:

[paulojeffersonx.vercel.app](https://paulojeffersonx.vercel.app/)

O projeto usa HTML, CSS e JavaScript, e o código fica versionado no GitHub. O formulário também funciona sem precisar de uma etapa de build.

As referências ao GitHub Pages no histórico correspondem à hospedagem anterior.

## Opiniões dos visitantes

Depois da seção de contato, deixei um espaço para quem quiser comentar ou sugerir alguma melhoria.

O nome é opcional. A mensagem é obrigatória e pode ter até **1.000 caracteres**.

O envio usa **Formspree com JavaScript via CDN**. As mensagens chegam por e-mail de forma privada e não aparecem publicamente no site. O recebimento já foi testado e confirmado.

O formulário também tem alguns cuidados:

- Mensagens de envio, sucesso e erro em português.
- Limpeza dos campos somente quando o envio dá certo.
- Preservação do texto quando ocorre uma falha.
- Layout compacto, com temas claro e escuro.
- Rótulos, foco visível, navegação por teclado e avisos acessíveis.
- Digitação nos campos separada do detector do Konami Code.
- CSS em `css/11-opinion.css` e comportamento em `opinion.js`.
- Nenhum endereço de e-mail destinatário ou token privado incluído no código do formulário.

## Como o portfólio foi mudando

O site foi sendo ajustado em etapas. A **V2.7.3** ficou como base visual, e as revisões seguintes trouxeram mudanças nos textos, na organização do CSS, na acessibilidade e no uso pelo celular.

Quero continuar registrando o que realmente mudou e o motivo de cada alteração. Se uma parte já funciona bem e representa o que faço, ela pode continuar como está.

O registro detalhado está em [HISTORICO_ATUALIZACOES_PORTFOLIO.md](HISTORICO_ATUALIZACOES_PORTFOLIO.md). As revisões deste README também ficam preservadas abaixo.

## Contato

**Paulo Jefferson da Silva**  
Rio de Janeiro — RJ

- **E-mail:** [pjsolucoes3@gmail.com](mailto:pjsolucoes3@gmail.com)
- **LinkedIn:** [Paulo Jefferson](https://www.linkedin.com/in/paulo-j-silva)
- **GitHub:** [PauloJeffersonX](https://github.com/PauloJeffersonX)

<p align="center">
  <strong>PAULO JEFFERSON // AEGIS</strong><br>
  Support • Infrastructure • Automation • Local AI
</p>

<p align="center">
  <em>Built for the field. Powered by curiosity.</em>
</p>


---

## Revisão V2.7.3.pro.3

Esta revisão mexe principalmente na forma de contar o conteúdo do portfólio. Os projetos, recursos, Game Mode, responsividade, acessibilidade e estrutura modular do CSS foram mantidos.

- textos reescritos em linguagem mais direta e pessoal;
- remoção de frases genéricas e excesso de linguagem promocional;
- experiência profissional ajustada para separar o trabalho atual como prestador de serviços dos clientes e plataformas atendidas;
- cargos anteriores apresentados pelos cargos formais, sem transformar apoio informal em título profissional de TI;
- projetos descritos pelo que foi montado, testado e usado na prática;
- URL principal atualizada para a publicação na Vercel;
- Naquela revisão, AEGIS foi mantido com 22 Tools e 96 Skills;
- AEGIS Game Mode, Neon Breakout, Signal Dodge e pistas preservados.


## Revisão V2.7.3.pro.4

Correção do AEGIS Game Mode no celular, evitando conflito com o menu mobile e ajustando a interface do jogo em telas menores. Também foram atualizados `robots.txt` e `sitemap.xml` para apontar para o domínio atual `paulojeffersonx.vercel.app`.


---

## Revisão V2.7.3.pro.4 — Apresentação da AEGIS e correção do menu móvel

Atualização de 14/09/2026, registrada no commit `4f5052c`, mantendo a versão do portfólio e sua identidade visual.

- A apresentação da AEGIS passou a explicar seu uso como assistente virtual baseada no **Hermes Agent**, personalizada e integrada ao meu ambiente Fedora.
- O texto deixa mais claro o trabalho de personalização da experiência, organização, comportamento, skills, integrações e interface, sem apresentar a base como criada por mim do zero.
- Os dados técnicos foram separados da apresentação pessoal: **AEGIS-AGENT v0.21.2 (2026.9.11)**, **25 tools**, **72 skills**, **Fedora Linux** e **Hermes Agent**.
- O hash do upstream saiu da seção pública. Tooltips e textos de acessibilidade foram ajustados para usar “a AEGIS”.
- No menu móvel, foi limitado o tamanho do painel ao espaço disponível no cabeçalho e bloqueado o deslocamento horizontal da página, preservando a animação lateral.
- A correção foi verificada no Firefox em larguras equivalentes a **360, 390 e 430 px**, incluindo abertura do menu, navegação até a AEGIS e abertura e fechamento do Game Mode. Nesses testes, a página deixou de se deslocar lateralmente e o menu voltou a abrir dentro da tela após fechar o jogo.
- A confirmação no navegador do celular permanece pendente; o sintoma específico relatado no aparelho não foi reproduzido integralmente na simulação.
- Arquivos alterados nessa implementação: `index.html` e `css/10-mobile-menu.css`.

**Referência atual da AEGIS:** os dados acima substituem, para consulta do estado atual, as referências anteriores a 20 tools e à versão v0.21.1. Os trechos anteriores foram preservados como registro.

**Estado atual do portfólio:** V2.7.3.pro.4.


---

## Revisão V2.7.3.pro.5.1 — Consolidação da AEGIS e do menu móvel

Esta revisão reúne a atualização da apresentação da AEGIS, a correção do menu móvel e os registros de documentação realizados em 14/09/2026.

- AEGIS apresentada como assistente virtual baseada no Hermes Agent, personalizada e integrada ao Fedora.
- Dados de referência: **AEGIS-AGENT v0.21.2 (2026.9.11)**, **25 tools** e **72 skills**. Essa é a versão da assistente; a versão do portfólio é **V2.7.3.pro.5.1**.
- Menu móvel com largura limitada ao cabeçalho e bloqueio de deslocamento horizontal, mantendo a animação lateral.
- Verificação no Firefox em larguras equivalentes a 360, 390 e 430 px; confirmação no navegador do celular ainda pendente.
- Referências de versão atual sincronizadas no README principal e na documentação do CSS, com registro no histórico de atualizações.
- Entradas de versões anteriores preservadas como histórico.

**Convenção de versionamento e commits:** usar a versão no nome do commit de cada revisão, seguindo a sequência `V2.7.3.pro.5.1`, `V2.7.3.pro.5.2`, `V2.7.3.pro.5.3` e assim por diante. Registrar as mudanças no README por acréscimo, atualizar as referências de estado atual e preservar os registros históricos.

**Estado atual do portfólio:** V2.7.3.pro.5.1.


**Diretriz de preservação do README:** os trechos anteriores foram restaurados integralmente. As próximas atualizações devem ser acrescentadas ao final, sem substituir ou remover textos existentes, inclusive referências de versões antigas. A versão vigente deve ser informada no registro mais recente; nesta revisão, permanece V2.7.3.pro.5.1.


---

## Revisão V2.7.3.pro.5.2 — README com uma escrita mais natural

Reescrevi a apresentação do README para explicar minha rotina e meus projetos de um jeito mais direto e próximo de como falo.

- Mantive as informações dos equipamentos, projetos, laboratórios e contatos.
- Atualizei a apresentação principal da AEGIS com os dados já confirmados: v0.21.2 (2026.9.11), 25 tools e 72 skills, sobre a base do Hermes Agent no Fedora.
- Preservei integralmente os blocos de revisão e as diretrizes que já estavam ao final do arquivo.
- Esta revisão é de documentação; a página, os estilos e os jogos continuam como estavam.

**Estado atual do portfólio:** V2.7.3.pro.5.2.
