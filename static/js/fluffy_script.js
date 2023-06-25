// うちわ or ボード用コンストラクタ
const title1 = document.getElementById("title1");
const title2 = document.getElementById("title2");
const group1 = document.querySelector(".group1");
const group2 = document.querySelector(".group2");
var images = document.querySelectorAll("img");
const included2Image = document.getElementById("image2_1");

// 選択状況おしらせ表示
// うちわorボード
const selected_1_ImageInfo = document.getElementById("selected_1_ImageInfo");


// image8を選択したときにでる、警告文章？
const notesText = document.getElementById('notesText');

// 料金表画像対応マップ
const map_priceObject1 = new Map([
  ['image1_1', 690],
  ['image1_2', 1480],
  ['image1_3', 990],
  ['image1_4', 1380],
  ['image1_5', 1500],
  ['image1_6', 1800],
  ['image1_7', 2100],
  ['image1_8', 0]
]);

const map_priceObject2 = new Map([
  ['image2_1', 490],
  ['image2_2', 610],
  ['image2_3', 720],
  ['image2_4', 980],
]);

// 商品名画像対応マップ
const map_productNameObject = new Map([
  ['image1_1', '顔うちわ文字'],
  ['image1_2', 'うちわ文字'],
  ['image1_3', 'ボードB6'],
  ['image1_4', 'ボードB5'],
  ['image1_5', 'ボードA4'],
  ['image1_6', 'ボードB4'],
  ['image1_7', 'ボードA3'],
  ['image1_8', 'サイズ指定']
]);

// サイズ対応マップ
const map_sizeObject = new Map([
  ['image2_1', 'Sサイズ'],
  ['image2_2', 'Mサイズ'],
  ['image2_3', 'Lサイズ'],
  ['image2_4', 'XLサイズ']
]);

// タイプ名画像対応マップ
const map_typeNameObject = new Map([
  ['image3_1', '顔うちわ文字(AorB)'],
  ['image3_2', '1枚につき1文字'],
  ['image3_3', '1枚につき1文字＋中文字'],
  ['image3_4', '1枚につき2～3文字'],
  ['image3_5', '1枚につき5～10文字前後'],
  ['image3_6', '1枚につき1文字(バラ)'],
  ['image3_7', '1枚につき1文字＋中文字(バラ)'],
  ['image3_8', '1枚につき1文字(連結)'],
  ['image3_9', '1枚につき2～3文字(連結)'],
  ['image3_10', '1枚につき5～10文字前後(連結)'],
]);

// フォント名画像対応マップ
const map_fontNameObject = new Map([
  ['image4_1', '日本語01'],
  ['image4_2', '日本語02'],
  ['image4_3', '日本語03'],
  ['image4_4', '日本語04'],
  ['image4_5', '日本語05'],
  ['image4_6', '日本語06'],
  ['image4_7', '日本語07'],
  ['image4_8', '日本語08'],
  ['image4_9', '日本語09'],
  ['image4_10', '日本語10'],
  ['image4_11', '日本語11'],
  ['image4_12', '日本語12'],
  ['image4_13', '日本語13'],
  ['image4_14', '日本語14'],
  ['image4_15', '日本語15'],
  ['image4_16', '韓国語16'],
  ['image4_17', '韓国語17'],
  ['image4_18', '韓国語18'],
  ['image4_19', '韓国語19'],
  ['image4_20', '韓国語20'],
  ['image4_21', '韓国語21'],
  ['image4_22', '韓国語22'],
  ['image4_23', '韓国語23'],
  ['image4_24', '韓国語24'],
  ['image4_25', '韓国語25'],
  ['image4_26', '韓国語26'],
  ['image4_27', '韓国語27'],
  ['image4_28', '韓国語28'],
  ['image4_29', '韓国語29'],
  ['image4_30', '韓国語30'],
  ['image4_31', 'フォント指定00'],
]);


// 素材名画像対応マップ
const map_materialNameObject = new Map([
  ['image6_a', 'aカッティング'],
  ['image6_b', 'bカッティング'],
  ['image6_c', 'c画用紙'],
  ['image6_d', 'd蛍光シート'],
  ['image6_e', 'e蓄光シート'],
  ['image6_f', 'f高品質グリッター'],
  ['image6_g', 'g高品質グリッター'],
  ['image6_h', 'hホログラム'],
  ['image6_i', 'iホログラム'],
  ['image6_j', 'j反射シート'],
  ['image6_k', 'kアニマル'],
  ['image6_l', 'l取り寄せ品'],
]);

const map_priceObject5 = new Map([
  ['image6_a', 890],
  ['image6_b', 690],
  ['image6_c', 390],
  ['image6_d', 720],
  ['image6_e', 1500],
  ['image6_f', 1200],
  ['image6_g', 1200],
  ['image6_h', 1200],
  ['image6_i', 1200],
  ['image6_j', 1980],
  ['image6_k', 1980],
  ['image6_l', 2100],
]);

