import { topicsTitle, topicsContent} from "./topicContents.js";

// console.log("phase2,打乱顺序后的话题顺序:", randomTopicOrder);
// console.log("phase2,正面负面信息新顺序:", proConOrder);

// Retrieve from localStorage
const randomTopicOrder = JSON.parse(localStorage.getItem('randomTopicOrder'));
const proConOrder = JSON.parse(localStorage.getItem('proConOrder'));

// #region 为每个话题的正面和负面介绍进行随机处理:

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
  const phase2GridsDiv = document.getElementById('phase2-grids');
  phase2GridsDiv.innerHTML = `
    <!-- 第一个网格项 -->
    <div class="grid-item1">
        <h3>${topicsTitle[randomTopicOrder[0]]}</h3>
        <p>${topicsContent[randomTopicOrder[0]].TopicIntro}</p>
        <p>${topic1ProCon1st}</p>
        <p>${topic1ProCon2nd}</p>
        <button type="button" id="item1Button">Next</button>
    </div>
    <!-- 第二个网格项 -->
    <div class="grid-item2">
        <h3>${topicsTitle[randomTopicOrder[1]]}</h3>
        <p>${topicsContent[randomTopicOrder[1]].TopicIntro}</p>
        <p>${topic2ProCon1st}</p>
        <p>${topic2ProCon2nd}</p>
        <button type="button" id="item2Button">Next</button>
    </div>
    <!-- 第三个网格项 -->
    <div class="grid-item3">
        <h3>${topicsTitle[randomTopicOrder[2]]}</h3>
        <p>${topicsContent[randomTopicOrder[2]].TopicIntro}</p>
        <p>${topic3ProCon1st}</p>
        <p>${topic3ProCon2nd}</p>
        <button type="button" id="item3Button">Next</button>
    </div>
    <!-- 第四个网格项 -->
    <div class="grid-item4">
        <h3>${topicsTitle[randomTopicOrder[3]]}</h3>
        <p>${topicsContent[randomTopicOrder[3]].TopicIntro}</p>
        <p>${topic4ProCon1st}</p>
        <p>${topic4ProCon2nd}</p>
        <button type="button" id="item4Button">Next</button>
    </div>
  `;

});