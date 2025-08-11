const LOCALE_KEY = 'locale';
function getSavedLocale(){ return localStorage.getItem(LOCALE_KEY) || 'pt-BR'; }
function setLocale(locale){ localStorage.setItem(LOCALE_KEY, locale); }

const fallback = {
  'pt-BR': { expertise: 'Expertise', projects: 'Projetos', contact: 'Contato', langBtn: 'PT-BR' },
  'en-US': { expertise: 'Expertise', projects: 'Projects', contact: 'Contact', langBtn: 'EN-US' }
};

function buildHeader(locale){
  const t = fallback[locale] || fallback['pt-BR'];
  const header = document.getElementById('site-header');
  if(!header) return;
  header.innerHTML = `
    <a class="brand" href="#" data-route="home">Faleiro QA</a>
    <nav class="nav">
      <a href="#" data-route="expertise" data-i18n="nav.expertise">${t.expertise}</a>
      <a href="#" data-route="projetos" data-i18n="nav.projects">${t.projects}</a>
      <a href="#" data-route="contato" data-i18n="nav.contact">${t.contact}</a>
      <button class="lang-switch" type="button" data-lang-toggle aria-label="Switch language">${t.langBtn}</button>
    </nav>
  `;
}

(function initMenu(){
  const locale = getSavedLocale();
  buildHeader(locale);
  // Atualiza rótulo do botão ao trocar idioma (observe localStorage)
  window.addEventListener('storage', (e)=>{
    if(e.key === LOCALE_KEY){ buildHeader(e.newValue || 'pt-BR'); }
  });
})();
