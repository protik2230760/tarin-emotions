/* ==========================================================================
   TARIN • POETIC FEMALE EMOTIONS INTERACTIVE ENGINE
   ========================================================================== */

const tarinPhotos = [
  { id: 1, file: 'PIC/656689172_18215333497319301_3823723753370047757_n.jpg', title: 'উচ্ছ্বল আনন্দের হাসিজাল', label: 'আনন্দ ও দ্যুতি', quote: '“হাসির মাঝে লুকিয়ে থাকে এক হাজার শুভ্র বসন্তের উজ্জ্বল আলো।”' },
  { id: 2, file: 'PIC/657243238_18215444374319301_7943697621115546334_n.jpg', title: 'কাব্যিক দৃষ্টিভঙ্গি', label: 'শান্ত প্রশান্তি', quote: '“চোখের পলকে লেখা হয় না বলা হাজারও কাব্যের পংক্তিমালা।”' },
  { id: 3, file: 'PIC/657398276_18215444356319301_1439451056079818148_n.jpg', title: 'সোনালী আভার স্নিগ্ধতা', label: 'অভিজাত স্নিগ্ধতা', quote: '“অভিজাত্যের সৌন্দর্য কেবল সাজে নয়, চরিত্রের অনাবিল সৌরভে।”' },
  { id: 4, file: 'PIC/657876084_18215444410319301_7779654257448379978_n.jpg', title: 'কোমল অনুভূতির রেশ', label: 'কোমল উষ্ণতা', quote: '“হৃদয়ের উষ্ণতা মেপে নেওয়া যায় নিস্তব্ধতার নিবিড় মুহূর্তে।”' },
  { id: 5, file: 'PIC/715501732_2081281712792584_6623280599906853118_n.jpg', title: 'রাজকীয় গাম্ভীর্য', label: 'রহস্যময়তা', quote: '“আত্মবিশ্বাসের আলোতেই ফুটে ওঠে রাজকীয় গাম্ভীর্য।”' },
  { id: 6, file: 'PIC/722810786_18224513506319301_4276879327421925776_n.jpg', title: 'একাকী মননের আলো', label: 'গভীর ভাবনা', quote: '“একাকী নীরবতাই মানুষের আত্ম-আবিষ্কারের শ্রেষ্ঠ সুর।”' },
  { id: 7, file: 'PIC/727524496_18225042667319301_5381365311145488466_n.jpg', title: 'অভিজাত্যের ছোঁয়া', label: 'অভিজাত স্নিগ্ধতা', quote: '“প্রতিটি পদক্ষেপে ফুটে ওঠে আধুনিকতা ও চিরায়ত সৌন্দর্যের মিলন।”' },
  { id: 8, file: 'PIC/730040663_18225922963319301_2712490421498903567_n.jpg', title: 'মিষ্টি রোদের দীপ্তি', label: 'কোমল উষ্ণতা', quote: '“একটু মিষ্টি রোদের হাসিতে দূর হয়ে যায় সারাদিনের সব শ্রান্তি।”' },
  { id: 9, file: 'PIC/730420859_18225923026319301_4327742214765428893_n.jpg', title: 'গভীর স্বপ্নিলতা', label: 'গভীর ভাবনা', quote: '“স্বপ্নের চোখে ভেসে থাকে দূর দিগন্তের নীল জলরাশি।”' },
  { id: 10, file: 'PIC/733019746_18226688410319301_8498884318327776148_n.jpg', title: 'প্রশান্তির নীল সুবাস', label: 'শান্ত প্রশান্তি', quote: '“মনের গভীরে প্রশান্তি থাকলে পুরো পৃথিবীকেই কাব্যময় মনে হয়।”' },
  { id: 11, file: 'PIC/735110140_18226688431319301_3568887861967147342_n.jpg', title: 'রহস্যময় দৃষ্টিময়তা', label: 'রহস্যময়তা', quote: '“যা কিছু অধরা ও গভীর, তার আকর্ষণই সবচেয়ে তীব্র।”' },
  { id: 12, file: 'PIC/735552948_18226492075319301_8109728019575413884_n.jpg', title: 'নির্মল আনন্দের দ্যুতি', label: 'আনন্দ ও দ্যুতি', quote: '“নির্মল আনন্দ হলো ভেতরের খাঁটি মুক্তোর মতন দ্যুতিময়।”' },
  { id: 13, file: 'PIC/743841327_18227440591319301_7748718861564385728_n.jpg', title: 'চিরায়ত রূপের ঝলক', label: 'অভিজাত স্নিগ্ধতা', quote: '“যা কিছু সৎ ও খাঁটি, তা সময়ের সীমা ছাড়িয়ে চিরন্তন রূপ নেয়।”' },
  { id: 14, file: 'PIC/761363938_18230029684319301_4465316257842114115_n.jpg', title: 'সরলতায় স্নিগ্ধতা', label: 'শান্ত প্রশান্তি', quote: '“সরলতার মাঝে যে সৌন্দর্য আছে, তা পৃথিবীর কোনো অলংকারে নেই।”' },
  { id: 15, file: 'PIC/789523325_18234058057319301_6065274001019100244_n.jpg', title: 'নিস্তব্ধ রাতের অনুভূতি', label: 'গভীর ভাবনা', quote: '“রাতের নিস্তব্ধতায় নিজের মনকে সবচেয়ে কাছে থেকে শোনা যায়।”' },
  { id: 16, file: 'PIC/790023942_18234058072319301_6153995503272021387_n.jpg', title: 'বসন্তের তাজা রোদ', label: 'আনন্দ ও দ্যুতি', quote: '“তোমার প্রাণবন্ততায় ফুটে ওঠে এক থোকা তাজা শিউলির হাসি।”' },
  { id: 17, file: 'PIC/792324058_2162385691348852_1121644162309649989_n.jpg', title: 'দৃঢ় আত্মপ্রত্যয়', label: 'অভিজাত স্নিগ্ধতা', quote: '“নিজের স্বকীয়তায় বিশ্বাস রাখাই নারীর সবচেয়ে বড় অলংকার।”' },
  { id: 18, file: 'PIC/797357746_18236930563319301_7895963122771427043_n.jpg', title: 'স্নigd স্নেহের স্পর্শ', label: 'কোমল উষ্ণতা', quote: '“মমতার নরম পরশেই জুড়িয়ে যায় ক্লান্ত হৃদয় ও মন।”' },
  { id: 19, file: 'PIC/797417784_18236930578319301_947063727406544572_n.jpg', title: 'বাতাসের আলতো সুর', label: 'শান্ত প্রশান্তি', quote: '“বাতাসের আলতো ছোঁয়ায় বয়ে যায় দূর অজানা কোনো মিষ্টি গান।”' },
  { id: 20, file: 'PIC/801581550_18235235599319301_8874042291927423_n.jpg', title: 'চোখ ধাঁধানো আভা', label: 'আনন্দ ও দ্যুতি', quote: '“আলোর দিশারী হয়ে ফুটে থাকা জীবনকেই জীবনের জয়গান বলে।”' },
  { id: 21, file: 'PIC/801882197_18235235608319301_2234023575841116700_n.jpg', title: 'গভীর রহস্যময় ছায়া', label: 'রহস্যময়তা', quote: '“নীরবতার গভীর ভাষা বুঝলে পৃথিবীর কোনো শব্দ লাগে না।”' },
  { id: 22, file: 'PIC/802030649_18235235704319301_2456489468168039673_n.jpg', title: 'কালজয়ী অনুধ্যান', label: 'গভীর ভাবনা', quote: '“স্মৃতি হয়ে রয় যা কিছু গভীর ভালোবাসা দিয়ে ধরে রাখা যায়।”' }
];

