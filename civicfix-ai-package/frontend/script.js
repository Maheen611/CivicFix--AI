(function(){
"use strict";

/* ============================ ICONS ============================ */
function icon(name, cls){
  var p = {
    camera:'<rect x="3" y="7" width="18" height="13" rx="2.5"/><circle cx="12" cy="13.5" r="3.4"/><path d="M8 7l1.3-2.2h5.4L16 7"/>',
    upload:'<path d="M12 16V4M12 4 7 9M12 4l5 5"/><path d="M4 16v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3"/>',
    pin:'<path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21Z"/><circle cx="12" cy="9.3" r="2.4"/>',
    building:'<path d="M4 21V9l6-4 6 4v12"/><path d="M14 21V13h4v8"/><line x1="8" y1="12" x2="8" y2="12.01"/><line x1="8" y1="16" x2="8" y2="16.01"/>',
    doc:'<path d="M6 3h9l4 4v14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z"/><path d="M14 3v5h5"/><path d="M8.5 13h7M8.5 16.5h7"/>',
    check:'<circle cx="12" cy="12" r="9"/><path d="m8.5 12.5 2.3 2.3 4.7-5.1"/>',
    list:'<path d="M9 6h11M9 12h11M9 18h11"/><circle cx="4.5" cy="6" r="1.2" fill="currentColor" stroke="none"/><circle cx="4.5" cy="12" r="1.2" fill="currentColor" stroke="none"/><circle cx="4.5" cy="18" r="1.2" fill="currentColor" stroke="none"/>',
    chart:'<path d="M4 20V10M11 20V4M18 20v-7"/><path d="M2 20h20"/>',
    user:'<circle cx="12" cy="8" r="4"/><path d="M4 21c1.5-4.5 5-6 8-6s6.5 1.5 8 6"/>',
    shield:'<path d="M12 3 5 6v5c0 5 3 8.5 7 10 4-1.5 7-5 7-10V6l-7-3Z"/><path d="m9.5 12 1.8 1.8L15 10"/>',
    send:'<path d="m4 11 16-7-6.5 16-2.7-6.8L4 11Z"/>',
    clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/>',
    alert:'<path d="M12 3 2 20h20L12 3Z"/><path d="M12 10v4"/><circle cx="12" cy="17" r=".2" fill="currentColor"/>',
    x:'<path d="M6 6l12 12M18 6 6 18"/>',
    chevRight:'<path d="m9 6 6 6-6 6"/>',
    edit:'<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5Z"/>',
    trash:'<path d="M4 7h16"/><path d="M9 7V4h6v3"/><path d="M6 7l1 13a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1l1-13"/>',
    phone:'<path d="M6 3h3l1.5 5-2 1.5a13 13 0 0 0 6 6l1.5-2 5 1.5v3a2 2 0 0 1-2 2C11 20 4 13 4 5a2 2 0 0 1 2-2Z"/>',
    mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/>',
    external:'<path d="M14 4h6v6"/><path d="M20 4 10 14"/><path d="M8 5H5a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1v-3"/>',
    image:'<rect x="3" y="4" width="18" height="16" rx="2.5"/><circle cx="8.5" cy="9.5" r="1.6"/><path d="m5 18 5-5 3.5 3.5L18 12l3 3"/>',
    plus:'<path d="M12 5v14M5 12h14"/>',
    search:'<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>',
    sliders:'<path d="M4 6h9M17 6h3M4 18h3M11 18h9"/><circle cx="15" cy="6" r="2.2"/><circle cx="7" cy="18" r="2.2"/>',
    info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v6"/><circle cx="12" cy="7.5" r=".2" fill="currentColor"/>',
    leaf:'<path d="M5 20c8 0 14-6 14-14 0 0-9-1-13 4S4 20 5 20Z"/><path d="M5 20c2-4 5-8 9-11"/>',
    globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.7 4 6 4 9s-1.5 6.3-4 9c-2.5-2.7-4-6-4-9s1.5-6.3 4-9Z"/>',
    droplet:'<path d="M12 3s6 7 6 11.5A6 6 0 0 1 6 14.5C6 10 12 3 12 3Z"/>',
    bulb:'<path d="M9 18h6"/><path d="M10 21h4"/><path d="M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.1 1 1.9v.2h5v-.2c0-.8.4-1.4 1-1.9A6 6 0 0 0 12 3Z"/>',
    trash2:'<path d="M4 7h16"/><path d="M9 7V4h6v3"/><path d="M6 7l1 13a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1l1-13"/>',
    road:'<path d="M8 3 4 21M16 3l4 18M12 3v3M12 10v3M12 17v3"/>',
    logout:'<path d="M9 21H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4"/><path d="M16 17l5-5-5-5"/><path d="M21 12H9"/>',
    filter:'<path d="M4 5h16l-6 8v6l-4-2v-4L4 5Z"/>',
    resend:'<path d="M4 4v6h6"/><path d="M20 20v-6h-6"/><path d="M20 10a8 8 0 0 0-14.6-4.6M4 14a8 8 0 0 0 14.6 4.6"/>',
    copy:'<rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1"/>'
  };
  return '<svg class="icon '+(cls||'')+'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">'+(p[name]||'')+'</svg>';
}
function pinIcon(color){
  return '<svg viewBox="0 0 24 24"><path d="M12 22s7.5-6.7 7.5-12.3A7.5 7.5 0 0 0 4.5 9.7C4.5 15.3 12 22 12 22Z" fill="'+color+'" stroke="#fff" stroke-width="1"/><circle cx="12" cy="9.6" r="2.6" fill="#fff"/></svg>';
}

/* ============================ DATA ============================ */
var CATEGORIES = [
  {id:'pothole', label:'Pothole', color:'red', icon:'road', desc:'Cracked or sunken road surface'},
  {id:'garbage', label:'Garbage / waste overflow', color:'orange', icon:'trash2', desc:'Overflowing bins or dumped waste'},
  {id:'road_damage', label:'Damaged road', color:'red', icon:'road', desc:'Broken pavement, missing slabs, debris'},
  {id:'drainage', label:'Drainage / waterlogging', color:'blue', icon:'droplet', desc:'Blocked drains or standing water'},
  {id:'streetlight', label:'Streetlight failure', color:'orange', icon:'bulb', desc:'Non-functional or damaged street light'},
  {id:'other', label:'Other civic issue', color:'gray', icon:'alert', desc:'Any other public infrastructure issue'}
];
function catById(id){ return CATEGORIES.find(function(c){return c.id===id;}) || CATEGORIES[CATEGORIES.length-1]; }

var CITIES = [
  {id:'hyderabad', label:'Hyderabad', corp:'Greater Hyderabad Municipal Corporation (GHMC)'},
  {id:'bengaluru', label:'Bengaluru', corp:'Brihat Bengaluru Mahanagara Palike (BBMP)'},
  {id:'mumbai', label:'Mumbai', corp:'Municipal Corporation of Greater Mumbai (MCGM)'},
  {id:'delhi', label:'Delhi', corp:'Municipal Corporation of Delhi (MCD)'},
  {id:'chennai', label:'Chennai', corp:'Greater Chennai Corporation (GCC)'},
  {id:'pune', label:'Pune', corp:'Pune Municipal Corporation (PMC)'}
];
function cityById(id){ return CITIES.find(function(c){return c.id===id;}) || CITIES[0]; }

// Only Hyderabad ships a verified real-world reference (cited). Every other city is explicitly mock.
var AUTHORITY_VERIFIED = {
  hyderabad:{
    verified:true,
    helpline:'040-2111-1111',
    app:'MyCURE app (GHMC\u2019s current citizen services app, replacing MyGHMC)',
    system:'Centralised Grievance Redressal System (CGRS)',
    sourceName:'UNI India \u2014 \u201cGHMC launches \u2018MyCURE\u2019 app\u201d',
    sourceUrl:'https://www.uniindia.com/ghmc-launches-mycure-app-to-integrate-civic-services-boost-grievance-redressal/south/news/3746006.html'
  }
};

var SEED_ISSUES = [
  {id:'s1', cat:'pothole', city:'Hyderabad', area:'Kukatpally', status:'In progress', date:'2026-09-02', x:22,y:30, desc:'Large pothole near the main bus stop, growing after rain.'},
  {id:'s2', cat:'garbage', city:'Hyderabad', area:'Ameerpet', status:'Reported', date:'2026-09-10', x:48,y:52, desc:'Garbage bin overflowing for several days near the metro pillar.'},
  {id:'s3', cat:'streetlight', city:'Hyderabad', area:'Miyapur', status:'Resolved', date:'2026-08-21', x:70,y:24, desc:'Streetlight has been dark for two weeks along the service road.'},
  {id:'s4', cat:'drainage', city:'Bengaluru', area:'Koramangala', status:'In progress', date:'2026-09-05', x:34,y:66, desc:'Waterlogging at the junction after every spell of rain.'},
  {id:'s5', cat:'road_damage', city:'Mumbai', area:'Andheri East', status:'Reported', date:'2026-09-14', x:60,y:40, desc:'Broken pavement slabs are a tripping hazard for pedestrians.'},
  {id:'s6', cat:'pothole', city:'Pune', area:'Kothrud', status:'Resolved', date:'2026-08-12', x:15,y:60, desc:'Series of potholes along the arterial road, now resurfaced.'},
  {id:'s7', cat:'garbage', city:'Chennai', area:'T. Nagar', status:'In progress', date:'2026-09-08', x:80,y:70, desc:'Construction debris dumped on the footpath.'},
  {id:'s8', cat:'other', city:'Delhi', area:'Dwarka', status:'Reported', date:'2026-09-16', x:50,y:18, desc:'Damaged public bench and broken park fencing.'}
];

/* ============================ STATE ============================ */
var STORAGE_KEY = 'civicfix_ai_state_v1';
// Base URL of the Python backend (see /backend/app.py). If you run the
// backend somewhere other than your own machine on the default Flask port,
// change this one line.
var API_BASE = 'http://127.0.0.1:5000/api';

function defaultState(){
  return {
    profile:{name:'', email:'', phone:'', city:'hyderabad'},
    consent:{analytics:true},
    complaints:[],
    draft:null
  };
}
var state = loadState();
function loadState(){
  try{
    var raw = localStorage.getItem(STORAGE_KEY);
    if(!raw) return defaultState();
    var parsed = JSON.parse(raw);
    return Object.assign(defaultState(), parsed);
  }catch(e){ return defaultState(); }
}
function saveState(){
  try{ localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }catch(e){ /* storage unavailable */ }
}

function showToast(msg, ic){
  var t = document.getElementById('toast');
  t.innerHTML = (ic?icon(ic):'') + '<span>'+msg+'</span>';
  t.classList.add('show');
  clearTimeout(showToast._t);
  showToast._t = setTimeout(function(){ t.classList.remove('show'); }, 2600);
}
function fmtDate(d){
  var dt = new Date(d);
  if(isNaN(dt)) return d;
  return dt.toLocaleDateString('en-IN',{day:'numeric', month:'short', year:'numeric'});
}
function todayISO(){ return new Date().toISOString().slice(0,10); }
function uid(prefix){ return prefix+'-'+Date.now().toString(36).toUpperCase().slice(-5)+Math.floor(Math.random()*900+100); }

/* ============================ ROUTER ============================ */
var chartRegistry = {};
function destroyCharts(){ Object.keys(chartRegistry).forEach(function(k){ try{chartRegistry[k].destroy();}catch(e){} }); chartRegistry = {}; }

var ROUTES = {
  '/home': pageHome,
  '/how-it-works': pageHowItWorks,
  '/report/capture': pageCapture,
  '/report/analyze': pageAnalyze,
  '/report/location': pageLocation,
  '/report/authority': pageAuthority,
  '/report/generate': pageGenerate,
  '/report/review': pageReview,
  '/complaints': pageComplaints,
  '/explore': pageExplore,
  '/impact': pageImpact,
  '/profile': pageProfile,
  '/responsible-ai': pageResponsible
};

function currentRoute(){
  var h = location.hash.replace(/^#/,'') || '/home';
  if(h === '/report') h = '/report/capture';
  return h;
}

function render(){
  destroyCharts();
  if(window.APP && APP.stopStream) APP.stopStream();
  var route = currentRoute();
  var fn = ROUTES[route] || pageHome;
  var content = document.getElementById('content');
  content.classList.remove('page-enter');
  content.innerHTML = fn();
  void content.offsetWidth;
  content.classList.add('page-enter');
  window.scrollTo({top:0, behavior:'instant' in window ? 'instant':'auto'});
  updateNavActive(route);
  if(route === '/report/analyze') initAnalyze();
  if(route === '/report/authority') initAuthority();
  if(route === '/impact') initCharts();
  if(route === '/explore') initExplore();
}
function updateNavActive(route){
  var base = '/'+route.split('/')[1];
  document.querySelectorAll('[data-route]').forEach(function(el){
    var r = el.getAttribute('data-route');
    el.classList.toggle('active', r === base || (r==='/report' && route.indexOf('/report')===0));
  });
  positionPill('navLinks', 'navPill', '.nav-link');
  positionPill('navBottomEl', 'bottomPill', '.nav-bottom__item');
  var mm = document.getElementById('mobileMenu');
  if(mm) mm.classList.remove('open');
  var mb = document.getElementById('mobileMenuBtn');
  if(mb){ mb.classList.remove('open'); mb.setAttribute('aria-expanded','false'); }
}
function positionPill(containerId, pillId, itemSelector){
  var container = containerId === 'navBottomEl' ? document.querySelector('.nav-bottom') : document.getElementById(containerId);
  var pill = document.getElementById(pillId);
  if(!container || !pill) return;
  var active = container.querySelector(itemSelector + '.active');
  if(!active){ pill.classList.remove('show'); return; }
  var cRect = container.getBoundingClientRect();
  var aRect = active.getBoundingClientRect();
  pill.style.left = (aRect.left - cRect.left) + 'px';
  pill.style.width = aRect.width + 'px';
  pill.classList.add('show');
}
window.addEventListener('resize', function(){ updateNavActive(currentRoute()); });
window.addEventListener('scroll', function(){
  var nav = document.querySelector('.nav-top');
  if(nav) nav.classList.toggle('scrolled', window.scrollY > 8);
}, {passive:true});
window.addEventListener('hashchange', render);
window.addEventListener('DOMContentLoaded', render);

/* ============================ SHARED UI PIECES ============================ */
function wizardProgress(step){
  var steps = ['Capture','Analyze','Location','Authority','Generate','Review'];
  var bars = steps.map(function(s,i){
    var cls = i < step ? 'done' : (i === step ? 'current' : '');
    return '<i class="'+cls+'"></i>';
  }).join('');
  var labels = steps.map(function(s){ return '<span>'+s+'</span>'; }).join('');
  return '<div class="wizard-progress">'+bars+'</div><div class="wizard-labels">'+labels+'</div>';
}
function wizardHead(title, sub, step){
  return '<div class="container wizard-head"><h2 style="font-size:24px">'+title+'</h2>'+
    '<p style="margin-top:6px">'+sub+'</p>'+wizardProgress(step)+'</div>';
}
function backLink(route,label){
  return '<a href="#'+route+'" class="btn btn-ghost btn-sm" style="margin-bottom:6px">'+icon('chevRight',null).replace('viewBox','style="transform:rotate(180deg)" viewBox')+' '+label+'</a>';
}
function guardDraft(fields, redirect){
  if(!state.draft) { location.hash = redirect; return false; }
  for(var i=0;i<fields.length;i++){
    if(state.draft[fields[i]] === undefined || state.draft[fields[i]] === null || state.draft[fields[i]] === ''){
      location.hash = redirect; return false;
    }
  }
  return true;
}

/* ============================ PAGE: HOME ============================ */
function pageHome(){
  var featureCards = [
    {icon:'camera', color:'blue', title:'Capture in seconds', body:'Photograph any civic issue \u2014 pothole, overflowing bin, broken light \u2014 right from your phone.', wide:true},
    {icon:'chart', color:'orange', title:'AI suggests the category', body:'A classifier proposes a category and a draft description. You always review and correct it before anything is sent.'},
    {icon:'pin', color:'green', title:'Pinpoint the location', body:'Select your city, area and an approximate map point so the right ward gets the report.'},
    {icon:'building', color:'blue', title:'Find the right authority', body:'Retrieves the responsible municipal department and its official channels \u2014 verified where possible, clearly marked when it isn\u2019t.'},
    {icon:'send', color:'red', title:'A complaint, ready to send', body:'A formatted, editable complaint with your photo attached \u2014 sent only when you choose to.', wide:true},
    {icon:'list', color:'green', title:'Track it yourself', body:'Save your reference number and follow up \u2014 CivicFix AI never claims a submission succeeded on your behalf.'}
  ];
  var featureHtml = featureCards.map(function(f){
    return '<div class="card '+(f.wide?'wide':'')+'"><div class="feature-icon badge-'+f.color+'">'+icon(f.icon)+'</div><h3>'+f.title+'</h3><p>'+f.body+'</p></div>';
  }).join('');

  return ''+
  '<section class="hero"><div class="hero-bg" aria-hidden="true"><svg viewBox="0 0 1200 420" preserveAspectRatio="xMidYMax slice" xmlns="http://www.w3.org/2000/svg">'+
    '<defs><linearGradient id="heroSky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e7f0ff"/><stop offset="1" stop-color="#ffffff"/></linearGradient></defs>'+
    '<rect width="1200" height="420" fill="url(#heroSky)"/>'+
    '<g fill="#d7e4fb"><rect x="20" y="230" width="60" height="200"/><rect x="95" y="185" width="46" height="240"/><rect x="150" y="250" width="72" height="180"/><rect x="960" y="205" width="55" height="220"/><rect x="1028" y="255" width="70" height="170"/><rect x="1108" y="175" width="52" height="250"/></g>'+
    '<g fill="#c3d5f7" opacity=".75"><rect x="235" y="280" width="50" height="150"/><rect x="905" y="295" width="45" height="130"/><rect x="55" y="195" width="16" height="35"/><rect x="1120" y="200" width="16" height="35"/></g>'+
  '</svg></div><div class="hero-fade" aria-hidden="true"></div>'+
  '<div class="container hero-grid">'+
    '<div>'+
      '<span class="badge badge-green">'+icon('leaf')+' Aligned with UN SDG 11 \u2014 Sustainable Cities</span>'+
      '<h1 style="margin-top:16px">Capture. Report. Improve your city.</h1>'+
      '<p class="lede" style="margin-top:14px">CivicFix AI turns a photo of a pothole, an overflowing bin, or a broken streetlight into a complete, well-formatted complaint for the right municipal authority \u2014 in minutes, not phone calls.</p>'+
      '<div class="hero-actions">'+
        '<a href="#/report/capture" class="btn btn-primary">'+icon('camera')+' Report an issue</a>'+
        '<a href="#/how-it-works" class="btn btn-outline">See how it works</a>'+
      '</div>'+
      '<div class="hero-stats">'+
        '<div><b>6</b><span>issue categories supported</span></div>'+
        '<div><b>6</b><span>cities in this prototype</span></div>'+
        '<div><b>0</b><span>complaints auto-submitted without you</span></div>'+
      '</div>'+
    '</div>'+
    '<div class="phone">'+
      '<div class="phone-screen">'+
        '<div class="phone-photo">'+
          '<svg viewBox="0 0 320 240" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">'+
            '<defs>'+
              '<linearGradient id="phSky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#97a3b3"/><stop offset="1" stop-color="#6b7686"/></linearGradient>'+
              '<linearGradient id="phRoad" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#59626e"/><stop offset="1" stop-color="#282e36"/></linearGradient>'+
              '<radialGradient id="phHole" cx="50%" cy="38%" r="72%"><stop offset="0" stop-color="#04060a"/><stop offset="60%" stop-color="#12161c"/><stop offset="100%" stop-color="#1e242e"/></radialGradient>'+
              '<radialGradient id="phVig" cx="50%" cy="42%" r="78%"><stop offset="55%" stop-color="#000" stop-opacity="0"/><stop offset="100%" stop-color="#000" stop-opacity=".38"/></radialGradient>'+
              '<filter id="phGrain" x="-20%" y="-20%" width="140%" height="140%">'+
                '<feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" seed="7" result="n"/>'+
                '<feColorMatrix in="n" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 .06 0"/>'+
              '</filter>'+
            '</defs>'+
            '<rect width="320" height="240" fill="url(#phSky)"/>'+
            '<g fill="#4a525e" opacity=".65"><rect x="8" y="88" width="24" height="60"/><rect x="40" y="66" width="18" height="82"/><rect x="252" y="78" width="22" height="70"/><rect x="282" y="58" width="20" height="90"/></g>'+
            '<rect y="146" width="320" height="94" fill="url(#phRoad)"/>'+
            '<rect x="150" y="146" width="5" height="94" fill="#e8c04a" opacity=".45"/>'+
            '<path d="M38 179 Q95 149 150 182 T282 171 L282 240 L38 240 Z" fill="url(#phHole)"/>'+
            '<path d="M38 179 Q95 149 150 182 T282 171" fill="none" stroke="#080a0e" stroke-width="2" opacity=".85"/>'+
            '<path d="M70 173 L57 149 M150 176 L166 139 M214 177 L236 154" stroke="#0e1116" stroke-width="1.4" opacity=".65" fill="none"/>'+
            '<rect width="320" height="240" fill="url(#phVig)"/>'+
            '<rect width="320" height="240" filter="url(#phGrain)"/>'+
          '</svg>'+
          '<div class="phone-tag">'+icon('alert')+' Pothole \u2022 92% confidence</div>'+
        '</div>'+
      '</div>'+
      '<div class="phone-body">'+
        '<div class="phone-row"><span style="font-size:12.5px;color:var(--ink-soft);font-weight:600">Authority</span><span class="badge badge-blue" style="font-size:11px">GHMC</span></div>'+
        '<div class="phone-row"><span style="font-size:12.5px;color:var(--ink-soft);font-weight:600">Complaint draft</span><span class="badge badge-green" style="font-size:11px">'+icon('check')+' Ready to review</span></div>'+
        '<div class="phone-bar"><i></i></div>'+
      '</div>'+
    '</div>'+
  '</div></section>'+

  '<section class="section-alt"><div class="container">'+
    '<h2 style="font-size:26px;max-width:38ch">One photo, a complete workflow \u2014 with you in control at every step</h2>'+
    '<div class="bento" style="margin-top:28px">'+featureHtml+'</div>'+
  '</div></section>'+

  '<section class="section"><div class="container two-col">'+
    '<div>'+
      '<h2 style="font-size:24px">Why civic reporting needs this</h2>'+
      '<p style="margin-top:12px">Most residents give up after the second unanswered call. Complaints get lost between departments, contact details go out of date, and there\u2019s rarely a record of what was reported and when. CivicFix AI keeps a private log for you and drafts the paperwork, so reporting an issue takes minutes instead of an afternoon.</p>'+
    '</div>'+
    '<div class="panel panel-narrow" style="max-width:none">'+
      '<h3>'+icon('shield')+' Built on a responsible-AI foundation</h3>'+
      '<p style="margin-top:10px;font-size:14px">Every AI suggestion \u2014 the category, the description, the authority match \u2014 is labelled as a suggestion you can edit. Nothing is sent, and no submission is marked successful, without your action.</p>'+
      '<a href="#/responsible-ai" class="btn btn-outline btn-sm" style="margin-top:16px">Read our Responsible AI policy</a>'+
    '</div>'+
  '</div></section>'+
  pageFooter();
}

/* ============================ PAGE: HOW IT WORKS ============================ */
function pageHowItWorks(){
  var steps = [
    ['Capture a photo','Take a picture or upload one of the issue \u2014 a pothole, overflowing bin, damaged road, waterlogging, a dead streetlight, or anything else.'],
    ['AI suggests a category','A demo classifier proposes a category and confidence score. You can accept it or pick a different one \u2014 it\u2019s always your call.'],
    ['Confirm the description','An editable, AI-drafted description is generated from your category choice. Rewrite as much of it as you like.'],
    ['Choose the location','Pick your city and area, and drop an approximate pin on the illustrative map so the right ward is identified.'],
    ['Find the authority','CivicFix AI retrieves the responsible municipal department for that city and category, and clearly marks whether the contact details are verified or a placeholder.'],
    ['Generate the complaint','A formatted complaint \u2014 subject, description, location, date and photo \u2014 is drafted for you to review and edit.'],
    ['Review and send','Send it yourself by email (you supply the address you\u2019ve verified) or copy it to paste into an official portal. CivicFix AI never sends anything on its own.'],
    ['Track it','Save the reference number you receive from the real authority, and update the status yourself as it progresses.']
  ];
  var stepsHtml = steps.map(function(s,i){
    return '<div class="step-row"><div class="step-num">'+(i+1)+'</div><div><h4>'+s[0]+'</h4><p>'+s[1]+'</p></div></div>';
  }).join('');
  return ''+
  '<section class="section"><div class="container" style="max-width:760px">'+
    '<span class="eyebrow">How it works</span>'+
    '<h1 style="font-size:32px;margin-top:8px">From a photo to a formatted complaint, in eight reviewable steps</h1>'+
    '<p class="lede" style="margin-top:12px">Every step produces something you can see and edit \u2014 CivicFix AI never acts on your behalf without showing you first.</p>'+
    '<div class="steps" style="margin-top:32px">'+stepsHtml+'</div>'+
    '<div class="notice notice-blue" style="margin-top:28px">'+icon('info')+'<span>Want the details on what the AI can and can\u2019t be trusted for? Read the <a href="#/responsible-ai" style="text-decoration:underline">Responsible AI &amp; Privacy</a> page.</span></div>'+
    '<a href="#/report/capture" class="btn btn-primary" style="margin-top:24px">'+icon('camera')+' Start reporting an issue</a>'+
  '</div></section>'+pageFooter();
}

/* ============================ PAGE: CAPTURE ============================ */
function pageCapture(){
  var d = state.draft;
  var hasImage = d && d.imageData;
  var resumeBanner = (d && d.step && d.step !== 'capture') ? (
    '<div class="notice notice-blue" style="margin-bottom:18px">'+icon('info')+'<span>You have a report in progress ('+catById(d.category||'other').label+'). '+
    '<a href="#/report/'+d.step+'" style="text-decoration:underline;font-weight:600">Continue it</a> or start a new one below (this will replace it).</span></div>'
  ) : '';
  return wizardHead('Report an issue','Start with a photo of the problem.',0)+
  '<div class="container" style="padding-bottom:60px">'+resumeBanner+
    '<div class="panel">'+
      (hasImage ?
        '<div class="preview-wrap"><img src="'+d.imageData+'" alt="Captured issue photo"><button class="preview-remove" onclick="APP.clearImage()" aria-label="Remove photo">'+icon('x')+'</button></div>'+
        '<p class="form-hint" style="margin-top:12px">Photo captured. Ready to let the AI take a first pass at classifying it.</p>'+
        '<button class="btn btn-primary btn-block" style="margin-top:16px" onclick="APP.goAnalyze()">'+icon('chart')+' Analyze with AI</button>'
        :
        '<div class="capture-choice-row">'+
          '<button class="btn btn-primary" style="flex:1" onclick="APP.startCamera()">'+icon('camera')+' Use camera</button>'+
          '<label class="btn btn-outline" style="flex:1" for="fileInput">'+icon('upload')+' Upload from device</label>'+
        '</div>'+
        '<input id="fileInput" type="file" accept="image/*" class="sr-only" onchange="APP.handleFile(this)">'+
        '<div id="cameraStage"></div>'+
        '<div class="notice notice-gray" style="margin-top:16px">'+icon('shield')+'<span>Your photo stays on this device until you choose to send your complaint. Nothing is uploaded automatically. The camera supports switching between front and back on devices that have both.</span></div>'
      )+
    '</div>'+
  '</div>'+pageFooter();
}

/* ============================ PAGE: ANALYZE ============================ */
function pageAnalyze(){
  if(!guardDraft(['imageData'], '/report/capture')) return '';
  var d = state.draft;
  return wizardHead('AI image analysis','The classifier below is a labelled demo \u2014 always reviewable.',1)+
  '<div class="container" style="padding-bottom:60px">'+
    '<div class="panel">'+
      '<div style="display:flex;gap:16px;align-items:flex-start">'+
        '<img src="'+d.imageData+'" alt="" style="width:84px;height:84px;object-fit:cover;border-radius:12px;border:1px solid var(--border);flex-shrink:0">'+
        '<div id="analyzeResult" style="flex:1;min-width:0">'+
          '<div class="skeleton"><div class="spinner"></div><p style="font-size:13.5px">Running demo classifier on your photo\u2026</p></div>'+
        '</div>'+
      '</div>'+
    '</div>'+
  '</div>'+pageFooter();
}
function dataURLtoBlob(dataUrl){
  var parts = dataUrl.split(',');
  var mime = (parts[0].match(/:(.*?);/) || [null,'image/jpeg'])[1];
  var binary = atob(parts[1]);
  var arr = new Uint8Array(binary.length);
  for(var i=0;i<binary.length;i++){ arr[i] = binary.charCodeAt(i); }
  return new Blob([arr], {type:mime});
}
function initAnalyze(){
  var d = state.draft;
  var minDelay = new Promise(function(res){ setTimeout(res, 700); });
  var classifyPromise;
  try{
    var form = new FormData();
    form.append('image', dataURLtoBlob(d.imageData), 'photo.jpg');
    classifyPromise = fetch(API_BASE+'/classify', {method:'POST', body:form})
      .then(function(res){ if(!res.ok) throw new Error('backend returned '+res.status); return res.json(); })
      .then(function(json){ json._source = 'backend'; return json; });
  }catch(e){
    classifyPromise = Promise.reject(e);
  }
  Promise.all([classifyPromise.catch(function(){ return null; }), minDelay]).then(function(results){
    var result = results[0];
    if(!result){
      result = simulateClassification();
      result._source = 'local-fallback';
    }
    var box = document.getElementById('analyzeResult');
    if(!box) return;
    d.aiCategory = result.category;
    d.aiConfidence = result.confidence;
    d.category = d.category || result.category;
    d.description = d.description || result.description;
    d.classifierSource = result._source;
    saveState();
    box.innerHTML = renderAnalyzeResult(result);
  });
}
function simulateClassification(seed){
  // Local, in-browser fallback used only when the Python backend agent
  // (backend/app.py, POST /api/classify) can't be reached. Same demo-only
  // heuristic idea, just so the app still works with the backend offline.
  var weights = [0.28,0.22,0.16,0.14,0.14,0.06];
  var r = Math.random(), acc = 0, idx = 0;
  for(var i=0;i<weights.length;i++){ acc += weights[i]; if(r <= acc){ idx = i; break; } idx = i; }
  var cat = CATEGORIES[idx];
  var confidence = Math.round(74 + Math.random()*20);
  var alt = CATEGORIES.filter(function(c){return c.id!==cat.id;}).sort(function(){return Math.random()-.5;}).slice(0,2)
    .map(function(c){ return {id:c.id, label:c.label, confidence: Math.round(confidence - (10+Math.random()*22))}; });
  var descriptions = {
    pothole:'A pothole is visible in the road surface, posing a hazard to vehicles and two-wheelers.',
    garbage:'Uncollected garbage is visible, with waste accumulating in a public area.',
    road_damage:'The road surface appears damaged or broken, affecting safe passage.',
    drainage:'Water appears to be pooling or a drain looks blocked, which can worsen with rain.',
    streetlight:'A streetlight in the area appears to be non-functional.',
    other:'A civic infrastructure issue is visible that may need attention from the local authority.'
  };
  return {category:cat.id, confidence:confidence, alternates:alt, description:descriptions[cat.id]};
}
function renderAnalyzeResult(r){
  var cat = catById(r.category);
  var altHtml = r.alternates.map(function(a){
    return '<button class="chip" onclick="APP.chooseCategory(\''+a.id+'\')">'+catById(a.id).label+' \u00b7 '+a.confidence+'%</button>';
  }).join('');
  var catOptions = CATEGORIES.map(function(c){
    return '<option value="'+c.id+'"'+(c.id===state.draft.category?' selected':'')+'>'+c.label+'</option>';
  }).join('');
  var sourceNote = r._source === 'backend'
    ? 'Classified by the Python backend agent (backend/app.py) \u2014 still a demo heuristic, not a trained vision model.'
    : r._source === 'manual'
      ? 'You corrected this category manually.'
      : 'Backend agent unreachable \u2014 used the built-in browser fallback instead. Start the backend (see README) for the full agent.';
  return ''+
  '<div class="notice notice-orange" style="margin-bottom:16px">'+icon('alert')+'<span>This is an AI <b>suggestion</b> \u2014 please verify before continuing. '+sourceNote+'</span></div>'+
  '<span class="badge badge-'+cat.color+'">'+icon(cat.icon)+' '+cat.label+'</span>'+
  '<div class="confidence-bar"><i style="width:'+r.confidence+'%"></i></div>'+
  '<p class="form-hint">'+r.confidence+'% confidence \u2014 demo classifier, not a production vision model</p>'+
  (altHtml ? '<p class="form-hint" style="margin-top:14px;margin-bottom:6px">Other possibilities:</p><div class="chip-row">'+altHtml+'</div>' : '')+
  '<div class="form-field" style="margin-top:20px">'+
    '<label class="form-label">Correct the category if needed</label>'+
    '<select class="form-select" id="categorySelect" onchange="APP.chooseCategory(this.value)">'+catOptions+'</select>'+
  '</div>'+
  '<div class="form-field">'+
    '<label class="form-label">Description (AI-drafted \u2014 edit freely)</label>'+
    '<textarea class="form-textarea" id="descInput" oninput="APP.updateDraft(\'description\', this.value)">'+state.draft.description+'</textarea>'+
  '</div>'+
  '<div style="display:flex;gap:10px;margin-top:6px">'+
    '<a href="#/report/capture" class="btn btn-outline">Retake photo</a>'+
    '<button class="btn btn-primary" style="flex:1" onclick="APP.goLocation()">Confirm &amp; continue</button>'+
  '</div>';
}

/* ============================ PAGE: LOCATION ============================ */
function pageLocation(){
  if(!guardDraft(['category'], '/report/capture')) return '';
  var d = state.draft;
  var cityOptions = CITIES.map(function(c){
    return '<option value="'+c.id+'"'+(c.id===(d.city||state.profile.city)?' selected':'')+'>'+c.label+'</option>';
  }).join('');
  return wizardHead('Location & area','Tell us roughly where the issue is.',2)+
  '<div class="container" style="padding-bottom:60px">'+
    '<div class="panel">'+
      '<div class="form-row">'+
        '<div class="form-field"><label class="form-label">City</label>'+
          '<select class="form-select" id="citySelect" onchange="APP.updateDraft(\'city\', this.value)">'+cityOptions+'</select></div>'+
        '<div class="form-field"><label class="form-label">Area / locality</label>'+
          '<input class="form-input" placeholder="e.g. Kukatpally" value="'+(d.area||'')+'" oninput="APP.updateDraft(\'area\', this.value)"></div>'+
      '</div>'+
      '<div class="form-field"><label class="form-label">Pincode (optional)</label>'+
        '<input class="form-input" placeholder="e.g. 500072" value="'+(d.pincode||'')+'" oninput="APP.updateDraft(\'pincode\', this.value)"></div>'+
      '<div class="form-field">'+
        '<label class="form-label">Drop an approximate pin</label>'+
        '<div class="mini-map" id="pickMap" onclick="APP.dropPin(event)"><div class="river"></div>'+
          (d.pin ? '<div class="map-pin" style="left:'+d.pin.x+'%;top:'+d.pin.y+'%">'+pinIcon('#2563EB')+'</div>' : '')+
        '</div>'+
        '<p class="form-hint">Illustrative area selector for this prototype \u2014 tap to place a pin. A production build would use a real mapping API.</p>'+
      '</div>'+
      '<button class="btn btn-outline btn-sm" onclick="APP.useMyLocation()" type="button">'+icon('pin')+' Use my current GPS coordinates</button>'+
      '<div id="gpsResult"></div>'+
      '<div style="display:flex;gap:10px;margin-top:22px">'+
        '<a href="#/report/analyze" class="btn btn-outline">Back</a>'+
        '<button class="btn btn-primary" style="flex:1" onclick="APP.goAuthority()" '+(!(d.area) ? 'disabled':'')+' id="locContinueBtn">Continue</button>'+
      '</div>'+
    '</div>'+
  '</div>'+pageFooter();
}

/* ============================ PAGE: AUTHORITY ============================ */
function pageAuthority(){
  if(!guardDraft(['area'], '/report/location')) return '';
  return wizardHead('Authority finder','Retrieving the responsible municipal department.',3)+
  '<div class="container" style="padding-bottom:60px">'+
    '<div class="panel" id="authorityBox">'+
      '<div class="skeleton"><div class="spinner"></div><p style="font-size:13.5px">Connecting to the backend RAG agent\u2026</p></div>'+
    '</div>'+
  '</div>'+pageFooter();
}
function initAuthority(){
  var d = state.draft;
  fetch(API_BASE+'/authority?city='+encodeURIComponent(d.city)+'&category='+encodeURIComponent(d.category))
    .then(function(res){ if(!res.ok) throw new Error('backend returned '+res.status); return res.json(); })
    .then(function(data){ animateRetrieval(data.sources||[], false, function(){ renderAuthorityFromBackend(data); }); })
    .catch(function(){ animateRetrieval([], true, function(){ renderAuthorityFallback(); }); });
}
function animateRetrieval(sources, failed, done){
  var box = document.getElementById('authorityBox');
  if(!box) return;
  var lines = failed
    ? ['Backend RAG agent unreachable\u2026', 'Falling back to the built-in local reference\u2026']
    : (sources.length ? sources.slice(0,3).map(function(s){ return 'Retrieved: '+s.title; }) : ['Searching knowledge base\u2026', 'No strong matches found\u2026']);
  box.innerHTML = lines.map(function(t,i){ return '<div class="retrieval-line" id="rl'+i+'"><span class="dot"></span> '+t+'</div>'; }).join('');
  lines.forEach(function(_, i){
    setTimeout(function(){
      var el = document.getElementById('rl'+i);
      if(el){ el.classList.add('done'); el.querySelector('.dot').innerHTML = icon('check'); }
      if(i === lines.length-1) setTimeout(done, 350);
    }, (i+1)*420);
  });
}
function renderAuthorityFromBackend(data){
  var d = state.draft;
  d.authorityName = data.corporation;
  saveState();
  var box = document.getElementById('authorityBox');
  if(!box) return;
  var headBadge = data.verified
    ? '<span class="badge badge-green">'+icon('check')+' Verified reference found</span>'
    : '<span class="badge badge-orange">'+icon('alert')+' No verified city-specific source \u2014 see notes retrieved below</span>';
  var sourcesHtml = (data.sources||[]).map(function(s){
    return '<div class="notice '+(s.verified?'notice-green':'notice-gray')+'" style="margin-top:10px">'+icon(s.verified?'check':'info')+
      '<span><b>'+s.title+'</b><br>'+s.text+
      (s.source_url ? ' \u2014 <a href="'+s.source_url+'" target="_blank" rel="noopener" style="text-decoration:underline">'+(s.source_name||'source')+'</a>' : (s.source_name ? ' \u2014 '+s.source_name : ''))+
      '</span></div>';
  }).join('');
  var nf = data.national_fallback;
  box.innerHTML = headBadge+
    '<h3 style="margin-top:12px">'+data.corporation+'</h3>'+
    '<p class="form-hint" style="margin-top:6px">Retrieved by the backend\u2019s RAG pipeline (backend/app.py) for this city and category:</p>'+
    sourcesHtml+
    '<div class="notice notice-blue" style="margin-top:14px">'+icon('globe')+'<span><b>National fallback \u2014 verified:</b> '+nf.note+' <a href="'+nf.url+'" target="_blank" rel="noopener" style="text-decoration:underline">'+nf.url+'</a></span></div>'+
    '<div style="display:flex;gap:10px;margin-top:22px">'+
      '<a href="#/report/location" class="btn btn-outline">Back</a>'+
      '<button class="btn btn-primary" style="flex:1" onclick="APP.goGenerate()">Continue to complaint draft</button>'+
    '</div>';
}
function renderAuthorityFallback(){
  var d = state.draft;
  var city = cityById(d.city);
  var v = AUTHORITY_VERIFIED[d.city];
  d.authorityName = city.corp;
  saveState();
  var box = document.getElementById('authorityBox');
  if(!box) return;
  var block;
  if(v){
    block = ''+
    '<span class="badge badge-green">'+icon('check')+' Verified reference found (local fallback data)</span>'+
    '<h3 style="margin-top:12px">'+city.corp+'</h3>'+
    '<div class="form-field" style="margin-top:14px">'+
      '<p style="font-size:14px"><b style="color:var(--ink)">Helpline:</b> '+v.helpline+'</p>'+
      '<p style="font-size:14px;margin-top:6px"><b style="color:var(--ink)">Citizen app:</b> '+v.app+'</p>'+
      '<p style="font-size:14px;margin-top:6px"><b style="color:var(--ink)">Grievance system:</b> '+v.system+'</p>'+
    '</div>'+
    '<p class="form-hint">Source: <a href="'+v.sourceUrl+'" target="_blank" rel="noopener" style="text-decoration:underline">'+v.sourceName+'</a> \u2014 verify current details on the official GHMC website before relying on them.</p>';
  } else {
    block = ''+
    '<span class="badge badge-orange">'+icon('alert')+' Mock data \u2014 not verified</span>'+
    '<h3 style="margin-top:12px">'+city.corp+'</h3>'+
    '<p style="font-size:14px;margin-top:10px">CivicFix AI does not have a verified contact record for this corporation in this prototype, and will not invent one. Please look up the official '+city.corp+' website for your ward/zone office before contacting anyone.</p>'+
    '<a href="https://www.google.com/search?q='+encodeURIComponent(city.corp+' official website grievance')+'" target="_blank" rel="noopener" class="btn btn-outline btn-sm" style="margin-top:10px">'+icon('search')+' Search for the official site</a>';
  }
  box.innerHTML = block+
  '<div class="notice notice-orange" style="margin-top:14px">'+icon('alert')+'<span>The backend RAG agent wasn\u2019t reachable, so this is the local, offline fallback reference. Start the backend (see README) for retrieval-augmented results.</span></div>'+
  '<div class="notice notice-blue" style="margin-top:14px">'+icon('globe')+'<span><b>National fallback \u2014 verified:</b> if your local corporation doesn\u2019t resolve this, escalate on <a href="https://pgportal.gov.in" target="_blank" rel="noopener" style="text-decoration:underline">CPGRAMS (pgportal.gov.in)</a>, the Government of India\u2019s public grievance portal. Note: CPGRAMS does not accept grievances by email \u2014 they must be lodged on the portal or app.</span></div>'+
  '<div style="display:flex;gap:10px;margin-top:22px">'+
    '<a href="#/report/location" class="btn btn-outline">Back</a>'+
    '<button class="btn btn-primary" style="flex:1" onclick="APP.goGenerate()">Continue to complaint draft</button>'+
  '</div>';
}

/* ============================ PAGE: GENERATE ============================ */
function pageGenerate(){
  if(!guardDraft(['authorityName'], '/report/authority')) return '';
  var d = state.draft;
  if(!d.subject) d.subject = catById(d.category).label+' at '+(d.area||'your area')+', '+cityById(d.city).label;
  if(!d.letterBody) d.letterBody = buildComplaintText(d);
  saveState();
  return wizardHead('AI complaint generator','Everything below is editable before you send it.',4)+
  '<div class="container" style="padding-bottom:60px">'+
    '<div class="panel">'+
      '<div class="form-field"><label class="form-label">Subject</label>'+
        '<input class="form-input" value="'+escAttr(d.subject)+'" oninput="APP.updateDraft(\'subject\', this.value)"></div>'+
      '<div class="form-field"><label class="form-label">Complaint text</label>'+
        '<textarea class="form-textarea" id="letterTextarea" style="min-height:220px" oninput="APP.updateDraft(\'letterBody\', this.value)">'+d.letterBody+'</textarea>'+
        '<p class="form-hint">'+wordCount(d.letterBody)+' words</p>'+
      '</div>'+
      '<div style="display:flex;align-items:center;gap:12px;margin-bottom:16px">'+
        '<img src="'+d.imageData+'" style="width:52px;height:52px;object-fit:cover;border-radius:9px;border:1px solid var(--border)">'+
        '<span class="form-hint">Photo will be attached to the review page</span>'+
      '</div>'+
      '<button class="btn btn-outline btn-sm" onclick="APP.regenerate()" type="button">'+icon('resend')+' Regenerate template draft</button>'+
      '<div style="border-top:1px solid var(--border); margin-top:20px; padding-top:18px">'+
        '<h4 style="font-size:14px;margin-bottom:6px">'+icon('chart')+' Or, write your own AI prompt</h4>'+
        '<p class="form-hint" style="margin-bottom:10px">Give the AI your own instructions and it will draft the letter above for you \u2014 you still review and can edit the result before sending.</p>'+
        '<textarea class="form-textarea" id="customPrompt" placeholder="e.g. Make the tone firmer and mention this is the third time I\'m reporting this issue.">'+(d.customPrompt||'')+'</textarea>'+
        '<button class="btn btn-primary btn-sm" style="margin-top:10px" id="aiGenBtn" type="button" onclick="APP.generateWithAI()">'+icon('send')+' Generate with AI</button>'+
        '<div id="aiGenStatus" class="form-hint" style="margin-top:8px"></div>'+
      '</div>'+
      '<div style="display:flex;gap:10px;margin-top:22px">'+
        '<a href="#/report/authority" class="btn btn-outline">Back</a>'+
        '<button class="btn btn-primary" style="flex:1" onclick="APP.goReview()">Review complaint</button>'+
      '</div>'+
    '</div>'+
  '</div>'+pageFooter();
}
function buildComplaintText(d){
  var cat = catById(d.category);
  var name = state.profile.name || '[Your name]';
  var contact = state.profile.phone || state.profile.email || '[Your phone or email]';
  return 'To,\nThe Grievance Officer,\n'+d.authorityName+'\n\n'+
  'Subject: Complaint regarding '+cat.label.toLowerCase()+' at '+(d.area||'[area]')+', '+cityById(d.city).label+'\n\n'+
  'Date: '+fmtDate(todayISO())+'\n\n'+
  'Dear Sir/Madam,\n\n'+
  'I would like to report the following civic issue for your attention and necessary action.\n\n'+
  'Category: '+cat.label+'\n'+
  'Location: '+(d.area||'[area]')+', '+cityById(d.city).label+(d.pincode ? ' \u2014 PIN '+d.pincode : '')+'\n\n'+
  'Description:\n'+(d.description||'')+'\n\n'+
  'A photograph of the issue is attached for reference. I would be grateful if this could be inspected and resolved at the earliest, and if I could be provided a complaint reference number for tracking.\n\n'+
  'Thank you for your attention to this matter.\n\n'+
  'Regards,\n'+name+'\n'+contact;
}
function wordCount(s){ return (s||'').trim().split(/\s+/).filter(Boolean).length; }
function escAttr(s){ return (s||'').replace(/"/g,'&quot;'); }

/* ============================ PAGE: REVIEW ============================ */
function pageReview(){
  if(!guardDraft(['letterBody'], '/report/generate')) return '';
  var d = state.draft;
  return wizardHead('Review & send','Nothing is sent until you take an action below.',5)+
  '<div class="container" style="padding-bottom:60px">'+
    '<div class="two-col">'+
      '<div class="panel" style="max-width:none">'+
        '<h3 style="font-size:15px;margin-bottom:12px">'+icon('doc')+' Final complaint</h3>'+
        '<div class="letter">'+d.letterBody.replace(/</g,'&lt;')+'</div>'+
        '<img src="'+d.imageData+'" style="width:100%;max-height:200px;object-fit:cover;border-radius:10px;margin-top:14px;border:1px solid var(--border)">'+
      '</div>'+
      '<div class="panel" style="max-width:none">'+
        '<h3 style="font-size:15px">Submit your complaint</h3>'+
        (d.city === 'hyderabad' ?
          '<div class="notice notice-blue" style="margin:12px 0">'+icon('building')+'<span><b>Submit directly on GHMC:</b> GHMC takes citizen complaints on its official site (ghmc.gov.in \u2192 Our Services \u2192 Grievance \u2192 Citizen, OTP-verified) or by phone on the toll-free numbers <b>155304</b> / <b>040-2111-1111</b>. Copy your complaint, then paste it into that form.</span></div>'+
          '<button class="btn btn-primary btn-block" style="margin-bottom:16px" onclick="APP.copyAndOpenGHMC()" type="button">'+icon('external')+' Copy complaint &amp; open ghmc.gov.in</button>'
          : '')+
        '<div class="notice notice-orange" style="margin:12px 0">'+icon('alert')+'<span>CivicFix AI does not have a verified email address for '+d.authorityName+' and will not invent one. Enter the address only after confirming it on the authority\u2019s official website.</span></div>'+
        '<div class="form-field"><label class="form-label">Recipient email (you supply &amp; verify)</label>'+
          '<input class="form-input" id="mailTo" type="email" placeholder="grievance@example.gov.in" oninput="APP.toggleMailBtn(this.value)"></div>'+
        '<a id="mailBtn" class="btn btn-primary btn-block" style="pointer-events:none;opacity:.45" href="#">'+icon('mail')+' Open in email app</a>'+
        '<button class="btn btn-outline btn-block" style="margin-top:10px" onclick="APP.copyComplaint()" type="button">'+icon('copy')+' Copy complaint text for a portal</button>'+
        '<div class="notice notice-gray" style="margin-top:16px">'+icon('info')+'<span>Copy this text into an official portal such as <a href="https://pgportal.gov.in" target="_blank" rel="noopener" style="text-decoration:underline">CPGRAMS</a> or your city\u2019s app. CivicFix AI never confirms delivery \u2014 only the real authority can.</span></div>'+
        '<button class="btn btn-primary btn-block" style="margin-top:20px" onclick="APP.saveComplaint()" type="button">'+icon('check')+' Save to My Complaints</button>'+
        '<a href="#/report/generate" class="btn btn-ghost btn-block" style="margin-top:6px">Back to edit</a>'+
      '</div>'+
    '</div>'+
  '</div>'+pageFooter();
}

/* ============================ PAGE: MY COMPLAINTS ============================ */
function pageComplaints(){
  var list = state.complaints.slice().sort(function(a,b){ return b.createdAt.localeCompare(a.createdAt); });
  var body;
  if(!list.length){
    body = '<div class="empty-state">'+icon('doc')+'<p style="font-weight:600;color:var(--ink)">No complaints yet</p><p style="margin-top:6px">Reports you save will show up here so you can track them.</p>'+
    '<a href="#/report/capture" class="btn btn-primary" style="margin-top:16px">'+icon('camera')+' Report your first issue</a></div>';
  } else {
    body = '<div class="table-list">'+list.map(complaintCard).join('')+'</div>';
  }
  return '<section class="section"><div class="container" style="max-width:760px">'+
    '<div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px">'+
      '<h1 style="font-size:26px">My complaints</h1>'+
      '<a href="#/report/capture" class="btn btn-primary btn-sm">'+icon('plus')+' New report</a>'+
    '</div>'+
    '<p style="margin-top:6px">Saved locally on this device. Statuses are self-reported by you \u2014 CivicFix AI doesn\u2019t connect to live municipal systems in this prototype.</p>'+
    '<div style="margin-top:24px">'+body+'</div>'+
  '</div></section>'+pageFooter();
}
function complaintCard(c){
  var cat = catById(c.category);
  var statusColor = {Draft:'gray', 'Sent (unconfirmed)':'orange', 'Reference added':'blue', 'Resolved (self-reported)':'green'}[c.status] || 'gray';
  return '<div class="complaint-card">'+
    '<div class="thumb">'+(c.imageData ? '<img src="'+c.imageData+'">' : icon('image'))+'</div>'+
    '<div style="flex:1;min-width:0">'+
      '<div style="display:flex;justify-content:space-between;gap:8px;flex-wrap:wrap">'+
        '<b style="font-size:14.5px">'+cat.label+'</b>'+
        '<span class="badge badge-'+statusColor+'">'+c.status+'</span>'+
      '</div>'+
      '<p style="font-size:13px;margin-top:4px">'+c.area+', '+cityById(c.city).label+' \u2014 '+c.authorityName+'</p>'+
      '<div class="complaint-meta">'+
        '<span>'+icon('clock')+' '+fmtDate(c.createdAt)+'</span>'+
        '<span>'+(c.referenceNo ? 'Ref: '+c.referenceNo : 'No reference number yet')+'</span>'+
      '</div>'+
      '<div style="display:flex;gap:8px;margin-top:10px;flex-wrap:wrap">'+
        '<button class="btn btn-outline btn-sm" onclick="APP.addReference(\''+c.id+'\')">'+icon('edit')+' '+(c.referenceNo?'Edit reference':'Add reference')+'</button>'+
        '<button class="btn btn-ghost btn-sm" onclick="APP.cycleStatus(\''+c.id+'\')">Update status</button>'+
        '<button class="btn btn-ghost btn-sm" onclick="APP.deleteComplaint(\''+c.id+'\')" style="color:var(--red)">'+icon('trash')+'</button>'+
      '</div>'+
    '</div>'+
  '</div>';
}

/* ============================ PAGE: EXPLORE ============================ */
var exploreFilter = 'all';
function pageExplore(){
  var pins = SEED_ISSUES.map(function(s){
    var c = catById(s.cat);
    var color = {red:'#DC2626',orange:'#F59E0B',blue:'#2563EB',green:'#16A34A',gray:'#64748B'}[c.color];
    return '<div class="map-pin" style="left:'+s.x+'%;top:'+s.y+'%" title="'+c.label+' \u2014 '+s.area+'" onclick="APP.jumpToIssue(\''+s.id+'\')">'+pinIcon(color)+'</div>';
  }).join('');
  var chips = [{id:'all',label:'All'}].concat(CATEGORIES).map(function(c){
    return '<button class="chip '+(exploreFilter===c.id?'selected':'')+'" onclick="APP.filterExplore(\''+c.id+'\')">'+c.label+'</button>';
  }).join('');
  var filtered = SEED_ISSUES.filter(function(s){ return exploreFilter==='all' || s.cat===exploreFilter; });
  var cards = filtered.map(function(s){
    var cat = catById(s.cat);
    var statusColor = {Reported:'orange','In progress':'blue',Resolved:'green'}[s.status];
    return '<div class="complaint-card" id="issue-'+s.id+'">'+
      '<div class="thumb badge-'+cat.color+'" style="display:flex">'+icon(cat.icon)+'</div>'+
      '<div style="flex:1;min-width:0">'+
        '<div style="display:flex;justify-content:space-between;gap:8px;flex-wrap:wrap"><b style="font-size:14.5px">'+cat.label+'</b><span class="badge badge-'+statusColor+'">'+s.status+'</span></div>'+
        '<p style="font-size:13px;margin-top:4px">'+s.desc+'</p>'+
        '<div class="complaint-meta"><span>'+icon('pin')+' '+s.area+', '+s.city+'</span><span>'+icon('clock')+' '+fmtDate(s.date)+'</span></div>'+
      '</div></div>';
  }).join('') || '<div class="empty-state">'+icon('search')+'<p>No sample issues in this category.</p></div>';

  return '<section class="section"><div class="container">'+
    '<h1 style="font-size:26px">Explore issues</h1>'+
    '<p style="margin-top:6px;max-width:60ch">A sample feed of community reports for this prototype \u2014 illustrative demo data, not live reports from other users.</p>'+
    '<div class="pill-row" style="margin-top:20px">'+chips+'</div>'+
    '<div class="two-col">'+
      '<div class="mini-map" style="cursor:default">'+pins+'</div>'+
      '<div class="table-list" id="issueList">'+cards+'</div>'+
    '</div>'+
  '</div></section>'+pageFooter();
}
function initExplore(){}

/* ============================ PAGE: IMPACT ============================ */
function pageImpact(){
  var yourCount = state.complaints.length;
  return '<section class="section"><div class="container">'+
    '<h1 style="font-size:26px">Impact dashboard</h1>'+
    '<p style="margin-top:6px;max-width:64ch">A prototype analytics view built from anonymized sample data. A production deployment would aggregate consented, anonymized reports from all users through a backend \u2014 this demo only has what\u2019s in the sample feed plus your own local reports.</p>'+
    '<div class="dashboard-grid" style="margin-top:24px">'+
      '<div class="stat-card"><b>'+SEED_ISSUES.length+'</b><span style="font-size:12.5px;color:var(--ink-faint)">sample issues logged</span></div>'+
      '<div class="stat-card"><b>'+SEED_ISSUES.filter(function(s){return s.status==='Resolved';}).length+'</b><span style="font-size:12.5px;color:var(--ink-faint)">marked resolved (self-reported)</span></div>'+
      '<div class="stat-card"><b>'+yourCount+'</b><span style="font-size:12.5px;color:var(--ink-faint)">your saved complaints on this device</span></div>'+
    '</div>'+
    '<div class="dashboard-grid" style="margin-top:16px">'+
      '<div class="chart-card" style="grid-column:span 1"><h4 style="font-size:13.5px;margin-bottom:10px">Issues by category</h4><canvas id="chartCat"></canvas></div>'+
      '<div class="chart-card" style="grid-column:span 1"><h4 style="font-size:13.5px;margin-bottom:10px">Issues by status</h4><canvas id="chartStatus"></canvas></div>'+
      '<div class="chart-card" style="grid-column:span 1"><h4 style="font-size:13.5px;margin-bottom:10px">Reports over time (sample trend)</h4><canvas id="chartTrend"></canvas></div>'+
    '</div>'+
    '<div class="notice notice-gray" style="margin-top:20px">'+icon('shield')+'<span>Any real deployment of this dashboard would only use anonymized, consented data \u2014 see the consent toggle in <a href="#/profile" style="text-decoration:underline">Profile &amp; Settings</a>.</span></div>'+
  '</div></section>'+pageFooter();
}
function initCharts(){
  if(!window.Chart) return;
  var catCounts = CATEGORIES.map(function(c){ return SEED_ISSUES.filter(function(s){return s.cat===c.id;}).length; });
  var ctx1 = document.getElementById('chartCat');
  if(ctx1) chartRegistry.cat = new Chart(ctx1, {type:'bar', data:{labels:CATEGORIES.map(function(c){return c.label.split(' ')[0];}), datasets:[{data:catCounts, backgroundColor:'#2563EB', borderRadius:6}]}, options:{plugins:{legend:{display:false}}, scales:{y:{beginAtZero:true, ticks:{precision:0}}}}});
  var statuses = ['Reported','In progress','Resolved'];
  var statusCounts = statuses.map(function(s){ return SEED_ISSUES.filter(function(i){return i.status===s;}).length; });
  var ctx2 = document.getElementById('chartStatus');
  if(ctx2) chartRegistry.status = new Chart(ctx2, {type:'doughnut', data:{labels:statuses, datasets:[{data:statusCounts, backgroundColor:['#F59E0B','#2563EB','#16A34A']}]}, options:{plugins:{legend:{position:'bottom', labels:{boxWidth:10,font:{size:11}}}}}});
  var months = ['Apr','May','Jun','Jul','Aug','Sep'];
  var trend = [4,6,5,8,7,9];
  var ctx3 = document.getElementById('chartTrend');
  if(ctx3) chartRegistry.trend = new Chart(ctx3, {type:'line', data:{labels:months, datasets:[{data:trend, borderColor:'#16A34A', backgroundColor:'rgba(22,163,74,.12)', fill:true, tension:.35}]}, options:{plugins:{legend:{display:false}}, scales:{y:{beginAtZero:true, ticks:{precision:0}}}}});
}

/* ============================ PAGE: PROFILE ============================ */
function pageProfile(){
  var p = state.profile;
  var cityOptions = CITIES.map(function(c){ return '<option value="'+c.id+'"'+(c.id===p.city?' selected':'')+'>'+c.label+'</option>'; }).join('');
  return '<section class="section"><div class="container" style="max-width:640px">'+
    '<h1 style="font-size:26px">Profile &amp; settings</h1>'+
    '<p style="margin-top:6px">There\u2019s no server account in this prototype \u2014 everything below is stored locally on this device only.</p>'+
    '<div class="panel" style="max-width:none;margin-top:20px">'+
      '<h3 style="font-size:15px;margin-bottom:14px">Your details</h3>'+
      '<div class="form-row">'+
        '<div class="form-field"><label class="form-label">Name</label><input class="form-input" value="'+escAttr(p.name)+'" oninput="APP.updateProfile(\'name\',this.value)"></div>'+
        '<div class="form-field"><label class="form-label">City</label><select class="form-select" onchange="APP.updateProfile(\'city\',this.value)">'+cityOptions+'</select></div>'+
      '</div>'+
      '<div class="form-row">'+
        '<div class="form-field"><label class="form-label">Email</label><input class="form-input" type="email" value="'+escAttr(p.email)+'" oninput="APP.updateProfile(\'email\',this.value)"></div>'+
        '<div class="form-field"><label class="form-label">Phone</label><input class="form-input" value="'+escAttr(p.phone)+'" oninput="APP.updateProfile(\'phone\',this.value)"></div>'+
      '</div>'+
    '</div>'+
    '<div class="panel" style="max-width:none;margin-top:16px">'+
      '<h3 style="font-size:15px;margin-bottom:6px">Privacy</h3>'+
      '<div class="settings-row"><div><h4>Share anonymized data for city analytics</h4><p>Lets your category/location (never your name or photo) count toward the Impact Dashboard\u2019s sample statistics in a full deployment.</p></div>'+
        '<button class="toggle '+(state.consent.analytics?'on':'')+'" onclick="APP.toggleConsent()"><i></i></button></div>'+
      '<div class="settings-row"><div><h4>Local data</h4><p>Clears your profile, drafts and saved complaints from this browser.</p></div>'+
        '<button class="btn btn-danger btn-sm" onclick="APP.clearAllData()">Clear my data</button></div>'+
    '</div>'+
    '<div class="notice notice-gray" style="margin-top:16px">'+icon('shield')+'<span>No login is required or supported here. Read more in <a href="#/responsible-ai" style="text-decoration:underline">Responsible AI &amp; Privacy</a>.</span></div>'+
  '</div></section>'+pageFooter();
}

/* ============================ PAGE: RESPONSIBLE AI ============================ */
function pageResponsible(){
  return '<section class="section"><div class="container" style="max-width:720px">'+
    '<span class="eyebrow">Transparency</span>'+
    '<h1 style="font-size:30px;margin-top:8px">Responsible AI &amp; privacy</h1>'+
    '<p class="lede" style="margin-top:12px">CivicFix AI is a hackathon prototype. This page explains, plainly, what the AI does, where it can go wrong, and what stays under your control.</p>'+

    '<h3 style="font-size:17px;margin-top:34px">How AI is used here</h3>'+
    '<p style="margin-top:8px">A demo image classifier suggests an issue category and confidence score; a template drafts an editable description and complaint letter; a retrieval step looks up an authority record for your city and category.</p>'+

    '<h3 style="font-size:17px;margin-top:26px">Its real limitations</h3>'+
    '<p style="margin-top:8px">The classifier in this build is a simulated demo, not a trained production model \u2014 it can be confidently wrong. The complaint drafter can phrase things imprecisely. Neither should be trusted without your review, and neither is connected to a live municipal system.</p>'+

    '<h3 style="font-size:17px;margin-top:26px">What stays in your control</h3>'+
    '<p style="margin-top:8px">You can correct the category, rewrite the description and letter, and choose whether and how to send it. CivicFix AI never submits a complaint, emails an authority, or marks anything as delivered or resolved on your behalf.</p>'+

    '<h3 style="font-size:17px;margin-top:26px">Verified vs. mock data</h3>'+
    '<p style="margin-top:8px">Only the Hyderabad (GHMC) helpline, app name and grievance-system name are drawn from a cited, real source \u2014 shown with its link on the Authority Finder page. Every other city\u2019s corporation name is a real, public fact, but its contact directory is explicitly mock and labelled as such. The CPGRAMS national portal link is real and verified. CivicFix AI never invents an email address, phone number, or complaint ID.</p>'+

    '<h3 style="font-size:17px;margin-top:26px">Your data</h3>'+
    '<p style="margin-top:8px">Your photo, profile and saved complaints stay in this browser\u2019s local storage \u2014 there is no server account in this prototype. Nothing is shared with a third party. The Impact Dashboard uses only pre-built sample data plus counts from your own device.</p>'+

    '<h3 style="font-size:17px;margin-top:26px">About this project</h3>'+
    '<p style="margin-top:8px">CivicFix AI is built around UN Sustainable Development Goal 11 (Sustainable Cities and Communities), aiming to make it faster and less discouraging for residents to report the small infrastructure problems that add up to a city\u2019s liveability.</p>'+

    '<a href="#/home" class="btn btn-outline" style="margin-top:28px">Back to home</a>'+
  '</div></section>'+pageFooter();
}

/* ============================ FOOTER ============================ */
function pageFooter(){
  return '<footer class="footer"><div class="container">'+
    '<div style="display:flex;align-items:center;gap:8px;font-family:var(--font-display);font-weight:700">'+icon('leaf')+' CivicFix AI</div>'+
    '<p>Hackathon prototype \u00b7 SDG 11: Sustainable Cities and Communities \u00b7 <a href="#/responsible-ai" style="text-decoration:underline">Responsible AI &amp; Privacy</a></p>'+
  '</div></footer>';
}

/* ============================ APP ACTIONS ============================ */
window.APP = {
  toggleMobileMenu: function(){
    var menu = document.getElementById('mobileMenu');
    var btn = document.getElementById('mobileMenuBtn');
    if(!menu || !btn) return;
    var open = !menu.classList.contains('open');
    menu.classList.toggle('open', open);
    btn.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  },
  closeMobileMenu: function(){
    var menu = document.getElementById('mobileMenu');
    var btn = document.getElementById('mobileMenuBtn');
    if(menu) menu.classList.remove('open');
    if(btn){ btn.classList.remove('open'); btn.setAttribute('aria-expanded','false'); }
  },
  handleFile: function(input){
    var file = input.files && input.files[0];
    if(!file) return;
    var reader = new FileReader();
    reader.onload = function(ev){
      var img = new Image();
      img.onload = function(){
        var maxW = 900;
        var scale = Math.min(1, maxW/img.width);
        var canvas = document.createElement('canvas');
        canvas.width = img.width*scale; canvas.height = img.height*scale;
        var ctx = canvas.getContext('2d');
        ctx.drawImage(img,0,0,canvas.width,canvas.height);
        var dataUrl = canvas.toDataURL('image/jpeg',0.75);
        state.draft = {step:'capture', imageData:dataUrl, city: state.profile.city};
        saveState();
        render();
      };
      img.onerror = function(){ showToast('Could not read that image', 'alert'); };
      img.src = ev.target.result;
    };
    reader.onerror = function(){ showToast('Could not read that file', 'alert'); };
    reader.readAsDataURL(file);
  },
  clearImage: function(){ state.draft = null; saveState(); render(); },
  _facing: 'environment',
  _stream: null,
  startCamera: function(facing){
    var stage = document.getElementById('cameraStage');
    if(!stage) return;
    this._facing = facing || this._facing || 'environment';
    if(!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia){
      stage.innerHTML = '<div class="notice notice-orange" style="margin-top:16px">'+icon('alert')+'<span>Camera access isn\u2019t available in this browser. Please use \u201cUpload from device\u201d instead.</span></div>';
      return;
    }
    stage.innerHTML = '<div class="camera-wrap"><video id="cameraVideo" autoplay playsinline muted></video>'+
      '<div class="camera-controls">'+
        '<button class="btn btn-outline btn-sm" type="button" onclick="APP.switchCamera()">'+icon('resend')+' Switch front/back</button>'+
        '<button class="btn btn-primary" type="button" onclick="APP.captureFrame()">'+icon('camera')+' Capture</button>'+
        '<button class="btn btn-ghost btn-sm" type="button" onclick="APP.stopCamera()">Cancel</button>'+
      '</div></div>';
    this.stopStream();
    var video = document.getElementById('cameraVideo');
    navigator.mediaDevices.getUserMedia({video:{facingMode:this._facing}, audio:false}).then(function(stream){
      APP._stream = stream;
      if(video){ video.srcObject = stream; }
    }).catch(function(err){
      stage.innerHTML = '<div class="notice notice-orange" style="margin-top:16px">'+icon('alert')+'<span>Couldn\u2019t access the camera ('+(err && err.message ? err.message : 'permission denied')+'). You can still use \u201cUpload from device\u201d above.</span></div>';
    });
  },
  switchCamera: function(){
    this._facing = (this._facing === 'environment') ? 'user' : 'environment';
    this.startCamera(this._facing);
  },
  stopStream: function(){
    if(this._stream){ try{ this._stream.getTracks().forEach(function(t){ t.stop(); }); }catch(e){} this._stream = null; }
  },
  stopCamera: function(){
    this.stopStream();
    var stage = document.getElementById('cameraStage');
    if(stage) stage.innerHTML = '';
  },
  captureFrame: function(){
    var video = document.getElementById('cameraVideo');
    if(!video || !video.videoWidth) return;
    var maxW = 900;
    var scale = Math.min(1, maxW/video.videoWidth);
    var canvas = document.createElement('canvas');
    canvas.width = video.videoWidth*scale; canvas.height = video.videoHeight*scale;
    var ctx = canvas.getContext('2d');
    if(this._facing === 'user'){ ctx.translate(canvas.width,0); ctx.scale(-1,1); }
    ctx.drawImage(video,0,0,canvas.width,canvas.height);
    var dataUrl = canvas.toDataURL('image/jpeg',0.75);
    this.stopCamera();
    state.draft = {step:'capture', imageData:dataUrl, city: state.profile.city};
    saveState();
    render();
  },
  goAnalyze: function(){ state.draft.step='analyze'; saveState(); location.hash='#/report/analyze'; },
  chooseCategory: function(id){
    state.draft.category = id; state.draft.aiConfidence = null; saveState();
    var box = document.getElementById('analyzeResult');
    if(box){
      box.innerHTML = renderAnalyzeResult({category:id, confidence: state.draft.aiCategory===id ? (state.draft.aiConfidenceOrig||88) : 60, alternates:[], description: state.draft.description, _source:'manual'});
    }
  },
  updateDraft: function(field, val){ if(!state.draft) return; state.draft[field] = val; saveState(); },
  goLocation: function(){ state.draft.step='location'; saveState(); location.hash='#/report/location'; },
  dropPin: function(ev){
    var rect = ev.currentTarget.getBoundingClientRect();
    var x = ((ev.clientX-rect.left)/rect.width*100).toFixed(1);
    var y = ((ev.clientY-rect.top)/rect.height*100).toFixed(1);
    state.draft.pin = {x:x,y:y}; saveState();
    var el = document.getElementById('pickMap');
    el.querySelectorAll('.map-pin').forEach(function(p){p.remove();});
    var pin = document.createElement('div');
    pin.className='map-pin'; pin.style.left=x+'%'; pin.style.top=y+'%'; pin.innerHTML = pinIcon('#2563EB');
    el.appendChild(pin);
    document.getElementById('locContinueBtn').removeAttribute('disabled');
  },
  useMyLocation: function(){
    var out = document.getElementById('gpsResult');
    if(!navigator.geolocation){ out.innerHTML = '<p class="form-hint" style="margin-top:8px">Geolocation isn\u2019t available in this browser.</p>'; return; }
    out.innerHTML = '<p class="form-hint" style="margin-top:8px">Requesting location\u2026</p>';
    navigator.geolocation.getCurrentPosition(function(pos){
      out.innerHTML = '<p class="form-hint" style="margin-top:8px">Coordinates: '+pos.coords.latitude.toFixed(4)+', '+pos.coords.longitude.toFixed(4)+' \u2014 this demo doesn\u2019t reverse-geocode, please still fill in city/area above.</p>';
    }, function(err){
      out.innerHTML = '<p class="form-hint" style="margin-top:8px">Couldn\u2019t get your location ('+err.message+').</p>';
    });
  },
  goAuthority: function(){ if(!state.draft.area) return; state.draft.step='authority'; saveState(); location.hash='#/report/authority'; },
  goGenerate: function(){ state.draft.step='generate'; saveState(); location.hash='#/report/generate'; },
  regenerate: function(){
    var d = state.draft;
    var alt = simulateClassification();
    d.letterBody = buildComplaintText(d);
    saveState(); render();
    showToast('Draft regenerated', 'resend');
  },
  generateWithAI: function(){
    var d = state.draft;
    var promptBox = document.getElementById('customPrompt');
    d.customPrompt = promptBox ? promptBox.value : '';
    saveState();
    var statusEl = document.getElementById('aiGenStatus');
    var btn = document.getElementById('aiGenBtn');
    var mainTa = document.getElementById('letterTextarea');
    btn.disabled = true;
    statusEl.textContent = 'Asking the backend agent (with retrieved context)\u2026';

    var payload = {
      category: d.category, area: d.area, city: d.city, pincode: d.pincode,
      authority: d.authorityName, description: d.description, custom_prompt: d.customPrompt,
      name: state.profile.name, contact: state.profile.phone || state.profile.email
    };

    fetch(API_BASE+'/generate-complaint', {
      method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(payload)
    }).then(function(res){ if(!res.ok) throw new Error('backend returned '+res.status); return res.json(); })
      .then(function(result){
        d.letterBody = result.text; saveState();
        if(mainTa) mainTa.value = result.text;
        var srcNote = result.source === 'ai'
          ? 'Generated by the backend agent, using '+(result.provider_label||'an AI provider')+' and retrieved reference context.'
          : 'Generated by the backend agent\u2019s template (no AI provider configured server-side \u2014 set ANTHROPIC_API_KEY or WATSONX_API_KEY), still using retrieved reference context.';
        var used = (result.sources_used||[]).map(function(s){ return s.title; }).join('; ');
        statusEl.innerHTML = srcNote + (used ? '<br>Context consulted: '+used : '');
        btn.disabled = false;
      })
      .catch(function(){
        // Backend unreachable — try the Claude "sample" capability, which only
        // exists if this page happens to be running inside a claude.ai artifact view.
        if(!window.claude || !window.claude.use){
          statusEl.textContent = 'Backend agent unreachable, and no AI capability is available in this view \u2014 use \u201cRegenerate template draft\u201d above, or edit the letter by hand. See the README to start the backend.';
          btn.disabled = false;
          return;
        }
        statusEl.textContent = 'Backend unreachable \u2014 trying Claude directly\u2026';
        window.claude.use('sample').then(function(sample){
          if(!sample){
            statusEl.textContent = 'AI generation isn\u2019t available right now \u2014 use \u201cRegenerate template draft\u201d above instead.';
            btn.disabled = false;
            return;
          }
          var cat = catById(d.category);
          var input = 'You are helping an Indian citizen draft a short, formal, polite civic complaint letter to a municipal authority.\n\n'+
            'Authority: '+d.authorityName+'\n'+
            'Issue category: '+cat.label+'\n'+
            'Location: '+(d.area||'')+', '+cityById(d.city).label+(d.pincode?(' - PIN '+d.pincode):'')+'\n'+
            'Date: '+fmtDate(todayISO())+'\n'+
            'Reporter\u2019s description: '+(d.description||'')+'\n'+
            (d.customPrompt ? ('Additional instructions from the reporter: '+d.customPrompt+'\n') : '')+
            '\nWrite only the complaint letter itself (starting with "To," and ending with a placeholder for the reporter\u2019s name), under 220 words. Ask for inspection and a complaint reference number. Do not invent any contact details, complaint IDs, or claim the issue has already been resolved.';
          sample(input, {modelTier:'quick', onText:function(ev){
            if(mainTa && ev && ev.text){ mainTa.value = ev.text; d.letterBody = ev.text; }
          }}).then(function(result){
            d.letterBody = result.text; saveState();
            if(mainTa) mainTa.value = result.text;
            statusEl.textContent = 'Done (via Claude directly \u2014 backend was unreachable) \u2014 review the letter above before sending.';
            btn.disabled = false;
          }).catch(function(err){
            statusEl.textContent = 'Couldn\u2019t generate right now ('+(err && err.message ? err.message : 'the request failed')+'). Your drafted template is still available above.';
            btn.disabled = false;
          });
        }).catch(function(){
          statusEl.textContent = 'AI generation isn\u2019t available in this view right now.';
          btn.disabled = false;
        });
      });
  },
  goReview: function(){ state.draft.step='review'; saveState(); location.hash='#/report/review'; },
  toggleMailBtn: function(val){
    var btn = document.getElementById('mailBtn');
    var d = state.draft;
    if(val && /\S+@\S+\.\S+/.test(val)){
      btn.style.pointerEvents='auto'; btn.style.opacity='1';
      btn.href = 'mailto:'+encodeURIComponent(val)+'?subject='+encodeURIComponent(d.subject)+'&body='+encodeURIComponent(d.letterBody);
    } else {
      btn.style.pointerEvents='none'; btn.style.opacity='.45'; btn.href='#';
    }
  },
  copyAndOpenGHMC: function(){
    var text = state.draft.letterBody;
    function afterCopy(){
      showToast('Copied \u2014 paste it into the GHMC form', 'copy');
      window.open('https://www.ghmc.gov.in', '_blank', 'noopener');
    }
    if(navigator.clipboard && navigator.clipboard.writeText){
      navigator.clipboard.writeText(text).then(afterCopy).catch(function(){ fallbackCopy(text, afterCopy); });
    } else { fallbackCopy(text, afterCopy); }
  },
  copyComplaint: function(){
    var text = state.draft.letterBody;
    function done(){ showToast('Copied \u2014 paste it into the official portal', 'copy'); }
    if(navigator.clipboard && navigator.clipboard.writeText){
      navigator.clipboard.writeText(text).then(done).catch(function(){ fallbackCopy(text, done); });
    } else { fallbackCopy(text, done); }
  },
  saveComplaint: function(){
    var d = state.draft;
    var record = {
      id: uid('CVX'), category:d.category, city:d.city, area:d.area, pincode:d.pincode,
      authorityName:d.authorityName, letterBody:d.letterBody, imageData:d.imageData,
      status:'Draft', referenceNo:'', createdAt: new Date().toISOString()
    };
    state.complaints.push(record);
    state.draft = null;
    saveState();
    showToast('Saved to My Complaints', 'check');
    location.hash = '#/complaints';
    // Best-effort: also persist to the backend's complaint store. The local
    // save above is the source of truth for this UI either way, so a
    // failure here is silent and never blocks the user.
    fetch(API_BASE+'/complaints', {
      method:'POST', headers:{'Content-Type':'application/json'},
      body: JSON.stringify({category:record.category, city:record.city, area:record.area, pincode:record.pincode, authority:record.authorityName, letter:record.letterBody})
    }).catch(function(){ /* backend offline — local copy is already saved */ });
  },
  addReference: function(id){
    var c = state.complaints.find(function(x){return x.id===id;});
    if(!c) return;
    var ref = prompt('Enter the reference / complaint number you received from the official channel:', c.referenceNo||'');
    if(ref === null) return;
    c.referenceNo = ref.trim();
    if(ref.trim()) c.status = 'Reference added';
    saveState(); render();
  },
  cycleStatus: function(id){
    var order = ['Draft','Sent (unconfirmed)','Reference added','Resolved (self-reported)'];
    var c = state.complaints.find(function(x){return x.id===id;});
    if(!c) return;
    var idx = order.indexOf(c.status);
    c.status = order[(idx+1)%order.length];
    saveState(); render();
    showToast('Status updated to \u201c'+c.status+'\u201d', 'edit');
  },
  deleteComplaint: function(id){
    if(!confirm('Remove this complaint from your device? This cannot be undone.')) return;
    state.complaints = state.complaints.filter(function(x){return x.id!==id;});
    saveState(); render();
  },
  filterExplore: function(id){ exploreFilter = id; render(); },
  jumpToIssue: function(id){
    var el = document.getElementById('issue-'+id);
    if(el){ el.scrollIntoView({behavior:'smooth', block:'center'}); el.style.borderColor='var(--blue)'; setTimeout(function(){el.style.borderColor='';},1200); }
  },
  updateProfile: function(field, val){ state.profile[field] = val; saveState(); },
  toggleConsent: function(){ state.consent.analytics = !state.consent.analytics; saveState(); render(); },
  clearAllData: function(){
    if(!confirm('This clears your profile, drafts and saved complaints from this device. Continue?')) return;
    localStorage.removeItem(STORAGE_KEY);
    state = defaultState();
    showToast('Local data cleared', 'trash');
    location.hash = '#/home';
    render();
  }
};
function fallbackCopy(text, done){
  var ta = document.createElement('textarea');
  ta.value = text; ta.style.position='fixed'; ta.style.opacity='0';
  document.body.appendChild(ta); ta.select();
  try{ document.execCommand('copy'); done(); }catch(e){}
  document.body.removeChild(ta);
}

})();