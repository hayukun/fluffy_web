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
const labelNickname = document.getElementById("label_nickname");
const labelCatchphrase = document.getElementById("label_catchphrase");
const labelNametitle = document.getElementById("label_nametitle");

const inputFormView = document.getElementById('inputForm-view');
const observ = document.getElementById('observ');
const warning = document.getElementById('panelCharaWarning');
const map_inputText = new Map() ;


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
  
  labelNametitle.style.display = 'none';
  labelNickname.style.display = 'none';
  labelCatchphrase.style.display = 'none';

  tabCount = 1;
  cartItem5Name.textContent = "";
  cartItem5Price.textContent = "";
  calc_TextPrice=0;
  temp_Text = '';
  var className = "tab_item";
  var styleElement = document.createElement("style");

  cartNicknameForColors = document.getElementById('cart_item6-2');
  cartNicknameForColors_name = document.getElementById('cart_item6-2_name');
  cartNicknameForColors_price = document.getElementById('cart_item6-2_price');
  cartNicknameForColors_multiple = document.getElementById('cart_item6-2_multiple');
  cartCatchphraseForColors = document.getElementById('cart_item6-4');
  cartCatchphraseForColors_name = document.getElementById('cart_item6-4_name');
  cartCatchphraseForColors_price = document.getElementById('cart_item6-4_price');
  cartCatchphraseForColors_multiple = document.getElementById('cart_item6-4_multiple');
  

  // 名称に文字を入れて色をカートに入れたあと、名称の文字を空にするとカートから素材は消えるがパレットからは色が消えてない + タブコンテントも残っている
  if (inputExampleNickname.value.length >= 1){
    inputExampleCatchphrase.disabled = true;
    inputExampleNickname.disabled = false;
    warning.style.display = 'block';
    labelNickname.style.display = 'block';
    tabCount = tabCount + 1; 
  } else if (inputExampleCatchphrase.value.length >= 1){
    inputExampleCatchphrase.disabled = false;
    inputExampleNickname.disabled = true;
    warning.style.display = 'block';
    labelCatchphrase.style.display = 'block';
    tabCount = tabCount + 1; 
  } else {
    inputExampleNickname.disabled = false;
    inputExampleCatchphrase.disabled = false;
    warning.style.display = 'none';
  }

  if (inputExampleNickname.value.length == 0){
    cartNicknameForColors.innerHTML = '';
    cartNicknameForColors_name.textContent = '';
    cartNicknameForColors_price.textContent = '';
    cartNicknameForColors_multiple.innerHTML = '';
  }
  if (inputExampleCatchphrase.value.length == 0){
    cartCatchphraseForColors.innerHTML = '';
    cartCatchphraseForColors_name.textContent = '';
    cartCatchphraseForColors_price.textContent = '';
    cartCatchphraseForColors_multiple.innerHTML = '';
  }
  
  if (inputExampleNametitle.value.length >= 1){ 
    labelNametitle.style.display = 'block';
    tabCount = tabCount + 1; 
  } 
  styleElement.innerHTML = "." + className + " { width: calc(100%/" + tabCount + "); }";
  document.head.appendChild(styleElement);

  map_inputText.set("名前", viewExampleName1.textContent);
  map_inputText.set("名前(右側)", viewExampleName2.textContent);
  map_inputText.set("中文字", viewExampleSmallChara.textContent);
  map_inputText.set("名称", viewExampleNickname.textContent);
  map_inputText.set("敬称", viewExampleNametitle.textContent);
  map_inputText.set("キャッチフレーズ", viewExampleCatchphrase.textContent);

  for (const [key, value] of map_inputText) {
    temp_Text = temp_Text + key + ':' + value + '/';
  }
  
  cartItem5Name.textContent = temp_Text;

  // calc price 
  calc_TextPrice = calc_TextPrice + 450 * viewExampleSmallChara.textContent.trim().length;
  calc_TextPrice = calc_TextPrice + 50 * viewExampleNametitle.textContent.trim().length;
  calc_TextPrice = calc_TextPrice + 50 * viewExampleNickname.textContent.trim().length;
  calc_TextPrice = calc_TextPrice + 180 * viewExampleCatchphrase.textContent.trim().length;

  cartItem5Price.textContent = calc_TextPrice;

  if (inputExampleNameLeft.value.length > 0 && inputExampleNameLeft.value.length < parseInt(howManySelectElement.value)){
    inputExampleNameRight.setAttribute('maxlength', String(parseInt(howManySelectElement.value)-inputExampleNameLeft.value.length));
  } else if (inputExampleNameLeft.value.length > 0 && inputExampleNameLeft.value.length >= parseInt(howManySelectElement.value)){
    inputExampleNameRight.setAttribute('maxlength', '0');
  } else {
    inputExampleNameRight.setAttribute('maxlength', String(parseInt(howManySelectElement.value)));
  }

  if (inputExampleNameRight.value.length > 0 && inputExampleNameRight.value.length < parseInt(howManySelectElement.value)){
    inputExampleNameLeft.setAttribute('maxlength', String(parseInt(howManySelectElement.value)-inputExampleNameRight.value.length));
  } else if (inputExampleNameRight.value.length > 0 && inputExampleNameRight.value.length >= parseInt(howManySelectElement.value)){
    inputExampleNameLeft.setAttribute('maxlength', '0');
  } else {
    inputExampleNameLeft.setAttribute('maxlength', String(parseInt(howManySelectElement.value)));
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