const map_paletteNameCart = new Map([
  ['palette_1', 'cart_item6-1'],
  ['palette_2', 'cart_item6-2'],
  ['palette_3', 'cart_item6-3'],
]);

const map_paletteImage = new Map([
  ['select6_palette6_1', ''],
  ['select6_palette6_2', ''],
  ['select6_palette6_3', ''],
  ['select6_palette6_4', ''],
  ['select6_palette6_5', ''],
  ['select6_palette6_6', ''],
  ['select6_palette6_7', ''],
  ['select6_palette6_8', ''],
  ['select6_palette6_9', ''],
  ['select6_palette6_10', ''],
  ['select6_palette6_11', ''],
  ['select6_palette6_12', ''],
]);

const map_nightSingleImage = new Map([
  ['color_e1', '/static/images/fullorder/order_buttons/colors/single/e1橙_night.png'],
  ['color_e2', '/static/images/fullorder/order_buttons/colors/single/e2青_night.png'],
  ['color_e3', '/static/images/fullorder/order_buttons/colors/single/e3緑_night.png'],
  ['color_j1', '/static/images/fullorder/order_buttons/colors/single/j1黄_night.png'],
  ['color_j2', '/static/images/fullorder/order_buttons/colors/single/j2橙_night.png'],
  ['color_j3', '/static/images/fullorder/order_buttons/colors/single/j3赤_night.png'],
  ['color_j4', '/static/images/fullorder/order_buttons/colors/single/j4青_night.png'],
  ['color_j5', '/static/images/fullorder/order_buttons/colors/single/j5緑_night.png'],
  ['color_j6', '/static/images/fullorder/order_buttons/colors/single/j6白_night.png'],
]);


// 文字タイプクラスリスト
const list_charaTypeClassObject = ['image3_1', 'image3_2', 'image3_3', 'image3_4', 'image3_5', 'image3_6', 'image3_7', 'image3_8', 'image3_9', 'image3_10'];
// 素材クラスリスト
const list_materialClassObject = ['image6_a', 'image6_b', 'image6_c', 'image6_d', 'image6_e', 'image6_f', 'image6_g', 'image6_h', 'image6_i', 'image6_j', 'image6_k', 'image6_l'];

// デフォルトパレット画像
const default_palette_src = "/static/images/fullorder/order_buttons/colors/hoshi-waku.png";

// うちわ or ボード用　input要素
const inputElement1 = document.createElement('input');
inputElement1.type = 'text';
inputElement1.placeholder = "(例) B3 / 縦 〇cm、横 〇cm など  ";
inputElement1.style.width = '500px';
inputElement1.setAttribute('id', 'cartItem1ExtInput');

// カート機能用コンストラクタ
const cartItem1 = document.getElementById("cart_item1");
const cartItem2 = document.getElementById("cart_item2");
const cartItem3 = document.getElementById("cart_item3");
const cartItem4 = document.getElementById("cart_item4");
const cartItem1Name = document.getElementById("cart_item1_name");
const cartItem2Name = document.getElementById("cart_item2_name");
const cartItem3Name = document.getElementById("cart_item3_name");
const cartItem4Name = document.getElementById("cart_item4_name");
const cartItem5Name = document.getElementById("cart_item5_name");
const cartItem1Price = document.getElementById("cart_item1_price");
const cartItem2Price = document.getElementById("cart_item2_price");
const cartItem3Price = document.getElementById("cart_item3_price");
const cartItem4Price = document.getElementById("cart_item4_price");
const cartItem5Price = document.getElementById("cart_item5_price");

// image1_8選んだ時の入力フォーム(image1_8はサイズ指定)
const cartItem1ExtText = document.getElementById("cart_item1_extText");

// 指定フォントの入力
const inputFontElement = document.getElementById("input_font");
const cartItem4ExtText = document.getElementById("cart_item4_extText");

// howManySelect要素を取得
var howManySelectElement = document.querySelector('select[name="howManySelect"]');
var is_UchiwaGrayed = true;
var is_BoardGrayed = true;

// プレビュー画面要素を取得
const viewBoard = document.getElementById('view_board');
const uchiwaPaletteOrigin = document.getElementById('uchiwa_palette');
const boardPaletteOrigin = document.getElementById('board_palette');
const normalCharaInputForm = document.getElementById('normal_Chara');
const smallCharaInputForm = document.getElementById('small_Chara');


// カート追加アニメーション処理
const animationDuration = 1000; // アニメーションの時間（ミリ秒）
const startPosition = -100; // アニメーションの開始位置（左からの位置、ピクセル単位）
const endPosition = 0; // アニメーションの終了位置（左からの位置、ピクセル単位）

const modalImages = document.getElementById("modal-images");
const modalText = document.getElementById("modal-text");

