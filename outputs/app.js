const sugarProfiles = {
  zero: {
    name: "0 Sugar",
    short: "0",
    title: "0 Sugar Item-Based Commute",
    copy: "No realistic try-on needed. MoCam builds a low-exposure look from items and preferences: ink-blue shirt, sage skirt, and small gold studs.",
    badge: "0 Sugar wardrobe persona",
    profile: "Only item data is stored. No face or body data. Community sharing defaults to anonymous item-based posts.",
    insight: "You can have a complete outfit without showing yourself. MoCam focuses on material, color, and occasion instead of body data.",
    stage: "zero"
  },
  half: {
    name: "Half Sugar",
    short: "H",
    title: "Half Sugar Soft Commute",
    copy: "A misty pink cropped jacket softens a deep ink-blue shirt, paired with a sage skirt for a gentle but polished look.",
    badge: "Half Sugar avatar",
    profile: "Avatar-first display with just enough body outline and style preference for recommendations.",
    insight: "Your wardrobe leans soft, so ink blue adds structure and makes the outfit feel more like you than pure sweetness.",
    stage: "half"
  },
  full: {
    name: "Full Sugar",
    short: "F",
    title: "Full Sugar Photo-Ready Date Look",
    copy: "Misty pink, soft-focus makeup, and small gold details create a realistic preview with a polished photo-ready feeling.",
    badge: "Full Sugar realistic preview",
    profile: "Face, body, full-body looks, and makeup can be recorded for realistic try-on, beauty matching, and community display.",
    insight: "Full Sugar uses more complete proportion and makeup data, so recommendations can feel closer to real-life try-on results.",
    stage: "full"
  }
};

const closetItems = [
  {
    name: "Misty Pink Cropped Jacket",
    meta: "Top · spring/fall · smart casual",
    group: "Tops",
    thumb: "assets/mocam-wardrobe-capture.png",
    pos: "38% 46%",
    color: "#e6a18d",
    detail: ["Works for commute, dates, and cafe walks", "Pairs with ink blue, sage green, and cream", "Worn 4 times this month with strong utilization"]
  },
  {
    name: "Deep Ink-Blue Shirt",
    meta: "Top · spring/summer · structured",
    group: "Tops",
    thumb: "assets/mocam-wardrobe-capture.png",
    pos: "22% 38%",
    color: "#445d64",
    detail: ["Good for meetings, ID photos, and low-key dates", "Balances the sweetness of pink pieces", "Best with small gold or silver accessories"]
  },
  {
    name: "Sage Midi Skirt",
    meta: "Bottom · all-season · airy",
    group: "Bottoms",
    thumb: "assets/mocam-wardrobe-capture.png",
    pos: "55% 58%",
    color: "#8ba99a",
    detail: ["Good for weekends, commute, and travel", "Creates a fresh spring/summer feeling with misty pink", "Sneakers make it more neutral"]
  },
  {
    name: "Small Gold Studs",
    meta: "Accessory · warm tone · brightening",
    group: "Accessories",
    thumb: "assets/mocam-wardrobe-capture.png",
    pos: "73% 28%",
    color: "#ead27b",
    detail: ["Works with warm makeup and clean hairstyles", "Today, keep only earrings and skip layered necklaces", "Brightens the face without stealing focus"]
  },
  {
    name: "Muted Rose Lipstick",
    meta: "Makeup · everyday · gentle",
    group: "Beauty Bag",
    thumb: "assets/mocam-wardrobe-capture.png",
    pos: "73% 72%",
    color: "#c78379",
    detail: ["Fits Half Sugar and Full Sugar styling", "Shares a color family with the pink jacket but feels calmer", "Works with soft matte base makeup"]
  },
  {
    name: "Cream Shoulder Bag",
    meta: "Bag · commute · brightening",
    group: "Accessories",
    thumb: "assets/post-zero-privacy.png",
    pos: "52% 58%",
    color: "#f2eadf",
    detail: ["Pairs with pink outerwear and dark shirts", "Carries daily commute essentials", "Softens the outfit more than a black bag"]
  },
  {
    name: "Soft Matte Blush Palette",
    meta: "Cosmetic · low saturation · healthy glow",
    group: "Beauty Bag",
    thumb: "assets/post-zero-privacy.png",
    pos: "34% 70%",
    color: "#d99a8c",
    detail: ["Works with muted rose lips and the misty pink jacket", "Use a light horizontal sweep for a natural effect", "Matches today's color recommendation"]
  }
];

