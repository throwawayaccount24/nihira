console.log("script.js loaded");


const screenStory = document.getElementById("screenStory");
const screenList  = document.getElementById("screenList");
const screenDM    = document.getElementById("screenDM");
const screenReels = document.getElementById("screenReels");
const screenProfile = document.getElementById("screenProfile");
const screenExplore = document.getElementById("screenExplore");
const screenHome = document.getElementById("screenHome");

const listBody = document.getElementById("listBody");

const dmBody = document.getElementById("dmBody");
const dmBack = document.getElementById("dmBack");
const dmPfpBtn = document.getElementById("dmPfpBtn");
const storyInlineFeedback = document.getElementById("storyInlineFeedback");

const storyClose = document.getElementById("storyClose");
const storyReset = document.getElementById("storyReset");
const openReelsBtn = document.getElementById("openReelsBtn");
const openHomeBtn = document.getElementById("openHomeBtn");
const openListBtn = document.getElementById("openListBtn");
const openProfileBtn = document.getElementById("openProfileBtn");
const openExploreBtn = document.getElementById("openExploreBtn");
const reelsBack = document.getElementById("reelsBack");
const reelsFeed = document.getElementById("reelsFeed");
const profileBack = document.getElementById("profileBack");
const profileTabs = document.getElementById("profileTabs");
const profileContent = document.getElementById("profileContent");
const profileMainPfp = document.getElementById("profileMainPfp");
const profileOpenReelsBtn = document.getElementById("profileOpenReelsBtn");
const profileOpenHomeBtn = document.getElementById("profileOpenHomeBtn");
const profileOpenListBtn = document.getElementById("profileOpenListBtn");
const profileOpenExploreBtn = document.getElementById("profileOpenExploreBtn");
const openProfilePfp = document.getElementById("openProfilePfp");
const profileTabPfp = document.getElementById("profileTabPfp");
const exploreOpenReelsBtn = document.getElementById("exploreOpenReelsBtn");
const exploreOpenHomeBtn = document.getElementById("exploreOpenHomeBtn");
const exploreOpenListBtn = document.getElementById("exploreOpenListBtn");
const exploreOpenProfileBtn = document.getElementById("exploreOpenProfileBtn");
const exploreProfilePfp = document.getElementById("exploreProfilePfp");
const exploreGrid = document.getElementById("exploreGrid");
const mediaModal = document.getElementById("mediaModal");
const mediaModalBody = document.getElementById("mediaModalBody");
const mediaModalClose = document.getElementById("mediaModalClose");
const homeOpenReelsBtn = document.getElementById("homeOpenReelsBtn");
const homeOpenListBtn = document.getElementById("homeOpenListBtn");
const homeOpenExploreBtn = document.getElementById("homeOpenExploreBtn");
const homeOpenProfileBtn = document.getElementById("homeOpenProfileBtn");
const homeProfilePfp = document.getElementById("homeProfilePfp");
const homeYourStoryBtn = document.getElementById("homeYourStoryBtn");
const homeRyanStoryBtn = document.getElementById("homeRyanStoryBtn");
const homeYourStoryPfp = document.getElementById("homeYourStoryPfp");
const homeRyanStoryPfp = document.getElementById("homeRyanStoryPfp");
const homePostPfp = document.getElementById("homePostPfp");
const homePostCornerPfp = document.getElementById("homePostCornerPfp");
const homePostImage = document.getElementById("homePostImage");
const homeFeed = document.getElementById("homeFeed");
const notePfpSelf = document.getElementById("notePfpSelf");
const notePfpArsenal = document.getElementById("notePfpArsenal");
const notePfpBarca = document.getElementById("notePfpBarca");


const storyInlineForm  = document.getElementById("storyInlineForm");
const storyInlineInput = document.getElementById("storyInlineInput");

const dmInlineForm  = document.getElementById("dmInlineForm");
const dmInlineInput = document.getElementById("dmInlineInput");


if (!storyInlineForm || !storyInlineInput || !dmInlineForm || !dmInlineInput) {
  console.error("Missing form/input elements. Check your HTML ids.");
}


const MESSI_ID = "leomessi";
const PRINCE_ID = "pr1nc3_pr1nc3";
const MEOWHIWA_ID = "meowhiwa";
const MASON_ID = "masonmount";
const BACH_ID = "bachandarthur";

const RYAN_RED_DOOR_WRONG_REPLIES = [
  "Ignore the fact I'm on instagram, I'm locking in.",
  "No.",
  "Stop talking to me and go find me IRL.",
  "You’re not even close 😭",
  "Try again. (Respectfully).",
  "Nah.",
  "Wrong password twin.",
  "I’m busy. Guess again.",
  "I can't think of any other replies I'm so fucking autistic for you.",
  "Haha no but you lowk pretty or wtv twin.",
  "If you really want help you can prolly ask Prince he always knows where I am."
];

const RYAN_POST_RED_DOOR_WRONG_REPLIES = [
  "you're so cute",
  "hey pretty...",
  "PLEASE DONT BEAT ME 👀👀",
  "im still hiding, keep lookin",
  "youre adorable but still wrong",
];

const RYAN_STELLA_PASSWORD = "I'm with Stella";
const RYAN_STELLA_REPLIES = [
  "DUDE I JUST LEFT HER",
  "I'm gonna go explore a little I promise I'll wait up this time",
];
const RYAN_MASON_HINTS = [
  "go text mason bro he was jus here",
];

const RYAN_PRINCE_HINTS = [
  "If you want help I'm pretty sure Prince always has my location.",
  "Prince found me again.",
  "Prince keeps finding me!!!",
];

const MESSI_RANDOM_SPANISH = [
  "Eres linda.",
  "Por favor dame una oportunidad.",
  "Podemos hacer que funcione.",
  "Ronaldo sucks.",
  "Si necesitas ayuda, pregúntame, Ryan y yo somos muy cercanos..",
];

const PRINCE_FALLBACK_REPLIES = [
  ["I only got Ryan on my mind.", "I know where he is let me know if you need help."],
  ["I lowkey only think about Ryan.", "I know where he is, tell me if you need help."],
  ["Ryan is all I talk about fr.", "I can help if you need it."],
];

const MEOWHIWA_REPLIES = [
  "bros witerally talking to herself",
  "you might be schizo bro",
  "go lock in bum",
  "im cryin ur texting the void rn",
  "get off insta and lock in twin",
];

const MASON_OPENING_LINE = "Call me Mason, 'cause I'm the Mount for you";
const MASON_RANDOM_REPLIES = [
  "Ryan rocks",
  "ryan lowkey the student and I am the master",
  "Ryan is built different",
  "ryan got aura fr",
];

const BACH_OPENING_LINE = "We'd love to have you on our podcast";
const BACH_FIRST_REPLY = "sike lol";

const REEL_VIDEO_SOURCES = [
  "videos/reel01.mp4",
  "videos/reel02.mp4",
  "videos/reel03.mp4",
  "videos/reel04.mp4",
  "videos/reel05.mp4",
  "videos/reel06.mp4",
  "videos/reel07.mp4",
  "videos/reel08.mp4",
  "videos/reel09.mp4",
  "videos/reel10.mp4",
  "videos/reel11.mp4",
  "videos/reel12.mp4",
  "videos/reel13.mp4",
  "videos/reel14.mp4",
  "videos/reel15.mp4",
];