const buttonOpen1 = document.getElementById('set_colorsToCart_1');
const buttonOpen2 = document.getElementById('set_colorsToCart_2');
const buttonOpen3 = document.getElementById('set_colorsToCart_3');
const buttonOpen4 = document.getElementById('set_colorsToCart_4');
const modal = document.getElementById('easyModal');
const buttonClose = document.getElementsByClassName('modalClose')[0];
const buttonInsertColorsIntoCart = document.getElementById('btnInsertColorsIntoCart');
const buttonOpenColorRanking = document.getElementById('openColorRanking');
const colorRanking = document.getElementById('colorRanking');
const colorRank1 = document.getElementById('ranking6-1');
const colorRank2 = document.getElementById('ranking6-2');
const colorRank3 = document.getElementById('ranking6-3');

let map_insertCart;
var cartForColors;
var cartForColors_name;
var cartForColors_price;
var cartForColors_multiple;

// うちわ or ボード
function handleImageSelection1(image) {
  const isAlreadySelected = image.classList.contains("selected_1");

  if (isAlreadySelected) {
    // クリックした画像がすでに選択されている場合
    image.classList.remove("selected_1");
    image.style.border = "";

    resetHiddenCart(cartItem1, cartItem1Name, cartItem1Price);

    if (window.getComputedStyle(notesText).display === "block") {
      cartItem1ExtText.textContent = "";
      inputElement1.value = "";
      notesText.style.display = "none";
    }

    if (image.id === 'image1_1') {
      images.forEach(function (excludedImage) {
        if (excludedImage.classList.contains("excluded2") || excludedImage.classList.contains("excluded3")) {
          excludedImage.classList.remove("grayed-out");
        }
        excludedImage.classList.remove("selected_2");
        excludedImage.style.border = "";
      });
      resetImageSelection3combo();
      showAllOptions();
    }
    UchiwaOrBoardGrayedOut();
  } else {
    // クリックした画像が未選択状態の場合
    images.forEach(function (otherImage) {
      if (otherImage.classList.contains("select1") || otherImage.classList.contains("select1_title")) {
        if (otherImage.classList.contains('selected_1') && otherImage.id === 'image1_1') {
          images.forEach(function (excludedImage) {
            if (excludedImage.classList.contains("excluded2") || excludedImage.classList.contains("excluded3")) {
              excludedImage.classList.remove("grayed-out");
            }
            excludedImage.classList.remove("selected_1");
            excludedImage.classList.remove("selected_2");
            excludedImage.style.border = "";
          });
          resetImageSelection3combo();
          showAllOptions();
        }

        otherImage.classList.remove("selected_1");
        otherImage.style.border = "";
      }
    });

    image.classList.add("selected_1");
    image.style.border = "2px solid #FF6CC4";

    for (const [key, value] of map_priceObject1) {
      if (key === image.id) {
        showAllOptions();
        removeImageFromDiv('cartImage1', 'cart_item1');
        addImageToCart(cartItem1, 'cartImage1', "cart-image1", image, startPosition, animationDuration);
        cartItem1Price.textContent = value;
        cartItem1Name.textContent = map_productNameObject.get(image.id);

        if (key === 'image1_8') {
          notesText.style.display = "block";
          selected_1_ImageInfo.appendChild(inputElement1);
        } else if (key === 'image1_1') {
          reduceOptions();

          images.forEach(function (otherImage) {
            if (otherImage.classList.contains("excluded2")) {
              otherImage.classList.add("grayed-out");
              if (otherImage.classList.contains('selected_2')) {
                otherImage.classList.remove('selected_2');
                otherImage.style.border = "";
              }
            } else if (otherImage.classList.contains("excluded3")) {
              otherImage.classList.add("grayed-out");
              if (otherImage.classList.contains('selected_3')) {
                otherImage.classList.remove('selected_3');
                otherImage.style.border = "";
              }
            } else if (otherImage.classList.contains("autoincluded2")) {
              otherImage.classList.add('selected_2');
              otherImage.style.border = "2px solid #FF6CC4";
            } else if (otherImage.classList.contains("autoincluded3")) {
              otherImage.classList.remove("grayed-out");
            }
          });

          removeImageFromDiv('cartImage2', 'cart_item2');
          addImageToCart(cartItem2, 'cartImage2', "cart-image2", included2Image, startPosition, animationDuration);
          cartItem2Price.textContent = map_priceObject2.get('image2_1');
          cartItem2Name.textContent = map_sizeObject.get('image2_1');

          resetHiddenCart(cartItem3, cartItem3Name, cartItem3Price);

          cartItem1ExtText.textContent = "";
          inputElement1.value = "";
          notesText.style.display = "none";
        } else {
          cartItem1ExtText.textContent = "";
          inputElement1.value = "";
          removeImageFromDiv("cartItem1ExtInput", "selected_1_ImageInfo");
          notesText.style.display = "none";
          UchiwaOrBoardGrayedOut();
        }

        break;
      }
    }
  }
}


