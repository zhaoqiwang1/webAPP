import { topicsTitle, topicsContent, topicArguments } from "./topicContents.js";

// 查看且保证phase1得到的玩家id，玩家回答的Phase1问题的答案能够 pass 到 phase3_repQ:
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

// #region 在phase3_repQ，按照对应的规则给玩家展示阶段二的内容。这里的代码一共分为4部分，分别对应从左到右的4个topics:
// 注意，如果玩家ID为偶数，那么他就被分到FCon里；反之，如果玩家ID为奇数，他就被分到FIcon里。
let topics1arg, topics2arg, topics3arg, topics4arg;

  // #region Topic1 :
  if (window.playerData.playerId % 2 === 0 && window.playerData.P1T1Q1 === "support") {
      topics1arg = `
      <p>${topicArguments[randomTopicOrder[0]].supportingArg_F}</p>
      <p>${topicArguments[randomTopicOrder[0]].opposingArg}</p>
  `;
  } else if (window.playerData.playerId % 2 === 0 && window.playerData.P1T1Q1 === "oppose") {
      topics1arg = `
      <p>${topicArguments[randomTopicOrder[0]].supportingArg}</p>
      <p>${topicArguments[randomTopicOrder[0]].opposingArg_F}</p>
  `;
  } else if (window.playerData.playerId % 2 === 1 && window.playerData.P1T1Q1 === "support") {
      topics1arg = `
      <p>${topicArguments[randomTopicOrder[0]].supportingArg}</p>
      <p>${topicArguments[randomTopicOrder[0]].opposingArg_F}</p>
  `;
  } else if (window.playerData.playerId % 2 === 1 && window.playerData.P1T1Q1 === "oppose") {
      topics1arg = `
      <p>${topicArguments[randomTopicOrder[0]].supportingArg_F}</p>
      <p>${topicArguments[randomTopicOrder[0]].opposingArg}</p>
  `;
  }
  // #endregion

  // #region Topic2 :
  if (window.playerData.playerId % 2 === 0 && window.playerData.P1T2Q1 === "support") {
    topics2arg = `
    <p>${topicArguments[randomTopicOrder[1]].supportingArg_F}</p>
    <p>${topicArguments[randomTopicOrder[1]].opposingArg}</p>
  `;
  } else if (window.playerData.playerId % 2 === 0 && window.playerData.P1T2Q1 === "oppose") {
      topics2arg = `
      <p>${topicArguments[randomTopicOrder[1]].supportingArg}</p>
      <p>${topicArguments[randomTopicOrder[1]].opposingArg_F}</p>
  `;
  } else if (window.playerData.playerId % 2 === 1 && window.playerData.P1T2Q1 === "support") {
      topics2arg = `
      <p>${topicArguments[randomTopicOrder[1]].supportingArg}</p>
      <p>${topicArguments[randomTopicOrder[1]].opposingArg_F}</p>
  `;
  } else if (window.playerData.playerId % 2 === 1 && window.playerData.P1T2Q1 === "oppose") {
      topics2arg = `
      <p>${topicArguments[randomTopicOrder[1]].supportingArg_F}</p>
      <p>${topicArguments[randomTopicOrder[1]].opposingArg}</p>
  `;
  }
  // #endregion

  // #region Topic3 :
  if (window.playerData.playerId % 2 === 0 && window.playerData.P1T3Q1 === "support") {
    topics3arg = `
    <p>${topicArguments[randomTopicOrder[2]].supportingArg_F}</p>
    <p>${topicArguments[randomTopicOrder[2]].opposingArg}</p>
  `;
  } else if (window.playerData.playerId % 2 === 0 && window.playerData.P1T3Q1 === "oppose") {
      topics3arg = `
      <p>${topicArguments[randomTopicOrder[2]].supportingArg}</p>
      <p>${topicArguments[randomTopicOrder[2]].opposingArg_F}</p>
  `;
  } else if (window.playerData.playerId % 2 === 1 && window.playerData.P1T3Q1 === "support") {
      topics3arg = `
      <p>${topicArguments[randomTopicOrder[2]].supportingArg}</p>
      <p>${topicArguments[randomTopicOrder[2]].opposingArg_F}</p>
  `;
  } else if (window.playerData.playerId % 2 === 1 && window.playerData.P1T3Q1 === "oppose") {
      topics3arg = `
      <p>${topicArguments[randomTopicOrder[2]].supportingArg_F}</p>
      <p>${topicArguments[randomTopicOrder[2]].opposingArg}</p>
  `;
  }
  // #endregion

  // #region Topic4 :
  if (window.playerData.playerId % 2 === 0 && window.playerData.P1T4Q1 === "support") {
    topics4arg = `
    <p>${topicArguments[randomTopicOrder[3]].supportingArg_F}</p>
    <p>${topicArguments[randomTopicOrder[3]].opposingArg}</p>
  `;
  } else if (window.playerData.playerId % 2 === 0 && window.playerData.P1T4Q1 === "oppose") {
      topics4arg = `
      <p>${topicArguments[randomTopicOrder[3]].supportingArg}</p>
      <p>${topicArguments[randomTopicOrder[3]].opposingArg_F}</p>
  `;
  } else if (window.playerData.playerId % 2 === 1 && window.playerData.P1T4Q1 === "support") {
      topics4arg = `
      <p>${topicArguments[randomTopicOrder[3]].supportingArg}</p>
      <p>${topicArguments[randomTopicOrder[3]].opposingArg_F}</p>
  `;
  } else if (window.playerData.playerId % 2 === 1 && window.playerData.P1T4Q1 === "oppose") {
      topics4arg = `
      <p>${topicArguments[randomTopicOrder[3]].supportingArg_F}</p>
      <p>${topicArguments[randomTopicOrder[3]].opposingArg}</p>
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
  const phase3RepQGridsDiv = document.getElementById('phase3-repQ-grids');
  phase3RepQGridsDiv.innerHTML = `
    <!-- 第一个网格项 -->
    <div class="grid-item1">
        <h3>${topicsTitle[randomTopicOrder[0]]}</h3>
        <p>${topicsContent[randomTopicOrder[0]].TopicIntro}</p>
        <p>${topic1ProCon1st}</p>
        <p>${topic1ProCon2nd}</p>
        <p>下面是对应的支持和反对的意见。</p>
        <p>${topics1arg}</p>
        <label>P3T1Q1_Rep:选择一个arg继续阅读</label><br>
        <input type="radio" id="P3T1Q1_Rep-arg1" name="P3T1Q1_Rep" value="arg1" required>
        <label for="P3T1Q1_Rep-arg1">第一个</label>
        <input type="radio" id="P3T1Q1_Rep-arg2" name="P3T1Q1_Rep" value="arg2">
        <label for="P3T1Q1_Rep-arg2">第二个</label>
        <br><br>
        <br>
        <button type="button" id="item1Button">Next</button>
    </div>
    <!-- 第二个网格项 -->
    <div class="grid-item2">
        <h3>${topicsTitle[randomTopicOrder[1]]}</h3>
        <p>${topicsContent[randomTopicOrder[1]].TopicIntro}</p>
        <p>${topic2ProCon1st}</p>
        <p>${topic2ProCon2nd}</p>
        <p>下面是对应的支持和反对的意见。</p>
        <p>${topics2arg}</p>
        <label>P3T2Q1_Rep:选择一个arg继续阅读</label><br>
        <input type="radio" id="P3T2Q1_Rep-arg1" name="P3T2Q1_Rep" value="arg1" required>
        <label for="P3T2Q1_Rep-arg1">第一个</label>
        <input type="radio" id="P3T2Q1_Rep-arg2" name="P3T2Q1_Rep" value="arg2">
        <label for="P3T2Q1_Rep-arg2">第二个</label>
        <br><br>
        <br>
        <button type="button" id="item2Button">Next</button>
    </div>
    <!-- 第三个网格项 -->
    <div class="grid-item3">
        <h3>${topicsTitle[randomTopicOrder[2]]}</h3>
        <p>${topicsContent[randomTopicOrder[2]].TopicIntro}</p>
        <p>${topic3ProCon1st}</p>
        <p>${topic3ProCon2nd}</p>
        <p>下面是对应的支持和反对的意见。</p>
        <p>${topics3arg}</p>
        <label>P3T3Q1_Rep:选择一个arg继续阅读</label><br>
        <input type="radio" id="P3T3Q1_Rep-arg1" name="P3T3Q1_Rep" value="arg1" required>
        <label for="P3T3Q1_Rep-arg1">第一个</label>
        <input type="radio" id="P3T3Q1_Rep-arg2" name="P3T3Q1_Rep" value="arg2">
        <label for="P3T3Q1_Rep-arg2">第二个</label>
        <br><br>
        <br>
        <button type="button" id="item3Button">Next</button>
    </div>
    <!-- 第四个网格项 -->
    <div class="grid-item4">
        <h3>${topicsTitle[randomTopicOrder[3]]}</h3>
        <p>${topicsContent[randomTopicOrder[3]].TopicIntro}</p>
        <p>${topic4ProCon1st}</p>
        <p>${topic4ProCon2nd}</p>
        <p>下面是对应的支持和反对的意见。</p>
        <p>${topics4arg}</p>
        <label>P3T4Q1_Rep:选择一个arg继续阅读</label><br>
        <input type="radio" id="P3T4Q1_Rep-arg1" name="P3T4Q1_Rep" value="arg1" required>
        <label for="P3T4Q1_Rep-arg1">第一个</label>
        <input type="radio" id="P3T4Q1_Rep-arg2" name="P3T4Q1_Rep" value="arg2">
        <label for="P3T4Q1_Rep-arg2">第二个</label>
        <br><br>
        <br>
        <button type="button" id="item4Button">Next</button>
    </div>
  `;

});
