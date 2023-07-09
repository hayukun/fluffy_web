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

const radio_btn_catchphrase_frameON = document.getElementById('catchphrase_frame_on');
const radio_btn_catchphrase_frameOFF = document.getElementById('catchphrase_frame_off');
const radio_btn_nametitle_frameON = document.getElementById('nametitle_frame_on');
const radio_btn_nametitle_frameOFF = document.getElementById('nametitle_frame_off');


const cartItem5_1Name = document.getElementById("cart_item5-1_name");
const cartItem5_2Name = document.getElementById("cart_item5-2_name");
const cartItem5_3Name = document.getElementById("cart_item5-3_name");
const cartItem5_4Name = document.getElementById("cart_item5-4_name");
const cartItem5_5Name = document.getElementById("cart_item5-5_name");
// const cartItem5_6Name = document.getElementById("cart_item5-6_name");
const cartItem5_7Name = document.getElementById("cart_item5-7_name");
const cartItem5_8Name = document.getElementById("cart_item5-8_name");
// const cartItem5_9Name = document.getElementById("cart_item5-9_name");
// const cartItem5_10Name = document.getElementById("cart_item5-10_name");
// const cartItem5_11Name = document.getElementById("cart_item5-11_name");

const cartItem5_1Price = document.getElementById("cart_item5-1_price");
const cartItem5_2Price = document.getElementById("cart_item5-2_price");
const cartItem5_3Price = document.getElementById("cart_item5-3_price");
const cartItem5_4Price = document.getElementById("cart_item5-4_price");
const cartItem5_5Price = document.getElementById("cart_item5-5_price");
const cartItem5_6Price = document.getElementById("cart_item5-6_price");
const cartItem5_7Price = document.getElementById("cart_item5-7_price");
const cartItem5_8Price = document.getElementById("cart_item5-8_price");

radio_btn_nametitle_frameON.addEventListener('change', function() {
  if (this.checked) {
    // "あり"が選択された場合の処理
    // Imageオブジェクトの作成
    var image = new Image();

    // URLを指定する
    var imageUrl = "/static/images/fullorder/order_buttons/deco/small_items/frame/名称敬称.png";
    image.src = imageUrl;
    addImageToCart('cart_item5-7', 'cartImagenametitle', "cart-image5", image, startPosition, animationDuration);
    cartItem5_7Name.textContent = '名称・敬称フチ色変更';
    cartItem5_7Price.textContent = '120';
  }
});

radio_btn_nametitle_frameOFF.addEventListener('change', function() {
  if (this.checked) {
    // "なし"が選択された場合の処理
    removeImageFromDiv('cartImagenametitle', 'cart_item5-7');
    cartItem5_7Name.textContent = '';
    cartItem5_7Price.textContent = '';
  }
});

