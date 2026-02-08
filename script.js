const CORRECT_PASSWORD = "14"; // 🔁 CHANGE THIS DAILY

function unlockPage(){
  const entered = document.getElementById("pagePassword").value;

  if(entered === CORRECT_PASSWORD){
    document.getElementById("passwordLock").style.display = "none";
  } else {
    document.getElementById("passError").style.display = "block";
  }
}

const pages=[p1,p2,p3,p4,p5,p6,p7];
const floats=document.querySelector(".floats");
const effectsLayer=document.querySelector(".effects-layer");
const confettiLayer=document.querySelector(".confetti-layer");
const rainLayer=document.querySelector(".rain-layer");

const romantic=[romantic1,romantic2];
const sad=[sad1,sad2];
let r=0,s=0,current=null,last="yes";
let confettiActive=false;

function stopAll(){[...romantic,...sad].forEach(a=>a.pause());}

function playYes(){
  if(last==="yes" && current) return;
  stopAll();
  current=romantic[r];
  current.play();
  last="yes";
}

function playNo(){
  stopAll();
  current=sad[s];
  current.play();
  s=(s+1)%sad.length;
  r=(r+1)%romantic.length;
  last="no";
}

const texts=["Soch lo 🥺","Dil se pooch lo ❤️","Dobara socho 😌","Are you sure? 🤨"];

function next(i){
  if(i===1){
    if(!nameInput.value.trim()) return;
    title2.innerText=`${nameInput.value}, ek sawaal hai 💕`;
  }
  playYes();
  heartBurst(pages[i-1]);
  pages[i-1].classList.remove("active");
  pages[i].classList.add("active");
}

function heartBurst(container){
  const rect=container.getBoundingClientRect();
  const x=rect.left+rect.width/2;
  const y=rect.top+rect.height/2;
  const hearts=["💖","💕","💘","💝","❤️"];
  for(let i=0;i<14;i++){
    const h=document.createElement("div");
    h.className="heart";
    h.textContent=hearts[Math.floor(Math.random()*hearts.length)];
    h.style.left=x+"px";
    h.style.top=y+"px";
    h.style.setProperty("--dx",(Math.random()*160-80)+"px");
    h.style.setProperty("--dy",(Math.random()*160-100)+"px");
    h.style.setProperty("--rot",(Math.random()*40-20)+"deg");
    h.style.fontSize=(16+Math.random()*10)+"px";
    effectsLayer.appendChild(h);
    setTimeout(()=>h.remove(),900);
  }
}

function heartExplosionPage(){
  const hearts=["😢","😭","🥺","💔","😞"];
  for(let i=0;i<40;i++){
    const h=document.createElement("div");
    h.className="heart-explosion";
    h.textContent=hearts[Math.floor(Math.random()*hearts.length)];
    h.style.left=Math.random()*100+"vw";
    h.style.top=Math.random()*100+"vh";
    h.style.setProperty("--dx",(Math.random()*160-80)+"px");
    h.style.setProperty("--dy",(Math.random()*160-80)+"px");
    h.style.setProperty("--rot",(Math.random()*60-30)+"deg");
    h.style.fontSize=(18+Math.random()*16)+"px";
    h.style.animationDuration=(0.9+Math.random()*0.6)+"s";
    effectsLayer.appendChild(h);
    setTimeout(()=>h.remove(),1500);
  }
}

function sadRainPage(){
  for(let i=0;i<70;i++){
    const d=document.createElement("div");
    d.className="tear";
    d.style.left=Math.random()*100+"vw";
    d.style.top=(-20-Math.random()*40)+"px";
    d.style.width=(6+Math.random()*6)+"px";
    d.style.height=(10+Math.random()*10)+"px";
    d.style.opacity=(0.6+Math.random()*0.4);
    d.style.setProperty("--dx",(Math.random()*40-20)+"px");
    d.style.animationDuration=(1.0+Math.random()*1.0)+"s";
    rainLayer.appendChild(d);
    setTimeout(()=>d.remove(),2000);
  }
}

function startConfetti(){
  if(confettiActive) return;
  confettiActive=true;
  const colors=["#ff2d7a","#ff84b3","#ffd1e3","#ffffff","#ff5f9e"];
  const spawn=setInterval(()=>{
    for(let i=0;i<10;i++){
      const c=document.createElement("div");
      c.className="confetti";
      c.style.left=(Math.random()*100)+"vw";
      c.style.setProperty("--dx",(Math.random()*80-40)+"px");
      c.style.setProperty("--rot",(Math.random()*360)+"deg");
      c.style.setProperty("--c",colors[Math.floor(Math.random()*colors.length)]);
      confettiLayer.appendChild(c);
      setTimeout(()=>c.remove(),2000);
    }
  },120);
  setTimeout(()=>{
    clearInterval(spawn);
    confettiActive=false;
  },2500);
}

function moveNo1(){
  const p=p1;
  no1.style.left=Math.random()*(p.clientWidth-120)+"px";
  no1.style.top=Math.random()*(p.clientHeight-80)+"px";
  playNo();
}
no1.onmouseenter=moveNo1;
no1.ontouchstart=(e)=>{e.preventDefault();moveNo1();};

[no2,no3,no4,no5].forEach(b=>{
  b.onclick=()=>{
    b.innerText=texts[Math.floor(Math.random()*texts.length)];
    playNo();
    showAngryEmojis();
    if(b.id==="no2") heartExplosionPage();
    if(b.id==="no5") sadRainPage();
    if(b.id==="no3") b.classList.add("cracked");
    if(b.id==="no4") b.classList.add("shrink");
  };
});

document.querySelectorAll(".final-options button").forEach(b=>{
  b.onclick=()=>{
    p6.classList.remove("active");
    p7.classList.add("active");
    startConfetti();
    typeWriter();
  };
});

setInterval(()=>{
  const f=document.createElement("div");
  f.className="float";
  f.innerText=["💖","😍","🌹","❤️","🥰","💕","💜","🤍","😘"][Math.floor(Math.random()*9)];
  f.style.left=Math.random()*100+"vw";
  f.style.setProperty("--dur", (4+Math.random()*5)+"s");
  f.style.setProperty("--drift", (Math.random()*60-30)+"px");
  f.style.fontSize=(18+Math.random()*18)+"px";
  floats.appendChild(f);
  setTimeout(()=>f.remove(),6000);
},250);

const letter=`🐻💖🐻
Tum meri zindagi ka woh scene ho,
jiske bina poori film adhuri lagti hai 🎬 🥹.

Har muskaan, har khushi,
bas tumse shuru hoti hai 🌹✨.

Dudu aur Bubu jaise,
simple & silly life, par hamesha saath 🧸💕.

I love you — aaj bhi, kal bhi, hamesha 💖.`;

let i=0;
function typeWriter(){
  if(i<letter.length){
    typeText.innerHTML+=letter.charAt(i++);
    setTimeout(typeWriter,40);
  }
}

function showAngryEmojis(){
  const layer=document.querySelector(".angry-layer");
  for(let i=0;i<30;i++){
    const e=document.createElement("div");
    e.innerText=["😢","😭","🥺","💔","😞"][Math.floor(Math.random()*5)];
    e.style.position="absolute";
    e.style.left=Math.random()*100+"vw";
    e.style.top=Math.random()*100+"vh";
    e.style.fontSize=Math.random()*20+24+"px";
    layer.appendChild(e);
    setTimeout(()=>e.remove(),1500);
  }
}
