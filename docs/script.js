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
})();
