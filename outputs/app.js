const sugarProfiles = {
  zero: {
    name: "0糖",
    short: "0",
    title: "0糖清单式通勤",
    copy: "不需要真人试穿。MoCam 只按衣物和偏好生成低曝光方案：深墨蓝衬衫、鼠尾草半裙、小金扣耳饰。",
    badge: "0糖 衣橱画像",
    profile: "只记录物品，不记录脸和身体。社区默认匿名，适合把 MoCam 当作私密衣橱助手。",
    insight: "你今天不需要展示自己也能有完整造型。MoCam 会把重点放在材质、颜色和场景，而不是身体数据。",
    stage: "zero"
  },
  half: {
    name: "半糖",
    short: "半",
    title: "半糖松弛通勤",
    copy: "雾粉短外套压住深墨蓝衬衫的利落感，搭鼠尾草半裙，柔和但不甜腻。",
    badge: "半糖 avatar",
    profile: "卡通化呈现，保留推荐所需的身体轮廓和风格偏好。",
    insight: "你的衣橱里柔和色偏多，今天用墨蓝做一点结构感，会比单纯甜美更像“你”。",
    stage: "half"
  },
  full: {
    name: "全糖",
    short: "全",
    title: "全糖写真感约会",
    copy: "雾粉短外套配柔光底妆和金色耳饰，MoCam 会按照片生成更接近真实效果的完整造型。",
    badge: "全糖 真人预览",
    profile: "完整记录脸、身形、全身照和妆容，支持真人试穿、妆容和社区展示。",
    insight: "全糖模式会使用更完整的比例和妆容信息，所以推荐会更像真实上身后的效果。",
    stage: "full"
  }
};

const closetItems = [
  {
    name: "雾粉短外套",
    meta: "上装 · 春秋 · 轻正式",
    group: "上装",
    thumb: "assets/mocam-wardrobe-capture.png",
    pos: "38% 46%",
    color: "#e6a18d",
    detail: ["适合通勤、约会、咖啡散步", "与墨蓝、鼠尾草绿、奶白色匹配", "本月已穿 4 次，利用率高"]
  },
  {
    name: "深墨蓝衬衫",
    meta: "上装 · 春夏 · 干练",
    group: "上装",
    thumb: "assets/mocam-wardrobe-capture.png",
    pos: "22% 38%",
    color: "#445d64",
    detail: ["适合会议、拍证件照、低调约会", "能降低粉色单品的甜度", "建议搭金色或银色小体量配饰"]
  },
  {
    name: "鼠尾草半裙",
    meta: "下装 · 四季 · 显轻盈",
    group: "下装",
    thumb: "assets/mocam-wardrobe-capture.png",
    pos: "55% 58%",
    color: "#8ba99a",
    detail: ["适合周末、通勤、旅行", "和雾粉组合会有春夏清透感", "搭运动鞋会更中性"]
  },
  {
    name: "小金扣耳饰",
    meta: "配饰 · 暖色 · 提亮",
    group: "配饰",
    thumb: "assets/mocam-wardrobe-capture.png",
    pos: "73% 28%",
    color: "#ead27b",
    detail: ["适合暖色妆容和干净发型", "今天建议只保留耳饰，不叠项链", "能提升脸部亮度但不抢衣服重点"]
  },
  {
    name: "低饱和豆沙口红",
    meta: "妆容 · 日常 · 温柔",
    group: "化妆包",
    thumb: "assets/mocam-wardrobe-capture.png",
    pos: "73% 72%",
    color: "#c78379",
    detail: ["适合半糖和全糖推荐", "与雾粉外套同色系但更沉稳", "可搭轻雾面底妆"]
  },
  {
    name: "奶白腋下包",
    meta: "包袋 · 通勤 · 提亮",
    group: "配饰",
    thumb: "assets/post-zero-privacy.png",
    pos: "52% 58%",
    color: "#f2eadf",
    detail: ["适合粉色外套和深色衬衫", "容量适合通勤小物", "可替代黑色包降低沉重感"]
  },
  {
    name: "雾面腮红盘",
    meta: "化妆品 · 低饱和 · 气色",
    group: "化妆包",
    thumb: "assets/post-zero-privacy.png",
    pos: "34% 70%",
    color: "#d99a8c",
    detail: ["适合豆沙唇和雾粉外套", "少量横扫更自然", "与今日推荐色系一致"]
  }
];