const REEL_META = [
  {
    username: "FoidSlayer2000",
    caption: "Interesting how they released all the epstein files at the asme time as Clav getting framemogged...",
    pfp: "pfps/reels/foidslayer2000.jpg",
  },
  { username: "OsamaBinRussel", caption: "Mashallah", pfp: "pfps/reels/osamabinrussel.jpg" },
  { username: "BabyBoo", caption: "Dwerkin", pfp: "pfps/reels/babyboo.jpg" },
  { username: "lamineyamal", caption: "Put me in chanel", verified: true, pfp: "pfps/reels/lamineyamal.jpg" },
  { username: "IHATENIHIRA", caption: "This was the first reel I've ever sent to you...", pfp: "pfps/reels/ihatenihira.jpg" },
  { username: "SuperSillySeal27", caption: "😛😛😛😛", pfp: "pfps/reels/supersillyseal.jpg" },
  { username: "MessiFanAccount", caption: "RIP Pessi...", pfp: "pfps/reels/messifanaccount.jpg" },
  { username: "VancinIt", caption: "This could be us but you playin twin. #NoSwagGap", pfp: "pfps/reels/vanceinit.jpg" },
  { username: "NIHIRAFANACCOUNT", caption: "SHOUTOUT NIHIRA", pfp: "pfps/reels/nihirafanaccount.jpg" },
  { username: "SuperDuperCooper", caption: "Car in Italian Foot Job or something", pfp: "pfps/reels/superdupercooper.jpg" },
  { username: "ILoveMyGF", caption: "Wanna hangout one day or wtv lol...", pfp: "pfps/reels/ilovemygf.jpg" },
  { username: "Gooner27", caption: "Inshallah Arsenal will fall", pfp: "pfps/reels/gooner27.jpg" },
  { username: "NeymarsLeftTesticle", caption: "Neymar >= Messi >>>>> R*naldo", pfp: "pfps/reels/neymarslefttesticle.jpg" },
  { username: "TrueItalian", caption: "Tried tomato sauce once back in 87", pfp: "pfps/reels/trueitalian.jpg" },
  { username: "SororityPsychology", caption: "Poor girl...", pfp: "pfps/reels/sororitypsychology.jpg" },
];

const REEL_END_ERROR = "sorry youve watched evry reel ever you chronically online fuck...";
const NIHIRA_PROFILE_PFP = "pfps/nihira.jpg";
const PROFILE_REUPLOAD_VIDEO = "videos/repost.mp4";
const PROFILE_TAGGED_IMAGE = "pfps/tagged1.jpg";
const NOTE_ARSENAL_PFP = "pfps/notes/arsenal.jpg";
const NOTE_FCBARCELONA_PFP = "pfps/notes/fcbarcelona.jpg";
const PROFILE_POST_CAPTION = "hopefully we make more memories together twin and have more than like 4 photos together";
const PROFILE_POST_SLIDES = [
  "pfps/posts/post01.jpg",
  "pfps/posts/post02.jpg",
  "pfps/posts/post03.jpg",
  "pfps/posts/post04.jpg",
  "pfps/posts/post05.jpg",
  "pfps/posts/post06.jpg",
  "pfps/posts/post07.jpg",
  "pfps/posts/post08.jpg",
  "pfps/posts/post09.jpg",
  "pfps/posts/post10.jpg",
];
const PROFILE_POST_AUDIO_SRC = "audio/breathe.mp3";
const PROFILE_POST_AUDIO_LABEL = "breathe • Yeat";
const MEOWHIWA_SENT_REEL_SRC = "videos/meowhiwa_sent_reel.mp4";
const HOME_FLORIDA_PFP = "FloridaRocks.jpg";
const HOME_FLORIDA_POST = "florida.jpg";
const EXPLORE_POSTS = [
  { username: "TheCobbleStoneMaster26", caption: "one of these stones are not like the other", src: "pfps/explore/explore01.jpg" },
  { username: "TheCobbleStoneMaster26", caption: "one of these stones are not like the other", src: "pfps/explore/explore02.jpg" },
  { username: "TheCobbleStoneMaster26", caption: "one of these stones are not like the other", src: "pfps/explore/explore03.jpg" },
  { username: "TheCobbleStoneMaster26", caption: "one of these stones are not like the other", src: "pfps/explore/explore04.jpg" },
  { username: "TheCobbleStoneMaster26", caption: "one of these stones are not like the other", src: "pfps/explore/explore05.jpg" },
  { username: "TheCobbleStoneMaster26", caption: "one of these stones are not like the other", src: "pfps/explore/explore06.jpg" },
  { username: "TheCobbleStoneMaster26", caption: "one of these stones are not like the other", src: "pfps/explore/explore07.jpg" },
  { username: "TheCobbleStoneMaster26", caption: "one of these stones are not like the other", src: "pfps/explore/explore08.jpg" },
  { username: "TheCobbleStoneMaster26", caption: "one of these stones are not like the other", src: "pfps/explore/explore09.jpg" },
  { username: "TheCobbleStoneMaster26", caption: "one of these stones are not like the other", src: "pfps/explore/explore10.jpg" },
  { username: "TheCobbleStoneMaster26", caption: "one of these stones are not like the other", src: "pfps/explore/explore11.jpg" },
  { username: "b.netanyahu", caption: "shoutout to my goat Nihira!", verified: true, src: "pfps/explore/explore12.jpg" },
];

let reelsObserver = null;
let reelsAudioUnlocked = false;
let reelsLastEndToastAt = 0;
let reelsBoundaryHandlersBound = false;
let homeBoundaryHandlersBound = false;
let postCarouselIndex = 0;
let postAudioEl = null;

function pickRyanWrongReply(afterRedDoor){
  if (afterRedDoor) return pickOne(RYAN_POST_RED_DOOR_WRONG_REPLIES);
  return pickOne(RYAN_RED_DOOR_WRONG_REPLIES);
}

function applyCirclePfp(el, imagePath, fallbackSeed){
  if (!el) return;
  el.style.backgroundSize = "cover";
  el.style.backgroundPosition = "center";

  const fallbackStyle = avatarStyleFromName(fallbackSeed || "user");
  el.style.backgroundImage = "";
  el.style.background = fallbackStyle;
  if (!imagePath) return;

  const img = new Image();
  img.onload = () => {
    el.style.background = "";
    el.style.backgroundImage = `url(${imagePath})`;
  };
  img.onerror = () => {
    el.style.backgroundImage = "";
    el.style.background = fallbackStyle;
  };
  img.src = imagePath;
}





/* const openDmReply = document.getElementById("openDmReply");
const dmDrawer = document.getElementById("dmDrawer");
const dmForm = document.getElementById("dmForm");
const dmInput = document.getElementById("dmInput");
const dmFeedback = document.getElementById("dmFeedback");
const closeDmDrawer = document.getElementById("closeDmDrawer"); */

const storyPfp = document.getElementById("storyPfp");
/* const openStoryReply = document.getElementById("openStoryReply");
const storyDrawer = document.getElementById("storyDrawer");
const storyForm = document.getElementById("storyForm");
const storyInput = document.getElementById("storyInput");
const storyFeedback = document.getElementById("storyFeedback");
const closeStoryDrawer = document.getElementById("closeStoryDrawer"); */



const hintText = document.getElementById("hintText");
const storyMeta = document.getElementById("storyMeta");

const STORAGE_KEY = "ig_scavenger_state_v4";


/* DM list */  
const DM_LIST = [
  { id: "ryan", username: "ryan._.shahbaba", display: "Ryan", preview: "Sent 8m ago", pfp: "pfps/dms/ryan.jpg" },
  { id: "leomessi", username: "leomessi", display: "leomessi", verified: true, preview: "New year new us for real...", pfp: "pfps/dms/leomessi.jpg" },
  { id: "masonmount", username: "masonmount", display: "masonmount", verified: true, preview: MASON_OPENING_LINE, pfp: "pfps/dms/masonmount.jpg" },
  { id: "meowhiwa", username: "meowhiwa", display: "meowhiwa", preview: "sent a reel 5 hours ago", pfp: "pfps/dms/meowhiwa.jpg" },
  { id: "bachandarthur", username: "bachandarthur", display: "bachandarthur", preview: BACH_OPENING_LINE, pfp: "pfps/dms/bachandarthur.jpg" },
  { id: "pr1nc3_pr1nc3", username: "pr1nc3_pr1nc3", display: "pr1nc3_pr1nc3", preview: "sent 7 weeks ago (loser)", pfp: "pfps/dms/pr1nc3_pr1nc3.jpg" },
];
const DM_BASE_ORDER = DM_LIST.reduce((acc, item, i) => {
  acc[item.id] = i;
  return acc;
}, {});


