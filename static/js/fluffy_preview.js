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
const warning_palette1 = document.getElementById('cancelOpeningModal1');
const warning_palette2 = document.getElementById('cancelOpeningModal2');
const warning_palette3 = document.getElementById('cancelOpeningModal3');
const warning_palette4 = document.getElementById('cancelOpeningModal4');
const map_inputText = new Map();

const radio_btns = document.querySelectorAll(`input[type='radio'][name='tab_item']`);


// 入力フォームのinputイベントを監視し、入力内容を表示する関数を定義
function updateDivContentAdjustSize(divElem, inputElem) {
  divElem.textContent = inputElem.value;
  adjustTextSize();
  copyDivtoAnotherDiv('observ','touchable_text');
}

function copyDivtoAnotherDiv(fromDivID, toDivID) {
  var sourceElement = document.getElementById(fromDivID);
  var destinationElement = document.getElementById(toDivID);

  // コピー先のDiv内の要素をすべて削除する
  while (destinationElement.firstChild) {
    destinationElement.firstChild.remove();
  }

  // 要素をコピーする
  var clonedElement = sourceElement.cloneNode(true);

  clonedElement.id = 'observ_copied';

  // コピー先のDivにコピーした要素を追加する
  destinationElement.appendChild(clonedElement);
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

  tabCount = 2;
  cartItemCharaName.textContent = "";
  cartItemCharaPrice.textContent = "";
  calc_TextPrice = 0;
  temp_Text = '';
  var className = "tab_item";
  var styleElement = document.createElement("style");



  if (inputExampleNickname.value.length >= 1) {
    inputExampleCatchphrase.disabled = true;
    inputExampleNickname.disabled = false;
    warning.style.display = 'block';
    labelNickname.style.display = 'block';
    tabCount = tabCount + 1;
  } else if (inputExampleCatchphrase.value.length >= 1) {
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

  if (inputExampleNametitle.value.length >= 1) {
    labelNametitle.style.display = 'block';
    tabCount = tabCount + 1;
  }

  if (inputExampleNickname.value.length == 0) {
    cartNicknameForColors.innerHTML = '';
    cartNicknameForColors_name.textContent = '';
    cartNicknameForColors_price.textContent = '';
    cartNicknameForColors_multiple.innerHTML = '';
    for (let target of radio_btns) {
      if (target.id == 'deco') {
        target.checked = true;
      }
    }
  }
  if (inputExampleCatchphrase.value.length == 0) {
    cartCatchphraseForColors.innerHTML = '';
    cartCatchphraseForColors_name.textContent = '';
    cartCatchphraseForColors_price.textContent = '';
    cartCatchphraseForColors_multiple.innerHTML = '';
    
    removeElemFromDiv('cartImageCatchphrase', 'cart_item5-3-2');
    cartItem5_3_2Name.textContent = '';
    cartItem5_3_2Price.textContent = '';
    check_catchphrase_frame = false;

    // ここに追記必須

    images.forEach(function (otherImage) {
      if (otherImage.classList.contains("select6_palette")) {
        otherImage.classList.remove("selected_6_palette");
        otherImage.style.border = "";
      }
    });
    document.getElementById("select6_palette6_14").classList.remove("select6_palette");
    document.getElementById("select6_palette6_14").src = document.getElementById("select6_palette6_2").src;
    
    radio_btn_catchphrase_frameON.checked = false;
    radio_btn_catchphrase_frameOFF.checked = true;

    for (let target of radio_btns) {
      if (target.id == 'deco') {
        target.checked = true;
      }
    }
  }
  if (inputExampleNametitle.value.length == 0) {
    cartNametitleForColors.innerHTML = '';
    cartNametitleForColors_name.textContent = '';
    cartNametitleForColors_price.textContent = '';
    cartNametitleForColors_multiple.innerHTML = '';
    for (let target of radio_btns) {
      if (target.id == 'deco') {
        target.checked = true;
      }
    }
  }

  if (inputExampleNametitle.value.length == 0 && inputExampleNickname.value.length ==0){
    removeElemFromDiv('cartImagenametitle', 'cart_item5-3-1');
    cartItem5_3_1Name.textContent = '';
    cartItem5_3_1Price.textContent = '';
    check_nametitle_frame = false;

    
    images.forEach(function (otherImage) {
      if (otherImage.classList.contains("select6_palette")) {
        otherImage.classList.remove("selected_6_palette");
        otherImage.style.border = "";
      }
    });
    document.getElementById("select6_palette6_6").classList.remove("select6_palette");
    document.getElementById("select6_palette6_10").classList.remove("select6_palette");
    document.getElementById("select6_palette6_6").src = document.getElementById("select6_palette6_2").src;
    document.getElementById("select6_palette6_10").src = document.getElementById("select6_palette6_2").src;
    radio_btn_nametitle_frameON.checked = false;
    radio_btn_nametitle_frameOFF.checked = true;
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

  if (viewExampleNickname.textContent.trim().length == 0 && viewExampleNametitle.textContent.trim().length == 0){
    nametitle_frame_Container.classList.add("hidden");
    check_nametitle_frame = false;
  } else {
    nametitle_frame_Container.classList.remove("hidden");
  }
  if (viewExampleCatchphrase.textContent.trim().length == 0){
    catchphrase_frame_Container.classList.add("hidden");
    check_catchphrase_frame = false;
  } else {
    catchphrase_frame_Container.classList.remove("hidden");
  }

  cartItemCharaName.textContent = temp_Text;

  // calc price 
  calc_TextPrice = calc_TextPrice + 450 * viewExampleSmallChara.textContent.trim().length;
  calc_TextPrice = calc_TextPrice + 50 * viewExampleNametitle.textContent.trim().length;
  calc_TextPrice = calc_TextPrice + 50 * viewExampleNickname.textContent.trim().length;
  calc_TextPrice = calc_TextPrice + 180 * viewExampleCatchphrase.textContent.trim().length;

  cartItemCharaPrice.textContent = calc_TextPrice;

  if (inputExampleNameLeft.value.length > 0 && inputExampleNameLeft.value.length < parseInt(howManySelectElement.value)) {
    inputExampleNameRight.setAttribute('maxlength', String(parseInt(howManySelectElement.value) - inputExampleNameLeft.value.length));
  } else if (inputExampleNameLeft.value.length > 0 && inputExampleNameLeft.value.length >= parseInt(howManySelectElement.value)) {
    inputExampleNameRight.setAttribute('maxlength', '0');
  } else {
    inputExampleNameRight.setAttribute('maxlength', String(parseInt(howManySelectElement.value)));
  }

  if (inputExampleNameRight.value.length > 0 && inputExampleNameRight.value.length < parseInt(howManySelectElement.value)) {
    inputExampleNameLeft.setAttribute('maxlength', String(parseInt(howManySelectElement.value) - inputExampleNameRight.value.length));
  } else if (inputExampleNameRight.value.length > 0 && inputExampleNameRight.value.length >= parseInt(howManySelectElement.value)) {
    inputExampleNameLeft.setAttribute('maxlength', '0');
  } else {
    inputExampleNameLeft.setAttribute('maxlength', String(parseInt(howManySelectElement.value)));
  }


  const observHeight = observ.clientHeight;
  const inputFormViewHeight = inputFormView.clientHeight * 0.7;
  const textContent = viewExampleName1.textContent.trim() + viewExampleName2.textContent.trim();
  const targetFontSizeMain = 5.4;
  const targetFontSizeSmallChara = 3.5;
  const targetFontSizeNametitle = 1.2;
  const targetFontSizeNickname = 1.8;
  const targetFontSizeCatchphrase = 1.5;

  if (observHeight >= inputFormViewHeight) {
    const scaleFactor = inputFormViewHeight / observHeight;
    viewExampleName1.style.fontSize = parseFloat(viewExampleName1.style.fontSize) * scaleFactor + 'em';
    viewExampleName2.style.fontSize = parseFloat(viewExampleName1.style.fontSize) * scaleFactor + 'em';
    viewExampleSmallChara.style.fontSize = parseFloat(viewExampleSmallChara.style.fontSize) * scaleFactor + 'em';
    viewExampleNametitle.style.fontSize = parseFloat(viewExampleNametitle.style.fontSize) * scaleFactor + 'em';
    viewExampleNickname.style.fontSize = parseFloat(viewExampleNickname.style.fontSize) * scaleFactor + 'em';
    viewExampleCatchphrase.style.fontSize = parseFloat(viewExampleCatchphrase.style.fontSize) * scaleFactor + 'em';
  } else {
    if (textContent.length <= 11) {
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

