# Guia: Vincular Portfolio ao GitHub

Você já tem:
- Chave SSH gerada em ~/.ssh/id_ed25519
- Chave pública: ssh-ed25519 ... portfolio-portfolio
- Git inicializado em ~/projects/portfolio
- Commit local feito: "first commit: portfolio v2 base"

## Passo 1 — Cadastrar a chave pública no GitHub

1. Acesse: https://github.com/settings/keys
2. Clique em "New SSH key"
3. Title: portfolio-portfolio
4. Key: cole a chave pública que está em ~/.ssh/id_ed25519.pub
5. Clique em "Add SSH key"

## Passo 2 — Testar conexão SSH com o GitHub

Execute no terminal:
  ssh -T git@github.com

Esperado:
  "Hi <seu-usuario>! You've successfully authenticated, but GitHub does not provide shell access."

Se aparecer "Permission denied", a chave não foi cadastrada corretamente.

## Passo 3 — Criar repositório no GitHub

1. Vá para https://github.com/new
2. Repository name: portfolio
3. Deixe como Public (ou Private, se preferir)
4. NÃO marque "Add a README file"
5. Clique em "Create repository"

## Passo 4 — Conectar o repositório local ao remoto

No terminal, dentro de ~/projects/portfolio:
  git remote add origin git@github.com:<seu-usuario>/portfolio.git

Substitua <seu-usuario> pelo seu usuário real do GitHub.

## Passo 5 — Verificar remote

Execute:
  git remote -v

Esperado:
  origin  git@github.com:<seu-usuario>/portfolio.git (fetch)
  origin  git@github.com:<seu-usuario>/portfolio.git (push)

## Passo 6 — Enviar código para o GitHub (push)

Execute:
  git push -u origin master

Se der conflito de branch (master vs main), use:
  git branch -m master main
  git push -u origin main

## Passo 7 — Confirmar no GitHub

Acesse o repositório e veja se os arquivos apareceram.

---

Dúvidas em cada passo? Me pergunte antes de executar.
