const DIMENSION_ORDER = ["secure", "anxious", "avoidant", "disorganized"];

const SCALE = [
  { value: 1, label: "非常不同意" },
  { value: 2, label: "不同意" },
  { value: 3, label: "一般" },
  { value: 4, label: "同意" },
  { value: 5, label: "非常同意" },
];

const QUESTIONS = [
  [1, "我在关系里通常能坦然表达需求和感受。", "secure", false],
  [2, "当对方没有及时回复时，我会反复猜测是不是自己做错了什么。", "anxious", false],
  [3, "我更习惯自己消化情绪，不太想让对方看到脆弱。", "avoidant", false],
  [4, "我有时很想靠近对方，但真正亲密时又会突然想退后。", "disorganized", false],
  [5, "我相信稳定关系里，双方可以既亲密又保留自我。", "secure", false],
  [6, "我常担心“现在好，不代表以后也会好”。", "anxious", false],
  [7, "当关系进入深水区，我会本能想把注意力转到工作或兴趣上。", "avoidant", false],
  [8, "我在关系中可能出现“今天很黏、明天很冷”的摇摆。", "disorganized", false],
  [9, "遇到冲突时，我愿意先沟通而不是先冷战。", "secure", false],
  [10, "关系稳定时，我很少需要不断确认对方是不是还在乎我。", "anxious", true],
  [11, "我能够在重要关系里主动表达依赖和需要帮助。", "avoidant", true],
  [12, "我有时会把同一件小事理解成“特别爱我”或“马上要失去我”。", "disorganized", false],
  [13, "我能接受彼此有独处时间，不会把它自动理解为疏远。", "secure", false],
  [14, "对方情绪一有变化，我就会立刻联想到关系风险。", "anxious", false],
  [15, "我不太习惯在争执后马上和好，宁愿先把距离拉开。", "avoidant", false],
  [16, "冲突之后，我通常可以比较稳定地回到理性沟通。", "disorganized", true],
  [17, "我相信“被爱”不需要频繁用试探来证明。", "secure", false],
  [18, "在关系里我容易出现“想很多、问很多、确认很多”。", "anxious", false],
  [19, "当别人靠我太近时，我会下意识强调“我没事，我自己来”。", "avoidant", false],
  [20, "我有时会因为害怕受伤而先做出让关系降温的举动。", "disorganized", false],
  [21, "我愿意在亲密关系里谈边界，也愿意尊重对方边界。", "secure", false],
  [22, "即使暂时联系变少，我也能保持基本安心，不会立刻恐慌。", "anxious", true],
  [23, "我能自然说出“我现在需要你陪我一下”这类请求。", "avoidant", true],
  [24, "我可能一边渴望确定关系，一边又会突然想“算了别靠太近”。", "disorganized", false],
  [25, "我在关系里通常感到“我是值得被爱也值得被尊重的”。", "secure", false],
  [26, "当对方没按预期回应时，我容易陷入反复复盘。", "anxious", false],
  [27, "面对亲密承诺时，我会担心失去自由和掌控感。", "avoidant", false],
  [28, "我在关系中的感受通常比较连续，不太会忽冷忽热。", "disorganized", true],
  [29, "我愿意把亲密关系当成共同成长，而不是输赢博弈。", "secure", false],
  [30, "我会通过频繁查看细节（语气、标点、在线状态）来寻找安全感。", "anxious", false],
].map(([id, text, dimension, reverse]) => ({ id, text, dimension, reverse }));

