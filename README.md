# Paulo Jefferson — Portfólio Profissional

Portfólio profissional voltado para **Suporte de TI, Field Service, Infraestrutura, Automação e laboratórios técnicos**.

Atuo com suporte presencial e troubleshooting em ambiente corporativo e mantenho laboratórios próprios para colocar em prática Linux, Windows, redes, automação, containers e IA local.

**Versão atual do portfólio: V2.7.3.pro**

> O projeto continua em desenvolvimento e pode receber novos conteúdos, labs e melhorias conforme minha evolução profissional e técnica.

## Portfólio online

**GitHub Pages:**  
https://paulojeffersonx.github.io/portfolio/

---

## Sobre

Sou **Tecnólogo em Análise e Desenvolvimento de Sistemas** e atuo como **Técnico de Suporte de TI / Field Service**, prestando atendimento em campo no Rio de Janeiro.

Minha experiência envolve suporte N1/N2, diagnóstico de hardware e software, Windows e Linux, redes TCP/IP/LAN, PDVs, impressoras, periféricos, infraestrutura local e atendimento dentro de SLA.

Além da rotina profissional, mantenho um ambiente próprio de estudos e testes. Uso esses laboratórios para aprender na prática, testar soluções, automatizar tarefas e documentar o que funciona.

---

## Projetos em destaque

### Private Cloud & Home Infrastructure

Servidor físico dedicado para serviços self-hosted e estudos de infraestrutura.

**Hardware**
- TN5095A
- Intel N5095
- 16 GB DDR4
- M.2/NVMe para o sistema
- SSD para dados e containers
- HDD de 1 TB para backup
- Operação 24/7

**Stack**
- Ubuntu Server 24.04 LTS
- Docker / Docker Compose
- Portainer
- Nextcloud
- n8n
- AdGuard Home
- Cockpit
- OpenSSH
- Bash
- Cron

O laboratório inclui DNS local com AdGuard Home, administração remota, containers, armazenamento, monitoramento básico, atualizações de segurança e rotina automatizada de backup.

O script de backup interrompe os containers de forma controlada, compacta os dados persistentes, envia a cópia para o HDD de backup, inicia novamente os serviços e aplica retenção dos arquivos antigos.

---

### Windows Support Automation Platform

Projeto em PowerShell criado para reunir tarefas recorrentes de suporte, manutenção e diagnóstico do Windows em uma única ferramenta CLI.

A plataforma está organizada em módulos para:

1. Verificação de privilégios administrativos
2. DISM e integridade do Windows
3. DNS e Winsock
4. Limpeza e manutenção
5. Atualização de aplicativos com Winget
6. Otimização de armazenamento
7. Inventário de hardware e sistema via CIM/WMI

O desenvolvimento também utiliza **AI-Assisted Development** como apoio para geração, revisão, refatoração e depuração de código, mantendo a arquitetura, testes e validação sob minha responsabilidade.

---

### AEGIS — Personal AI Environment

Implementação e personalização de um ambiente de IA baseado no **Hermes Agent**, integrado ao meu fluxo diário no Fedora.

**Estado atual**
- 22 Tools
- 96 Skills
- Fedora
- Python
- Ollama
- LLMs locais

Fluxo conceitual:

`Usuário → AEGIS → Tools + Skills → Fedora / Ollama`

O projeto é usado para experimentação assistida por agente em fluxos e tarefas técnicas e como parte do meu laboratório diário em Linux.

---

## Infrastructure & Labs

### Fedora Infrastructure Lab

Minha workstation principal também funciona como laboratório Linux.

Entre os estudos e situações práticas estão Btrfs, rsync, Bash, Git, permissões, montagem de discos, `fstab`, recuperação de ambiente e restauração seletiva de configurações.

Um dos casos documentados envolveu a recuperação de aproximadamente **98 GB de dados** após reinstalação do sistema.

### Windows Workstation Engineering

Laboratório voltado para administração e troubleshooting do Windows 11, armazenamento, NTFS, GPT/UEFI, Clonezilla, preparação de discos, recuperação e interoperabilidade Windows/Linux.

### Local AI Lab

Ambiente para testes de modelos locais, quantização, consumo de VRAM, desempenho de inferência e integração com ferramentas.

**Workstation**
- AMD Ryzen 7 5700X
- 32 GB DDR4
- AMD Radeon RX 6600 8 GB
- Fedora
- Ollama
- AEGIS

### Retro Gaming System

Projeto independente utilizando uma segunda plataforma TN5095A.

**Hardware / software**
- Intel N5095
- 16 GB DDR4
- M.2 para o sistema
- SSD de 480 GB
- Batocera
- Dois joysticks
- Bluetooth USB

O objetivo foi montar uma máquina compacta dedicada à emulação e jogos retrô.

---

## AEGIS Game Mode