const PRECHAT = [
  { from: "them", text: "Hey" },
  { from: "me", text: "Bro lose this number" },
  { from: "them", text: "Aw..." },
  { from: "me", text: "Loser bum ahh really tryna slide into my dms..." },
];

const STORIES = [
  {
    bg: "linear-gradient(135deg, #ff2bd6, #ff7a2f)",
    hint: "Hey twin. \n I'm SOOOO lonely. I'm straight up sittin here playing Minecraft alone... \n If only I had someone who wanted to join me haha 👀👀👀👀",
    storyPassword: "I'm at the couch",
    nextPassword: "I'm at Red Door Basement.",
    ryanReply: [
      "Sorry you just missed me. I'm not really sure if I want to hangout right now...",
      "I just watched clav get framemogged by this ASU frat leader, I think I'm gonna lock in on Physics 11.",
      "Let me know if you find out where I am twin. If you're nearby I might join (I prolly won't tho)"
    ],
    nextReply: [
      "Shit you found my note already?",
      "I'm done locking in. I'm gonna watch reels with another girl instead...",
      "If you wanna kill time too, go scroll reels too lol",
    ],
  },
];

let state = loadState();
let idx = clamp(state.idx ?? 0, 0, STORIES.length - 1);
let activeThreadId = state.activeThreadId || "ryan";

/* ===== init ===== */
renderList();
renderReels();
renderStory();
renderProfile();
renderExplore();
renderHome();
const ryan = DM_LIST.find(x => x.id === "ryan");
applyCirclePfp(storyPfp, ryan?.pfp, "ryan");
applyCirclePfp(profileMainPfp, NIHIRA_PROFILE_PFP, "nihira");
applyCirclePfp(notePfpSelf, NIHIRA_PROFILE_PFP, "nihira");
applyCirclePfp(notePfpArsenal, NOTE_ARSENAL_PFP, "arsenal");
applyCirclePfp(notePfpBarca, NOTE_FCBARCELONA_PFP, "fcbarcelona");
applyCirclePfp(openProfilePfp, NIHIRA_PROFILE_PFP, "nihira");
applyCirclePfp(profileTabPfp, NIHIRA_PROFILE_PFP, "nihira");
applyCirclePfp(exploreProfilePfp, NIHIRA_PROFILE_PFP, "nihira");
applyCirclePfp(homeProfilePfp, NIHIRA_PROFILE_PFP, "nihira");
openThread(activeThreadId);


/* start on story always */
switchScreen(state.view || "story");

function goToStory(fromView){
  state = { ...state, returnView: fromView };
  saveState(state);
  switchScreen("story");
}

/* open story from pfp click (both places) */
storyPfp.addEventListener("click", () => goToStory("story")); // already on story

dmPfpBtn.addEventListener("click", () => {
  if (activeThreadId !== "ryan") return;
  goToStory("dm");
});

storyClose.addEventListener("click", () => {
  const backTo = state.returnView || "dm";
  switchScreen(backTo);
});


function getThread(id){
  const threads = (state && state.threads) ? state.threads : {};
  const t = threads[id];
  return Array.isArray(t) ? t : [];
}

function getThreadActivityMap(){
  return (state && state.threadActivity) ? state.threadActivity : {};
}

function setThreadActivityMap(map){
  state = { ...state, threadActivity: map };
  saveState(state);
}

function markThreadActive(id){
  const map = getThreadActivityMap();
  map[id] = Date.now();
  setThreadActivityMap(map);
}

function previewForThread(item){
  if (item.id === BACH_ID) {
    const t = getThread(item.id);
    const hasSeen = t.some(msg => msg && msg.type === "seenReceipt");
    if (hasSeen) return "seen just now";
  }
  const t = getThread(item.id);
  for (let i = t.length - 1; i >= 0; i -= 1) {
    const msg = t[i];
    if (msg && msg.type === "bubble" && msg.side === "them" && msg.text) {
      return msg.text;
    }
  }
  return item.preview;
}

function setThread(id, arr){
  const threads = (state && state.threads) ? state.threads : {};
  threads[id] = arr;
  state = { ...state, threads };
  saveState(state);
}

function pushThreadFor(id, item, opts = {}){
  const { markActive = true } = opts;
  const t = getThread(id);
  t.push(item);
  setThread(id, t);
  if (markActive) {
    markThreadActive(id);
  }
}


/* ===== list ===== */
function renderList(){
  listBody.innerHTML = "";

  const activity = getThreadActivityMap();
  const sortedList = [...DM_LIST].sort((a, b) => {
    const ta = activity[a.id] || 0;
    const tb = activity[b.id] || 0;
    if (tb !== ta) return tb - ta;
    return (DM_BASE_ORDER[a.id] ?? 0) - (DM_BASE_ORDER[b.id] ?? 0);
  });

  sortedList.forEach(item => {
    const row = document.createElement("div");
    row.className = "threadRow";

    const pfp = document.createElement("div");
    pfp.className = "pfp";
    pfp.classList.toggle("ring", item.id === "ryan");
    applyCirclePfp(pfp, item.pfp, item.username);


    const text = document.createElement("div");
    text.className = "threadText";

    const nameLine = document.createElement("div");
    nameLine.className = "threadNameLine";

    const uname = document.createElement("div");
    uname.textContent = item.username;
    nameLine.appendChild(uname);

    if (item.verified) {
      const badge = document.createElement("div");
      badge.className = "badge";
      badge.textContent = "✓";
      nameLine.appendChild(badge);
    }

    const sub = document.createElement("div");
    sub.className = "threadSub";
    sub.textContent = previewForThread(item);

    text.appendChild(nameLine);
    text.appendChild(sub);

    row.appendChild(pfp);
    row.appendChild(text);

    row.addEventListener("click", () => {
      openThread(item.id);
      state = { ...state, view: "dm", activeThreadId: item.id };
      saveState(state);
      switchScreen("dm");
    });


    listBody.appendChild(row);
  });
}

/* ===== story ===== */
function renderStory(){
  const s = STORIES[idx];
  screenStory.style.background = s.bg;
  hintText.textContent = s.hint;
  storyMeta.textContent = `Story • ${idx + 1}/${STORIES.length}`;
}

/* ===== thread ===== */
function openThread(id){
  activeThreadId = id;
  state = { ...state, activeThreadId: id };
  saveState(state);

  if (id === MESSI_ID) {
    ensureMessiThreadSeeded();
  }
  if (id === PRINCE_ID) {
    ensurePrinceThreadSeeded();
  }
  if (id === MASON_ID) {
    ensureMasonThreadSeeded();
  }
  if (id === BACH_ID) {
    ensureBachThreadSeeded();
  }
  if (id === MEOWHIWA_ID) {
    ensureMeowhiwaThreadSeeded();
  }

  // update header text in DM screen
  const person = DM_LIST.find(x => x.id === id) || { display: id, username: id };

  document.querySelector(".dmTitle").textContent = person.display || person.username;
  document.querySelector(".dmHandle").textContent = person.username || id;

  // profile pic
  const headerPfp = document.getElementById("dmHeaderPfp");
  if (headerPfp) {
    applyCirclePfp(headerPfp, person.pfp, person.username);
  }

  renderThread();

  // Only Ryan has story ring + click
  const isRyan = (id === "ryan");

  const headerPfpWrap = document.getElementById("dmPfpBtn");

  if (headerPfp) {
    headerPfp.classList.toggle("ring", isRyan);
  }

  headerPfpWrap.style.pointerEvents = isRyan ? "auto" : "none";
  headerPfpWrap.style.opacity = isRyan ? "1" : "0.9";

}


