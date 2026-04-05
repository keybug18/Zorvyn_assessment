

// ─── CONSTANTS 
const STORAGE_KEY = 'finio_v2';
const THEME_KEY   = 'finio_theme';

const CAT_COLORS = {
  Food:          '#f5a623',
  Transport:     '#5b8af5',
  Shopping:      '#c45cf5',
  Entertainment: '#f55c8a',
  Health:        '#00e5a0',
  Bills:         '#ff8c42',
  Salary:        '#00e5a0',
  Investment:    '#5bf5c8',
  Freelance:     '#f5e642',
  Other:         '#8892aa',
};

const SEED = [
  { id: 1,  date: '2024-11-03', desc: 'Monthly Salary',        cat: 'Salary',        type: 'income',  amount: 85000 },
  { id: 2,  date: '2024-11-05', desc: 'Grocery — Big Bazaar',  cat: 'Food',          type: 'expense', amount: 3200  },
  { id: 3,  date: '2024-11-08', desc: 'Uber rides (weekly)',   cat: 'Transport',     type: 'expense', amount: 1400  },
  { id: 4,  date: '2024-11-10', desc: 'Netflix Subscription',  cat: 'Entertainment', type: 'expense', amount: 649   },
  { id: 5,  date: '2024-11-12', desc: 'Electricity Bill',      cat: 'Bills',         type: 'expense', amount: 2100  },
  { id: 6,  date: '2024-11-14', desc: 'Freelance Project',     cat: 'Freelance',     type: 'income',  amount: 22000 },
  { id: 7,  date: '2024-11-17', desc: 'Zomato orders',         cat: 'Food',          type: 'expense', amount: 2400  },
  { id: 8,  date: '2024-11-19', desc: 'Amazon shopping',       cat: 'Shopping',      type: 'expense', amount: 5800  },
  { id: 9,  date: '2024-11-21', desc: 'Gym Membership',        cat: 'Health',        type: 'expense', amount: 1500  },
  { id: 10, date: '2024-11-24', desc: 'SIP — Mutual Fund',     cat: 'Investment',    type: 'expense', amount: 10000 },
  { id: 11, date: '2024-12-01', desc: 'Monthly Salary',        cat: 'Salary',        type: 'income',  amount: 85000 },
  { id: 12, date: '2024-12-03', desc: 'Grocery — DMart',       cat: 'Food',          type: 'expense', amount: 2900  },
  { id: 13, date: '2024-12-07', desc: 'Metro Pass',            cat: 'Transport',     type: 'expense', amount: 800   },
  { id: 14, date: '2024-12-09', desc: 'Dinner party',          cat: 'Food',          type: 'expense', amount: 3800  },
  { id: 15, date: '2024-12-11', desc: 'Internet Bill',         cat: 'Bills',         type: 'expense', amount: 999   },
  { id: 16, date: '2024-12-14', desc: 'Freelance — UI Design', cat: 'Freelance',     type: 'income',  amount: 18000 },
  { id: 17, date: '2024-12-18', desc: 'Flipkart Sale',         cat: 'Shopping',      type: 'expense', amount: 9200  },
  { id: 18, date: '2024-12-20', desc: 'Doctor visit',          cat: 'Health',        type: 'expense', amount: 800   },
  { id: 19, date: '2024-12-22', desc: 'Movie tickets',         cat: 'Entertainment', type: 'expense', amount: 1200  },
  { id: 20, date: '2024-12-26', desc: 'SIP — Mutual Fund',     cat: 'Investment',    type: 'expense', amount: 10000 },
  { id: 21, date: '2025-01-01', desc: 'Monthly Salary',        cat: 'Salary',        type: 'income',  amount: 85000 },
  { id: 22, date: '2025-01-04', desc: 'Grocery run',           cat: 'Food',          type: 'expense', amount: 3100  },
  { id: 23, date: '2025-01-06', desc: 'Ola rides',             cat: 'Transport',     type: 'expense', amount: 1600  },
  { id: 24, date: '2025-01-09', desc: 'Spotify + YT Premium',  cat: 'Entertainment', type: 'expense', amount: 329   },
  { id: 25, date: '2025-01-11', desc: 'Water & Gas Bills',     cat: 'Bills',         type: 'expense', amount: 1800  },
  { id: 26, date: '2025-01-14', desc: 'Client Payment',        cat: 'Freelance',     type: 'income',  amount: 30000 },
  { id: 27, date: '2025-01-17', desc: 'Weekend groceries',     cat: 'Food',          type: 'expense', amount: 1900  },
  { id: 28, date: '2025-01-20', desc: 'Nike shoes',            cat: 'Shopping',      type: 'expense', amount: 7500  },
  { id: 29, date: '2025-01-22', desc: 'Pharmacy',              cat: 'Health',        type: 'expense', amount: 640   },
  { id: 30, date: '2025-01-25', desc: 'SIP — Mutual Fund',     cat: 'Investment',    type: 'expense', amount: 10000 },
  { id: 31, date: '2025-02-01', desc: 'Monthly Salary',        cat: 'Salary',        type: 'income',  amount: 85000 },
  { id: 32, date: '2025-02-03', desc: 'Grocery shopping',      cat: 'Food',          type: 'expense', amount: 2700  },
  { id: 33, date: '2025-02-07', desc: 'Auto + Metro',          cat: 'Transport',     type: 'expense', amount: 950   },
  { id: 34, date: '2025-02-10', desc: 'Valentine dinner',      cat: 'Food',          type: 'expense', amount: 4200  },
  { id: 35, date: '2025-02-13', desc: 'Mobile Bill',           cat: 'Bills',         type: 'expense', amount: 699   },
  { id: 36, date: '2025-02-17', desc: 'Bonus — Q4',            cat: 'Salary',        type: 'income',  amount: 20000 },
  { id: 37, date: '2025-02-19', desc: 'Clothing haul',         cat: 'Shopping',      type: 'expense', amount: 6300  },
  { id: 38, date: '2025-02-21', desc: 'Dentist',               cat: 'Health',        type: 'expense', amount: 2200  },
  { id: 39, date: '2025-02-24', desc: 'Concert tickets',       cat: 'Entertainment', type: 'expense', amount: 3000  },
  { id: 40, date: '2025-02-26', desc: 'SIP — Mutual Fund',     cat: 'Investment',    type: 'expense', amount: 10000 },
  { id: 41, date: '2025-03-01', desc: 'Monthly Salary',        cat: 'Salary',        type: 'income',  amount: 85000 },
  { id: 42, date: '2025-03-04', desc: 'Swiggy orders',         cat: 'Food',          type: 'expense', amount: 2800  },
  { id: 43, date: '2025-03-08', desc: 'Petrol',                cat: 'Transport',     type: 'expense', amount: 3200  },
  { id: 44, date: '2025-03-11', desc: 'OTT bundle',            cat: 'Entertainment', type: 'expense', amount: 899   },
  { id: 45, date: '2025-03-14', desc: 'Electricity + Water',   cat: 'Bills',         type: 'expense', amount: 2400  },
  { id: 46, date: '2025-03-18', desc: 'Freelance — Content',   cat: 'Freelance',     type: 'income',  amount: 15000 },
  { id: 47, date: '2025-03-20', desc: 'Ikea furniture',        cat: 'Shopping',      type: 'expense', amount: 12000 },
  { id: 48, date: '2025-03-23', desc: 'Eye checkup + glasses', cat: 'Health',        type: 'expense', amount: 3500  },
  { id: 49, date: '2025-03-26', desc: 'Holi celebration',      cat: 'Entertainment', type: 'expense', amount: 1800  },
  { id: 50, date: '2025-03-29', desc: 'SIP — Mutual Fund',     cat: 'Investment',    type: 'expense', amount: 10000 },
];

