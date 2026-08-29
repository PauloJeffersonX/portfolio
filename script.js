const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!reduceMotion && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{ if(entry.isIntersecting) entry.target.classList.add('visible'); });
  },{threshold:.12});
  document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
} else {
  document.querySelectorAll('.reveal').forEach(el=>el.classList.add('visible'));
}

const counter = document.querySelector('[data-count]');
let started = false;
if(counter){
  if(reduceMotion || !('IntersectionObserver' in window)){
    counter.textContent = counter.dataset.count;
  } else {
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
    countObserver.observe(counter);
  }
}

const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('#nav');
function closeMenu(returnFocus=false){
  nav?.classList.remove('open');
  menuBtn?.setAttribute('aria-expanded','false');
  menuBtn?.setAttribute('aria-label','Abrir menu de navegação');
  if(returnFocus) menuBtn?.focus();
}
menuBtn?.addEventListener('click',()=>{
  const open = nav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded',String(open));
  menuBtn.setAttribute('aria-label',open ? 'Fechar menu de navegação' : 'Abrir menu de navegação');
});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>closeMenu(false)));
document.addEventListener('keydown',e=>{ if(e.key==='Escape' && nav?.classList.contains('open')) closeMenu(true); });

const sections = [...document.querySelectorAll('main section[id]')];
const links = [...document.querySelectorAll('nav a')];
function updateCurrentSection(){
  const y = window.scrollY + 180;
  let current = '';
  sections.forEach(s=>{ if(s.offsetTop <= y) current = s.id; });
  links.forEach(a=>{
    const active = a.getAttribute('href') === `#${current}`;
    a.classList.toggle('active',active);
    if(active) a.setAttribute('aria-current','location'); else a.removeAttribute('aria-current');
  });
}
window.addEventListener('scroll',updateCurrentSection,{passive:true});
updateCurrentSection();

const glow = document.querySelector('.cursor-glow');
if(!reduceMotion){
  window.addEventListener('pointermove',e=>{
    if(glow){glow.style.left = `${e.clientX}px`; glow.style.top = `${e.clientY}px`;}
  },{passive:true});
}

const themeButtons = [...document.querySelectorAll('[data-theme-choice]')];
const root = document.documentElement;
const live = document.querySelector('#a11y-status');
function applyTheme(theme, announce=false){
  const safeTheme = theme === 'light' ? 'light' : 'dark';
  root.dataset.theme = safeTheme;
  root.style.colorScheme = safeTheme;
  themeButtons.forEach(btn=>{
    const active = btn.dataset.themeChoice === safeTheme;
    btn.classList.toggle('active', active);
    btn.setAttribute('aria-pressed', String(active));
  });
  const metaTheme = document.querySelector('meta[name="theme-color"]');
  metaTheme?.setAttribute('content', safeTheme === 'light' ? '#edf3f6' : '#050709');
  if(announce && live) live.textContent = `Tema ${safeTheme === 'light' ? 'claro' : 'escuro'} ativado.`;
  try{ localStorage.setItem('pj-theme', safeTheme); }catch(e){}
}
let savedTheme = 'dark';
try{ savedTheme = localStorage.getItem('pj-theme') || 'dark'; }catch(e){}
applyTheme(savedTheme,false);
themeButtons.forEach(btn=>btn.addEventListener('click',()=>applyTheme(btn.dataset.themeChoice,true)));

// Tooltips: acessíveis também por teclado e leitores de tela.
document.querySelectorAll('[data-tooltip]').forEach((el, index) => {
  if (!el.hasAttribute('tabindex')) el.setAttribute('tabindex', '0');
  const id = `tooltip-desc-${index + 1}`;
  const desc = document.createElement('span');
  desc.id = id;
  desc.className = 'sr-only';
  desc.textContent = el.dataset.tooltip;
  el.insertAdjacentElement('afterend', desc);
  el.setAttribute('aria-describedby', id);
});

// V2.6.7 — Projetos & Labs compactos: hover no desktop, clique/toque e teclado.
(() => {
  const cards = [...document.querySelectorAll('#cases .case-card')];
  if (!cards.length) return;

  const closeOthers = current => cards.forEach(card => {
    if (card !== current) setOpen(card, false);
  });
  const setOpen = (card, open) => {
    card.classList.toggle('is-open', open);
    const btn = card.querySelector('.project-toggle');
    const panel = card.querySelector('.project-expand');
    if (btn) btn.setAttribute('aria-expanded', String(open));
    if (panel) panel.setAttribute('aria-hidden', String(!open));
  };

  cards.forEach((card, index) => {
    const number = card.querySelector(':scope > .case-no');
    const title = card.querySelector(':scope > h3');
    if (!number || !title) return;

    const panelId = `project-panel-${index + 1}`;
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'project-toggle';
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-controls', panelId);
    button.innerHTML = `<span class="case-no">${number.textContent}</span><span class="project-toggle-title">${title.textContent}</span><span class="project-toggle-icon" aria-hidden="true">+</span>`;

    const expand = document.createElement('div');
    expand.className = 'project-expand';
    expand.id = panelId;
    expand.setAttribute('aria-hidden', 'true');
    const inner = document.createElement('div');
    inner.className = 'project-expand-inner';
    const content = document.createElement('div');
    content.className = 'project-expand-content';

    [...card.children].forEach(child => {
      if (child !== number && child !== title) content.appendChild(child);
    });
    number.remove(); title.remove();
    inner.appendChild(content); expand.appendChild(inner);
    card.prepend(expand); card.prepend(button);
    card.classList.add('project-accordion-ready');

    button.addEventListener('click', () => {
      const open = !card.classList.contains('is-open');
      closeOthers(card); setOpen(card, open);
    });

    if (window.matchMedia('(hover:hover) and (pointer:fine)').matches) {
      card.addEventListener('mouseenter', () => { closeOthers(card); setOpen(card, true); });
      card.addEventListener('mouseleave', () => {
        if (!card.contains(document.activeElement)) setOpen(card, false);
      });
    }
    card.addEventListener('focusin', () => { closeOthers(card); setOpen(card, true); });
  });
})();

// V2.6.9 — Roadmap compacto: mesmo comportamento de Projetos & Labs.
(() => {
  const items = [...document.querySelectorAll('#roadmap .roadmap-item')];
  if (!items.length) return;
  const setOpen = (item, open) => {
    item.classList.toggle('is-open', open);
    const btn = item.querySelector('.roadmap-toggle');
    const panel = item.querySelector('.roadmap-expand');
    if (btn) btn.setAttribute('aria-expanded', String(open));
    if (panel) panel.setAttribute('aria-hidden', String(!open));
  };
  const closeOthers = current => items.forEach(item => { if (item !== current) setOpen(item, false); });
  items.forEach((item, index) => {
    const btn = item.querySelector('.roadmap-toggle');
    const panel = item.querySelector('.roadmap-expand');
    if (!btn || !panel) return;
    const id = `roadmap-panel-${index + 1}`;
    panel.id = id;
    btn.setAttribute('aria-controls', id);
    btn.addEventListener('click', () => {
      const open = !item.classList.contains('is-open');
      closeOthers(item); setOpen(item, open);
    });
    if (window.matchMedia('(hover:hover) and (pointer:fine)').matches) {
      item.addEventListener('mouseenter', () => { closeOthers(item); setOpen(item, true); });
      item.addEventListener('mouseleave', () => { if (!item.contains(document.activeElement)) setOpen(item, false); });
    }
    item.addEventListener('focusin', () => { closeOthers(item); setOpen(item, true); });
  });
})();