//　文字サイズ
function handleImageSelection2(image) {
  if (image.classList.contains("selected_2")) { // クリックした画像がすでに選択されている場合
    // 選択状態を解除し、ボーダーも除去
    image.classList.remove("selected_2");
    image.style.border = "";

    // カートからアイテム除去、内部価格情報も初期化
    // removeImageFromDiv('cartImage2', 'cart_item2');
    resetHiddenCart(cartItem2, cartItem2Name, cartItem2Price);
  } else {  // クリックした画像が未選択状態の場合
    if (image.classList.contains('grayed-out')) {
      ;
    } else {
      images.forEach(function (otherImage) {
        if (otherImage.classList.contains("select2")) {
          otherImage.classList.remove("selected_2");
          otherImage.style.border = "";
        }
      });
      image.classList.add("selected_2");
      image.style.border = "2px solid #FF6CC4";
      for (const [key, value] of map_priceObject2) {
        if (key === image.id) {
          // カートに追加
          // cartItem1.textContent = map_productNameObject.get(image.id);
          removeImageFromDiv('cartImage2', 'cart_item2');
          addImageToCart(cartItem2, 'cartImage2', "cart-image2", image, startPosition, animationDuration);
          cartItem2Price.textContent = value;
          cartItem2Name.textContent = map_sizeObject.get(image.id);

          break;
        }
      }
    }

  }
}

//　文字タイプ
function handleImageSelection3(image) {
  if (image.classList.contains("selected_3")) { // クリックした画像がすでに選択されている場合
    // 選択状態を解除し、ボーダーも除去
    image.classList.remove("selected_3");
    image.style.border = "";
    // カートからアイテム除去、内部価格情報も初期化
    removeImageFromDiv('cartImage3', 'cart_item3');
    resetHiddenCart(cartItem3, cartItem3Name, cartItem3Price);
  } else {  // クリックした画像が未選択状態の場合
    if (image.classList.contains('grayed-out')) {
      ;
    } else {
      initializeCharactorSet();
      images.forEach(function (otherImage) {
        if (otherImage.classList.contains("select3")) {
          otherImage.classList.remove("selected_3");
          otherImage.style.border = "";
        }
      });
      image.classList.add("selected_3");
      image.style.border = "2px solid #FF6CC4";


      for (type of list_charaTypeClassObject) {
        if (image.classList.contains(type)) {
          typeNameImage = document.getElementById(type);
          break;
        }
      }

      if (image.classList.contains('image3_3') || image.classList.contains('image3_7')) {
        normalCharaInputForm.style.display = 'none';
        smallCharaInputForm.style.display = 'block';
      } else {
        normalCharaInputForm.style.display = 'block';
        smallCharaInputForm.style.display = 'none';
      }

      var selectedValue = parseInt(howManySelectElement.value);
      if (image.classList.contains('image3_2') || image.classList.contains('image3_3')) {
        inputExampleNameMain.setAttribute('maxlength', '1');
        inputExampleNameLeft.setAttribute('maxlength', '1');
        inputExampleNameRight.setAttribute('maxlength', '1');
      } else if (image.classList.contains('image3_4')) {
        inputExampleNameMain.setAttribute('maxlength', '3');
      } else if (image.classList.contains('image3_6') || image.classList.contains('image3_7') || image.classList.contains('image3_8')) {
        inputExampleNameMain.setAttribute('maxlength', howManySelectElement.value);
        inputExampleNameLeft.setAttribute('maxlength', howManySelectElement.value);
        inputExampleNameRight.setAttribute('maxlength', howManySelectElement.value);
      } else if (image.classList.contains('image3_9')) {
        var maxCharaNumber = selectedValue * 3;
        inputExampleNameMain.setAttribute('maxlength', maxCharaNumber.toString());
        inputExampleNameLeft.setAttribute('maxlength', maxCharaNumber.toString());
        inputExampleNameRight.setAttribute('maxlength', maxCharaNumber.toString());
      } else {
        inputExampleNameMain.setAttribute('maxlength', '15');
        inputExampleNameLeft.setAttribute('maxlength', '15');
        inputExampleNameRight.setAttribute('maxlength', '15');
      }


      removeImageFromDiv('cartImage3', 'cart_item3');
      addImageToCart(cartItem3, 'cartImage3', "cart-image3", typeNameImage, startPosition, animationDuration);
      // タイプに金額つけるならここに追記
      cartItem3Name.textContent = map_typeNameObject.get(typeNameImage.id);
    }
  }
}

function initializeCharactorSet() {
  inputExampleNameMain.value = '';
  inputExampleNameMain.setAttribute('maxlength', '15');
  inputExampleNameLeft.value = '';
  inputExampleNameLeft.setAttribute('maxlength', '8');
  inputExampleNameRight.value = '';
  inputExampleNameRight.setAttribute('maxlength', '8');
  inputExampleSmallName.value = '';
  inputExampleSmallName.setAttribute('maxlength', '5');
  inputExampleNickname.value = '';
  inputExampleNickname.setAttribute('maxlength', '5');
  inputExampleNametitle.value = '';
  inputExampleNametitle.setAttribute('maxlength', '5');
  inputExampleCatchphrase.value = '';
  inputExampleCatchphrase.setAttribute('maxlength', '20');
  viewExampleName1.textContent = '';
  viewExampleName2.textContent = '';
  viewExampleSmallChara.textContent = '';
  viewExampleNickname.textContent = '';
  viewExampleNametitle.textContent = '';
  viewExampleCatchphrase.textContent = '';
  warning.style.display = 'none';
  normalCharaInputForm.style.display = 'block';
  smallCharaInputForm.style.display = 'none';
  cartItem5Name.textContent = "";
  cartItem5Price.textContent = "";
}