// ─── STATE
let state = {
  transactions: [],
  role:         'admin',
  page:         1,
  perPage:      8,
  editId:       null,
  charts:       {},
};

// ─── PERSISTENCE
function loadData() {
  try {
    state.transactions = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [...SEED];
  } catch {
    state.transactions = [...SEED];
  }
}

function saveData() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state.transactions)); } catch {}
}

// ─── THEME
function loadTheme() {
  const saved = localStorage.getItem(THEME_KEY) || 'dark';
  document.documentElement.setAttribute('data-theme', saved);
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const next    = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem(THEME_KEY, next);
  updateChartDefaults();
  setTimeout(renderCharts, 60);
  showToast(next === 'light' ? '☀️ Light mode' : '🌙 Dark mode', 'success');
}

function updateChartDefaults() {
  const dark = document.documentElement.getAttribute('data-theme') === 'dark';
  Chart.defaults.color = dark ? '#8892aa' : '#5a6478';
}

document.getElementById('themeToggle').addEventListener('click', toggleTheme);

// ─── UTILS
function fmt(n) {
  return '₹' + Math.abs(n).toLocaleString('en-IN', { maximumFractionDigits: 0 });
}

function fmtDate(d) {
  return new Date(d).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: '2-digit' });
}

function genId() { return Date.now() + Math.random(); }

