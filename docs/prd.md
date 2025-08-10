"""# MagicCraft Wallet - Product Requirements Document (PRD)

## 1. Overview
MagicCraft Wallet is a browser extension wallet built on top of the open-source Wigwam wallet framework. It is designed to provide users with a magical, themed experience while managing their cryptocurrency on EVM-compatible blockchains. The wallet will support Ethereum, Binance Smart Chain (BSC), and Polygon mainnets, with a focus on security, usability, and aesthetic appeal.

---

## 2. Goals & Objectives
- Provide a secure, user-friendly wallet experience in a browser extension.
- Support onboarding via new wallet creation or importing existing wallets.
- Display real-time balances and recent transactions.
- Enable sending cryptocurrency with confirmation and explorer tracking.
- Introduce a MagicCraft spellbook theme with immersive visuals.
- Limit scope to core wallet functions for speed of delivery.

---

## 3. Target Platforms
- Google Chrome (latest version)

---

## 4. Features

### 4.1 Wallet Onboarding
- Create a new wallet with a 12-word mnemonic phrase.
- Import existing wallet using a 12-word mnemonic.
- Encrypt mnemonic with a user-defined passphrase before storage using AES.
- Store encrypted wallet data in `chrome.storage.local`.

### 4.2 Dashboard
- Show native coin balance for the selected network.
- Display the last 5 transactions with:
  - Transaction hash (shortened with link to block explorer)
  - Date/Time (local format)
  - Amount
  - Status (confirmed/pending)
- Refresh balance and transactions on demand.

### 4.3 Send Transaction
- Input fields for recipient address, currency, and amount.
- MetaMask-style confirmation pop-up with:
  - Recipient
  - Amount
  - Network
  - Gas Fee
- On send:
  - Show transaction status.
  - Provide “View in Explorer” link.

### 4.4 Address & QR
- "Copy Address" button to copy to clipboard.
- Drag-and-drop QR code image to auto-fill recipient field.

### 4.5 Network Selector
- Dropdown menu for Ethereum Mainnet, BSC Mainnet, and Polygon Mainnet.
- Preconfigured RPC endpoints.

### 4.6 MagicCraft Theme
- Color palette:
  - Midnight Blue: `#1A1B2F`
  - Arcane Purple: `#6E4B9E`
  - Gold Accent: `#F1C40F`
- UI inspired by a wizard’s spellbook:
  - Rounded, parchment-style panels.
  - Glowing hover effects on buttons.
  - Rune-like iconography.

---

## 5. Non-Goals
- No NFT display or management in v1.
- No token swap functionality.
- No integration with non-EVM blockchains.

---

## 6. Technical Requirements

### 6.1 Frontend
- Framework: React + TailwindCSS
- State Management: Context API or Zustand
- QR Code Parsing: `qrcode-reader` or `jsqr`

### 6.2 Web3 Integration
- Library: Ethers.js
- RPC Connections:
  - Ethereum Mainnet
  - Binance Smart Chain Mainnet
  - Polygon Mainnet

### 6.3 Security
- AES encryption for mnemonic storage.
- Passphrase required for wallet unlock and transaction signing.

### 6.4 Extension APIs
- Browser Storage: `chrome.storage.local`
- Clipboard API for copy functionality.
- Drag-and-drop event handling for QR codes.

---

## 7. User Stories

### US1: Wallet Creation/Import
**As a** new user, **I want** to create or import a wallet, **so that** I can start managing my crypto in MagicCraft.

### US2: Balance & Transaction History
**As a** user, **I want** to see my balance and recent transactions, **so that** I can track my funds easily.

### US3: Sending Transactions
**As a** user, **I want** to send cryptocurrency with a confirmation step, **so that** I can avoid mistakes.

### US4: Address Tools
**As a** user, **I want** to copy my wallet address and scan QR codes, **so that** I can send/receive funds easily.

### US5: Network Switching
**As a** user, **I want** to change networks, **so that** I can manage assets on different EVM chains.

---

## 8. Milestones & Delivery Plan

### Phase 1: Branding & Setup
- Update name, icons, and colors.
- Prepare Tailwind theme.

### Phase 2: Core Wallet Enhancements
- Implement AES encryption with passphrase.
- Display balance and transactions.
- Add send transaction confirmation.

### Phase 3: Utility Features
- Copy address button.
- QR code drop autofill.

### Phase 4: Theme & Testing
- Apply MagicCraft theme.
- Cross-browser testing.
- Record demo video.

---

## 9. Acceptance Criteria
- Wallet creation/import works with encryption and passphrase unlock.
- Balance and last 5 transactions display correctly for selected network.
- Send transaction includes confirmation and explorer link.
- Copy address button and QR autofill work correctly.
- Network selector functions for Ethereum, BSC, and Polygon.
- Theme matches MagicCraft color palette and style.

---

## 10. Deliverables
- GitHub repository with source code.
- README.md with build/install instructions.
- 1–2 minute demo video showing:
  - Wallet create/import.
  - Dashboard with balances/transactions.
  - Sending transaction flow.
  - Theme design.

---

## 11. Risks & Considerations
- RPC endpoint rate limits — may require API keys.
- Browser storage size limits — must store minimal data.
- QR parsing may fail with poor-quality images.

---
"""