const META = {
  secure: { name: "安全型", subtitle: "稳定输出的关系型选手", description: "你倾向于在亲密关系里保持信任、边界和沟通，情绪来时也能稳住节奏。", analysis: { core: "安全型通常能同时看见自己与对方的需求，既愿意亲近，也能保持边界感。", relationship: "遇到分歧时更愿意沟通而不是冷处理，能在情绪起伏中逐步回到稳定协作。", advice: "你的稳定很珍贵，也请继续温柔地表达真实需求；关系紧张时慢一点说清事实，往往比急着判断更有力量。" }, color: "#2f9e76", soft: "#e6f7ef", bar: "linear-gradient(90deg, #2f9e76 0%, #55c99b 100%)" },
  anxious: { name: "焦虑型", subtitle: "高敏感雷达在线的人", description: "你很在意关系反馈，容易捕捉细节与变化，也更需要被明确回应和安抚。", analysis: { core: "焦虑型对关系变化高度敏感，渴望稳定连结，也容易把不确定感放大成压力。", relationship: "当反馈模糊、回应延迟或关系节奏忽冷忽热时，更容易出现反复确认与情绪起伏。", advice: "你很在乎这段关系，这并不丢人；试着把需求说得更具体，同时提醒自己先看事实，再回应情绪。" }, color: "#e58a2b", soft: "#fff2e4", bar: "linear-gradient(90deg, #e58a2b 0%, #f3b164 100%)" },
  avoidant: { name: "回避型", subtitle: "外冷内热的边界感选手", description: "你重视独立和空间，遇到压力时会先后撤，但这并不等于你不在乎。", analysis: { core: "回避型更依赖自我调节来处理情绪，常把独立与边界看作安全感的重要来源。", relationship: "亲密强度上升或冲突来临时，可能先抽离、沉默或延后回应，避免被情绪淹没。", advice: "你在保护自己这件事上很努力，也可以更早说出你的节奏，比如“我需要一点时间，晚点认真聊”，让对方知道你不是离开。" }, color: "#4b7bd6", soft: "#e9f0ff", bar: "linear-gradient(90deg, #4b7bd6 0%, #75a0ef 100%)" },
  disorganized: { name: "混乱型", subtitle: "想靠近也想撤退的矛盾艺术家", description: "你在关系中的靠近与防御可能交替出现，心很真，但节奏常常拉扯。", analysis: { core: "混乱型常同时存在强烈亲密需求与防御反应，内在体验容易出现矛盾感。", relationship: "关系里可能在“很想靠近”和“担心受伤”之间快速切换，导致互动节奏不稳定。", advice: "你已经很努力在平衡靠近与自保了；先识别触发点，再用分阶段沟通降低冲击，关系会一点点稳下来。" }, color: "#d26a8e", soft: "#ffeaf2", bar: "linear-gradient(90deg, #d26a8e 0%, #ec8aac 100%)" },
};

const COMBOS = {
  secure__anxious: ["你重视连接，也愿意负责地经营关系。", "大方向稳定，但遇到重要的人时会更在意回应质量和确定感。", "先肯定自己的在意，再把需求说具体，你会更容易被真正理解。", "你很会接住别人，也值得被同样坚定地接住。"],
  secure__avoidant: ["你稳得住关系，也守得住自己的边界。", "你既愿意靠近，也需要保留独处空间，节奏感通常比较健康。", "提前说清你的独处需求，能让对方把你的后撤理解成调节，而不是冷淡。", "你的边界和温柔可以同时存在，这是很成熟也很难得的能力。"],
  secure__disorganized: ["你有稳定底色，压力大时会出现短暂拉扯。", "平时沟通理性，触发不安时可能在靠近和防御之间快速切换。", "先暂停、命名情绪再沟通，你会更快回到自己熟悉的稳定状态。", "你给人的稳定感很珍贵，也别忘了在照顾关系时，同样照顾自己的疲惫。"],
  anxious__secure: ["你很在乎关系，也有把关系拉回理性的能力。", "你会敏感捕捉变化，但也愿意通过沟通修复误会，不轻易放弃连接。", "把“我怕失去你”翻译成“我需要你怎么回应我”，会更有力量。", "你对细节的在意是一种天赋，慢慢学会把它用来照顾自己。"],
  anxious__avoidant: ["你一边渴望被坚定选择，一边怕受伤先自保。", "情绪上想靠近，行为上可能突然后撤，容易让关系节奏忽近忽远。", "允许自己慢一点确认安全，再表达真实需求，不必用拉开距离来证明坚强。", "请别急着否定自己，你值得被清晰回应，也值得被耐心理解。"],
  anxious__disorganized: ["你的情感浓度很高，靠近与不安会同时出现。", "当关系不确定时，你可能快速进入高警觉，也更容易被细节触发。", "先稳定身体反应，再做沟通决定；被看见后，你会明显更柔软。", "请别急着否定自己，你值得被清晰回应，也值得被耐心理解。"],
  avoidant__secure: ["你偏爱独立，但并不排斥稳定亲密。", "你会先观察关系安全度，确认可靠后，其实能长期而稳定地投入。", "把“我需要空间”说在前面，比沉默后撤更容易让关系安心。", "边界是你的力量，不是你的缺点。被尊重后，你会很温柔。"],
  avoidant__anxious: ["你外表冷静，内心其实很在意关系反馈。", "你会想保持距离避免失控，但也会因为缺乏回应而反复内耗。", "尝试小步表达感受，不用一次说很多，稳定表达本身就会建立安全感。", "你先保护自己并没有错，愿你在安全的关系里，也能慢慢放下盔甲。"],
  avoidant__disorganized: ["你把自我保护放在前面，亲密中偶尔会摇摆。", "当亲密升温时容易后撤，关系受压时可能出现“想靠近又想逃开”的矛盾。", "先给自己缓冲时间，再约定回到对话的节点，你会更有掌控感。", "你并不冷漠，你只是习惯独自消化；愿你遇见愿意等你开口的人。"],
  disorganized__secure: ["你有明显的拉扯感，但也在认真学习稳定连接。", "你会经历靠近与防御切换，不过内在有能力把关系慢慢拉回建设性沟通。", "每次冲突后做一次复盘，不责备自己，只记录触发点和有效回应。", "允许自己慢一点，把每次靠近都当作一次练习，你会越来越稳。"],
  disorganized__anxious: ["你很想被坚定地爱，也很怕再次受伤。", "你对关系变化非常敏感，安全感不足时会出现强烈情绪与防御反应。", "把“我要不要逃开”换成“我现在最需要什么支持”，会更快稳定下来。", "允许自己慢一点，把每次靠近都当作一次练习，你会越来越稳。"],
  disorganized__avoidant: ["你既渴望亲密，也本能地保护自己。", "当关系变深时，你可能一边想靠近一边想撤退，冷热节奏更明显。", "先从低强度表达开始，比如一句“我有点乱，给我一点时间”，关系会更可持续。", "你值得被温柔对待，也值得先学会温柔地对待自己。"],
};