const feedData = {
  zero: [
    {
      user: "momo-042",
      badge: "0 Sugar · text diary",
      title: "I finally sorted every black top in my closet",
      body: "Turns out I do have clothes. They were just all expressing the same tired mood. MoCam suggested one light inner layer first.",
      image: "assets/post-zero-privacy.png",
      stats: "18 replies · 56 saves"
    },
    {
      user: "Anonymous Hanger",
      badge: "0 Sugar · list post",
      title: "No-face outfit for a holiday walk",
      body: "White tee, ink-blue shirt, loose pants, canvas tote. Comfortable, item-photo friendly, and no body data needed.",
      image: "assets/mocam-wardrobe-capture.png",
      stats: "9 replies · 31 saves"
    }
  ],
  half: [
    {
      user: "Puff Avatar",
      badge: "Half Sugar · avatar try-on",
      title: "My another me looks like a cold brew mocha today",
      body: "The avatar version made ink blue and gold feel less intimidating. It still feels like me, just with less pressure.",
      image: "assets/post-half-avatar-woman.png",
      stats: "67 replies · 188 saves"
    },
    {
      user: "Half-Sugar Mina",
      badge: "Half Sugar · mood styling",
      title: "I want to look sharper, but not harsh",
      body: "MoCam kept the dark shirt and rounded earrings, then softened the rest. That balance is exactly what I needed.",
      image: "assets/post-half-avatar-woman.png",
      stats: "33 replies · 89 saves"
    }
  ],
  full: [
    {
      user: "Mia",
      badge: "Full Sugar · OOTD",
      title: "MoCam made a rainy date look for me",
      body: "The realistic preview made the pink jacket look brighter than I expected. I might post the makeup details later.",
      image: "assets/post-full-ootd-woman.png",
      stats: "126 replies · 430 saves"
    },
    {
      user: "Nana",
      badge: "Full Sugar · makeup",
      title: "Muted rose lips really work with misty pink",
      body: "MoCam's low-saturation makeup looks cleaner than what I usually do. The whole look feels bright but not heavy.",
      image: "assets/mocam-digital-woman.png",
      stats: "84 replies · 276 saves"
    }
  ]
};

