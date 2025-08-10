# Epic 1: Core Wallet MVP

- Owner: TBD
- Target: 1-day blitz
- Priority: P0
- Success Metrics: Wallet can be created/imported, unlocked, and used to sign a tx in test env
- Dependencies: None
- Risks: Timebox; encryption bugs

## Objective

Deliver secure onboarding, encryption, and base background logic to enable signing.

## Scope

- PRD: [Overview](../prd/01-overview.md), [Goals](../prd/02-goals-objectives.md), [Features/Onboarding](../prd/04-features.md)
- Architecture: [Overview](../architecture/01-overview.md), [Core Modules](../architecture/03-core-modules.md)

## Acceptance Criteria

- Create/import 12-word mnemonic
- AES encryption at rest, passphrase unlock
- Encrypted storage in chrome.storage.local
- Background can decrypt/sign a dummy tx

## Implementation Notes

- Use bip39 + ethers.js wallet
- AES with WebCrypto
- Add minimal unlock gate in background
