# Epic 5: Address Tools & QR

- Owner: TBD
- Target: 1-day blitz
- Priority: P2
- Success Metrics: Copy address and QR autofill working
- Dependencies: Epic 1
- Risks: QR parsing inconsistencies

## Objective

Provide convenience tools for copying address and QR parsing.

## Scope

- PRD: [Address & QR](../prd/04-features.md)
- Architecture: [Core Modules](../architecture/03-core-modules.md)

## Acceptance Criteria

- Copy address button to clipboard API
- Drag-and-drop QR image parses address and autofills recipient

## Implementation Notes

- Use Clipboard API; use jsqr or qrcode-reader
