# Epic 3: Send Transaction Flow

- Owner: TBD
- Target: 1-day blitz
- Priority: P0
- Success Metrics: Successful send with confirmation and explorer link
- Dependencies: Epic 1 (wallet), Epic 2 (UI base)
- Risks: Gas estimation/nonce issues

## Objective
Enable sending transactions with a confirmation modal.

## Scope
- PRD: [Send Transaction](../prd/04-features.md)
- Architecture: [Core Modules](../architecture/03-core-modules.md)

## Acceptance Criteria
- Input fields for address/currency/amount
- Confirmation shows recipient, amount, network, gas fee
- On send, show status; link to explorer

## Implementation Notes
- Use ethers.js sendTransaction
- Add validation for address/amount 