//　フォント
function handleImageSelection4(image) {
  if (image.classList.contains("selected_4")) { // クリックした画像がすでに選択されている場合
    // 選択状態を解除し、ボーダーも除去
    image.classList.remove("selected_4");
    image.style.border = "";
    // カートからアイテム除去、内部価格情報も初期化
    removeImageFromDiv('cartImage4', 'cart_item4');
    resetHiddenCart(cartItem4, cartItem4Name, cartItem4Price);
  } else {  // クリックした画像が未選択状態の場合

    images.forEach(function (otherImage) {
      if (otherImage.classList.contains("select4")) {
        otherImage.classList.remove("selected_4");
        otherImage.style.border = "";
      }
    });
    image.classList.add("selected_4");
    image.style.border = "2px solid #FF6CC4";

    removeImageFromDiv('cartImage4', 'cart_item4');
    addImageToCart(cartItem4, 'cartImage4', "cart-image4", image, startPosition, animationDuration);
    // フォントに金額つけるならここに追記
    cartItem4Name.textContent = map_fontNameObject.get(image.id);

    // フォントの金額初期化、指定フォントのインプットフォーム初期化
    cartItem4Price.textContent = "";
    cartItem4ExtText.textContent = "";
    inputFontElement.value = "";
  }
}

// パレット
function handleImageSelection6_palette(image) {
  if (image.classList.contains("selected_6_palette")) { // クリックした画像がすでに選択されている場合
    ;
  } else {  // クリックした画像が未選択状態の場合

    images.forEach(function (otherImage) {
      if (otherImage.classList.contains("select6_palette")) {
        otherImage.classList.remove("selected_6_palette");
        otherImage.style.border = "";
      }
    });
    image.classList.add("selected_6_palette");
    image.style.border = "2px solid #FF6CC4";

  }
}

//　素材
function handleImageSelection6(image) {
  // クリックした画像が未選択状態の場合

  // パレットのImage格納用変数
  selectedPaletteImage = '';

  images.forEach(function (otherImage) { // すべての画像をループ
    if (otherImage.classList.contains("selected_6_palette")) { // 現在選択されているパレットImageを検索
      selectedPaletteImage = otherImage;
    }
  });

  sourcePath = image.src;
  if (selectedPaletteImage != '') {

    map_paletteImage.set(selectedPaletteImage.id, image);

    for (const [key, value] of map_nightSingleImage) {
      if (key === image.id) {
        sourcePath = value;
        break;
      }
    }

    selectedPaletteImage.src = sourcePath;
  }
}

function initializeImageSelection() {
  // イベントリスナーをセットアップする関数
  function setupEventListener(element, callback) {
    element.addEventListener("click", function () {
      notesText.style.display = "none";

      // グループの表示設定とタイトルのスタイルを変更
      group1.style.display = element === title1 ? "flex" : "none";
      group2.style.display = element === title2 ? "flex" : "none";
      title1.classList.toggle("grayed-out", element !== title1);
      title2.classList.toggle("grayed-out", element !== title2);
      title1.classList.toggle("selected_1", element === title1);
      title2.classList.toggle("selected_1", element === title2);

      initializeCharactorSet();
      resetImageSelection3combo();
      UchiwaOrBoardGrayedOut();
      createPreview();
      callback();
    });
  }

  // title1(うちわ)のイベントリスナーをセットアップ
  setupEventListener(title1, resetImageSelection1);

  // title2(ボード)のイベントリスナーをセットアップ
  setupEventListener(title2, resetImageSelection1);

  // 画像のイベントリスナーをセットアップ
  images.forEach(function (image) {
    image.addEventListener("click", function () {
      if (image.classList.contains("select1")) {
        handleImageSelection1(image);
      } else if (image.classList.contains("select2")) {
        handleImageSelection2(image);
      } else if (image.classList.contains("select3")) {
        handleImageSelection3(image);
      } else if (image.classList.contains("select4")) {
        handleImageSelection4(image);
      } else if (image.classList.contains("select6_palette")) {
        handleImageSelection6_palette(image);
      } else if (image.classList.contains("select6")) {
        handleImageSelection6(image);
      } else {
        ;
      }
    });
  });
}


