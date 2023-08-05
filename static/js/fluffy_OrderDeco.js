const radio_btn_tuya_decoON = document.getElementById('tuya_deco_on');
const radio_btn_tuya_decoOFF = document.getElementById('tuya_deco_off');

const radio_btn_charaKatanuki_decoON = document.getElementById('charaKatanuki_deco_on');
const radio_btn_charaKatanuki_decoOFF = document.getElementById('charaKatanuki_deco_off');

const radio_btn_partsKatanuki_decoON = document.getElementById('partsKatanuki_deco_on');
const radio_btn_partsKatanuki_decoOFF = document.getElementById('partsKatanuki_deco_off');

const radio_btn_maruKatanuki_decoON = document.getElementById('maruKatanuki_deco_on');
const radio_btn_maruKatanuki_decoOFF = document.getElementById('maruKatanuki_deco_off');

const radio_btn_dakuten_decoON = document.getElementById('dakuten_deco_on');
const radio_btn_dakuten_decoOFF = document.getElementById('dakuten_deco_off');

const radio_btn_choko_decoON = document.getElementById('choko_deco_on');
const radio_btn_choko_decoOFF = document.getElementById('choko_deco_off');


const radio_btn_nametitle_frameON = document.getElementById('nametitle_frame_on');
var check_nametitle_frame = false;
const radio_btn_nametitle_frameOFF = document.getElementById('nametitle_frame_off');
const radio_btn_catchphrase_frameON = document.getElementById('catchphrase_frame_on');
var check_catchphrase_frame = false;
const radio_btn_catchphrase_frameOFF = document.getElementById('catchphrase_frame_off');
const radio_btn_parts_frameON = document.getElementById('parts_frame_on');
const radio_btn_parts_frameOFF = document.getElementById('parts_frame_off');

const cartItem5_1_1Name = document.getElementById("cart_item5-1-1_name");
const cartItem5_1_2Name = document.getElementById("cart_item5-1-2_name");
const cartItem5_1_3Name = document.getElementById("cart_item5-1-3_name");
const cartItem5_1_4Name = document.getElementById("cart_item5-1-4_name");
const cartItem5_1_5Name = document.getElementById("cart_item5-1-5_name");
const cartItem5_1_6Name = document.getElementById("cart_item5-1-6_name");

const nametitle_frame_Container = document.getElementById("nametitle_frame-Container");
const catchphrase_frame_Container = document.getElementById("catchphrase_frame-Container");
const parts_frame_Container = document.getElementById("parts_frame-Container");

const cartItem5_3_1Name = document.getElementById("cart_item5-3-1_name");
const cartItem5_3_2Name = document.getElementById("cart_item5-3-2_name");
const cartItem5_3_3Name = document.getElementById("cart_item5-3-3_name");
const cartItem5_5_1Name = document.getElementById("cart_item5-5-1_name");
const cartItem5_5_2Name = document.getElementById("cart_item5-5-2_name");
const cartItem5_5_3Name = document.getElementById("cart_item5-5-3_name");
const cartItem5_5_4Name = document.getElementById("cart_item5-5-4_name");
const cartItem5_5_5Name = document.getElementById("cart_item5-5-5_name");
const cartItem5_5_6Name = document.getElementById("cart_item5-5-6_name");

const cartItem5_1_1Price = document.getElementById("cart_item5-1-1_price");
const cartItem5_1_2Price = document.getElementById("cart_item5-1-2_price");
const cartItem5_1_3Price = document.getElementById("cart_item5-1-3_price");
const cartItem5_1_4Price = document.getElementById("cart_item5-1-4_price");
const cartItem5_1_5Price = document.getElementById("cart_item5-1-5_price");
const cartItem5_1_6Price = document.getElementById("cart_item5-1-6_price");
const cartItem5_2Price = document.getElementById("cart_item5-2_price");
const cartItem5_3_1Price = document.getElementById("cart_item5-3-1_price");
const cartItem5_3_2Price = document.getElementById("cart_item5-3-2_price");
const cartItem5_3_3Price = document.getElementById("cart_item5-3-3_price");
const cartItem5_5_1Price = document.getElementById("cart_item5-5-1_price");
const cartItem5_5_2Price = document.getElementById("cart_item5-5-2_price");
const cartItem5_5_3Price = document.getElementById("cart_item5-5-3_price");
const cartItem5_5_4Price = document.getElementById("cart_item5-5-4_price");
const cartItem5_5_5Price = document.getElementById("cart_item5-5-5_price");
const cartItem5_5_6Price = document.getElementById("cart_item5-5-6_price");

