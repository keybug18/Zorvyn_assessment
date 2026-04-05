# Finio — Finance Dashboard

A clean, interactive personal finance dashboard built with vanilla JavaScript, HTML, and CSS. No build tools, no install step — just open `index.html` in a browser.

---

## Setup

```bash
# Option 1 — just open it
open index.html

# Option 2 — serve locally
npx serve .
# or
python3 -m http.server 8080
```

No npm install, no webpack, no environment config needed.

---

## Tech Stack

| Concern | Choice |
|---|---|
| Framework | Vanilla JS (ES6+) — zero build overhead |
| Charts | Chart.js 4 via CDN |
| Fonts | Syne (display) · Instrument Sans (body) · DM Mono (numbers/mono) |
| Styling | CSS custom properties with full dark/light token switching |
| Persistence | localStorage — survives page refresh |

---

## Features

### Dark / Light Theme
- Toggle pill in the sidebar header switches between dark and light mode
- Animated knob slides across on toggle
- All colors, surfaces, borders, shadows, and Chart.js axes update instantly
- Preference is saved to localStorage and restored on next visit

### Dashboard Overview
- 4 stat cards — Total Balance, Income, Expenses, Savings Rate
- Numbers animate from 0 on load using a smooth easing countup
- Sparkline bar under each card animates in with a 1-second fill
- Balance Trend line chart — cumulative balance over 8 months with gradient fill
- Spending Breakdown doughnut — top 6 expense categories
- Monthly Income vs Expenses grouped bar chart

### Transactions
- 50 pre-seeded mock transactions spanning Nov 2024 – Mar 2025
- Search by description or category (debounced, 220ms)
- Filter by Type (Income / Expense) and Category
- Sort by Date (newest/oldest) or Amount (high/low) via dropdown or column header click
- Paginated at 8 rows per page with smart ellipsis pagination
- Edit and Delete action buttons fade in only on row hover (admin only)

### Role-Based UI
Switch between **Admin** and **Viewer** from the sidebar dropdown:

| Feature | Admin | Viewer |
|---|---|---|
| View all data | ✅ | ✅ |
| Add transaction | ✅ | ❌ |
| Edit transaction | ✅ | ❌ |
| Delete transaction | ✅ | ❌ |
| Export CSV | ✅ | ✅ |

Role is managed in JS state. `.admin-only` elements are shown/hidden via `display` toggling. In a real app, enforcement would live server-side.

### Insights
- Top Spending Category — highest cumulative expense category
- Average Monthly Expense — mean over last 6 months
- Savings Rate — (Income − Expenses) / Income
- Category breakdown with animated progress bars (staggered per row)
- Monthly income vs expense comparison with net balance per month, color-coded green/red

### State Management
Single flat `state` object — no library needed at this scale:

```js
let state = {
  transactions: [],  // source of truth, synced to localStorage
  role: 'admin',     // 'admin' | 'viewer'
  page: 1,           // current pagination page
  perPage: 8,
  editId: null,      // null = add mode, number = edit mode
  charts: {},        // Chart.js instances, destroyed before re-render
};
```

One-way flow: mutate state → call render function → DOM updates. Charts are destroyed and recreated on data or theme changes to avoid stale canvas state.

---

## Animations & Micro-interactions

| Interaction | Effect |
|---|---|
| Nav click | Green ripple spreads from click point |
| Stat cards (hover) | Card lifts with spring bounce, icon rotates, glow expands |
| Stat numbers (load) | Count up from 0 with cubic-ease |
| Sparklines (load) | Width animates from 0 to value |
| Table row (hover) | Background highlights, action buttons fade in, first cell indents |
| Progress bars | Animate in on Insights load, staggered per row |
| Buttons (hover) | Lift + glow shadow; active press resets |
| Modal (open) | Scale + slide up with spring easing |
| Toast (appear) | Slide in from right with scale |
| Theme toggle | Knob slides with spring; charts redraw |
| Role badge | Dot pulses continuously |
| Sections (switch) | Fade + slide up |

---

## Data

50 seed transactions across: Salary, Freelance, Food, Transport, Shopping, Entertainment, Health, Bills, Investment.

Stored under localStorage key `finio_v2`. Clearing browser storage resets to seed data on next load.

---

## Edge Cases

- Empty search / filter results → illustrated empty state with message
- Page resets to last valid page when items are deleted
- Charts destroyed before recreating — no stale canvas issues
- Theme change triggers chart redraw with updated grid and label colors
- Modal closes on Escape key or backdrop click
- Save blocked if form fields are invalid (toast error shown)

---

## Optional Enhancements Included

- ✅ Dark / Light theme with persistence
- ✅ Data persistence (localStorage)
- ✅ CSV export
- ✅ Animations — countup, spring hovers, ripple, staggered progress bars
- ✅ Responsive — mobile sidebar drawer, adaptive grids
- ✅ Debounced search

---

## File Structure

```
Zorvyn_assessment
├── index.html
├── style.css
├── script.js   
└── README.md
```
