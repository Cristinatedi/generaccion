"use strict";
const REDUCE=matchMedia("(prefers-reduced-motion: reduce)").matches;
const $=s=>document.querySelector(s);
const esc=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const LINES={ahora:{name:"Ahora",cls:"t-ahora"},hasta:{name:"Hasta ahora",cls:"t-hasta"},desde:{name:"Desde ahora",cls:"t-desde"}};
const CHAPTERS=[[1,"El origen"],[3,"Construir juntos"],[5,"Las personas que lo hacen posible"],[7,"El hilo que nos une"],[9,"Cuidar donde está la vida"],[12,"Cuidar es estar"],[15,"Crecer desde el principio"],[17,"Generaciones que se encuentran"],[21,"Donde la ciencia y la vida dialogan"],[24,"Un compromiso con sello"],[26,"Nadie fuera de la imagen"],[28,"Un universo que crece"]];
const SQ=[
 [1,"ahora","foto",1165,1050,"Un comienzo pequeño, una convicción enorme","Jaén, 1994. Un proyecto pequeño, lleno de ilusión, y una certeza que no ha dejado de crecer: cuidar puede significar mucho más. Aquel primer paso marcó un punto en el mapa, pero su fuerza nunca estuvo en el lugar, sino en las personas que decidieron creer en él. Un origen señala dónde empieza el camino. Las personas son quienes lo recorren."],
 [2,"desde","x2",1288,1197,"Alianzas que nos hicieron más fuertes","Muy pronto llegaron nuevas alianzas. Cada una sumó conocimiento, experiencia y capacidad. No fue la historia de una parte imponiéndose a otra, sino la de fortalezas distintas que aprendieron a avanzar juntas. Desde entonces, cada encuentro ha hecho a Macrosad un poco más grande y, sobre todo, mucho más fuerte."],
 [3,"hasta","",1432,1290,"Cooperar también es cuidar","Macrosad creció como cooperativa porque entendió que participar también es una forma de cuidar. Aquí una idea puede abrir una puerta, una experiencia puede mejorar una decisión y cada persona aporta una pieza imprescindible. Cooperar no es solo trabajar juntos: es saber que lo que construimos también nos pertenece."],
 [4,"hasta","",1634,1335,"Un mismo propósito en cada territorio","Con el tiempo, el proyecto llegó a muchos lugares de España. Cambiaron los paisajes, los centros y las necesidades, pero el propósito siguió intacto: acompañar a cada persona para que viva con dignidad, con autonomía y con sentido. En cada territorio, nuevos equipos lo hicieron suyo y lo convirtieron en una realidad cercana, con nombre y con rostro."],
 [5,"desde","",1805,1196,"Ellas escriben las páginas más importantes","La historia de Macrosad tiene miles de nombres, y muchos son de mujer. Mujeres que cuidan, educan, coordinan, investigan, acompañan y lideran. Que han convertido su vocación en profesión y su compromiso en transformación social. No son una nota al margen de esta historia: son quienes han escrito muchas de sus páginas más importantes."],
 [6,"ahora","foto",1868,986,"No llevan capa","Llevan experiencia, preparación y compromiso. Nuestras auxiliares llegan cada día a los hogares y consiguen que alguien se sienta acompañado, escuchado y seguro. Su superpoder está en los pequeños gestos: adelantarse a una necesidad, respetar una decisión, despertar una sonrisa, devolver la confianza. Porque en los cuidados, lo extraordinario casi siempre ocurre de forma sencilla."],
 [7,"hasta","x2",1822,782,"Comunicar es escuchar","En una organización hecha de tantos centros, servicios, territorios y personas, comunicarnos es mucho más que transmitir información. Es escuchar. Es compartir lo aprendido. Es reconocer el trabajo de los demás y dejar que una buena idea viaje de un lugar a otro hasta llegar a quien la necesita."],
 [8,"ahora","",1640,683,"El hilo magenta","Imagina un hilo magenta que recorre toda nuestra historia. Atraviesa escuelas, residencias, centros de día, hogares, universidades y espacios de investigación, y conecta a profesionales, personas usuarias, familias y comunidades. No hace que todas las voces suenen igual: hace que todas puedan ser escuchadas. A veces se estira, se cruza o parece perderse. Pero siempre vuelve a recordarnos que pertenecemos a algo común."],
 [9,"hasta","",1435,703,"El hogar, el primer lugar del cuidado","El hogar guarda costumbres, recuerdos y afectos. Por eso acompañamos a las personas para que puedan seguir viviendo en él con seguridad y autonomía, rodeadas de lo que quieren y de lo que las hace ser quienes son."],
 [10,"desde","",1252,797,"Caminos sin barreras","Y cuando hay que salir de casa, el transporte adaptado abre el camino. Porque participar, aprender, recibir atención o encontrarse con otras personas nunca debería depender de una barrera."],
 [11,"hasta","",1130,668,"Que la vida siga pareciéndose a la vida","Cuando el hogar se traslada a una residencia, queremos que la vida siga pareciéndose a la vida. Las unidades de convivencia son espacios pensados para compartir con intimidad, confianza y cercanía. Lugares donde cada persona conserva sus costumbres, decide y se siente segura sin dejar de sentirse ella misma."],
 [12,"ahora","",1235,530,"Cuidar es estar","Cuidar no es decidir por alguien. Es conocerle, escucharle y ofrecerle los apoyos que necesita para seguir siendo protagonista de su vida. A veces, el cuidado más valioso no hace ruido: consiste, sencillamente, en estar."],
 [13,"hasta","x2",1310,375,"Cada persona, única","Como una huella, no hay dos personas iguales. Eso es la atención centrada en la persona: partir de su historia, sus gustos, sus deseos y sus decisiones, y construir el cuidado alrededor de quien es, no solo de lo que necesita."],
 [14,"desde","",1262,195,"Innovar es aprender a estar mejor","Cada vida cambia, y por eso también cambian los cuidados. Investigamos nuevas respuestas, incorporamos conocimiento y nos preguntamos cada día cómo acompañar mejor. Si cuidar es estar, innovar es aprender a estar cada vez mejor."],
 [15,"desde","",1098,88,"Acompañar desde el principio","La atención temprana acompaña a niños, niñas y familias cuando necesitan orientación y nuevas posibilidades. Lo hace con conocimiento y con corazón, porque las dos cosas encajan como piezas del mismo puzle."],
 [16,"ahora","foto",885,85,"Mirar a cada niño","Después llegan las escuelas infantiles: espacios llenos de preguntas, juegos, colores, movimiento y primeras veces. Educar no es solo enseñar. Es mirar a cada niño y a cada niña y descubrir todo lo que pueden llegar a ser."],
 [17,"desde","",733,193,"Cuando dos mundos se encuentran","En las residencias y centros de día viven la experiencia, la memoria y miles de historias que merecen seguir siendo escuchadas. En las escuelas infantiles crecen la curiosidad y las ganas de descubrir. Cuando esos dos mundos se encuentran nace CININ: un espacio que une infancia y vejez, aprendizaje y experiencia, comienzo y memoria."],
 [18,"hasta","x2",663,372,"Ni demasiado pequeño, ni demasiado mayor","Nunca se es demasiado pequeño para enseñar ni demasiado mayor para aprender. Entre unos pasos que empiezan y otros que ya han recorrido mucho camino se dibuja un lazo infinito: el que une a las generaciones cuando deciden encontrarse."],
 [19,"desde","foto",742,538,"El Carrusel de Aurora","El Carrusel de Aurora pone en movimiento recuerdos, emociones y encuentros. En cada vuelta alguien recupera una historia, comparte una canción o descubre a otra persona. La edad no separa cuando dos personas deciden subirse juntas."],
 [20,"ahora","",838,665,"Yo me llamo Ismael","El tablero de ajedrez de «Yo me llamo Ismael» nos recuerda que cada persona se mueve de una forma diferente, y que todas son necesarias para completar la partida. Nadie sobra en el tablero. Tampoco en la vida."],
 [21,"hasta","",718,795,"La universidad, aliada del cuidado","La experiencia cotidiana plantea preguntas. La universidad aporta el conocimiento para investigarlas y comprenderlas. De ese diálogo nacen respuestas que vuelven, convertidas en bienestar, a las personas."],
 [22,"desde","foto",533,692,"La Cátedra, en el corazón","En el centro de ese encuentro está la Cátedra Macrosad. No ocupa el corazón del tablero por casualidad: es el lugar donde dialogan la ciencia y la vida, la investigación y los cuidados, lo que sabemos y todo lo que todavía podemos descubrir. De su trabajo nacen también las cartas de este juego."],
 [23,"ahora","x2",320,690,"Innovar para anticiparnos","Investigamos porque no queremos conformarnos con lo conocido. Observamos, evaluamos, compartimos conocimiento y desarrollamos nuevas respuestas. Innovamos para anticiparnos a las necesidades y transformar las ideas en bienestar. La innovación no es el destino final: es la energía que nos permite avanzar sin olvidar nunca por qué empezamos."],
 [24,"hasta","",163,800,"Compromisos demostrados","Cada certificado representa un compromiso demostrado: calidad, responsabilidad, seguridad y mejora continua. Son la prueba de que hacer bien las cosas no es una intención, sino una manera de trabajar."],
 [25,"ahora","",115,990,"El sello Macrosad","De todos esos compromisos nace el sello Macrosad. Un sello que no se queda en un documento: se reconoce en la manera de entrar en un hogar, de escuchar a una familia, de acompañar a una persona y de responder cuando algo puede hacerse mejor."],
 [26,"hasta","foto",185,1205,"Imaginar lo que aún no existe","La creatividad nos permite mirar la realidad con otros ojos y descubrir posibilidades nuevas. Cada color aporta algo que los demás no tienen; mezclados, crean lo que ninguno podría por separado."],
 [27,"desde","",335,1300,"Las piezas que completan la imagen","Ningún futuro puede llamarse innovador si deja a alguien fuera. Por eso defendemos la inclusión: una sociedad donde cada persona pueda participar, aportar y encontrar su lugar. Las diferencias no son piezas que sobran. Son las que permiten completar la imagen."],
 [28,"ahora","",528,1285,"Cuidar también el planeta","La sostenibilidad y la Cátedra Verde nos recuerdan que cada decisión deja una huella. Cuidar a las personas también significa proteger el planeta que compartimos y que heredarán quienes vienen detrás."],
 [29,"desde","",685,1180,"Un hogar para todas las generaciones","La Tierra es el hogar más grande que tenemos. Lo recibimos de quienes vinieron antes y lo cuidamos para quienes vendrán. Pocas tareas unen tanto a las generaciones como esta."],
 [30,"ahora","x2",825,1050,"El universo Macrosad","Cuando levantamos la mirada, descubrimos el universo Macrosad: una constelación de personas, hogares, escuelas, centros, universidades, familias, proyectos e ideas. Cada persona es un punto de luz. Cada relación dibuja un camino. Cada cuidado hace que ese universo siga creciendo."]
].map(a=>({n:a[0],line:a[1],sp:a[2],x:a[3]/2000*100,y:a[4]/1400*100,title:a[5],text:a[6]}));
const chapterOf=n=>{let c=0;CHAPTERS.forEach((ch,i)=>{if(n>=ch[0])c=i;});return c;};

/* ================= NAVEGACIÓN ================= */
const VIEWS=["inicio","historia","jugar","album","reglas","profesionales"];
let view="inicio";
function go(v,opts){
  if(!VIEWS.includes(v))v="inicio";
  if(v==="jugar"&&!condOk()){openConditions(()=>go("jugar",opts));return;}
  view=v;
  VIEWS.forEach(k=>{$("#v-"+k).hidden=k!==v;});
  document.querySelectorAll(".tab").forEach(t=>t.setAttribute("aria-current",t.dataset.go===v?"page":"false"));
  try{history.replaceState(null,"","#"+v);}catch(e){}
  if(!(opts&&opts.keepScroll))window.scrollTo({top:0});
  if(v==="album")albumInit();
}
document.addEventListener("click",e=>{const b=e.target.closest("[data-go]");if(b){e.preventDefault();closeModal();go(b.dataset.go);return;}
  const o=e.target.closest("[data-open]");if(o){e.preventDefault();closeModal();
    const start=()=>{const st=$("#lidStage");if(view==="inicio"&&st&&!REDUCE){st.classList.add("opening");setTimeout(()=>{go("jugar");st.classList.remove("opening");},1250);}else go("jugar");};
    if(!condOk())openConditions(start);else start();}});

