import { topicsTitle, topicsContent, topicArguments } from "./topicContents.js";



// 查看且保证phase1得到的玩家id，玩家回答的Phase1问题的答案能够 pass 到 phase2:
// Pass player data from EJS to JavaScript directly
console.log(window.playerData.name);
console.log(window.playerData.playerId);
console.log(window.playerData.P1T1Q1);
console.log(window.playerData.P1T2Q1);
console.log(window.playerData.P1T3Q1);
console.log(window.playerData.P1T4Q1);

// Retrieve from localStorage
const randomTopicOrder = JSON.parse(localStorage.getItem('randomTopicOrder'));
const proConOrder = JSON.parse(localStorage.getItem('proConOrder'));

// #region 在阶段二，按照对应的规则给玩家展示阶段二的内容。这里的代码一共分为4部分，分别对应从左到右的4个topics:
// 注意，如果玩家ID为偶数，那么他就被分到FCon里；反之，如果玩家ID为奇数，他就被分到FIcon里。
let topics1arg, topics2arg, topics3arg, topics4arg;

  // #region Topic1 :
  if (window.playerData.playerId % 2 === 0 && window.playerData.P1T1Q1 === "support") {
      topics1arg = `
      <p><strong>观点1：</strong>${topicArguments[randomTopicOrder[0]].supportingArg_F}</p>
      <p><strong>观点2：</strong>${topicArguments[randomTopicOrder[0]].opposingArg}</p>
  `;
  } else if (window.playerData.playerId % 2 === 0 && window.playerData.P1T1Q1 === "oppose") {
      topics1arg = `
      <p><strong>观点1：</strong>${topicArguments[randomTopicOrder[0]].supportingArg}</p>
      <p><strong>观点2：</strong>${topicArguments[randomTopicOrder[0]].opposingArg_F}</p>
  `;
  } else if (window.playerData.playerId % 2 === 1 && window.playerData.P1T1Q1 === "support") {
      topics1arg = `
      <p><strong>观点1：</strong>${topicArguments[randomTopicOrder[0]].supportingArg}</p>
      <p><strong>观点2：</strong>${topicArguments[randomTopicOrder[0]].opposingArg_F}</p>
  `;
  } else if (window.playerData.playerId % 2 === 1 && window.playerData.P1T1Q1 === "oppose") {
      topics1arg = `
      <p><strong>观点1：</strong>${topicArguments[randomTopicOrder[0]].supportingArg_F}</p>
      <p><strong>观点2：</strong>${topicArguments[randomTopicOrder[0]].opposingArg}</p>
  `;
  }
  // #endregion

  // #region Topic2 :
  if (window.playerData.playerId % 2 === 0 && window.playerData.P1T2Q1 === "support") {
    topics2arg = `
    <p><strong>观点1：</strong>${topicArguments[randomTopicOrder[1]].supportingArg_F}</p>
    <p><strong>观点2：</strong>${topicArguments[randomTopicOrder[1]].opposingArg}</p>
  `;
  } else if (window.playerData.playerId % 2 === 0 && window.playerData.P1T2Q1 === "oppose") {
    topics2arg = `
    <p><strong>观点1：</strong>${topicArguments[randomTopicOrder[1]].supportingArg}</p>
    <p><strong>观点2：</strong>${topicArguments[randomTopicOrder[1]].opposingArg_F}</p>
  `;
  } else if (window.playerData.playerId % 2 === 1 && window.playerData.P1T2Q1 === "support") {
      topics2arg = `
      <p><strong>观点1：</strong>${topicArguments[randomTopicOrder[1]].supportingArg}</p>
      <p><strong>观点2：</strong>${topicArguments[randomTopicOrder[1]].opposingArg_F}</p>
  `;
  } else if (window.playerData.playerId % 2 === 1 && window.playerData.P1T2Q1 === "oppose") {
      topics2arg = `
      <p><strong>观点1：</strong>${topicArguments[randomTopicOrder[1]].supportingArg_F}</p>
      <p><strong>观点2：</strong>${topicArguments[randomTopicOrder[1]].opposingArg}</p>
  `;
  }
  // #endregion

  // #region Topic3 :
  if (window.playerData.playerId % 2 === 0 && window.playerData.P1T3Q1 === "support") {
    topics3arg = `
    <p><strong>观点1：</strong>${topicArguments[randomTopicOrder[2]].supportingArg_F}</p>
    <p><strong>观点2：</strong>${topicArguments[randomTopicOrder[2]].opposingArg}</p>
  `;
  } else if (window.playerData.playerId % 2 === 0 && window.playerData.P1T3Q1 === "oppose") {
      topics3arg = `
      <p><strong>观点1：</strong>${topicArguments[randomTopicOrder[2]].supportingArg}</p>
      <p><strong>观点2：</strong>${topicArguments[randomTopicOrder[2]].opposingArg_F}</p>
  `;
  } else if (window.playerData.playerId % 2 === 1 && window.playerData.P1T3Q1 === "support") {
      topics3arg = `
      <p><strong>观点1：</strong>${topicArguments[randomTopicOrder[2]].supportingArg}</p>
      <p><strong>观点2：</strong>${topicArguments[randomTopicOrder[2]].opposingArg_F}</p>
  `;
  } else if (window.playerData.playerId % 2 === 1 && window.playerData.P1T3Q1 === "oppose") {
      topics3arg = `
      <p><strong>观点1：</strong>${topicArguments[randomTopicOrder[2]].supportingArg_F}</p>
      <p><strong>观点2：</strong>${topicArguments[randomTopicOrder[2]].opposingArg}</p>
  `;
  }
  // #endregion

  // #region Topic4 :
  if (window.playerData.playerId % 2 === 0 && window.playerData.P1T4Q1 === "support") {
    topics4arg = `
    <p><strong>观点1：</strong>${topicArguments[randomTopicOrder[3]].supportingArg_F}</p>
    <p><strong>观点2：</strong>${topicArguments[randomTopicOrder[3]].opposingArg}</p>
  `;
  } else if (window.playerData.playerId % 2 === 0 && window.playerData.P1T4Q1 === "oppose") {
      topics4arg = `
      <p><strong>观点1：</strong>${topicArguments[randomTopicOrder[3]].supportingArg}</p>
      <p><strong>观点2：</strong>${topicArguments[randomTopicOrder[3]].opposingArg_F}</p>
  `;
  } else if (window.playerData.playerId % 2 === 1 && window.playerData.P1T4Q1 === "support") {
      topics4arg = `
      <p><strong>观点1：</strong>${topicArguments[randomTopicOrder[3]].supportingArg}</p>
      <p><strong>观点2：</strong>${topicArguments[randomTopicOrder[3]].opposingArg_F}</p>
  `;
  } else if (window.playerData.playerId % 2 === 1 && window.playerData.P1T4Q1 === "oppose") {
      topics4arg = `
      <p><strong>观点1：</strong>${topicArguments[randomTopicOrder[3]].supportingArg_F}</p>
      <p><strong>观点2：</strong>${topicArguments[randomTopicOrder[3]].opposingArg}</p>
  `;
  }
  // #endregion