const sheetPresets = {
  color: {
    title: "Today's Color Logic",
    body: "Misty pink brings warmth, sage adds ease, and ink blue creates structure. Together they suit the spring-to-summer transition without feeling overly sweet.",
    points: ["Keep the main palette to 2 core colors", "Use small gold accessories only", "Choose a cream or deep brown bag"]
  },
  makeup: {
    title: "Today's Makeup",
    body: "Keep the base softly matte and choose a muted rose lip. Avoid too much shimmer so the clothes have room to breathe.",
    points: ["Muted rose lip + clean brows", "A tiny horizontal sweep of blush", "Avoid heavy highlighter"]
  },
  shop: {
    title: "Wishlist Gap",
    body: "MoCam checks wishlist ideas against your real wardrobe and prioritizes items that unlock more outfits.",
    points: ["Priority add: dark straight-leg trousers", "Can activate: pink jacket and ink-blue shirt", "Best budget use: shoes, bags, and high-frequency accessories"]
  },
  privacy: {
    title: "Privacy Dashboard",
    body: "Private AI analysis and community display are managed separately. When Sugar mode is lowered, realistic body-related displays are hidden automatically.",
    points: ["0 Sugar: item data only", "Half Sugar: avatar display only", "Full Sugar: realistic content requires separate consent"]
  },
  travel: {
    title: "Travel Packing List",
    body: "Enter destination, trip length, and weather. MoCam generates daily outfits, backup pieces, and a beauty bag checklist.",
    points: ["Avoid duplicate colors", "Pack outerwear by weather", "At least one photo-friendly look per day"]
  },
  style: {
    title: "Style Evolution Archive",
    body: "Track how your taste changes through purchases, outfits, and community sharing.",
    points: ["Frequent colors: pink, sage, ink blue", "Frequent scenes: commute, cafe, travel", "Recent style: soft with more structure"]
  },
  capture: {
    title: "Simulated Wardrobe Capture",
    body: "Photograph the front of an item. MoCam recognizes category, color, material, season, occasion, and matching pieces.",
    points: ["Recognized: Misty Pink Cropped Jacket", "Auto tags: spring/fall, smart casual", "Added to today's recommendation"]
  },
  post: {
    title: "Post to Sugar Community",
    body: "The publish flow adapts to your Sugar mode. 0 Sugar defaults to text, Half Sugar defaults to avatar, and Full Sugar can use realistic photos.",
    points: ["Current formats: text, wardrobe card, OOTD", "Use a temporary identity on visiting days", "Preview what others will see before posting"]
  },
  pro: {
    title: "MoCam Pro Value",
    body: "The paid version turns 'what should I wear today?' into a private AI style studio: try, chat, generate, and track your style over time.",
    points: ["AI fitting room: item-only, avatar, and realistic modes", "Unlimited styling by event, weather, mood, and occasion", "Weekly wardrobe, makeup, style, and community reports"]
  },
  fittingRoom: {
    title: "AI Fitting Room",
    body: "Choose an item or a scene, and MoCam generates a try-on preview in the display mode allowed by your Sugar setting.",
    points: ["0 Sugar: flat-lay and item combinations", "Half Sugar: avatar try-on", "Full Sugar: realistic OOTD preview"]
  },
  outfitPack: {
    title: "Outfit Inspiration Packs",
    body: "Recombine real closet items into a weekly plan. It recommends complete looks, not isolated pieces.",
    points: ["5 commute looks: polished but not stiff", "4 weekend looks: relaxed and brightening", "3 date looks: includes makeup and accessories"]
  },
  wardrobeReport: {
    title: "Wardrobe Health Report",
    body: "This month, wardrobe utilization is 64%. MoCam has identified your strongest style patterns, idle items, and best shapes to reinforce.",
    points: ["Core style: low-saturation, smart casual, soft structure", "Items to activate: bright skirt and small gold studs", "Suggested add-ons: dark straight-leg trousers, light knitwear"]
  },
  makeupReport: {
    title: "Makeup Match Report",
    body: "Your wardrobe contains many low-saturation colors, so muted rose, milk tea, and soft mauve are more reliable than saturated red lips.",
    points: ["Today: muted rose lip + soft matte base", "Use blush lightly and skip large-area highlight", "Small gold studs work better than a statement necklace"]
  },
  spendReport: {
    title: "Scene Capsule Wardrobe",
    body: "MoCam builds capsule wardrobes around your real calendar so each day feels prepared.",
    points: ["Weekdays: 5 smart casual commute looks", "Weekend: 2 relaxed photo-friendly looks", "Holiday: automatically adds makeup, accessories, and hair tips"]
  },
  communityReport: {
    title: "Sugar Interaction Report",
    body: "Your Half Sugar posts perform best. Users respond most to avatar try-ons and mood-based styling stories.",
    points: ["High-save topic: brightening but not too sweet", "Good for Wednesday visiting day: wardrobe lists", "Full Sugar posts should keep makeup details"]
  }
};

let activeSugar = "half";
let activeTab = "onboarding";
let activeCommunity = "half";
let activeClosetFilter = "All";

const screens = document.querySelectorAll(".screen");
const tabs = document.querySelectorAll(".tab[data-tab]");
const sugarOptions = document.querySelectorAll(".sugar-option");
const communityTabs = document.querySelectorAll(".community-switch button");
const sheet = document.querySelector("#bottomSheet");
const sheetBackdrop = document.querySelector("#sheetBackdrop");
const sheetContent = document.querySelector("#sheetContent");

function showScreen(name) {
  activeTab = name;
  screens.forEach((screen) => {
    screen.classList.toggle("active", screen.id === `screen-${name}`);
  });
  tabs.forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.tab === name);
  });
}

function setSugar(sugar) {
  activeSugar = sugar;
  const profile = sugarProfiles[sugar];
  sugarOptions.forEach((option) => {
    option.classList.toggle("selected", option.dataset.sugar === sugar);
  });

  document.querySelector("#homeTitle").textContent = profile.title;
  document.querySelector("#homeCopy").textContent = profile.copy;
  document.querySelector("#avatarBadge").textContent = profile.badge;
  document.querySelector("#insightText").textContent = profile.insight;
  document.querySelector("#profileTitle").textContent = `${profile.name} User`;
  document.querySelector("#profileCopy").textContent = profile.profile;
  document.querySelector("#profileSugar").textContent = profile.name;
  document.querySelector("#profileAvatar").textContent = profile.short;
  document.querySelector("#avatarStage").className = `avatar-stage ${profile.stage}`;
  setCommunity(sugar);
}

function setCommunity(community) {
  activeCommunity = community;
  communityTabs.forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.community === community);
  });
  renderFeed();
}