const feedData = {
  zero: [
    {
      user: "momo-042",
      badge: "0糖 · 文字日常",
      title: "今天终于把衣橱里的黑色上衣分完类了",
      body: "发现我不是没衣服，是所有衣服都在表达同一种疲惫。MoCam 建议我先补一件浅色内搭。",
      image: "assets/post-zero-privacy.png",
      stats: "18回应 · 56收藏"
    },
    {
      user: "匿名衣架",
      badge: "0糖 · 清单",
      title: "端午出门不露脸穿搭",
      body: "白T、深墨蓝衬衫、宽松裤、帆布包。舒服、能拍物品照、不拍人。",
      image: "assets/mocam-wardrobe-capture.png",
      stats: "9回应 · 31收藏"
    }
  ],
  half: [
    {
      user: "泡芙 avatar",
      badge: "半糖 · 卡通试穿",
      title: "我的 another me 今天像一杯冷萃摩卡",
      body: "卡通化之后反而敢试墨蓝和金色，感觉很像自己，但压力小很多。",
      image: "assets/post-half-avatar-woman.png",
      stats: "67回应 · 188收藏"
    },
    {
      user: "半糖小眠",
      badge: "半糖 · 心情穿搭",
      title: "想显得不好惹，但不要真的很凶",
      body: "MoCam 给了深色衬衫和圆耳饰，保留一点柔和。这个分寸太懂了。",
      image: "assets/post-half-avatar-woman.png",
      stats: "33回应 · 89收藏"
    }
  ],
  full: [
    {
      user: "Mia",
      badge: "全糖 · OOTD",
      title: "今天让 MoCam 按雨后约会生成了一套",
      body: "真人预览里粉外套比想象中更显气色，准备晚点直接发妆容细节。",
      image: "assets/post-full-ootd-woman.png",
      stats: "126回应 · 430收藏"
    },
    {
      user: "Nana",
      badge: "全糖 · 妆容",
      title: "豆沙唇和雾粉外套真的很搭",
      body: "MoCam 给的低饱和妆容比我平时更干净，整套看起来有气色但不厚重。",
      image: "assets/mocam-digital-woman.png",
      stats: "84回应 · 276收藏"
    }
  ]
};

