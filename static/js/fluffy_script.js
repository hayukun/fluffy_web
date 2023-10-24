// うちわ or ボード用コンストラクタ
const title1 = document.getElementById("title1");
const title2 = document.getElementById("title2");
const group1 = document.querySelector(".group1");
const group2 = document.querySelector(".group2");
var images = document.querySelectorAll("img");
const materialTitleNoramlImages = document.querySelectorAll(".normal_Price");
const materialTitleHalfImages = document.querySelectorAll(".half_Price");
const materialTitleFreeImages = document.querySelectorAll(".free_Price");
const onlyNameMaterial = document.querySelectorAll(".onlyNameMaterial");
const included2Image = document.getElementById("image2_1");

window.selectedTab = 'deco';

// 選択状況おしらせ表示
// うちわorボード
const selected_1_SizeSpecify = document.getElementById("selected_1_SizeSpecify");


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
  ['image6_i', 1500],
  ['image6_j', 1980],
  ['image6_k', 1980],
  ['image6_l', 2100],
]);

const map_priceObject5_half = new Map([
  ['image6_a_half', 390],
  ['image6_b_half', 290],
  ['image6_c_half', 150],
  ['image6_d_half', 340],
  ['image6_e_half', 750],
  ['image6_f_half', 600],
  ['image6_g_half', 600],
  ['image6_h_half', 600],
  ['image6_i_half', 750],
  ['image6_j_half', 980],
  ['image6_k_half', 980],
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
  ['select6_palette6_13', ''],
  ['select6_palette6_14', ''],
  ['select6_palette6_15', ''],
  ['select6_palette6_16', ''],
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

const map_dividedParts = new Map([
  ['select5_decoParts2-5-1', ['2-5-1-左.png', '2-5-1-右.png']],
  ['select5_decoParts2-5-2', ['2-5-2-左.png', '2-5-2-右.png']],
  ['select5_decoParts2-5-3', ['2-5-3-左.png', '2-5-3-右.png']],
  ['select5_decoParts2-5-4', ['2-5-4-左.png', '2-5-4-右.png']],
  ['select5_decoParts2-5-5', ['2-5-5-左.png', '2-5-5-右.png']],
  ['select5_decoParts2-6-1', ['2-6-1-左.png', '2-6-1-右.png']],
  ['select5_decoParts2-6-2', ['2-6-2-左.png', '2-6-2-右.png']],
  ['select5_decoParts2-6-3', ['2-6-3-左.png', '2-6-3-右.png']],
  ['select5_decoParts2-6-4', ['2-6-4-左.png', '2-6-4-右.png']],
  ['select5_decoParts2-6-5', ['2-6-5-左.png', '2-6-5-右.png']],
  ['select5_decoParts2-6-6', ['2-6-6-左.png', '2-6-6-右.png']],
  ['select5_decoParts2-6-7', ['2-6-7-左.png', '2-6-7-右.png']],
  ['select5_decoParts2-6-8', ['2-6-8-左.png', '2-6-8-右.png']],
  ['select5_decoParts2-6-9', ['2-6-9-左.png', '2-6-9-右.png']],
  ['select5_decoParts2-6-10', ['2-6-10-左.png', '2-6-10-右.png']],
  ['select5_decoParts2-7-1', ['2-7-1-角.png', '2-5-1-左.png', '2-5-1-右.png']],
  ['select5_decoParts2-7-2', ['2-7-2-角左.png', '2-7-2-角右.png', '2-5-2-左.png', '2-5-2-右.png', '2-7-2-尻尾右.png']],
  ['select5_decoParts2-7-3', ['2-7-3-角左.png', '2-7-3-角右.png', '2-5-3-左.png', '2-5-3-右.png', '2-7-3-尻尾右.png']],
  ['select5_decoParts2-7-4', ['2-5-4-左.png', '2-5-4-右.png', '2-7-4-尻尾右.png']],
  ['select5_decoParts2-7-5', ['2-5-5-左.png', '2-5-5-右.png', '2-7-5-尻尾右.png']],
  ['select5_decoParts2-8-1', ['2-6-1-左.png', '2-6-1-右.png', '2-8-1-3尻尾左右.png']],
  ['select5_decoParts2-8-2', ['2-6-2-左.png', '2-6-2-右.png', '2-8-1-3尻尾左右.png']],
  ['select5_decoParts2-8-3', ['2-6-3-左.png', '2-6-3-右.png', '2-8-1-3尻尾左右.png']],
  ['select5_decoParts2-8-4', ['2-6-4-左.png', '2-6-4-右.png', '2-8-4-尻尾右.png']],
  ['select5_decoParts2-8-5', ['2-6-5-左.png', '2-6-5-右.png', '2-8-5-尻尾右.png']],
  ['select5_decoParts2-8-6', ['2-6-6-左.png', '2-6-6-右.png', '2-8-6-尻尾右.png']],
  ['select5_decoParts2-8-7', ['2-6-7-左.png', '2-6-7-右.png', '2-8-7-尻尾右.png']],
  ['select5_decoParts2-8-8', ['2-6-8-左.png', '2-6-8-右.png', '2-8-8-10尻尾左右.png']],
  ['select5_decoParts2-8-9', ['2-6-9-左.png', '2-6-9-右.png', '2-8-8-10尻尾左右.png']],
  ['select5_decoParts2-8-10', ['2-6-10-左.png', '2-6-10-右.png', '2-8-8-10尻尾左右.png']],
]);

const map_frameDesignedAnimalsName = new Map([
  ['usagi', 'うさぎ'],
  ['neko', 'ねこ'],
  ['inu', 'いぬ'],
  ['kuma', 'くま'],
]);

const map_frameDesignedAnimalsPrice = new Map([
  ['usagi', '2600'],
  ['neko', '2400'],
  ['inu', '2100'],
  ['kuma', '1800'],
]);

const map_reinforcementNameObject = new Map([
  ['image7_1_1', '厚紙補強'],
  ['image7_1_2', 'PP板補強'],
  ['image7_1_3', 'オリジナル補強板'],
]);

const map_reinforcementPriceObject = new Map([
  ['image7_1_1', 490],
  ['image7_1_2', 610],
  ['image7_1_3', 720],
]);

const map_backReinforcementNameObject = new Map([
  ['image7_2_1', 'パネル裏面ゴム付き'],
  ['image7_2_2', 'パネル裏面ピン付き'],
]);

const map_backReinforcementPriceObject = new Map([
  ['image7_2_1', 120],
  ['image7_2_2', 210],
]);

const map_deliveryNameObject = new Map([
  ['image8_1_1', '即日-24時間以内'],
  ['image8_1_2', '48時間以内'],
  ['image8_1_3', '3-5日以内'],
  ['image8_1_4', '1週間以内'],
  ['image8_1_5', '2週間以内'],
]);

const map_deliveryPriceObject = new Map([
  ['image8_1_1', 2500],
  ['image8_1_2', 2100],
  ['image8_1_3', 1800],
  ['image8_1_4', 1500],
  ['image8_1_5', 1200],
]);

const map_expressDeliveryNameObject = new Map([
  ['image8_2_1', '速達郵便'],
  ['image8_2_2', '速達郵便'],
  ['image8_2_3', '速達郵便'],
]);

const map_expressDeliveryPriceObject = new Map([
  ['image8_2_1', 720],
  ['image8_2_2', 1200],
  ['image8_2_3', 1500],
]);

const map_saftyDeliveryPriceObject = new Map([
  ['image8_5_1', 1800],
  ['image8_5_2', 2400],
  ['image8_5_3', 3900],
]);

// 文字タイプクラスリスト
const list_charaTypeClassObject = ['image3_1', 'image3_2', 'image3_3', 'image3_4', 'image3_5', 'image3_6', 'image3_7', 'image3_8', 'image3_9', 'image3_10'];
// 素材クラスリスト
const list_materialClassObject = ['image6_a', 'image6_b', 'image6_c', 'image6_d', 'image6_e', 'image6_f', 'image6_g', 'image6_h', 'image6_i', 'image6_j', 'image6_k', 'image6_l'];

// デフォルトパレット画像
const default_palette_mozi_src = "/static/images/fullorder/order_buttons/colors/文字.png";
const default_palette_frame1_src = "/static/images/fullorder/order_buttons/colors/縁1.png";
const default_palette_frame2_src = "/static/images/fullorder/order_buttons/colors/縁2.png";
const default_palette_outframe_src = "/static/images/fullorder/order_buttons/colors/外縁.png";

// うちわ or ボード用　input要素
const inputBoardSizeTATE = document.getElementById("board_size_TATE");
const inputBoardSizeYOKO = document.getElementById("board_size_YOKO");
const calcSizePriceText = document.getElementById("calcSizePriceText");

const map_calcSize = new Map([
  [42, 2100],
  [36, 1800],
  [30, 1500],
  [25, 990],
  [20, 890],
  [10, 720],
]);
// const inputBoardSizeTATE = document.createElement('input');
// inputBoardSizeTATE.type = 'text';
// inputBoardSizeTATE.placeholder = "(例) 縦 〇cm、横 〇cm など  ";
// inputBoardSizeTATE.style.width = '500px';
// inputBoardSizeTATE.setAttribute('id', 'cartItem1ExtInput');

// カート機能用コンストラクタ
const cartItem1 = document.getElementById("cart_item1");
const cartItem2 = document.getElementById("cart_item2");
const cartItem3 = document.getElementById("cart_item3");
const cartItem4 = document.getElementById("cart_item4");
const cartItemChara = document.getElementById("cart_itemChara");
const cartItem6_1 = document.getElementById("cart_item6-1");
const cartItem6_2 = document.getElementById("cart_item6-2");
const cartItem6_3 = document.getElementById("cart_item6-3");
const cartItem6_4 = document.getElementById("cart_item6-4");
const cartItem7_1 = document.getElementById("cart_item7-1");
const cartItem7_2 = document.getElementById("cart_item7-2");
const cartItem8_1 = document.getElementById("cart_item8-1");
const cartItem8_2 = document.getElementById("cart_item8-2");
const cartItem8_3 = document.getElementById("cart_item8-3");
const cartItem8_4 = document.getElementById("cart_item8-4");
const cartItem8_5 = document.getElementById("cart_item8-5");

const cartItem6_1multiple = document.getElementById("cart_item6-1_multiple");
const cartItem7_1multiple = document.getElementById("cart_item7-1_multiple");
const cartItem1Name = document.getElementById("cart_item1_name");
const cartItem2Name = document.getElementById("cart_item2_name");
const cartItem3Name = document.getElementById("cart_item3_name");
const cartItem4Name = document.getElementById("cart_item4_name");
const cartItemCharaName = document.getElementById("cart_itemChara_name");
const cartInputPartsName = document.getElementById("cart_item5-2_inputUserParts");
const cartInputPartsSetName = document.getElementById("cart_item5-2_inputUserPartsSet");
const cartItem5_4Name = document.getElementById("cart_item5-4_name");
const cartItem6_1Name = document.getElementById("cart_item6-1_name");
const cartItem6_2Name = document.getElementById("cart_item6-2_name");
const cartItem6_3Name = document.getElementById("cart_item6-3_name");
const cartItem6_4Name = document.getElementById("cart_item6-4_name");
const cartItem7_1Name = document.getElementById("cart_item7-1_name");
const cartItem7_2Name = document.getElementById("cart_item7-2_name");
const cartItem8_1Name = document.getElementById("cart_item8-1_name");
const cartItem8_2Name = document.getElementById("cart_item8-2_name");
const cartItem8_3Name = document.getElementById("cart_item8-3_name");
const cartItem8_4Name = document.getElementById("cart_item8-4_name");
const cartItem8_5Name = document.getElementById("cart_item8-5_name");

const cartItem1Price = document.getElementById("cart_item1_price");
const cartItem2Price = document.getElementById("cart_item2_price");
const cartItem3Price = document.getElementById("cart_item3_price");
const cartItem4Price = document.getElementById("cart_item4_price");
const cartItemCharaPrice = document.getElementById("cart_itemChara_price");
const cartInputPartsSetPrice = document.getElementById("cart_item5-2_inputUserPartsSet_price");
const cartItem5_4Price = document.getElementById("cart_item5-4_price");
const cartItem6_1Price = document.getElementById("cart_item6-1_price");
const cartItem6_2Price = document.getElementById("cart_item6-2_price");
const cartItem6_3Price = document.getElementById("cart_item6-3_price");
const cartItem6_4Price = document.getElementById("cart_item6-4_price");
const cartItem7_1Price = document.getElementById("cart_item7-1_price");
const cartItem7_2Price = document.getElementById("cart_item7-2_price");
const cartItem8_1Price = document.getElementById("cart_item8-1_price");
const cartItem8_2Price = document.getElementById("cart_item8-2_price");
const cartItem8_3Price = document.getElementById("cart_item8-3_price");
const cartItem8_4Price = document.getElementById("cart_item8-4_price");
const cartItem8_5Price = document.getElementById("cart_item8-5_price");

// image1_8選んだ時の入力フォーム(image1_8はサイズ指定)
const cartItem1ExtText = document.getElementById("cart_item1_extText");

// 指定フォントの入力
const inputFontElement = document.getElementById("input_font");
const inputSmallCharaFontElement = document.getElementById("input_SmallChara_font");
const cartItem4ExtText = document.getElementById("cart_item4_extText");
const cartItem4SmallFontText = document.getElementById("cart_item4_smallFontText");

//装飾
const inputPartsName = document.getElementById("partsNameInput");
const inputSetPartsName = document.getElementById("partsSetNameInput");
const inputSetPartsExtText = document.getElementById("partsSetExtTextInput");
const cartInputPartsSetExtText = document.getElementById("cart_item5-2_inputUserPartsSet_extText");

// howManySelect要素を取得
var howManySelectElement = document.querySelector('select[name="howManySelect"]');
var is_UchiwaGrayed = true;
var is_BoardGrayed = true;
var is_half = false;

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
const modalPalette = document.getElementById('easyModal');
const modalDetailKomozi = document.getElementById('easyModalofKomoziDetail');
const modalDetailDakuten = document.getElementById('easyModalofDakutenParts');
const modalOrderConfirm = document.getElementById('easyModalofOrderConfirm');
const buttonClose = document.getElementsByClassName('modalClose')[0];
const buttonCloseDetailKomozi = document.getElementsByClassName('modalClose')[1];
const buttonCloseDetailDakutenParts = document.getElementsByClassName('modalClose')[2];
const buttonCloseOrderConfirm = document.getElementsByClassName('modalClose')[3];
const buttonInsertColorsIntoCart = document.getElementById('btnInsertColorsIntoCart');
// const buttonOpenColorRanking = document.getElementById('openColorRanking');
const colorRanking = document.getElementById('colorRanking');
const colorRank1 = document.getElementById('ranking6-1');
const colorRank2 = document.getElementById('ranking6-2');
const colorRank3 = document.getElementById('ranking6-3');


var currentPartsSetLength = 0;

const cancelInputParts = document.getElementById('cancelInputParts');
const decoPreview = document.getElementById("decoPreview");
const fullorder1stStepContainer = document.getElementById("1st-container");
const fullorder2ndStepContainer = document.getElementById("2nd-container");
const fullorder3rdStepContainer = document.getElementById("3rd-container");
const fullorder4thStepContainer = document.getElementById("4th-container");
const nextStepTo2ndButton = document.getElementById("nextStepTo2ndButton");
const nextStepTo3rdButton = document.getElementById("nextStepTo3rdButton");
const nextStepTo4thButton = document.getElementById("nextStepTo4thButton");
const backStepTo1stButton = document.getElementById("backStepTo1stButton");
const backStepTo2ndButton = document.getElementById("backStepTo2ndButton");
const backStepTo3rdButton = document.getElementById("backStepTo3rdButton");

const decoCustomBtns1 = document.getElementById("decoCustomBtns1");
const decoCustomBtns2 = document.getElementById("decoCustomBtns2");
const applyMaterialToPartsContainer = document.getElementById("applyMaterialToParts-Container");
const applyMaterialToParts = document.getElementById("applyMaterialToParts");
const map_PartsMaterial = new Map([]);

var wmouse;
// イメージオブジェクトを作成
wmouse = new Image();

let map_insertCart;
var cartForColors;
var cartForColors_name;
var cartForColors_price;
var cartForColors_multiple;

var controll_step = '1st';
const sleep = ms => new Promise(res => setTimeout(res, ms));

// うちわ or ボード
async function handleImageSelection1(image) {
  const isAlreadySelected = image.classList.contains("selected_1");

  if (isAlreadySelected) {
    // クリックした画像がすでに選択されている場合
    image.classList.remove("selected_1");
    image.style.border = "";

    resetHiddenCart(cartItem1, cartItem1Name, cartItem1Price);

    if (window.getComputedStyle(notesText).display === "block") {
      cartItem1ExtText.textContent = "";
      inputBoardSizeTATE.value = "";
      inputBoardSizeYOKO.value = "";
      calcSizePriceText.textContent = "720";
      cartItem1ExtText.textContent = "";
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

    // 速達
    document.getElementById('image8_2_1').classList.add("hidden");
    document.getElementById('image8_2_2').classList.add("hidden");
    document.getElementById('image8_2_3').classList.add("hidden");
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

    deleteAllColorItems();
    resetAllImages();
    resetAllCartItem();

    image.classList.add("selected_1");
    image.style.border = "2px solid #72F0EC";

    if (image.id == 'image1_1' || image.id == 'image1_3') {
      document.getElementById('image8_2_1').classList.remove("hidden");
      document.getElementById('image8_2_2').classList.add("hidden");
      document.getElementById('image8_2_3').classList.add("hidden");
    } else if (image.id == 'image1_7') {
      document.getElementById('image8_2_1').classList.add("hidden");
      document.getElementById('image8_2_2').classList.add("hidden");
      document.getElementById('image8_2_3').classList.remove("hidden");
    } else if (image.id == 'image1_8') {
      document.getElementById('image8_2_1').classList.add("hidden");
      document.getElementById('image8_2_2').classList.add("hidden");
      document.getElementById('image8_2_3').classList.add("hidden");
    } else {
      document.getElementById('image8_2_1').classList.add("hidden");
      document.getElementById('image8_2_2').classList.remove("hidden");
      document.getElementById('image8_2_3').classList.add("hidden");
    }

    if (image.id == 'image1_1' || image.id == 'image1_3' || image.id == 'image1_4' || image.id == 'image1_5') {
      document.getElementById('image8_5_1').classList.remove("hidden");
      document.getElementById('image8_5_2').classList.add("hidden");
      document.getElementById('image8_5_3').classList.add("hidden");
    } else if (image.id == 'image1_2' || image.id == 'image1_6') {
      document.getElementById('image8_5_1').classList.add("hidden");
      document.getElementById('image8_5_2').classList.remove("hidden");
      document.getElementById('image8_5_3').classList.add("hidden");
    } else {
      document.getElementById('image8_5_1').classList.add("hidden");
      document.getElementById('image8_5_2').classList.add("hidden");
      document.getElementById('image8_5_3').classList.remove("hidden");
    }

    for (const [key, value] of map_priceObject1) {
      if (key === image.id) {
        is_half = false;
        showAllOptions();

        cartItem1Price.textContent = value;
        cartItem1Name.textContent = map_productNameObject.get(image.id);

        if (key === 'image1_8') {
          notesText.style.display = "block";
          // selected_1_SizeSpecify.appendChild(inputBoardSizeTATE);
        } else if (key === 'image1_1') {
          is_half = true;
          removeElemFromDiv('cartImage1', 'cart_item1');
          addImageToCart('cart_item1', 'cartImage1', "cart-image1", image, startPosition, animationDuration);
          await sleep(1000);
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
              otherImage.style.border = "2px solid #72F0EC";
            } else if (otherImage.classList.contains("autoincluded3")) {
              otherImage.classList.remove("grayed-out");
            }
          });

          removeElemFromDiv('cartImage2', 'cart_item2');
          addImageToCart('cart_item2', 'cartImage2', "cart-image2", included2Image, startPosition, animationDuration);
          cartItem2Price.textContent = map_priceObject2.get('image2_1');
          cartItem2Name.textContent = map_sizeObject.get('image2_1');

          resetHiddenCart(cartItem3, cartItem3Name, cartItem3Price);

          cartItem1ExtText.textContent = "";
          inputBoardSizeTATE.value = "";
          inputBoardSizeYOKO.value = "";
          calcSizePriceText.textContent = "720";
          notesText.style.display = "none";
        } else {
          if (key === 'image1_3') {
            is_half = true;
          }
          removeElemFromDiv('cartImage1', 'cart_item1');
          addImageToCart('cart_item1', 'cartImage1', "cart-image1", image, startPosition, animationDuration);
          cartItem1ExtText.textContent = "";
          inputBoardSizeTATE.value = "";
          inputBoardSizeYOKO.value = "";
          calcSizePriceText.textContent = "720";
          // removeElemFromDiv("cartItem1ExtInput", "selected_1_SizeSpecify");
          notesText.style.display = "none";
          UchiwaOrBoardGrayedOut();
        }

        updateMaterialImage();
        break;
      }
    }
  }
}

