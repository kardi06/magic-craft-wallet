# MagicCraft Wallet (based on Wigwam)

This project is a customized build of the open‑source Wigwam Web3 wallet browser extension, adapted for MagicCraft.

Upstream repository: https://github.com/wigwamapp/wigwam

## Branch

- Use branch: `feat/magicraft`

## Requirements

- Node.js ≥ 18.12
- Yarn v1 (classic)

## Install

```bash
# clone your fork with the feat/magicraft branch
git clone <your-fork-url> magiccraft-wallet
cd magiccraft-wallet
git checkout feat/magicraft

# install dependencies
yarn
```

## Development (Dev build)

1) Start the dev build
```bash
yarn start
```
- Outputs to: `dist/dev/chrome_unpacked` (hot rebuild on save).

2) Load the dev extension in Chrome
- Open `chrome://extensions`
- Enable “Developer mode”
- Click “Load unpacked”
- Select `dist/dev/chrome_unpacked`

3) Dev env notes
- Ensure `RELEASE_ENV=false` for dev.
- Recommended flags (in `.env` or `.env.dev`):
  - `WIGWAM_DEV_CONTROL_PANEL=false` (hide dev buttons)
  - `WIGWAM_USE_TEST_ADDRESS=true` (optional, shows a demo “Recent Transactions” list in dev)
- Networks: Settings → Web3 → verify HTTP RPC endpoints for Ethereum, BNB Chain, Polygon.
- After edits, either reload the extension or refresh the wallet tab.

## Production (Prod build)

1) Set production env (example)
```
RELEASE_ENV=true
WIGWAM_DEV_CONTROL_PANEL=false
WIGWAM_USE_TEST_ADDRESS=false

# Optional but recommended if you use indexer features
WIGWAM_INDEXER_API=https://indexer-api.wigwam.app
WIGWAM_INDEXER_API_KEY=<your-key>

# Only needed if you use Infura RPCs with ${INFURA_API_KEY}
WIGWAM_INFURA_API_KEY=<infura-key>
```

2) Build for Chrome
```bash
yarn build
```
- Outputs to: `dist/prod/chrome_unpacked`

3) Load the prod extension
- Remove any dev build from `chrome://extensions`
- Click “Load unpacked” → select `dist/prod/chrome_unpacked`

## Common operations

- Reset / re-add extension: remove it from `chrome://extensions`, then load the desired dev/prod folder.
- Switch networks: from Assets, click the Ethereum/BNB/Polygon cards. For custom networks use Settings → Web3 → “Add new network” (HTTP RPC only).
- Watch‑only account (no funds needed): Wallets → Add wallet → Watch only → paste an EOA → Add wallets → switch to the matching network to see “Recent Transactions”.

## Troubleshooting

- “There was an error” screen: usually missing envs or invalid RPC/indexer keys.
  - Dev: `RELEASE_ENV=false`
  - Prod: `RELEASE_ENV=true` and valid RPC/indexer config
- Dev buttons visible in prod: ensure `RELEASE_ENV=true` and `WIGWAM_DEV_CONTROL_PANEL=false`, rebuild, and load the prod folder.
- Prices show 0 or 401: provide `WIGWAM_INDEXER_API` + `WIGWAM_INDEXER_API_KEY` or remove both to disable indexer. The app still works with on‑chain reads.
- Infura RPC template: if an RPC contains `${INFURA_API_KEY}`, set `WIGWAM_INFURA_API_KEY` or switch to a non‑Infura HTTP endpoint.

## Upstream project

This work is based on Wigwam — Web3 Wallet — Browser extension — EVM Blockchains. For features and security docs, see: https://github.com/wigwamapp/wigwam 