/* ================= LIBRO ================= */
const PAGES=SQ.length+2; // 0 prólogo, 1-30 piezas, 31 epílogo
let page=0;
function pageHTML(i){
  if(i===0)return `<div class="pg l t-mag"><span class="run">Prólogo</span><img src="img/logo.webp" alt="GenerAcción" style="width:min(300px,80%);height:auto"><div class="kicker">La historia de Macrosad</div><div class="chap">contada en treinta piezas</div></div>
   <div class="pg r"><div class="letter"><p>Hay historias que empiezan con una gran idea. La nuestra empezó con un gesto pequeño: unas manos que se encontraron y decidieron construir juntas.</p><p>Está hecha de piezas. Cada una es una persona, un cuidado, un aprendizaje, una generación, un sueño. Por separado, cuentan momentos. Juntas, cuentan quiénes somos.</p><p>Es la historia de quienes cuidan, enseñan, acompañan, investigan, organizan, escuchan y crean.</p><p style="color:var(--plum)">Una historia escrita siempre en plural.</p></div><span class="folio">Pasa la página ›</span></div>`;
  if(i===PAGES-1)return `<div class="pg l t-desde"><span class="run">Epílogo</span><div class="big-icon"><img src="img/logo.webp" alt="" style="object-fit:contain;border-radius:0;width:80%"></div><div class="kicker">Epílogo</div><div class="chap">Somos personas que suman</div></div>
   <div class="pg r"><h3>Somos personas que suman</h3><p class="drop">Han pasado muchos años desde aquel comienzo en Jaén. El mapa ha crecido. Los proyectos se han multiplicado. Han nacido nuevas formas de educar, investigar, acompañar y cuidar. Pero lo más importante sigue intacto: seguimos creyendo en las personas.</p><p>Treinta piezas. Un hilo magenta. Una Cátedra en el centro. Miles de personas conectadas por un mismo propósito.</p><p>Somos generaciones que se conectan. Somos una historia de la que sentirnos profundamente orgullosos.</p><div><button class="btn btn-primary" data-go="jugar">Recorrerla jugando</button></div></div>`;
  const s=SQ[i-1],c=chapterOf(s.n);
  return `<div class="pg l ${LINES[s.line].cls}"><span class="run">Capítulo ${c+1} · ${esc(CHAPTERS[c][1])}</span><div class="big-icon"><img src="img/i/${s.n}.webp" alt=""></div><div class="kicker">Pieza ${s.n}</div></div>
   <div class="pg r"><h3>${esc(s.title)}</h3><p class="drop">${esc(s.text)}</p></div>`;
}
function renderBook(dir){
  const b=$("#book");b.innerHTML=pageHTML(page);
  if(dir)b.querySelectorAll(".pg").forEach(p=>p.classList.add(dir>0?"turnA":"turnB"));
  $("#prevPg").disabled=page===0;$("#nextPg").disabled=page===PAGES-1;
  $("#pgCount").textContent=page===0?"Prólogo":page===PAGES-1?"Epílogo":`Pieza ${page} de 30`;
  document.querySelectorAll("#thumbs button").forEach((t,i)=>t.setAttribute("aria-current",i===page?"true":"false"));
  const cur=$("#thumbs").children[page];if(cur&&view==="historia")cur.scrollIntoView({block:"nearest",inline:"center",behavior:"smooth"});
}
function turn(d){const n=Math.max(0,Math.min(PAGES-1,page+d));if(n!==page){page=n;renderBook(d);const b=$("#book");if(b.getBoundingClientRect().top<60)b.scrollIntoView({block:"start",behavior:REDUCE?"auto":"smooth"});}}
function openPage(i){page=i;go("historia");renderBook(1);}
(function initBook(){
  let h=`<button class="tx" aria-label="Prólogo">P</button>`;
  SQ.forEach(s=>h+=`<button class="${LINES[s.line].cls}" aria-label="Pieza ${s.n}: ${esc(s.title)}"><img src="img/i/${s.n}.webp" alt=""></button>`);
  h+=`<button class="tx" aria-label="Epílogo">E</button>`;
  $("#thumbs").innerHTML=h;
  [...$("#thumbs").children].forEach((b,i)=>b.onclick=()=>{const d=i-page;page=i;renderBook(d);});
  $("#prevPg").onclick=()=>turn(-1);$("#nextPg").onclick=()=>turn(1);
  let x0=null;const bk=$("#book");
  bk.addEventListener("pointerdown",e=>{x0=e.clientX;});
  bk.addEventListener("pointerup",e=>{if(x0===null)return;const dx=e.clientX-x0;x0=null;if(Math.abs(dx)>50)turn(dx<0?1:-1);});
  document.addEventListener("keydown",e=>{if(view!=="historia"||!$("#modal").hidden||/INPUT|TEXTAREA|SELECT/.test(e.target.tagName))return;if(e.key==="ArrowRight")turn(1);if(e.key==="ArrowLeft")turn(-1);});
  renderBook(0);
})();

