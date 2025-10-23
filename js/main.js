
// final main.js v3 - page transitions, mobile nav toggle, smooth scroll
document.addEventListener('DOMContentLoaded', function(){
  document.documentElement.classList.add('fade-in');
  document.querySelectorAll('a').forEach(a=>{
    try{
      const href = a.getAttribute('href')||'';
      if(href && !href.startsWith('http') && !href.startsWith('mailto') && !href.startsWith('#') && href.endsWith('.html')){
        a.addEventListener('click', function(e){
          e.preventDefault();
          const url = this.getAttribute('href');
          document.documentElement.classList.remove('fade-in');
          document.documentElement.classList.add('fade-out');
          setTimeout(()=> location.href = url, 320);
        });
      }
    }catch(e){}
  });
  // mobile nav toggle button
  const navWrap = document.querySelector('.navwrap');
  if(navWrap && !document.querySelector('.nav-toggle')){
    const btn = document.createElement('button');
    btn.className = 'nav-toggle';
    btn.innerText = 'Menu';
    navWrap.appendChild(btn);
    btn.addEventListener('click', ()=> document.body.classList.toggle('nav-open'));
    document.addEventListener('click', (e)=>{ if(!e.target.closest('.header') && document.body.classList.contains('nav-open')) document.body.classList.remove('nav-open') });
  }
  // smooth scroll for internal anchors
  document.querySelectorAll('a[href^="#"]').forEach(a=>{ a.addEventListener('click', function(e){ const t=document.querySelector(this.getAttribute('href')); if(t){ e.preventDefault(); t.scrollIntoView({behavior:'smooth', block:'start'}); } }); });
});
