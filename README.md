# 💹 Bix Challenge — Financial App

A high-performance, responsive financial dashboard built for the BIX Tecnologia technical challenge. This application allows users to analyze balances, revenues, expenses, and transaction histories through dynamic filtering and interactive visualizations.

🌐 Live Demo: [Bix Challenge Front-end](https://bix-challenge-financial-app.vercel.app/)

🎥 Project Overview (Loom): [Explication Video](https://www.loom.com/share/9b0dd7834f1d4301bcafbfa97bc260d9)

## Key Flows

- Authentication: simple login flow with a mock auth service (src/presentation/services/auth).
- Dashboard: overview of income vs expense, summaries and charts (src/app/dashboard and presentation components).
- Filtering: date range and category filters to refine displayed transactions.
- Data: local sample transactions are provided in src/presentation/data/transactions.json for offline/demo use.

## 📌 About the Challenge

This application was built to simulate a real-world financial dashboard, allowing users to:

- Analyze income, expenses, and balance
- Filter transactions dynamically
- Visualize financial data through charts
- Navigate through a protected dashboard after authentication


## 🧠 Features

### 🔐 Authentication (Client + Server Protection)
- Login system without backend
- Session persisted via cookies
- Route protection using **Next.js middleware**
- AuthGuard for client-side protection
- Global auth state using Context API

---

### 📊 Dashboard
- Summary cards:
  - Income
  - Expenses
  - Balance
  - Pending transactions
- Interactive charts:
  - Bar chart (Income vs Expense)
  - Line chart (Trend over time)
- Data normalized for chart usage

---

### 🔎 Advanced Filtering
- Filters persisted via **URL Params**
- Global filters:
  - Date range
  - Accounts
  - Industries
  - States
- Dynamic updates across the entire dashboard

---

### 📁 Data Handling
- Data source: `transactions.json`
- No database used
- Data transformations:
  - EPOCH → formatted date
  - Amount string → currency number
  - Aggregations for charts and summaries

---

### 🎨 UI/UX
- Built with **Material UI + styled-components**
- Fully responsive layout
- Sidebar navigation
- Clean and modern dashboard design

---

## 🏗️ Tech Stack

- **Next.js (App Router)**
- **TypeScript**
- **Styled-components**
- **Material UI**
- **Material Icons**
- **Recharts**
- **date-fns**


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
