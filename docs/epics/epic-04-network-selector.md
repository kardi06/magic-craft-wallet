# Epic 4: Network Selector & RPC

- Owner: TBD
- Target: 1-day blitz
- Priority: P1
- Success Metrics: Switch networks and reflect state in UI and provider
- Dependencies: Epic 1
- Risks: RPC configuration drift

## Objective
Allow user to select Ethereum, BSC, Polygon and switch providers seamlessly.

## Scope
- PRD: [Network Selector](../prd/04-features.md)
- Architecture: [Core Modules](../architecture/03-core-modules.md)

## Acceptance Criteria
- Dropdown with the 3 networks
- Provider switches; balance/tx re-query

## Implementation Notes
- Centralize RPC endpoints; derive explorer URLs per network 