O portfólio também ganhou um pequeno **easter egg interativo**.

A ideia foi adicionar algo mais pessoal ao projeto sem mudar a proposta profissional do site. Durante a navegação normal, o Game Mode fica escondido e pequenas pistas aparecem em diferentes partes da página.

Existem duas formas de desbloqueá-lo:

**3 cliques rápidos em `AEGIS` no rodapé**

ou pelo clássico **Konami Code**:

`↑ ↑ ↓ ↓ ← → ← → B A`

### Neon Breakout

Minigame arcade inspirado em Breakout. O objetivo é controlar a plataforma, rebater a bola e destruir os blocos.

### Signal Dodge

Minigame de sobrevivência. O jogador precisa desviar dos obstáculos enquanto a pontuação e a dificuldade aumentam.

**Controles**

`← →` ou `A D` — movimentação  
`Espaço` — pausar / continuar  
`Esc` — fechar o Game Mode

Os dois jogos são executados diretamente no navegador, sem dependências externas, e seguem a identidade visual do portfólio.

Além da parte divertida, o Game Mode funciona como uma pequena demonstração prática de interação com **HTML, CSS e JavaScript**.

---

## Roadmap técnico

Minha trilha atual segue a evolução de **Suporte → Infraestrutura → Administração de Sistemas**, ampliando gradualmente para automação, cloud e DevOps.

`Active Directory → Windows Server → Python → CI/CD → Cloud → Terraform → Kubernetes → Observability`

Também fazem parte dos próximos estudos e projetos:

- Active Directory / AD DS
- Usuários, OUs, grupos e GPO
- DNS e compartilhamentos
- Permissões NTFS
- Monitoramento com Grafana, Prometheus ou Zabbix
- Help Desk / ITSM com GLPI
- WireGuard
- Inventário automatizado de TI
- Disaster Recovery e estratégia 3-2-1
- VLAN, DHCP, DNS e roteamento
- CI/CD
- Cloud
- Terraform
- Kubernetes

---

## Tecnologias e ferramentas

**Sistemas:** Windows 11, Windows Server (roadmap), Fedora, Ubuntu Server  
**Infraestrutura:** TCP/IP, LAN, DNS, DHCP, SSH, Btrfs, NTFS, GPT/UEFI  
**Containers:** Docker, Docker Compose, Portainer  
**Automação:** PowerShell, Bash, Cron, Python  
**Versionamento:** Git, GitHub  
**IA local:** Ollama, LLMs, AEGIS / Hermes Agent  
**Self-hosted:** Nextcloud, n8n, AdGuard Home, Cockpit  
**Suporte:** DISM, Winget, CIM/WMI, Clonezilla  
**Web:** HTML, CSS e JavaScript

---

## Acessibilidade

O portfólio possui melhorias práticas de acessibilidade, incluindo:

- navegação por teclado;
- estados de foco visíveis;
- link para pular ao conteúdo principal;
- atributos ARIA em componentes interativos;
- suporte a `prefers-reduced-motion`;
- melhorias para `forced-colors`;
- contraste entre elementos;
- estrutura semântica;
- interação por clique, toque e teclado nos componentes expansíveis.

O projeto busca seguir boas práticas alinhadas à **WCAG 2.2**, mas não é apresentado como formalmente certificado.

---

## Publicação

O site é publicado através do **GitHub Pages**.

- Branch: `main`
- Diretório de publicação: `/ (root)`
- Deploy pelo GitHub Pages
- Site estático em HTML, CSS e JavaScript

---

## Histórico de desenvolvimento

O desenvolvimento do portfólio foi feito em várias etapas até chegar à **V2.7.3**, mantendo apenas as decisões visuais e funcionais aprovadas. A revisão **V2.7.3.pro** mantém essa mesma base e reorganiza o CSS do projeto para facilitar manutenção e futuras alterações.

O histórico detalhado das alterações está disponível no arquivo:

`HISTORICO_ATUALIZACOES_PORTFOLIO.md`

A **V2.7.3.pro** representa o estado atual do projeto. O visual e os recursos da V2.7.3 foram preservados, enquanto o CSS passou a ser organizado em arquivos menores por responsabilidade. O portfólio continua ativo e pode receber novos projetos, experiências, laboratórios e melhorias conforme fizer sentido.

---

## Contato

**Paulo Jefferson da Silva**  
Rio de Janeiro — RJ

**E-mail:** paulojefferson89@gmail.com  
**LinkedIn:** https://www.linkedin.com/in/paulo-j-silva  
**GitHub:** https://github.com/PauloJeffersonX

---

<p align="center">
  <strong>PAULO JEFFERSON // AEGIS</strong><br>
  Support • Infrastructure • Automation • Local AI
</p>

<p align="center">
  <em>Built for the field. Powered by curiosity.</em>
</p>
