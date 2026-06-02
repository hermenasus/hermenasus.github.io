const topics = {
  student: {
    category: "Career Entry",
    price: "￥199",
    title: "大學生就業指導：第一步就做對",
    intro:
      "針對在學生與畢業生，協助釐清方向、選擇公司與職位、準備履歷與面試，並處理求職中的焦慮與家庭期待。",
    points: [
      "從個人優勢與現實市場中定方向。",
      "評估 offer、公司與職位的長期價值。",
      "建立求職敘事，降低面試與入職焦慮。"
    ],
    expanded:
      "適合正在找第一份工作、準備校招或面臨多個 offer 的學生。討論會聚焦方向選擇、公司篩選、履歷內容、面試準備，以及入職前常見的不確定感。"
  },
  funding: {
    category: "Venture Advisory",
    price: "￥599",
    title: "投資人幫你看項目：BP、路演與融資",
    intro:
      "面向創始團隊，從投資人視角檢視 BP、融資方案與路演表達，幫助創業者更清楚地呈現業務價值。",
    points: [
      "對 BP 與融資方案提出整體建議。",
      "梳理融資過程中的關鍵問題與缺口。",
      "訓練路演順序、重點與投資人關心的判斷。"
    ],
    expanded:
      "Ethan 現為創投機構合夥人，曾連續創業 8 年並參與多個項目的從 0 到 1。此模組適合已準備 BP、準備路演或正在尋找合適投資人的創始團隊。"
  },
  operation: {
    category: "Operating Review",
    price: "￥599",
    title: "與 COO 一起檢視你的營運項目",
    intro:
      "針對營運負責人與成長團隊，檢視產品營運、用戶成長、社群、計畫書與跨部門協作是否抓住重點。",
    points: [
      "分辨營運忙碌與真正有效工作的差異。",
      "檢視產品早期最重要的營運行為。",
      "梳理營運、產品、市場之間的責任與合作。"
    ],
    expanded:
      "Ethan 曾在創業公司擔任 COO，也曾在上市集團擔任營運 VP 類職務。此模組會用高層營運與投資評估雙重視角，檢視項目的優先級與缺失。"
  },
  career: {
    category: "Career Strategy",
    price: "￥499",
    title: "職場規劃輔導：分析瓶頸，走出低谷",
    intro:
      "面向正在猶豫轉職、創業、升遷或陷入工作低谷的人，從自我認識、方向確認到行動方案進行拆解。",
    points: [
      "找到被忽略的天賦、優勢與限制。",
      "分析不敢下決定的原因與現實條件。",
      "制定能落地的下一步行動指引。"
    ],
    expanded:
      "適合想離職又不確定、想突破舒適圈、做過測評仍無法判斷方向的人。目標是降低職場焦慮，讓選擇變得更清晰、更可執行。"
  },
  resume: {
    category: "Interview Coaching",
    price: "￥499",
    title: "履歷與面試輔導：量身定制的實戰傳授",
    intro:
      "在投遞履歷或重要面試前，協助重新盤點經歷、提煉優勢、修改履歷，並進行面試推演。",
    points: [
      "手把手修改履歷，聚焦真正有用的內容。",
      "拆解面試官問題背後的意圖。",
      "建立能準確表達個人價值的面試敘事。"
    ],
    expanded:
      "Ethan 累積超過 1000 次招聘與輔導案例，也曾擔任 MBA 職涯中心客座面試官。此模組適合珍惜關鍵職位機會、需要深度打磨履歷與面試表達的人。"
  }
};

const topicTabs = document.querySelectorAll(".topic-tab");
const title = document.querySelector("#topic-title");
const category = document.querySelector("#topic-category");
const price = document.querySelector("#topic-price");
const intro = document.querySelector("#topic-intro");
const points = document.querySelector("#topic-points");
const expandButton = document.querySelector("#expand-topic");
const expanded = document.querySelector("#topic-expanded");

function renderTopic(key) {
  const topic = topics[key];
  title.textContent = topic.title;
  category.textContent = topic.category;
  price.textContent = topic.price;
  intro.textContent = topic.intro;
  points.replaceChildren(
    ...topic.points.map((point) => {
      const li = document.createElement("li");
      li.textContent = point;
      return li;
    })
  );
  expanded.textContent = topic.expanded;
  expanded.hidden = true;
  expandButton.setAttribute("aria-expanded", "false");
  expandButton.textContent = "展開完整模組";
}

topicTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    topicTabs.forEach((item) => {
      item.classList.remove("active");
      item.setAttribute("aria-selected", "false");
    });
    tab.classList.add("active");
    tab.setAttribute("aria-selected", "true");
    renderTopic(tab.dataset.topic);
  });
});

expandButton.addEventListener("click", () => {
  const shouldOpen = expanded.hidden;
  expanded.hidden = !shouldOpen;
  expandButton.setAttribute("aria-expanded", String(shouldOpen));
  expandButton.textContent = shouldOpen ? "收起完整模組" : "展開完整模組";
});