/* ================= JUEGO ================= */
const START={x:1035/2000*100,y:985/1400*100};
const COLORS=[["rosa","#e8628a"],["turquesa","#2fb3a3"],["ciruela","#7a2f6c"],["mostaza","#e0a526"],["azul","#4a7fd0"],["coral","#f08a5d"]];
const board=$("#board");
SQ.forEach(s=>{const b=document.createElement("button");b.className="hot";b.style.left=s.x+"%";b.style.top=s.y+"%";b.dataset.n=s.n;b.setAttribute("aria-label",`Casilla ${s.n}: ${s.title}`);board.appendChild(b);});
board.addEventListener("click",e=>{const b=e.target.closest(".hot");if(b)openInfo(SQ[b.dataset.n-1]);});
function shuffle(a){a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
const freshDecks=()=>({ahora:shuffle([...Array(30).keys()]),hasta:shuffle([...Array(30).keys()]),desde:shuffle([...Array(30).keys()])});
let S={players:[{name:"Abuela Carmen",c:0,pos:0,laps:0},{name:"Lucía",c:1,pos:0,laps:0},{name:"Javier",c:2,pos:0,laps:0}],turn:0,decks:freshDecks(),busy:false,last:null,face:1,cur:null,hist:[]};
/* la partida se guarda en el dispositivo para poder recuperarla si se sale sin querer */
const GAME_KEY="ga-partida-v1";let RESUMED=null;
function saveGame(){try{localStorage.setItem(GAME_KEY,JSON.stringify({players:S.players,turn:S.turn,decks:S.decks,last:S.last,face:S.face,cur:S.cur,hist:S.hist,t:Date.now()}));}catch(e){}}
(function loadGame(){try{const g=JSON.parse(localStorage.getItem(GAME_KEY)||"null");if(g&&g.players&&g.players.length){Object.assign(S,g,{busy:false});if(!S.hist)S.hist=[];if(g.players.some(p=>p.pos>0||p.laps>0)||(g.hist&&g.hist.length))RESUMED=g.t||Date.now();}}catch(e){}})();
const hot=window.claude&&window.claude.hot;
if(hot&&hot.data&&hot.data.players){S=Object.assign(S,hot.data,{busy:false,cur:null});if(!S.hist)S.hist=[];}
if(hot&&hot.snapshot)hot.snapshot(()=>({players:S.players,turn:S.turn,decks:S.decks,last:S.last,face:S.face,hist:S.hist}));
const pawn=col=>`<svg viewBox="0 0 40 56" aria-hidden="true"><ellipse cx="20" cy="50" rx="17" ry="5.5" fill="${col}" opacity=".9"/><path d="M20 4a8.5 8.5 0 0 1 5.2 15.2C29 22 31 26 31.5 31L34 49H6l2.5-18C9 26 11 22 14.8 19.2A8.5 8.5 0 0 1 20 4z" fill="${col}" stroke="#fff" stroke-width="2.4"/><circle cx="16.5" cy="11" r="2.6" fill="#fff" opacity=".45"/></svg>`;
const OFF=[[-1.2,-.9],[1.2,-.9],[-1.4,1.2],[1.4,1.2],[0,-2],[0,2]];
function place(i){
  const p=S.players[i];let el=board.querySelector(`.token[data-i="${i}"]`);
  if(!el){el=document.createElement("div");el.className="token";el.dataset.i=i;board.appendChild(el);}
  el.innerHTML=pawn(COLORS[p.c][1]);
  const here=S.players.map((_,k)=>k).filter(k=>S.players[k].pos===p.pos);
  const o=here.length>1?OFF[here.indexOf(i)%6]:[0,0];
  const pt=p.pos===0?START:SQ[p.pos-1];
  el.style.left=(pt.x+o[0])+"%";el.style.top=(pt.y+o[1]*1.4)+"%";
  el.classList.toggle("active",i===S.turn);
}
function renderGame(){
  board.querySelectorAll(".token").forEach(t=>{if(+t.dataset.i>=S.players.length)t.remove();});
  S.players.forEach((_,i)=>place(i));
  const p=S.players[S.turn];
  $("#turnName").textContent=p.name;$("#turnDot").style.background=COLORS[p.c][1];
  $("#players").innerHTML=S.players.map((q,i)=>`<li class="${i===S.turn?"on":""}"><span class="sw" style="background:${COLORS[q.c][1]}"></span>${esc(q.name)}<span class="pos">${q.pos===0?"Salida":"Casilla "+q.pos}${q.laps?` · ${q.laps} vuelta${q.laps>1?"s":""}`:""}</span></li>`).join("");
  board.querySelectorAll(".hot").forEach(h=>h.classList.toggle("land",S.last===+h.dataset.n));
}
const PIPS={1:[5],2:[1,9],3:[1,5,9],4:[1,3,7,9],5:[1,3,5,7,9],6:[1,3,4,6,7,9]};
const cube=$("#cube");
cube.innerHTML=[1,2,3,4,5,6].map(n=>`<div class="face f${n}">${PIPS[n].map(k=>`<i style="grid-area:${Math.ceil(k/3)}/${(k-1)%3+1}"></i>`).join("")}</div>`).join("");
const ROT={1:[0,0],2:[0,-90],3:[-90,0],4:[90,0],5:[0,90],6:[0,180]};
let spins=0;
function showFace(n,anim){spins+=anim?2:0;const r=ROT[n];cube.style.transform=`rotateX(${r[0]+spins*360}deg) rotateY(${r[1]+spins*360}deg)`;}
showFace(S.face,false);
const wait=ms=>new Promise(r=>setTimeout(r,ms));
const reduce=matchMedia("(prefers-reduced-motion: reduce)").matches;
async function roll(){
  if(S.busy)return;S.busy=true;$("#rollBtn").disabled=true;
  const n=1+Math.floor(Math.random()*6);S.face=n;showFace(n,true);
  const p=S.players[S.turn];
  $("#log").textContent=`${p.name} tira el dado…`;
  await wait(reduce?50:1000);
  $("#log").textContent=`${p.name} ha sacado un ${n}.`;
  S.last=null;renderGame();
  for(let k=0;k<n;k++){
    if(p.pos===30){p.pos=0;p.laps++;renderGame();openLap(p);return;}
    p.pos++;S.players.forEach((_,i)=>place(i));await wait(reduce?10:230);
  }
  S.last=p.pos;renderGame();await wait(reduce?10:250);
  const s=SQ[p.pos-1];S.cur={pi:S.turn,n:s.n,ci:draw(s.line)};S.hist.push({line:s.line,ci:S.cur.ci,n:s.n});saveGame();
  openCard();
}
function draw(line){if(!S.decks[line].length)S.decks[line]=shuffle([...Array(30).keys()]);return S.decks[line].pop();}
function nextTurn(again){
  if(!again)S.turn=(S.turn+1)%S.players.length;
  S.busy=false;S.cur=null;$("#rollBtn").disabled=false;closeModal();renderGame();saveGame();hideResume();
  const p=S.players[S.turn];
  $("#log").textContent=again?`¡${p.name} vuelve a tirar!`:`Le toca a ${p.name}.`;
}
/* modal */
const modal=$("#modal"),sheet=$("#sheet");let lastFocus=null,modalLocked=false;
function openModal(html,cls,locked){if(modal.hidden)lastFocus=document.activeElement;modalLocked=!!locked;sheet.className="sheet "+(cls||"");sheet.innerHTML=html;modal.hidden=false;sheet.scrollTop=0;const f=sheet.querySelector("[data-focus]")||sheet.querySelector("button,input,textarea");f&&f.focus({preventScroll:true});}
function closeModal(){if(modal.hidden)return;modal.hidden=true;modalLocked=false;if(lastFocus&&lastFocus.focus)lastFocus.focus({preventScroll:true});}
modal.addEventListener("click",e=>{if(e.target===modal&&!modalLocked)closeModal();});
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&!modal.hidden&&!modalLocked)closeModal();});
const sheetTop=(s,k)=>`<div class="sheet-top"><img src="img/i/${s.n}.webp" alt=""><div><span class="k">${k}</span><h3 id="mTitle">${esc(s.title)}</h3></div></div>`;
function openCard(){
  const {pi,n,ci}=S.cur,p=S.players[pi],s=SQ[n-1],L=LINES[s.line],c=window.CARTAS[s.line][ci],again=s.sp==="x2";
  let sp="";
  if(s.sp==="foto")sp=`<div class="special"><span class="ic">📷</span><div><b>Inmortaliza el momento.</b> Haced una fotografía para recordar este instante. Si queréis, subidla al álbum.</div></div>`;
  if(again)sp=`<div class="special"><span class="ic">x2</span><div><b>¡Vuelve a tirar!</b> Haced la carta y después ${esc(p.name)} lanza otra vez el dado.</div></div>`;
  openModal(sheetTop(s,`${esc(p.name)} · casilla ${s.n}`)+`<div class="sheet-body">${sp}
    <div class="gcard"><div class="line">${L.name}<small>CARTA ${ci+1}/30</small></div>
      <div class="blk"><h5>Nos conectamos</h5><p>${esc(c.c)}</p></div>
      <div class="blk"><h5>Creamos juntos</h5><p>${esc(c.j)}</p></div></div>
    <details class="hist"><summary>La historia de esta casilla</summary><p>${esc(s.text)}</p></details>
    <div class="acts"><span class="spacer"></span>
      <button class="btn btn-soft btn-sm" id="qBtn">Guardar frase en el álbum</button>
      ${s.sp==="foto"?`<button class="btn btn-soft btn-sm" id="phBtn">Añadir la foto al álbum</button>`:""}
      <button class="btn btn-primary" data-focus id="doneBtn">${again?"Hecho, vuelvo a tirar":"Hecho, siguiente turno"}</button></div></div>`,L.cls,true);
  $("#doneBtn").onclick=()=>nextTurn(again);
  $("#qBtn").onclick=()=>modalForm("frase",{line:s.line,ci:ci,casilla:s.n},openCard);
  const ph=$("#phBtn");if(ph)ph.onclick=()=>modalForm("foto",{casilla:s.n},openCard);
}
function openLap(p){
  openModal(`<div class="sheet-top t-desde"><img src="img/logo.webp" alt=""><div><span class="k">${esc(p.name)}</span><h3 id="mTitle">¡Has recorrido toda la historia!</h3></div></div><div class="sheet-body"><p style="margin:0;font-family:var(--f-story)">Treinta piezas, un hilo magenta y una Cátedra en el centro. Tu ficha vuelve a la salida: seguid jugando mientras sigan apareciendo conversaciones.</p><div class="acts"><button class="btn btn-primary" data-focus id="doneBtn">Seguir jugando</button></div></div>`,"t-desde",true);
  $("#doneBtn").onclick=()=>nextTurn(false);
}
function openInfo(s){
  if(S.busy)return;const L=LINES[s.line];
  openModal(sheetTop(s,`Casilla ${s.n} · ${L.name}`)+`<div class="sheet-body"><p style="margin:0;font-family:var(--f-story);line-height:1.65">${esc(s.text)}</p>
   <div class="acts"><button class="btn btn-ghost btn-sm" id="bookBtn">Abrir en el libro</button><button class="btn btn-primary btn-sm" data-focus id="closeBtn">Cerrar</button></div></div>`,L.cls);
  $("#closeBtn").onclick=closeModal;$("#bookBtn").onclick=()=>{closeModal();openPage(s.n);};
}
function openSetup(){
  if(S.busy)return;let n=S.players.length;const names=S.players.map(p=>p.name);
  const paint=()=>{
    openModal(`<div class="sheet-top t-ahora"><img src="img/logo.webp" alt=""><div><span class="k">Preparación</span><h3 id="mTitle">¿Quién juega?</h3></div></div>
    <div class="sheet-body"><div><div style="font-weight:800;margin-bottom:8px">Número de fichas</div><div class="count">${[2,3,4,5,6].map(k=>`<button aria-pressed="${k===n}" data-k="${k}">${k}</button>`).join("")}</div></div>
    ${Array.from({length:n},(_,i)=>`<label class="setup-row"><span class="sw" style="background:${COLORS[i][1]}"></span><span class="sr">Nombre de la ficha ${COLORS[i][0]}</span><input type="text" id="pn${i}" value="${esc(names[i]||"Ficha "+COLORS[i][0])}" maxlength="24"></label>`).join("")}
    <p style="margin:0;color:var(--ink-soft);font-size:.92rem">Al empezar, todas las fichas vuelven a la salida y se barajan las tres líneas de tiempo.</p>
    <div class="acts"><button class="btn btn-ghost btn-sm" id="cancelBtn">Cancelar</button><button class="btn btn-primary" id="goBtn">Empezar partida</button></div></div>`,"t-ahora");
    sheet.querySelectorAll(".count button").forEach(b=>b.onclick=()=>{for(let i=0;i<n;i++)names[i]=$("#pn"+i).value;n=+b.dataset.k;paint();});
    $("#cancelBtn").onclick=closeModal;
    $("#goBtn").onclick=()=>{S.players=Array.from({length:n},(_,i)=>({name:$("#pn"+i).value.trim()||"Ficha "+COLORS[i][0],c:i,pos:0,laps:0}));S.turn=0;S.decks=freshDecks();S.last=null;S.cur=null;S.hist=[];closeModal();renderGame();saveGame();hideResume();$("#log").textContent=`Todas las fichas en la salida. Empieza ${S.players[0].name}.`;};
  };
  paint();
}
function restart(){if(S.busy)return;S.players.forEach(p=>{p.pos=0;p.laps=0;});S.turn=0;S.decks=freshDecks();S.last=null;S.cur=null;S.hist=[];renderGame();saveGame();hideResume();$("#log").textContent=`Nueva partida. Empieza ${S.players[0].name}.`;}
function endGame(){
  if(S.busy)return;
  openModal(`<div class="sheet-top t-desde"><img src="img/logo.webp" alt=""><div><span class="k">Fin del recorrido</span><h3 id="mTitle">Lo más importante es que no termina cuando guardáis el juego</h3></div></div>
  <div class="sheet-body"><ul style="margin:0;padding-left:1.2em"><li>Si alguna conversación continúa</li><li>Si alguien descubre algo nuevo sobre otra persona</li><li>Si decidís volver a veros</li><li>Si os quedáis con ganas de compartir más</li></ul>
  <p style="margin:0;font-family:var(--f-hand);font-size:1.6rem;color:var(--plum)">…entonces GenerAcción habrá cumplido su propósito.</p>
  <div class="acts"><button class="btn btn-soft btn-sm" id="opBtn">Ver nuestro álbum</button><button class="btn btn-ghost btn-sm" id="keepBtn">Seguir jugando</button><button class="btn btn-primary btn-sm" data-focus id="againBtn">Volver a empezar</button></div></div>`,"t-desde");
  $("#keepBtn").onclick=closeModal;$("#againBtn").onclick=()=>{closeModal();restart();};
  $("#opBtn").onclick=()=>{closeModal();alKind="voz";go("album");};
}
$("#rollBtn").onclick=roll;$("#setupBtn").onclick=openSetup;$("#restartBtn").onclick=restart;$("#endBtn").onclick=endGame;

/* ================= ÁLBUM (personal, se guarda en este dispositivo) ================= */
const GENS=[["infancia","Infancia","0–12","#2fb3a3","#d8f2ee"],["juventud","Juventud","13–29","#e8628a","#fbe3e7"],["adultez","Adultez","30–64","#d99a17","#fbefd2"],["mayores","Personas mayores","65+","#7a2f6c","#eedcea"]];
const genOf=k=>GENS.find(g=>g[0]===k);
const LCOL={ahora:["#3fbfae","#d8f2ee","#17786d"],hasta:["#ec8c9f","#fbe3e7","#b34560"],desde:["#8a3a78","#eedcea","#6b2a5e"]};
const TIPOS={casa:"En casa",centro:"En un centro",servicio:"En un servicio",otro:"En otro lugar"};
const HASHTAG="#GenerAccionMacrosad";
/* almacenamiento: IndexedDB con respaldo en memoria */
const STORE={mem:new Map(),db:null,
  open(){if(this.db!==null)return Promise.resolve(this.db);return new Promise(r=>{try{const q=indexedDB.open("generaccion",1);q.onupgradeneeded=()=>q.result.createObjectStore("kv");q.onsuccess=()=>{this.db=q.result;r(this.db);};q.onerror=()=>{this.db=false;r(false);};}catch(e){this.db=false;r(false);}});},
  async get(k){const d=await this.open();if(!d)return this.mem.get(k);return new Promise(r=>{try{const q=d.transaction("kv").objectStore("kv").get(k);q.onsuccess=()=>r(q.result);q.onerror=()=>r(this.mem.get(k));}catch(e){r(this.mem.get(k));}});},
  async set(k,v){this.mem.set(k,v);const d=await this.open();if(!d)return;try{d.transaction("kv","readwrite").objectStore("kv").put(v,k);}catch(e){}},
  async del(k){this.mem.delete(k);const d=await this.open();if(!d)return;try{d.transaction("kv","readwrite").objectStore("kv").delete(k);}catch(e){}}
};
try{navigator.storage&&navigator.storage.persist&&navigator.storage.persist();}catch(e){}
const AL={titulo:"",tipo:"",lugar:"",grupo:false,items:[]};
const PH=new Map(); // id -> {blob,url,img}
let alReady=false,alKind="foto",pageBlobs=[];
const uid=()=>Date.now().toString(36)+Math.random().toString(36).slice(2,7);
const saveAL=()=>STORE.set("album",JSON.parse(JSON.stringify(AL)));
function loadImg(src){return new Promise((res,rej)=>{const i=new Image();i.onload=()=>res(i);i.onerror=rej;i.src=src;});}
async function photo(id){
  if(PH.has(id))return PH.get(id);
  const blob=await STORE.get("img:"+id);if(!blob)return null;
  const url=URL.createObjectURL(blob);const img=await loadImg(url).catch(()=>null);const o={blob,url,img};PH.set(id,o);return o;
}
function shrink(file){return new Promise((res,rej)=>{const u=URL.createObjectURL(file);loadImg(u).then(img=>{const M=1800;let w=img.naturalWidth,h=img.naturalHeight;const k=Math.min(1,M/Math.max(w,h));w=Math.round(w*k);h=Math.round(h*k);const c=document.createElement("canvas");c.width=w;c.height=h;c.getContext("2d").drawImage(img,0,0,w,h);URL.revokeObjectURL(u);c.toBlob(b=>b?res(b):rej(new Error("blob")),"image/jpeg",.88);}).catch(rej);});}

