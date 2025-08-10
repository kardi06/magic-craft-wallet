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