// howManySelect要素の変更を検知するイベントリスナーを追加
howManySelectElement.addEventListener('change', function () {
  // 変更されたときの処理を記述する
  var selectedValue = parseInt(howManySelectElement.value);
  resetImageSelection3();
  // UchiwaOrBoardGrayedOut();
  images.forEach(function (image) { // 全イメージ画像ループ
    if (image.classList.contains("select3")) {
      if (!isNaN(selectedValue)) {
        if (selectedValue === 1 && (image.classList.contains("multipleUchiwa") || image.classList.contains("multipleBoard"))) {
          image.classList.add("grayed-out");
        } else if (selectedValue > 1 && (image.classList.contains("singleUchiwa") || image.classList.contains("singleBoard"))) {
          image.classList.add("grayed-out");
        } else if (selectedValue === 1 && (image.classList.contains("singleUchiwa") || image.classList.contains("singleBoard"))) {
          ;
        } else if (selectedValue > 1 && (image.classList.contains("multipleUchiwa") || image.classList.contains("multipleBoard"))) {
          ;
        } else {
          image.classList.add("grayed-out");
        }
        if (is_UchiwaGrayed == true && (image.classList.contains("singleUchiwa") || (image.classList.contains("multipleUchiwa")))) {
          image.classList.add("grayed-out");
        } else if (is_UchiwaGrayed == false && (image.classList.contains("singleUchiwa") || (image.classList.contains("multipleUchiwa")))) {
          ;
        }
        if (is_BoardGrayed == true && (image.classList.contains("singleBoard") || (image.classList.contains("multipleBoard")))) {
          image.classList.add("grayed-out");
        } else if (is_BoardGrayed == false && (image.classList.contains("singleBoard") || (image.classList.contains("multipleBoard")))) {
          ;
        }
      } else {
        image.classList.add("grayed-out");
      }
    }
  });
  createPreview();
  insertColorsIntoCart();
});

// 何連オプションの1以外非表示にする
function reduceOptions() {
  for (var i = 0; i < howManySelectElement.options.length; i++) {
    var option = howManySelectElement.options[i];

    // valueが1以外のオプションを非表示にする
    if (option.value !== '1') {
      option.style.display = 'none';
    }
  }
  howManySelectElement.value = '1';
  UchiwaOrBoardGrayedOut();
  createPreview();
  insertColorsIntoCart();
}

// オプションを再表示する関数
function showAllOptions() {
  // オプションをループして再表示
  for (var i = 0; i < howManySelectElement.options.length; i++) {
    var option = howManySelectElement.options[i];

    // デフォルトの表示設定に戻す
    option.style.display = '';
    // howManySelectElement.value = '';
  }
  createPreview();
}

function UchiwaOrBoardGrayedOut() {

  if (title1.classList.contains("grayed-out") && !title2.classList.contains("grayed-out")) {
    is_UchiwaGrayed = true;
    is_BoardGrayed = false;
  } else if (!title1.classList.contains("grayed-out") && title2.classList.contains("grayed-out")) {
    is_UchiwaGrayed = false;
    is_BoardGrayed = true;
  } else {
    is_UchiwaGrayed = true;
    is_BoardGrayed = true;
  }
  var selectedValue = parseInt(howManySelectElement.value);
  images.forEach(function (image) { // 全イメージ画像ループ
    if (image.classList.contains("select3")) {
      if (!isNaN(selectedValue)) {
        if (selectedValue === 1 && (image.classList.contains("multipleUchiwa") || image.classList.contains("multipleBoard"))) {
          image.classList.add("grayed-out");
        } else if (selectedValue > 1 && (image.classList.contains("singleUchiwa") || image.classList.contains("singleBoard"))) {
          image.classList.add("grayed-out");
        } else if (selectedValue === 1 && (image.classList.contains("singleUchiwa") || image.classList.contains("singleBoard"))) {
          ;
        } else if (selectedValue > 1 && (image.classList.contains("multipleUchiwa") || image.classList.contains("multipleBoard"))) {
          ;
        } else {
          image.classList.add("grayed-out");
        }
        if (is_UchiwaGrayed == true && (image.classList.contains("singleUchiwa") || (image.classList.contains("multipleUchiwa")))) {
          image.classList.add("grayed-out");
        } else if (is_UchiwaGrayed == false && (image.classList.contains("singleUchiwa") || (image.classList.contains("multipleUchiwa")))) {
          ;
        }
        if (is_BoardGrayed == true && (image.classList.contains("singleBoard") || (image.classList.contains("multipleBoard")))) {
          image.classList.add("grayed-out");

        } else if (is_BoardGrayed == false && (image.classList.contains("singleBoard") || (image.classList.contains("multipleBoard")))) {
          ;
        }
      } else {
        image.classList.add("grayed-out");
      }
    }
  });
}