const cart_item5_1_2_extText = document.getElementById("cart_item5-1-2_extText");
const cart_item5_1_3_extText = document.getElementById("cart_item5-1-3_extText");
const cart_item5_1_4_extText = document.getElementById("cart_item5-1-4_extText");
const cart_item5_1_5_extText = document.getElementById("cart_item5-1-5_extText");

const cart_item5_5_1_extText = document.getElementById("cart_item5-5-1_extText");
const cart_item5_5_2_extText = document.getElementById("cart_item5-5-2_extText");
const cart_item5_5_3_extText = document.getElementById("cart_item5-5-3_extText");
const cart_item5_5_6_extText = document.getElementById("cart_item5-5-6_extText");

const dakutenDecoDiv = document.getElementById("dakutenDecoDiv");
const maruKatanukiDecoDiv = document.getElementById("maruKatanukiDecoDiv");
const partsKatanukiDecoDiv = document.getElementById("partsKatanukiDecoDiv");
const charaKatanukiDecoDiv = document.getElementById("charaKatanukiDecoDiv");

const ribbonDecoDiv = document.getElementById("ribbonDecoDiv");
const braidedDecoDiv = document.getElementById("braidedDecoDiv");
const whipDecoDiv = document.getElementById("whipDecoDiv");
const fuwadecoDecoDiv = document.getElementById("fuwadecoDecoDiv");

const input_partsKatanuki = document.getElementById("input_partsKatanuki");
const input_charaKatanuki = document.getElementById("input_charaKatanuki");


radio_btn_nametitle_frameON.addEventListener('change', function () {
  if (this.checked) {
    // "あり"が選択された場合の処理
    // Imageオブジェクトの作成
    var image = new Image();

    // URLを指定する
    var imageUrl = "/static/images/fullorder/order_buttons/deco/small_items/frame/名称敬称.png";
    image.src = imageUrl;
    addImageToCart('cart_item5-3-1', 'cartImagenametitle', "cart-image5", image, startPosition, animationDuration);
    cartItem5_3_1Name.textContent = '名称・敬称フチ色変更';
    cartItem5_3_1Price.textContent = '120';
    check_nametitle_frame = true;
    document.getElementById("select6_palette6_6").classList.add("select6_palette");
    document.getElementById("select6_palette6_10").classList.add("select6_palette");
  }
});

radio_btn_nametitle_frameOFF.addEventListener('change', function () {
  if (this.checked) {
    // "なし"が選択された場合の処理
    cartNicknameForColors.innerHTML = '';
    cartNicknameForColors_name.textContent = '';
    cartNicknameForColors_price.textContent = '';
    cartNicknameForColors_multiple.innerHTML = '';

    cartNametitleForColors.innerHTML = '';
    cartNametitleForColors_name.textContent = '';
    cartNametitleForColors_price.textContent = '';
    cartNametitleForColors_multiple.innerHTML = '';

    removeElemFromDiv('cartImagenametitle', 'cart_item5-3-1');
    cartItem5_3_1Name.textContent = '';
    cartItem5_3_1Price.textContent = '';
    check_nametitle_frame = false;

    // ここに追記必須

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
    map_paletteImage.set('select6_palette6_6', map_paletteImage.get('select6_palette6_2'));
    map_paletteImage.set('select6_palette6_10', map_paletteImage.get('select6_palette6_2'));
  }
});

radio_btn_catchphrase_frameON.addEventListener('change', function () {
  if (this.checked) {
    // "あり"が選択された場合の処理
    // Imageオブジェクトの作成
    var image = new Image();

    // URLを指定する
    var imageUrl = "/static/images/fullorder/order_buttons/deco/small_items/frame/キャッチフレーズ.png";
    image.src = imageUrl;
    addImageToCart('cart_item5-3-2', 'cartImageCatchphrase', "cart-image5", image, startPosition, animationDuration);
    cartItem5_3_2Name.textContent = 'キャッチフレーズフチ色変更';
    cartItem5_3_2Price.textContent = '390';
    check_catchphrase_frame = true;
    document.getElementById("select6_palette6_14").classList.add("select6_palette");
  }
});

