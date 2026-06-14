const supportedLocales = ["zh-Hant", "zh-Hans", "en"];
const reviewApiUrl = "https://www.zaih.com/falcon/meet_api/v1/mentors/2bllbjjbq3k/comments";
const pageSize = 9;

const copy = {
  "zh-Hant": {
    pageTitle: "Ethan Chen | 創投與職涯顧問",
    navLabel: "主要導覽",
    languageLabel: "語言切換",
    nav: ["簡介", "聯繫", "諮詢主題", "媒體", "評價"],
    portraitAlt: "Ethan 陳清豪頭像",
    focusLabel: "Focus",
    focusValue: "VC / COO / Career Strategy",
    eyebrowHero: "北京顧問",
    heroName: "Ethan 陳清豪",
    subtitle: "VC 合夥人、前營運中心總經理、連續創業者與職涯規劃教練。",
    lead:
      "以 27 年職場經驗、8 年創業經驗與投資人視角，協助創業者、營運負責人與職場人才，將複雜選擇轉化為可落地的判斷與行動。",
    heroActionsLabel: "頁面操作",
    heroPrimary: "查看諮詢主題",
    heroSecondary: "了解背景",
    signalLabel: "公開資料摘要",
    signal: ["評分", "響應率", "約聊人數"],
    responseHigh: "高",
    profileEyebrow: "Profile",
    profileTitle: "從工程、產品、營運到投資的複合型顧問",
    profileBody: [
      "Ethan 是在行評選的年度行家，可提供職場發展、創業融資、互聯網營運策略與個人優勢發掘等方向的諮詢。他曾任世界 500 強公司的產品與技術高管，也曾擔任上市集團公司的營運中心副總。",
      "他聯合創立 gOS、街旁網與暖島，參與多個創業項目從 0 到 1、從 1 到 10 的成長過程；目前作為創投機構合夥人，關注智能製造、消費升級與區塊鏈領域的早期投資。"
    ],
    expertiseLabel: "核心能力",
    expertise: ["職涯瓶頸與方向判斷", "創業項目審視與融資策略", "營運策略檢視與優先級梳理", "天賦優勢與面試表達"],
    contactEyebrow: "Contact",
    contactTitle: "連到完整經歷，或直接預約諮詢",
    contactBody:
      "若想查看更完整的工作經驗與專業網絡，可從 LinkedIn 了解 Ethan 的職涯背景；若想預約一對一諮詢，可直接前往在行落地頁。",
    contactLabel: "聯繫方式",
    linkedinCta: "查看完整工作經驗並聯繫",
    zaihLabel: "在行落地頁",
    zaihCta: "查看諮詢詳情與預約入口",
    topicsEyebrow: "Consulting Modules",
    topicsTitle: "可點擊的諮詢主題",
    topicsLabel: "諮詢主題",
    expand: "展開完整模組",
    collapse: "收起完整模組",
    timelineEyebrow: "Career Timeline",
    timelineTitle: "職業經歷與專業成就",
    timeline: [
      ["2017.01 - 至今", "麟璽創投", "投資人"],
      ["2015.09 - 2016.11", "思源集團", "營運中心總經理"],
      ["2009.12 - 2015.02", "街旁網", "聯合創始人"],
      ["2008.01 - 2009.12", "台灣華碩電腦 ASUS", "高級產品經理"],
      ["1994.09 - 2008.01", "台灣精誠集團", "技術研發處副處長"]
    ],
    achievements: ["在行 2018 年度行家獎", "教育部「互聯網+」大學生雙創大賽評委", "招聘與職場發展指導案例 1000+"],
    mediaEyebrow: "Media",
    mediaTitle: "媒體與活動照片",
    media: ["創業與職涯活動現場", "論壇交流", "課程與工作坊分享", "公開演講", "商業活動合影", "在行年度行家獎"],
    reviewsEyebrow: "Reviews",
    reviewsTitle: "用戶評價",
    reviewsBody:
      "每次開啟頁面都會同步原頁公開評論資料，並更新評論總數。每則評論保留原始主題、時間、用戶名稱與文字內容，方便快速理解 Ethan 的諮詢品質與服務風格。",
    reviewsState: "公開文字評價",
    reviewsSource: "來自在行評論接口",
    reviewsBrowserLabel: "用戶評論瀏覽器",
    syncReviews: "正在同步評論",
    allTopics: "全部主題",
    topicFilter: "主題篩選",
    showing: (shown, total) => `顯示 ${shown} / ${total} 則`,
    fallbackNotice: "目前顯示備份評論",
    noReviews: "此主題尚無評論",
    reviewFallbackMeta: "在行評論",
    expandReview: "展開",
    collapseReview: "收起",
    pageLabel: (page, total) => `第 ${page} / ${total} 頁`,
    prev: "上一頁",
    next: "下一頁",
    footer: "內容改寫自公開在行個人頁。",
    sourceLink: "查看來源頁面"
  },
  "zh-Hans": {
    pageTitle: "Ethan Chen | 创投与职业顾问",
    navLabel: "主导航",
    languageLabel: "语言切换",
    nav: ["简介", "联系", "咨询主题", "媒体", "评价"],
    portraitAlt: "Ethan 陈清豪头像",
    focusLabel: "Focus",
    focusValue: "VC / COO / Career Strategy",
    eyebrowHero: "北京顾问",
    heroName: "Ethan 陈清豪",
    subtitle: "VC 合伙人、前运营中心总经理、连续创业者与职业规划教练。",
    lead:
      "结合 27 年职场经验、8 年创业经验和投资人视角，帮助创业者、运营负责人及职场人才，把复杂选择拆成清晰、可执行的判断与行动。",
    heroActionsLabel: "页面操作",
    heroPrimary: "查看咨询主题",
    heroSecondary: "了解背景",
    signalLabel: "公开资料摘要",
    signal: ["评分", "响应率", "约聊人数"],
    responseHigh: "高",
    profileEyebrow: "Profile",
    profileTitle: "从工程、产品、运营到投资的复合型顾问",
    profileBody: [
      "Ethan 是在行评选的年度行家，可提供职业发展、创业融资、互联网运营策略和个人优势发掘等方向的咨询。他曾任世界 500 强公司的产品与技术高管，也曾担任上市集团公司的运营中心副总。",
      "他联合创立 gOS、街旁网和暖岛，参与多个创业项目从 0 到 1、从 1 到 10 的成长过程；目前作为创投机构合伙人，关注智能制造、消费升级和区块链领域的早期投资。"
    ],
    expertiseLabel: "核心能力",
    expertise: ["职业瓶颈与方向判断", "创业项目审视与融资策略", "运营策略检查与优先级梳理", "天赋优势与面试表达"],
    contactEyebrow: "Contact",
    contactTitle: "查看完整经历，或直接预约咨询",
    contactBody:
      "如果想了解更完整的工作经历与专业网络，可以通过 LinkedIn 查看 Ethan 的职业背景；如果想预约一对一咨询，可以直接前往在行落地页。",
    contactLabel: "联系方式",
    linkedinCta: "查看完整工作经历并联系",
    zaihLabel: "在行落地页",
    zaihCta: "查看咨询详情与预约入口",
    topicsEyebrow: "Consulting Modules",
    topicsTitle: "可点击的咨询主题",
    topicsLabel: "咨询主题",
    expand: "展开完整模块",
    collapse: "收起完整模块",
    timelineEyebrow: "Career Timeline",
    timelineTitle: "职业经历与专业成就",
    timeline: [
      ["2017.01 - 至今", "麟玺创投", "投资人"],
      ["2015.09 - 2016.11", "思源集团", "运营中心总经理"],
      ["2009.12 - 2015.02", "街旁网", "联合创始人"],
      ["2008.01 - 2009.12", "台湾华硕电脑 ASUS", "高级产品经理"],
      ["1994.09 - 2008.01", "台湾精诚集团", "技术研发处副处长"]
    ],
    achievements: ["在行 2018 年度行家奖", "教育部“互联网+”大学生双创大赛评委", "招聘与职业发展指导案例 1000+"],
    mediaEyebrow: "Media",
    mediaTitle: "媒体与活动照片",
    media: ["创业与职业活动现场", "论坛交流", "课程与工作坊分享", "公开演讲", "商业活动合影", "在行年度行家奖"],
    reviewsEyebrow: "Reviews",
    reviewsTitle: "用户评价",
    reviewsBody:
      "每次打开页面都会同步原页公开评论资料，并更新评论总数。每条评论保留原始主题、时间、用户名称与文字内容，方便快速了解 Ethan 的咨询品质与服务风格。",
    reviewsState: "公开文字评价",
    reviewsSource: "来自在行评论接口",
    reviewsBrowserLabel: "用户评论浏览器",
    syncReviews: "正在同步评论",
    allTopics: "全部主题",
    topicFilter: "主题筛选",
    showing: (shown, total) => `显示 ${shown} / ${total} 条`,
    fallbackNotice: "当前显示备用评论",
    noReviews: "此主题暂无评论",
    reviewFallbackMeta: "在行评论",
    expandReview: "展开",
    collapseReview: "收起",
    pageLabel: (page, total) => `第 ${page} / ${total} 页`,
    prev: "上一页",
    next: "下一页",
    footer: "内容改写自公开在行个人页。",
    sourceLink: "查看来源页面"
  },
  en: {
    pageTitle: "Ethan Chen | Venture and Career Advisor",
    navLabel: "Primary navigation",
    languageLabel: "Language switcher",
    nav: ["Profile", "Contact", "Topics", "Media", "Reviews"],
    portraitAlt: "Portrait of Ethan Chen",
    focusLabel: "Focus",
    focusValue: "VC / COO / Career Strategy",
    eyebrowHero: "Advisor based in Beijing",
    heroName: "Ethan Chen",
    subtitle: "VC partner, former operations executive, serial founder, and career strategy coach.",
    lead:
      "Ethan brings 27 years of professional experience, 8 years as a founder, and an investor's lens to help founders, operators, and professionals turn complex choices into grounded next steps.",
    heroActionsLabel: "Page actions",
    heroPrimary: "View topics",
    heroSecondary: "Read profile",
    signalLabel: "Public profile summary",
    signal: ["Rating", "Response", "Meetings"],
    responseHigh: "High",
    profileEyebrow: "Profile",
    profileTitle: "A cross-functional advisor across engineering, product, operations, and venture investing",
    profileBody: [
      "Ethan is an annual expert selected by Zaih. He advises on career growth, startup fundraising, internet operations, and personal strengths. He has served as a product and technology executive at a Fortune 500 company and as an operations executive for a listed group.",
      "He co-founded gOS, Jiepang, and Nuandao, and has helped several startups move from 0 to 1 and from 1 to 10. As a venture partner, he focuses on early-stage opportunities in advanced manufacturing, consumer upgrades, and blockchain."
    ],
    expertiseLabel: "Core strengths",
    expertise: ["Career bottlenecks and direction", "Startup review and fundraising strategy", "Operations priorities and strategy", "Strengths, positioning, and interviews"],
    contactEyebrow: "Contact",
    contactTitle: "Explore the full background or book a consultation",
    contactBody:
      "LinkedIn is the best place to review Ethan's broader professional background and network. For one-on-one advisory sessions, the Zaih profile links directly to the booking flow.",
    contactLabel: "Contact options",
    linkedinCta: "View full experience and connect",
    zaihLabel: "Zaih profile",
    zaihCta: "View consultation details and booking",
    topicsEyebrow: "Consulting Modules",
    topicsTitle: "Consulting topics",
    topicsLabel: "Consulting topics",
    expand: "Show full module",
    collapse: "Hide full module",
    timelineEyebrow: "Career Timeline",
    timelineTitle: "Career experience and achievements",
    timeline: [
      ["2017.01 - Present", "Linxi Ventures", "Investor"],
      ["2015.09 - 2016.11", "Siyuan Group", "General Manager, Operations Center"],
      ["2009.12 - 2015.02", "Jiepang", "Co-founder"],
      ["2008.01 - 2009.12", "ASUS Taiwan", "Senior Product Manager"],
      ["1994.09 - 2008.01", "SYSTEX Taiwan", "Deputy Director, R&D"]
    ],
    achievements: ["Zaih 2018 Annual Expert Award", "Judge, Ministry of Education Internet+ Innovation Competition", "1,000+ recruiting and career advisory cases"],
    mediaEyebrow: "Media",
    mediaTitle: "Media and event photos",
    media: ["Startup and career advisory event", "Forum exchange", "Course and workshop sharing", "Public talk", "Business event photo", "Zaih annual expert award"],
    reviewsEyebrow: "Reviews",
    reviewsTitle: "Client reviews",
    reviewsBody:
      "Reviews are synchronized from the original public source every time the page opens, and the total count updates automatically. Each review keeps its original topic, time, user name, and comment text so visitors can read the service quality in context.",
    reviewsState: "Public text reviews",
    reviewsSource: "From the Zaih reviews API",
    reviewsBrowserLabel: "Client review browser",
    syncReviews: "Syncing reviews",
    allTopics: "All topics",
    topicFilter: "Filter by topic",
    showing: (shown, total) => `Showing ${shown} of ${total}`,
    fallbackNotice: "Showing backup reviews",
    noReviews: "No reviews for this topic yet",
    reviewFallbackMeta: "Zaih review",
    expandReview: "Expand",
    collapseReview: "Collapse",
    pageLabel: (page, total) => `Page ${page} of ${total}`,
    prev: "Previous",
    next: "Next",
    footer: "Content adapted from the public Zaih profile.",
    sourceLink: "View source profile"
  }
};