/** Animate a number from 0 to target inside an element */
function animateCountup(el, target, prefix, suffix) {
  const duration  = 900;
  const startTime = performance.now();
  const isFloat   = String(target).includes('.');

  (function step(now) {
    const progress = Math.min((now - startTime) / duration, 1);
    const ease     = 1 - Math.pow(1 - progress, 3);
    const value    = isFloat ? (target * ease).toFixed(1) : Math.round(target * ease);
    el.textContent = prefix + (isFloat ? value : Number(value).toLocaleString('en-IN')) + suffix;
    if (progress < 1) requestAnimationFrame(step);
  })(startTime);
}

/** Debounce the search input render */
let searchTimer;
function debounceRender() {
  clearTimeout(searchTimer);
  searchTimer = setTimeout(renderTransactions, 220);
}

/** Create a ripple effect at the click position inside an element */
function addRipple(e, el) {
  const ripple = document.createElement('span');
  ripple.className = 'ripple';
  const rect = el.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  ripple.style.cssText = `width:${size}px;height:${size}px;left:${e.clientX - rect.left - size / 2}px;top:${e.clientY - rect.top - size / 2}px`;
  el.appendChild(ripple);
  setTimeout(() => ripple.remove(), 650);
}

// ─── NAVIGATION 
const SECTIONS = {
  overview:     { title: 'Overview',     subtitle: 'Your financial summary' },
  transactions: { title: 'Transactions', subtitle: 'All your financial activity' },
  insights:     { title: 'Insights',     subtitle: 'Understand your spending patterns' },
};

document.querySelectorAll('.nav-item').forEach(el => {
  el.addEventListener('click', function (e) {
    addRipple(e, this);
    navigate(this.dataset.section);
    closeSidebar();
  });
});

function navigate(sec) {
  document.querySelectorAll('.nav-item').forEach(el => el.classList.toggle('active', el.dataset.section === sec));
  document.querySelectorAll('.section').forEach(el => el.classList.toggle('active', el.id === 'section-' + sec));
  document.getElementById('sectionTitle').textContent    = SECTIONS[sec].title;
  document.getElementById('sectionSubtitle').textContent = SECTIONS[sec].subtitle;
  if (sec === 'insights')   renderInsights();
  if (sec === 'overview') { renderStats(); setTimeout(renderCharts, 60); }
}

function setGreeting() {
  const h = new Date().getHours();
  const g = h < 12 ? 'morning' : h < 17 ? 'afternoon' : 'evening';
  document.getElementById('greetingText').textContent = `Good ${g} 👋`;
}

// ─── ROLE 
document.getElementById('roleSelect').addEventListener('change', function () {
  state.role = this.value;
  applyRole();
  showToast(state.role === 'admin' ? '🔑 Admin mode active' : '👁 Viewer mode active', 'success');
});

function applyRole() {
  const isAdmin = state.role === 'admin';
  document.querySelectorAll('.admin-only').forEach(el => { el.style.display = isAdmin ? '' : 'none'; });
  const badge = document.getElementById('roleBadge');
  badge.className = 'role-badge ' + state.role;
  badge.innerHTML = `<span class="role-dot"></span> ${state.role.toUpperCase()}`;
  renderTransactions();
}

// ─── STATS 
function computeStats() {
  const inc  = state.transactions.filter(t => t.type === 'income').reduce((s, t) => s + t.amount, 0);
  const exp  = state.transactions.filter(t => t.type === 'expense').reduce((s, t) => s + t.amount, 0);
  const bal  = inc - exp;
  const rate = inc > 0 ? (bal / inc) * 100 : 0;
  return { inc, exp, bal, rate };
}