radio_btn_catchphrase_frameOFF.addEventListener('change', function () {
  if (this.checked) {
    // "なし"が選択された場合の処理
    cartCatchphraseForColors.innerHTML = '';
    cartCatchphraseForColors_name.textContent = '';
    cartCatchphraseForColors_price.textContent = '';
    cartCatchphraseForColors_multiple.innerHTML = '';

    removeElemFromDiv('cartImageCatchphrase', 'cart_item5-3-2');
    cartItem5_3_2Name.textContent = '';
    cartItem5_3_2Price.textContent = '';
    check_catchphrase_frame = false;

    
    images.forEach(function (otherImage) {
      if (otherImage.classList.contains("select6_palette")) {
        otherImage.classList.remove("selected_6_palette");
        otherImage.style.border = "";
      }
    });
    document.getElementById("select6_palette6_14").classList.remove("select6_palette");
    document.getElementById("select6_palette6_14").src = document.getElementById("select6_palette6_2").src;
    map_paletteImage.set('select6_palette6_14', map_paletteImage.get('select6_palette6_2'));
  }
});

radio_btn_parts_frameON.addEventListener('change', function () {
  if (this.checked) {
    // "あり"が選択された場合の処理
    // Imageオブジェクトの作成
    var image = new Image();

    // URLを指定する
    var imageUrl = "/static/images/fullorder/order_buttons/deco/small_items/frame/パーツ.png";
    image.src = imageUrl;
    addImageToCart('cart_item5-3-3', 'cartImageParts', "cart-image5", image, startPosition, animationDuration);
    cartItem5_3_3Name.textContent = 'パーツフチ色変更';
    cartItem5_3_3Price.textContent = '99';
  }
});

radio_btn_parts_frameOFF.addEventListener('change', function () {
  if (this.checked) {
    // "なし"が選択された場合の処理
    removeElemFromDiv('cartImageParts', 'cart_item5-3-3');
    cartItem5_3_3Name.textContent = '';
    cartItem5_3_3Price.textContent = '';
  }
});

radio_btn_tuya_decoON.addEventListener('change', function () {
  if (this.checked) {
    // "あり"が選択された場合の処理
    // Imageオブジェクトの作成
    var image = new Image();

    // URLを指定する
    var imageUrl = "/static/images/fullorder/order_buttons/deco/small_items/font/1ツヤ.png";
    image.src = imageUrl;
    addImageToCart('cart_item5-1-1', 'cartImagetuya', "cart-image5", image, startPosition, animationDuration);
    cartItem5_1_1Name.textContent = 'ツヤ追加';
    cartItem5_1_1Price.textContent = '30';
  }
});

radio_btn_tuya_decoOFF.addEventListener('change', function () {
  if (this.checked) {
    // "なし"が選択された場合の処理
    removeElemFromDiv('cartImagetuya', 'cart_item5-1-1');
    cartItem5_1_1Name.textContent = '';
    cartItem5_1_1Price.textContent = '';
  }
});

radio_btn_charaKatanuki_decoON.addEventListener('change', function () {
  if (this.checked) {
    // "あり"が選択された場合の処理
    // Imageオブジェクトの作成
    var image = new Image();

    // URLを指定する
    var imageUrl = "/static/images/fullorder/order_buttons/deco/small_items/font/2くり抜き.png";
    image.src = imageUrl;
    addImageToCart('cart_item5-1-2', 'cartImagecharaKatanuki', "cart-image5", image, startPosition, animationDuration);
    cartItem5_1_2Name.textContent = '文字型抜き';
    cartItem5_1_2Price.textContent = '50';
    charaKatanukiDecoDiv.classList.remove("hidden");
  }
});

radio_btn_charaKatanuki_decoOFF.addEventListener('change', function () {
  if (this.checked) {
    // "なし"が選択された場合の処理
    removeElemFromDiv('cartImagecharaKatanuki', 'cart_item5-1-2');
    cartItem5_1_2Name.textContent = '';
    cartItem5_1_2Price.textContent = '';
    cart_item5_1_2_extText.textContent = '';
    charaKatanukiDecoDiv.classList.add("hidden");
    input_charaKatanuki.value = '';
  }
});

