// ═══════════════════════════════════════════════════
//  BioRegula — Shared Navigation Component
//  Include di semua halaman dengan:
//  <script src="nav.js"></script>
//  <script>bioRenderNav({ requireLogin: true })</script>
// ═══════════════════════════════════════════════════

const NAV_PAGES = {
  siswa: [
    {
      label: 'Identitas', icon: '📋',
      children: [
        { label: 'Identitas Pembelajaran', href: 'identitas-pembelajaran.html', icon: '📚' },
        { label: 'Identitas Penyusun',     href: 'identitas-penyusun.html',     icon: '👤' },
      ]
    },
    {
      label: 'Materi', icon: '📖',
      children: [
        { label: 'Materi Siklus 1',  href: 'materi-siklus1.html', icon: '🔬' },
        { label: 'Materi Siklus 2',  href: 'materi-siklus2.html', icon: '👁️' },
      ]
    },
    { label: 'Siklus 1',             href: 'siklus1.html',         icon: '🔬', single: true },
    { label: 'Siklus 2',             href: 'siklus2.html',         icon: '👁️', single: true },
    { label: 'Glosarium',            href: 'glosarium.html',       icon: '📖', single: true },
    { label: 'Pre-test & Post-test', href: 'pretest.html',         icon: '✏️', single: true },
    { label: 'Kuis Game (Drill Soal)', href: 'kuis.html',          icon: '🎮', single: true },
    { label: 'Self-Assessment',      href: 'self-assessment.html', icon: '🪞', single: true },
  ],
  guru: [
    {
      label: 'Identitas', icon: '📋',
      children: [
        { label: 'Identitas Pembelajaran', href: 'identitas-pembelajaran.html', icon: '📚' },
        { label: 'Identitas Penyusun',     href: 'identitas-penyusun.html',     icon: '👤' },
      ]
    },
    {
      label: 'Materi', icon: '📖',
      children: [
        { label: 'Materi Siklus 1',  href: 'materi-siklus1.html', icon: '🔬' },
        { label: 'Materi Siklus 2',  href: 'materi-siklus2.html', icon: '👁️' },
      ]
    },
    { label: 'Siklus 1',             href: 'siklus1.html',         icon: '🔬', single: true },
    { label: 'Siklus 2',             href: 'siklus2.html',         icon: '👁️', single: true },
    { label: 'Glosarium',            href: 'glosarium.html',       icon: '📖', single: true },
    { label: 'Pre-test & Post-test', href: 'pretest.html',         icon: '✏️', single: true },
    { label: 'Kuis Game (Drill Soal)', href: 'kuis.html',          icon: '🎮', single: true },
    { label: 'Self-Assessment',      href: 'self-assessment.html', icon: '🪞', single: true },
    { label: 'Dashboard',            href: 'dashboard-guru.html',  icon: '📊', single: true, guruOnly: true },
    { label: 'Kelola Soal',          href: 'kelola-soal.html',     icon: '⚙️', single: true, guruOnly: true },
  ]
};