function renderStats() {
  const { inc, exp, bal, rate } = computeStats();
  const cards = [
    { id: 's-bal',  label: 'Total Balance',   val: bal,  suffix: '',  pct: 72, up: true,  cls: 'balance', icon: '◈', color: 'var(--accent)'  },
    { id: 's-inc',  label: 'Total Income',    val: inc,  suffix: '',  pct: 88, up: true,  cls: 'income',  icon: '↑', color: 'var(--accent3)' },
    { id: 's-exp',  label: 'Total Expenses',  val: exp,  suffix: '',  pct: 61, up: false, cls: 'expense', icon: '↓', color: 'var(--red)'     },
    { id: 's-rate', label: 'Savings Rate',    val: rate, suffix: '%', pct: Math.min(rate, 100), up: true, cls: 'savings', icon: '◎', color: 'var(--accent2)', isFloat: true },
  ];

  document.getElementById('statsGrid').innerHTML = cards.map(c => `
    <div class="card stat-card ${c.cls}">
      <div class="stat-label">
        <span>${c.label}</span>
        <div class="stat-icon-wrap">${c.icon}</div>
      </div>
      <div class="stat-amount" id="${c.id}">₹0</div>
      <div class="stat-change ${c.up ? 'up' : 'down'}">${c.up ? '▲' : '▼'} ${c.up ? '+2.4' : '5.3'}% vs last period</div>
      <div class="stat-sparkline">
        <div class="stat-sparkline-fill" data-w="${c.pct}" style="background:${c.color}"></div>
      </div>
    </div>
  `).join('');

  requestAnimationFrame(() => {
    cards.forEach(c => {
      const el = document.getElementById(c.id);
      if (c.isFloat) animateCountup(el, c.val, '', c.suffix);
      else           animateCountup(el, c.val, '₹', c.suffix);
    });
    setTimeout(() => {
      document.querySelectorAll('.stat-sparkline-fill').forEach(el => { el.style.width = el.dataset.w + '%'; });
    }, 120);
  });
}

// ─── CHARTS 
function destroyChart(id) {
  if (state.charts[id]) { state.charts[id].destroy(); delete state.charts[id]; }
}

function gridColor() {
  return document.documentElement.getAttribute('data-theme') === 'dark' ? '#1e2840' : '#eaeff5';
}

function tooltipOpts() {
  return {
    backgroundColor: 'var(--surface)',
    titleColor:      'var(--text)',
    bodyColor:       'var(--text2)',
    borderColor:     'var(--border2)',
    borderWidth:     1,
    padding:         10,
    cornerRadius:    8,
  };
}

function renderCharts() {
  renderTrendChart();
  renderDonutChart();
  renderBarChart();
}

function getMonthlyData() {
  const months  = ['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'];
  const mkeys   = ['2024-08', '2024-09', '2024-10', '2024-11', '2024-12', '2025-01', '2025-02', '2025-03'];
  const income  = mkeys.map(m => state.transactions.filter(t => t.type === 'income'  && t.date.startsWith(m)).reduce((s, t) => s + t.amount, 0));
  const expense = mkeys.map(m => state.transactions.filter(t => t.type === 'expense' && t.date.startsWith(m)).reduce((s, t) => s + t.amount, 0));
  const balance = income.map((_, i) => income.slice(0, i + 1).reduce((s, v, j) => s + v - expense[j], 0));
  return { months, income, expense, balance };
}

function renderTrendChart() {
  destroyChart('trend');
  const ctx = document.getElementById('trendChart').getContext('2d');
  const { months, balance } = getMonthlyData();
  const grad = ctx.createLinearGradient(0, 0, 0, 220);
  grad.addColorStop(0, 'rgba(0,229,160,0.3)');
  grad.addColorStop(1, 'rgba(0,229,160,0)');

  state.charts.trend = new Chart(ctx, {
    type: 'line',
    data: {
      labels: months,
      datasets: [{
        label: 'Balance', data: balance,
        borderColor: '#00e5a0', backgroundColor: grad,
        borderWidth: 2.5, pointRadius: 5,
        pointBackgroundColor: '#00e5a0', pointBorderColor: 'var(--surface)',
        pointBorderWidth: 2, pointHoverRadius: 7,
        tension: 0.42, fill: true,
      }],
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      animation: { duration: 900, easing: 'easeOutQuart' },
      plugins: {
        legend:  { display: false },
        tooltip: { ...tooltipOpts(), callbacks: { label: c => ' ' + fmt(c.raw) } },
      },
      scales: {
        x: { grid: { color: gridColor() }, border: { color: gridColor() }, ticks: { color: '#8892aa' } },
        y: { grid: { color: gridColor() }, border: { color: gridColor() }, ticks: { color: '#8892aa', callback: v => '₹' + (v / 1000).toFixed(0) + 'k' } },
      },
    },
  });
}