const ROASTS = {
  secure: ["别人恋爱像过山车，你更像按时发车的地铁。", "你最常说的话：我们聊聊，不是我们散了。"],
  anxious: ["你不是爱查岗，你是情绪雷达开到满格。", "你的恋爱关键词：在乎、确认、再确认。", "你最擅长的技能：在细节里寻找确定感。"],
  avoidant: ["你不是冷漠，你是习惯先把感受放进草稿箱。", "关系一紧张，你的第一反应是先拉开一点距离。", "你很会照顾自己，但偶尔也该给别人靠近权限。"],
  disorganized: ["你的心很真，只是节奏常常先快后慢。", "你一边想贴近，一边又怕太近会受伤。", "你不是反复横跳，你是在努力找安全距离。"],
};

const screens = Object.fromEntries(["home", "quiz", "result"].map(key => [key, document.getElementById(`screen-${key}`)]));
const ui = Object.fromEntries([
  "start-btn", "progress-text", "answer-count", "progress-fill", "question-card", "question-title", "option-list", "prev-btn",
  "result-type", "result-subtitle", "result-description", "result-secondary", "distribution-list", "combo-comment",
  "combo-relationship", "combo-advice", "detail-list", "author-message", "retry-btn",
].map(id => [id.replace(/-([a-z])/g, (_, c) => c.toUpperCase()), document.getElementById(id)]));

const state = { answers: new Map(), currentIndex: 0 };