document.querySelectorAll(".expertise-item").forEach((item) => {
  item.addEventListener("click", () => {
    document
      .querySelectorAll(".expertise-item")
      .forEach((button) => button.classList.remove("active"));
    item.classList.add("active");
  });
});

const reviews = window.ETHAN_REVIEWS || [];
const reviewGrid = document.querySelector("#reviews-grid");
const reviewFilter = document.querySelector("#review-filter");
const reviewTotal = document.querySelector("#review-total");
const reviewCountLabel = document.querySelector("#review-count-label");
const reviewTopicLabel = document.querySelector("#review-topic-label");
const loadMoreReviews = document.querySelector("#load-more-reviews");
const pageSize = 9;
let visibleReviews = pageSize;
let activeTopic = "all";

function getFilteredReviews() {
  if (activeTopic === "all") return reviews;
  return reviews.filter((review) => review.topic === activeTopic);
}

function normalizeTopic(topic) {
  return topic
    .replace("大学生就业指导 (第一步就做对)", "大學生就業指導")
    .replace("投资人帮你看项目(BP,路演与融资)", "BP / 路演 / 融資")
    .replace("与COO一起检视你的运营项目", "營運項目檢視")
    .replace("职场规划辅导(分析瓶颈,走出低谷)", "職場規劃輔導")
    .replace("简历与面试辅导(量身定制的实战传授)", "履歷與面試輔導")
    .replace("专家职场生涯咨询，2019该往哪走", "專家職場生涯諮詢")
    .replace("諮詢服務", "未標記主題");
}

function createAvatar(review) {
  const avatar = document.createElement("span");
  avatar.className = "review-avatar";
  if (review.avatar) {
    const img = document.createElement("img");
    img.src = review.avatar;
    img.alt = "";
    img.loading = "lazy";
    avatar.append(img);
  } else {
    avatar.textContent = review.name.slice(0, 1).toUpperCase();
  }
  return avatar;
}

function createReviewCard(review) {
  const card = document.createElement("article");
  card.className = "review-card";

  const top = document.createElement("div");
  top.className = "review-card__top";
  top.append(createAvatar(review));

  const person = document.createElement("div");
  const name = document.createElement("strong");
  name.className = "review-card__name";
  name.textContent = review.name;
  const topic = document.createElement("span");
  topic.className = "review-card__topic";
  topic.textContent = normalizeTopic(review.topic);
  person.append(name, topic);

  const index = document.createElement("span");
  index.className = "review-card__index";
  index.textContent = `#${String(review.index).padStart(3, "0")}`;
  top.append(person, index);

  const body = document.createElement("p");
  body.className = "review-card__body";
  body.textContent = review.comments;

  const footer = document.createElement("div");
  footer.className = "review-card__footer";
  const meta = document.createElement("span");
  meta.className = "review-card__meta";
  meta.textContent = review.time || "在行評論";
  const expand = document.createElement("button");
  expand.className = "review-expand";
  expand.type = "button";
  expand.textContent = "展開";
  expand.addEventListener("click", () => {
    const isExpanded = card.classList.toggle("expanded");
    expand.textContent = isExpanded ? "收起" : "展開";
  });
  footer.append(meta, expand);

  card.append(top, body);
  if (review.replies.length) {
    const reply = document.createElement("div");
    reply.className = "review-reply";
    reply.textContent = review.replies[0].comments;
    card.append(reply);
  }
  card.append(footer);
  return card;
}

function renderReviews() {
  const filtered = getFilteredReviews();
  const selected = filtered.slice(0, visibleReviews);
  reviewGrid.replaceChildren(...selected.map(createReviewCard));
  reviewTotal.textContent = String(reviews.length);
  reviewCountLabel.textContent = `顯示 ${selected.length} / ${filtered.length} 則`;
  reviewTopicLabel.textContent =
    activeTopic === "all" ? "全部主題" : normalizeTopic(activeTopic);
  loadMoreReviews.hidden = selected.length >= filtered.length;
}

function setupReviewFilter() {
  const topics = Array.from(new Set(reviews.map((review) => review.topic)));
  const allOption = document.createElement("option");
  allOption.value = "all";
  allOption.textContent = `全部主題（${reviews.length}）`;
  reviewFilter.append(allOption);
  topics.forEach((topic) => {
    const option = document.createElement("option");
    option.value = topic;
    option.textContent = `${normalizeTopic(topic)}（${
      reviews.filter((review) => review.topic === topic).length
    }）`;
    reviewFilter.append(option);
  });
}

if (reviewGrid && reviewFilter && reviews.length) {
  setupReviewFilter();
  renderReviews();
  reviewFilter.addEventListener("change", () => {
    activeTopic = reviewFilter.value;
    visibleReviews = pageSize;
    renderReviews();
  });
  loadMoreReviews.addEventListener("click", () => {
    visibleReviews += pageSize;
    renderReviews();
  });
}
