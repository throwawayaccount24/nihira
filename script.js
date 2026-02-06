const screenStory = document.getElementById("screenStory");
const screenList  = document.getElementById("screenList");
const screenDM    = document.getElementById("screenDM");

const listBody = document.getElementById("listBody");

const dmBody = document.getElementById("dmBody");
const dmBack = document.getElementById("dmBack");
const dmPfpBtn = document.getElementById("dmPfpBtn");
const storyInlineFeedback = document.getElementById("storyInlineFeedback");


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

const storyInlineForm = document.getElementById("storyInlineForm");
const storyInlineInput = document.getElementById("storyInlineInput");

const dmInlineForm = document.getElementById("dmInlineForm");
const dmInlineInput = document.getElementById("dmInlineInput");


const hintText = document.getElementById("hintText");
const storyMeta = document.getElementById("storyMeta");

const STORAGE_KEY = "ig_scavenger_state_v4";

/* DM list */
const DM_LIST = [
  { id: "ryan", username: "ryan._.shahbaba", preview: "Sent 8m ago", openThread: true },
  { id: "leomessi", username: "leomessi", verified: true, preview: "New year new us for real..." },
  { id: "masonmount", username: "masonmount", verified: true, preview: "Call me Mason, 'cause I'm the Mount you've been looking for." },
  { id: "meowhiwa", username: "meowhiwa", preview: "sent a reel 5 hours ago" },
  { id: "bachandarthur", username: "bachandarthur", preview: "We'd love to have you on our podcast" },
  { id: "pr1nc3_pr1nc3", username: "pr1nc3_pr1nc3", preview: "sent 7 weeks ago (loser)" },
];

const PRECHAT = [
  { from: "them", text: "Hey" },
  { from: "me", text: "Bro lose this number" },
  { from: "them", text: "Aw..." },
  { from: "me", text: "Loser bum ahh really tryna slide into my dms..." },
];

const STORIES = [
  {
    bg: "linear-gradient(135deg, #ff2bd6, #ff7a2f)",
    hint: "Hi Twin This will be updated tomorrow or whenever both of us have time 🦉",
    storyPassword: "fioncionasiosnsxoiscnaoisndoiwndoinasioxnioancionasdnion",
    nextPassword: "espresso",
    ryanReply: "Okay fine. Next hint: The next clue is where coffee becomes math.",
  },
  {
    bg: "linear-gradient(135deg, #7a3cff, #ff2b7a, #ffb52b)",
    hint: "Hint 2: The next clue is where coffee becomes math.",
    storyPassword: "espresso",
    nextPassword: "librarystairs",
    ryanReply: "You got it. Next hint: Look for the smallest door with the biggest rules.",
  },
  {
    bg: "linear-gradient(135deg, #00c2ff, #7bff6b)",
    hint: "Hint 3: Look for the smallest door with the biggest rules.",
    storyPassword: "librarystairs",
    nextPassword: "done",
    ryanReply: "Finished. Bring the final answer to me.",
  },
];

let state = loadState();
let idx = clamp(state.idx ?? 0, 0, STORIES.length - 1);

/* ===== init ===== */
renderList();
renderStory();

/* start on story always */
switchScreen("story");

/* open story from pfp click (both places) */
storyPfp.addEventListener("click", () => {
  saveState({ ...state, view: "story", idx });
  switchScreen("story");
});
dmPfpBtn.addEventListener("click", () => {
  saveState({ ...state, view: "story", idx });
  switchScreen("story");
});