const topics = {
  "zh-Hant": {
    student: {
      tab: "大學生就業指導",
      category: "Career Entry",
      price: "￥199",
      title: "大學生就業指導：第一步就做對",
      intro: "針對在學生與畢業生，協助釐清方向、選擇公司與職位、準備履歷與面試，並處理求職中的焦慮與家庭期待。",
      points: ["從個人優勢與現實市場中定方向。", "評估 offer、公司與職位的長期價值。", "建立求職敘事，降低面試與入職焦慮。"],
      expanded: "適合正在找第一份工作、準備校招或面臨多個 offer 的學生。討論會聚焦方向選擇、公司篩選、履歷內容、面試準備，以及入職前常見的不確定感。"
    },
    funding: {
      tab: "BP / 路演 / 融資",
      category: "Venture Advisory",
      price: "￥599",
      title: "投資人幫你看項目：BP、路演與融資",
      intro: "面向創始團隊，從投資人視角檢視 BP、融資方案與路演表達，幫助創業者更清楚地呈現業務價值。",
      points: ["對 BP 與融資方案提出整體建議。", "梳理融資過程中的關鍵問題與缺口。", "訓練路演順序、重點與投資人關心的判斷。"],
      expanded: "Ethan 現為創投機構合夥人，曾連續創業 8 年並參與多個項目的從 0 到 1。此模組適合已準備 BP、準備路演或正在尋找合適投資人的創始團隊。"
    },
    operation: {
      tab: "營運項目檢視",
      category: "Operating Review",
      price: "￥599",
      title: "與 COO 一起檢視你的營運項目",
      intro: "針對營運負責人與成長團隊，檢視產品營運、用戶成長、社群、計畫書與跨部門協作是否抓住重點。",
      points: ["分辨營運忙碌與真正有效工作的差異。", "檢視產品早期最重要的營運行為。", "梳理營運、產品、市場之間的責任與合作。"],
      expanded: "Ethan 曾在創業公司擔任 COO，也曾在上市集團擔任營運 VP 類職務。此模組會用高層營運與投資評估雙重視角，檢視項目的優先級與缺失。"
    },
    career: {
      tab: "職場規劃輔導",
      category: "Career Strategy",
      price: "￥499",
      title: "職場規劃輔導：分析瓶頸，走出低谷",
      intro: "面向正在猶豫轉職、創業、升遷或陷入工作低谷的人，從自我認識、方向確認到行動方案進行拆解。",
      points: ["找到被忽略的天賦、優勢與限制。", "分析不敢下決定的原因與現實條件。", "制定能落地的下一步行動指引。"],
      expanded: "適合想離職又不確定、想突破舒適圈、做過測評仍無法判斷方向的人。目標是降低職場焦慮，讓選擇變得更清晰、更可執行。"
    },
    resume: {
      tab: "履歷與面試輔導",
      category: "Interview Coaching",
      price: "￥499",
      title: "履歷與面試輔導：量身定制的實戰傳授",
      intro: "在投遞履歷或重要面試前，協助重新盤點經歷、提煉優勢、修改履歷，並進行面試推演。",
      points: ["手把手修改履歷，聚焦真正有用的內容。", "拆解面試官問題背後的意圖。", "建立能準確表達個人價值的面試敘事。"],
      expanded: "Ethan 累積超過 1000 次招聘與輔導案例，也曾擔任 MBA 職涯中心客座面試官。此模組適合珍惜關鍵職位機會、需要深度打磨履歷與面試表達的人。"
    }
  },
  "zh-Hans": {
    student: {
      tab: "大学生就业指导",
      category: "Career Entry",
      price: "￥199",
      title: "大学生就业指导：第一步就做对",
      intro: "面向在校生与毕业生，帮助厘清方向、选择公司和岗位、准备简历与面试，并处理求职中的焦虑和家庭期待。",
      points: ["从个人优势和现实市场中确定方向。", "评估 offer、公司和岗位的长期价值。", "建立求职叙事，降低面试和入职焦虑。"],
      expanded: "适合正在找第一份工作、准备校招或面临多个 offer 的学生。讨论会聚焦方向选择、公司筛选、简历内容、面试准备，以及入职前常见的不确定感。"
    },
    funding: {
      tab: "BP / 路演 / 融资",
      category: "Venture Advisory",
      price: "￥599",
      title: "投资人帮你看项目：BP、路演与融资",
      intro: "面向创始团队，从投资人视角检查 BP、融资方案和路演表达，帮助创业者更清楚地呈现业务价值。",
      points: ["对 BP 和融资方案提出整体建议。", "梳理融资过程中的关键问题与缺口。", "训练路演顺序、重点和投资人关心的判断。"],
      expanded: "Ethan 现为创投机构合伙人，曾连续创业 8 年并参与多个项目从 0 到 1。此模块适合已准备 BP、准备路演或正在寻找合适投资人的创始团队。"
    },
    operation: {
      tab: "运营项目检视",
      category: "Operating Review",
      price: "￥599",
      title: "与 COO 一起检视你的运营项目",
      intro: "面向运营负责人和增长团队，检查产品运营、用户增长、社群、计划书和跨部门协作是否抓住重点。",
      points: ["分辨运营忙碌和真正有效工作的差异。", "检查产品早期最重要的运营行为。", "梳理运营、产品、市场之间的责任与合作。"],
      expanded: "Ethan 曾在创业公司担任 COO，也曾在上市集团担任运营 VP 类职务。此模块会用高层运营和投资评估双重视角，检查项目的优先级与缺失。"
    },
    career: {
      tab: "职业规划辅导",
      category: "Career Strategy",
      price: "￥499",
      title: "职业规划辅导：分析瓶颈，走出低谷",
      intro: "面向正在犹豫转职、创业、晋升或陷入工作低谷的人，从自我认识、方向确认到行动方案进行拆解。",
      points: ["找到被忽略的天赋、优势与限制。", "分析不敢下决定的原因与现实条件。", "制定能落地的下一步行动指引。"],
      expanded: "适合想离职又不确定、想突破舒适圈、做过测评仍无法判断方向的人。目标是降低职场焦虑，让选择更清晰、更可执行。"
    },
    resume: {
      tab: "简历与面试辅导",
      category: "Interview Coaching",
      price: "￥499",
      title: "简历与面试辅导：量身定制的实战传授",
      intro: "在投递简历或重要面试前，协助重新盘点经历、提炼优势、修改简历，并进行面试推演。",
      points: ["手把手修改简历，聚焦真正有用的内容。", "拆解面试官问题背后的意图。", "建立能准确表达个人价值的面试叙事。"],
      expanded: "Ethan 累计超过 1000 次招聘与辅导案例，也曾担任 MBA 职业中心客座面试官。此模块适合珍惜关键岗位机会、需要深度打磨简历与面试表达的人。"
    }
  },
  en: {
    student: {
      tab: "Student career entry",
      category: "Career Entry",
      price: "￥199",
      title: "Student career guidance: start with the right first move",
      intro: "For students and recent graduates who need to clarify direction, choose roles and companies, prepare resumes and interviews, and manage career anxiety.",
      points: ["Set direction from personal strengths and market reality.", "Evaluate the long-term value of offers, companies, and roles.", "Build a job-search narrative that reduces interview and onboarding anxiety."],
      expanded: "Best for students looking for a first job, preparing for campus recruiting, or comparing several offers. The session focuses on direction, company screening, resume content, interview preparation, and pre-entry uncertainty."
    },
    funding: {
      tab: "BP / Pitch / Fundraising",
      category: "Venture Advisory",
      price: "￥599",
      title: "Investor review for your BP, pitch, and fundraising plan",
      intro: "For founding teams, Ethan reviews the business plan, fundraising approach, and pitch narrative through an investor's lens.",
      points: ["Give holistic feedback on the BP and fundraising plan.", "Identify gaps and hard questions in the fundraising process.", "Shape the pitch sequence around what investors actually need to judge."],
      expanded: "Ethan is a venture partner and spent 8 years as a serial founder. This module is built for teams preparing a BP, rehearsing a pitch, or looking for the right investors."
    },
    operation: {
      tab: "Operations review",
      category: "Operating Review",
      price: "￥599",
      title: "Review your operations project with a COO perspective",
      intro: "For operators and growth teams, this checks whether product operations, user growth, community work, planning, and cross-team collaboration are focused on what matters.",
      points: ["Separate busy operations from effective work.", "Review the most important early-stage operating moves.", "Clarify responsibilities across operations, product, and marketing."],
      expanded: "Ethan has served as COO in startups and as an operations executive in a listed group. The module combines operating leadership with investor evaluation to clarify priorities and gaps."
    },
    career: {
      tab: "Career strategy",
      category: "Career Strategy",
      price: "￥499",
      title: "Career strategy: diagnose bottlenecks and get unstuck",
      intro: "For people weighing a job change, startup path, promotion, or a low point at work, the session moves from self-understanding to direction and next actions.",
      points: ["Find overlooked strengths, talents, and constraints.", "Understand why the decision feels hard and what conditions matter.", "Create a practical next-step plan."],
      expanded: "Best for people who want to leave but are unsure, want to break out of a comfort zone, or still feel lost after assessments. The goal is to reduce anxiety and make the next choice executable."
    },
    resume: {
      tab: "Resume and interview",
      category: "Interview Coaching",
      price: "￥499",
      title: "Resume and interview coaching with practical customization",
      intro: "Before an important application or interview, Ethan helps review experience, extract strengths, revise the resume, and rehearse interview responses.",
      points: ["Revise the resume with attention to what actually matters.", "Unpack what interviewers are really asking.", "Build a narrative that communicates personal value clearly."],
      expanded: "Ethan has handled 1,000+ recruiting and coaching cases and has served as a guest interviewer for an MBA career center. This module is for people who want to polish a high-stakes opportunity deeply."
    }
  }
};