function renderDonutChart() {
  destroyChart('donut');
  const ctx = document.getElementById('donutChart').getContext('2d');
  const byCat = {};
  state.transactions.filter(t => t.type === 'expense').forEach(t => { byCat[t.cat] = (byCat[t.cat] || 0) + t.amount; });
  const sorted = Object.entries(byCat).sort((a, b) => b[1] - a[1]).slice(0, 6);
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';

  state.charts.donut = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: sorted.map(e => e[0]),
      datasets: [{
        data: sorted.map(e => e[1]),
        backgroundColor: sorted.map(e => CAT_COLORS[e[0]] || '#8892aa'),
        borderColor: isDark ? '#111620' : '#ffffff',
        borderWidth: 3, hoverBorderWidth: 0, hoverOffset: 10,
      }],
    },
    options: {
      responsive: true, maintainAspectRatio: false, cutout: '68%',
      animation: { animateRotate: true, duration: 1000, easing: 'easeOutQuart' },
      plugins: {
        legend:  { position: 'right', labels: { padding: 14, usePointStyle: true, pointStyleWidth: 8, color: '#8892aa', boxHeight: 8 } },
        tooltip: { ...tooltipOpts(), callbacks: { label: c => ' ' + c.label + ': ' + fmt(c.raw) } },
      },
    },
  });
}

function renderBarChart() {
  destroyChart('bar');
  const ctx = document.getElementById('barChart').getContext('2d');
  const { months, income, expense } = getMonthlyData();

  state.charts.bar = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: months,
      datasets: [
        { label: 'Income',  data: income,  backgroundColor: 'rgba(0,229,160,0.75)',  borderRadius: 5, borderSkipped: false },
        { label: 'Expense', data: expense, backgroundColor: 'rgba(255,91,122,0.75)', borderRadius: 5, borderSkipped: false },
      ],
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      animation: { duration: 900, easing: 'easeOutQuart' },
      plugins: {
        legend:  { labels: { usePointStyle: true, pointStyleWidth: 8, padding: 20, color: '#8892aa', boxHeight: 8 } },
        tooltip: { ...tooltipOpts(), callbacks: { label: c => ' ' + c.dataset.label + ': ' + fmt(c.raw) } },
      },
      scales: {
        x: { grid: { display: false }, border: { color: gridColor() }, ticks: { color: '#8892aa' } },
        y: { grid: { color: gridColor() }, border: { color: gridColor() }, ticks: { color: '#8892aa', callback: v => '₹' + (v / 1000).toFixed(0) + 'k' } },
      },
    },
  });
}

// ─── TRANSACTIONS 
function populateCatFilter() {
  const cats = [...new Set(state.transactions.map(t => t.cat))].sort();
  document.getElementById('catFilter').innerHTML =
    '<option value="">All Categories</option>' + cats.map(c => `<option>${c}</option>`).join('');
}

let sortField = '', sortAsc = false;

function setSort(field) {
  if (sortField === field) sortAsc = !sortAsc;
  else { sortField = field; sortAsc = false; }
  document.querySelectorAll('thead th[id^="th-"]').forEach(el => {
    el.classList.remove('sorted');
    el.querySelector('.sort-icon').textContent = '↕';
  });
  const th = document.getElementById('th-' + field);
  if (th) { th.classList.add('sorted'); th.querySelector('.sort-icon').textContent = sortAsc ? '↑' : '↓'; }
  renderTransactions();
}