/* ===== list ===== */
function renderList(){
  listBody.innerHTML = "";

  DM_LIST.forEach(item => {
    const row = document.createElement("div");
    row.className = "threadRow";

    const pfp = document.createElement("div");
    pfp.className = "pfp";

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
    sub.textContent = item.preview;

    text.appendChild(nameLine);
    text.appendChild(sub);

    row.appendChild(pfp);
    row.appendChild(text);

    row.addEventListener("click", () => {
      if (item.openThread) {
        openThreadRyan(true);
        saveState({ ...state, view: "dm", idx });
        switchScreen("dm");
      }
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
function openThreadRyan(rehydrate){
  dmBody.innerHTML = "";
  PRECHAT.forEach(m => addBubble(m.from, m.text, true));

  if (rehydrate && state.lastStoryReply) {
    // THEIR side line (with pfp) + clickable story preview
    addSysLineLeft("You replied to their Close Friends story", true);
    addStoryPreviewLeft(STORIES[state.lastStoryIdx ?? 0].bg);

    // your actual reply bubble on YOUR side
    addBubble("me", state.lastStoryReply, true);

    // Ryan response
    addBubble("them", STORIES[state.lastStoryIdx ?? 0].ryanReply, true);
  }

  scrollDMToBottom();
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

  addBubble("me", raw, true);
  dmInlineInput.value = "";

  const expected = normalize(STORIES[idx].nextPassword);

  if (msg === expected) {
    const typingNode = addTyping(true);
    setTimeout(() => {
      typingNode.remove();
      addBubble("them", STORIES[idx].ryanReply, true);

      if (idx < STORIES.length - 1) {
        idx += 1;
        state = { ...state, idx };
        saveState({ ...state, view: "dm" });
        renderStory();
      }
    }, 900);
  } else {
    const typingNode = addTyping(true);
    setTimeout(() => {
      typingNode.remove();
      addBubble("them", "No.", true);
    }, 600);
  }
});


storyInlineForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const raw = storyInlineInput.value.trim();
  const msg = normalize(raw);
  if (!msg) return;

  const correct = normalize(STORIES[idx].storyPassword);

  if (msg === correct) {
    await showToast("Sent", 550);
    storyInlineInput.value = "";

    state = {
      ...state,
      lastStoryReply: raw,
      lastStoryIdx: idx,
      view: "dm",
      idx
    };
    saveState(state);

    // Jump to DM and render the "replied to story" on YOUR side
    openThreadRyan(false);
    addStoryReplyOnRight(STORIES[idx].bg, STORIES[idx].hint); // show the real story with text
    addBubble("me", raw, true);

    const typingNode = addTyping(true);
    setTimeout(() => {
      typingNode.remove();
      addBubble("them", STORIES[idx].ryanReply, true);
      scrollDMToBottom();
    }, 900);

    switchScreen("dm");
  } else {
    await showToast("Message could not be sent", 850);
    storyInlineInput.select();
  }
});


/* ===== screen switch ===== */
function switchScreen(which){
  screenStory.classList.remove("active");
  screenList.classList.remove("active");
  screenDM.classList.remove("active");

  if (which === "dm") screenDM.classList.add("active");
  if (which === "list") screenList.classList.add("active");
  if (which === "story") screenStory.classList.add("active");
}

/* ===== DM helpers ===== */
function addSysLineLeft(text, withCF){
  const row = document.createElement("div");
  row.className = "sysRow";

  const pfp = document.createElement("div");
  pfp.className = "sysPfp ring";
  pfp.title = "Open story";
  pfp.style.cursor = "pointer";
  pfp.addEventListener("click", () => switchScreen("story"));

  const line = document.createElement("div");
  line.className = "sysLine";
  line.textContent = text;

  if (withCF) {
    const badge = document.createElement("div");
    badge.className = "cfBadge";
    badge.textContent = "✓";
    line.appendChild(badge);
  }

  row.appendChild(pfp);
  row.appendChild(line);
  dmBody.appendChild(row);
}

function addStoryPreviewLeft(bg){
  const row = document.createElement("div");
  row.className = "storyRow";

  const pfp = document.createElement("div");
  pfp.className = "pfpBubble";
  pfp.style.visibility = "hidden"; // keeps alignment without extra avatar

  const btn = document.createElement("button");
  btn.className = "storyPreviewBtn";
  btn.type = "button";
  btn.addEventListener("click", () => switchScreen("story"));

  const card = document.createElement("div");
  card.className = "storyPreview";

  const thumb = document.createElement("div");
  thumb.className = "thumb";
  thumb.style.background = bg;

  const play = document.createElement("div");
  play.className = "play";
  play.textContent = "▶";

  card.appendChild(thumb);
  card.appendChild(play);
  btn.appendChild(card);

  row.appendChild(pfp);
  row.appendChild(btn);
  dmBody.appendChild(row);
}

function addBubble(side, text, themHasPfp){
  const row = document.createElement("div");
  row.className = `row ${side}`;

  if (side === "them" && themHasPfp) {
    const p = document.createElement("div");
    p.className = "pfpBubble";
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