const topicKeys = ["student", "funding", "operation", "career", "resume"];
const topicAliases = {
  "大学生就业指导 (第一步就做对)": "student",
  "投资人帮你看项目(BP,路演与融资)": "funding",
  "与COO一起检视你的运营项目": "operation",
  "职场规划辅导(分析瓶颈,走出低谷)": "career",
  "简历与面试辅导(量身定制的实战传授)": "resume"
};

let locale = resolveInitialLocale();
let activeTopicKey = "student";
let reviews = [];
let activeReviewTopic = "all";
let currentPage = 1;
let usingFallbackReviews = false;

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

const topicTabs = $$(".topic-tab");
const topicTitle = $("#topic-title");
const topicCategory = $("#topic-category");
const topicPrice = $("#topic-price");
const topicIntro = $("#topic-intro");
const topicPoints = $("#topic-points");
const expandButton = $("#expand-topic");
const expanded = $("#topic-expanded");
const reviewGrid = $("#reviews-grid");
const reviewFilter = $("#review-filter");
const reviewTotal = $("#review-total");
const reviewCountLabel = $("#review-count-label");
const reviewTopicLabel = $("#review-topic-label");
const reviewsPagination = $("#reviews-pagination");

function resolveInitialLocale() {
  const saved = localStorage.getItem("ethan-locale");
  if (supportedLocales.includes(saved)) return saved;

  const languages = navigator.languages?.length ? navigator.languages : [navigator.language];
  const region = languages.map(getLocaleRegion).find(Boolean);
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone || "";

  if (["TW", "HK"].includes(region) || ["Asia/Taipei", "Asia/Hong_Kong"].includes(timeZone)) return "zh-Hant";
  if (region === "CN" || timeZone === "Asia/Shanghai") return "zh-Hans";
  return "en";
}