input_charaKatanuki.addEventListener('input', function () { updateDivContent(cart_item5_1_2_extText, input_charaKatanuki) });

radio_btn_partsKatanuki_decoON.addEventListener('change', function () {
  if (this.checked) {
    // "あり"が選択された場合の処理
    // Imageオブジェクトの作成
    var image = new Image();

    // URLを指定する
    var imageUrl = "/static/images/fullorder/order_buttons/deco/small_items/font/3型抜き.png";
    image.src = imageUrl;
    addImageToCart('cart_item5-1-3', 'cartImagepartsKatanuki', "cart-image5", image, startPosition, animationDuration);
    cartItem5_1_3Name.textContent = 'パーツ型抜き';
    cartItem5_1_3Price.textContent = '50';
    partsKatanukiDecoDiv.classList.remove("hidden");
  }
});

radio_btn_partsKatanuki_decoOFF.addEventListener('change', function () {
  if (this.checked) {
    // "なし"が選択された場合の処理
    removeElemFromDiv('cartImagepartsKatanuki', 'cart_item5-1-3');
    cartItem5_1_3Name.textContent = '';
    cartItem5_1_3Price.textContent = '';
    cart_item5_1_3_extText.textContent = '';
    partsKatanukiDecoDiv.classList.add("hidden");
    input_partsKatanuki.value = '';
  }
});

input_partsKatanuki.addEventListener('input', function () { updateDivContent(cart_item5_1_3_extText, input_partsKatanuki) });

radio_btn_maruKatanuki_decoON.addEventListener('change', function () {
  if (this.checked) {
    // "あり"が選択された場合の処理
    var maruKatanukiMenu = createPulldownMenu('maruKatanukiSelectionMenu', ["星", "ハート", "王冠", "肉球"]);

    maruKatanukiDecoDiv.appendChild(maruKatanukiMenu);

    maruKatanukiDecoDiv.classList.remove('hidden');
    maruKatanukiDecoDiv.classList.add('wrap_yoko');

    // EventListenerを追加する
    maruKatanukiMenu.addEventListener('change', function () {
      var image = new Image();

      // URLを指定する
      var imageUrl = "/static/images/fullorder/order_buttons/deco/small_items/font/4丸文字型抜き.png";
      image.src = imageUrl;
      removeElemFromDiv('cartImagemaruKatanuki', 'cart_item5-1-4');
      addImageToCart('cart_item5-1-4', 'cartImagemaruKatanuki', "cart-image5", image, startPosition, animationDuration);
      cartItem5_1_4Name.textContent = '丸文字型抜き';
      cartItem5_1_4Price.textContent = '60';
      cart_item5_1_4_extText.textContent = maruKatanukiMenu.value;
    });
  }
});

radio_btn_maruKatanuki_decoOFF.addEventListener('change', function () {
  if (this.checked) {
    // "なし"が選択された場合の処理
    maruKatanukiDecoDiv.removeChild(document.getElementById('maruKatanukiSelectionMenu'));

    maruKatanukiDecoDiv.classList.remove('wrap_yoko');
    maruKatanukiDecoDiv.classList.add('hidden');

    removeElemFromDiv('cartImagemaruKatanuki', 'cart_item5-1-4');
    cartItem5_1_4Name.textContent = '';
    cartItem5_1_4Price.textContent = '';
    cart_item5_1_4_extText.textContent = '';
  }
});

radio_btn_dakuten_decoON.addEventListener('change', function () {
  if (this.checked) {
    // "あり"が選択された場合の処理
    // Imageオブジェクトの作成

    var dakutenMenu = createPulldownMenu('dakutenSelectionMenu', ["星", "ハート", "王冠", "肉球"]);

    dakutenDecoDiv.appendChild(dakutenMenu);

    dakutenDecoDiv.classList.remove('hidden');
    dakutenDecoDiv.classList.add('wrap_yoko');

    // EventListenerを追加する
    dakutenMenu.addEventListener('change', function () {
      var image = new Image();

      // URLを指定する
      var imageUrl = "/static/images/fullorder/order_buttons/deco/small_items/font/5濁点.png";
      image.src = imageUrl;
      removeElemFromDiv('cartImagedakute', 'cart_item5-1-5');
      addImageToCart('cart_item5-1-5', 'cartImagedakute', "cart-image5", image, startPosition, animationDuration);
      cartItem5_1_5Name.textContent = '濁点パーツ交換';
      cartItem5_1_5Price.textContent = '89';
      cart_item5_1_5_extText.textContent = dakutenMenu.value;
    });

  }
});