/* ===== back ===== */
dmBack.addEventListener("click", () => {
  saveState({ ...state, view: "list", idx });
  switchScreen("list");
});



dmInlineForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const raw = dmInlineInput.value.trim();
  const msg = normalize(raw);
  if (!msg) return;

  dmInlineInput.value = "";
  pushThread({ type: "bubble", side: "me", text: raw });

  // ===== Ryan special scavenger behavior =====
  if (activeThreadId === "ryan") {
    const normalized = normalizeForCheck(raw);
    const redDoorExpected = normalizeForCheck(STORIES[0].nextPassword);
    const stellaExpected = normalizeForCheck(RYAN_STELLA_PASSWORD);
    const redDoorSolved = Boolean(state.redDoorSolved);
    const stellaSolved = Boolean(state.stellaSolved);

    // Stage 1: solve Red Door
    if (!redDoorSolved) {
      if (normalized === redDoorExpected) {
        state = { ...state, redDoorSolved: true, stellaWrongGuessCount: 0 };
        saveState(state);

        const typingNode = addTyping(true);
        setTimeout(() => {
          typingNode.remove();
          const replies = pickReplySequence(STORIES[0].nextReply);

          async function sendReplies(){
            for (const line of replies){
              const tnode = addTyping(true);
              await new Promise(r => setTimeout(r, 700));
              tnode.remove();
              pushThread({ type: "bubble", side: "them", text: line });
              renderThread();
              await new Promise(r => setTimeout(r, 250));
            }
          }

          sendReplies();
          renderThread();
        }, 900);
      } else {
        const wrongCount = (state.ryanWrongGuessCount || 0) + 1;
        state = { ...state, ryanWrongGuessCount: wrongCount };
        saveState(state);

        const typingNode = addTyping(true);
        setTimeout(() => {
          typingNode.remove();
          pushThread({ type: "bubble", side: "them", text: pickOne(RYAN_RED_DOOR_WRONG_REPLIES) });
          if (wrongCount % 5 === 0) {
            pushThread({ type: "bubble", side: "them", text: pickOne(RYAN_PRINCE_HINTS) });
          }
          renderThread();
        }, 600);
      }
      return;
    }

    // Stage 2: solve Stella
    if (!stellaSolved) {
      if (normalized === stellaExpected) {
        state = { ...state, stellaSolved: true };
        saveState(state);

        const typingNode = addTyping(true);
        setTimeout(() => {
          typingNode.remove();

          async function sendStellaReplies(){
            for (const line of RYAN_STELLA_REPLIES){
              const tnode = addTyping(true);
              await new Promise(r => setTimeout(r, 650));
              tnode.remove();
              pushThread({ type: "bubble", side: "them", text: line });
              renderThread();
              await new Promise(r => setTimeout(r, 250));
            }
          }

          sendStellaReplies();
          renderThread();
        }, 850);
      } else {
        const stellaWrongCount = (state.stellaWrongGuessCount || 0) + 1;
        state = { ...state, stellaWrongGuessCount: stellaWrongCount };
        saveState(state);

        const typingNode = addTyping(true);
        setTimeout(() => {
          typingNode.remove();
          pushThread({ type: "bubble", side: "them", text: pickOne(RYAN_POST_RED_DOOR_WRONG_REPLIES) });
          if (stellaWrongCount % 5 === 0) {
            pushThread({ type: "bubble", side: "them", text: pickOne(RYAN_MASON_HINTS) });
          }
          renderThread();
        }, 600);
      }
      return;
    }

    // Stage 3+: after Stella solved, keep playful replies
    const stellaWrongCount = (state.stellaWrongGuessCount || 0) + 1;
    state = { ...state, stellaWrongGuessCount: stellaWrongCount };
    saveState(state);

    const typingNode = addTyping(true);
    setTimeout(() => {
      typingNode.remove();
      pushThread({ type: "bubble", side: "them", text: pickOne(RYAN_POST_RED_DOOR_WRONG_REPLIES) });
      if (stellaWrongCount % 5 === 0) {
        pushThread({ type: "bubble", side: "them", text: pickOne(RYAN_MASON_HINTS) });
      }
      renderThread();
    }, 600);
    return;
  }

  // ===== Prince helper thread =====
  if (activeThreadId === PRINCE_ID) {
    const typingNode = addTyping(true);
    setTimeout(() => {
      typingNode.remove();
      const replyLines = getPrinceReplies(msg);
      for (const t of replyLines) {
        pushThread({ type: "bubble", side: "them", text: t });
      }
      renderThread();
    }, 650);
    return;
  }

  // ===== Messi helper thread =====
  if (activeThreadId === MESSI_ID) {
    const typingNode = addTyping(true);
    setTimeout(() => {
      typingNode.remove();
      const replyLines = getMessiReplies(msg);
      for (const t of replyLines) {
        pushThread({ type: "bubble", side: "them", text: t });
      }
      renderThread();
    }, 650);
    return;
  }

  // ===== Mason helper thread =====
  if (activeThreadId === MASON_ID) {
    const typingNode = addTyping(true);
    setTimeout(() => {
      typingNode.remove();
      const replyLines = getMasonReplies(msg);
      for (const t of replyLines) {
        pushThread({ type: "bubble", side: "them", text: t });
      }
      renderThread();
    }, 650);
    return;
  }

  // ===== Bach and Arthur thread =====
  if (activeThreadId === BACH_ID) {
    const thread = getThread(BACH_ID);
    const alreadyDidFirstReply = thread.some(item =>
      item &&
      item.type === "bubble" &&
      item.side === "them" &&
      normalize(item.text) === normalize(BACH_FIRST_REPLY)
    );

    if (!alreadyDidFirstReply) {
      const typingNode = addTyping(true);
      setTimeout(() => {
        typingNode.remove();
        pushThread({ type: "bubble", side: "them", text: BACH_FIRST_REPLY });
        renderThread();
      }, 500);
    } else {
      setTimeout(() => {
        pushThread({ type: "seenReceipt", text: "seen" });
        renderThread();
      }, 220);
    }
    return;
  }

  // ===== meowhiwa thread =====
  if (activeThreadId === MEOWHIWA_ID) {
    const typingNode = addTyping(true);
    setTimeout(() => {
      typingNode.remove();
      pushThread({ type: "bubble", side: "them", text: pickOne(MEOWHIWA_REPLIES) });
      renderThread();
    }, 650);
    return;
  }

  // ===== Everyone else: generic auto reply (optional) =====
  const typingNode = addTyping(true);
  setTimeout(() => {
    typingNode.remove();
    pushThread({ type: "bubble", side: "them", text: pickOne([
      "???",
      "lol",
      "im busy",
      "send that again",
      "ok",
      "nah",
    ])});
    renderThread();
  }, 600);
});

openReelsBtn.addEventListener("click", () => {
  switchScreen("reels");
});

if (openHomeBtn) {
  openHomeBtn.addEventListener("click", () => {
    switchScreen("home");
  });
}

if (openListBtn) {
  openListBtn.addEventListener("click", () => {
    switchScreen("list");
  });
}

reelsBack.addEventListener("click", () => {
  switchScreen("list");
});

openProfileBtn.addEventListener("click", () => {
  switchScreen("profile");
});