// ════════════════════════════════
//  CSS
// ════════════════════════════════
const NAV_CSS = `
  :root {
    --teal:         #0d9488;
    --teal-dark:    #0f766e;
    --teal-light:   #99f6e4;
    --teal-bg:      #f0fdfa;
    --indigo:       #4f46e5;
    --indigo-light: #e0e7ff;
    --coral:        #f43f5e;
    --dark:         #0f172a;
    --gray:         #64748b;
    --off:          #f8fafc;
    --white:        #ffffff;
    --gray-light:   #e2e8f0;
    --sidebar-w:    244px;
    --nav-h:        64px;
  }

  /* ── TOPBAR ── */
  #bio-topbar {
    position: fixed; top: 0; left: 0; right: 0; z-index: 300;
    height: var(--nav-h);
    background: rgba(255,255,255,0.95);
    backdrop-filter: blur(16px);
    border-bottom: 1px solid rgba(13,148,136,0.12);
    box-shadow: 0 2px 12px rgba(15,23,42,0.06);
    display: flex; align-items: center;
    padding: 0 1.5rem; gap: 14px;
    font-family: 'Plus Jakarta Sans', sans-serif;
  }
  .tb-brand {
    display: flex; align-items: center; gap: 8px;
    text-decoration: none; flex-shrink: 0;
  }
  .tb-logo {
    width: 34px; height: 34px; border-radius: 9px;
    background: linear-gradient(135deg, var(--teal), var(--indigo));
    display: flex; align-items: center; justify-content: center;
    font-size: 17px;
  }
  .tb-name {
    font-size: 1.15rem; font-weight: 800; color: var(--dark);
  }
  .tb-name span { color: var(--teal); }

  .tb-right {
    display: flex; align-items: center; gap: 10px; margin-left: auto;
  }
  .tb-avatar {
    width: 32px; height: 32px; border-radius: 50%;
    background: linear-gradient(135deg, var(--teal-bg), var(--indigo-light));
    display: flex; align-items: center; justify-content: center;
    font-size: .82rem; font-weight: 800; color: var(--teal-dark);
    flex-shrink: 0;
  }
  .tb-user-info { display: flex; flex-direction: column; }
  .tb-user-name {
    font-size: .82rem; font-weight: 700; color: var(--dark);
    max-width: 120px; overflow: hidden;
    text-overflow: ellipsis; white-space: nowrap;
  }
  .tb-user-role { font-size: .68rem; color: var(--gray); }
  .tb-logout {
    padding: 6px 14px; border-radius: 20px;
    border: 1px solid var(--gray-light); background: none;
    font-size: .78rem; font-weight: 600; color: var(--gray);
    cursor: pointer; transition: all .2s;
    font-family: 'Plus Jakarta Sans', sans-serif;
  }
  .tb-logout:hover { background: #ffe4e6; color: var(--coral); border-color: #fecdd3; }

  /* hamburger */
  #bio-hamburger {
    width: 36px; height: 36px; border-radius: 8px;
    background: none; border: 1px solid var(--gray-light);
    cursor: pointer; display: flex; align-items: center;
    justify-content: center; flex-direction: column;
    gap: 4px; flex-shrink: 0; transition: background .2s;
  }
  #bio-hamburger:hover { background: var(--teal-bg); border-color: var(--teal-light); }
  #bio-hamburger span {
    display: block; width: 18px; height: 2px;
    background: var(--dark); border-radius: 2px;
    transition: all .25s;
  }
  #bio-hamburger.open span:nth-child(1) { transform: translateY(6px) rotate(45deg); }
  #bio-hamburger.open span:nth-child(2) { opacity: 0; }
  #bio-hamburger.open span:nth-child(3) { transform: translateY(-6px) rotate(-45deg); }

  /* ── OVERLAY ── */
  #bio-overlay {
    display: none; position: fixed; inset: 0; z-index: 199;
  }
  #bio-overlay.show { display: block; }

  /* ── SIDEBAR ── */
  #bio-sidebar {
    position: fixed; top: var(--nav-h); left: 0; bottom: 0;
    width: var(--sidebar-w); z-index: 200;
    background: var(--white);
    border-right: 1px solid var(--gray-light);
    box-shadow: 4px 0 20px rgba(15,23,42,0.08);
    overflow-y: auto; overflow-x: hidden;
    transform: translateX(-100%);
    transition: transform .28s cubic-bezier(.4,0,.2,1);
    font-family: 'Plus Jakarta Sans', sans-serif;
    display: flex; flex-direction: column;
    padding-bottom: 24px;
  }
  #bio-sidebar.open { transform: translateX(0); }

  /* user card */
  .sb-user-card {
    padding: 16px 16px 14px;
    border-bottom: 1px solid var(--gray-light);
    margin-bottom: 6px;
  }
  .sb-avatar {
    width: 42px; height: 42px; border-radius: 11px;
    background: linear-gradient(135deg, var(--teal-bg), var(--indigo-light));
    display: flex; align-items: center; justify-content: center;
    font-size: 1.1rem; font-weight: 800; color: var(--teal-dark);
    margin-bottom: 8px;
  }
  .sb-name { font-size: .88rem; font-weight: 800; color: var(--dark); }
  .sb-role-tag {
    display: inline-block; margin-top: 4px;
    font-size: .7rem; font-weight: 700;
    padding: 2px 10px; border-radius: 20px;
  }
  .sb-role-tag.siswa { background: var(--indigo-light); color: var(--indigo); }
  .sb-role-tag.guru  { background: #ffe4e6; color: var(--coral); }

  /* nav items */
  .sb-nav { padding: 4px 8px; }

  .sb-link, .sb-group-btn {
    display: flex; align-items: center; gap: 10px;
    padding: 9px 12px; border-radius: 10px;
    font-size: .84rem; font-weight: 600; color: var(--dark);
    text-decoration: none; transition: all .18s;
    border: none; background: none; width: 100%;
    text-align: left; cursor: pointer;
    font-family: 'Plus Jakarta Sans', sans-serif;
    margin-bottom: 1px;
  }
  .sb-link:hover, .sb-group-btn:hover { background: var(--teal-bg); color: var(--teal); }
  .sb-link.active { background: var(--teal-bg); color: var(--teal); font-weight: 700; }
  .sb-link.guru-only { color: var(--coral); }
  .sb-link.guru-only:hover,
  .sb-link.guru-only.active { background: #ffe4e6; color: var(--coral); }
  .sb-icon { font-size: .95rem; flex-shrink: 0; width: 20px; text-align: center; }

  .sb-group-btn { font-weight: 700; }
  .sb-chevron {
    margin-left: auto; font-size: .65rem;
    color: var(--gray); transition: transform .2s;
  }
  .sb-group-btn.open .sb-chevron { transform: rotate(180deg); }
  .sb-group-btn.open { color: var(--teal); background: var(--teal-bg); }

  .sb-children {
    padding-left: 18px; overflow: hidden;
    max-height: 0; transition: max-height .25s ease;
  }
  .sb-children.open { max-height: 300px; }

  .sb-child-link {
    display: flex; align-items: center; gap: 8px;
    padding: 7px 12px; border-radius: 8px;
    font-size: .81rem; font-weight: 600; color: var(--gray);
    text-decoration: none; transition: all .18s; margin-bottom: 1px;
  }
  .sb-child-link:hover { background: var(--teal-bg); color: var(--teal); }
  .sb-child-link.active { background: var(--teal-bg); color: var(--teal); font-weight: 700; }

  .sb-divider { margin: 8px 12px; border: none; border-top: 1px solid var(--gray-light); }
  .sb-section-label {
    padding: 8px 14px 3px;
    font-size: .67rem; font-weight: 700;
    text-transform: uppercase; letter-spacing: 1px; color: var(--gray);
  }

  /* ── CONTENT WRAPPER ── */
  .bio-content {
    padding-top: var(--nav-h);
    transition: margin-left .28s cubic-bezier(.4,0,.2,1);
  }
  .bio-content.sidebar-open { margin-left: var(--sidebar-w); }
  @media (max-width: 768px) {
    .bio-content.sidebar-open { margin-left: 0; }
  }
`;

