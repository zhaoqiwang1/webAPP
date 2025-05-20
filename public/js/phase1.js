import { topicsTitle, topicsContent, topicsQuestion} from "./topicContents.js";

// #region 对四个话题进行整体随机处理以及正面和负面的介绍的随机处理:

// const topicOrder = [0, 1, 2, 3];
// export const randomTopicOrder = [...topicOrder].sort(() => Math.random() - 0.5);
// export const proConOrder = Array.from({ length: 4 }, () => Math.random() < 0.5 ? 0 : 1);
// // Store in localStorage to persist across routes
// localStorage.setItem('randomTopicOrder', JSON.stringify(randomTopicOrder));
// localStorage.setItem('proConOrder', JSON.stringify(proConOrder));

const topicOrder = [0, 1, 2, 3];
// 尝试从 localStorage 读取已有值
let randomTopicOrder = JSON.parse(localStorage.getItem('randomTopicOrder'));
let proConOrder = JSON.parse(localStorage.getItem('proConOrder'));
console.log('hello');
// 如果没有已有值，则生成并存储
if (!randomTopicOrder || !proConOrder) {
  randomTopicOrder = [...topicOrder].sort(() => Math.random() - 0.5);
  proConOrder = Array.from({ length: 4 }, () => Math.random() < 0.5 ? 0 : 1);

  localStorage.setItem('randomTopicOrder', JSON.stringify(randomTopicOrder));
  localStorage.setItem('proConOrder', JSON.stringify(proConOrder));
}

console.log('About to send topic order to backend:', randomTopicOrder);
// 把顺序传给后端
fetch('/phases/save-topic-order', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  credentials: 'include',
  body: JSON.stringify({
    randomTopicOrder
  })
}).then(response => {
  if (!response.ok) throw new Error('Failed to save');
  console.log('Successfully saved randomTopicOrder to server');
})
.catch(error => {
  console.error('Failed to save topic order to server', error);
});



// #endregion

// #region 为每个话题的正面和负面介绍进行展现:
let topic1ProCon1st, topic1ProCon2nd, topic2ProCon1st, topic2ProCon2nd, topic3ProCon1st, topic3ProCon2nd, topic4ProCon1st, topic4ProCon2nd;
// 处理第一个随机话题：
if (proConOrder[0]===0) {
  topic1ProCon1st = topicsContent[randomTopicOrder[0]].TopicPro;
  topic1ProCon2nd = topicsContent[randomTopicOrder[0]].TopicCon;
} else {
  topic1ProCon1st = topicsContent[randomTopicOrder[0]].TopicCon;
  topic1ProCon2nd = topicsContent[randomTopicOrder[0]].TopicPro;
}
// 处理第二个随机话题：
if (proConOrder[1]===0) {
  topic2ProCon1st = topicsContent[randomTopicOrder[1]].TopicPro;
  topic2ProCon2nd = topicsContent[randomTopicOrder[1]].TopicCon;
} else {
  topic2ProCon1st = topicsContent[randomTopicOrder[1]].TopicCon;
  topic2ProCon2nd = topicsContent[randomTopicOrder[1]].TopicPro;
}
// 处理第三个随机话题：
if (proConOrder[2]===0) {
  topic3ProCon1st = topicsContent[randomTopicOrder[2]].TopicPro;
  topic3ProCon2nd = topicsContent[randomTopicOrder[2]].TopicCon;
} else {
  topic3ProCon1st = topicsContent[randomTopicOrder[2]].TopicCon;
  topic3ProCon2nd = topicsContent[randomTopicOrder[2]].TopicPro;
}
// 处理第四个随机话题：
if (proConOrder[3]===0) {
  topic4ProCon1st = topicsContent[randomTopicOrder[3]].TopicPro;
  topic4ProCon2nd = topicsContent[randomTopicOrder[3]].TopicCon;
} else {
  topic4ProCon1st = topicsContent[randomTopicOrder[3]].TopicCon;
  topic4ProCon2nd = topicsContent[randomTopicOrder[3]].TopicPro;
}
// #endregion

