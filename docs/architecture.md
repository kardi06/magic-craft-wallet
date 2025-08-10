"""# MagicCraft Wallet - Fullstack Architecture

## 1. Overview

MagicCraft Wallet is a browser extension cryptocurrency wallet built on the Wigwam open-source foundation.
It supports Ethereum, Binance Smart Chain (BSC), and Polygon mainnets with a themed UI inspired by a magical spellbook.
The architecture is modular, secure, and optimized for quick feature delivery.

---

## 2. High-Level Architecture Diagram

+--------------------------------------------------------+
| Browser Environment |
| |
| +----------------+ +----------------------------+ |
| | Popup UI | | Options / Settings Pages | |
| | (React + TW) | | (React + TW) | |
| +-------+--------+ +---------------+------------+ |
| | | |
| v v |
| +-------+--------------------------------+--------+ |
| | Background Script (TS) | |
| | - Wallet Logic | |
| | - AES Encryption / Decryption | |
| | - RPC Calls (ethers.js) | |
| | - Network Management | |
| | - Transaction Handling | |
| +-------+--------------------------------+--------+ |
| | | |
| v v |
| +-------+--------+ +-----------+----------+ |
| | chrome.storage | | RPC Providers | |
| | (local) | | (Ethereum/BSC/Poly) | |
| +----------------+ +--------------------+ |
+--------------------------------------------------------+

## 3. Core Modules

### 3.1 UI Layer (React + TailwindCSS)

- **Popup UI**: Displays balance, recent transactions, send form, network selector.
- **Onboarding Pages**: Wallet creation/import, passphrase setup.
- **Confirmation Modals**: For transaction approval.
- **Reusable Components**:
  - Balance Display
  - Transaction List
  - Network Dropdown
  - Address/QR Tools
- **Theming**:
  - Midnight Blue: `#1A1B2F`
  - Arcane Purple: `#6E4B9E`
  - Gold Accent: `#F1C40F`
  - Spellbook-inspired rounded panels & glow effects.

### 3.2 Background Script

- **Wallet Management**:
  - Generate/import 12-word mnemonic (bip39).
  - AES encrypt mnemonic with passphrase.
  - Store encrypted data in `chrome.storage.local`.
- **Transaction Management**:
  - Sign/send transactions using ethers.js.
  - Fetch transaction status from RPC.
- **Network Management**:
  - Switch RPC provider based on network selector.
- **Security**:
  - Passphrase required before signing.

### 3.3 Storage Layer

- Uses `chrome.storage.local` for persistent data:

```json
{
  "wallet": {
    "encryptedMnemonic": "string",
    "salt": "string"
  },
  "settings": {
    "network": "ethereum",
    "theme": "magiccraft"
  }
}
3.4 Blockchain Integration
Library: ethers.js

Networks Supported:

Ethereum Mainnet

Binance Smart Chain Mainnet

Polygon Mainnet

Endpoints: Defined in /src/config/networks.ts.

3.5 QR Code Integration
Libraries: jsqr or qrcode-reader

Flow:

User drags QR image.

Parse QR to get address.

Autofill recipient field.

4. Data Flow Example (Send Transaction)
User enters tx details in UI.

UI sends message to background script.

Background script decrypts mnemonic, signs tx, sends via RPC.

Returns tx hash to UI.

UI displays link to block explorer.

5. Security Considerations
AES encryption at rest for sensitive data.

No passphrase storage.

All blockchain queries via RPC — no third-party key handling.

6. Technology Stack
Frontend: React, TailwindCSS

Blockchain: ethers.js, bip39

QR Parsing: jsqr or qrcode-reader

Extension API: WebExtension Polyfill

Build Tool: Vite/Webpack

Language: TypeScript

7. Deployment
yarn build → creates /dist folder.

Load unpacked extension in Chrome/Firefox.

Publish to respective extension stores.

8. Future Enhancements
Token list & ERC-20 support.

NFT integration.

Hardware wallet support.

DApp browser.
"""
```