function updateMaterialImage() {
  if (is_half) {
    materialTitleNoramlImages.forEach(function (titleImage) {
      titleImage.classList.add("hidden");
    });
    materialTitleHalfImages.forEach(function (titleImage) {
      titleImage.classList.remove("hidden");
    });
    document.getElementById("l_material").classList.add("hidden");
  } else {
    materialTitleNoramlImages.forEach(function (titleImage) {
      titleImage.classList.remove("hidden");
    });
    materialTitleHalfImages.forEach(function (titleImage) {
      titleImage.classList.add("hidden");
    });
    document.getElementById("l_material").classList.remove("hidden");
  }

  if (!is_name) {
    materialTitleNoramlImages.forEach(function (titleImage) {
      titleImage.classList.add("hidden");
    });
    materialTitleHalfImages.forEach(function (titleImage) {
      titleImage.classList.add("hidden");
    });
    materialTitleFreeImages.forEach(function (titleImage) {
      titleImage.classList.remove("hidden");
    });
    document.getElementById("l_material").classList.add("hidden");
  } else {
    materialTitleFreeImages.forEach(function (titleImage) {
      titleImage.classList.add("hidden");
    });
    document.getElementById("l_material").classList.remove("hidden");
  }

}

function calcSizePrice() {
  tate = inputBoardSizeTATE.value;
  yoko = inputBoardSizeYOKO.value;
  if (isNumeric(tate) && isNumeric(yoko)) {
    if (tate != '' && yoko != '') {
      document.getElementById("warning_SizeSpecify").textContent = "";
      tateFloat = parseFloat(tate);
      yokoFloat = parseFloat(yoko);
      if (3 <= tateFloat && tateFloat <= 30) {
        if (yokoFloat < 3) {
          document.getElementById("warning_SizeSpecify").textContent = "【警告】横幅3cmより小さくはできません";
        } else if (3 <= yokoFloat && yokoFloat <= 10) {
          calcSizePriceText.textContent = '720';
          document.getElementById('image8_2_1').classList.remove("hidden");
          document.getElementById('image8_2_2').classList.add("hidden");
          document.getElementById('image8_2_3').classList.add("hidden");
        } else if (10 < yokoFloat && yokoFloat <= 20) {
          calcSizePriceText.textContent = '890';
          document.getElementById('image8_2_1').classList.remove("hidden");
          document.getElementById('image8_2_2').classList.add("hidden");
          document.getElementById('image8_2_3').classList.add("hidden");
        } else if (20 < yokoFloat && yokoFloat <= 25) {
          calcSizePriceText.textContent = '990';
          document.getElementById('image8_2_1').classList.remove("hidden");
          document.getElementById('image8_2_2').classList.add("hidden");
          document.getElementById('image8_2_3').classList.add("hidden");
        } else if (25 < yokoFloat && yokoFloat <= 30) {
          calcSizePriceText.textContent = '1500';
          document.getElementById('image8_2_1').classList.add("hidden");
          document.getElementById('image8_2_2').classList.remove("hidden");
          document.getElementById('image8_2_3').classList.add("hidden");
        } else if (30 < yokoFloat && yokoFloat <= 36) {
          calcSizePriceText.textContent = '1800';
          document.getElementById('image8_2_1').classList.add("hidden");
          document.getElementById('image8_2_2').classList.remove("hidden");
          document.getElementById('image8_2_3').classList.add("hidden");
        } else if (36 < yokoFloat && yokoFloat <= 42) {
          calcSizePriceText.textContent = '2100';
          document.getElementById('image8_2_1').classList.add("hidden");
          document.getElementById('image8_2_2').classList.add("hidden");
          document.getElementById('image8_2_3').classList.remove("hidden");
        } else if (42 < yokoFloat && yokoFloat <= 120) {
          var bool_SizeCalc = true;
          var temp_yoko = yokoFloat - 42;

          var priceSum = 2100;
          // console.log("42以上:" + temp_yoko);
          while (bool_SizeCalc) {
            var foundKey = false;
            var beforeKey = 42;
            var beforeValue = 2100;
            for (const [key, value] of map_calcSize) {
              if (temp_yoko - key >= 0) {
                temp_yoko = temp_yoko - beforeKey;
                priceSum += beforeValue;
                foundKey = true;
                // console.log("現在のサイズ:" + temp_yoko);
                // console.log("足す金額:" + beforeValue);
                // console.log("現在の金額:" + priceSum);
              } else {
                beforeKey = key;
                beforeValue = value;
              }
            }
            if (foundKey) {
              bool_SizeCalc = true;
            } else {
              priceSum += 720;
              bool_SizeCalc = false;
            }

            if (temp_yoko <= 0) {
              bool_SizeCalc = false;
            }
          }
          calcSizePriceText.textContent = priceSum.toString();
          document.getElementById('image8_2_1').classList.add("hidden");
          document.getElementById('image8_2_2').classList.add("hidden");
          document.getElementById('image8_2_3').classList.remove("hidden");
        } else {
          document.getElementById("warning_SizeSpecify").textContent = "【警告】横幅は120cm以下で入力してください";
          document.getElementById('image8_2_1').classList.add("hidden");
          document.getElementById('image8_2_2').classList.add("hidden");
          document.getElementById('image8_2_3').classList.add("hidden");
        }

        var imageCart = new Image();

        // URLを指定する
        var imageUrl = "/static/images/fullorder/order_buttons/main/サイズ指定.png";
        imageCart.src = imageUrl;

        removeElemFromDiv('cartImage1', 'cart_item1');
        addImageToCart('cart_item1', 'cartImage1', "cart-image1", imageCart, startPosition, animationDuration);
        cartItem1Price.textContent = calcSizePriceText.textContent;
        cartItem1ExtText.textContent = "縦(" + tate + "cm) × 横(" + yoko + "cm)";

      } else {
        if (tateFloat < 3) {
          document.getElementById("warning_SizeSpecify").textContent = "【警告】縦幅3cmより小さくはできません";
        } else {
          document.getElementById("warning_SizeSpecify").textContent = "【警告】縦幅は30cm以下で入力してください";
        }
      }


    } else {
      document.getElementById("warning_SizeSpecify").textContent = "【警告】サイズを入力してください";
    }
    // console.log(yokoFloat);
  } else {
    document.getElementById("warning_SizeSpecify").textContent = "【警告】数字以外の文字が含まれています";
  }

}