// 3combo初期化関数
function resetImageSelection3combo() {
  // カートの中身もクリアにする
  resetHiddenCart(cartItem1, cartItem1Name, cartItem1Price);
  resetHiddenCart(cartItem2, cartItem2Name, cartItem2Price);
  resetHiddenCart(cartItem3, cartItem3Name, cartItem3Price);
  showAllOptions();
  howManySelectElement.value = '';
  images.forEach(function (image) { // 全イメージ画像ループ

    if (!image.classList.contains("select1_title")) { // select1のクラスがついた画像は選択状態を解除し、選択ボーダーも取り除く。グレーアウトはすべての画像から取り除く
      image.classList.remove("grayed-out");
      if (image.classList.contains("select1")) {
        image.classList.remove("selected_1");
        if (image.id == "image1_8") { // title1がクリック -> サイズ指定の入力フォームを初期化 (title2と同じ処理のためまとめれそう)
          inputElement1.value = "";
          cartItem1ExtText.textContent = "";
        }
        image.style.border = "";
      } else if (image.classList.contains("select2")) { // select2のクラスがついた画像は選択状態を解除し、選択ボーダーも取り除く。グレーアウトはすべての画像から取り除く
        image.classList.remove("selected_2");
        image.style.border = "";
      } else if (image.classList.contains("select3")) { // select3のクラスがついた画像は選択状態を解除し、選択ボーダーも取り除く。グレーアウトはすべての画像から取り除く
        image.classList.remove("selected_3");
        image.style.border = "";
      }
      removeImageFromDiv("cartItem1ExtInput", "selected_1_ImageInfo");
    }
  });
}

// うちわorボード初期化関数
function resetImageSelection1() {
  // カートの中身もクリアにする
  resetHiddenCart(cartItem1, cartItem1Name, cartItem1Price);
  images.forEach(function (image) { // 全イメージ画像ループ
    // select1のクラスがついた画像は選択状態を解除し、選択ボーダーも取り除く。グレーアウトはすべての画像から取り除く
    if (image.classList.contains("select1")) {
      image.classList.remove("grayed-out");
      image.classList.remove("selected_1");
      image.style.border = "";
      if (image.id == "image1_8") { // title1がクリック -> サイズ指定の入力フォームを初期化 (title2と同じ処理のためまとめれそう)
        inputElement1.value = "";
        cartItem1ExtText.textContent = "";
      }
    }
  });

}

// 文字タイプ初期化関数 
function resetImageSelection3() {
  // カートの中身もクリアにする
  resetHiddenCart(cartItem3, cartItem3Name, cartItem3Price);
  images.forEach(function (image) { // 全イメージ画像ループ
    // select3のクラスがついた画像は選択状態を解除し、選択ボーダーも取り除く。グレーアウトはすべての画像から取り除く
    if (image.classList.contains("select3")) {
      image.classList.remove("grayed-out");
      image.classList.remove("selected_3");
      image.style.border = "";
    }
  });

}

// うちわ、ボードの何連・何枚表示プレビュー
function createPreview() {
  viewBoard.textContent = "";
  var copiedImage;

  if (!is_UchiwaGrayed && is_BoardGrayed) {
    copiedImage = uchiwaPaletteOrigin.cloneNode(true);
    copiedImage.classList.remove("uchiwa_palette");
    copiedImage.id = "";
    copiedImage.style.display = "block";
  } else if (is_UchiwaGrayed && !is_BoardGrayed) {
    copiedImage = boardPaletteOrigin.cloneNode(true);
    copiedImage.classList.remove("board_palette");
    copiedImage.id = "";
    copiedImage.style.display = "block";
  }


  if (howManySelectElement.value != "" && (!is_UchiwaGrayed || !is_BoardGrayed)) {
    for (let i = 0; i < parseInt(howManySelectElement.value); i++) {
      var clonedImage = copiedImage.cloneNode(true);
      viewBoard.appendChild(clonedImage);
    }
  }
}

// 入力フォームのinputイベントを監視し、入力内容を表示する関数を定義
function updateDivContent(divElem, inputElem, bool) {

  divElem.textContent = inputElem.value;
  if (divElem.textContent.trim().length > 0 && bool) {
    inputFontImage = document.getElementById('image4_31');
    removeImageFromDiv('cartImage4', 'cart_item4');
    addImageToCart(cartItem4, 'cartImage4', "cart-image4", inputFontImage, startPosition, animationDuration);
    // フォントに金額つけるならここに追記
    cartItem4Name.textContent = map_fontNameObject.get('image4_31');
    cartItem4Price.textContent = 120;
    images.forEach(function (image) { // 全イメージ画像ループ
      // select4のクラスがついた画像は選択状態を解除し、選択ボーダーも取り除く。
      if (image.classList.contains("select4")) {
        image.classList.remove("selected_4");
        image.style.border = "";
      }
    });
  } else if (divElem.textContent.trim().length === 0 && bool) {
    cartItem4Price.textContent = "";
    removeImageFromDiv('cartImage4', 'cart_item4');
  }
}


buttonOpen1.addEventListener('click', function () { modalOpen("select6_palette6_1", "select6_palette6_4", "cart_item6-1"); });
buttonOpen2.addEventListener('click', function () { modalOpen("select6_palette6_5", "select6_palette6_8", "cart_item6-2"); });
buttonOpen3.addEventListener('click', function () { modalOpen("select6_palette6_9", "select6_palette6_12", "cart_item6-3"); });
buttonOpen4.addEventListener('click', function () { modalOpen("select6_palette6_13", "select6_palette6_16", "cart_item6-2"); });

