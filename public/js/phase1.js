import { topicsTitle, topicsContent} from "./topicContents.js";


const topicOrder = [0, 1, 2, 3];
const randomTopicOrder = [...topicOrder].sort(() => Math.random() - 0.5);
console.log("原话题顺序:", topicOrder);
console.log("原话题顺序:", topicOrder[1]);
console.log("打乱顺序后的新顺序:", randomTopicOrder);
console.log("打乱顺序后的新顺序:", randomTopicOrder[0]);

document.addEventListener('DOMContentLoaded', function () {
  // const createIdForm = document.getElementById('createIdForm');

  // createIdForm.addEventListener('submit', function (event) {
  const phase1GridsDiv = document.getElementById('phase1-grids');
  //   phase1GridsDiv.classList.remove('hidden');
  //   // 这里不用阻止默认提交行为，让表单正常提交
  //   console.log('Id created!');

    
  //   const idCreateButton = createIdForm.querySelector('#idCreateButton');
  // idCreateButton.addEventListener('click', function () {
    
    // const phase1GridsDiv = document.getElementById('phase1-grids');
    // phase1GridsDiv.classList.remove('hidden');
    phase1GridsDiv.innerHTML = `
      <!-- 第一个网格项 -->
      <div class="grid-item1">
          <h3>${topicsTitle[randomTopicOrder[0]]}</h3>
          <p>Some content for column 1.</p>
          <button id="item1Button">Next</button>
      </div>
      <!-- 第二个网格项 -->
      <div class="grid-item2">
          <h3>${topicsTitle[randomTopicOrder[1]]}</h3>
          <p>Some content for column 2.</p>
          <button id="item2Button">Next</button>
      </div>
      <!-- 第三个网格项 -->
      <div class="grid-item3">
          <h3>${topicsTitle[randomTopicOrder[2]]}</h3>
          <p>Some content for column 3.</p>
          <button id="item3Button">Next</button>
      </div>
      <!-- 第四个网格项 -->
      <div class="grid-item4">
          <h3>${topicsTitle[randomTopicOrder[3]]}</h3>
          <p>Some content for column 4.</p>
          <button id="item4Button">Next</button>
      </div>
    `;
  //   });
  // });


});












