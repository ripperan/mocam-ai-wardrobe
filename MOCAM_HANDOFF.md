# MoCam Project Handoff

This document is for continuing the MoCam project on another computer or in another Codex thread.

## Project Identity

- Project name: MoCam
- Core product: a privacy-first AI wardrobe and style community app
- Main concept: "another me"
- Current language: English for all demo UI and hackathon submission materials
- Target demo format: mobile-first clickable web prototype, deployable and usable on a phone

## Key Links

- GitHub repository: https://github.com/ripperan/mocam-ai-wardrobe
- Netlify live demo: https://mocam.netlify.app
- Netlify project name: mocam
- Current deployment source: GitHub main branch

## Product Summary

MoCam is an AI wardrobe and style community app. Users can capture clothes, accessories, cosmetics, and style preferences, then receive AI-generated daily outfit, color, makeup, season, festival, and occasion recommendations.

The distinctive product idea is the Sugar privacy system:

- 0 Sugar: item-only mode. No face or body data. Anonymous, text/list/item-based sharing.
- Half Sugar: partial body/style information. The user appears through a personal avatar.
- Full Sugar: richer visual records. Supports realistic try-on previews and more expressive community posts.

The app is not only a wardrobe tool. It is designed as an "another me" experience: a personal AI stylist and social layer that adapts to what users own, how much they want to reveal, and how they want to appear.

## Business / Paid Value

MoCam's paid model should emphasize positive value, not purchase anxiety:

- Unlimited AI styling suggestions
- AI fitting room previews
- Wardrobe health reports
- Makeup matching reports
- Capsule wardrobe plans
- Travel packing lists
- Advanced Sugar community features
- Long-term style evolution archive

The product should help users use their existing wardrobe better, explore personal style safely, and feel more confident every day.

## Current Tech Stack

- HTML
- CSS
- JavaScript
- Netlify static hosting
- Netlify Functions
- MiroMind API
- GitHub
- AI-generated visual assets

The current demo is intentionally lightweight and static-first. It is not a full production MVP yet.

## Repository Structure

```text
mocam-ai-wardrobe/
  README.md
  MOCAM_HANDOFF.md
  .gitignore
  .env.example
  netlify.toml
  outputs/
    index.html
    styles.css
    app.js
    assets/
      mocam-logo-transparent.png
      mocam-logo-512.png
      mocam-digital-woman.png
      mocam-wardrobe-capture.png
      post-zero-privacy.png
      post-half-avatar-woman.png
      post-full-ootd-woman.png
      sugar-zero.png
      sugar-half.png
      sugar-full.png
  netlify/
    functions/
      miromind-chat.js
  work/
    mocam-local-server.mjs
    generate_assets.ps1
```

## Important Files

- `outputs/index.html`: main mobile prototype markup
- `outputs/styles.css`: full visual design and responsive phone frame styling
- `outputs/app.js`: app state, Sugar mode switching, wardrobe list, community feed, bottom sheets, MiroMind button logic
- `outputs/assets/`: generated logo, digital human, wardrobe capture, and community post visuals
- `netlify/functions/miromind-chat.js`: server-side proxy for MiroMind API
- `work/mocam-local-server.mjs`: local dev server with the same MiroMind proxy path
- `netlify.toml`: Netlify publish and functions configuration
- `.env.example`: API key placeholder only

## Local Setup on a New Computer

1. Clone the repository:

```bash
git clone https://github.com/ripperan/mocam-ai-wardrobe.git
cd mocam-ai-wardrobe
```

2. Preview the static demo by opening:

```text
outputs/index.html
```

3. To test the MiroMind proxy locally, create a local `.env` file:

```text
MM_API_KEY=your_miromind_api_key
```

4. Start the local server:

```bash
node work/mocam-local-server.mjs
```

5. Open:

```text
http://localhost:4174/index.html
```

Do not commit `.env`.

## Netlify Setup

Current Netlify configuration:

```toml
[build]
  publish = "outputs"
  functions = "netlify/functions"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

For MiroMind API to work on Netlify, set an environment variable in Netlify:

```text
MM_API_KEY=your_miromind_api_key
```

or:

```text
MIROMIND_API_KEY=your_miromind_api_key
```

Then redeploy the site.

## Security Notes

- Never commit `.env`.
- Never place the real MiroMind API key in frontend files.
- The frontend calls `/.netlify/functions/miromind-chat`.
- The Netlify Function reads the API key from server-side environment variables.

## Current Demo Behavior

The live demo contains these screens:

- Onboarding: choose 0 Sugar, Half Sugar, or Full Sugar
- Today: AI daily styling recommendation with AI stylist chat and MiroMind button
- Closet: AI wardrobe capture card and categorized item thumbnails
- Sugar community: independent 0/Half/Full Sugar feeds
- Me: profile, Pro value, reports, AI fitting room, travel packing, privacy dashboard

The UI is English-only now.

## Hackathon Submission Copy

Project name:

```text
MoCam
```

Tagline:

```text
An AI wardrobe and style community for your clothes, privacy, and another self.
```

Description:

```text
MoCam is a privacy-first AI wardrobe and style community app built around the idea of “another me.” It starts from a common pain point: many people want better outfit ideas, makeup matching, and personal style guidance, but they may not feel comfortable uploading their face, body, or daily photos. At the same time, wardrobes are often underused because users forget what they own, repeat similar purchases, or cannot imagine new combinations from existing items.

MoCam lets users photograph and organize clothing, accessories, and cosmetics, then uses AI to generate daily outfit, color, makeup, season, festival, and occasion-based recommendations from what they already own.

Its core feature is the “Sugar” privacy system. 0 Sugar is for users who only want item records and anonymous sharing. Half Sugar allows partial body and style information, shown through a personal avatar. Full Sugar supports richer visual records, realistic previews, and more expressive community sharing. Each Sugar community stays independent, with visiting days and special events.

The business model focuses on positive paid value: unlimited AI styling suggestions, AI fitting room previews, wardrobe and makeup reports, capsule wardrobe plans, travel packing lists, and advanced community features. MoCam helps users use their current wardrobe better, explore personal style safely, and feel more confident every day.
```

Tech stack:

```text
HTML, CSS, JavaScript, Netlify Functions, MiroMind API, AI Image Generation, GitHub
```

Team / project name:

```text
MoCam
```

One-line project idea:

```text
A privacy-first AI wardrobe and style community that helps users explore outfits, makeup, and another self.
```

Recruitment expectations:

```text
I am looking for teammates interested in AI product design, frontend/mobile development, visual design, and community-based consumer apps. Ideal teammates can help improve the mobile demo, connect AI styling workflows, polish UI/UX, and think through privacy-first user experiences.
```

Role:

```text
Founder / Product Designer
```

Longer role:

```text
Founder, product designer, and concept owner. I designed the MoCam concept, privacy modes, user flow, demo structure, and visual direction.
```

## Screenshots / Presentation Assets

Desktop-generated combined screenshots:

- `C:\Users\Ada\Desktop\MoCam-screens-1237.png`
- `C:\Users\Ada\Desktop\MoCam-screens-4568.png`

Logo files:

- `C:\Users\Ada\Desktop\MoCam-logo-transparent.png`
- `C:\Users\Ada\Desktop\MoCam-logo-512.png`
- `C:\Users\Ada\Desktop\MoCam-logo-256.png`
- In repo: `outputs/assets/mocam-logo-transparent.png`
- In repo: `outputs/assets/mocam-logo-512.png`

## Recommended Next Steps

1. Improve mobile screenshot set and upload the best 3 project screenshots for submission.
2. Test the `Run MiroMind` button on the live Netlify demo after setting the environment variable.
3. If moving beyond demo, choose the next build path:
   - Mini program first for faster China-market validation
   - React Native / Expo for iOS and Android app MVP
   - Web app/PWA for fastest global demo iteration
4. For real MVP backend, plan:
   - User authentication
   - Database for wardrobe items, users, Sugar mode, posts, reports
   - Object storage for user images
   - AI image analysis pipeline
   - Moderation and privacy controls
   - Subscription/payment system

## Notes for the Next Codex

The user's final objective is MoCam itself. GitHub, Netlify, MiroMind, and Codex are only supporting tools.

Keep the project English-first for hackathon submission. Preserve the MoCam brand direction: Morandi colors, warm coffee/light logo, soft but polished mobile design, AI wardrobe, privacy levels, and another-me identity.

When editing code:

- Work in the GitHub repository folder, not the older Codex scratch folder.
- Preferred local repo path on this machine:

```text
C:\Users\Ada\Documents\GitHub\mocam-ai-wardrobe
```

- After changes, commit and push to `main`; Netlify should deploy automatically.
- Avoid committing secrets or local `.env` files.