const sheetPresets = {
  color: {
    title: "今日颜色逻辑",
    body: "雾粉负责气色，鼠尾草绿负责松弛，墨蓝负责结构。三者组合适合春夏交界，也不会显得只是在堆甜美。",
    points: ["主色不要超过 2 个", "金色配饰只保留小体量", "包袋建议选奶白或深棕"]
  },
  makeup: {
    title: "今日妆容",
    body: "底妆保持轻雾面，唇色用低饱和豆沙。眼妆不要太闪，给衣服留出呼吸感。",
    points: ["豆沙唇 + 细眉毛", "腮红横扫一点点", "避免高亮过重"]
  },
  shop: {
    title: "愿望单补齐建议",
    body: "MoCam 会把想买的单品放回你的真实衣橱里看适配度，优先推荐能激活更多套装的款式。",
    points: ["优先补：深色直筒裤", "可激活：雾粉外套、墨蓝衬衫", "适合预算留给鞋包和高频配饰"]
  },
  privacy: {
    title: "隐私仪表盘",
    body: "AI 私密分析和社区展示分开管理。降低糖分后，真人/身体相关展示会自动隐藏。",
    points: ["0糖：只保留物品数据", "半糖：只显示 avatar", "全糖：真人内容需单独授权"]
  },
  travel: {
    title: "旅行行李箱",
    body: "输入目的地、天数和天气，MoCam 会生成每日穿搭、备用单品和化妆包清单。",
    points: ["少带重复色", "按天气准备外套", "每天至少一套可拍照方案"]
  },
  style: {
    title: "风格进化档案",
    body: "记录你从购买、穿着到社区分享的变化，帮你看见自己的审美轨迹。",
    points: ["高频色：粉、绿、墨蓝", "高频场景：通勤、咖啡、旅行", "近期风格：柔和但更有结构"]
  },
  capture: {
    title: "模拟拍摄收录",
    body: "拍下衣物正面，MoCam 会识别品类、颜色、材质、季节、场景和可搭单品。",
    points: ["识别：雾粉短外套", "自动标签：春秋、轻正式", "已加入今日推荐"]
  },
  post: {
    title: "发布到糖分",
    body: "发布入口会根据糖分调整默认展示方式。0糖默认文字，半糖默认 avatar，全糖可选择真人图。",
    points: ["当前可发：文字、衣橱卡片、OOTD", "串门日可用临时身份", "发布前可预览别人看到的样子"]
  },
  pro: {
    title: "MoCam Pro 价值",
    body: "付费版会把“今天穿什么”升级成私人 AI 形象工作室：能试、能聊、能生成、能长期记录。",
    points: ["AI 换衣间：真人、卡通、0糖物品模式都可预览", "搭配建议不限次数，支持节日、天气、场景和心情", "每周生成衣橱、妆容、风格和糖分互动报告"]
  },
  fittingRoom: {
    title: "AI 换衣间",
    body: "选择一件衣服或一套场景，MoCam 会生成你自己的试穿预览。不同糖分会使用不同呈现方式。",
    points: ["0糖：只生成衣物组合和平铺效果", "半糖：用你的 avatar 试穿", "全糖：可生成真人感 OOTD 预览"]
  },
  outfitPack: {
    title: "搭配灵感包",
    body: "把衣橱里的真实单品重新组合成一周计划，不只是推荐单件衣服，而是给出完整造型。",
    points: ["通勤 5 套：正式但不老气", "周末 4 套：松弛、显气色", "约会 3 套：含妆容和配饰建议"]
  },
  wardrobeReport: {
    title: "衣橱体检报告",
    body: "本月衣橱利用率 64%，MoCam 已识别出你的高频风格、闲置单品和最适合继续强化的轮廓。",
    points: ["核心风格：低饱和、轻正式、温柔结构感", "可激活单品：亮色半裙、小金扣耳饰", "建议补充：深色直筒裤、轻薄针织"]
  },
  makeupReport: {
    title: "妆容匹配报告",
    body: "你的衣橱低饱和色较多，豆沙、奶茶、柔雾玫瑰比高饱和红唇更稳定。",
    points: ["今日推荐：豆沙唇 + 轻雾底妆", "腮红少量横扫，不要大面积高光", "金色小耳饰比大项链更适配"]
  },
  spendReport: {
    title: "场景胶囊衣橱",
    body: "MoCam 会围绕你的真实行程生成胶囊衣橱，让用户感觉每天都有被认真准备。",
    points: ["工作日：5 套轻正式通勤", "周末：2 套松弛拍照友好造型", "节日：自动加入妆容、配饰和发型提示"]
  },
  communityReport: {
    title: "糖分互动报告",
    body: "你的半糖内容互动最高，用户更喜欢 avatar 试穿和心情穿搭类分享。",
    points: ["高收藏主题：显气色但不甜腻", "适合周三串门日发布衣橱清单", "全糖内容建议保留妆容细节"]
  }
};