radio_btn_dakuten_decoOFF.addEventListener('change', function () {
  if (this.checked) {
    // "なし"が選択された場合の処理
    dakutenDecoDiv.removeChild(document.getElementById('dakutenSelectionMenu'));
    dakutenDecoDiv.classList.remove('wrap_yoko');
    dakutenDecoDiv.classList.add('hidden');
    removeElemFromDiv('cartImagedakute', 'cart_item5-1-5');
    cartItem5_1_5Name.textContent = '';
    cartItem5_1_5Price.textContent = '';
    cart_item5_1_5_extText.textContent = '';
  }
});

radio_btn_choko_decoON.addEventListener('change', function () {
  if (this.checked) {
    // "あり"が選択された場合の処理
    // Imageオブジェクトの作成
    var image = new Image();

    // URLを指定する
    var imageUrl = "/static/images/fullorder/order_buttons/deco/small_items/font/6チョコがけ.png";
    image.src = imageUrl;
    addImageToCart('cart_item5-1-6', 'cartImagechoko', "cart-image5", image, startPosition, animationDuration);
    cartItem5_1_6Name.textContent = 'チョコがけ';
    cartItem5_1_6Price.textContent = '390';
  }
});

radio_btn_choko_decoOFF.addEventListener('change', function () {
  if (this.checked) {
    // "なし"が選択された場合の処理
    removeElemFromDiv('cartImagechoko', 'cart_item5-1-6');
    cartItem5_1_6Name.textContent = '';
    cartItem5_1_6Price.textContent = '';
  }
});


function radio_btn_ribbonState() {
  isOn = document.getElementById('ribbon_on').checked;

  if (isOn) {
    // "あり"が選択された場合の処理
    var ribbonMenu = createPulldownMenu('ribbonSelectionMenu', ["ホワイト", "ピンク", "パープル", "ブルー", "ライトブルー", "イエロー", "エメラルド", "ブラック"]);

    ribbonDecoDiv.appendChild(ribbonMenu);

    // EventListenerを追加する
    ribbonMenu.addEventListener('change', function () {
      var image = new Image();

      // URLを指定する
      var imageUrl = "/static/images/fullorder/order_buttons/deco/small_items/3Dparts/5-1リボン.png";
      image.src = imageUrl;
      removeElemFromDiv('cartImage5-5-1', 'cart_item5-5-1');
      addImageToCart('cart_item5-5-1', 'cartImage5-5-1', "cart-image5", image, startPosition, animationDuration);
      cartItem5_5_1Name.textContent = 'リボン';
      cartItem5_5_1Price.textContent = '120';
      cart_item5_5_1_extText.textContent = ribbonMenu.value;
    });
  } else {
    ribbonDecoDiv.removeChild(document.getElementById('ribbonSelectionMenu'));
    removeElemFromDiv('cartImage5-5-1', 'cart_item5-5-1');
    cartItem5_5_1Name.textContent = '';
    cartItem5_5_1Price.textContent = '';
    cart_item5_5_1_extText.textContent = '';
  }
}

function radio_btn_braidedState() {
  isOn = document.getElementById('braided_on').checked;

  if (isOn) {
    // "あり"が選択された場合の処理
    var braidedMenu = createPulldownMenu('braidedSelectionMenu', ["ホワイト", "レッド", "ピンク", "パステルピンク", "パープル", "ライトブルー", "エメラルド"]);

    braidedDecoDiv.appendChild(braidedMenu);

    // EventListenerを追加する
    braidedMenu.addEventListener('change', function () {
      var image = new Image();

      // URLを指定する
      var imageUrl = "/static/images/fullorder/order_buttons/deco/small_items/3Dparts/5-2編み上げ.png";
      image.src = imageUrl;
      removeElemFromDiv('cartImage5-5-2', 'cart_item5-5-2');
      addImageToCart('cart_item5-5-2', 'cartImage5-5-2', "cart-image5", image, startPosition, animationDuration);
      cartItem5_5_2Name.textContent = '編み上げ';
      cartItem5_5_2Price.textContent = '240';
      cart_item5_5_2_extText.textContent = braidedMenu.value;
    });
  } else {
    braidedDecoDiv.removeChild(document.getElementById('braidedSelectionMenu'));
    removeElemFromDiv('cartImage5-5-2', 'cart_item5-5-2');
    cartItem5_5_2Name.textContent = '';
    cartItem5_5_2Price.textContent = '';
    cart_item5_5_2_extText.textContent = '';
  }

}