// #endregion


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
  const params = new URLSearchParams(window.location.search);
  if (params.get('alreadySubmitted') === 'true') {
    alert("请勿重复作答。");
  }

  const phase2GridsDiv = document.getElementById('phase2-grids');
  phase2GridsDiv.innerHTML = `
    <!-- 第一个网格项 -->
    <div class="grid-item1">
        <h3>${topicsTitle[randomTopicOrder[0]]}</h3>
        <div class="left-align-block">
          ${topicsContent[randomTopicOrder[0]].TopicIntro}
          ${topic1ProCon1st}
          ${topic1ProCon2nd}
          <hr style="border-top: 1px solid #444; margin: 5px 0;"> <!-- 显示横线 -->
          <p><strong>阅读以下两个观点并回答后续问题。</strong></p>
          ${topics1arg}
        </div>
        <div class="question-block">
          <hr style="border-top: 3px solid #444; margin: 16px 0;"> <!-- 显示横线 -->
          <label>选择一个观点继续阅读</label><br>
          <input type="radio" id="P2T1Q1-arg1" name="P2T1Q1" value="arg1" required>
          <label for="P2T1Q1-arg1">观点1</label>
          <input type="radio" id="P2T1Q1-arg2" name="P2T1Q1" value="arg2">
          <label for="P2T1Q1-arg2">观点2</label>
          <br>
          <p>请给这两个观点打分</p>
          <div class="Q2Q3-container">
            <div>
              <label for="P2T1Q2">观点1:</label>
              <select name="P2T1Q2" id="P2T1Q2" required>
                <option value="">--</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <div>
            <label for="P2T1Q3">观点2:</label>
            <select name="P2T1Q3" id="P2T1Q3" required>
              <option value="">--</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            </div>
          </div>
        </div>
    </div>
    <!-- 第二个网格项 -->
    <div class="grid-item2">
        <h3>${topicsTitle[randomTopicOrder[1]]}</h3>
        <div class="left-align-block">
          ${topicsContent[randomTopicOrder[1]].TopicIntro}
          ${topic2ProCon1st}
          ${topic2ProCon2nd}
          <hr style="border-top: 1px solid #444; margin: 5px 0;"> <!-- 显示横线 -->
          <p><strong>阅读以下两个观点并回答后续问题。</strong></p>
          ${topics2arg}
         </div>
        <div class="question-block">
          <hr style="border-top: 3px solid #444; margin: 16px 0;"> <!-- 显示横线 -->
          <label>选择一个观点继续阅读</label><br>
          <input type="radio" id="P2T2Q1-arg1" name="P2T2Q1" value="arg1" required>
          <label for="P2T2Q1-arg1">观点1</label>
          <input type="radio" id="P2T2Q1-arg2" name="P2T2Q1" value="arg2">
          <label for="P2T2Q1-arg2">观点2</label>
          <br>
          <p>请给这两个观点打分</p>
          <div class="Q2Q3-container">
            <div>
              <label for="P2T2Q2">观点1:</label>
              <select name="P2T2Q2" id="P2T2Q2" required>
                <option value="">--</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <div>
              <label for="P2T2Q3">观点2:</label>
              <select name="P2T2Q3" id="P2T2Q3" required>
                <option value="">--</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
          </div>
       </div>
    </div>
    <!-- 第三个网格项 -->
    <div class="grid-item3">
        <h3>${topicsTitle[randomTopicOrder[2]]}</h3>
        <div class="left-align-block">
          ${topicsContent[randomTopicOrder[2]].TopicIntro}
          ${topic3ProCon1st}
          ${topic3ProCon2nd}
          <hr style="border-top: 1px solid #444; margin: 5px 0;"> <!-- 显示横线 -->
          <p><strong>阅读以下两个观点并回答后续问题。</strong></p>
          ${topics3arg}
        </div>
        <div class="question-block">
          <hr style="border-top: 3px solid #444; margin: 16px 0;"> <!-- 显示横线 -->
          <label>选择一个观点继续阅读</label><br>
          <input type="radio" id="P2T3Q1-arg1" name="P2T3Q1" value="arg1" required>
          <label for="P2T3Q1-arg1">观点1</label>
          <input type="radio" id="P2T3Q1-arg2" name="P2T3Q1" value="arg2">
          <label for="P2T3Q1-arg2">观点2</label>
          <br>
          <p>请给这两个观点打分</p>
          <div class="Q2Q3-container">
            <div>
              <label for="P2T3Q2">观点1:</label>
              <select name="P2T3Q2" id="P2T3Q2" required>
                <option value="">--</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <div>
              <label for="P2T3Q3">观点2:</label>
              <select name="P2T3Q3" id="P2T3Q3" required>
                <option value="">--</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
          </div> 
        </div> 
    </div>
    <!-- 第四个网格项 -->
    <div class="grid-item4">
        <h3>${topicsTitle[randomTopicOrder[3]]}</h3>
        <div class="left-align-block">
          ${topicsContent[randomTopicOrder[3]].TopicIntro}
          ${topic4ProCon1st}
          ${topic4ProCon2nd}
          <hr style="border-top: 1px solid #444; margin: 5px 0;"> <!-- 显示横线 -->
          <p><strong>请阅读以下两个观点，并回答后续问题。</strong></p>
          ${topics4arg}
        </div> 
        <div class="question-block">
          <hr style="border-top: 3px solid #444; margin: 16px 0;"> <!-- 显示横线 -->
          <label>选择一个观点继续阅读</label><br>
          <input type="radio" id="P2T4Q1-arg1" name="P2T4Q1" value="arg1" required>
          <label for="P2T4Q1-arg1">观点1</label>
          <input type="radio" id="P2T4Q1-arg2" name="P2T4Q1" value="arg2">
          <label for="P2T4Q1-arg2">观点2</label>
          <br>
          <p>请给这两个观点打分</p>
          <div class="Q2Q3-container">
            <div>
              <label for="P2T4Q2">观点1:</label>
              <select name="P2T4Q2" id="P2T4Q2" required>
                <option value="">--</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <div> 
              <label for="P2T4Q3">观点2:</label>
              <select name="P2T4Q3" id="P2T4Q3" required>
                <option value="">--</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
          </div>  
        </div>  
    </div>
  `;

});