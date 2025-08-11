export function mapLocale(locale){
  return locale === 'en-US' ? 'enus' : 'ptbr';
}

const moduleCache = new Map();

async function loadModule(path){
  if(moduleCache.has(path)) return moduleCache.get(path);
  const mod = await import(path);
  const dict = mod && mod.default ? mod.default : {};
  moduleCache.set(path, dict);
  return dict;
}

export async function loadCommonContent(locale){
  const loc = mapLocale(locale);
  return loadModule(`./pages/common/${loc}.js`);
}

export async function loadPageContent(page, locale){
  const loc = mapLocale(locale);
  // page expected: 'home', 'expertise', 'projetos', 'contato'
  return loadModule(`./pages/${page}/${loc}.js`);
}