let activeSugar = "half";
let activeTab = "onboarding";
let activeCommunity = "half";
let activeClosetFilter = "全部";

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
  document.querySelector("#profileTitle").textContent = `${profile.name}用户`;
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
  const groups = ["上装", "下装", "配饰", "化妆包"];
  const visibleGroups = activeClosetFilter === "全部" ? groups : groups.filter((group) => group === activeClosetFilter);
  list.innerHTML = visibleGroups.map((group) => {
    const groupItems = closetItems
      .map((item, index) => ({ ...item, index }))
      .filter((item) => item.group === group);
    return `
      <section class="closet-section">
        <div class="closet-section-head">
          <strong>${group}</strong>
          <span>${groupItems.length} 件</span>
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
  }).join("") || `<section class="empty-state"><strong>暂无单品</strong><p>拍照收录后，MoCam 会自动分类到这里。</p></section>`;

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
          <span>点开详情</span>
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
        points: [post.body, post.stats, activeCommunity === "zero" ? "该内容默认不展示真人信息" : "可在当前糖分社区互动"]
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
      <button class="close-sheet" type="button" aria-label="关闭">
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
  const activeMood = document.querySelector(".quick-chip.active")?.dataset.mood || "通勤";
  const profile = sugarProfiles[activeSugar];
  const wardrobe = closetItems
    .map((item) => `${item.name}（${item.meta}）`)
    .join("；");

  return [
    "你是 MoCam 的 AI 造型师，正在为一个手机 App MVP 生成真实演示结果。",
    `当前用户糖分：${profile.name}。隐私呈现规则：${profile.profile}`,
    `用户今天想要的场景/心情：${activeMood}`,
    `已录入衣橱与化妆包：${wardrobe}`,
    "请基于已有单品给出中文结果，不要推荐不存在的大量新商品。",
    "返回 4 条极短建议：1 套今日穿搭、1 个色系逻辑、1 个妆容/配饰建议、1 个符合当前糖分的呈现方式。"
  ].join("\n");
}

async function runMiroMindStylist() {
  const button = document.querySelector("#runMiroMind");
  const reply = document.querySelector("#aiReply");
  const status = document.querySelector("#miromindStatus");
  const originalText = button.textContent;

  button.disabled = true;
  button.textContent = "分析中...";
  status.textContent = "MiroMind 正在通过服务端代理读取衣橱、糖分和今日场景。";
  reply.textContent = "我正在把你的衣橱、糖分和今日场景交给 MiroMind 做一次真实分析...";

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

    reply.textContent = data.content || "MiroMind 已返回，但没有可展示的文字内容。";
    status.textContent = data.usage?.total_tokens
      ? `MiroMind API 已完成：${data.usage.total_tokens} tokens。`
      : "MiroMind API 已完成，当前结果来自真实服务端调用。";
  } catch (error) {
    reply.textContent = "MiroMind 代理已经接入，但当前环境可能受 API 地区限制。参赛部署时把服务端函数部署到支持地区后，这里会显示真实的 AI 穿搭分析。";
    status.textContent = `MiroMind 暂不可用：${error.message || "请检查部署地区或服务端环境变量。"}`;
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
      "通勤": "你的衣橱里柔和色偏多，今天用墨蓝做一点结构感，会比单纯甜美更像“你”。",
      "约会": "约会场景建议保留雾粉外套和金色耳饰，妆容轻一点，重点放在气色。",
      "松弛": "松弛感来自留白：减少叠戴，换成帆布包或低跟鞋，让整体更像日常生活。",
      "不好惹": "把外套换成深墨蓝衬衫单穿，再加直线型包袋，柔和里会多一点边界感。"
    };
    document.querySelector("#insightText").textContent = copy[mood];
  });
});

document.querySelectorAll("[data-chat]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-chat]").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    const replies = {
      date: "约会版我会把墨蓝衬衫换成更柔软的领口，保留雾粉外套和豆沙唇，再加小金扣耳饰提升气色。",
      office: "通勤版建议把鼠尾草半裙换成更挺括的下装，包选奶白腋下包，整体干净但有职业感。",
      rain: "下雨备选：保留深墨蓝衬衫，外套换成防皱短外套，妆容减少高光，鞋包选不怕水的材质。"
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
