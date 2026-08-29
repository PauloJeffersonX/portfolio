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



// =========================================================
// V2.7.3 — AEGIS GAME MODE PLUS
// Easter egg: 3 cliques em AEGIS OU Konami Code.
// Dois minigames locais: Breakout + Dodge.
// =========================================================
(() => {
  const overlay = document.getElementById('gameOverlay');
  const trigger = document.getElementById('gameEasterTrigger');
  const closeBtn = document.getElementById('gameClose');
  const startScreen = document.getElementById('gameStartScreen');
  const canvas = document.getElementById('aegisGame');
  const scoreEl = document.getElementById('gameScore');
  const livesEl = document.getElementById('gameLives');
  const levelEl = document.getElementById('gameLevel');
  const leftBtn = document.getElementById('gameLeft');
  const rightBtn = document.getElementById('gameRight');
  const pauseBtn = document.getElementById('gamePause');
  const gameTitle = document.getElementById('gameTitle');
  const choiceBreakout = document.getElementById('gameChoiceBreakout');
  const choiceDodge = document.getElementById('gameChoiceDodge');

  if (!overlay || !trigger || !canvas) return;

  const ctx = canvas.getContext('2d');
  let currentGame = 'breakout';
  let lastFocus = null;
  let easterClicks = 0;
  let clickTimer = null;
  let animationId = 0;
  let running = false;
  let paused = false;
  let leftPressed = false;
  let rightPressed = false;

  let score = 0;
  let lives = 3;
  let level = 1;
  let frame = 0;

  const paddle = { x: 285, y: 384, w: 150, h: 12, speed: 8 };
  const ball = { x: 360, y: 350, r: 7, dx: 4.1, dy: -4.1 };
  let bricks = [];

  const player = { x: 340, y: 355, w: 40, h: 40, speed: 7 };
  let hazards = [];
  let stars = [];

  const accent = (getComputedStyle(document.documentElement).getPropertyValue('--accent') || '#65e8ff').trim();

  function setChoice(game) {
    currentGame = game;
    choiceBreakout?.classList.toggle('is-active', game === 'breakout');
    choiceDodge?.classList.toggle('is-active', game === 'dodge');
    choiceBreakout?.setAttribute('aria-pressed', String(game === 'breakout'));
    choiceDodge?.setAttribute('aria-pressed', String(game === 'dodge'));
    gameTitle.textContent = game === 'breakout' ? 'NEON BREAKOUT' : 'SIGNAL DODGE';
    stopGame();
    resetGame();
    renderStartScreen();
  }

  function stopGame() {
    running = false;
    paused = false;
    cancelAnimationFrame(animationId);
    pauseBtn.textContent = 'PAUSE';
  }

  function drawGrid() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle = '#03090d';
    ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.strokeStyle = 'rgba(94,231,255,.055)';
    ctx.lineWidth = 1;
    for (let x=0;x<=canvas.width;x+=30){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,canvas.height);ctx.stroke();}
    for (let y=0;y<=canvas.height;y+=30){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(canvas.width,y);ctx.stroke();}
  }

  function rr(x,y,w,h,r){
    ctx.beginPath();
    if (ctx.roundRect) ctx.roundRect(x,y,w,h,r);
    else ctx.rect(x,y,w,h);
  }

  function updateHud() {
    scoreEl.textContent = String(Math.max(0, Math.floor(score))).padStart(4,'0');
    livesEl.textContent = String(lives);
    levelEl.textContent = String(level).padStart(2,'0');
  }

  function renderStartScreen(message='Um pequeno extra escondido no portfólio.') {
    startScreen.classList.remove('is-hidden');
    startScreen.innerHTML = `
      <span class="game-lock">◈ EASTER EGG UNLOCKED</span>
      <p>${message}</p>
      <button id="gameStartDynamic" class="game-primary" type="button">START ${currentGame === 'breakout' ? 'BREAKOUT' : 'DODGE'}</button>
    `;
    document.getElementById('gameStartDynamic')?.addEventListener('click', startGame, { once:true });
  }

  // ---------- BREAKOUT ----------
  function makeBricks() {
    bricks = [];
    const cols=9, rows=4+Math.min(level-1,2), gap=8, side=34, top=52;
    const bw=(canvas.width-side*2-gap*(cols-1))/cols, bh=18;
    for(let r=0;r<rows;r++){
      for(let c=0;c<cols;c++){
        bricks.push({
          x:side+c*(bw+gap), y:top+r*(bh+gap), w:bw, h:bh,
          alive:true, strength:(r===0&&level>1)?2:1
        });
      }
    }
  }

  function resetBall() {
    paddle.x=(canvas.width-paddle.w)/2;
    ball.x=canvas.width/2;
    ball.y=paddle.y-18;
    const speed=4.1+(level-1)*.35;
    ball.dx=(Math.random()>.5?1:-1)*speed;
    ball.dy=-speed;
  }

  function drawBreakout() {
    drawGrid();
    bricks.forEach((b,i)=>{
      if(!b.alive)return;
      ctx.fillStyle=b.strength>1?'rgba(255,255,255,.32)':`rgba(94,231,255,${.34+(i%9)/9*.34})`;
      rr(b.x,b.y,b.w,b.h,4);ctx.fill();
      ctx.strokeStyle='rgba(190,248,255,.36)';ctx.stroke();
    });
    ctx.fillStyle='#dffbff';rr(paddle.x,paddle.y,paddle.w,paddle.h,6);ctx.fill();
    ctx.beginPath();ctx.arc(ball.x,ball.y,ball.r,0,Math.PI*2);ctx.fillStyle=accent;ctx.fill();
  }

  function collideBricks() {
    for(const b of bricks){
      if(!b.alive)continue;
      if(ball.x+ball.r>b.x && ball.x-ball.r<b.x+b.w && ball.y+ball.r>b.y && ball.y-ball.r<b.y+b.h){
        ball.dy*=-1;
        b.strength--;
        if(b.strength<=0){b.alive=false;score+=10*level;} else score+=5;
        updateHud();return;
      }
    }
    if(bricks.every(b=>!b.alive)){
      level++;score+=100;makeBricks();resetBall();updateHud();
    }
  }

  function updateBreakout() {
    if(leftPressed)paddle.x-=paddle.speed;
    if(rightPressed)paddle.x+=paddle.speed;
    paddle.x=Math.max(0,Math.min(canvas.width-paddle.w,paddle.x));

    ball.x+=ball.dx; ball.y+=ball.dy;
    if(ball.x+ball.r>=canvas.width || ball.x-ball.r<=0)ball.dx*=-1;
    if(ball.y-ball.r<=0)ball.dy*=-1;

    if(ball.dy>0 && ball.y+ball.r>=paddle.y && ball.y-ball.r<=paddle.y+paddle.h &&
       ball.x>=paddle.x && ball.x<=paddle.x+paddle.w){
      const relative=(ball.x-(paddle.x+paddle.w/2))/(paddle.w/2);
      ball.dx=relative*(5.8+level*.25);
      ball.dy=-Math.abs(ball.dy);
      ball.y=paddle.y-ball.r-1;
    }

    collideBricks();

    if(ball.y-ball.r>canvas.height){
      lives--;updateHud();
      if(lives<=0){endGame();return;}
      resetBall();
    }
  }

  // ---------- DODGE ----------
  function resetDodge() {
    player.x=(canvas.width-player.w)/2;
    player.y=canvas.height-player.h-24;
    hazards=[];
    stars=Array.from({length:40},()=>({
      x:Math.random()*canvas.width,
      y:Math.random()*canvas.height,
      s:Math.random()*1.8+.4
    }));
    frame=0;
  }

  function spawnHazard() {
    const w=24+Math.random()*42;
    const speed=2.8+level*.45+Math.random()*1.7;
    hazards.push({
      x:Math.random()*(canvas.width-w),
      y:-40,
      w,h:18+Math.random()*30,
      speed
    });
  }

  function drawDodge() {
    drawGrid();
    ctx.fillStyle='rgba(255,255,255,.45)';
    for(const s of stars){ctx.fillRect(s.x,s.y,s.s,s.s);}

    for(const h of hazards){
      ctx.fillStyle='rgba(255,100,120,.56)';
      rr(h.x,h.y,h.w,h.h,5);ctx.fill();
      ctx.strokeStyle='rgba(255,180,190,.45)';ctx.stroke();
    }

    ctx.fillStyle=accent;
    rr(player.x,player.y,player.w,player.h,8);ctx.fill();
    ctx.fillStyle='#031014';
    ctx.fillRect(player.x+9,player.y+12,6,6);
    ctx.fillRect(player.x+25,player.y+12,6,6);
  }

  function updateDodge() {
    frame++;
    if(leftPressed)player.x-=player.speed;
    if(rightPressed)player.x+=player.speed;
    player.x=Math.max(0,Math.min(canvas.width-player.w,player.x));

    const spawnEvery=Math.max(20,58-level*4);
    if(frame%spawnEvery===0)spawnHazard();

    for(const h of hazards) h.y+=h.speed;
    hazards=hazards.filter(h=>{
      if(h.y>canvas.height+60){score+=5;return false;}
      const hit=player.x<h.x+h.w && player.x+player.w>h.x && player.y<h.y+h.h && player.y+player.h>h.y;
      if(hit){
        lives--;
        updateHud();
        h.y=canvas.height+100;
        if(lives<=0){endGame();return false;}
      }
      return true;
    });

    score += .08;
    level = 1 + Math.floor(score / 120);
    updateHud();
  }

  function resetGame() {
    score=0;lives=3;level=1;frame=0;
    leftPressed=rightPressed=false;
    if(currentGame==='breakout'){makeBricks();resetBall();drawBreakout();}
    else {resetDodge();drawDodge();}
    updateHud();
  }

  function drawCurrent() {
    if(currentGame==='breakout') drawBreakout();
    else drawDodge();

    if(paused && running){
      ctx.fillStyle='rgba(3,9,13,.68)';
      ctx.fillRect(0,0,canvas.width,canvas.height);
      ctx.fillStyle='#e9fbff';
      ctx.font='600 24px ui-monospace, monospace';
      ctx.textAlign='center';
      ctx.fillText('PAUSED',canvas.width/2,canvas.height/2);
    }
  }

  function endGame() {
    stopGame();
    renderStartScreen(`Run finalizada • Score: <strong>${String(Math.floor(score)).padStart(4,'0')}</strong>`);
  }

  function loop() {
    if(!running)return;
    if(!paused){
      if(currentGame==='breakout') updateBreakout();
      else updateDodge();
    }
    drawCurrent();
    if(running) animationId=requestAnimationFrame(loop);
  }

  function startGame() {
    stopGame();
    resetGame();
    startScreen.classList.add('is-hidden');
    running=true;paused=false;pauseBtn.textContent='PAUSE';
    animationId=requestAnimationFrame(loop);
  }

  function togglePause() {
    if(!running)return;
    paused=!paused;
    pauseBtn.textContent=paused?'RESUME':'PAUSE';
    drawCurrent();
  }

  function openGame() {
    lastFocus=document.activeElement;
    overlay.hidden=false;
    document.body.classList.add('game-mode-open');
    resetGame();
    renderStartScreen();
    closeBtn.focus();
  }

  function closeGame() {
    stopGame();
    overlay.hidden=true;
    document.body.classList.remove('game-mode-open');
    leftPressed=rightPressed=false;
    if(lastFocus && typeof lastFocus.focus==='function')lastFocus.focus();
  }

  choiceBreakout?.addEventListener('click',()=>setChoice('breakout'));
  choiceDodge?.addEventListener('click',()=>setChoice('dodge'));
  closeBtn.addEventListener('click',closeGame);
  pauseBtn.addEventListener('click',togglePause);

  trigger.addEventListener('click',()=>{
    easterClicks++;
    clearTimeout(clickTimer);
    clickTimer=setTimeout(()=>{easterClicks=0;},1400);
    if(easterClicks>=3){easterClicks=0;openGame();}
  });

  overlay.addEventListener('click',e=>{if(e.target===overlay)closeGame();});

  function keyState(e,down){
    if(e.key==='ArrowLeft'||e.key.toLowerCase()==='a'){leftPressed=down;if(!overlay.hidden)e.preventDefault();}
    if(e.key==='ArrowRight'||e.key.toLowerCase()==='d'){rightPressed=down;if(!overlay.hidden)e.preventDefault();}
  }

  document.addEventListener('keydown',e=>{
    keyState(e,true);
    if(!overlay.hidden && e.key===' '){e.preventDefault();togglePause();}
    if(!overlay.hidden && e.key==='Escape')closeGame();
  });
  document.addEventListener('keyup',e=>keyState(e,false));

  const bindHold=(button,setter)=>{
    if(!button)return;
    const on=e=>{e.preventDefault();setter(true);};
    const off=e=>{e.preventDefault();setter(false);};
    button.addEventListener('pointerdown',on);
    button.addEventListener('pointerup',off);
    button.addEventListener('pointercancel',off);
    button.addEventListener('pointerleave',off);
  };
  bindHold(leftBtn,v=>leftPressed=v);
  bindHold(rightBtn,v=>rightPressed=v);

  const konami=['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
  let konamiIndex=0;
  document.addEventListener('keydown',e=>{
    if(!overlay.hidden)return;
    const key=e.key.length===1?e.key.toLowerCase():e.key;
    if(key===konami[konamiIndex]){
      konamiIndex++;
      if(konamiIndex===konami.length){konamiIndex=0;openGame();}
    } else konamiIndex=key===konami[0]?1:0;
  });

  resetGame();
})();