// ════════════════════════════════
//  HELPERS
// ════════════════════════════════
function getCurrentUser() {
  return JSON.parse(localStorage.getItem('bioregula_current') || 'null');
}
function getActivePage() {
  return window.location.pathname.split('/').pop() || 'index.html';
}
function getInitials(nama) {
  return (nama || '?').split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
}

// ════════════════════════════════
//  BUILD HTML
// ════════════════════════════════
function buildTopbar(user) {
  const initials = getInitials(user?.nama);
  return `
    <nav id="bio-topbar">
      <button id="bio-hamburger" onclick="bioToggleSidebar()" aria-label="Buka menu">
        <span></span><span></span><span></span>
      </button>
      <a class="tb-brand" href="index.html">
        <div class="tb-logo">🧬</div>
        <span class="tb-name">Bio<span>Regula</span></span>
      </a>
      <div class="tb-right">
        <div class="tb-avatar">${initials}</div>
        <div class="tb-user-info">
          <div class="tb-user-name">${user?.nama || 'Tamu'}</div>
          <div class="tb-user-role">${user?.role === 'guru' ? '👩‍🏫 Guru' : '🎓 Siswa'}</div>
        </div>
        <button class="tb-logout" onclick="bioLogout()">Keluar</button>
      </div>
    </nav>
    <div id="bio-overlay" onclick="bioCloseSidebar()"></div>
  `;
}

