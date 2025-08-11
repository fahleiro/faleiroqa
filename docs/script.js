import { loadCommonContent, loadPageContent } from './i18nLoader.js';

const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Year
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();

// Reveal on scroll
if (!prefersReduced && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    }
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
} else {
  document.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-visible'));
}

// Router
const pages = Array.from(document.querySelectorAll('.page'));
function showPage(name) {
  pages.forEach((p) => p.classList.toggle('page--active', p.dataset.page === name));
}
function getInitialRoute() {
  const hash = (location.hash || '').replace('#', '');
  if (hash && pages.some((p) => p.dataset.page === hash)) return hash;
  return 'home';
}
function updateHash(name) {
  history.replaceState({}, '', `#${name}`);
}

document.addEventListener('click', (e) => {
  const link = e.target.closest('[data-route]');
  if (!link) return;
  const route = link.getAttribute('data-route');
  if (route) {
    e.preventDefault();
    navigate(route);
  }
});

// i18n modular
const LOCALE_KEY = 'locale';
function getSavedLocale() { return localStorage.getItem(LOCALE_KEY) || 'pt-BR'; }
function setLocale(locale) { localStorage.setItem(LOCALE_KEY, locale); }

const langBtn = document.querySelector('[data-lang-toggle]');
if (langBtn) {
  langBtn.addEventListener('click', () => {
    const current = getSavedLocale();
    const next = current === 'pt-BR' ? 'en-US' : 'pt-BR';
    setLocale(next);
    navigate(currentPage);
  });
}

let currentPage = 'home';
const mergedCache = new Map(); // key: `${page}:${locale}` -> dict

async function getMergedDict(page, locale) {
  const key = `${page}:${locale}`;
  if (mergedCache.has(key)) return mergedCache.get(key);
  const [common, pageDict] = await Promise.all([
    loadCommonContent(locale),
    loadPageContent(page, locale)
  ]);
  const merged = { ...common, ...pageDict };
  mergedCache.set(key, merged);
  return merged;
}

function applyTranslations(dict, locale) {
  if (!dict) return;
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) el.textContent = dict[key];
  });
  const desc = document.querySelector('meta[data-i18n-meta="description"]');
  const ogDesc = document.querySelector('meta[data-i18n-meta="ogDescription"]');
  if (desc && dict['meta.description']) desc.setAttribute('content', dict['meta.description']);
  if (ogDesc && dict['meta.ogDescription']) ogDesc.setAttribute('content', dict['meta.ogDescription']);
  document.documentElement.setAttribute('lang', locale);
  const btn = document.querySelector('[data-lang-toggle]');
  if (btn) btn.textContent = locale === 'pt-BR' ? 'PT-BR' : 'EN-US';
}

async function navigate(name) {
  if (!name) return;
  currentPage = name;
  updateHash(name);
  const locale = getSavedLocale();
  try {
    const dict = await getMergedDict(name, locale);
    applyTranslations(dict, locale);
  } catch (err) {
    // Silent fail: keep original DOM text if module not found
  }
  showPage(name);
}

// init
(async function init() {
  const initial = getInitialRoute();
  await navigate(initial);
})();