if (openExploreBtn) {
  openExploreBtn.addEventListener("click", () => {
    if (!state.stellaSolved) return;
    switchScreen("explore");
  });
}

profileBack.addEventListener("click", () => {
  switchScreen("list");
});

profileOpenReelsBtn.addEventListener("click", () => {
  switchScreen("reels");
});

if (profileOpenListBtn) {
  profileOpenListBtn.addEventListener("click", () => {
    switchScreen("list");
  });
}

if (profileOpenExploreBtn) {
  profileOpenExploreBtn.addEventListener("click", () => {
    if (!state.stellaSolved) return;
    switchScreen("explore");
  });
}

if (profileOpenHomeBtn) {
  profileOpenHomeBtn.addEventListener("click", () => {
    switchScreen("home");
  });
}

if (exploreOpenHomeBtn) {
  exploreOpenHomeBtn.addEventListener("click", () => {
    switchScreen("home");
  });
}

if (exploreOpenReelsBtn) {
  exploreOpenReelsBtn.addEventListener("click", () => {
    switchScreen("reels");
  });
}
if (exploreOpenListBtn) {
  exploreOpenListBtn.addEventListener("click", () => {
    switchScreen("list");
  });
}
if (exploreOpenProfileBtn) {
  exploreOpenProfileBtn.addEventListener("click", () => {
    switchScreen("profile");
  });
}

if (homeOpenReelsBtn) {
  homeOpenReelsBtn.addEventListener("click", () => switchScreen("reels"));
}
if (homeOpenListBtn) {
  homeOpenListBtn.addEventListener("click", () => switchScreen("list"));
}
if (homeOpenExploreBtn) {
  homeOpenExploreBtn.addEventListener("click", () => {
    if (!state.stellaSolved) return;
    switchScreen("explore");
  });
}
if (homeOpenProfileBtn) {
  homeOpenProfileBtn.addEventListener("click", () => switchScreen("profile"));
}
if (homeRyanStoryBtn) {
  homeRyanStoryBtn.addEventListener("click", () => switchScreen("story"));
}
if (homeYourStoryBtn) {
  homeYourStoryBtn.addEventListener("click", () => switchScreen("profile"));
}

if (profileTabs) {
  profileTabs.addEventListener("click", (e) => {
    const target = e.target.closest(".profileTab");
    if (!target) return;
    const tab = target.dataset.tab;
    state = { ...state, profileTab: tab };
    saveState(state);
    renderProfile();
  });
}

if (mediaModalClose) {
  mediaModalClose.addEventListener("click", closeMediaModal);
}
if (mediaModal) {
  mediaModal.addEventListener("click", (e) => {
    if (e.target === mediaModal) closeMediaModal();
  });
}
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeMediaModal();
});






storyInlineForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const raw = storyInlineInput.value.trim();
  const msg = normalizeForCheck(raw);
  if (!msg) return;

  const correct = normalizeForCheck(STORIES[idx].storyPassword);

  if (msg === correct) {
    await showToast("Sent", 550);
    storyInlineInput.value = "";

    // record context
    state = { ...state, lastStoryIdx: idx, idx };
    saveState(state);

    // persist into RYAN thread (not whoever is currently active)
    pushThreadFor("ryan", { type: "storyReplyCard", bg: STORIES[idx].bg, storyText: STORIES[idx].hint });
    pushThreadFor("ryan", { type: "bubble", side: "me", text: raw });

    const replies = pickReplySequence(STORIES[idx].ryanReply);
    for (const t of asMessages(replies)) {
      pushThreadFor("ryan", { type: "bubble", side: "them", text: t });
    }

    // now actually move to Ryan DM
    openThread("ryan");
    switchScreen("dm");
    return;


  }

  await showToast("Message could not be sent", 850);
  storyInlineInput.select();
});




/* ===== screen switch ===== */
function switchScreen(which){
  if (which === "explore" && !state.stellaSolved) {
    which = "list";
  }
  if (which !== "reels") {
    pauseAllReelAudioAndVideo();
  }
  if (which !== "profile") {
    closeMediaModal();
  }

  state = { ...state, view: which };
  saveState(state);

  screenStory.classList.remove("active");
  screenList.classList.remove("active");
  screenDM.classList.remove("active");
  screenReels.classList.remove("active");
  screenProfile.classList.remove("active");
  screenExplore.classList.remove("active");
  screenHome.classList.remove("active");

  if (which === "dm") screenDM.classList.add("active");
  if (which === "list") {
    renderList();
    screenList.classList.add("active");
  }
  if (which === "story") screenStory.classList.add("active");
  if (which === "reels") screenReels.classList.add("active");
  if (which === "profile") screenProfile.classList.add("active");
  if (which === "explore") screenExplore.classList.add("active");
  if (which === "home") screenHome.classList.add("active");
}


/* ===== DM helpers ===== */

function pickOne(arr){
  return arr[Math.floor(Math.random() * arr.length)];
}

function pickReplySequence(reply){
  // reply can be:
  // - string
  // - [string, string]
  // - [[string,string], [string], ...]
  if (Array.isArray(reply) && reply.length && Array.isArray(reply[0])) {
    return pickOne(reply);
  }
  return asMessages(reply);
}


function asMessages(x){
  if (Array.isArray(x)) return x.filter(Boolean);
  return x ? [x] : [];
}

function pushBubbles(side, lines){
  for (const t of asMessages(lines)) {
    pushThread({ type: "bubble", side, text: t });
  }
}

function getActiveThreadPerson(){
  return DM_LIST.find(x => x.id === activeThreadId) || { username: activeThreadId, pfp: "" };
}


function addBubble(side, text, themHasPfp){
  const row = document.createElement("div");
  row.className = `row ${side}`;

  if (side === "them" && themHasPfp) {
    const p = document.createElement("div");
    p.className = "pfpBubble";
    const person = getActiveThreadPerson();
    applyCirclePfp(p, person.pfp, person.username);
    row.appendChild(p);
  }

  const bubble = document.createElement("div");
  bubble.className = "bubble";
  bubble.textContent = text;

  row.appendChild(bubble);
  dmBody.appendChild(row);
  scrollDMToBottom();
}

function addTyping(withPfp){
  const row = document.createElement("div");
  row.className = "row them";

  if (withPfp) {
    const p = document.createElement("div");
    p.className = "pfpBubble";
    const person = getActiveThreadPerson();
    applyCirclePfp(p, person.pfp, person.username);
    row.appendChild(p);
  }

  const bubble = document.createElement("div");
  bubble.className = "bubble typing";
  bubble.innerHTML = `<span class="dot"></span><span class="dot"></span><span class="dot"></span>`;
  row.appendChild(bubble);

  dmBody.appendChild(row);
  scrollDMToBottom();
  return row;
}

function scrollDMToBottom(){
  dmBody.scrollTop = dmBody.scrollHeight;
}

/* drawers */
function openDrawer(drawerEl, inputEl){
  drawerEl.classList.add("open");
  drawerEl.setAttribute("aria-hidden", "false");
  setTimeout(() => inputEl.focus(), 40);
}
function closeDrawer(drawerEl){
  drawerEl.classList.remove("open");
  drawerEl.setAttribute("aria-hidden", "true");
}