function buildSidebar(user) {
  const role   = user?.role || 'siswa';
  const pages  = NAV_PAGES[role] || NAV_PAGES.siswa;
  const active = getActivePage();
  const initials = getInitials(user?.nama);

  const menuUtama = pages.filter(p => !p.guruOnly);
  const menuGuru  = pages.filter(p =>  p.guruOnly);

  let items = '';
  menuUtama.forEach(item => {
    if (item.single) {
      const act = active === item.href ? 'active' : '';
      items += `<a class="sb-link ${act}" href="${item.href}">
        <span class="sb-icon">${item.icon}</span>${item.label}
      </a>`;
    } else {
      const anyActive = item.children.some(c => active === c.href);
      const openCls = anyActive ? 'open' : '';
      const childLinks = item.children.map(c => {
        const ca = active === c.href ? 'active' : '';
        return `<a class="sb-child-link ${ca}" href="${c.href}">
          <span class="sb-icon">${c.icon}</span>${c.label}
        </a>`;
      }).join('');
      items += `
        <button class="sb-group-btn ${openCls}" onclick="bioToggleGroup(this)">
          <span class="sb-icon">${item.icon}</span>${item.label}
          <span class="sb-chevron">▼</span>
        </button>
        <div class="sb-children ${openCls}">${childLinks}</div>
      `;
    }
  });

  let guruSection = '';
  if (menuGuru.length) {
    guruSection = `<hr class="sb-divider"><div class="sb-section-label">Manajemen Guru</div>`;
    menuGuru.forEach(item => {
      const act = active === item.href ? 'active' : '';
      guruSection += `<a class="sb-link guru-only ${act}" href="${item.href}">
        <span class="sb-icon">${item.icon}</span>${item.label}
      </a>`;
    });
  }

  return `
    <div id="bio-sidebar">
      <div class="sb-user-card">
        <div class="sb-avatar">${initials}</div>
        <div class="sb-name">${user?.nama || 'Tamu'}</div>
        <span class="sb-role-tag ${role}">${role === 'guru' ? '👩‍🏫 Guru' : '🎓 Siswa'}</span>
      </div>
      <div class="sb-nav">
        ${items}
        ${guruSection}
      </div>
    </div>
  `;
}

// ════════════════════════════════
//  INTERAKSI
// ════════════════════════════════
function bioToggleSidebar() {
  const sb      = document.getElementById('bio-sidebar');
  const hbg     = document.getElementById('bio-hamburger');
  const ov      = document.getElementById('bio-overlay');
  const content = document.getElementById('bio-page-content');
  const isOpen  = sb?.classList.toggle('open');
  hbg?.classList.toggle('open', isOpen);
  ov?.classList.toggle('show', isOpen);
  // Geser konten hanya di layar besar
  if (window.innerWidth > 768) {
    content?.classList.toggle('sidebar-open', isOpen);
  }
}
function bioCloseSidebar() {
  document.getElementById('bio-sidebar')?.classList.remove('open');
  document.getElementById('bio-hamburger')?.classList.remove('open');
  document.getElementById('bio-overlay')?.classList.remove('show');
  document.getElementById('bio-page-content')?.classList.remove('sidebar-open');
}
function bioToggleGroup(btn) {
  btn.classList.toggle('open');
  btn.nextElementSibling?.classList.toggle('open');
}
function bioLogout() {
  if (confirm('Yakin mau keluar dari BioRegula?')) {
    localStorage.removeItem('bioregula_current');
    window.location.href = 'index.html';
  }
}

// ════════════════════════════════
//  AUTH GUARDS
// ════════════════════════════════
function bioRequireLogin() {
  const user = getCurrentUser();
  if (!user) { window.location.href = 'index.html'; return null; }
  return user;
}
function bioRequireGuru() {
  const user = bioRequireLogin();
  if (user && user.role !== 'guru') {
    alert('Halaman ini hanya untuk Guru.');
    window.location.href = 'index.html';
    return null;
  }
  return user;
}

// ════════════════════════════════
//  MAIN — Render Nav
//  Panggil di setiap halaman:
//  bioRenderNav({ requireLogin: true })
//  bioRenderNav({ requireGuru: true })
// ════════════════════════════════
function bioRenderNav(options = {}) {
  // Inject CSS
  if (!document.getElementById('bio-nav-css')) {
    const s = document.createElement('style');
    s.id = 'bio-nav-css';
    s.textContent = NAV_CSS;
    document.head.appendChild(s);
  }

  // Auth check
  let user;
  if (options.requireGuru)  user = bioRequireGuru();
  else if (options.requireLogin) user = bioRequireLogin();
  else user = getCurrentUser();

  if (!user && (options.requireLogin || options.requireGuru)) return;

  // Inject topbar
  document.body.insertAdjacentHTML('afterbegin', buildTopbar(user));

  // Inject sidebar setelah overlay
  const overlay = document.getElementById('bio-overlay');
  overlay.insertAdjacentHTML('afterend', buildSidebar(user));

  // Add padding to content
  const content = document.getElementById('bio-page-content');
  if (content) content.classList.add('bio-content');
}