let currentMode = 'marquee';
let currentLbIndex = 0;
let cinemaIndex = 0;

let audioCtx = null;
let audioOsc = null;
let isAudioOn = false;

// 3D Orbit State
let orbitSetIndex = 0;
const photosPerOrbitSet = 7;
let orbitAngle = 0;
let orbitSpeed = 0.35;
let isOrbitPaused = false;
let isHoveringOrbitCard = false;

// PARTICLE BACKGROUND
function initParticles() {
  const canvas = document.getElementById('particleCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  
  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);
  
  const particles = [];
  for (let i = 0; i < 45; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2 + 0.5,
      c: ['#ff2a8d', '#00f0ff', '#a855f7', '#ffb703'][Math.floor(Math.random() * 4)],
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      alpha: Math.random() * 0.5 + 0.2
    });
  }
  
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;
      
      ctx.save();
      ctx.globalAlpha = p.alpha;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.c;
      ctx.shadowBlur = 8;
      ctx.shadowColor = p.c;
      ctx.fill();
      ctx.restore();
    });
    requestAnimationFrame(draw);
  }
  draw();
}

// FALLING LOVE SHADOW PARTICLES
function initFallingHearts() {
  const container = document.getElementById('heartContainer');
  if (!container) return;

  function createHeart() {
    const heart = document.createElement('i');
    heart.className = 'fa-solid fa-heart falling-heart';
    
    const size = Math.random() * 16 + 10; // 10px to 26px
    const left = Math.random() * 100; // 0vw to 100vw
    const duration = Math.random() * 6 + 6; // 6s to 12s
    
    heart.style.fontSize = `${size}px`;
    heart.style.left = `${left}vw`;
    heart.style.animationDuration = `${duration}s`;
    
    container.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, duration * 1000);
  }

  // Generate initial wave
  for (let i = 0; i < 15; i++) {
    setTimeout(createHeart, Math.random() * 3000);
  }

  // Interval generator
  setInterval(createHeart, 800);
}