/* utils */
function normalize(x){
  return (x || "").trim().toLowerCase().replace(/\s+/g, " ");
}
function normalizeForCheck(x){
  return normalize(x)
    .replace(/[’']/g, "")
    .replace(/[.,!?]/g, "");
}
function clamp(x,a,b){ return Math.max(a, Math.min(b, x)); }

function loadState(){
  try{
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  }catch{
    return {};
  }
}
function saveState(s){
  state = s;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(s));
}

function addStoryReplyOnRight(bg, storyText){
  const row = document.createElement("div");
  row.className = "row me";

  const card = document.createElement("div");
  card.className = "storyPreview";

  const thumb = document.createElement("div");
  thumb.className = "thumb";
  thumb.style.background = bg;

  const text = document.createElement("div");
  text.className = "storyTextOverlay";
  text.textContent = storyText;

  card.appendChild(thumb);
  card.appendChild(text);

  // clickable to return to story
  card.style.cursor = "pointer";
  card.addEventListener("click", () => switchScreen("story"));

  row.appendChild(card);
  dmBody.appendChild(row);
  scrollDMToBottom();
}

function addSeenReceipt(text = "seen"){
  const row = document.createElement("div");
  row.className = "seenRow";
  row.textContent = text;
  dmBody.appendChild(row);
  scrollDMToBottom();
}

function addReelShareOnRight(src){
  const row = document.createElement("div");
  row.className = "row me";

  const card = document.createElement("button");
  card.className = "reelShareCard";
  card.type = "button";

  const video = document.createElement("video");
  video.className = "reelShareThumb";
  video.src = src;
  video.muted = true;
  video.playsInline = true;
  video.preload = "metadata";

  const play = document.createElement("div");
  play.className = "reelSharePlay";
  play.textContent = "▶";

  card.appendChild(video);
  card.appendChild(play);

  card.addEventListener("click", () => {
    openMediaModal("video", src, { reelLike: true });
  });

  row.appendChild(card);
  dmBody.appendChild(row);
  scrollDMToBottom();
}

function resetGame(){
  // wipe storage
  localStorage.removeItem(STORAGE_KEY);

  // reset runtime state
  state = {};
  idx = 0;

  renderStory();
  renderList();
  renderProfile();
  renderThread();
  

  switchScreen("story");
}
storyReset.addEventListener("click", resetGame);


const toastEl = document.getElementById("toast");

function showToast(text, ms=650){
  toastEl.textContent = text;
  toastEl.classList.add("show");
  return new Promise(res => {
    setTimeout(() => {
      toastEl.classList.remove("show");
      res();
    }, ms);
  });
}



function pushThread(item){
  pushThreadFor(activeThreadId, item);
}

function ensurePrinceThreadSeeded(){
  const t = getThread(PRINCE_ID);
  const hasSeed = t.some(item =>
    item &&
    item.type === "bubble" &&
    item.side === "me" &&
    normalize(item.text) === normalize("PLEASE PRINCE I NEED YOU!")
  );

  if (hasSeed) return;
  pushThreadFor(PRINCE_ID, { type: "bubble", side: "me", text: "PLEASE PRINCE I NEED YOU!" }, { markActive: false });
}

function ensureMessiThreadSeeded(){
  const t = getThread(MESSI_ID);
  const hasSeed = t.some(item =>
    item &&
    item.type === "bubble" &&
    item.side === "them" &&
    normalize(item.text) === normalize("New year new us for real...")
  );

  if (hasSeed) return;
  pushThreadFor(MESSI_ID, { type: "bubble", side: "them", text: "New year new us for real..." }, { markActive: false });
}

function ensureMasonThreadSeeded(){
  const t = getThread(MASON_ID);
  const hasSeed = t.some(item =>
    item &&
    item.type === "bubble" &&
    item.side === "them" &&
    normalize(item.text) === normalize(MASON_OPENING_LINE)
  );

  if (hasSeed) return;
  pushThreadFor(MASON_ID, { type: "bubble", side: "them", text: MASON_OPENING_LINE }, { markActive: false });
}

function ensureBachThreadSeeded(){
  const t = getThread(BACH_ID);
  const hasSeed = t.some(item =>
    item &&
    item.type === "bubble" &&
    item.side === "them" &&
    normalize(item.text) === normalize(BACH_OPENING_LINE)
  );

  if (hasSeed) return;
  pushThreadFor(BACH_ID, { type: "bubble", side: "them", text: BACH_OPENING_LINE }, { markActive: false });
}

function ensureMeowhiwaThreadSeeded(){
  const t = getThread(MEOWHIWA_ID);
  const hasSeed = t.some(item =>
    item &&
    item.type === "reelShareCard" &&
    item.side === "me" &&
    normalize(item.src) === normalize(MEOWHIWA_SENT_REEL_SRC)
  );

  if (hasSeed) return;
  pushThreadFor(MEOWHIWA_ID, { type: "reelShareCard", side: "me", src: MEOWHIWA_SENT_REEL_SRC }, { markActive: false });
}

function getMessiReplies(msg){
  if (msg.includes("help")) {
    return [
      "Eres un 10/10, como mi jersey y como los reels que veo cada dia.",
    ];
  }

  return [pickOne(MESSI_RANDOM_SPANISH)];
}

function getPrinceReplies(msg){
  if (msg.includes("help")) {
    return [
      "Help you say?",
      "I hear Ryan is pretty hungry these times of day",
    ];
  }

  if (msg.includes("ryan")) {
    return [
      "Ryan you say?",
      "I lowkey think he might be autistic and needs some company",
    ];
  }

  return pickOne(PRINCE_FALLBACK_REPLIES);
}

function getMasonReplies(msg){
  if (msg.includes("help")) {
    return ["Ryan and I were checkin out this weird ass tree"];
  }
  return [pickOne(MASON_RANDOM_REPLIES)];
}

function formatCompact(n){
  if (n < 1000) return String(n);
  if (n < 10000) return `${(n / 1000).toFixed(1).replace(/\.0$/, "")}K`;
  if (n < 1000000) return `${Math.round(n / 1000)}K`;
  return `${(n / 1000000).toFixed(1).replace(/\.0$/, "")}M`;
}

function reelStatsForIndex(i){
  const base = i + 1;
  const likes = 700 + ((base * 7919) % 97000);
  const comments = 11 + ((base * 97) % 2400);
  const shares = 4 + ((base * 41) % 650);
  return {
    likes: formatCompact(likes),
    comments: formatCompact(comments),
    shares: formatCompact(shares),
  };
}

function avatarStyleFromName(name){
  let hash = 0;
  for (let i = 0; i < name.length; i += 1) {
    hash = ((hash << 5) - hash) + name.charCodeAt(i);
    hash |= 0;
  }
  const hue = Math.abs(hash) % 360;
  const hue2 = (hue + 42) % 360;
  return `linear-gradient(135deg, hsl(${hue} 72% 58%), hsl(${hue2} 72% 52%))`;
}

function initialsFromName(name){
  const cleaned = (name || "").replace(/[^A-Za-z0-9]+/g, " ").trim();
  if (!cleaned) return "?";
  const parts = cleaned.split(/\s+/).filter(Boolean);
  if (parts.length === 1) {
    return parts[0].slice(0, 2).toUpperCase();
  }
  return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
}

function maybeShowReelEndError(){
  const atEnd = reelsFeed.scrollTop + reelsFeed.clientHeight >= reelsFeed.scrollHeight - 4;
  if (!atEnd) return;
  maybeShowReelEndErrorToast();
}

function maybeShowReelEndErrorToast(){
  const now = Date.now();
  if (now - reelsLastEndToastAt < 1200) return;
  reelsLastEndToastAt = now;
  showToast(REEL_END_ERROR, 1300);
}

function renderReels(){
  if (!reelsFeed) return;
  reelsFeed.innerHTML = "";
  if (reelsObserver) {
    reelsObserver.disconnect();
    reelsObserver = null;
  }

  reelsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const video = entry.target;
      if (!(video instanceof HTMLVideoElement)) return;
      if (entry.isIntersecting && entry.intersectionRatio > 0.7) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, { threshold: [0.7] });

  const unlockReelsAudio = () => {
    if (reelsAudioUnlocked) return;
    reelsAudioUnlocked = true;
    reelsFeed.querySelectorAll("video").forEach(v => {
      v.muted = false;
    });
  };
  reelsFeed.addEventListener("click", unlockReelsAudio, { once: true });
  if (!reelsBoundaryHandlersBound) {
    reelsBoundaryHandlersBound = true;

    reelsFeed.addEventListener("wheel", (e) => {
      if (e.deltaY > 8) maybeShowReelEndError();
    }, { passive: true });

    let touchStartY = 0;
    reelsFeed.addEventListener("touchstart", (e) => {
      const touch = e.changedTouches && e.changedTouches[0];
      touchStartY = touch ? touch.clientY : 0;
    }, { passive: true });
    reelsFeed.addEventListener("touchend", (e) => {
      const touch = e.changedTouches && e.changedTouches[0];
      const touchEndY = touch ? touch.clientY : 0;
      if (touchStartY - touchEndY > 18) maybeShowReelEndError();
    }, { passive: true });
  }

  REEL_VIDEO_SOURCES.forEach((src, i) => {
    const meta = REEL_META[i] || {
      username: `user${i + 1}`,
      caption: `Reel ${i + 1}`,
      verified: false,
    };
    const stats = reelStatsForIndex(i);

    const card = document.createElement("div");
    card.className = "reelCard";

    const video = document.createElement("video");
    video.className = "reelVideo";
    video.src = src;
    video.muted = !reelsAudioUnlocked;
    video.loop = true;
    video.playsInline = true;
    video.preload = "metadata";

    const info = document.createElement("div");
    info.className = "reelInfo";

    const authorRow = document.createElement("div");
    authorRow.className = "reelAuthorRow";

    const pfp = document.createElement("div");
    pfp.className = "reelPfp";
    pfp.style.background = avatarStyleFromName(meta.username);
    const initials = document.createElement("span");
    initials.className = "reelPfpInitials";
    initials.textContent = initialsFromName(meta.username);
    pfp.appendChild(initials);
    if (meta.pfp) {
      const pfpImg = document.createElement("img");
      pfpImg.className = "reelPfpImg";
      pfpImg.alt = `${meta.username} profile photo`;
      pfpImg.src = meta.pfp;
      pfpImg.addEventListener("load", () => {
        initials.style.display = "none";
      });
      pfpImg.addEventListener("error", () => {
        pfpImg.remove();
        pfp.style.background = avatarStyleFromName(meta.username);
        initials.style.display = "";
      });
      pfp.appendChild(pfpImg);
    }

    const userWrap = document.createElement("div");
    userWrap.className = "reelUserWrap";

    const userLine = document.createElement("div");
    userLine.className = "reelUserLine";

    const username = document.createElement("span");
    username.className = "reelUsername";
    username.textContent = meta.username;
    userLine.appendChild(username);

    if (meta.verified) {
      const badge = document.createElement("span");
      badge.className = "reelVerified";
      badge.textContent = "✓";
      userLine.appendChild(badge);
    }

    const caption = document.createElement("div");
    caption.className = "reelCaption";
    caption.textContent = meta.caption;

    userWrap.appendChild(userLine);
    userWrap.appendChild(caption);
    authorRow.appendChild(pfp);
    authorRow.appendChild(userWrap);
    info.appendChild(authorRow);

    const actions = document.createElement("div");
    actions.className = "reelActions";
    actions.innerHTML = `
      <div class="reelAction"><span class="reelIcon">♡</span><span class="reelCount">${stats.likes}</span></div>
      <div class="reelAction"><span class="reelIcon">💬</span><span class="reelCount">${stats.comments}</span></div>
      <div class="reelAction"><span class="reelIcon">↗</span><span class="reelCount">${stats.shares}</span></div>
    `;

    card.appendChild(video);
    card.appendChild(info);
    card.appendChild(actions);
    reelsFeed.appendChild(card);
    reelsObserver.observe(video);
  });
}

