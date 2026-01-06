const email = 'abhimaganty@gmail.com';

const filterButtons = document.querySelectorAll('[data-filter]');
const cards = document.querySelectorAll('.card');
const copyButton = document.getElementById('copy-email');
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle?.querySelector('.theme-icon');
const timeline = document.getElementById('timeline');

function setTheme(mode) {
  document.documentElement.setAttribute('data-theme', mode);
  localStorage.setItem('theme', mode);
  if (themeIcon) themeIcon.textContent = mode === 'light' ? '☀' : '☾';
}

function initTheme() {
  const stored = localStorage.getItem('theme');
  const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
  setTheme(stored || (prefersLight ? 'light' : 'dark'));
}

function handleFilter(category) {
  cards.forEach((card) => {
    const match = category === 'all' || card.dataset.category === category;
    card.style.opacity = match ? '1' : '0.2';
    card.style.transform = match ? 'translateY(0)' : 'translateY(6px)';
    card.setAttribute('aria-hidden', match ? 'false' : 'true');
  });
}

function initFilters() {
  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterButtons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      handleFilter(btn.dataset.filter);
    });
  });
}

function initCopyButton() {
  if (!copyButton) return;
  copyButton.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(email);
      copyButton.textContent = 'Copied';
      setTimeout(() => (copyButton.textContent = 'Copy email'), 1500);
    } catch (err) {
      copyButton.textContent = email;
    }
  });
}

function initThemeToggle() {
  if (!themeToggle) return;
  themeToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme') || 'dark';
    setTheme(current === 'light' ? 'dark' : 'light');
  });
}

function initTimeline() {
  if (!timeline) return;
  timeline.querySelectorAll('.timeline__toggle').forEach((toggle) => {
    const content = toggle.nextElementSibling;
    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      if (content) content.toggleAttribute('hidden');
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initFilters();
  initCopyButton();
  initThemeToggle();
  initTimeline();
});
