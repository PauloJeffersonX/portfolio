const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{ if(entry.isIntersecting) entry.target.classList.add('visible'); });
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const counter = document.querySelector('[data-count]');
let started = false;
const countObserver = new IntersectionObserver(entries=>{
  if(entries[0].isIntersecting && !started){
    started = true;
    const target = Number(counter.dataset.count);
    const duration = 1300;
    const start = performance.now();
    function tick(now){
      const p = Math.min((now-start)/duration,1);
      counter.textContent = Math.floor(target*(1-Math.pow(1-p,3)));
      if(p<1) requestAnimationFrame(tick); else counter.textContent = target;
    }
    requestAnimationFrame(tick);
  }
},{threshold:.5});
if(counter) countObserver.observe(counter);

const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('#nav');
menuBtn?.addEventListener('click',()=>{
  const open = nav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded',String(open));
});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
  nav.classList.remove('open');
  menuBtn?.setAttribute('aria-expanded','false');
}));

const sections = [...document.querySelectorAll('main section[id]')];
const links = [...document.querySelectorAll('nav a')];
window.addEventListener('scroll',()=>{
  const y = window.scrollY + 180;
  let current = '';
  sections.forEach(s=>{ if(s.offsetTop <= y) current = s.id; });
  links.forEach(a=>a.classList.toggle('active',a.getAttribute('href') === `#${current}`));
},{passive:true});

const glow = document.querySelector('.cursor-glow');
window.addEventListener('pointermove',e=>{
  if(glow){glow.style.left = `${e.clientX}px`; glow.style.top = `${e.clientY}px`;}
},{passive:true});