function closeMediaModal(){
  if (!mediaModal || !mediaModalBody) return;
  if (postAudioEl) {
    postAudioEl.pause();
    postAudioEl.currentTime = 0;
    postAudioEl = null;
  }
  mediaModalBody.innerHTML = "";
  mediaModal.classList.remove("open");
  mediaModal.setAttribute("aria-hidden", "true");
}

function pauseAllReelAudioAndVideo(){
  if (!reelsFeed) return;
  reelsFeed.querySelectorAll("video").forEach((video) => {
    video.pause();
  });
}

function renderPostCarousel(){
  if (!mediaModalBody || !PROFILE_POST_SLIDES.length) return;
  const slideSrc = PROFILE_POST_SLIDES[postCarouselIndex];
  mediaModalBody.innerHTML = "";

  const head = document.createElement("div");
  head.className = "carouselHead";
  head.textContent = `nihirapadidam • ${PROFILE_POST_AUDIO_LABEL}`;

  const wrap = document.createElement("div");
  wrap.className = "carouselWrap";

  const index = document.createElement("div");
  index.className = "carouselIndex";
  index.textContent = `${postCarouselIndex + 1}/${PROFILE_POST_SLIDES.length}`;

  const img = document.createElement("img");
  img.className = "carouselImg";
  img.src = slideSrc;
  img.alt = `Post slide ${postCarouselIndex + 1}`;

  const prev = document.createElement("button");
  prev.className = "carouselArrow carouselPrev";
  prev.type = "button";
  prev.textContent = "‹";
  prev.addEventListener("click", (e) => {
    e.stopPropagation();
    postCarouselIndex = (postCarouselIndex - 1 + PROFILE_POST_SLIDES.length) % PROFILE_POST_SLIDES.length;
    renderPostCarousel();
  });

  const next = document.createElement("button");
  next.className = "carouselArrow carouselNext";
  next.type = "button";
  next.textContent = "›";
  next.addEventListener("click", (e) => {
    e.stopPropagation();
    postCarouselIndex = (postCarouselIndex + 1) % PROFILE_POST_SLIDES.length;
    renderPostCarousel();
  });

  const caption = document.createElement("div");
  caption.className = "carouselCaption";
  caption.textContent = PROFILE_POST_CAPTION;

  mediaModalBody.appendChild(head);
  wrap.appendChild(index);
  wrap.appendChild(img);
  wrap.appendChild(prev);
  wrap.appendChild(next);
  mediaModalBody.appendChild(wrap);
  mediaModalBody.appendChild(caption);
}

function openMediaModal(type, src, opts = {}){
  const { reelLike = false } = opts;
  if (!mediaModal || !mediaModalBody) return;
  if (postAudioEl) {
    postAudioEl.pause();
    postAudioEl.currentTime = 0;
    postAudioEl = null;
  }
  mediaModalBody.innerHTML = "";

  if (type === "post") {
    postCarouselIndex = 0;
    renderPostCarousel();
    const audio = new Audio(PROFILE_POST_AUDIO_SRC);
    audio.loop = true;
    audio.preload = "metadata";
    audio.addEventListener("error", () => {
      showToast("missing audio/breathe.mp3", 1100);
    });
    audio.play().catch(() => {});
    postAudioEl = audio;
  } else if (type === "video") {
    if (!src) return;
    const wrap = document.createElement("div");
    wrap.className = "modalReelWrap";

    const video = document.createElement("video");
    video.src = src;
    video.controls = true;
    video.autoplay = true;
    video.playsInline = true;
    video.loop = true;
    wrap.appendChild(video);
    mediaModalBody.appendChild(wrap);

    if (reelLike) {
      let touchStartY = 0;
      wrap.addEventListener("wheel", (e) => {
        if (e.deltaY > 8) maybeShowReelEndErrorToast();
      }, { passive: true });
      wrap.addEventListener("touchstart", (e) => {
        const touch = e.changedTouches && e.changedTouches[0];
        touchStartY = touch ? touch.clientY : 0;
      }, { passive: true });
      wrap.addEventListener("touchend", (e) => {
        const touch = e.changedTouches && e.changedTouches[0];
        const touchEndY = touch ? touch.clientY : 0;
        if (touchStartY - touchEndY > 18) maybeShowReelEndErrorToast();
      }, { passive: true });
    }
  } else {
    if (!src) return;
    const img = document.createElement("img");
    img.src = src;
    img.alt = "Tagged media";
    mediaModalBody.appendChild(img);
  }

  mediaModal.classList.add("open");
  mediaModal.setAttribute("aria-hidden", "false");
}

