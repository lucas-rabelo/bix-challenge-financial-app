# Bix Challenge — Financial App

A responsive Next.js financial dashboard demo built as part of the Bix challenge. The app shows a simple login flow and a dashboard with summaries, charts and filters powered by local sample data.

Demo: <REPLACE_WITH_YOUR_DEMO_URL>

## Key Flows

- Authentication: simple login flow with a mock auth service (src/presentation/services/auth).
- Dashboard: overview of income vs expense, summaries and charts (src/app/dashboard and presentation components).
- Filtering: date range and category filters to refine displayed transactions.
- Data: local sample transactions are provided in src/presentation/data/transactions.json for offline/demo use.

## Folder Structure (important files)

- src/app
  - login/page.tsx — login page
  - dashboard/page.tsx — main dashboard page
  - layout.tsx — global layout
- src/presentation
  - components — UI components (charts, summary cards, forms, inputs)
  - pages — styled page components
  - hooks — custom hooks (auth, transaction, filters)
  - services — auth and transactions services
  - styles — global styles and MUI/styled-components themes
  - data/transactions.json — sample transactions dataset
- src/proxy.ts — request proxy / helpers
- src/@types — TypeScript type declarations

Explore the code under src/presentation to see how components, hooks and services interact.

## Requirements

- Node.js 18+ (recommended)
- npm (or yarn / pnpm / bun)

## Install & Run

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm run dev
```

3. Open http://localhost:3000

4. To build for production:

```bash
npm run build
npm start
```

## Notes & Tips

- No external environment variables are required by default — the app uses the local transactions.json. If you integrate a backend, add env instructions here.
- UI library: Material UI (MUI) + styled-components. Charts use Recharts.
- Forms are built with react-hook-form and validated with zod.
- Theming is handled by src/presentation/providers/app-theme-provider.tsx and MUI theme files.

## Contributing

Suggestions, bug reports or PRs are welcome. Open an issue describing what you want to change and include steps to reproduce any bug.

## License

This repository has no license specified. Add a LICENSE file if you plan to publish or share the code.

---

If you want, provide a demo URL and a short description of any backend or env variables to include in this README and the file will be updated accordingly.