function getFiltered() {
  const q    = document.getElementById('searchInput')?.value.toLowerCase() || '';
  const type = document.getElementById('typeFilter')?.value || '';
  const cat  = document.getElementById('catFilter')?.value || '';
  const sort = document.getElementById('sortFilter')?.value || 'date-desc';

  let txs = state.transactions.filter(t => {
    if (type && t.type !== type) return false;
    if (cat  && t.cat  !== cat)  return false;
    if (q && !t.desc.toLowerCase().includes(q) && !t.cat.toLowerCase().includes(q)) return false;
    return true;
  });

  if      (sortField === 'amount') txs.sort((a, b) => sortAsc ? a.amount - b.amount : b.amount - a.amount);
  else if (sortField === 'cat')    txs.sort((a, b) => sortAsc ? a.cat.localeCompare(b.cat) : b.cat.localeCompare(a.cat));
  else if (sortField === 'date')   txs.sort((a, b) => sortAsc ? a.date.localeCompare(b.date) : b.date.localeCompare(a.date));
  else {
    if (sort === 'date-desc')   txs.sort((a, b) => b.date.localeCompare(a.date));
    if (sort === 'date-asc')    txs.sort((a, b) => a.date.localeCompare(b.date));
    if (sort === 'amount-desc') txs.sort((a, b) => b.amount - a.amount);
    if (sort === 'amount-asc')  txs.sort((a, b) => a.amount - b.amount);
  }
  return txs;
}

function renderTransactions() {
  const txs   = getFiltered();
  const total = txs.length;
  const pages = Math.max(1, Math.ceil(total / state.perPage));
  if (state.page > pages) state.page = pages;
  const start = (state.page - 1) * state.perPage;
  const slice = txs.slice(start, start + state.perPage);
  const tbody   = document.getElementById('txTableBody');
  const empty   = document.getElementById('txEmpty');
  const isAdmin = state.role === 'admin';

  if (!slice.length) {
    tbody.innerHTML    = '';
    empty.style.display = '';
  } else {
    empty.style.display = 'none';
    tbody.innerHTML = slice.map((t, i) => `
      <tr style="animation:sectionIn 0.25s ease ${i * 0.04}s both">
        <td class="tx-date">${fmtDate(t.date)}</td>
        <td style="font-weight:500">${t.desc}</td>
        <td>
          <span class="tx-category">
            <span class="cat-dot" style="background:${CAT_COLORS[t.cat] || '#8892aa'};color:${CAT_COLORS[t.cat] || '#8892aa'}"></span>
            ${t.cat}
          </span>
        </td>
        <td><span class="tx-type-badge ${t.type}">${t.type}</span></td>
        <td class="tx-amount ${t.type}">${t.type === 'income' ? '+' : '-'}${fmt(t.amount)}</td>
        ${isAdmin ? `
          <td>
            <div class="tx-actions">
              <button class="icon-btn" onclick="openEditModal(${t.id})" title="Edit">✎</button>
              <button class="icon-btn danger" onclick="deleteTransaction(${t.id})" title="Delete">✕</button>
            </div>
          </td>` : '<td></td>'}
      </tr>
    `).join('');
  }

  // Pagination

  document.getElementById('pageInfo').textContent = total
    ? `Showing ${start + 1}–${Math.min(start + state.perPage, total)} of ${total}`
    : '0 results';
  const pb = document.getElementById('pageBtns');
  pb.innerHTML = `<button class="page-btn" onclick="goPage(${state.page - 1})" ${state.page <= 1 ? 'disabled' : ''}>‹</button>`;
  for (let p = 1; p <= pages; p++) {
    if (pages > 6 && p > 2 && p < pages - 1 && Math.abs(p - state.page) > 1) {
      if (p === 3 || p === pages - 2) pb.innerHTML += `<span style="color:var(--text3);padding:4px 2px">…</span>`;
      continue;
    }
    pb.innerHTML += `<button class="page-btn ${p === state.page ? 'active' : ''}" onclick="goPage(${p})">${p}</button>`;
  }
  pb.innerHTML += `<button class="page-btn" onclick="goPage(${state.page + 1})" ${state.page >= pages ? 'disabled' : ''}>›</button>`;
}

function goPage(p) { state.page = p; renderTransactions(); }

// ─── MODAL 
function openAddModal() {
  state.editId = null;
  document.getElementById('modalTitle').textContent = 'Add Transaction';
  ['txDesc', 'txAmount'].forEach(id => { document.getElementById(id).value = ''; });
  document.getElementById('txType').value = 'expense';
  document.getElementById('txCat').value  = 'Food';
  document.getElementById('txDate').value = new Date().toISOString().split('T')[0];
  document.getElementById('txModal').classList.add('open');
  setTimeout(() => document.getElementById('txDesc').focus(), 250);
}