function getLocaleRegion(language) {
  try {
    return new Intl.Locale(language).region;
  } catch {
    const match = String(language).match(/[-_]([A-Za-z]{2})\b/);
    return match ? match[1].toUpperCase() : "";
  }
}

function setText(selector, value) {
  const element = $(selector);
  if (element) element.textContent = value;
}

function setTexts(selector, values) {
  $$(selector).forEach((element, index) => {
    if (values[index] !== undefined) element.textContent = values[index];
  });
}

function applyLocale(nextLocale, shouldSave = true) {
  locale = supportedLocales.includes(nextLocale) ? nextLocale : "en";
  const t = copy[locale];

  document.documentElement.lang = locale;
  document.title = t.pageTitle;
  document.body.dataset.locale = locale;

  $(".nav-links")?.setAttribute("aria-label", t.navLabel);
  $(".language-switcher")?.setAttribute("aria-label", t.languageLabel);
  $(".portrait img")?.setAttribute("alt", t.portraitAlt);
  $(".hero-actions")?.setAttribute("aria-label", t.heroActionsLabel);
  $(".signal-board")?.setAttribute("aria-label", t.signalLabel);
  $(".expertise-list")?.setAttribute("aria-label", t.expertiseLabel);
  $(".contact-links")?.setAttribute("aria-label", t.contactLabel);
  $(".topic-tabs")?.setAttribute("aria-label", t.topicsLabel);
  $(".reviews-browser")?.setAttribute("aria-label", t.reviewsBrowserLabel);
  reviewsPagination?.setAttribute("aria-label", t.pageLabel(currentPage, getTotalPages()));

  setTexts(".nav-links a", t.nav);
  setText(".market-panel span", t.focusLabel);
  setText(".market-panel strong", t.focusValue);
  setText(".hero-copy .eyebrow", t.eyebrowHero);
  setText(".hero-copy h1", t.heroName);
  setText(".subtitle", t.subtitle);
  setText(".lead", t.lead);
  setText(".button.primary", t.heroPrimary);
  setText(".button.secondary", t.heroSecondary);
  setTexts(".signal-board span", t.signal);
  setText(".signal-board div:nth-child(2) strong", t.responseHigh);
  setText("#profile .eyebrow", t.profileEyebrow);
  setText("#profile h2", t.profileTitle);
  setTexts(".profile-main p", t.profileBody);
  setTexts(".expertise-item strong", t.expertise);
  setText("#contact .eyebrow", t.contactEyebrow);
  setText("#contact h2", t.contactTitle);
  setText(".contact-panel p:not(.eyebrow)", t.contactBody);
  setText(".contact-card:first-child strong", t.linkedinCta);
  setText(".contact-card:nth-child(2) span", t.zaihLabel);
  setText(".contact-card:nth-child(2) strong", t.zaihCta);
  setText("#topics .eyebrow", t.topicsEyebrow);
  setText("#topics h2", t.topicsTitle);
  setText(".experience-section .eyebrow", t.timelineEyebrow);
  setText(".experience-section h2", t.timelineTitle);
  $$(".timeline-item").forEach((item, index) => {
    const row = t.timeline[index];
    if (!row) return;
    item.querySelector("time").textContent = row[0];
    item.querySelector("strong").textContent = row[1];
    item.querySelector("span").textContent = row[2];
  });
  setTexts(".achievement-strip span", t.achievements);
  setText("#media .eyebrow", t.mediaEyebrow);
  setText("#media h2", t.mediaTitle);
  setTexts(".media-card figcaption strong", t.media);
  $$(".media-card img").forEach((img, index) => img.setAttribute("alt", t.media[index] ?? ""));
  setText("#reviews .eyebrow", t.reviewsEyebrow);
  setText("#reviews h2", t.reviewsTitle);
  setText(".review-panel p:not(.eyebrow)", t.reviewsBody);
  setText(".review-state span", t.reviewsState);
  setText(".review-state small", t.reviewsSource);
  setText(".review-filter-label", t.topicFilter);
  setText(".site-footer span", t.footer);
  setText(".site-footer a", t.sourceLink);

  $$(".language-option").forEach((button) => {
    const isActive = button.dataset.locale === locale;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  topicTabs.forEach((tab) => {
    const topic = topics[locale][tab.dataset.topic];
    if (topic) tab.textContent = topic.tab;
  });

  renderTopic(activeTopicKey);
  setupReviewFilter();
  renderReviews();

  if (shouldSave) localStorage.setItem("ethan-locale", locale);
}

function renderTopic(key) {
  const topic = topics[locale][key];
  activeTopicKey = key;
  topicTitle.textContent = topic.title;
  topicCategory.textContent = topic.category;
  topicPrice.textContent = topic.price;
  topicIntro.textContent = topic.intro;
  topicPoints.replaceChildren(
    ...topic.points.map((point) => {
      const li = document.createElement("li");
      li.textContent = point;
      return li;
    })
  );
  expanded.textContent = topic.expanded;
  expanded.hidden = true;
  expandButton.setAttribute("aria-expanded", "false");
  expandButton.textContent = copy[locale].expand;
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
  expandButton.textContent = shouldOpen ? copy[locale].collapse : copy[locale].expand;
});

$$(".expertise-item").forEach((item) => {
  item.addEventListener("click", () => {
    $$(".expertise-item").forEach((button) => button.classList.remove("active"));
    item.classList.add("active");
  });
});

$$(".language-option").forEach((button) => {
  button.addEventListener("click", () => applyLocale(button.dataset.locale));
});

function normalizeApiReview(review, index) {
  const commentor = review.commentor || {};
  return {
    id: review.id ?? `review-${index}`,
    index: index + 1,
    name: String(commentor.name || review.name || "Guest").trim(),
    avatar: commentor.avatar || review.avatar || "",
    tier: commentor.tier || review.tier || "",
    topic: review.topic?.title || review.topic || "",
    time: review.format_time || review.time || "",
    likes: review.likings_count ?? review.likes ?? 0,
    comments: review.comments || "",
    replies: Array.isArray(review.replies) ? review.replies : []
  };
}

async function loadReviews() {
  const fallback = Array.isArray(window.ETHAN_REVIEWS) ? window.ETHAN_REVIEWS : [];
  reviewCountLabel.textContent = copy[locale].syncReviews;

  for (const source of [getLocalCommentPageUrl, getRemoteCommentPageUrl]) {
    try {
      const data = await fetchAllCommentPages(source);
      if (!data.length || data.length < fallback.length) continue;
      reviews = data.map(normalizeApiReview);
      usingFallbackReviews = false;
      setupReviewFilter();
      renderReviews();
      return;
    } catch {
      // Try the next source, then fall back to bundled reviews.
    }
  }

  reviews = fallback.map((review, index) => normalizeApiReview(review, index));
  usingFallbackReviews = true;
  setupReviewFilter();
  renderReviews();
}

function getLocalCommentPageUrl(page) {
  return `/api/comments?page=${page}`;
}

function getRemoteCommentPageUrl(page) {
  return `${reviewApiUrl}?page=${page}`;
}

async function fetchAllCommentPages(getUrl) {
  const collected = [];
  const seen = new Set();
  const maxPages = 100;

  for (let page = 1; page <= maxPages; page += 1) {
    const response = await fetch(getUrl(page), {
      cache: "no-store",
      headers: { accept: "application/json" }
    });
    if (!response.ok) throw new Error(`Comments page ${page} failed`);

    const data = await response.json();
    if (!Array.isArray(data) || !data.length) break;

    let newItems = 0;
    data.forEach((review) => {
      const id = review.id ?? `${review.commentor?.uid || ""}-${review.format_time || ""}-${review.comments || ""}`;
      if (seen.has(id)) return;
      seen.add(id);
      collected.push(review);
      newItems += 1;
    });

    if (newItems === 0 || data.length < 20) break;
    if (page === maxPages) throw new Error("Comments pagination did not finish");
  }

  return collected;
}

function getTopicKey(topic) {
  return topicAliases[topic] || topic || "other";
}

function normalizeTopic(topic) {
  const key = getTopicKey(topic);
  return topics[locale][key]?.tab || (locale === "en" ? "Unlabeled topic" : locale === "zh-Hans" ? "未标记主题" : "未標記主題");
}

function getFilteredReviews() {
  if (activeReviewTopic === "all") return reviews;
  return reviews.filter((review) => getTopicKey(review.topic) === activeReviewTopic);
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
  const t = copy[locale];
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
  meta.textContent = review.time || t.reviewFallbackMeta;
  const expand = document.createElement("button");
  expand.className = "review-expand";
  expand.type = "button";
  expand.textContent = t.expandReview;
  expand.addEventListener("click", () => {
    const isExpanded = card.classList.toggle("expanded");
    expand.textContent = isExpanded ? t.collapseReview : t.expandReview;
  });
  footer.append(meta, expand);

  card.append(top, body);
  const replyText = review.replies.find((reply) => reply?.comments)?.comments;
  if (replyText) {
    const reply = document.createElement("div");
    reply.className = "review-reply";
    reply.textContent = replyText;
    card.append(reply);
  }
  card.append(footer);
  return card;
}

function getTotalPages() {
  return Math.max(1, Math.ceil(getFilteredReviews().length / pageSize));
}

function renderReviews() {
  if (!reviewGrid || !reviewFilter) return;
  const t = copy[locale];
  const filtered = getFilteredReviews();
  const totalPages = getTotalPages();
  currentPage = Math.min(currentPage, totalPages);
  const start = (currentPage - 1) * pageSize;
  const selected = filtered.slice(start, start + pageSize);

  reviewGrid.replaceChildren(...selected.map(createReviewCard));
  if (!selected.length) {
    const empty = document.createElement("p");
    empty.className = "reviews-empty";
    empty.textContent = t.noReviews;
    reviewGrid.append(empty);
  }

  reviewTotal.textContent = String(reviews.length);
  reviewCountLabel.textContent = usingFallbackReviews ? t.fallbackNotice : t.showing(selected.length, filtered.length);
  reviewTopicLabel.textContent = activeReviewTopic === "all" ? t.allTopics : topics[locale][activeReviewTopic]?.tab || normalizeTopic(activeReviewTopic);
  renderPagination(totalPages);
}

function renderPagination(totalPages) {
  const t = copy[locale];
  reviewsPagination.replaceChildren();
  reviewsPagination.setAttribute("aria-label", t.pageLabel(currentPage, totalPages));
  if (totalPages <= 1) return;

  const addButton = (label, page, isActive = false, isDisabled = false) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = label;
    button.className = isActive ? "active" : "";
    button.disabled = isDisabled;
    button.addEventListener("click", () => {
      currentPage = page;
      renderReviews();
      $("#reviews")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    reviewsPagination.append(button);
  };

  addButton(t.prev, Math.max(1, currentPage - 1), false, currentPage === 1);

  const pages = new Set([1, totalPages, currentPage, currentPage - 1, currentPage + 1]);
  let last = 0;
  Array.from(pages)
    .filter((page) => page >= 1 && page <= totalPages)
    .sort((a, b) => a - b)
    .forEach((page) => {
      if (page - last > 1) {
        const ellipsis = document.createElement("span");
        ellipsis.textContent = "...";
        reviewsPagination.append(ellipsis);
      }
      addButton(String(page), page, page === currentPage);
      last = page;
    });

  addButton(t.next, Math.min(totalPages, currentPage + 1), false, currentPage === totalPages);
}

function setupReviewFilter() {
  if (!reviewFilter) return;
  const previous = activeReviewTopic;
  const counts = reviews.reduce((map, review) => {
    const key = getTopicKey(review.topic);
    map.set(key, (map.get(key) || 0) + 1);
    return map;
  }, new Map());

  reviewFilter.replaceChildren();
  const allOption = document.createElement("option");
  allOption.value = "all";
  allOption.textContent = `${copy[locale].allTopics} (${reviews.length})`;
  reviewFilter.append(allOption);

  topicKeys
    .filter((key) => counts.has(key))
    .forEach((key) => {
      const option = document.createElement("option");
      option.value = key;
      option.textContent = `${topics[locale][key].tab} (${counts.get(key)})`;
      reviewFilter.append(option);
    });

  activeReviewTopic = previous === "all" || counts.has(previous) ? previous : "all";
  reviewFilter.value = activeReviewTopic;
}

reviewFilter?.addEventListener("change", () => {
  activeReviewTopic = reviewFilter.value;
  currentPage = 1;
  renderReviews();
});

applyLocale(locale, false);
loadReviews();
