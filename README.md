# Whiskers-and-Wonders.exe
I want to create a website that looks like a cute pink adoption for kittens website but as you get deeper, you might see text glitchor typos and images are replaced with scary ones and descriptions changed to scary horror stories
Whiskers & Wonders --- Horror Kitten Adoption MVP Complete

## Concept

A wholesome-looking kitten adoption site that progressively corrupts as
visitors click and explore --- text glitches, hover-triggered horror
flashes, hidden whispers per kitten, a secret room at /the-other-room,
and AI-generated two-sentence horror stories.

## Implemented

-   6 kittens
-   5 pages (Home, Profile, Stories, About, Secret Room) + 404
-   Progression-aware GlitchText, scanlines, RGB-split, marquee, ambient
    Web Audio synth (purr → drone → growl)
-   4-stage progression tracked server-side in MongoDB by session_id
    (thresholds: 5/15/30 clicks)
-   GPT-5.4 (via Emergent Universal LLM key) generating two-sentence
    horror stories with curated fallback library
-   Header audio mute + Safe Mode toggle (disables horror effects)
-   Hidden secret-dot in footer + per-kitten secret-dot whispers

## Backend Status

-   11/11 tests passing
-   Fixed progression/{sid} 500 bug using \$setOnInsert + tolerant read

## Frontend Status

-   Verified end-to-end on preview URL

## Setup Note

Patched /app/frontend/craco.config.js to remove legacy
onAfterSetupMiddleware and https options for webpack-dev-server v5
compatibility.

## Next Action Items

### P1

-   Final ending reveal page at max progression
-   More easter-egg hidden URLs embedded in image alt text and copyright
    character

### P2

-   Per-kitten AI-generated unsettling artwork
-   Creepy adopt email-capture flow that corrupts while typing

## Shareability Idea

Generate a /you-took-{kitten_name} postcard page after stage-3 adoption
for viral sharing and horror easter-hunts.
