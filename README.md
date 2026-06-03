# MoCam / 摩卡相机

MoCam is a mobile-app demo for a privacy-first AI wardrobe and another-me community.

## What This Demo Shows

- Sugar privacy modes: `0糖`, `半糖`, `全糖`
- AI wardrobe capture and item thumbnails
- Daily outfit, color, makeup, and scene recommendations
- Sugar-based community concept
- Pro features: AI fitting room, outfit packs, reports, and capsule wardrobe
- MiroMind API integration through a server-side proxy

## Local Preview

Static preview:

```bash
open outputs/index.html
```

Local preview with the MiroMind API proxy:

```bash
node work/mocam-local-server.mjs
```

Then open:

```text
http://localhost:4174/index.html
```

## MiroMind API Setup

Create a local `.env` file:

```text
MM_API_KEY=your_miromind_api_key
```

For Netlify, set either:

```text
MM_API_KEY=your_miromind_api_key
```

or:

```text
MIROMIND_API_KEY=your_miromind_api_key
```

The API key is read only by the server-side proxy and should never be placed in frontend files.

## Netlify

The included `netlify.toml` is configured with:

- Publish directory: `outputs`
- Functions directory: `netlify/functions`

## Important

Do not commit `.env`. It contains private API credentials.