async function albumInit(){
  if(!alReady){
    alReady=true;
    const saved=await STORE.get("album");if(saved&&saved.items)Object.assign(AL,saved);
    if(STORE.db===false){const w=$("#alWarn");w.hidden=false;w.textContent="Este navegador no permite guardar el álbum en el dispositivo (por ejemplo, en una ventana privada o si abrís el archivo desde un ZIP). Descargadlo en PDF antes de cerrar para no perderlo.";}
    $("#aTitulo").value=AL.titulo||"";$("#aLugar").value=AL.lugar||"";
    const r=document.querySelector(`#aTipo input[value="${AL.tipo}"]`);if(r)r.checked=true;
    $("#aTitulo").oninput=e=>{AL.titulo=e.target.value;saveAL();schedule();};
    $("#aLugar").oninput=e=>{AL.lugar=e.target.value;saveAL();schedule();};
    document.querySelectorAll("#aTipo input").forEach(i=>i.onchange=()=>{AL.tipo=i.value;saveAL();schedule();});
    document.querySelectorAll(".seg button").forEach(b=>b.onclick=()=>setKind(b.dataset.k));
    document.querySelectorAll(".altabs button").forEach(b=>b.onclick=()=>setAlTab(b.dataset.al));
    $("#memSave").onclick=downloadPDF;$("#memShare").onclick=openShareMoment;$("#memPublic").onclick=()=>setAlTab("compartido",true);$("#clearBtn").onclick=confirmClear;
    const gf=$("#gFile"),gz=$("#gz");
    const setG=async f=>{if(!f||!/^image\//.test(f.type))return;$("#gTxt").textContent="Preparando la foto…";try{const b=await shrink(f);await STORE.set("img:grupo",b);const old=PH.get("grupo");if(old)URL.revokeObjectURL(old.url);PH.delete("grupo");AL.grupo=true;await saveAL();showG();schedule();}catch(e){$("#gTxt").textContent="No se ha podido leer la imagen. Prueba con otra.";}};
    gf.onchange=()=>setG(gf.files[0]);
    gz.onkeydown=e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();gf.click();}};
    gz.ondragover=e=>{e.preventDefault();gz.classList.add("over");};gz.ondragleave=()=>gz.classList.remove("over");
    gz.ondrop=e=>{e.preventDefault();gz.classList.remove("over");setG(e.dataTransfer.files[0]);};
    $("#gDel").onclick=async()=>{await STORE.del("img:grupo");const o=PH.get("grupo");if(o)URL.revokeObjectURL(o.url);PH.delete("grupo");AL.grupo=false;await saveAL();showG();schedule();};
    showG();PUB.init();
  }
  setKind(alKind);renderItems();schedule(true);
}
function setAlTab(t,scroll){
  document.querySelectorAll(".altabs button").forEach(b=>b.setAttribute("aria-selected",b.dataset.al===t?"true":"false"));
  $("#al-propio").hidden=t!=="propio";$("#al-compartido").hidden=t!=="compartido";
  if(t==="compartido")PUB.renderWall();
  if(scroll)$(".altabs").scrollIntoView({behavior:REDUCE?"auto":"smooth",block:"start"});
}
async function showG(){const p=AL.grupo?await photo("grupo"):null;$("#gTxt").innerHTML=p?`<img src="${p.url}" alt="Foto de grupo">Cambiar foto de grupo`:"Pulsa aquí y añadid una foto de todo el grupo";$("#gDel").hidden=!p;}
function setKind(k){alKind=k;document.querySelectorAll(".seg button").forEach(b=>b.setAttribute("aria-pressed",b.dataset.k===k?"true":"false"));renderForm($("#addForm"),k,{},null);}

function genChips(sel){return `<div class="chips" role="radiogroup" aria-label="Generación">${GENS.map(g=>`<label><input type="radio" name="gen" value="${g[0]}" ${sel===g[0]?"checked":""}><span style="--c:${g[3]}">${g[1]} <small style="opacity:.75">${g[2]}</small></span></label>`).join("")}</div>`;}
/* cartas jugadas en la partida, para enlazar cada frase con su pregunta */
function cardOptions(sel){
  const seen=new Set(),list=[];
  (S.hist||[]).slice().reverse().forEach(h=>{const k=h.line+":"+h.ci;if(seen.has(k))return;seen.add(k);list.push(h);});
  return `<option value="">Ninguna o no la recuerdo</option>`+list.map(h=>{const c=window.CARTAS[h.line][h.ci];const k=h.line+":"+h.ci;const t=c.c.length>70?c.c.slice(0,68)+"…":c.c;return `<option value="${k}" ${sel===k?"selected":""}>${LINES[h.line].name} · ${esc(t)}</option>`;}).join("");
}
function renderForm(box,kind,pre,onDone){
  pre=pre||{};let h="";
  if(kind==="foto")h=`<label class="drop-zone" tabindex="0"><input type="file" accept="image/*" class="sr fFile"><span class="dzTxt">Pulsa o arrastra aquí una foto</span></label>
    <label class="field"><span>Pie de foto</span><input type="text" class="fPie" maxlength="90" placeholder="Ej.: Inventando nuestro saludo secreto"></label>
    <label class="pubask"><input type="checkbox" class="fPub"><span><b>Quiero pedir que se publique en el álbum compartido de GenerAcción.</b> Es opcional: necesitaremos la autorización de cada persona que se reconozca en la foto. Si no, la foto se queda solo en vuestro álbum.</span></label>`;
  if(kind==="frase"){const selKey=pre.line!=null&&pre.ci!=null?pre.line+":"+pre.ci:"";
    h=`<label class="field"><span>La frase</span><textarea class="fTxt" maxlength="220" placeholder="Lo que se dijo, tal cual"></textarea></label>
    <div class="field"><span>¿Quién la dijo?</span>${genChips(pre.gen)}</div>
    <label class="field"><span>¿Qué carta estabais jugando?</span><select class="fCard">${cardOptions(selKey)}</select><small>Así el recuerdo guarda también la pregunta de la carta.</small></label>
    <label class="field fLineWrap"><span>¿De qué línea de tiempo era?</span><select class="fLine">${Object.entries(LINES).map(([k,v])=>`<option value="${k}" ${(pre.line||"ahora")===k?"selected":""}>${v.name}</option>`).join("")}</select></label>`;}
  if(kind==="voz")h=`<div class="field"><span>Tu generación</span>${genChips(pre.gen)}</div>
    <label class="field"><span>¿Qué os ha parecido jugar juntos?</span><textarea class="fTxt" maxlength="200" placeholder="Lo que más os ha gustado, lo que habéis descubierto…"></textarea></label>
    <label class="field"><span>Nombre <small>(opcional)</small></span><input type="text" class="fNom" maxlength="24"></label>`;
  h+=`<p class="msg fMsg" aria-live="polite"></p><div class="acts">${onDone?`<button type="button" class="btn btn-ghost btn-sm fBack">Volver a la carta</button>`:""}<button type="button" class="btn btn-primary fAdd">Añadir al álbum</button></div>`;
  box.innerHTML=`<form style="display:contents" novalidate>${h}</form>`;
  const q=s=>box.querySelector(s),msg=q(".fMsg");
  box.querySelector("form").onsubmit=e=>e.preventDefault();
  if(onDone)q(".fBack").onclick=onDone;
  if(kind==="frase"){const fc=q(".fCard"),lw=q(".fLineWrap");const sync=()=>{lw.hidden=!!fc.value;};fc.onchange=sync;sync();}
  let blob=null;
  if(kind==="foto"){
    const dz=q(".drop-zone"),fi=q(".fFile");
    const take=async f=>{msg.className="msg fMsg";msg.textContent="";if(!f||!/^image\//.test(f.type)){msg.className="msg fMsg err";msg.textContent="Elige un archivo de imagen.";return;}
      q(".dzTxt").textContent="Preparando la foto…";try{blob=await shrink(f);q(".dzTxt").innerHTML=`<img src="${URL.createObjectURL(blob)}" alt="Vista previa">Cambiar foto`;}catch(e){blob=null;q(".dzTxt").textContent="No se ha podido leer la imagen. Prueba con otra.";}};
    fi.onchange=()=>take(fi.files[0]);
    dz.onkeydown=e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();fi.click();}};
    dz.ondragover=e=>{e.preventDefault();dz.classList.add("over");};dz.ondragleave=()=>dz.classList.remove("over");
    dz.ondrop=e=>{e.preventDefault();dz.classList.remove("over");take(e.dataTransfer.files[0]);};
  }
  q(".fAdd").onclick=async()=>{
    msg.className="msg fMsg err";
    const it={id:uid(),k:kind,t:Date.now(),casilla:pre.casilla||null};
    let wantPub=false;
    if(kind==="foto"){if(!blob){msg.textContent="Falta la foto.";return;}it.texto=q(".fPie").value.trim();wantPub=q(".fPub").checked;await STORE.set("img:"+it.id,blob);}
    else{
      it.texto=q(".fTxt").value.trim();it.gen=(box.querySelector('input[name="gen"]:checked')||{}).value||"";
      if(it.texto.length<2){msg.textContent="Escribe el texto antes de añadirlo.";return;}
      if(kind==="voz"&&!it.gen){msg.textContent="Elige la generación.";return;}
      if(kind==="frase"){const v=q(".fCard").value;if(v){const [l,ci]=v.split(":");it.line=l;it.ci=+ci;it.cartaTxt=window.CARTAS[l][+ci].c;}else it.line=q(".fLine").value;}
      if(kind==="voz")it.nombre=q(".fNom").value.trim();
    }
    AL.items.push(it);await saveAL();
    msg.className="msg fMsg ok";msg.textContent="¡Añadido a vuestro álbum!";
    renderItems();schedule();
    if(wantPub){setTimeout(()=>PUB.openConsent(it.id,onDone),500);return;}
    setTimeout(()=>{if(onDone)onDone();else renderForm(box,kind,{},null);},onDone?700:900);
  };
}
function pubBadge(it){
  if(it.k!=="foto")return "";
  const s=it.pub&&it.pub.estado;
  if(!s)return `<span class="st">Solo en vuestro álbum</span>`;
  if(s==="publicada")return `<span class="st ok">Publicada</span>`;
  if(s==="rechazada")return `<span class="st no">No publicada</span>`;
  if(s==="sin-autorizacion")return `<span class="st no">Sin autorización</span>`;
  return `<span class="st pend">Pendiente de revisión</span>`;
}
async function renderItems(){
  const el=$("#itemList");if(!el)return;
  if(!AL.items.length){el.innerHTML="";return;}
  const rows=await Promise.all(AL.items.map(async it=>{const p=it.k==="foto"?await photo(it.id):null;
    const lbl={foto:"Foto",frase:"Frase",voz:"Opinión"}[it.k];
    const canPub=it.k==="foto"&&(!it.pub||it.pub.estado==="sin-autorizacion");
    return `<div class="item">${p?`<img src="${p.url}" alt="">`:`<span class="ic" style="background:${it.k==="voz"?(genOf(it.gen)||GENS[0])[3]:LCOL[it.line||"ahora"][0]}">${it.k==="voz"?"♥":"“"}</span>`}<span class="t"><b>${lbl}:</b> ${esc(it.texto||"(sin pie)")}${pubBadge(it)}</span>${canPub?`<button type="button" data-pubask="${it.id}" style="color:var(--teal-ink)">Publicar</button>`:""}<button type="button" data-del="${it.id}" aria-label="Quitar del álbum">Quitar</button></div>`;}));
  el.innerHTML=`<h3 style="margin:8px 0 6px">En vuestro álbum (${AL.items.length})</h3><div class="items">${rows.join("")}</div>`;
  el.querySelectorAll("[data-del]").forEach(b=>b.onclick=async()=>{const id=b.dataset.del;AL.items=AL.items.filter(i=>i.id!==id);await STORE.del("img:"+id);const p=PH.get(id);if(p)URL.revokeObjectURL(p.url);PH.delete(id);await saveAL();renderItems();schedule();});
  el.querySelectorAll("[data-pubask]").forEach(b=>b.onclick=()=>PUB.openConsent(b.dataset.pubask));
}

/* ---- dibujo de páginas (1080 × 1350) ---- */
const PW=1080,PHh=1350;let assetsP=null;
function loadAssets(){if(!assetsP)assetsP=Promise.all([loadImg("img/logo.webp"),loadImg("img/macrosad.webp"),loadImg("img/catedra.webp"),loadImg("img/tablero.webp"),
  document.fonts?Promise.all(['700 60px Caveat','600 50px Fraunces','italic 400 50px Fraunces','800 30px Nunito','600 30px Nunito'].map(f=>document.fonts.load(f).catch(()=>{}))):null]).then(([logo,mac,cat,tab])=>({logo,mac,cat,tab})).catch(()=>({}));return assetsP;}