function isNumeric(input) {
  return !isNaN(input);
}
//　文字サイズ
function handleImageSelection2(image) {
  if (image.classList.contains("selected_2")) { // クリックした画像がすでに選択されている場合
    // 選択状態を解除し、ボーダーも除去
    image.classList.remove("selected_2");
    image.style.border = "";

    // カートからアイテム除去、内部価格情報も初期化
    // removeElemFromDiv('cartImage2', 'cart_item2');
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
      image.style.border = "2px solid #72F0EC";
      for (const [key, value] of map_priceObject2) {
        if (key === image.id) {
          // カートに追加
          // cartItem1.textContent = map_productNameObject.get(image.id);
          removeElemFromDiv('cartImage2', 'cart_item2');
          addImageToCart('cart_item2', 'cartImage2', "cart-image2", image, startPosition, animationDuration);
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
    removeElemFromDiv('cartImage3', 'cart_item3');
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
      image.style.border = "2px solid #72F0EC";


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


      removeElemFromDiv('cartImage3', 'cart_item3');
      addImageToCart('cart_item3', 'cartImage3', "cart-image3", typeNameImage, startPosition, animationDuration);
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
  cartItemCharaName.textContent = "";
  cartItemCharaPrice.textContent = "";
  adjustTextSize();
}

//　フォント
function handleImageSelection4(image) {
  if (image.classList.contains("selected_4")) { // クリックした画像がすでに選択されている場合
    // 選択状態を解除し、ボーダーも除去
    image.classList.remove("selected_4");
    image.style.border = "";
    // カートからアイテム除去、内部価格情報も初期化
    removeElemFromDiv('cartImage4', 'cart_item4');
    resetHiddenCart(cartItem4, cartItem4Name, cartItem4Price);
  } else {  // クリックした画像が未選択状態の場合

    images.forEach(function (otherImage) {
      if (otherImage.classList.contains("select4")) {
        otherImage.classList.remove("selected_4");
        otherImage.style.border = "";
      }
    });
    image.classList.add("selected_4");
    image.style.border = "2px solid #72F0EC";

    removeElemFromDiv('cartImage4', 'cart_item4');
    addImageToCart('cart_item4', 'cartImage4', "cart-image4", image, startPosition, animationDuration);
    // フォントに金額つけるならここに追記
    cartItem4Name.textContent = map_fontNameObject.get(image.id);

    // フォントの金額初期化、指定フォントのインプットフォーム初期化
    cartItem4Price.textContent = "";
    cartItem4ExtText.textContent = "";
    inputFontElement.value = "";
  }
}

function scrollToDiv(elementId) {
  const targetElement = document.getElementById(elementId);
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth' });
  }
}

function isDivEmpty(elementId) {
  const divElement = document.getElementById(elementId);
  if (divElement && divElement.innerHTML.trim() === '') {
    return true; // div要素が空の場合
  } else {
    return false; // div要素が空でない場合
  }
}

function nextStepTo2nd(event) {
  event.preventDefault();
  var scrollDiv = 'fullorderTop';
  isNextPage = true;

  if (isDivEmpty('cart_item3')) {
    scrollDiv = 'step3';
    document.getElementById('step3Warning').classList.remove("hidden");
    isNextPage = false;
  } else {
    document.getElementById('step3Warning').classList.add("hidden");
  }

  if (isDivEmpty('cart_item2')) {
    scrollDiv = 'step2';
    document.getElementById('step2Warning').classList.remove("hidden");
    isNextPage = false;
  } else {
    document.getElementById('step2Warning').classList.add("hidden");
  }

  if (isDivEmpty('cart_item1')) {
    scrollDiv = 'step1';
    document.getElementById('step1Warning').classList.remove("hidden");
    isNextPage = false;
  } else {
    document.getElementById('step1Warning').classList.add("hidden");
  }

  if (isNextPage) {
    fullorder2ndStepContainer.classList.remove("hidden");
    fullorder2ndStepContainer.classList.add("flexColumnFlexStart");
    fullorder1stStepContainer.classList.add("hidden");
    fullorder1stStepContainer.classList.remove("flexColumnFlexStart");

    nextStepTo2ndButton.classList.add("hidden");
    backStepTo1stButton.classList.remove("hidden");

    scrollDiv = 'fullorderTop';
    controll_step = '2nd';

  }
  scrollToDiv(scrollDiv);
}

function nextStepTo3rd(event) {
  event.preventDefault();
  var scrollDiv = 'fullorderTop';
  isNextPage = true;

  if (window.user_decoListOnlyOne.length < currentPartsSetLength) {
    scrollDiv = 'step5_Parts';
    document.getElementById('step5_PartsWarning').classList.remove("hidden");
    isNextPage = false;
  } else {
    document.getElementById('step5_PartsWarning').classList.add("hidden");
  }
  if (document.getElementById('dakutenSelectionMenu')) {
    if (document.getElementById('dakutenSelectionMenu').value == '') {
      scrollDiv = 'step5';
      document.getElementById('step5Warning').classList.remove("hidden");
      isNextPage = false;
    } else {
      if (isNextPage) {
        document.getElementById('step5Warning').classList.add("hidden");
      }
    }
  } else {
    ;
  }

  if (document.getElementById('maruKatanukiSelectionMenu')) {
    if (document.getElementById('maruKatanukiSelectionMenu').value == '') {
      scrollDiv = 'step5';
      document.getElementById('step5Warning').classList.remove("hidden");
      isNextPage = false;
    } else {
      if (isNextPage) {
        document.getElementById('step5Warning').classList.add("hidden");
      }
    }
  } else {
    ;
  }

  if (partsKatanukiDecoDiv.classList.contains('hidden')) {
    ;
  } else {
    if (input_partsKatanuki.value == '') {
      scrollDiv = 'step5';
      document.getElementById('step5Warning').classList.remove("hidden");
      isNextPage = false;
    } else {
      if (isNextPage) {
        document.getElementById('step5Warning').classList.add("hidden");
      }
    }
  }

  if (charaKatanukiDecoDiv.classList.contains('hidden')) {
    ;
  } else {
    if (input_charaKatanuki.value == '') {
      scrollDiv = 'step5';
      document.getElementById('step5Warning').classList.remove("hidden");
      isNextPage = false;
    } else {
      if (isNextPage) {
        document.getElementById('step5Warning').classList.add("hidden");
      }
    }
  }

  if (isDivEmpty('cart_item4')) {
    scrollDiv = 'step4';
    document.getElementById('step4Warning').classList.remove("hidden");
    isNextPage = false;
  } else {
    document.getElementById('step4Warning').classList.add("hidden");
  }

  if (viewExampleName1.textContent == '') {
    scrollDiv = 'stepChara';
    document.getElementById('stepCharaWarning').classList.remove("hidden");
    isNextPage = false;
  } else {
    document.getElementById('stepCharaWarning').classList.add("hidden");
  }

  images.forEach(function (otherImage) {
    if (otherImage.classList.contains("select5_decoParts")) {
      otherImage.classList.remove("selected_5_decoParts");
      otherImage.style.border = "";
    }
  });

  if (isNextPage) {
    fullorder3rdStepContainer.classList.remove("hidden");
    fullorder3rdStepContainer.classList.add("flexColumnFlexStart");
    fullorder2ndStepContainer.classList.add("hidden");
    fullorder2ndStepContainer.classList.remove("flexColumnFlexStart");

    nextStepTo3rdButton.classList.add("hidden");
    backStepTo2ndButton.classList.remove("hidden");

    decoCustomBtns1.classList.remove("flexRowSpaceEvenly");
    decoCustomBtns1.classList.add("hidden");
    decoCustomBtns2.classList.remove("flexRowSpaceEvenly");
    decoCustomBtns2.classList.add("hidden");
    applyMaterialToPartsContainer.classList.remove("hidden");
    applyMaterialToPartsContainer.classList.add("flexRowSpaceEvenly");

    images = document.querySelectorAll("img");

    images.forEach(function (image) {
      image.addEventListener("click", function () {
        if (image.classList.contains("decoSelectImage")) {
          handleImageSelectionDecoImage(image);
        } else {
          ;
        }
      });

    });

    scrollDiv = 'fullorderTop';
    controll_step = '3rd';

  }

  wmouse.src = "";

  scrollToDiv(scrollDiv);
}

function nextStepTo4th(event) {
  event.preventDefault();

  var scrollDiv = 'fullorderTop';
  isNextPage = true;

  if (document.getElementById('cart_item6-1').querySelector('img')) {
    document.getElementById('step6WarningName').classList.add("hidden");
  } else {
    console.log("名前の色を選択してません");
    document.getElementById('step6WarningName').classList.remove("hidden");
    isNextPage = false;
  }

  if (labelNickname.style.display == 'none') {
    ;
  } else {
    if (document.getElementById('cart_item6-2').querySelector('img')) {
      document.getElementById('step6WarningNickname').classList.add("hidden");
    } else {
      console.log("名称の色を選択してません");
      document.getElementById('step6WarningNickname').classList.remove("hidden");
      isNextPage = false;
    }
  }

  if (labelNametitle.style.display == 'none') {
    ;
  } else {
    if (document.getElementById('cart_item6-3').querySelector('img')) {
      document.getElementById('step6WarningNametitle').classList.add("hidden");
    } else {
      console.log("敬称の色を選択してません");
      document.getElementById('step6WarningNametitle').classList.remove("hidden");
      isNextPage = false;
    }
  }

  if (labelCatchphrase.style.display == 'none') {
    ;
  } else {
    if (document.getElementById('cart_item6-4').querySelector('img')) {
      document.getElementById('step6WarningCatchphrase').classList.add("hidden");
    } else {
      console.log("キャッチフレーズの色を選択してません");
      document.getElementById('step6WarningCatchphrase').classList.remove("hidden");
      isNextPage = false;
    }
  }

  console.log(window.user_decoALLList.length);
  console.log(map_PartsMaterial.size);

  if (window.user_decoALLList.length == map_PartsMaterial.size) {
    document.getElementById('step6WarningPartsMaterial').classList.add("hidden");
  } else {
    document.getElementById('step6WarningPartsMaterial').classList.remove("hidden");
    isNextPage = false;
  }

  //images = document.querySelectorAll("img");
  if (isNextPage) {
    fullorder4thStepContainer.classList.remove("hidden");
    fullorder4thStepContainer.classList.add("flexColumnFlexStart");
    fullorder3rdStepContainer.classList.add("hidden");
    fullorder3rdStepContainer.classList.remove("flexColumnFlexStart");

    nextStepTo4thButton.classList.add("hidden");
    backStepTo3rdButton.classList.remove("hidden");

    scrollDiv = 'fullorderTop';
    controll_step = '4th';
  }

  scrollToDiv(scrollDiv);

}

function backStepTo1st(event) {
  event.preventDefault();

  fullorder2ndStepContainer.classList.add("hidden");
  fullorder2ndStepContainer.classList.remove("flexColumnFlexStart");
  fullorder1stStepContainer.classList.remove("hidden");
  fullorder1stStepContainer.classList.add("flexColumnFlexStart");

  nextStepTo2ndButton.classList.remove("hidden");
  backStepTo1stButton.classList.add("hidden");
  controll_step = '1st';
}

function backStepTo2nd(event) {
  event.preventDefault();

  fullorder3rdStepContainer.classList.add("hidden");
  fullorder3rdStepContainer.classList.remove("flexColumnFlexStart");
  fullorder2ndStepContainer.classList.remove("hidden");
  fullorder2ndStepContainer.classList.add("flexColumnFlexStart");

  nextStepTo3rdButton.classList.remove("hidden");
  backStepTo2ndButton.classList.add("hidden");

  images.forEach(function (otherImage) {
    if (otherImage.classList.contains("select5_decoParts")) {
      otherImage.classList.remove("selected_5_decoParts");
      otherImage.style.border = "";
    }
  });
  wmouse.src = "";
  decoCustomBtns1.classList.add("flexRowSpaceEvenly");
  decoCustomBtns1.classList.remove("hidden");
  decoCustomBtns2.classList.add("flexRowSpaceEvenly");
  decoCustomBtns2.classList.remove("hidden");
  applyMaterialToPartsContainer.classList.remove("flexRowSpaceEvenly");
  applyMaterialToPartsContainer.classList.add("hidden");

  controll_step = '2nd';
}

function backStepTo3rd(event) {
  event.preventDefault();

  fullorder4thStepContainer.classList.add("hidden");
  fullorder4thStepContainer.classList.remove("flexColumnFlexStart");
  fullorder3rdStepContainer.classList.remove("hidden");
  fullorder3rdStepContainer.classList.add("flexColumnFlexStart");

  nextStepTo4thButton.classList.remove("hidden");
  backStepTo3rdButton.classList.add("hidden");

  controll_step = '3rd';
}

const modalOrderDetails = document.getElementById('modal-order-details');
function orderConfirm(event) {
  event.preventDefault();
  modalOrderDetails.textContent = '';
  modalOrderConfirm.style.display = 'block';

  updateSummaryPrice();
  for (cartlist of list_cartNameAndPrice) {
    newParagraph = document.createElement('p');
    insert_string = '';
    for (cartContent of cartlist) {
      if (insert_string == '') {
        insert_string = document.getElementById(cartContent).textContent;
      } else {
        insert_string = insert_string + ' ' + document.getElementById(cartContent).textContent;
      }
    }
    if (insert_string != '') {
      newParagraph.textContent = insert_string;
      modalOrderDetails.appendChild(newParagraph);
    }
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
    image.style.border = "2px solid white";

  }
}

//　素材
function handleImageSelection6(image) {
  // クリックした画像が未選択状態の場合

  // パレットのImage格納用変数
  selectedPaletteImage = '';
  console.log(window.selectedTab);
  if (window.selectedTab == 'deco') {
    selectedPaletteImage = document.querySelectorAll(".selected_partsMaterial")[0];
    console.log(document.querySelectorAll(".selected_partsMaterial"));
    if (selectedPaletteImage != '') {
      sourcePath = image.src;
      sourceImage = image;
      selectedPaletteImage.src = sourcePath;
      map_PartsMaterial.set(selectedPaletteImage.id, sourceImage);
    }
  } else {
    images.forEach(function (otherImage) { // すべての画像をループ
      if (otherImage.classList.contains("selected_6_palette")) { // 現在選択されているパレットImageを検索
        selectedPaletteImage = otherImage;
      }
    });

    // CHECK 20230802
    sourcePath = image.src;
    if (selectedPaletteImage != '') {

      map_paletteImage.set(selectedPaletteImage.id, image);

      if (selectedPaletteImage.id === 'select6_palette6_2') {
        if (!check_nametitle_frame) {
          map_paletteImage.set('select6_palette6_6', image);
          map_paletteImage.set('select6_palette6_10', image);
        }
        if (!check_catchphrase_frame) {
          map_paletteImage.set('select6_palette6_14', image);
        }
      } else if (selectedPaletteImage.id === 'select6_palette6_3') {
        map_paletteImage.set('select6_palette6_7', image);
        map_paletteImage.set('select6_palette6_11', image);
        map_paletteImage.set('select6_palette6_15', image);
      } else if (selectedPaletteImage.id === 'select6_palette6_4') {
        map_paletteImage.set('select6_palette6_8', image);
        map_paletteImage.set('select6_palette6_12', image);
        map_paletteImage.set('select6_palette6_16', image);
      }

      for (const [key, value] of map_nightSingleImage) {
        if (key === image.id) {
          sourcePath = value;
          break;
        }
      }

      selectedPaletteImage.src = sourcePath;
      if (selectedPaletteImage.id === 'select6_palette6_2') {
        if (!check_nametitle_frame) {
          document.getElementById('select6_palette6_6').src = sourcePath;
          document.getElementById('select6_palette6_10').src = sourcePath;
        }
        if (!check_catchphrase_frame) {
          document.getElementById('select6_palette6_14').src = sourcePath;
        }
      } else if (selectedPaletteImage.id === 'select6_palette6_3') {
        document.getElementById('select6_palette6_7').src = sourcePath;
        document.getElementById('select6_palette6_11').src = sourcePath;
        document.getElementById('select6_palette6_15').src = sourcePath;
      } else if (selectedPaletteImage.id === 'select6_palette6_4') {
        document.getElementById('select6_palette6_8').src = sourcePath;
        document.getElementById('select6_palette6_12').src = sourcePath;
        document.getElementById('select6_palette6_16').src = sourcePath;
      }
    }
  }

}

function handleImageSelection5(image) {
  if (image.classList.contains("selected_5_decoParts")) { // クリックした画像がすでに選択されている場合
    image.classList.remove("selected_5_decoParts");
    image.style.border = "";
    wmouse.src = "";
  } else {  // クリックした画像が未選択状態の場合

    images.forEach(function (otherImage) {
      if (otherImage.classList.contains("selected_5_decoParts")) {
        otherImage.classList.remove("selected_5_decoParts");
        otherImage.style.border = "";
      }
    });
    image.classList.add("selected_5_decoParts");
    image.style.border = "2px solid #72F0EC";

    wmouse.src = image.src;
    wmouse.style.zIndex = '20';

  }
}

function handleImageSelection5OnlyOneSelection(image5) {
  var divElement = document.getElementById('decoPartsOnlyOneSelectionDiv');
  if (image5.classList.contains("selected_5_decoPartsOnlyOneSelection")) { // クリックした画像がすでに選択されている場合
    if (divElement) {
      divElement.remove();
    }
    currentPartsSetLength = 0;
    deleteUserDecoAllImage();
    cancelPartsSet();
  } else {  // クリックした画像が未選択状態の場合
    inputSetPartsName.value = '';
    cartInputPartsSetName.textContent = '';
    cartInputPartsSetPrice.textContent = '';
    cartInputPartsSetExtText.textContent = '';
    inputSetPartsExtText.style.display = 'none';
    removeElemFromDiv('cartImage5-2-9', 'cart_item5-2');

    deleteUserDecoAllImage();
    cancelPartsSet();
    if (divElement) {
      divElement.remove();
    }

    image5.classList.add("selected_5_decoPartsOnlyOneSelection");
    image5.style.border = "2px solid #72F0EC";
    var divParentElem = document.createElement("div");
    divParentElem.id = 'decoPartsOnlyOneSelectionDiv';

    var count = 0;
    for (const [key, value] of map_dividedParts) {
      if (key == image5.id) {
        currentPartsSetLength = value.length;
        for (let str of value) {
          var divImage = createDivRoundImage('/static/images/fullorder/order_buttons/deco/sample/parts_divided/' + str);
          divImage.id = 'select5_decoPartsOnlyOneSelectionDivided_' + count;
          divParentElem.appendChild(divImage);
          count = count + 1;
        }
      }
    }

    divParentElem.classList.add("flexRowBetween");
    divParentElem.classList.add("absolute");
    container_paletteDecoMain.appendChild(divParentElem);

    var checkExistElement = document.getElementById('cart_userDecoID_OnlyOneSelection');
    if (checkExistElement != null) {
      cartPartsSetName.textContent = '';
      calcDecoPartsSubtractPrice(checkExistElement, 'cart_userDecoID_OnlyOneSelection');
      removeElemFromDiv('cart_userDecoID_OnlyOneSelection', 'cart_item5-2');
    }
    calcDecoPartsAddPrice(image5, 'userDecoID_OnlyOneSelection');

    images = document.querySelectorAll("img");
    images.forEach(function (image) {
      image.addEventListener("click", function () {
        if (image.classList.contains("select5_decoPartsOnlyOneSelectionDivided")) {
          handleImageSelection5OnlyOneSelectionDivided(image);
        } else {
          ;
        }
      });

    });
  }
}

function handleImageSelection5OnlyOneSelectionDivided(image) {
  if (image.classList.contains("selected_5_decoParts")) {
    image.classList.remove("selected_5_decoParts");
    image.style.border = "";
    wmouse.src = "";
  } else {  // クリックした画像が未選択状態の場合

    images.forEach(function (otherImage) {
      if (otherImage.classList.contains("selected_5_decoParts")) {
        otherImage.classList.remove("selected_5_decoParts");
        otherImage.style.border = "";
      }
    });
    image.classList.add("selected_5_decoParts");
    image.style.border = "2px solid #72F0EC";

    wmouse.src = image.src;
    wmouse.style.zIndex = '20';

  }
}


function createDivRoundImage(imageURL) {
  // 新しいプルダウンメニューを作成します
  var divElem = document.createElement("div");
  divElem.classList.add("box-round45");

  var imageRound = new Image();
  imageRound.classList.add("select5_decoPartsOnlyOneSelectionDivided");
  imageRound.classList.add("box-width45");

  imageRound.src = imageURL;
  divElem.appendChild(imageRound);

  return divElem;
}

function createPulldownMenu(id_name, array) {
  // 新しいプルダウンメニューを作成します
  var selectMenu = document.createElement("select");

  selectMenu.id = id_name;

  var option0 = document.createElement("option");
  option0.text = "選択してください";
  option0.value = '';
  selectMenu.add(option0);

  for (item of array) {
    var option = document.createElement("option");
    option.text = item;
    option.value = item;
    selectMenu.add(option);
  }
  return selectMenu;
}


function cancelPartsSet() {
  wmouse.src = "";
  images.forEach(function (otherImage) {
    if (otherImage.classList.contains("selected_5_decoPartsOnlyOneSelection")) {
      otherImage.classList.remove("selected_5_decoPartsOnlyOneSelection");
      otherImage.style.border = "";

      var checkExistElement = document.getElementById('cart_userDecoID_OnlyOneSelection');
      if (checkExistElement != null) {
        cartPartsSetName.textContent = '';
        calcDecoPartsSubtractPrice(checkExistElement, 'cart_userDecoID_OnlyOneSelection');
        removeElemFromDiv('cart_userDecoID_OnlyOneSelection', 'cart_item5-2');
      }
    } else if (otherImage.classList.contains("selected_5_decoParts")) {
      otherImage.classList.remove("selected_5_decoParts");
      otherImage.style.border = "";
    }
  });

}

decoPreview.addEventListener("mouseover", MouseImage());

function MouseImage() {

  // イメージオブジェクトのスタイルを設定
  style = wmouse.style;
  // fixed（画面左上を基点、スクロール無視）を設定
  style.position = "fixed";
  // 画像をセット

  wmouse.style.width = '16px';
  wmouse.id = 'corsor_decoPreview';
  document.body.appendChild(wmouse);

  // イベント追加
  if (document.addEventListener) {
    document.addEventListener("mousemove", MouseMove);
  } else if (document.attachEvent) {
    document.attachEvent("onmousemove", MouseMove);
  }
}
// ------------------------------------------------------------
// マウスの位置取得＆設定
// ------------------------------------------------------------
function MouseMove(e) {
  wmouse.style.left = (e.clientX + 15) + "px";
  wmouse.style.top = (e.clientY + 15) + "px";
}

function MouseRelease() {
  if (!wmouse) return;
  wmouse.src = "";
}

function handleImageSelectionDecoImage(image) {
  current_Material = map_PartsMaterial.get(image.id + '_material');
  applyMaterialToParts.textContent = '';
  var partsImgElement = document.createElement('img');
  partsImgElement.classList.add('box-width100');
  partsImgElement.style.border = "2px solid #72F0EC";
  partsImgElement.classList.add('selected_partsMaterial');
  partsImgElement.id = image.id + '_material';

  images.forEach(function (otherImage) {
    if (otherImage.classList.contains("select6_palette")) {
      otherImage.classList.remove("selected_6_palette");
      otherImage.style.border = "";
    }
  });

  if (current_Material) {
    partsImgElement.src = current_Material.src;
  } else {
    partsImgElement.src = "/static/images/fullorder/order_buttons/colors/文字.png";
  }
  applyMaterialToParts.appendChild(partsImgElement);
}

function handleImageSelection5_4(image) {
  if (image.classList.contains("selected_5_4")) { // クリックした画像がすでに選択されている場合
    image.classList.remove("selected_5_4");
    image.style.border = "";
    cartItem5_4Name.textContent = "";
    cartItem5_4Price.textContent = "";
    removeElemFromDiv('cartImage5_4', 'cart_item5-4');
  } else {  // クリックした画像が未選択状態の場合

    images.forEach(function (otherImage) {
      if (otherImage.classList.contains("selected_5_4")) {
        otherImage.classList.remove("selected_5_4");
        otherImage.style.border = "";
      }
    });
    image.classList.add("selected_5_4");
    image.style.border = "2px solid #72F0EC";

    var imageCart = new Image();
    imageCart.id =
      imageCart.classList.add("cart-image5");
    imageCart.src = '/static/images/fullorder/order_buttons/deco/small_items/外枠デザイン加工/5_4_' + image.id + '.png';

    removeElemFromDiv('cartImage5_4', 'cart_item5-4');
    addImageToCart('cart_item5-4', 'cartImage5_4', "cart-image5", imageCart, startPosition, animationDuration);
    // フォントに金額つけるならここに追記
    cartItem5_4Name.textContent = map_frameDesignedAnimalsName.get(image.id);
    cartItem5_4Price.textContent = map_frameDesignedAnimalsPrice.get(image.id);
  }
}


//　文字パネル補強 
function handleImageSelection7_1(image) {
  if (image.classList.contains("selected_7_1")) { // クリックした画像がすでに選択されている場合
    // 選択状態を解除し、ボーダーも除去
    image.classList.remove("selected_7_1");
    image.style.border = "";
    // カートからアイテム除去、内部価格情報も初期化
    resetHiddenCart(cartItem7_1, cartItem7_1Name, cartItem7_1Price);
    cartItem7_1multiple.textContent = '';
  } else {  // クリックした画像が未選択状態の場合

    images.forEach(function (otherImage) {
      if (otherImage.classList.contains("select7_1")) {
        otherImage.classList.remove("selected_7_1");
        otherImage.style.border = "";
      }
    });
    image.classList.add("selected_7_1");
    image.style.border = "2px solid #72F0EC";

    removeElemFromDiv('cartImage7_1', 'cart_item7-1');
    addImageToCart('cart_item7-1', 'cartImage7_1', "cart-image7", image, startPosition, animationDuration);
    // フォントに金額つけるならここに追記
    cartItem7_1Name.textContent = map_reinforcementNameObject.get(image.id);

    if (howManySelectElement.value != '') {
      numOfBoards = parseInt(howManySelectElement.value);
    } else {
      numOfBoards = 1;
    }

    cartItem7_1Price.textContent = map_reinforcementPriceObject.get(image.id) * numOfBoards;

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
    imgElement.id = 'cartImage7_1Multiple';
    imgElement.classList.add('cart-image7');
    removeElemFromDiv('cartImage7_1Multiple', 'cart_item7-1_multiple');

    cartItem7_1multiple.appendChild(imgElement);

  }
}

//　パネル裏面加工
function handleImageSelection7_2(image) {
  if (image.classList.contains("selected_7_2")) { // クリックした画像がすでに選択されている場合
    // 選択状態を解除し、ボーダーも除去
    image.classList.remove("selected_7_2");
    image.style.border = "";
    // カートからアイテム除去、内部価格情報も初期化
    resetHiddenCart(cartItem7_2, cartItem7_2Name, cartItem7_2Price);
  } else {  // クリックした画像が未選択状態の場合

    images.forEach(function (otherImage) {
      if (otherImage.classList.contains("select7_2")) {
        otherImage.classList.remove("selected_7_2");
        otherImage.style.border = "";
      }
    });
    image.classList.add("selected_7_2");
    image.style.border = "2px solid #72F0EC";

    removeElemFromDiv('cartImage7_2', 'cart_item7-2');
    addImageToCart('cart_item7-2', 'cartImage7_2', "cart-image7", image, startPosition, animationDuration);
    // フォントに金額つけるならここに追記
    cartItem7_2Name.textContent = map_backReinforcementNameObject.get(image.id);
    cartItem7_2Price.textContent = map_backReinforcementPriceObject.get(image.id);

  }
}

//　お急ぎ作成
function handleImageSelection8_1(image) {
  if (image.classList.contains("selected_8_1")) { // クリックした画像がすでに選択されている場合
    // 選択状態を解除し、ボーダーも除去
    image.classList.remove("selected_8_1");
    image.style.border = "";
    // カートからアイテム除去、内部価格情報も初期化
    resetHiddenCart(cartItem8_1, cartItem8_1Name, cartItem8_1Price);
  } else {  // クリックした画像が未選択状態の場合

    images.forEach(function (otherImage) {
      if (otherImage.classList.contains("select8_1")) {
        otherImage.classList.remove("selected_8_1");
        otherImage.style.border = "";
      }
    });
    image.classList.add("selected_8_1");
    image.style.border = "2px solid #72F0EC";

    removeElemFromDiv('cartImage8_1', 'cart_item8-1');
    addImageToCart('cart_item8-1', 'cartImage8_1', "cart-image8", image, startPosition, animationDuration);
    // フォントに金額つけるならここに追記
    cartItem8_1Name.textContent = map_deliveryNameObject.get(image.id);
    cartItem8_1Price.textContent = map_deliveryPriceObject.get(image.id);

  }
}


//　速達郵便
function handleImageSelection8_2(image) {
  if (image.classList.contains("selected_8_2")) { // クリックした画像がすでに選択されている場合
    // 選択状態を解除し、ボーダーも除去
    image.classList.remove("selected_8_2");
    image.style.border = "";
    // カートからアイテム除去、内部価格情報も初期化
    resetHiddenCart(cartItem8_2, cartItem8_2Name, cartItem8_2Price);
  } else {  // クリックした画像が未選択状態の場合

    images.forEach(function (otherImage) {
      if (otherImage.classList.contains("select8_2")) {
        otherImage.classList.remove("selected_8_2");
        otherImage.style.border = "";
      }
    });
    image.classList.add("selected_8_2");
    image.style.border = "2px solid #72F0EC";

    removeElemFromDiv('cartImage8_2', 'cart_item8-2');
    addImageToCart('cart_item8-2', 'cartImage8_2', "cart-image8", image, startPosition, animationDuration);
    // フォントに金額つけるならここに追記
    cartItem8_2Name.textContent = map_expressDeliveryNameObject.get(image.id);
    cartItem8_2Price.textContent = map_expressDeliveryPriceObject.get(image.id);

  }
}

//　郵便追跡
function handleImageSelection8_3(image) {
  if (image.classList.contains("selected_8_3")) { // クリックした画像がすでに選択されている場合
    // 選択状態を解除し、ボーダーも除去
    image.classList.remove("selected_8_3");
    image.style.border = "";
    // カートからアイテム除去、内部価格情報も初期化
    resetHiddenCart(cartItem8_3, cartItem8_3Name, cartItem8_3Price);
  } else {  // クリックした画像が未選択状態の場合

    images.forEach(function (otherImage) {
      if (otherImage.classList.contains("select8_3")) {
        otherImage.classList.remove("selected_8_3");
        otherImage.style.border = "";
      }
    });
    image.classList.add("selected_8_3");
    image.style.border = "2px solid #72F0EC";

    removeElemFromDiv('cartImage8_3', 'cart_item8-3');
    addImageToCart('cart_item8-3', 'cartImage8_3', "cart-image8", image, startPosition, animationDuration);
    // フォントに金額つけるならここに追記
    cartItem8_3Name.textContent = '追跡番号発行';
    cartItem8_3Price.textContent = 390;

  }
}


//　安心梱包
function handleImageSelection8_4(image) {
  if (image.classList.contains("selected_8_4")) { // クリックした画像がすでに選択されている場合
    // 選択状態を解除し、ボーダーも除去
    image.classList.remove("selected_8_4");
    image.style.border = "";
    // カートからアイテム除去、内部価格情報も初期化
    resetHiddenCart(cartItem8_4, cartItem8_4Name, cartItem8_4Price);
  } else {  // クリックした画像が未選択状態の場合

    images.forEach(function (otherImage) {
      if (otherImage.classList.contains("select8_4")) {
        otherImage.classList.remove("selected_8_4");
        otherImage.style.border = "";
      }
    });
    image.classList.add("selected_8_4");
    image.style.border = "2px solid #72F0EC";

    removeElemFromDiv('cartImage8_4', 'cart_item8-4');
    addImageToCart('cart_item8-4', 'cartImage8_4', "cart-image8", image, startPosition, animationDuration);
    // フォントに金額つけるならここに追記
    cartItem8_4Name.textContent = '安心梱包';
    cartItem8_4Price.textContent = 210;

  }
}


//　安心サービス
function handleImageSelection8_5(image) {
  if (image.classList.contains("selected_8_5")) { // クリックした画像がすでに選択されている場合
    // 選択状態を解除し、ボーダーも除去
    image.classList.remove("selected_8_5");
    image.style.border = "";
    // カートからアイテム除去、内部価格情報も初期化
    resetHiddenCart(cartItem8_5, cartItem8_5Name, cartItem8_5Price);
  } else {  // クリックした画像が未選択状態の場合

    images.forEach(function (otherImage) {
      if (otherImage.classList.contains("select8_5")) {
        otherImage.classList.remove("selected_8_5");
        otherImage.style.border = "";
      }
    });
    image.classList.add("selected_8_5");
    image.style.border = "2px solid #72F0EC";

    removeElemFromDiv('cartImage8_5', 'cart_item8-5');
    addImageToCart('cart_item8-5', 'cartImage8_5', "cart-image8", image, startPosition, animationDuration);
    // フォントに金額つけるならここに追記
    cartItem8_5Name.textContent = '安心保証';
    cartItem8_5Price.textContent = map_saftyDeliveryPriceObject.get(image.id);

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
      deleteAllColorItems();
      resetAllImages();
      resetAllCartItem();
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
      } else if (image.classList.contains("select5_decoParts")) {
        handleImageSelection5(image);
      } else if (image.classList.contains("select5_decoPartsOnlyOneSelection")) {
        handleImageSelection5OnlyOneSelection(image);
      } else if (image.classList.contains("select5_customParts")) {
        customUserImage(image);
      } else if (image.classList.contains("select5_4")) {
        handleImageSelection5_4(image);
      } else if (image.classList.contains("select7_1")) {
        handleImageSelection7_1(image);
      } else if (image.classList.contains("select7_2")) {
        handleImageSelection7_2(image);
      } else if (image.classList.contains("select8_1")) {
        handleImageSelection8_1(image);
      } else if (image.classList.contains("select8_2")) {
        handleImageSelection8_2(image);
      } else if (image.classList.contains("select8_3")) {
        handleImageSelection8_3(image);
      } else if (image.classList.contains("select8_4")) {
        handleImageSelection8_4(image);
      } else if (image.classList.contains("select8_5")) {
        handleImageSelection8_5(image);
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
  resetHiddenCart(cartItem8_5, cartItem8_5Name, cartItem8_5Price);
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

  if (selectedValue > 1) {
    document.getElementById('image8_5_1').classList.add("hidden");
    document.getElementById('image8_5_2').classList.add("hidden");
    document.getElementById('image8_5_3').classList.remove("hidden");
  } else {
    images.forEach(function (image) { // 全イメージ画像ループ
      if (image.classList.contains("selected_1")) {
        if (image.id == 'image1_1' || image.id == 'image1_3' || image.id == 'image1_4' || image.id == 'image1_5') {
          document.getElementById('image8_5_1').classList.remove("hidden");
          document.getElementById('image8_5_2').classList.add("hidden");
          document.getElementById('image8_5_3').classList.add("hidden");
        } else if (image.id == 'image1_2' || image.id == 'image1_6') {
          document.getElementById('image8_5_1').classList.add("hidden");
          document.getElementById('image8_5_2').classList.remove("hidden");
          document.getElementById('image8_5_3').classList.add("hidden");
        } else {
          document.getElementById('image8_5_1').classList.add("hidden");
          document.getElementById('image8_5_2').classList.add("hidden");
          document.getElementById('image8_5_3').classList.remove("hidden");
        }
      }
    });


  }
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
  // insertColorsIntoCart();
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
  resetHiddenCart(cartItem6_1, cartItem6_1Name, cartItem6_1Price);
  resetHiddenCart(cartItem6_2, cartItem6_2Name, cartItem6_2Price);
  resetHiddenCart(cartItem6_3, cartItem6_3Name, cartItem6_3Price);
  resetHiddenCart(cartItem6_4, cartItem6_4Name, cartItem6_4Price);
  showAllOptions();
  howManySelectElement.value = '';
  images.forEach(function (image) { // 全イメージ画像ループ

    if (!image.classList.contains("select1_title")) { // select1のクラスがついた画像は選択状態を解除し、選択ボーダーも取り除く。グレーアウトはすべての画像から取り除く
      image.classList.remove("grayed-out");
      if (image.classList.contains("select1")) {
        image.classList.remove("selected_1");
        if (image.id == "image1_8") { // title1がクリック -> サイズ指定の入力フォームを初期化 (title2と同じ処理のためまとめれそう)
          inputBoardSizeTATE.value = "";
          inputBoardSizeYOKO.value = "";
          calcSizePriceText.textContent = "720";
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
      // removeElemFromDiv("cartItem1ExtInput", "selected_1_SizeSpecify");
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
        inputBoardSizeTATE.value = "";
        inputBoardSizeYOKO.value = "";
        calcSizePriceText.textContent = "720";
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
function updateDivContent(divElem, inputElem) {
  divElem.textContent = inputElem.value;
  if (divElem.textContent.trim().length > 0 && divElem.id == 'cart_item4_extText') {
    inputFontImage = document.getElementById('image4_31');
    removeElemFromDiv('cartImage4', 'cart_item4');
    addImageToCart('cart_item4', 'cartImage4', "cart-image4", inputFontImage, startPosition, animationDuration);
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
  } else if (divElem.textContent.trim().length === 0 && divElem.id == 'cart_item4_extText') {
    cartItem4Price.textContent = "";
    removeElemFromDiv('cartImage4', 'cart_item4');
  }

  if (divElem.textContent.trim().length > 0 && divElem.id == 'cart_item5-2_inputUserPartsSet') {

    // パーツセット情報クリア
    inputFontImage = document.getElementById('imageDeco_5-2-9');
    divElement = document.getElementById('decoPartsOnlyOneSelectionDiv');

    if (divElement) {
      divElement.remove();
      deleteUserDecoAllImage();
      cancelPartsSet();
    }


    removeElemFromDiv('cartImage5-2-9', 'cart_item5-2');
    addImageToCart('cart_item5-2', 'cartImage5-2-9', "cart-image5", inputFontImage, startPosition, animationDuration);
    cartInputPartsSetPrice.textContent = '1200';

    inputSetPartsExtText.style.display = 'flex';

  } else if (divElem.textContent.trim().length === 0 && divElem.id == 'cart_item5-2_inputUserPartsSet') {
    removeElemFromDiv('cartImage5-2-9', 'cart_item5-2');
    cartInputPartsSetPrice.textContent = '';
    cartInputPartsSetExtText.textContent = '';
    inputSetPartsExtText.style.display = 'none';
  }
}


buttonOpen1.addEventListener('click', function () { modalOpen("select6_palette6_1", "select6_palette6_4", "cart_item6-1"); });
buttonOpen2.addEventListener('click', function () { modalOpen("select6_palette6_5", "select6_palette6_8", "cart_item6-2"); });
buttonOpen3.addEventListener('click', function () { modalOpen("select6_palette6_9", "select6_palette6_12", "cart_item6-3"); });
buttonOpen4.addEventListener('click', function () { modalOpen("select6_palette6_13", "select6_palette6_16", "cart_item6-4"); });

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
      if (is_name) {
        if (is_half) {
          calc_price = calc_price + map_priceObject5_half.get(img.id);
        } else {
          calc_price = calc_price + map_priceObject5.get(img.id);
        }
      } else {
        calc_price = calc_price;
      }


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
    if (map_insertCart.colorNameImage.length >= 1) {
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
    }
    modalClose(modalPalette);
  } else {
    ;
  }
}

function modalOpen(start_mapAttr, end_mapAttr, cartID) {
  var is_Insert = false;
  var is_gotoModal = true;
  modalText.innerHTML = "<p class='jkfont'>この色の組み合わせをカートに追加してもよろしいですか？</p>";
  modalImages.textContent = "";
  arrayImagelist = [];
  images_text = "";

  for (const [key, value] of map_paletteImage) {
    if (key === start_mapAttr) {
      is_Insert = true;
      if (value == '') {
        warning_palette1.style.display = 'block';
        warning_palette2.style.display = 'block';
        warning_palette3.style.display = 'block';
        warning_palette4.style.display = 'block';
        is_gotoModal = false;
      }
    } else if (key === end_mapAttr) {
      if (value != '') {
        addImageToModal(modalImages, "modal-image6", value);
        arrayImagelist.push(value);
        images_text = images_text + "→" + value.id;

      } else {
        arrayImagelist.push("");
      }

      is_Insert = false;
      map_insertCart = new cartMaterials(cartID, arrayImagelist[0], arrayImagelist[1], arrayImagelist[2], arrayImagelist[3], images_text);

    }

    if (is_Insert && value != '') {
      addImageToModal(modalImages, "modal-image6", value);
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
  if (is_gotoModal) {
    modalPalette.style.display = 'block';
    warning_palette1.style.display = 'none';
    warning_palette2.style.display = 'none';
    warning_palette3.style.display = 'none';
    warning_palette4.style.display = 'none';
  }
}

buttonClose.addEventListener('click', function () { modalClose(modalPalette); });

function modalClose(modalElem) {
  modalElem.style.display = 'none';
}

// モーダルコンテンツ以外がクリックされた時
addEventListener('click', outsideClose);
function outsideClose(e) {
  if (e.target == modalPalette) {
    modalPalette.style.display = 'none';
  } else if (e.target == modalDetailKomozi) {
    modalDetailKomozi.style.display = 'none';
  } else if (e.target == modalDetailDakuten) {
    modalDetailDakuten.style.display = 'none';
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
      if (paletteElement.id === 'select6_palette6_2') {
        if (!check_nametitle_frame) {
          map_paletteImage.set('select6_palette6_6', imgElement);
          map_paletteImage.set('select6_palette6_10', imgElement);
        }
        if (!check_catchphrase_frame) {
          map_paletteImage.set('select6_palette6_14', imgElement);
        }

      } else if (paletteElement.id === 'select6_palette6_3') {
        map_paletteImage.set('select6_palette6_7', imgElement);
        map_paletteImage.set('select6_palette6_11', imgElement);
        map_paletteImage.set('select6_palette6_15', imgElement);
      } else if (paletteElement.id === 'select6_palette6_4') {
        map_paletteImage.set('select6_palette6_8', imgElement);
        map_paletteImage.set('select6_palette6_12', imgElement);
        map_paletteImage.set('select6_palette6_16', imgElement);
      }

      sourcePath = imgElement.src;
      for (const [key, value] of map_nightSingleImage) {
        if (key === imgElement.id) {
          sourcePath = value;
          break;
        }
      }
      if (paletteElement.id === 'select6_palette6_2') {
        if (!check_nametitle_frame) {
          document.getElementById('select6_palette6_6').src = sourcePath;
          document.getElementById('select6_palette6_10').src = sourcePath;
        }
        if (!check_catchphrase_frame) {
          document.getElementById('select6_palette6_14').src = sourcePath;
        }
      } else if (paletteElement.id === 'select6_palette6_3') {
        document.getElementById('select6_palette6_7').src = sourcePath;
        document.getElementById('select6_palette6_11').src = sourcePath;
        document.getElementById('select6_palette6_15').src = sourcePath;
      } else if (paletteElement.id === 'select6_palette6_4') {
        document.getElementById('select6_palette6_8').src = sourcePath;
        document.getElementById('select6_palette6_12').src = sourcePath;
        document.getElementById('select6_palette6_16').src = sourcePath;
      }

      paletteElement.src = sourcePath;
    }
  }
}

function inputParts(event) {
  event.preventDefault();

  const fileInput = document.getElementById("partsInput");

  if (fileInput.files.length === 0) {
    // ファイルが選択されていない場合の処理
    cancelInputParts.style.display = 'block';
    return; // 処理を終了してフォーム送信を防止
  } else {
    cancelInputParts.style.display = 'none';
    // 選択されたファイル情報を取得
    var file = fileInput.files[0];

    // readerのresultプロパティに、データURLとしてエンコードされたファイルデータを格納
    var reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = function () {
      $('#select5_userInputParts').attr('src', reader.result);
      $('#select5_userInputParts').css('display', 'block');
    }
  }

}


// 入力フォームのinputイベントに関数を登録
inputFontElement.addEventListener('input', function () { updateDivContent(cartItem4ExtText, inputFontElement) });
inputSmallCharaFontElement.addEventListener('input', function () { updateDivContent(cartItem4SmallFontText, inputSmallCharaFontElement) });
inputPartsName.addEventListener('input', function () { updateDivContent(cartInputPartsName, inputPartsName) });
inputSetPartsExtText.addEventListener('input', function () { updateDivContent(cartInputPartsSetExtText, inputSetPartsExtText) });
buttonInsertColorsIntoCart.addEventListener('click', function () {
  insertColorsIntoCart();
});
inputSetPartsName.addEventListener('input', function () { updateDivContent(cartInputPartsSetName, inputSetPartsName) });

// buttonOpenColorRanking.addEventListener('click', openColorRanking);
colorRank1.addEventListener('click', function () { rankingApplyPalette("ranking6-1") });
colorRank2.addEventListener('click', function () { rankingApplyPalette("ranking6-2") });
colorRank3.addEventListener('click', function () { rankingApplyPalette("ranking6-3") });

initializeImageSelection();