function openEditModal(id) {
  const t = state.transactions.find(x => x.id === id);
  if (!t) return;
  state.editId = id;
  document.getElementById('modalTitle').textContent = 'Edit Transaction';
  document.getElementById('txDesc').value   = t.desc;
  document.getElementById('txAmount').value = t.amount;
  document.getElementById('txType').value   = t.type;
  document.getElementById('txCat').value    = t.cat;
  document.getElementById('txDate').value   = t.date;
  document.getElementById('txModal').classList.add('open');
}

function closeModal() { document.getElementById('txModal').classList.remove('open'); }

document.getElementById('txModal').addEventListener('click', e => {
  if (e.target === document.getElementById('txModal')) closeModal();
});
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

function saveTransaction() {
  const desc   = document.getElementById('txDesc').value.trim();
  const amount = parseFloat(document.getElementById('txAmount').value);
  const type   = document.getElementById('txType').value;
  const cat    = document.getElementById('txCat').value;
  const date   = document.getElementById('txDate').value;

  if (!desc || !amount || amount <= 0 || !date) {
    showToast('Please fill all fields', 'error');
    return;
  }

  if (state.editId) {
    const i = state.transactions.findIndex(t => t.id === state.editId);
    state.transactions[i] = { ...state.transactions[i], desc, amount, type, cat, date };
    showToast('✓ Transaction updated', 'success');
  } else {
    state.transactions.unshift({ id: genId(), desc, amount, type, cat, date });
    showToast('✓ Transaction added', 'success');
  }

  saveData();
  closeModal();
  renderStats();
  renderTransactions();
  populateCatFilter();
  setTimeout(renderCharts, 60);
}

function deleteTransaction(id) {
  if (!confirm('Delete this transaction?')) return;
  state.transactions = state.transactions.filter(t => t.id !== id);
  saveData();
  renderStats();
  renderTransactions();
  populateCatFilter();
  setTimeout(renderCharts, 60);
  showToast('Transaction deleted', 'success');
}