function rr(x,c,y,w,h,r){x.beginPath();x.moveTo(c+r,y);x.arcTo(c+w,y,c+w,y+h,r);x.arcTo(c+w,y+h,c,y+h,r);x.arcTo(c,y+h,c,y,r);x.arcTo(c,y,c+w,y,r);x.closePath();}
function lines(x,text,maxW){const words=String(text).split(/\s+/);let line="",out=[];for(const w of words){const t=line?line+" "+w:w;if(x.measureText(t).width>maxW&&line){out.push(line);line=w;}else line=t;}if(line)out.push(line);return out;}
function wrap(x,text,cx,y,maxW,lh,maxLines,align){
  let L=lines(x,text,maxW);
  if(L.length>maxLines){L=L.slice(0,maxLines);L[maxLines-1]=L[maxLines-1].replace(/\s*\S*$/,"")+"…";}
  x.textAlign=align||"center";L.forEach((l,i)=>x.fillText(l,cx,y+i*lh));return y+L.length*lh;
}
function paper(x){
  x.fillStyle="#fbf6f0";x.fillRect(0,0,PW,PHh);
  [[0,0,"rgba(63,191,174,.22)"],[PW,120,"rgba(236,140,159,.26)"],[PW*.15,PHh,"rgba(138,58,120,.16)"],[PW,PHh,"rgba(63,191,174,.16)"]].forEach(([cx,cy,c])=>{const g=x.createRadialGradient(cx,cy,10,cx,cy,520);g.addColorStop(0,c);g.addColorStop(1,"rgba(251,246,240,0)");x.fillStyle=g;x.fillRect(0,0,PW,PHh);});
}
function foot(x,A,n,total){
  if(A.logo){const w=180,h=w*A.logo.height/A.logo.width;x.drawImage(A.logo,60,PHh-40-h,w,h);}
  x.fillStyle="#6f5a6c";x.font="800 26px Nunito";x.textAlign="right";x.fillText(HASHTAG,PW-60,PHh-62);
  x.textAlign="center";x.font="700 34px Caveat";x.fillText(`${n} / ${total}`,PW/2,PHh-60);
}
function cover(x,img,dx,dy,dw,dh){const r=Math.max(dw/img.width,dh/img.height),sw=dw/r,sh=dh/r;x.drawImage(img,(img.width-sw)/2,(img.height-sh)/2,sw,sh,dx,dy,dw,dh);}
function polaroid(x,img,cx,cy,w,h,rot,caption){
  x.save();x.translate(cx,cy);x.rotate(rot*Math.PI/180);
  const pad=w*.045,capH=caption!=null?h*.2:pad;
  x.shadowColor="rgba(59,33,57,.35)";x.shadowBlur=30;x.shadowOffsetY=14;x.fillStyle="#fff";x.fillRect(-w/2,-h/2,w,h);x.shadowColor="transparent";
  const iw=w-2*pad,ih=h-pad-capH;
  if(img)cover(x,img,-w/2+pad,-h/2+pad,iw,ih);else{x.fillStyle="#eedcea";x.fillRect(-w/2+pad,-h/2+pad,iw,ih);}
  if(caption){x.fillStyle="#3b2139";x.font=`700 ${Math.round(w*.062)}px Caveat`;wrap(x,caption,0,h/2-capH+capH*.42,iw,w*.066,2);}
  x.restore();
}
function buildPages(){
  const fotos=AL.items.filter(i=>i.k==="foto"),frases=AL.items.filter(i=>i.k==="frase"),voces=AL.items.filter(i=>i.k==="voz");
  const P=[{t:"portada"}];
  fotos.forEach(f=>P.push({t:"foto",it:f}));
  for(let i=0;i<frases.length;i+=2)P.push({t:"frases",its:frases.slice(i,i+2)});
  for(let i=0;i<voces.length;i+=4)P.push({t:"voces",its:voces.slice(i,i+4)});
  P.push({t:"cierre"});return P;
}
async function drawPage(pg,n,total,A){
  const c=document.createElement("canvas");c.width=PW;c.height=PHh;const x=c.getContext("2d");paper(x);
  if(pg.t==="portada"){
    if(A.logo){const w=560,h=w*A.logo.height/A.logo.width;x.drawImage(A.logo,(PW-w)/2,60,w,h);}
    x.fillStyle="#c42d84";x.font="700 64px Caveat";x.textAlign="center";x.fillText("Nuestro álbum",PW/2,500);
    const title=AL.titulo||"Una partida de GenerAcción";let fs=72;x.font=`600 ${fs}px Fraunces`;
    while(fs>46&&lines(x,title,920).length>2){fs-=4;x.font=`600 ${fs}px Fraunces`;}
    x.fillStyle="#6b2a5e";const ty=wrap(x,title,PW/2,500+fs*1.15,920,fs*1.12,3);
    const lugar=[AL.tipo?TIPOS[AL.tipo]:"",AL.lugar].filter(Boolean).join(" · ");
    x.fillStyle="#6f5a6c";x.font="600 32px Nunito";wrap(x,[lugar,new Date().toLocaleDateString("es-ES",{day:"numeric",month:"long",year:"numeric"})].filter(Boolean).join("  ·  "),PW/2,ty+18,940,40,2);
    const top=Math.max(ty+100,800),bottom=1255,area=bottom-top;
    const g=AL.grupo?await photo("grupo"):null;
    const fotos=g?[]:AL.items.filter(i=>i.k==="foto").slice(0,3);
    if(g&&g.img){const h=area,w=Math.min(760,h*1.34);polaroid(x,g.img,PW/2,top+h/2,w,h,-2,null);}
    else if(fotos.length){const ims=await Promise.all(fotos.map(f=>photo(f.id)));const h=Math.min(area,360),cy=top+area/2;
      const pos=fotos.length===1?[[PW/2,cy,-2,h*1.34,h]]:fotos.length===2?[[PW/2-220,cy,-5,h*1.2,h*.9],[PW/2+220,cy+10,4,h*1.2,h*.9]]:[[PW/2-280,cy-10,-6,h*1.05,h*.8],[PW/2+280,cy-10,5,h*1.05,h*.8],[PW/2,cy+20,-1,h*1.1,h*.84]];
      ims.forEach((p,i)=>{if(p&&p.img)polaroid(x,p.img,pos[i][0],pos[i][1],pos[i][3],pos[i][4],pos[i][2],null);});}
    else if(A.tab){const r=A.tab.width/A.tab.height;let h=area,w=h*r;if(w>900){w=900;h=w/r;}x.drawImage(A.tab,(PW-w)/2,top+(area-h)/2,w,h);}
    x.fillStyle="#6f5a6c";x.font="800 28px Nunito";x.textAlign="center";x.fillText(HASHTAG,PW/2,1305);
    return c;
  }
  if(pg.t==="foto"){
    const p=await photo(pg.it.id);
    if(pg.it.casilla){const s=SQ[pg.it.casilla-1];x.fillStyle="#c42d84";x.font="800 28px Nunito";x.textAlign="center";x.fillText(`CASILLA ${s.n} · ${s.title.toUpperCase()}`.slice(0,60),PW/2,110);}
    polaroid(x,p&&p.img,PW/2,640,900,1000,-1.8,pg.it.texto||"Un momento de GenerAcción");
  }
  if(pg.t==="frases"){
    x.fillStyle="#6b2a5e";x.font="600 60px Fraunces";x.textAlign="center";x.fillText("Lo que se dijo",PW/2,140);
    const one=pg.its.length===1,H=one?900:540;let y=one?200:190;
    pg.its.forEach(it=>{const col=LCOL[it.line||"ahora"],bh=H-40,bx=90,bw=PW-180;
      x.fillStyle=col[1];rr(x,bx,y,bw,bh,36);x.fill();x.lineWidth=6;x.strokeStyle=col[0];x.stroke();
      x.fillStyle=col[0];x.font="700 110px Fraunces";x.textAlign="left";x.fillText("“",bx+40,y+120);
      const qs=one?58:46,ql=one?74:58,qmax=one?5:3;
      x.fillStyle="#3b2139";x.font=`italic 400 ${qs}px Fraunces`;
      let ey=wrap(x,it.texto,PW/2,y+(one?200:130),bw-200,ql,qmax);
      x.fillStyle=col[2];x.font="800 27px Nunito";const g=genOf(it.gen);
      wrap(x,[g?"Lo dijo: "+g[1]:"",LINES[it.line]?LINES[it.line].name:""].filter(Boolean).join("  ·  "),PW/2,ey+14,bw-160,34,1);
      if(it.cartaTxt){
        const cl=one?4:2,lh=one?38:34,fs2=one?28:25;x.font=`600 ${fs2}px Nunito`;
        const L=lines(x,"«"+it.cartaTxt+"»",bw-140).slice(0,cl);const blockH=46+L.length*lh;
        const by=y+bh-blockH-26;
        x.strokeStyle=col[0];x.lineWidth=2;x.setLineDash([8,8]);x.beginPath();x.moveTo(bx+50,by);x.lineTo(bx+bw-50,by);x.stroke();x.setLineDash([]);
        x.fillStyle=col[2];x.font="800 22px Nunito";x.textAlign="center";x.fillText("LA CARTA DECÍA",PW/2,by+36);
        x.fillStyle="#5a4558";x.font=`600 ${fs2}px Nunito`;wrap(x,"«"+it.cartaTxt+"»",PW/2,by+36+lh,bw-140,lh,cl);
      }
      y+=H;});
  }
  if(pg.t==="voces"){
    x.fillStyle="#6b2a5e";x.font="600 60px Fraunces";x.textAlign="center";x.fillText("Voces de las generaciones",PW/2,140);
    const W2=(PW-200)/2,H2=490;
    pg.its.forEach((it,i)=>{const g=genOf(it.gen)||GENS[0],cx=80+(i%2)*(W2+40),cy=200+Math.floor(i/2)*(H2+40);
      x.fillStyle=g[4];rr(x,cx,cy,W2,H2,30);x.fill();x.lineWidth=5;x.strokeStyle=g[3];x.stroke();
      x.fillStyle=g[3];x.font="800 28px Nunito";x.textAlign="center";x.fillText(`${g[1].toUpperCase()} · ${g[2]}`,cx+W2/2,cy+60);
      x.fillStyle="#3b2139";x.font="700 44px Caveat";const ey=wrap(x,it.texto,cx+W2/2,cy+130,W2-60,50,6);
      if(it.nombre){x.fillStyle="#6f5a6c";x.font="800 26px Nunito";x.fillText("— "+it.nombre,cx+W2/2,Math.min(ey+30,cy+H2-30));}});
  }
  if(pg.t==="cierre"){
    x.fillStyle="#6b2a5e";x.font="700 92px Caveat";x.textAlign="center";
    wrap(x,"Aquí, cuanto más compartimos, más gana la partida.",PW/2,360,820,100,4);
    x.fillStyle="#6f5a6c";x.font="600 32px Nunito";wrap(x,"Gracias por jugar juntos.",PW/2,800,820,40,1);
    if(A.mac){const w=560,h=w*A.mac.height/A.mac.width;x.drawImage(A.mac,(PW-w)/2,900,w,h);}
    x.fillStyle="#6b2a5e";x.font="700 44px Caveat";x.textAlign="right";x.fillText("en colaboración con",PW/2+90,1105);
    if(A.cat)x.drawImage(A.cat,PW/2+110,1050,90,90);
    x.fillStyle="#6f5a6c";x.font="800 26px Nunito";x.textAlign="center";x.fillText(HASHTAG,PW/2,1260);
    return c;
  }
  foot(x,A,n,total);
  return c;
}
let tmr=null,renderSeq=0;
function schedule(now){clearTimeout(tmr);tmr=setTimeout(renderPages,now?0:350);}
async function renderPages(){
  const seq=++renderSeq,el=$("#pages");if(!el)return;
  const A=await loadAssets();const P=buildPages();const out=[];
  for(let i=0;i<P.length;i++){const c=await drawPage(P[i],i+1,P.length,A);const b=await new Promise(r=>c.toBlob(r,"image/jpeg",.9));out.push(b);if(seq!==renderSeq)return;}
  pageBlobs.forEach(p=>URL.revokeObjectURL(p.url));pageBlobs=out.map(b=>({blob:b,url:URL.createObjectURL(b)}));
  const names=P.map(p=>({portada:"Portada",foto:"Foto",frases:"Frases",voces:"Voces",cierre:"Cierre"})[p.t]);
  el.innerHTML=pageBlobs.map((p,i)=>`<figure class="pagecard"><img src="${p.url}" alt="Página ${i+1} del álbum: ${names[i]}" data-zoom="${i}"><figcaption>${i+1}. ${names[i]}<button type="button" data-dlp="${i}">Descargar</button></figcaption></figure>`).join("")+
    (AL.items.length?"":`<div class="empty" style="grid-column:1/-1"><b>Vuestro álbum está esperando</b>Añadid una foto, una frase o una opinión y aparecerá aquí como una página nueva.</div>`);
  el.querySelectorAll("[data-zoom]").forEach(im=>im.onclick=()=>zoom(+im.dataset.zoom));
  el.querySelectorAll("[data-dlp]").forEach(b=>b.onclick=()=>savePage(+b.dataset.dlp));
}
function zoom(i){openModal(`<div class="sheet-body zoom"><img src="${pageBlobs[i].url}" alt="Página ${i+1} del álbum"><p style="margin:0;color:var(--ink-soft);font-size:.9rem">Si la descarga no funciona, mantén pulsada la imagen (o clic derecho) y elige «Guardar imagen».</p><div class="acts"><button class="btn btn-ghost btn-sm" id="zc">Cerrar</button><button class="btn btn-primary btn-sm" data-focus id="zd">Descargar esta página</button></div></div>`);$("#zc").onclick=closeModal;$("#zd").onclick=()=>savePage(i);}
const slug=()=>(AL.titulo||"generaccion").normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/[^a-z0-9]+/gi,"-").replace(/^-|-$/g,"").toLowerCase().slice(0,40)||"generaccion";
async function getDL(){try{return window.claude&&claude.use?await claude.use("downloads"):null;}catch(e){return null;}}
function dlMsg(t,ok){const m=$("#dlMsg");if(!m)return;m.className="msg"+(ok?" ok":" err");m.textContent=t;}
async function save(filename,data){
  const d=await getDL();
  if(!d){
    if(!(window.claude&&claude.use)){try{const u=URL.createObjectURL(data instanceof Blob?data:new Blob([data]));const a=document.createElement("a");a.href=u;a.download=filename;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(u),4000);dlMsg("Listo. Revisa tus descargas.",true);return true;}catch(e){}}
    dlMsg("La descarga directa no está disponible aquí. Abre una página y guárdala con «Guardar imagen».");return false;}
  try{await d.save({filename,data});dlMsg("Listo. Revisa tus descargas.",true);return true;}
  catch(e){if(e&&e.code==="declined")dlMsg("Descarga cancelada.");else if(e&&e.code==="rate_limited")dlMsg("Espera un momento y vuelve a intentarlo.");else dlMsg("No se ha podido descargar. Abre la página y guárdala con «Guardar imagen».");return false;}
}
function savePage(i){if(pageBlobs[i])save(`album-${slug()}-pagina-${i+1}.jpg`,pageBlobs[i].blob);}
async function downloadPDF(){
  if(!pageBlobs.length){clearTimeout(tmr);await renderPages();}
  if(!window.jspdf){dlMsg("No se ha podido preparar el PDF. Descarga las páginas una a una.");return;}
  const btn=$("#memSave");btn.disabled=true;dlMsg("Preparando el PDF…",true);
  try{
    const doc=new jspdf.jsPDF({unit:"px",format:[PW,PHh],orientation:"portrait",hotfixes:["px_scaling"],compress:true});
    for(let i=0;i<pageBlobs.length;i++){if(i)doc.addPage([PW,PHh],"portrait");const u8=new Uint8Array(await pageBlobs[i].blob.arrayBuffer());doc.addImage(u8,"JPEG",0,0,PW,PHh);}
    await save(`album-${slug()}.pdf`,doc.output("blob"));
  }catch(e){dlMsg("No se ha podido preparar el PDF. Descarga las páginas una a una.");}
  btn.disabled=false;
}