function renderCloset() {
  const list = document.querySelector("#closetList");
  const groups = ["Tops", "Bottoms", "Accessories", "Beauty Bag"];
  const visibleGroups = activeClosetFilter === "All" ? groups : groups.filter((group) => group === activeClosetFilter);
  list.innerHTML = visibleGroups.map((group) => {
    const groupItems = closetItems
      .map((item, index) => ({ ...item, index }))
      .filter((item) => item.group === group);
    return `
      <section class="closet-section">
        <div class="closet-section-head">
          <strong>${group}</strong>
          <span>${groupItems.length} items</span>
        </div>
        ${groupItems.map((item) => `
          <button class="closet-item" style="--item-color:${item.color};--thumb-pos:${item.pos}" data-item="${item.index}" type="button">
            <span class="item-thumb">
              <img src="${item.thumb}" alt="${item.name}">
            </span>
            <span>
              <strong>${item.name}</strong>
              <span>${item.meta}</span>
            </span>
            <i data-lucide="chevron-right"></i>
          </button>
        `).join("")}
      </section>
    `;
  }).join("") || `<section class="empty-state"><strong>No items yet</strong><p>After capture, MoCam will classify items here automatically.</p></section>`;

  list.querySelectorAll(".closet-item").forEach((button) => {
    button.addEventListener("click", () => {
      const item = closetItems[Number(button.dataset.item)];
      openSheet({
        title: item.name,
        body: item.meta,
        points: item.detail
      });
    });
  });
}

function renderFeed() {
  const list = document.querySelector("#feedList");
  list.innerHTML = feedData[activeCommunity].map((post, index) => `
    <article class="feed-card" data-post="${index}">
      <div class="feed-head">
        <div class="feed-avatar">${post.user.slice(0, 1)}</div>
        <div class="feed-meta">
          <strong>${post.user}</strong>
          <span>${post.badge}</span>
        </div>
      </div>
      <div class="feed-visual">
        <img src="${post.image}" alt="${post.title}">
      </div>
      <div class="feed-body">
        <strong>${post.title}</strong>
        <p>${post.body}</p>
        <div class="feed-actions">
          <span>${post.stats}</span>
          <span>Open details</span>
        </div>
      </div>
    </article>
  `).join("");

  list.querySelectorAll(".feed-card").forEach((card) => {
    card.addEventListener("click", () => {
      const post = feedData[activeCommunity][Number(card.dataset.post)];
      openSheet({
        title: post.title,
        body: `${post.user} · ${post.badge}`,
        points: [post.body, post.stats, activeCommunity === "zero" ? "This post hides realistic personal data by default" : "You can interact inside the current Sugar community"]
      });
    });
  });
}

function openSheet(data) {
  sheetContent.innerHTML = `
    <div class="sheet-title">
      <div>
        <h3>${data.title}</h3>
        <p>${data.body}</p>
      </div>
      <button class="close-sheet" type="button" aria-label="Close">
        <i data-lucide="x"></i>
      </button>
    </div>
    <div class="sheet-list">
      ${data.points.map((point) => `<div><i></i><span>${point}</span></div>`).join("")}
    </div>
  `;
  sheet.classList.add("open");
  sheetBackdrop.classList.add("open");
  sheetBackdrop.setAttribute("aria-hidden", "false");
  sheetContent.querySelector(".close-sheet").addEventListener("click", closeSheet);
  refreshIcons();
}

function closeSheet() {
  sheet.classList.remove("open");
  sheetBackdrop.classList.remove("open");
  sheetBackdrop.setAttribute("aria-hidden", "true");
}

function refreshIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function buildMiroMindTask() {
  const activeMood = document.querySelector(".quick-chip.active")?.dataset.mood || "commute";
  const profile = sugarProfiles[activeSugar];
  const wardrobe = closetItems
    .map((item) => `${item.name} (${item.meta})`)
    .join("; ");

  return [
    "You are MoCam's AI stylist, generating a live mobile app MVP demo result.",
    `Current user Sugar mode: ${profile.name}. Privacy display rule: ${profile.profile}`,
    `User's current scene or mood: ${activeMood}`,
    `Captured wardrobe and beauty bag: ${wardrobe}`,
    "Use only existing items as the main recommendation. Do not invent many new products.",
    "Return 4 very short English suggestions: 1 outfit, 1 color logic, 1 makeup/accessory tip, and 1 display mode suggestion that matches the current Sugar mode."
  ].join("\n");
}

