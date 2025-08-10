# Epic 2: Dashboard & History

- Owner: TBD
- Target: 1-day blitz
- Priority: P1
- Success Metrics: Balance and last 5 tx visible for selected network
- Dependencies: Epic 1 (wallet ready)
- Risks: RPC rate limits

## Objective
Show balances and recent tx summary in the popup UI.

## Scope
- PRD: [Dashboard](../prd/04-features.md), [Acceptance Criteria](../prd/09-acceptance-criteria.md)
- Architecture: [Core Modules](../architecture/03-core-modules.md)

## Acceptance Criteria
- Native coin balance loads and refreshes
- Last 5 tx show hash, date/time, amount, status, explorer link

## Implementation Notes
- Use ethers.js Provider.getBalance and getHistory (or third-party if not supported)
- Shorten hashes; add explorer URL helpers 