function radio_btn_whipState() {
  isOn = document.getElementById('whip_on').checked;

  if (isOn) {
    // "あり"が選択された場合の処理
    var whipMenu = createPulldownMenu('whipSelectionMenu', ["ホワイト", "レッド", "ピンク", "パープル", "ブルー", "ライトブルー", "イエロー", "イエローグリーン", "グリーン", "オレンジ", "ブラック"]);

    whipDecoDiv.appendChild(whipMenu);

    // EventListenerを追加する
    whipMenu.addEventListener('change', function () {
      var image = new Image();

      // URLを指定する
      var imageUrl = "/static/images/fullorder/order_buttons/deco/small_items/3Dparts/5-3ホイップ.png";
      image.src = imageUrl;
      removeElemFromDiv('cartImage5-5-3', 'cart_item5-5-3');
      addImageToCart('cart_item5-5-3', 'cartImage5-5-3', "cart-image5", image, startPosition, animationDuration);
      cartItem5_5_3Name.textContent = 'ホイップ';
      cartItem5_5_3Price.textContent = '390';
      cart_item5_5_3_extText.textContent = whipMenu.value;
    });
  } else {
    whipDecoDiv.removeChild(document.getElementById('whipSelectionMenu'));
    removeElemFromDiv('cartImage5-5-3', 'cart_item5-5-3');
    cartItem5_5_3Name.textContent = '';
    cartItem5_5_3Price.textContent = '';
    cart_item5_5_3_extText.textContent = '';
  }
}

function radio_btn_chainState() {
  isOn = document.getElementById('chain_on').checked;

  if (isOn) {
    // Imageオブジェクトの作成
    var image = new Image();

    // URLを指定する
    var imageUrl = "/static/images/fullorder/order_buttons/deco/small_items/3Dparts/5-4チェーン.png";
    image.src = imageUrl;
    addImageToCart('cart_item5-5-4', 'cartImage5-5-4', "cart-image5", image, startPosition, animationDuration);
    cartItem5_5_4Name.textContent = 'チェーン';
    cartItem5_5_4Price.textContent = '500';
  } else {
    removeElemFromDiv('cartImage5-5-4', 'cart_item5-5-4');
    cartItem5_5_4Name.textContent = '';
    cartItem5_5_4Price.textContent = '';
  }
}

function radio_btn_laceState() {
  isOn = document.getElementById('lace_on').checked;

  if (isOn) {
    // Imageオブジェクトの作成
    var image = new Image();

    // URLを指定する
    var imageUrl = "/static/images/fullorder/order_buttons/deco/small_items/3Dparts/5-5レース.png";
    image.src = imageUrl;
    addImageToCart('cart_item5-5-5', 'cartImage5-5-5', "cart-image5", image, startPosition, animationDuration);
    cartItem5_5_5Name.textContent = '外縁レース';
    cartItem5_5_5Price.textContent = '690';
  } else {
    removeElemFromDiv('cartImage5-5-5', 'cart_item5-5-5');
    cartItem5_5_5Name.textContent = '';
    cartItem5_5_5Price.textContent = '';
  }
}

