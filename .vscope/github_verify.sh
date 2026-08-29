#!/usr/bin/env bash
set -euo pipefail

echo '=== VERIFICACAO ANTES DO PUSH ==='
echo

echo '1) Chave SSH existe?'
if [ -f "$HOME/.ssh/id_ed25519" ]; then
  echo '   SIM: ~/.ssh/id_ed25519'
else
  echo '   NAO: execute o script de SSH antes.'
  exit 1
fi

echo
echo '2) ssh-agent ativo?'
if pgrep -x ssh-agent >/dev/null 2>&1; then
  echo '   SIM'
else
  echo '   NAO: execute: eval "$(ssh-agent -s)"'
fi

echo
echo '3) Conexao com GitHub:'
ssh -T git@github.com 2>&1 || true

echo
echo '4) Pasta do portfolio:'
cd "$HOME/projects/portfolio" || exit 1

echo
echo '5) Git configurado?'
git config user.name || echo '   user.name NAO configurado'
git config user.email || echo '   user.email NAO configurado'

echo
echo '6) Remote configurado?'
git remote -v || echo '   Nenhum remote configurado'

echo
echo '7) Status do repo:'
git status --short