function openExplorePost(post){
  if (!mediaModal || !mediaModalBody || !post) return;
  closeMediaModal();
  mediaModalBody.innerHTML = "";

  const header = document.createElement("div");
  header.className = "exploreCardHeader";
  header.textContent = post.username;

  if (post.verified) {
    const badge = document.createElement("span");
    badge.className = "reelVerified";
    badge.textContent = "✓";
    header.appendChild(badge);
  }

  const img = document.createElement("img");
  img.src = post.src;
  img.alt = post.username;

  const caption = document.createElement("div");
  caption.className = "exploreCardCaption";
  caption.textContent = post.caption;

  mediaModalBody.appendChild(header);
  mediaModalBody.appendChild(img);
  mediaModalBody.appendChild(caption);
  mediaModal.classList.add("open");
  mediaModal.setAttribute("aria-hidden", "false");
}

function renderExplore(){
  if (!exploreGrid) return;
  exploreGrid.innerHTML = "";

  EXPLORE_POSTS.forEach((post, i) => {
    const tile = document.createElement("button");
    tile.type = "button";
    tile.className = "exploreTile";

    const img = document.createElement("img");
    img.src = post.src;
    img.alt = `${post.username} explore ${i + 1}`;
    img.addEventListener("error", () => {
      img.remove();
      const fallback = document.createElement("div");
      fallback.className = "exploreTileFallback";
      fallback.textContent = post.username;
      tile.appendChild(fallback);
    });
    tile.appendChild(img);

    tile.addEventListener("click", () => {
      openExplorePost(post);
    });

    exploreGrid.appendChild(tile);
  });
}

function renderHome(){
  const ryan = DM_LIST.find(x => x.id === "ryan");
  applyCirclePfp(homeYourStoryPfp, NIHIRA_PROFILE_PFP, "nihira");
  applyCirclePfp(homeRyanStoryPfp, ryan?.pfp, "ryan");
  applyCirclePfp(homePostPfp, HOME_FLORIDA_PFP, "FloridaRocks");
  applyCirclePfp(homePostCornerPfp, HOME_FLORIDA_PFP, "FloridaRocks");

  if (homePostImage) {
    homePostImage.src = HOME_FLORIDA_POST;
    homePostImage.addEventListener("error", () => {
      homePostImage.style.background = "linear-gradient(135deg,#335,#557)";
    }, { once: true });
  }

  if (!homeFeed || homeBoundaryHandlersBound) return;
  homeBoundaryHandlersBound = true;

  homeFeed.addEventListener("wheel", (e) => {
    if (e.deltaY <= 8) return;
    const atEnd = homeFeed.scrollTop + homeFeed.clientHeight >= homeFeed.scrollHeight - 4;
    if (atEnd) maybeShowReelEndErrorToast();
  }, { passive: true });

  let touchStartY = 0;
  homeFeed.addEventListener("touchstart", (e) => {
    const touch = e.changedTouches && e.changedTouches[0];
    touchStartY = touch ? touch.clientY : 0;
  }, { passive: true });
  homeFeed.addEventListener("touchend", (e) => {
    const touch = e.changedTouches && e.changedTouches[0];
    const touchEndY = touch ? touch.clientY : 0;
    const atEnd = homeFeed.scrollTop + homeFeed.clientHeight >= homeFeed.scrollHeight - 4;
    if (atEnd && (touchStartY - touchEndY > 18)) {
      maybeShowReelEndErrorToast();
    }
  }, { passive: true });
}

function makeProfileTile(kind, src, label){
  const tile = document.createElement("button");
  tile.className = "profileTile";
  tile.type = "button";

  if (kind === "video") {
    const video = document.createElement("video");
    video.src = src;
    video.muted = true;
    video.playsInline = true;
    video.preload = "metadata";
    video.addEventListener("error", () => {
      tile.textContent = "missing video";
    });
    tile.appendChild(video);
  } else if (kind === "image") {
    const img = document.createElement("img");
    img.src = src;
    img.alt = label || "Tagged photo";
    img.addEventListener("error", () => {
      tile.textContent = "missing photo";
    });
    tile.appendChild(img);
  }

  tile.addEventListener("click", () => {
    openMediaModal(kind, src);
  });
  return tile;
}

function renderProfile(){
  if (!profileContent || !profileTabs) return;

  const active = state.profileTab || "posts";

  profileTabs.querySelectorAll(".profileTab").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.tab === active);
  });

  profileContent.innerHTML = "";

  if (active === "posts") {
    const post = document.createElement("button");
    post.type = "button";
    post.className = "postCard";
    post.addEventListener("click", () => openMediaModal("post"));

    const preview = document.createElement("img");
    preview.className = "postPreview";
    preview.src = PROFILE_POST_SLIDES[0];
    preview.alt = "Post preview";
    preview.addEventListener("error", () => {
      preview.remove();
      const missing = document.createElement("div");
      missing.className = "profileEmpty";
      missing.textContent = "missing post image";
      post.appendChild(missing);
    });

    const meta = document.createElement("div");
    meta.className = "postMeta";
    meta.textContent = "1 post • 10 photos";

    const song = document.createElement("div");
    song.className = "postSong";
    song.textContent = `♫ ${PROFILE_POST_AUDIO_LABEL}`;

    const caption = document.createElement("div");
    caption.className = "postCaption";
    caption.textContent = PROFILE_POST_CAPTION;

    post.appendChild(preview);
    post.appendChild(meta);
    post.appendChild(song);
    post.appendChild(caption);
    profileContent.appendChild(post);
    return;
  }

  if (active === "reels") {
    const empty = document.createElement("div");
    empty.className = "profileEmpty";
    empty.textContent = "Share a moment with the world. Create your first reel.";
    profileContent.appendChild(empty);
    return;
  }

  const grid = document.createElement("div");
  grid.className = "profileGrid";

  if (active === "reuploads") {
    grid.appendChild(makeProfileTile("video", PROFILE_REUPLOAD_VIDEO, "Reupload reel"));
    profileContent.appendChild(grid);
    return;
  }

  if (active === "tagged") {
    grid.appendChild(makeProfileTile("image", PROFILE_TAGGED_IMAGE, "Tagged photo"));
    profileContent.appendChild(grid);
  }
}


function renderThread(){
  dmBody.innerHTML = "";

  // Only show PRECHAT for Ryan (optional)
  if (activeThreadId === "ryan") {
    PRECHAT.forEach(m => addBubble(m.from, m.text, true));
  }

  const thread = getThread(activeThreadId);
  thread.forEach(item => {
    if (item.type === "storyReplyCard") {
      addStoryReplyOnRight(item.bg, item.storyText);
      return;
    }
    if (item.type === "reelShareCard") {
      addReelShareOnRight(item.src);
      return;
    }
    if (item.type === "bubble") {
      addBubble(item.side, item.text, true);
      return;
    }
    if (item.type === "seenReceipt") {
      addSeenReceipt(item.text || "seen");
      return;
    }
  });

  scrollDMToBottom();
}