function radio_btn_fuwadecoState() {
  isOn = document.getElementById('fuwadeco_on').checked;

  if (isOn) {
    // "あり"が選択された場合の処理
    var fuwadecoMenu = createPulldownMenu('fuwadecoSelectionMenu', ["ホワイト", "レッド", "ピンク", "ブルー", "ライトブルー", "ラベンダー", "イエロー", "イエローグリーン", "エメラルド", "オレンジ", "ミックス", "ピンク×ライトブルー", "ブラック"]);

    fuwadecoDecoDiv.appendChild(fuwadecoMenu);

    // EventListenerを追加する
    fuwadecoMenu.addEventListener('change', function () {
      var image = new Image();

      // URLを指定する
      var imageUrl = "/static/images/fullorder/order_buttons/deco/small_items/3Dparts/5-6ふわデコ.png";
      image.src = imageUrl;
      removeElemFromDiv('cartImage5-5-6', 'cart_item5-5-6');
      addImageToCart('cart_item5-5-6', 'cartImage5-5-6', "cart-image5", image, startPosition, animationDuration);
      cartItem5_5_6Name.textContent = 'ふわデコset';
      cartItem5_5_6Price.textContent = '980';
      cart_item5_5_6_extText.textContent = fuwadecoMenu.value;
    });
  } else {
    fuwadecoDecoDiv.removeChild(document.getElementById('fuwadecoSelectionMenu'));
    removeElemFromDiv('cartImage5-5-6', 'cart_item5-5-6');
    cartItem5_5_6Name.textContent = '';
    cartItem5_5_6Price.textContent = '';
    cart_item5_5_6_extText.textContent = '';
  }
}

// radio_btn_reinforcement_on.forEach((radioButton) => {
//   radioButton.addEventListener('change', function () {
//     if (this.checked) {
//       // 選択された場合の処理
//       if (howManySelectElement.value != ''){
//         numOfBoards = parseInt(howManySelectElement.value);
//       } else {
//         numOfBoards = 1;
//       }
      
//       // Imageオブジェクトの作成
//       var image = new Image();

//       if (this.value == 'normal') {
//         // URLを指定する
//         var imageUrl = "/static/images/fullorder/order_buttons/delivery/small_items/option/1厚紙補強.png";
//         cartItem7_1Name.textContent = '厚紙補強';
//         cartItem7_1Price.textContent = 490 * numOfBoards;
//       } else if (this.value == 'PP') {
//         // URLを指定する
//         var imageUrl = "/static/images/fullorder/order_buttons/delivery/small_items/option/2pp板補強.png";
//         cartItem7_1Name.textContent = 'PP板補強';
//         cartItem7_1Price.textContent = 610 * numOfBoards;
//       } else if (this.value == 'original') {
//         // URLを指定する
//         var imageUrl = "/static/images/fullorder/order_buttons/delivery/small_items/option/3当店オリジナル補強板.png";
//         cartItem7_1Name.textContent = 'オリジナル補強';
//         cartItem7_1Price.textContent = 720 * numOfBoards;
//       } else {
//         removeElemFromDiv('cartImage7-1', 'cart_item7-1');
//         cartItem7_1Name.textContent = '';
//         cartItem7_1Price.textContent = '';

//         removeElemFromDiv('cartImage7_Multiple', 'cart_item7-1_multiple');
//       }

//       if (this.value != 'off') {
//         image.src = imageUrl;
//         removeElemFromDiv('cartImage7-1', 'cart_item7-1');
//         addImageToCart('cart_item7-1', 'cartImage7-1', "cart-image7", image, startPosition, animationDuration);

//         var imgElement = document.createElement('img');

//         if (howManySelectElement.value === "1") {
//           imgElement.src = '/static/images/fullorder/materials/multiple_number/かける1.png';
//         } else if (howManySelectElement.value === "2") {
//           imgElement.src = '/static/images/fullorder/materials/multiple_number/かける2.png';
//         } else if (howManySelectElement.value === "3") {
//           imgElement.src = '/static/images/fullorder/materials/multiple_number/かける3.png';
//         } else if (howManySelectElement.value === "4") {
//           imgElement.src = '/static/images/fullorder/materials/multiple_number/かける4.png';
//         } else {
//           imgElement.src = '/static/images/fullorder/materials/multiple_number/かける1.png';
//         }
//         imgElement.alt = 'Image';
//         imgElement.id = 'cartImage7_Multiple';
//         imgElement.classList.add('cart-image7');
//         removeElemFromDiv('cartImage7_Multiple', 'cart_item7-1_multiple');
//         document.getElementById('cart_item7-1_multiple').appendChild(imgElement);
//       }
//     }
//   });
// });
