# Workflow Guidelines

## Development Cycle
- **TDD (Test-Driven Development)**: Ensure filters and routing logic are tested before deployment.
- **Commit Pattern**: Semantic commits (feat, fix, chore).
- **Safety First**: Always implement a "Safety Valve" (like the `origem == manual` filter) to prevent automated messages to unauthorized contacts.

## Tracks
- Each major project (Semente Hub, iGreen) runs in its own track.
- Use `conductor/tracks/` to store track-specific specs and plans.