/* ---- Imágenes para redes: una página o todas (ZIP) ---- */
async function openShareMoment(){
  if(!pageBlobs.length){clearTimeout(tmr);await renderPages();}
  const names=buildPages().map(p=>({portada:"Portada",foto:"Foto",frases:"Frases",voces:"Voces",cierre:"Cierre"})[p.t]);
  let sel=pageBlobs.length>1?1:0;
  openModal(`<div class="sheet-top t-ahora"><img src="img/i/8.webp" alt=""><div><span class="k">Imágenes para redes sociales</span><h3 id="mTitle">Elegid la imagen que queréis compartir</h3></div></div>
   <div class="sheet-body"><div class="shgrid">${pageBlobs.map((p,i)=>`<button type="button" data-pick="${i}" aria-pressed="${i===sel}" aria-label="Página ${i+1}: ${names[i]||""}"><img src="${p.url}" alt=""></button>`).join("")}</div>
   <div class="tagline-copy"><span>${HASHTAG}</span><button type="button" class="btn btn-soft btn-sm" id="cpTag">Copiar etiqueta</button></div>
   <p style="margin:0;font-size:.92rem;color:var(--ink-soft)">Formato vertical (1080 × 1350), el que mejor se ve en Instagram, Facebook o WhatsApp. Antes de publicar una foto en vuestras redes, pedid permiso a las personas que salen, y a sus padres, madres o tutores si son menores.</p>
   <p class="msg" id="shMsg" aria-live="polite"></p>
   <div class="acts"><button type="button" class="btn btn-ghost btn-sm" id="shClose">Cerrar</button>${window.JSZip?`<button type="button" class="btn btn-soft btn-sm" id="shZip">Descargar todas (ZIP)</button>`:""}<button type="button" class="btn btn-primary btn-sm" data-focus id="shDl">Descargar esta imagen</button></div></div>`,"t-ahora");
  sheet.querySelectorAll("[data-pick]").forEach(b=>b.onclick=()=>{sel=+b.dataset.pick;sheet.querySelectorAll("[data-pick]").forEach(x=>x.setAttribute("aria-pressed",x===b?"true":"false"));});
  $("#shClose").onclick=closeModal;
  const say=(ok,t)=>{const m=$("#shMsg");if(m){m.className="msg"+(ok?" ok":" err");m.textContent=t;}};
  $("#cpTag").onclick=async e=>{try{await navigator.clipboard.writeText(HASHTAG);e.target.textContent="Copiada";}catch(err){e.target.textContent="Selecciona y copia";}};
  $("#shDl").onclick=async()=>{const ok=await save(`generaccion-${slug()}-${sel+1}.jpg`,pageBlobs[sel].blob);say(ok,ok?"Imagen descargada. ¡Ya podéis compartirla!":($("#dlMsg").textContent||"No se ha podido descargar."));};
  const z=$("#shZip");if(z)z.onclick=async()=>{z.disabled=true;say(true,"Preparando las imágenes…");try{const zip=new JSZip();pageBlobs.forEach((p,i)=>zip.file(`generaccion-${slug()}-${String(i+1).padStart(2,"0")}.jpg`,p.blob));const blob=await zip.generateAsync({type:"blob"});const ok=await save(`generaccion-${slug()}-imagenes.zip`,blob);say(ok,ok?"Imágenes descargadas.":($("#dlMsg").textContent||"No se ha podido descargar."));}catch(e){say(false,"No se han podido preparar las imágenes.");}z.disabled=false;};
}
function confirmClear(){
  openModal(`<div class="sheet-top t-hasta"><img src="img/i/26.webp" alt=""><div><span class="k">Álbum</span><h3 id="mTitle">¿Empezar un álbum nuevo?</h3></div></div><div class="sheet-body"><p style="margin:0">Se borrarán de este dispositivo todas las fotos, frases y opiniones del álbum actual. Si queréis conservarlo, descargadlo antes. Las fotos enviadas al álbum compartido no se borran.</p><div class="acts"><button class="btn btn-ghost btn-sm" data-focus id="cNo">Cancelar</button><button class="btn btn-primary btn-sm" id="cYes">Sí, empezar de cero</button></div></div>`,"t-hasta");
  $("#cNo").onclick=closeModal;
  $("#cYes").onclick=async()=>{for(const it of AL.items){await STORE.del("img:"+it.id);const p=PH.get(it.id);if(p)URL.revokeObjectURL(p.url);PH.delete(it.id);}
    await STORE.del("img:grupo");PH.delete("grupo");Object.assign(AL,{titulo:"",tipo:"",lugar:"",grupo:false,items:[]});showG();await saveAL();$("#aTitulo").value="";$("#aLugar").value="";document.querySelectorAll("#aTipo input").forEach(i=>i.checked=false);closeModal();renderItems();schedule(true);dlMsg("");};
}
function modalForm(kind,pre,back){
  const s=SQ[(pre.casilla||1)-1];
  openModal(sheetTop(s,kind==="foto"?"Álbum · añadir foto":"Álbum · guardar frase")+`<div class="sheet-body" id="mForm"></div>`,LINES[s.line].cls,true);
  albumInit();renderForm($("#mForm"),kind,pre,back);
}

/* ================= ÁLBUM COMPARTIDO Y AUTORIZACIONES (texto del DPD de Macrosad) ================= */
const DPD={entidad:"OGARA S.C.A.",correo:"dpd@macrosad.com",privacidad:"https://macrosad.com/aviso-legal-y-politica-de-privacidad/",version:"Consentimiento imágenes juego digital · DPD Macrosad · 28/10/2026"};
const AUT1=`AUTORIZO a ${DPD.entidad} a publicar las fotografías en las que aparezca mi imagen en el álbum digital compartido del juego, accesible públicamente a través de internet, durante un plazo máximo de 24 meses desde su publicación.`;
const AUT2=`AUTORIZO a ${DPD.entidad} a utilizar las fotografías en las que aparezca mi imagen en su página web, perfiles corporativos de redes sociales, memorias de actividades, publicaciones, materiales informativos, proyectos, campañas de sensibilización, presentaciones y eventos institucionales relacionados con sus fines y actividades, durante un plazo máximo de 24 meses desde su primera publicación para esta finalidad.`;
function consentInfoHTML(){return `<details class="cinfo"><summary>Leer toda la información sobre el uso de las imágenes</summary>
  <p><b>Organización:</b> ${DPD.entidad} · ${DPD.correo}</p>
  <p>Con motivo de la participación en el juego digital organizado por ${DPD.entidad}, las personas participantes podrán compartir voluntariamente fotografías realizadas durante el desarrollo de las partidas. Las fotografías podrán publicarse en un álbum digital compartido y, cuando exista autorización específica, utilizarse en las actividades de comunicación y divulgación de la organización. El acceso al álbum fotográfico será público mediante un enlace disponible en la página web, redes sociales u otros canales de la entidad. La participación en el juego no está condicionada a la autorización para publicar o utilizar imágenes.</p>
  <p><b>Condiciones.</b> La organización se compromete a utilizar las fotografías exclusivamente para las finalidades autorizadas, respetando la dignidad, intimidad y derecho a la propia imagen de las personas participantes. Las fotografías publicadas en internet podrán ser visualizadas, descargadas o compartidas por terceras personas, sin que la organización pueda garantizar el control sobre su posterior utilización. Se puede retirar cualquiera de los consentimientos en cualquier momento, sin que ello afecte a la licitud de los tratamientos anteriores. En caso de retirada, la organización retirará las imágenes de los canales bajo su control, sin perjuicio de las limitaciones para eliminar copias obtenidas por terceros.</p>
  <ul style="padding-left:1.1em">
   <li><b>Responsable:</b> ${DPD.entidad}.</li>
   <li><b>Finalidades:</b> publicación de imágenes en el álbum compartido del juego y, cuando exista consentimiento específico, utilización en actividades de comunicación y divulgación institucional.</li>
   <li><b>Legitimación:</b> consentimiento de la persona interesada (art. 6.1.a RGPD) y autorización para la utilización de la propia imagen (Ley Orgánica 1/1982).</li>
   <li><b>Destinatarios:</b> público que acceda a los canales autorizados y proveedores tecnológicos que intervengan en su gestión. Las plataformas de redes sociales podrán realizar sus propios tratamientos.</li>
   <li><b>Transferencias internacionales:</b> las que aplican a los proveedores extranjeros de redes sociales.</li>
   <li><b>Conservación:</b> durante los plazos de las autorizaciones, salvo retirada del consentimiento u otra causa. Las evidencias de consentimiento se conservarán durante el plazo necesario para acreditar el cumplimiento de las obligaciones legales.</li>
   <li><b>Derechos:</b> acceso, rectificación, supresión, limitación y demás derechos, así como retirar el consentimiento, escribiendo a ${DPD.correo}. Reclamaciones ante la AEPD (www.aepd.es).</li>
   <li><b>Información adicional:</b> <a href="${DPD.privacidad}" target="_blank" rel="noopener">política de privacidad</a>.</li>
  </ul></details>`;}