// ─── INSIGHTS
function renderInsights() {
  const txs      = state.transactions;
  const expenses = txs.filter(t => t.type === 'expense');
  const totalExp = expenses.reduce((s, t) => s + t.amount, 0);
  const totalInc = txs.filter(t => t.type === 'income').reduce((s, t) => s + t.amount, 0);
  const byCat    = {};
  expenses.forEach(t => { byCat[t.cat] = (byCat[t.cat] || 0) + t.amount; });
  const topCat   = Object.entries(byCat).sort((a, b) => b[1] - a[1])[0];
  const avg      = totalExp / 6;
  const rate     = totalInc > 0 ? ((totalInc - totalExp) / totalInc * 100).toFixed(1) : 0;

  // Insight cards
  document.getElementById('insightsGrid').innerHTML = [
    { icon: '🔥', cls: 'orange', title: 'Top Spending Category', val: topCat ? topCat[0] : '—', meta: topCat ? fmt(topCat[1]) + ' total' : '' },
    { icon: '📊', cls: 'blue',   title: 'Avg Monthly Expense',   val: fmt(avg),                  meta: 'Over last 6 months' },
    { icon: '💰', cls: 'green',  title: 'Savings Rate',          val: rate + '%',                meta: 'Income vs expenses' },
  ].map(i => `
    <div class="card insight-card">
      <div class="insight-icon-wrap ${i.cls}">${i.icon}</div>
      <div>
        <div class="insight-title">${i.title}</div>
        <div class="insight-value">${i.val}</div>
        <div class="insight-meta">${i.meta}</div>
      </div>
    </div>
  `).join('');

  // Category breakdown
  const catSorted = Object.entries(byCat).sort((a, b) => b[1] - a[1]);
  document.getElementById('categoryBreakdown').innerHTML = catSorted.map(([cat, amt], i) => {
    const pct   = totalExp > 0 ? (amt / totalExp * 100).toFixed(1) : 0;
    const color = CAT_COLORS[cat] || '#8892aa';
    return `
      <div class="progress-bar-wrap" style="animation:sectionIn 0.3s ease ${i * 0.06}s both">
        <div class="progress-label">
          <span style="display:flex;align-items:center;gap:7px">
            <span style="width:8px;height:8px;border-radius:50%;background:${color};display:inline-block;box-shadow:0 0 6px ${color}"></span>
            ${cat}
          </span>
          <span style="font-family:var(--font-mono);font-size:11px">${pct}% — ${fmt(amt)}</span>
        </div>
        <div class="progress-track">
          <div class="progress-fill" data-w="${pct}" style="background:${color}"></div>
        </div>
      </div>
    `;
  }).join('');

  // Monthly comparison
  const months = ['Nov 24', 'Dec 24', 'Jan 25', 'Feb 25', 'Mar 25'];
  const mkeys  = ['2024-11', '2024-12', '2025-01', '2025-02', '2025-03'];
  const mExp   = mkeys.map(m => txs.filter(t => t.type === 'expense' && t.date.startsWith(m)).reduce((s, t) => s + t.amount, 0));
  const mInc   = mkeys.map(m => txs.filter(t => t.type === 'income'  && t.date.startsWith(m)).reduce((s, t) => s + t.amount, 0));
  const maxV   = Math.max(...mExp, ...mInc, 1);

  document.getElementById('monthlyComparison').innerHTML = months.map((m, i) => {
    const ep  = (mExp[i] / maxV * 100).toFixed(1);
    const ip  = (mInc[i] / maxV * 100).toFixed(1);
    const net = mInc[i] - mExp[i];
    return `
      <div class="month-row" style="animation:sectionIn 0.3s ease ${i * 0.07}s both">
        <div class="month-name">${m.split(' ')[0]}</div>
        <div class="month-bar-wrap">
          <div style="display:flex;gap:4px;margin-bottom:3px">
            <div style="flex:1">
              <div style="font-size:9px;color:var(--text3);font-family:var(--font-mono);margin-bottom:3px;letter-spacing:0.8px">INC</div>
              <div class="progress-track"><div class="progress-fill" data-w="${ip}" style="background:var(--green)"></div></div>
            </div>
            <div style="flex:1">
              <div style="font-size:9px;color:var(--text3);font-family:var(--font-mono);margin-bottom:3px;letter-spacing:0.8px">EXP</div>
              <div class="progress-track"><div class="progress-fill" data-w="${ep}" style="background:var(--red)"></div></div>
            </div>
          </div>
        </div>
        <div style="font-family:var(--font-mono);font-size:11px;color:${net >= 0 ? 'var(--green)' : 'var(--red)'};white-space:nowrap;min-width:72px;text-align:right">
          ${net >= 0 ? '+' : ''}${fmt(net)}
        </div>
      </div>
    `;
  }).join('');

  // Animate progress bars after render
  setTimeout(() => {
    document.querySelectorAll('.progress-fill').forEach(el => { el.style.width = el.dataset.w + '%'; });
  }, 120);
}

// ─── TOAST 
function showToast(msg, type = 'success') {
  const el = document.createElement('div');
  el.className = `toast ${type}`;
  el.innerHTML = `<span>${type === 'success' ? '✓' : '✕'}</span><span>${msg}</span>`;
  document.getElementById('toastContainer').appendChild(el);
  setTimeout(() => {
    el.style.transition = 'all 0.3s ease';
    el.style.opacity    = '0';
    el.style.transform  = 'translateX(20px)';
    setTimeout(() => el.remove(), 320);
  }, 2800);
}

// ─── EXPORT 
function exportCSV() {
  const rows = [['Date', 'Description', 'Category', 'Type', 'Amount']];
  state.transactions.forEach(t => rows.push([t.date, t.desc, t.cat, t.type, t.amount]));
  const a = document.createElement('a');
  a.href     = 'data:text/csv;charset=utf-8,' + encodeURIComponent(rows.map(r => r.join(',')).join('\n'));
  a.download = 'finio_transactions.csv';
  a.click();
  showToast('↓ CSV downloaded', 'success');
}

// ─── MOBILE SIDEBAR
document.getElementById('menuBtn').addEventListener('click', () => {
  document.getElementById('sidebar').classList.toggle('open');
  document.getElementById('overlayBg').classList.toggle('open');
});
document.getElementById('overlayBg').addEventListener('click', closeSidebar);

function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('overlayBg').classList.remove('open');
}

// ─── INIT 

loadTheme();
loadData();
updateChartDefaults();
setGreeting();

document.getElementById('topbarDate').textContent =
  new Date().toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' });

renderStats();
populateCatFilter();
renderTransactions();
setTimeout(renderCharts, 120);
