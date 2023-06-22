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
const warning = document.getElementById('panelCharaWarning');



// 入力フォームのinputイベントを監視し、入力内容を表示する関数を定義
function updateDivContentAdjustSize(divElem, inputElem) {
  divElem.textContent = inputElem.value;
  adjustTextSize();
}

// 入力フォームのinputイベントに関数を登録
inputExampleNameMain.addEventListener('input', function () {
  updateDivContentAdjustSize(viewExampleName1, inputExampleNameMain);
});
inputExampleNameLeft.addEventListener('input', function () {
  updateDivContentAdjustSize(viewExampleName1, inputExampleNameLeft);
});
inputExampleNameRight.addEventListener('input', function () {
  updateDivContentAdjustSize(viewExampleName2, inputExampleNameRight);
});
inputExampleSmallName.addEventListener('input', function () {
  updateDivContentAdjustSize(viewExampleSmallChara, inputExampleSmallName);
});
inputExampleNickname.addEventListener('input', function () {
  updateDivContentAdjustSize(viewExampleNickname, inputExampleNickname);
});
inputExampleNametitle.addEventListener('input', function () {
  updateDivContentAdjustSize(viewExampleNametitle, inputExampleNametitle);
});
inputExampleCatchphrase.addEventListener('input', function () {
  updateDivContentAdjustSize(viewExampleCatchphrase, inputExampleCatchphrase);
});

// adjustTextSize関数の定義
function adjustTextSize() {
  const observ = document.getElementById('observ');
  const inputFormView = document.getElementById('inputForm-view');

  console.log(inputExampleNickname.value.length);
  console.log(inputExampleCatchphrase.value.length);
  if (inputExampleNickname.value.length >= 1){
    inputExampleCatchphrase.disabled = true;
    inputExampleNickname.disabled = false;
    warning.style.display = 'block';
  } else if (inputExampleCatchphrase.value.length >= 1){
    inputExampleCatchphrase.disabled = false;
    inputExampleNickname.disabled = true;
    warning.style.display = 'block';
  } else {
    inputExampleNickname.disabled = false;
    inputExampleCatchphrase.disabled = false;
    warning.style.display = 'none';
  }

  const observHeight = observ.clientHeight;
  const inputFormViewHeight = inputFormView.clientHeight;
  const textContent = viewExampleName1.textContent.trim() + viewExampleName2.textContent.trim();
  const targetFontSizeMain = 5.5;
  const targetFontSizeSmallChara = 3.5;
  const targetFontSizeNametitle = 1.8;
  const targetFontSizeNickname = 2.5;
  const targetFontSizeCatchphrase = 1.8;

  if (observHeight >= inputFormViewHeight) {
    const scaleFactor = inputFormViewHeight / observHeight;
    viewExampleName1.style.fontSize = parseFloat(viewExampleName1.style.fontSize) * scaleFactor + 'em';
    viewExampleName2.style.fontSize = parseFloat(viewExampleName1.style.fontSize) * scaleFactor + 'em';
    viewExampleSmallChara.style.fontSize = parseFloat(viewExampleSmallChara.style.fontSize) * scaleFactor + 'em';
    viewExampleNametitle.style.fontSize = parseFloat(viewExampleNametitle.style.fontSize) * scaleFactor + 'em';
    viewExampleNickname.style.fontSize = parseFloat(viewExampleNickname.style.fontSize) * scaleFactor + 'em';
    viewExampleCatchphrase.style.fontSize = parseFloat(viewExampleCatchphrase.style.fontSize) * scaleFactor + 'em';
  } else {
    if (textContent.length <= 8) {
      viewExampleName1.style.fontSize = targetFontSizeMain + 'em';
      viewExampleName2.style.fontSize = targetFontSizeMain + 'em';
      viewExampleSmallChara.style.fontSize = targetFontSizeSmallChara + 'em';
      viewExampleNametitle.style.fontSize = targetFontSizeNametitle + 'em';
      viewExampleNickname.style.fontSize = targetFontSizeNickname + 'em';
      viewExampleCatchphrase.style.fontSize = targetFontSizeCatchphrase + 'em';
    } else {
      viewExampleName1.style.fontSize = parseFloat(viewExampleName1.style.fontSize) + 'em';
      viewExampleName2.style.fontSize = parseFloat(viewExampleName2.style.fontSize) + 'em';
      viewExampleSmallChara.style.fontSize = parseFloat(viewExampleSmallChara.style.fontSize) + 'em';
      viewExampleNametitle.style.fontSize = parseFloat(viewExampleNametitle.style.fontSize) + 'em';
      viewExampleNickname.style.fontSize = parseFloat(viewExampleNickname.style.fontSize) + 'em';
      viewExampleCatchphrase.style.fontSize = parseFloat(viewExampleCatchphrase.style.fontSize) + 'em';
    }
  }
}