const PUB={mode:null,started:false,db:null,assets:null,user:null,me:"",editor:false,published:[],reqs:[],seq:0,people:[],
  async init(){
    if(this.started)return;this.started=true;
    if(window.claude&&claude.use){try{
      const [db,assets,user]=await Promise.all([claude.use("db"),claude.use("assets"),claude.use("user")]);
      Object.assign(this,{db,assets,user});
      if(user){try{this.me=(await user.me()).id||"";}catch(e){}try{this.editor=await user.canEdit();}catch(e){}}
      if(db){this.mode="claude";
        db.collection("album").limit(500).onSnapshot(s=>{this.published=s.docs.map(d=>Object.assign({id:d.id},d.data())).sort((a,b)=>(b.publicada||0)-(a.publicada||0));this.renderWall();},()=>{});
        if(this.me)db.doc("solicitudes/"+this.me).onSnapshot(d=>{const o=(d&&d.exists&&d.data())||{};let ch=false;AL.items.forEach(it=>{if(it.pub&&it.pub.key&&o[it.pub.key]&&o[it.pub.key].estado!==it.pub.estado){it.pub.estado=o[it.pub.key].estado;ch=true;}});if(ch){saveAL();renderItems();}},()=>{});
        if(this.editor){$("#recvBtn").hidden=false;$("#recvBtn").onclick=()=>this.openReview();
          db.collection("solicitudes").limit(500).onSnapshot(s=>{this.reqs=[];s.docs.forEach(d=>{const o=d.data()||{};Object.keys(o).forEach(k=>{if(k.startsWith("s_")&&o[k]&&typeof o[k]==="object")this.reqs.push(Object.assign({},o[k],{doc:d.id,key:k,rid:d.id+"|"+k}));});});this.reqs.sort((a,b)=>(b.creado||0)-(a.creado||0));const n=this.reqs.filter(r=>r.estado==="pendiente").length;$("#recvBtn").textContent=`Revisión de fotos${n?` (${n} pendientes)`:""}`;},()=>{});}
      }}catch(e){}}
    else if(window.GENERACCION_API){this.mode="api";this.loadApi();}
    this.renderWall();
  },
  async loadApi(){try{const r=await fetch(window.GENERACCION_API+"/album");if(r.ok){this.published=await r.json();this.renderWall();}}catch(e){}},
  imgSrc(p){return this.mode==="claude"?"/_blob/"+p.asset:(p.url||"");},
  renderWall(){
    const el=$("#pubGrid");if(!el)return;
    if(!this.mode){el.innerHTML=`<div class="empty" style="grid-column:1/-1"><b>El álbum compartido se activará en la web de Macrosad</b>Cuando esté activo, aquí veréis las fotos publicadas. Mientras tanto, vuestras fotos se guardan en vuestro álbum.</div>`;return;}
    if(!this.published.length){el.innerHTML=`<div class="empty" style="grid-column:1/-1"><b>Todavía no hay fotos publicadas</b>Las fotos aparecen aquí cuando todas las personas que salen las han autorizado y Macrosad las ha revisado.</div>`;return;}
    el.innerHTML=this.published.map((p,i)=>`<figure class="polaroid" style="--r:${[-1.5,1,-.5,1.5][i%4]}deg"><img src="${esc(this.imgSrc(p))}" alt="${esc(p.pie||"Foto de una partida de GenerAcción")}" loading="lazy"><figcaption>${esc(p.pie||"Un momento de GenerAcción")}</figcaption><div class="m">${esc(TIPOS[p.tipo]||"")}${p.publicada?" · "+new Date(p.publicada).toLocaleDateString("es-ES",{month:"long",year:"numeric"}):""} · ${esc(p.codigo||"")}</div></figure>`).join("");
  },
  /* formulario de autorización de una foto */
  async openConsent(itemId,back){
    const it=AL.items.find(i=>i.id===itemId);if(!it)return;const p=await photo(it.id);
    this.people=[];this.seq=0;
    const avail=!!this.mode;
    openModal(`<div class="sheet-top t-ahora"><img src="${p?p.url:"img/i/8.webp"}" alt="" style="object-fit:cover"><div><span class="k">Álbum compartido</span><h3 id="mTitle">Autorización para publicar esta foto</h3></div></div>
     <div class="sheet-body">
      ${avail?"":`<div class="notice" style="margin:0">El álbum compartido todavía no está activo en esta versión. Podéis rellenar las autorizaciones, pero la foto no se enviará: se queda en vuestro álbum.</div>`}
      <p style="margin:0;font-size:.95rem">El álbum compartido es <b>accesible públicamente</b> por internet. Necesitamos la autorización de <b>cada persona que se reconozca</b> en la foto, no solo de quien la sube. Si alguien no la autoriza, la foto no se publica y podéis seguir jugando igual.</p>
      ${consentInfoHTML()}
      <label class="nobody"><input type="checkbox" id="cNobody"><span>En esta foto <b>no se reconoce a ninguna persona</b> (por ejemplo, solo se ven manos, el tablero o las cartas).</span></label>
      <div id="cPeople" class="people"></div>
      <button type="button" class="btn btn-soft btn-sm" id="cAdd" style="align-self:flex-start">+ Añadir otra persona que aparece</button>
      <label class="check"><input type="checkbox" id="cAll"><span>Declaro que <b>todas las personas reconocibles</b> en la foto están en esta lista y han recibido la información sobre el uso de su imagen.</span></label>
      <p class="msg" id="cMsg" aria-live="polite"></p>
      <div class="acts"><button type="button" class="btn btn-ghost btn-sm" id="cCancel">${back?"Volver a la carta":"No publicar"}</button><button type="button" class="btn btn-primary" id="cSend">Enviar a revisión</button></div>
     </div>`,"t-ahora",true);
    $("#cAdd").onclick=()=>this.addPerson();this.addPerson();
    $("#cNobody").onchange=e=>{$("#cPeople").hidden=e.target.checked;$("#cAdd").hidden=e.target.checked;};
    $("#cCancel").onclick=()=>{if(back)back();else closeModal();};
    $("#cSend").onclick=()=>this.submit(it,back);
  },
  addPerson(){
    const id="p"+(++this.seq),w=document.createElement("div");w.className="person";w.dataset.pid=id;
    w.innerHTML=`<label class="field"><span>Nombre y apellidos de la persona que aparece</span><input type="text" class="pNom" maxlength="80"></label>
     <label class="check"><input type="checkbox" class="pRep"><span>Es <b>menor de edad</b> o necesita que firme su <b>representante legal</b></span></label>
     <div class="prow rep" hidden><label class="field"><span>Nombre y apellidos de quien firma</span><input type="text" class="pFNom" maxlength="80"></label><label class="field"><span>Relación</span><input type="text" class="pRel" maxlength="40" placeholder="Madre, padre, tutor/a, representante…"></label></div>
     <div class="auth">
      <label class="check"><input type="checkbox" class="pA1"><span><b>Autorización 1 · Álbum compartido.</b> ${esc(AUT1)}</span></label>
      <label class="check"><input type="checkbox" class="pA2"><span><b>Autorización 2 · Comunicación y divulgación.</b> ${esc(AUT2)} <small class="opt">independiente de la anterior</small></span></label>
     </div>
     <div class="field"><span>Firma <small>(de la persona o de su representante)</small></span><canvas class="sig" width="600" height="160" aria-label="Recuadro para firmar"></canvas><div class="acts" style="justify-content:space-between"><small class="sm">He recibido la información y autorizo solo lo marcado.</small><button type="button" class="btn btn-ghost btn-sm pClr">Borrar firma</button></div></div>
     ${this.seq>1?`<button type="button" class="pDel" aria-label="Quitar persona">Quitar</button>`:""}`;
    $("#cPeople").appendChild(w);
    const P={id,el:w,signed:false};this.people.push(P);
    w.querySelector(".pRep").onchange=e=>{w.querySelector(".rep").hidden=!e.target.checked;};
    const del=w.querySelector(".pDel");if(del)del.onclick=()=>{this.people=this.people.filter(x=>x.id!==id);w.remove();};
    const c=w.querySelector(".sig"),x=c.getContext("2d");x.lineWidth=3;x.lineCap="round";x.strokeStyle="#3b2139";
    let down=false;const pos=e=>{const r=c.getBoundingClientRect();return[(e.clientX-r.left)*c.width/r.width,(e.clientY-r.top)*c.height/r.height];};
    c.addEventListener("pointerdown",e=>{down=true;try{c.setPointerCapture(e.pointerId);}catch(err){}const[a,b]=pos(e);x.beginPath();x.moveTo(a,b);});
    c.addEventListener("pointermove",e=>{if(!down)return;const[a,b]=pos(e);x.lineTo(a,b);x.stroke();P.signed=true;});
    c.addEventListener("pointerup",()=>{down=false;});c.addEventListener("pointercancel",()=>{down=false;});
    w.querySelector(".pClr").onclick=()=>{x.clearRect(0,0,c.width,c.height);P.signed=false;};
  },
  read(){return this.people.map(P=>{const w=P.el,rep=w.querySelector(".pRep").checked;return{nombre:w.querySelector(".pNom").value.trim(),rep,firmante:rep?w.querySelector(".pFNom").value.trim():"",relacion:rep?w.querySelector(".pRel").value.trim():"",a1:w.querySelector(".pA1").checked,a2:w.querySelector(".pA2").checked,signed:P.signed,sig:w.querySelector(".sig")};});},
  pdf(code,people,it){
    const doc=new jspdf.jsPDF({unit:"mm",format:"a4"}),W=210,M=18;let y=20;
    const line=(t,s=10,b=false,col=[59,33,57])=>{doc.setFont("helvetica",b?"bold":"normal");doc.setFontSize(s);doc.setTextColor(...col);doc.splitTextToSize(t,W-2*M).forEach(l=>{if(y>282){doc.addPage();y=20;}doc.text(l,M,y);y+=s*0.45;});y+=1.5;};
    line("Consentimiento para la publicación y utilización de imágenes del juego digital",13,true,[107,42,94]);
    line(`Código: ${code} · Fecha: ${new Date().toLocaleString("es-ES")} · ${DPD.version}`,8.5,false,[106,85,102]);
    line(`Organización: ${DPD.entidad} · ${DPD.correo}`,9.5);
    line(`Foto: «${it.texto||"sin pie"}»${AL.titulo?" · Álbum: "+AL.titulo:""}${AL.tipo?" · "+TIPOS[AL.tipo]:""}`,9.5);
    y+=1;line("Autorizaciones (independientes entre sí)",11,true,[107,42,94]);
    line("Autorización 1 · Álbum compartido: "+AUT1,8.5);line("Autorización 2 · Comunicación y divulgación: "+AUT2,8.5);
    y+=1;line("Personas que aparecen en la fotografía",11,true,[107,42,94]);
    if(!people.length)line("Se declara que en la fotografía no se reconoce a ninguna persona.",9.5);
    people.forEach((p,i)=>{if(y>240){doc.addPage();y=20;}
      line(`${i+1}. ${p.nombre}`,10,true);
      line(`Firma: ${p.rep?`${p.firmante} (${p.relacion||"representante"})`:"la propia persona"} · Autorización 1: ${p.a1?"SÍ":"NO"} · Autorización 2: ${p.a2?"SÍ":"NO"}`,9);
      try{doc.addImage(p.sig.toDataURL("image/png"),"PNG",M,y,56,15);}catch(e){}
      doc.setDrawColor(200,190,200);doc.line(M,y+15.5,M+56,y+15.5);y+=21;});
    y+=2;line("Declaración: he recibido información suficiente sobre la utilización de mi imagen, el carácter público de su posible difusión, las finalidades autorizadas y la posibilidad de retirar mi consentimiento. Las autorizaciones quedan limitadas a las finalidades seleccionadas.",8.5,false,[106,85,102]);
    line(`Derechos y retirada: ${DPD.correo} · Más información: ${DPD.privacidad}`,8.5,false,[106,85,102]);
    return doc.output("blob");
  },
  async submit(it,back){
    const msg=$("#cMsg"),btn=$("#cSend");msg.className="msg err";
    const nobody=$("#cNobody").checked,people=nobody?[]:this.read();
    if(!nobody){
      if(!people.length){msg.textContent="Añadid a las personas que se reconocen en la foto.";return;}
      for(const [i,p] of people.entries()){const n=`Persona ${i+1}`;
        if(p.nombre.length<3){msg.textContent=`${n}: falta el nombre y apellidos.`;return;}
        if(p.rep&&p.firmante.length<3){msg.textContent=`${n}: falta el nombre de quien firma.`;return;}
        if(!p.signed){msg.textContent=`${n}: falta la firma.`;return;}}
    }
    if(!$("#cAll").checked){msg.textContent="Confirmad que todas las personas reconocibles están en la lista.";return;}
    const allA1=nobody||people.every(p=>p.a1),allA2=nobody||people.every(p=>p.a2);
    if(!allA1){it.pub={estado:"sin-autorizacion"};await saveAL();renderItems();
      msg.textContent="Alguna persona no ha dado la Autorización 1, así que esta foto no se publicará. Se queda en vuestro álbum y podéis seguir jugando.";
      btn.textContent=back?"Volver a la carta":"Entendido";btn.onclick=()=>{if(back)back();else closeModal();};return;}
    if(!this.mode){msg.textContent="El álbum compartido todavía no está activo en esta versión. La foto se queda en vuestro álbum.";return;}
    if(!window.jspdf){msg.textContent="No se ha podido preparar el documento de autorización. Recarga la página e inténtalo de nuevo.";return;}
    btn.disabled=true;msg.className="msg ok";msg.textContent="Enviando la foto y las autorizaciones…";
    try{
      const code="GA-"+new Date().toISOString().slice(0,10).replace(/-/g,"")+"-"+Math.random().toString(36).slice(2,6).toUpperCase();
      const pdf=this.pdf(code,people,it);const ph=await photo(it.id);
      const rec={codigo:code,pie:it.texto||"",tipo:AL.tipo||"",lugar:AL.lugar||"",album:AL.titulo||"",personas:people.map(p=>({nombre:p.nombre,representante:p.rep?`${p.firmante} (${p.relacion||"representante"})`:"",a1:p.a1,a2:p.a2})),sinPersonas:nobody,aptaAlbum:allA1,aptaComunicacion:allA2,version:DPD.version,creado:Date.now(),estado:"pendiente"};
      if(this.mode==="claude"){
        const up=await this.assets.upload(ph.blob,{type:"image/jpeg"}),cu=await this.assets.upload(pdf,{type:"application/pdf"});
        rec.asset=up.id;rec.consentimiento=cu.id;rec.autor=this.me;
        const ref=this.db.doc("solicitudes/"+this.me),key="s_"+rec.creado;
        try{await ref.update({[key]:rec});}catch(e){await ref.set({[key]:rec});}
        it.pub={estado:"pendiente",codigo:code,key};
      }else{
        const fd=new FormData();fd.append("foto",ph.blob,code+".jpg");fd.append("consentimiento",pdf,code+".pdf");fd.append("datos",JSON.stringify(rec));
        const r=await fetch(window.GENERACCION_API+"/solicitudes",{method:"POST",body:fd});if(!r.ok)throw new Error("api");
        it.pub={estado:"pendiente",codigo:code};
      }
      await saveAL();renderItems();this.lastPdf=pdf;
      msg.innerHTML=`¡Enviada! Código <b>${code}</b>. Macrosad la revisará antes de publicarla.`;
      btn.disabled=false;btn.textContent="Descargar copia de la autorización";btn.onclick=()=>save(`autorizacion-${code}.pdf`,this.lastPdf);
      $("#cCancel").textContent=back?"Volver a la carta":"Cerrar";
    }catch(e){btn.disabled=false;msg.className="msg err";msg.textContent="No se ha podido enviar. Comprobad la conexión y volved a intentarlo.";}
  },
  /* panel de revisión (solo personas con permiso de edición) */
  openReview(){
    const L=this.reqs,tag=(ok,t)=>`<span class="${ok?"":"no"}">${t}</span>`;
    openModal(`<div class="sheet-top t-desde"><img src="img/i/24.webp" alt=""><div><span class="k">Solo para el equipo de Macrosad</span><h3 id="mTitle">Revisión de fotos</h3></div></div>
     <div class="sheet-body"><p style="margin:0;font-size:.9rem;color:var(--ink-soft)">Antes de publicar, comprueba la foto y el documento de autorización. Para usar una foto en comunicación institucional, todas las personas deben tener la Autorización 2.</p>
     ${L.length?`<div class="recv">${L.map(r=>`<article><img src="/_blob/${esc(r.asset||"")}" alt=""><div style="min-width:0;flex:1"><b>${esc(r.pie||"Sin pie")}</b> <span class="m">${esc(r.codigo||"")}</span>
       <div class="m">${esc([TIPOS[r.tipo],r.lugar,r.album].filter(Boolean).join(" · "))} · ${new Date(r.creado).toLocaleDateString("es-ES")}</div>
       <div class="m">${r.sinPersonas?"Sin personas reconocibles":esc((r.personas||[]).map(p=>`${p.nombre}${p.representante?" (firma "+p.representante+")":""}: A1 ${p.a1?"sí":"no"} · A2 ${p.a2?"sí":"no"}`).join(" | "))}</div>
       <div class="tags">${tag(r.aptaAlbum,r.aptaAlbum?"Apta para el álbum":"Sin autorización para el álbum")}${tag(r.aptaComunicacion,r.aptaComunicacion?"Apta para comunicación":"No usar en comunicación")}${tag(r.estado==="publicada",{pendiente:"Pendiente",publicada:"Publicada",rechazada:"Rechazada",retirada:"Retirada"}[r.estado]||r.estado)}</div>
       <div class="acts" style="justify-content:flex-start;margin-top:8px"><a class="btn btn-ghost btn-sm" href="/_blob/${esc(r.consentimiento||"")}" target="_blank" rel="noopener">Ver autorización</a>${r.estado!=="publicada"&&r.aptaAlbum?`<button type="button" class="btn btn-primary btn-sm" data-act="publicar" data-r="${r.rid}">Publicar</button>`:""}${r.estado==="pendiente"?`<button type="button" class="btn btn-ghost btn-sm" data-act="rechazar" data-r="${r.rid}">Rechazar</button>`:""}${r.estado==="publicada"?`<button type="button" class="btn btn-ghost btn-sm" data-act="retirar" data-r="${r.rid}">Retirar</button>`:""}</div></div></article>`).join("")}</div>`:`<div class="empty"><b>No hay fotos para revisar</b>Cuando alguien envíe una foto con sus autorizaciones, aparecerá aquí.</div>`}
     <div class="acts"><button type="button" class="btn btn-primary btn-sm" data-focus id="rvClose">Cerrar</button></div></div>`,"t-desde");
    $("#rvClose").onclick=closeModal;
    sheet.querySelectorAll("[data-act]").forEach(b=>b.onclick=async()=>{b.disabled=true;const r=L.find(x=>x.rid===b.dataset.r),act=b.dataset.act;
      const estado={publicar:"publicada",rechazar:"rechazada",retirar:"retirada"}[act];
      const {doc,key,rid,...rest}=r;
      try{
        await this.db.doc("solicitudes/"+doc).update({[key]:Object.assign(rest,{estado,revisado:Date.now()})});
        if(act==="publicar")await this.db.doc("album/"+r.codigo).set({asset:r.asset,pie:r.pie,tipo:r.tipo,codigo:r.codigo,publicada:Date.now(),aptaComunicacion:!!r.aptaComunicacion});
        if(act==="retirar")await this.db.doc("album/"+r.codigo).delete();
      }catch(e){}
      setTimeout(()=>this.openReview(),300);});
  }
};

