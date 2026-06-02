# Bury Digital — Onboarding

Client onboarding form — captures the data needed to set up a new Bury Digital
account during onboarding.

Sits alongside the other Bury Digital projects:
`bury-digital-landing`, `bury-digital-clienthub`, `bury-digital-ownerhub`.

## Getting started

```bash
npm install
npm run dev      # http://localhost:5174
npm run build    # outputs static site to dist/
npm run preview  # preview the production build
```

## Where to put your file

The site entry is `index.html` (currently a placeholder). Paste your
onboarding HTML into `index.html`, or drop your file in and rename it to
`index.html`. If you'd prefer a different entry filename or a multi-page
setup, say so and the Vite config can be pointed at it.

## Notes

- Static Vite site, same conventions as `bury-digital-landing`.
- If the form needs to write data somewhere, the existing pattern is either a
  Supabase insert with the publishable anon key (RLS-protected) or an n8n
  webhook — mirroring `bury-digital-landing`. Keep service keys / Twilio
  credentials server-side only; never in this frontend.
