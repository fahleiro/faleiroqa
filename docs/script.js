(function(){
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Update year
  const y = document.getElementById('year');
  if(y){ y.textContent = new Date().getFullYear(); }

  // Reveal on scroll
  if(!prefersReduced && 'IntersectionObserver' in window){
    const observer = new IntersectionObserver((entries)=>{
      for(const entry of entries){
        if(entry.isIntersecting){ entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
      }
    }, { threshold: 0.12 });

    document.querySelectorAll('.reveal').forEach((el)=> observer.observe(el));
  }else{
    document.querySelectorAll('.reveal').forEach((el)=> el.classList.add('is-visible'));
  }

  // Simple router
  const pages = Array.from(document.querySelectorAll('.page'));
  function showPage(name){
    pages.forEach((p)=>{
      const isActive = p.dataset.page === name;
      p.classList.toggle('page--active', isActive);
    });
  }

  function getInitialRoute(){
    const hash = (location.hash || '').replace('#','');
    if(hash && pages.some(p=>p.dataset.page===hash)) return hash;
    return 'home';
  }

  function navigate(name){
    if(!name) return;
    history.replaceState({}, '', `#${name}`);
    showPage(name);
  }

  document.addEventListener('click', (e)=>{
    const link = e.target.closest('[data-route]');
    if(!link) return;
    const route = link.getAttribute('data-route');
    if(route){ e.preventDefault(); navigate(route); }
  });

  // init
  navigate(getInitialRoute());
})();