/* ================= CONDICIONES DE PARTICIPACIÓN (antes de jugar) ================= */
const COND_KEY="ga-condiciones-v1";
const condOk=()=>{try{return !!localStorage.getItem(COND_KEY);}catch(e){return !!window.__condOk;}};
function openConditions(then){
  openModal(`<div class="sheet-top t-mag"><img src="img/logo.webp" alt=""><div><span class="k">Antes de empezar</span><h3 id="mTitle">Información y condiciones de participación</h3></div></div>
   <div class="sheet-body cond">
    <p>Antes de comenzar, te informamos de que los datos personales que, en su caso, facilites durante tu participación en el juego serán tratados por <b>${DPD.entidad}</b> para gestionar su funcionamiento.</p>
    <p>El juego permite subir voluntariamente fotografías a un álbum compartido, accesible a cualquier persona que disponga del enlace. La publicación de imágenes es opcional y requiere autorización específica de las personas que aparezcan en ellas.</p>
    <p>Puedes consultar información adicional sobre el tratamiento de tus datos y el ejercicio de tus derechos en nuestra <a href="${DPD.privacidad}" target="_blank" rel="noopener">Política de privacidad</a>.</p>
    ${then?`<label class="check"><input type="checkbox" id="condChk"><span>He leído y acepto las condiciones de participación en el juego.</span></label>
    <div class="acts"><button type="button" class="btn btn-ghost btn-sm" id="condNo">Ahora no</button><button type="button" class="btn btn-primary" id="condGo" disabled>Empezar a jugar</button></div>`:`<div class="acts"><button type="button" class="btn btn-primary btn-sm" data-focus id="condNo">Cerrar</button></div>`}
   </div>`,"t-mag",!!then);
  $("#condNo").onclick=closeModal;
  if(then){$("#condChk").onchange=e=>{$("#condGo").disabled=!e.target.checked;};
    $("#condGo").onclick=()=>{try{localStorage.setItem(COND_KEY,new Date().toISOString());}catch(e){window.__condOk=true;}closeModal();then();};}
}

/* ================= ÁREA PROFESIONAL ================= */
(function initPro(){
  document.querySelectorAll(".pro-toc [data-sec]").forEach(b=>b.onclick=()=>{const t=document.getElementById(b.dataset.sec);if(t)t.scrollIntoView({behavior:REDUCE?"auto":"smooth",block:"start"});document.querySelectorAll(".pro-toc button").forEach(x=>x.classList.toggle("on",x===b));});
  document.querySelectorAll("[data-sec-link]").forEach(a=>a.onclick=e=>{e.preventDefault();const t=document.getElementById(a.dataset.secLink);if(t)t.scrollIntoView({behavior:REDUCE?"auto":"smooth",block:"start"});});
  const pp=$("#proPrint");if(pp&&!(window.claude&&window.claude.use)){pp.hidden=false;pp.onclick=()=>window.print();}
})();

/* ================= RECUPERAR PARTIDA ================= */
function hideResume(){const r=$("#resume");if(r)r.remove();}
function showResume(){
  if(!RESUMED||$("#resume"))return;
  const panel=$(".panel");if(!panel)return;
  const d=document.createElement("div");d.className="resume";d.id="resume";
  d.innerHTML=`<b>Hemos recuperado vuestra partida</b><span>Guardada el ${new Date(RESUMED).toLocaleString("es-ES",{day:"numeric",month:"long",hour:"2-digit",minute:"2-digit"})}. Las fichas están donde las dejasteis.</span><div class="acts"><button type="button" class="btn btn-primary btn-sm" id="resGo">Seguir jugando</button><button type="button" class="btn btn-ghost btn-sm" id="resNew">Empezar una nueva</button></div>`;
  panel.prepend(d);
  $("#resGo").onclick=()=>{hideResume();if(S.cur&&window.CARTAS){S.busy=true;$("#rollBtn").disabled=true;openCard();}};
  $("#resNew").onclick=()=>{hideResume();restart();};
}
$("#condLink")&&($("#condLink").onclick=()=>openConditions(null));

/* ================= ARRANQUE ================= */
function boot(){renderGame();if(RESUMED)showResume();const h=(location.hash||"").slice(1);go(VIEWS.includes(h)?h:"inicio");}
hot&&hot.ready?hot.ready(boot):boot();