function insertColorsIntoCart() {
  if (typeof map_insertCart !== 'undefined') {
    cartForColors = document.getElementById(map_insertCart.divname);
    cartForColors_name = document.getElementById(map_insertCart.divname + '_name');
    cartForColors_price = document.getElementById(map_insertCart.divname + '_price');
    cartForColors_multiple = document.getElementById(map_insertCart.divname + '_multiple');
    calc_price = 0;
    cartForColors.innerHTML = '';
    cartForColors_name.textContent = '';
    cartForColors_price.textContent = '';
    cartForColors_multiple.innerHTML = '';
    
    for (img of map_insertCart.colorNameImage) {
      copiedImage = img.cloneNode(true);
      calc_price = calc_price + map_priceObject5.get(img.id);
      copiedImage.removeAttribute('id');
      copiedImage.classList.remove('box-width350');
      copiedImage.classList.add('cart-image6');

      cartForColors.appendChild(copiedImage);
    }
    cartForColors_name.textContent = map_insertCart.text;

    if (howManySelectElement.value != "") {
      cartForColors_price.textContent = calc_price * parseInt(howManySelectElement.value);
    } else {
      cartForColors_price.textContent = calc_price;
    }

    // 画像要素を作成
    var imgElement = document.createElement('img');
    if (howManySelectElement.value === "1") {
      imgElement.src = '/static/images/fullorder/materials/multiple_number/かける1.png';
    } else if (howManySelectElement.value === "2") {
      imgElement.src = '/static/images/fullorder/materials/multiple_number/かける2.png';
    } else if (howManySelectElement.value === "3") {
      imgElement.src = '/static/images/fullorder/materials/multiple_number/かける3.png';
    } else if (howManySelectElement.value === "4") {
      imgElement.src = '/static/images/fullorder/materials/multiple_number/かける4.png';
    } else {
      imgElement.src = '/static/images/fullorder/materials/multiple_number/かける1.png';
    }
    imgElement.alt = 'Image';
    imgElement.classList.add('cart-image6');
    cartForColors_multiple.appendChild(imgElement);
    modalClose();
  } else {
    ;
  }
}

function modalOpen(start_mapAttr, end_mapAttr, cartID) {
  modal.style.display = 'block';
  var is_Insert = false;
  modalText.innerHTML = "<p class='jkfont'>この色の組み合わせをカートに追加してもよろしいですか？</p>";
  modalImages.textContent = "";
  arrayImagelist = [];
  images_text = "";

  for (const [key, value] of map_paletteImage) {
    if (key === start_mapAttr) {
      is_Insert = true;
    } else if (key === end_mapAttr) {
      if (value != '') {
        addImageToPalette(modalImages, "modal-image6", value);
        arrayImagelist.push(value);
        images_text = images_text + "→" + value.id;

      } else {
        arrayImagelist.push("");
      }

      is_Insert = false;
      map_insertCart = new cartMaterials(cartID, arrayImagelist[0], arrayImagelist[1], arrayImagelist[2], arrayImagelist[3], images_text);

    }

    if (is_Insert && value != '') {
      addImageToPalette(modalImages, "modal-image6", value);
      if (images_text === '') {
        images_text = value.id;
      } else {
        images_text = images_text + "→" + value.id;
      }

      arrayImagelist.push(value);
    } else if (is_Insert && value == '') {
      arrayImagelist.push("");
    }
  }

}

buttonClose.addEventListener('click', modalClose);

function modalClose() {
  modal.style.display = 'none';
}

// モーダルコンテンツ以外がクリックされた時
addEventListener('click', outsideClose);
function outsideClose(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}

function openColorRanking() {
  if (colorRanking.style.display == "block") {
    colorRanking.style.display = "none";
  } else {
    colorRanking.style.display = "block";
  }

}

function rankingApplyPalette(rankingDiv) {
  this.rankingDiv = document.getElementById(rankingDiv);
  var imgElements = this.rankingDiv.getElementsByTagName("img");
  var paletteElement = '';
  for (var i = 0; i < imgElements.length; i++) {
    paletteElement = '';
    sourcePath = '';
    var imgElement = imgElements[i];
    paletteElement = document.getElementById("select6_palette6_" + (i + 1).toString());

    if (paletteElement != '') {
      map_paletteImage.set(paletteElement.id, imgElement);
      sourcePath = imgElement.src;
      for (const [key, value] of map_nightSingleImage) {
        if (key === imgElement.id) {
          sourcePath = value;
          break;
        }
      }

      paletteElement.src = sourcePath;
    }
  }
}

// 入力フォームのinputイベントに関数を登録
inputElement1.addEventListener('input', function () { updateDivContent(cartItem1ExtText, inputElement1, false) });
inputFontElement.addEventListener('input', function () { updateDivContent(cartItem4ExtText, inputFontElement, true) });
buttonInsertColorsIntoCart.addEventListener('click', function () {
  insertColorsIntoCart();
});

buttonOpenColorRanking.addEventListener('click', openColorRanking);
colorRank1.addEventListener('click', function () { rankingApplyPalette("ranking6-1") });
colorRank2.addEventListener('click', function () { rankingApplyPalette("ranking6-2") });
colorRank3.addEventListener('click', function () { rankingApplyPalette("ranking6-3") });