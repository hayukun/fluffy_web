// Input要素
const inputExampleNameMain = document.getElementById("input_example_name_main");
const inputExampleNameLeft = document.getElementById("input_example_name_left");
const inputExampleNameRight = document.getElementById("input_example_name_right");
const inputExampleSmallName = document.getElementById("input_example_small_name");
const inputExampleNickname = document.getElementById("input_example_nickname");
const inputExampleNametitle = document.getElementById("input_example_nametitle");
const inputExampleCatchphrase = document.getElementById("input_example_catchphrase");

// View要素
const viewExampleCatchphrase = document.getElementById("view_example_catchphrase");
const viewExampleNickname = document.getElementById("view_example_nickname");
const viewExampleName1 = document.getElementById("view_example_name_1");
const viewExampleSmallChara = document.getElementById("view_example_small_chara");
const viewExampleName2 = document.getElementById("view_example_name_2");
const viewExampleNametitle = document.getElementById("view_example_nametitle");
const inputFormView = document.getElementById('inputForm-view');
const observ = document.getElementById('observ');

// 入力フォームのinputイベントを監視し、入力内容を表示する関数を定義
function updateDivContent(divElem, inputElem) {
  divElem.textContent = inputElem.value;
  adjustTextSize();
}

// 入力フォームのinputイベントに関数を登録
inputExampleNameMain.addEventListener('input', function() {
  updateDivContent(viewExampleName1, inputExampleNameMain);
});
inputExampleNameLeft.addEventListener('input', function() {
  updateDivContent(viewExampleName1, inputExampleNameLeft);
});
inputExampleNameRight.addEventListener('input', function() {
  updateDivContent(viewExampleName2, inputExampleNameRight);
});
inputExampleSmallName.addEventListener('input', function() {
  updateDivContent(viewExampleSmallChara, inputExampleSmallName);
});
inputExampleNickname.addEventListener('input', function() {
  updateDivContent(viewExampleNickname, inputExampleNickname);
});
inputExampleNametitle.addEventListener('input', function() {
  updateDivContent(viewExampleNametitle, inputExampleNametitle);
});
inputExampleCatchphrase.addEventListener('input', function() {
  updateDivContent(viewExampleCatchphrase, inputExampleCatchphrase);
});

// adjustTextSize関数の定義
function adjustTextSize() {
  const observ = document.getElementById('observ');
  const inputFormView = document.getElementById('inputForm-view');

  const observHeight = observ.clientHeight;
  const inputFormViewHeight = inputFormView.clientHeight;
  const currentFontSize = parseFloat(viewExampleName1.style.fontSize);
  const textContent = viewExampleName1.textContent.trim() + viewExampleName2.textContent.trim();
  const targetFontSize = 5.5;

  if (observHeight >= inputFormViewHeight) {
    const scaleFactor = inputFormViewHeight / observHeight;
    const newFontSize = currentFontSize * scaleFactor;
    viewExampleName1.style.fontSize = newFontSize + 'em';
    viewExampleName2.style.fontSize = newFontSize + 'em';
  } else {
    if (textContent.length <= 12){
    viewExampleName1.style.fontSize = targetFontSize + 'em';
    viewExampleName2.style.fontSize = targetFontSize + 'em';
    }
  }
}