document.addEventListener('DOMContentLoaded', function () {
  const phase1GridsDiv = document.getElementById('phase1-grids');
  phase1GridsDiv.innerHTML = `
    <!-- 第一个网格项 -->
    <div class="grid-item1">
        <h3>${topicsTitle[randomTopicOrder[0]]}</h3>
        <div class="left-align-block">
          ${topicsContent[randomTopicOrder[0]].TopicIntro}
          ${topic1ProCon1st}
          ${topic1ProCon2nd}
        </div>
        <div class="question-block">
          <hr style="border-top: 3px solid #444; margin: 16px 0;"> <!-- 显示横线 -->
          <label>${topicsQuestion[randomTopicOrder[0]]}</label><br>
          <input type="radio" id="P1T1Q1-support" name="P1T1Q1" value="support" required>
          <label for="P1T1Q1-support">支持</label>
          <input type="radio" id="P1T1Q1-oppose" name="P1T1Q1" value="oppose">
          <label for="P1T1Q1-oppose">反对</label>
        </div>
    </div>
    <!-- 第二个网格项 -->
    <div class="grid-item2">
        <h3>${topicsTitle[randomTopicOrder[1]]}</h3>
        <div class="left-align-block">
          ${topicsContent[randomTopicOrder[1]].TopicIntro}
          ${topic2ProCon1st}
          ${topic2ProCon2nd}
        </div>
        <div class="question-block">
          <hr style="border-top: 3px solid #444; margin: 16px 0;"> <!-- 显示横线 -->
          <label>${topicsQuestion[randomTopicOrder[1]]}</label><br>
          <input type="radio" id="P1T2Q1-support" name="P1T2Q1" value="support" required>
          <label for="P1T2Q1-support">支持</label>
          <input type="radio" id="P1T2Q1-oppose" name="P1T2Q1" value="oppose">
          <label for="P1T2Q1-oppose">反对</label>
        </div>
    </div>
    <!-- 第三个网格项 -->
    <div class="grid-item3">
        <h3>${topicsTitle[randomTopicOrder[2]]}</h3>
        <div class="left-align-block">
          ${topicsContent[randomTopicOrder[2]].TopicIntro}
          ${topic3ProCon1st}
          ${topic3ProCon2nd}
        </div>
        <div class="question-block">
          <hr style="border-top: 3px solid #444; margin: 16px 0;"> <!-- 显示横线 -->
          <label>${topicsQuestion[randomTopicOrder[2]]}</label><br>
          <input type="radio" id="P1T3Q1-support" name="P1T3Q1" value="support" required>
          <label for="P1T3Q1-support">支持</label>
          <input type="radio" id="P1T3Q1-oppose" name="P1T3Q1" value="oppose">
          <label for="P1T3Q1-oppose">反对</label>
        </div>
    </div>
    <!-- 第四个网格项 -->
    <div class="grid-item4">
        <h3>${topicsTitle[randomTopicOrder[3]]}</h3>
        <div class="left-align-block">
          ${topicsContent[randomTopicOrder[3]].TopicIntro}
          ${topic4ProCon1st}
          ${topic4ProCon2nd}
        </div>
        <div class="question-block">
          <hr style="border-top: 3px solid #444; margin: 16px 0;"> <!-- 显示横线 -->
          <label>${topicsQuestion[randomTopicOrder[3]]}</label><br>
          <input type="radio" id="P1T4Q1-support" name="P1T4Q1" value="support" required>
          <label for="P1T4Q1-support">支持</label>
          <input type="radio" id="P1T4Q1-oppose" name="P1T4Q1" value="oppose">
          <label for="P1T4Q1-oppose">反对</label>
        </div>
    </div>
  `;

});












