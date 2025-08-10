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