async function runMiroMindStylist() {
  const button = document.querySelector("#runMiroMind");
  const reply = document.querySelector("#aiReply");
  const status = document.querySelector("#miromindStatus");
  const originalText = button.textContent;

  button.disabled = true;
  button.textContent = "Analyzing...";
  status.textContent = "MiroMind is reading your wardrobe, Sugar mode, and today's scene through the server proxy.";
  reply.textContent = "I am sending your wardrobe, Sugar mode, and today context to MiroMind for a live styling analysis...";

  try {
    const response = await fetch("/.netlify/functions/miromind-chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        task: buildMiroMindTask(),
        sugar: activeSugar
      })
    });
    const data = await response.json();
    if (!response.ok || !data.ok) {
      throw new Error(data.error || "MiroMind request failed.");
    }

    reply.textContent = data.content || "MiroMind returned successfully, but there was no displayable text.";
    status.textContent = data.usage?.total_tokens
      ? `MiroMind API completed: ${data.usage.total_tokens} tokens.`
      : "MiroMind API completed. This result came from a real server-side call.";
  } catch (error) {
    reply.textContent = "The MiroMind proxy is connected, but this environment may be region-limited. Once deployed from a supported server region, this panel will show live AI styling analysis.";
    status.textContent = `MiroMind unavailable: ${error.message || "Please check deployment region or server environment variables."}`;
  } finally {
    button.disabled = false;
    button.textContent = originalText;
  }
}

document.querySelector("#startApp").addEventListener("click", () => showScreen("home"));
document.querySelector("#openCapture").addEventListener("click", () => openSheet(sheetPresets.capture));
document.querySelector("#bottomCapture").addEventListener("click", () => {
  showScreen("wardrobe");
  openSheet(sheetPresets.capture);
});
document.querySelector("#captureCard").addEventListener("click", () => openSheet(sheetPresets.capture));
document.querySelector("#openPost").addEventListener("click", () => openSheet(sheetPresets.post));
document.querySelector("#openPrivacy").addEventListener("click", () => openSheet(sheetPresets.privacy));
sheetBackdrop.addEventListener("click", closeSheet);

sugarOptions.forEach((option) => {
  option.addEventListener("click", () => setSugar(option.dataset.sugar));
});

tabs.forEach((tab) => {
  tab.addEventListener("click", () => showScreen(tab.dataset.tab));
});

communityTabs.forEach((tab) => {
  tab.addEventListener("click", () => setCommunity(tab.dataset.community));
});

document.querySelectorAll("[data-sheet]").forEach((button) => {
  button.addEventListener("click", () => openSheet(sheetPresets[button.dataset.sheet]));
});

document.querySelectorAll("[data-tab]").forEach((button) => {
  if (!button.classList.contains("tab")) {
    button.addEventListener("click", () => showScreen(button.dataset.tab));
  }
});

document.querySelectorAll(".quick-chip").forEach((chip) => {
  chip.addEventListener("click", () => {
    document.querySelectorAll(".quick-chip").forEach((item) => item.classList.remove("active"));
    chip.classList.add("active");
    const mood = chip.dataset.mood;
    const copy = {
      commute: "Your wardrobe leans soft, so ink blue adds structure and makes the outfit feel more like you than pure sweetness.",
      date: "For a date, keep the misty pink jacket and small gold studs. Make the makeup lighter and focus on a healthy glow.",
      relaxed: "Relaxed styling comes from breathing room: reduce layered accessories and choose a canvas tote or low heels.",
      sharp: "Wear the ink-blue shirt as the main piece and add a structured bag. The look becomes softer with clearer boundaries."
    };
    document.querySelector("#insightText").textContent = copy[mood];
  });
});

document.querySelectorAll("[data-chat]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-chat]").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    const replies = {
      date: "For a date version, soften the neckline, keep the misty pink jacket and muted rose lip, then use small gold studs for brightness.",
      office: "For an office version, switch the sage skirt to a more structured bottom and choose the cream shoulder bag for a clean professional feel.",
      rain: "Rain backup: keep the ink-blue shirt, switch to wrinkle-resistant outerwear, reduce highlight, and choose water-friendly shoes and bag materials."
    };
    document.querySelector("#aiReply").textContent = replies[button.dataset.chat];
  });
});

document.querySelector("#runMiroMind").addEventListener("click", runMiroMindStylist);

document.querySelectorAll(".filter-pill").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter-pill").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    activeClosetFilter = button.dataset.filter;
    renderCloset();
    refreshIcons();
  });
});

renderCloset();
setSugar(activeSugar);
showScreen("onboarding");
refreshIcons();