function showScreen(key) {
  Object.entries(screens).forEach(([name, section]) => {
    const active = name === key;
    section.hidden = !active;
    section.classList.toggle("is-active", active);
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderQuestion() {
  const question = QUESTIONS[state.currentIndex];
  ui.questionCard.classList.remove("is-animated");
  void ui.questionCard.offsetWidth;
  ui.questionCard.classList.add("is-animated");
  ui.progressText.textContent = `第 ${state.currentIndex + 1} / ${QUESTIONS.length} 题`;
  ui.answerCount.textContent = `已完成 ${state.answers.size}/${QUESTIONS.length}`;
  ui.progressFill.style.width = `${((state.currentIndex + 1) / QUESTIONS.length) * 100}%`;
  ui.progressFill.parentElement.setAttribute("aria-valuenow", String(state.answers.size));
  ui.questionTitle.textContent = question.text;
  ui.optionList.replaceChildren();

  SCALE.forEach(option => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `option-btn${state.answers.get(question.id) === option.value ? " is-selected" : ""}`;
    button.textContent = option.label;
    button.setAttribute("role", "radio");
    button.setAttribute("aria-checked", String(state.answers.get(question.id) === option.value));
    button.addEventListener("click", () => selectAnswer(question.id, option.value));
    ui.optionList.appendChild(button);
  });
  ui.prevBtn.disabled = state.currentIndex === 0;
}

function selectAnswer(id, value) {
  state.answers.set(id, value);
  if (state.currentIndex === QUESTIONS.length - 1) {
    renderResult(calculateResult());
    showScreen("result");
    return;
  }
  state.currentIndex += 1;
  renderQuestion();
}

function calculateResult() {
  const scores = Object.fromEntries(DIMENSION_ORDER.map(key => [key, 0]));
  const counts = Object.fromEntries(DIMENSION_ORDER.map(key => [key, 0]));
  QUESTIONS.forEach(question => {
    const answer = state.answers.get(question.id);
    const effective = question.reverse ? 6 - answer : answer;
    scores[question.dimension] += effective;
    counts[question.dimension] += 1;
  });
  const percents = Object.fromEntries(DIMENSION_ORDER.map(key => [key, Math.round(((scores[key] - counts[key]) / (counts[key] * 4)) * 100)]));
  const ranked = DIMENSION_ORDER.map((key, order) => ({ key, order, value: percents[key] })).sort((a, b) => b.value - a.value || a.order - b.order);
  return { scores, percents, primary: ranked[0].key, secondary: ranked[1].key };
}

function renderResult(result) {
  const primary = META[result.primary];
  const secondary = META[result.secondary];
  const combo = COMBOS[`${result.primary}__${result.secondary}`];
  const roast = ROASTS[result.primary][result.scores[result.primary] % ROASTS[result.primary].length];
  document.documentElement.style.setProperty("--theme-color", primary.color);
  document.documentElement.style.setProperty("--theme-soft", primary.soft);
  ui.resultType.textContent = primary.name;
  ui.resultSubtitle.textContent = primary.subtitle;
  ui.resultDescription.textContent = primary.description;
  ui.resultSecondary.textContent = `次高维度是 ${secondary.name}（${result.percents[result.secondary]}%）。你整体以${primary.name}（${result.percents[result.primary]}%）为主轴，在关系稳定时更倾向主维度风格；当压力升高或关系不确定时，会出现更多${secondary.name}的应对方式。${combo[1]}`;
  ui.comboComment.textContent = `关系画像：${combo[0]} 你的测试签名是「${primary.subtitle}」。`;
  ui.comboRelationship.textContent = `测试者印象：${roast} 在亲密关系里，${combo[1]}`;
  ui.comboAdvice.textContent = `小建议：${combo[2]}`;
  ui.authorMessage.textContent = combo[3];
  renderDistribution(result);
  renderDetails(result, roast);
}

function renderDistribution(result) {
  ui.distributionList.replaceChildren();
  DIMENSION_ORDER.forEach(key => {
    const item = document.createElement("div");
    item.className = "bar-item";
    item.innerHTML = `<div class="bar-head"><span class="bar-name">${META[key].name}</span><span class="bar-percent">${result.percents[key]}%</span></div><div class="bar-track"><div class="bar-fill" style="width:${result.percents[key]}%;background:${META[key].bar}"></div></div>`;
    ui.distributionList.appendChild(item);
  });
}

function blendText(key, result) {
  if (key === result.primary) return `主维度底色：你现在以${META[key].name}（${result.percents[key]}%）作为关系主轴，通常能在多数情境里优先展现这类反应与沟通方式。`;
  if (key === result.secondary) return `次高维度联动：${META[key].name}（${result.percents[key]}%）会在压力升高或关系不确定时被放大，与${META[result.primary].name}叠加后，你会呈现更细腻、也更有层次的互动节奏。`;
  return `情境补充：${META[key].name}目前不是主导特征，但在特定触发点下仍可能短暂上升，提醒你关注当下状态和需求。`;
}

function renderDetails(result, roast) {
  ui.detailList.replaceChildren();
  DIMENSION_ORDER.forEach(key => {
    const info = META[key];
    const article = document.createElement("article");
    article.className = `detail-item${key === result.primary ? " is-primary" : key === result.secondary ? " is-secondary" : ""}`;
    const rank = key === result.primary ? '<span class="detail-rank is-primary">主类型</span>' : key === result.secondary ? '<span class="detail-rank is-secondary">第二倾向</span>' : "";
    article.innerHTML = `<div class="detail-head"><h4 class="detail-title">${info.name}</h4><div class="detail-side"><span class="detail-percent">${result.percents[key]}%</span>${rank}</div></div><p class="detail-text">${blendText(key, result)}</p><p class="detail-text">核心特征：${info.analysis.core}</p><p class="detail-text">关系表现：${info.analysis.relationship}</p><p class="detail-text">小建议：${info.analysis.advice}</p>`;
    if (key === result.primary) article.insertAdjacentHTML("beforeend", `<p class="detail-text detail-highlight">测试签名：${info.subtitle}</p><p class="detail-text detail-highlight">他人视角：${roast}</p>`);
    ui.detailList.appendChild(article);
  });
}

function restartQuiz() {
  state.answers.clear();
  state.currentIndex = 0;
  document.documentElement.style.setProperty("--theme-color", META.secure.color);
  document.documentElement.style.setProperty("--theme-soft", META.secure.soft);
  renderQuestion();
  showScreen("quiz");
}

ui.startBtn.addEventListener("click", restartQuiz);
ui.prevBtn.addEventListener("click", () => { if (state.currentIndex > 0) { state.currentIndex -= 1; renderQuestion(); } });
ui.retryBtn.addEventListener("click", () => showScreen("home"));

