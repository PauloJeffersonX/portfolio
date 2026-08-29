#!/usr/bin/env bash
set -euo pipefail

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

SSH_DIR="$HOME/.ssh"
KEY_PATH="$SSH_DIR/id_ed25519"
PUB_KEY_PATH="$KEY_PATH.pub"

echo -e "${GREEN}=== SSH + Git setup ===${NC}"

if [ ! -d "$SSH_DIR" ]; then
  mkdir -p "$SSH_DIR"
  chmod 700 "$SSH_DIR"
fi

if [ -f "$KEY_PATH" ]; then
  echo -e "${YELLOW}Chave SSH ja existe.${NC}"
else
  echo -e "${GREEN}Gerando chave SSH Ed25519...${NC}"
  ssh-keygen -t ed25519 -C "$(git config --global user.email || echo 'user@example.com')" -f "$KEY_PATH" -N ""
fi

chmod 600 "$KEY_PATH"

if ! pgrep -x ssh-agent >/dev/null 2>&1; then
  eval "$(ssh-agent -s)"
fi

ssh-add "$KEY_PATH" 2>/dev/null || true

echo
echo -e "${GREEN}=== CHAVE PUBLICA ===${NC}"
cat "$PUB_KEY_PATH"
echo
echo -e "${YELLOW}Adicione em: https://github.com/settings/keys${NC}"