// 1. RENDER MASTERPIECE COMPACT 3D PHOTO GRID
function renderMainGrid() {
  const grid = document.getElementById('mainPhotoGrid');
  grid.innerHTML = '';
  if (currentMode === 'organic') {
    grid.classList.add('mode-organic');
  } else {
    grid.classList.remove('mode-organic');
  }

  tarinPhotos.forEach((photo, idx) => {
    const card = document.createElement('div');
    card.className = 'photo-card';
    card.dataset.id = photo.id;
    card.style.animationDelay = `${idx * 0.04}s`;
    
    card.innerHTML = `
      <div class="photo-img-wrap">
        <img src="${photo.file}" alt="${photo.title}" loading="lazy" />
        <span class="photo-badge">• ${photo.label}</span>
      </div>
      <div class="photo-poetic-info">
        <h3 class="photo-title">${photo.title}</h3>
        <p class="photo-quote">${photo.quote}</p>
      </div>
    `;

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      card.style.transform = `perspective(1000px) rotateX(${-y / 8}deg) rotateY(${x / 8}deg) scale3d(1.03, 1.03, 1.03)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'none';
    });

    card.addEventListener('click', () => {
      openLightbox(idx);
    });

    grid.appendChild(card);
  });
}

// 2. 7-PHOTO AUTOMATIC CYCLING 3D ORBIT CAROUSEL STAGE
function getOrbitSetPhotos() {
  const start = orbitSetIndex * photosPerOrbitSet;
  let end = start + photosPerOrbitSet;
  if (orbitSetIndex === 2) end = tarinPhotos.length;
  return tarinPhotos.slice(start, end);
}

function initOrbitControls() {
  const wrapper = document.getElementById('orbit3dWrapper');
  if (!wrapper || wrapper.dataset.orbitInitialized) return;
  wrapper.dataset.orbitInitialized = 'true';

  let isPointerDown = false;
  let startX = 0;
  let startAngle = 0;

  wrapper.addEventListener('pointerdown', (e) => {
    if (e.target.closest('.orbit-card') || e.target.closest('.orbit-controls-bar')) return;
    isPointerDown = true;
    startX = e.clientX;
    startAngle = orbitAngle;
    wrapper.style.cursor = 'grabbing';
  });

  window.addEventListener('pointermove', (e) => {
    if (!isPointerDown) return;
    const deltaX = e.clientX - startX;
    orbitAngle = startAngle + deltaX * 0.35;
  });

  window.addEventListener('pointerup', () => {
    if (isPointerDown) {
      isPointerDown = false;
      wrapper.style.cursor = 'grab';
    }
  });

  wrapper.addEventListener('wheel', (e) => {
    e.preventDefault();
    orbitAngle += e.deltaY * 0.15;
  }, { passive: false });

  const prevBtn = document.getElementById('orbitPrevWave');
  const nextBtn = document.getElementById('orbitNextWave');
  const playPauseBtn = document.getElementById('orbitPlayPauseBtn');

  if (prevBtn) {
    prevBtn.onclick = () => {
      const totalSets = Math.ceil(tarinPhotos.length / photosPerOrbitSet);
      orbitSetIndex = (orbitSetIndex - 1 + totalSets) % totalSets;
      orbitAngle = 0;
      renderOrbitCarousel();
    };
  }
  if (nextBtn) {
    nextBtn.onclick = () => {
      const totalSets = Math.ceil(tarinPhotos.length / photosPerOrbitSet);
      orbitSetIndex = (orbitSetIndex + 1) % totalSets;
      orbitAngle = 0;
      renderOrbitCarousel();
    };
  }
  if (playPauseBtn) {
    playPauseBtn.onclick = () => {
      isOrbitPaused = !isOrbitPaused;
      if (isOrbitPaused) {
        playPauseBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
        playPauseBtn.classList.remove('active-play');
      } else {
        playPauseBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
        playPauseBtn.classList.add('active-play');
      }
    };
  }
}

function renderOrbitWaveDots() {
  const dotsContainer = document.getElementById('orbitWaveDots');
  if (!dotsContainer) return;
  dotsContainer.innerHTML = '';
  const totalSets = Math.ceil(tarinPhotos.length / photosPerOrbitSet);
  for (let s = 0; s < totalSets; s++) {
    const dot = document.createElement('span');
    dot.className = `orbit-dot ${s === orbitSetIndex ? 'active' : ''}`;
    dot.title = `গ্যালাক্সি তরঙ্গ ${s + 1}`;
    dot.addEventListener('click', () => {
      orbitSetIndex = s;
      orbitAngle = 0;
      renderOrbitCarousel();
    });
    dotsContainer.appendChild(dot);
  }
}

function renderOrbitCarousel() {
  initOrbitControls();
  renderOrbitWaveDots();

  const carousel = document.getElementById('orbitCarousel');
  carousel.innerHTML = '';
  
  const currentSetPhotos = getOrbitSetPhotos();
  const total = currentSetPhotos.length;
  const radiusX = Math.min(window.innerWidth * 0.36, 440);
  const radiusZ = Math.min(window.innerWidth * 0.28, 320);

  currentSetPhotos.forEach((photo, i) => {
    const origIndex = tarinPhotos.findIndex(p => p.id === photo.id);
    const baseAngle = (i / total) * Math.PI * 2;

    const card = document.createElement('div');
    card.className = 'orbit-card';
    card.dataset.index = origIndex;
    card.dataset.baseAngle = baseAngle;

    card.innerHTML = `
      <span class="orbit-card-badge">• ${photo.label}</span>
      <div class="orbit-img-box">
        <img src="${photo.file}" alt="${photo.title}" />
      </div>
      <div class="orbit-card-info">
        <h3>${photo.title}</h3>
        <p>${photo.quote}</p>
      </div>
    `;

    card.addEventListener('mouseenter', () => {
      isHoveringOrbitCard = true;
      card.style.filter = 'none';
      card.style.opacity = '1';
    });

    card.addEventListener('mouseleave', () => {
      isHoveringOrbitCard = false;
    });

    card.addEventListener('click', (e) => {
      e.stopPropagation();
      document.querySelectorAll('.orbit-card').forEach(c => c.classList.remove('active-portrait-card'));
      card.classList.add('active-portrait-card');
      openLightbox(origIndex);
    });

    carousel.appendChild(card);
  });

  if (window.orbitAnimFrame) cancelAnimationFrame(window.orbitAnimFrame);

  function updateOrbitLoop() {
    if (!isOrbitPaused && !isHoveringOrbitCard) {
      orbitAngle += orbitSpeed;
      if (orbitAngle >= 360) {
        orbitAngle = 0;
        const totalSets = Math.ceil(tarinPhotos.length / photosPerOrbitSet);
        orbitSetIndex = (orbitSetIndex + 1) % totalSets;
        renderOrbitCarousel();
        return;
      }
    }

    const cards = carousel.querySelectorAll('.orbit-card');
    const radOffset = (orbitAngle * Math.PI) / 180;

    cards.forEach(card => {
      if (card.classList.contains('active-portrait-card')) return;

      const baseAngle = parseFloat(card.dataset.baseAngle);
      const worldAngle = baseAngle + radOffset;
      const x = Math.sin(worldAngle) * radiusX;
      const z = Math.cos(worldAngle) * radiusZ;
      const rotY = (worldAngle * 180) / Math.PI;

      const depthNorm = (z + radiusZ) / (2 * radiusZ);
      const scale = 0.68 + depthNorm * 0.42;
      const opacity = 0.4 + depthNorm * 0.6;
      const blur = (1 - depthNorm) * 2.5;

      card.style.transform = `translate3d(${x.toFixed(1)}px, 0, ${z.toFixed(1)}px) rotateY(${rotY.toFixed(1)}deg) scale(${scale.toFixed(2)})`;
      if (!card.matches(':hover')) {
        card.style.opacity = opacity.toFixed(2);
        card.style.filter = blur > 0.4 ? `blur(${blur.toFixed(1)}px)` : 'none';
      }
      card.style.zIndex = Math.round(z + 500);
    });

    window.orbitAnimFrame = requestAnimationFrame(updateOrbitLoop);
  }
  updateOrbitLoop();
}

// 3. RENDER SCATTERED POLAROID STACK
function renderStackStage() {
  const container = document.getElementById('stackContainer');
  container.innerHTML = '';

  tarinPhotos.forEach((photo, i) => {
    const card = document.createElement('div');
    card.className = 'scatter-card';
    
    const rot = (Math.random() - 0.5) * 45;
    const transX = (Math.random() - 0.5) * 200;
    const transY = (Math.random() - 0.5) * 150;
    
    card.style.transform = `translate(${transX}px, ${transY}px) rotate(${rot}deg)`;
    card.style.zIndex = i + 1;
    
    card.innerHTML = `
      <img src="${photo.file}" alt="${photo.title}" />
      <div class="scatter-caption">${photo.title}</div>
      <div class="scatter-quote">${photo.quote}</div>
    `;

    card.addEventListener('click', () => {
      openLightbox(i);
    });

    container.appendChild(card);
  });
}

document.getElementById('shuffleStackBtn')?.addEventListener('click', () => {
  renderStackStage();
});

document.getElementById('fanStackBtn')?.addEventListener('click', () => {
  const cards = document.querySelectorAll('.scatter-card');
  cards.forEach((card, i) => {
    const offset = (i - cards.length / 2) * 35;
    card.style.transform = `translate(${offset}px, 0px) rotate(${(i - cards.length / 2) * 4}deg)`;
    card.style.zIndex = i + 1;
  });
});

// 4. RENDER MARQUEE TRACKS
function renderMarqueeStage() {
  const track1 = document.getElementById('marqueeTrack1');
  const track2 = document.getElementById('marqueeTrack2');
  track1.innerHTML = '';
  track2.innerHTML = '';

  const doublePhotos = [...tarinPhotos, ...tarinPhotos];

  doublePhotos.forEach((photo, idx) => {
    const origIndex = idx % tarinPhotos.length;
    const card1 = createMarqueeCard(photo, origIndex);
    track1.appendChild(card1);

    const card2 = createMarqueeCard(photo, origIndex);
    track2.appendChild(card2);
  });
}

function createMarqueeCard(photo, index) {
  const card = document.createElement('div');
  card.className = 'marquee-card';
  card.innerHTML = `
    <span class="card-badge">${photo.label}</span>
    <img src="${photo.file}" alt="${photo.title}" />
    <div class="marquee-info">
      <h3>${photo.title}</h3>
      <p>${photo.quote}</p>
    </div>
  `;
  card.addEventListener('click', () => {
    openLightbox(index);
  });
  return card;
}

// MODE SWITCHER LOGIC
document.querySelectorAll('.mode-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentMode = btn.dataset.mode;

    const gridStage = document.getElementById('gridStage');
    const orbitStage = document.getElementById('orbitStage');
    const stackStage = document.getElementById('stackStage');
    const marqueeStage = document.getElementById('marqueeStage');

    [gridStage, orbitStage, stackStage, marqueeStage].forEach(s => s.classList.remove('active', 'hidden'));
    [gridStage, orbitStage, stackStage, marqueeStage].forEach(s => s.classList.add('hidden'));

    if (currentMode === 'grid' || currentMode === 'organic') {
      gridStage.classList.remove('hidden');
      gridStage.classList.add('active');
      renderMainGrid();
    } else if (currentMode === 'orbit') {
      orbitStage.classList.remove('hidden');
      orbitStage.classList.add('active');
      renderOrbitCarousel();
    } else if (currentMode === 'stack') {
      stackStage.classList.remove('hidden');
      stackStage.classList.add('active');
      renderStackStage();
    } else if (currentMode === 'marquee') {
      marqueeStage.classList.remove('hidden');
      marqueeStage.classList.add('active');
      renderMarqueeStage();
    }
  });
});

// LIGHTBOX LOGIC
function openLightbox(index) {
  currentLbIndex = index;
  updateLightbox();
  document.getElementById('lightbox').classList.remove('hidden');
}

function updateLightbox() {
  const photo = tarinPhotos[currentLbIndex];
  document.getElementById('lbImg').src = photo.file;
  document.getElementById('lbTitle').textContent = photo.title;
  document.getElementById('lbQuote').textContent = photo.quote;
  document.getElementById('lbBadge').textContent = photo.label;
}

document.getElementById('closeLightbox').addEventListener('click', () => {
  document.getElementById('lightbox').classList.add('hidden');
});

document.getElementById('lbPrev').addEventListener('click', () => {
  currentLbIndex = (currentLbIndex - 1 + tarinPhotos.length) % tarinPhotos.length;
  updateLightbox();
});

document.getElementById('lbNext').addEventListener('click', () => {
  currentLbIndex = (currentLbIndex + 1) % tarinPhotos.length;
  updateLightbox();
});

// FULLSCREEN CINEMA SHOWCASE
document.getElementById('cinemaModeBtn').addEventListener('click', () => {
  cinemaIndex = 0;
  updateCinemaSlide();
  document.getElementById('cinemaModal').classList.remove('hidden');
});

document.getElementById('closeCinema').addEventListener('click', () => {
  document.getElementById('cinemaModal').classList.add('hidden');
});

document.getElementById('cinemaPrev').addEventListener('click', () => {
  cinemaIndex = (cinemaIndex - 1 + tarinPhotos.length) % tarinPhotos.length;
  updateCinemaSlide();
});

document.getElementById('cinemaNext').addEventListener('click', () => {
  cinemaIndex = (cinemaIndex + 1) % tarinPhotos.length;
  updateCinemaSlide();
});

function updateCinemaSlide() {
  const photo = tarinPhotos[cinemaIndex];
  document.getElementById('cinemaImg').src = photo.file;
  document.getElementById('cinemaTitle').textContent = photo.title;
  document.getElementById('cinemaQuote').textContent = photo.quote;
  document.getElementById('cinemaBadge').textContent = photo.label;
}

// AUDIO SYNTHESIZER
document.getElementById('audioToggle').addEventListener('click', () => {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  
  if (isAudioOn) {
    if (audioOsc) audioOsc.stop();
    isAudioOn = false;
    document.getElementById('audioToggle').style.color = '#fff';
  } else {
    audioOsc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    audioOsc.type = 'sine';
    audioOsc.frequency.setValueAtTime(220, audioCtx.currentTime);
    gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
    audioOsc.connect(gain);
    gain.connect(audioCtx.destination);
    audioOsc.start();
    isAudioOn = true;
    document.getElementById('audioToggle').style.color = '#ff2a8d';
  }
});

// INIT
window.addEventListener('DOMContentLoaded', () => {
  initParticles();
  initFallingHearts();
  renderMarqueeStage();
});