radio_btn_catchphrase_frameON.addEventListener('change', function() {
    if (this.checked) {
      // "あり"が選択された場合の処理
      // Imageオブジェクトの作成
      var image = new Image();
  
      // URLを指定する
      var imageUrl = "/static/images/fullorder/order_buttons/deco/small_items/frame/キャッチフレーズ.png";
      image.src = imageUrl;
      addImageToCart('cart_item5-8', 'cartImageCatchphrase', "cart-image5", image, startPosition, animationDuration);
      cartItem5_8Name.textContent = 'キャッチフレーズフチ色変更';
      cartItem5_8Price.textContent = '390';
    }
  });
  
  radio_btn_catchphrase_frameOFF.addEventListener('change', function() {
    if (this.checked) {
      // "なし"が選択された場合の処理
      removeImageFromDiv('cartImageCatchphrase', 'cart_item5-8');
      cartItem5_8Name.textContent = '';
      cartItem5_8Price.textContent = '';
    }
  });



  radio_btn_tuya_decoON.addEventListener('change', function() {
    if (this.checked) {
      // "あり"が選択された場合の処理
      // Imageオブジェクトの作成
      var image = new Image();
  
      // URLを指定する
      var imageUrl = "/static/images/fullorder/order_buttons/deco/small_items/font/1ツヤ.png";
      image.src = imageUrl;
      addImageToCart('cart_item5-1', 'cartImagetuya', "cart-image5", image, startPosition, animationDuration);
      cartItem5_1Name.textContent = 'ツヤ追加';
      cartItem5_1Price.textContent = '30';
    }
  });
  
  radio_btn_tuya_decoOFF.addEventListener('change', function() {
    if (this.checked) {
      // "なし"が選択された場合の処理
      removeImageFromDiv('cartImagetuya', 'cart_item5-1');
      cartItem5_1Name.textContent = '';
      cartItem5_1Price.textContent = '';
    }
  });

  radio_btn_charaKatanuki_decoON.addEventListener('change', function() {
    if (this.checked) {
      // "あり"が選択された場合の処理
      // Imageオブジェクトの作成
      var image = new Image();
  
      // URLを指定する
      var imageUrl = "/static/images/fullorder/order_buttons/deco/small_items/font/2くり抜き.png";
      image.src = imageUrl;
      addImageToCart('cart_item5-2', 'cartImagecharaKatanuki', "cart-image5", image, startPosition, animationDuration);
      cartItem5_2Name.textContent = '文字型抜き';
      cartItem5_2Price.textContent = '50';
    }
  });
  
  radio_btn_charaKatanuki_decoOFF.addEventListener('change', function() {
    if (this.checked) {
      // "なし"が選択された場合の処理
      removeImageFromDiv('cartImagecharaKatanuki', 'cart_item5-2');
      cartItem5_2Name.textContent = '';
      cartItem5_2Price.textContent = '';
    }
  });

  radio_btn_partsKatanuki_decoON.addEventListener('change', function() {
    if (this.checked) {
      // "あり"が選択された場合の処理
      // Imageオブジェクトの作成
      var image = new Image();
  
      // URLを指定する
      var imageUrl = "/static/images/fullorder/order_buttons/deco/small_items/font/3型抜き.png";
      image.src = imageUrl;
      addImageToCart('cart_item5-3', 'cartImagepartsKatanuki', "cart-image5", image, startPosition, animationDuration);
      cartItem5_3Name.textContent = 'パーツ型抜き';
      cartItem5_3Price.textContent = '50';
    }
  });
  
  radio_btn_partsKatanuki_decoOFF.addEventListener('change', function() {
    if (this.checked) {
      // "なし"が選択された場合の処理
      removeImageFromDiv('cartImagepartsKatanuki', 'cart_item5-3');
      cartItem5_3Name.textContent = '';
      cartItem5_3Price.textContent = '';
    }
  });

  radio_btn_maruKatanuki_decoON.addEventListener('change', function() {
    if (this.checked) {
      // "あり"が選択された場合の処理
      // Imageオブジェクトの作成
      var image = new Image();
  
      // URLを指定する
      var imageUrl = "/static/images/fullorder/order_buttons/deco/small_items/font/4丸文字型抜き.png";
      image.src = imageUrl;
      addImageToCart('cart_item5-4', 'cartImagemaruKatanuki', "cart-image5", image, startPosition, animationDuration);
      cartItem5_4Name.textContent = '丸文字型抜き';
      cartItem5_4Price.textContent = '60';
    }
  });
  
  radio_btn_maruKatanuki_decoOFF.addEventListener('change', function() {
    if (this.checked) {
      // "なし"が選択された場合の処理
      removeImageFromDiv('cartImagemaruKatanuki', 'cart_item5-4');
      cartItem5_4Name.textContent = '';
      cartItem5_4Price.textContent = '';
    }
  });

  radio_btn_dakuten_decoON.addEventListener('change', function() {
    if (this.checked) {
      // "あり"が選択された場合の処理
      // Imageオブジェクトの作成
      var image = new Image();
  
      // URLを指定する
      var imageUrl = "/static/images/fullorder/order_buttons/deco/small_items/font/5濁点.png";
      image.src = imageUrl;
      addImageToCart('cart_item5-5', 'cartImagedakute', "cart-image5", image, startPosition, animationDuration);
      cartItem5_5Name.textContent = '濁点パーツ交換';
      cartItem5_5Price.textContent = '89';
    }
  });
  
  radio_btn_dakuten_decoOFF.addEventListener('change', function() {
    if (this.checked) {
      // "なし"が選択された場合の処理
      removeImageFromDiv('cartImagedakute', 'cart_item5-5');
      cartItem5_5Name.textContent = '';
      cartItem5_5Price.textContent = '';
    }
  });