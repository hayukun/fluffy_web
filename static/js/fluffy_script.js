// カート機能
function updateCartVisibility() {
  const cart = document.getElementById('cart');
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  
  cart.style.display = scrollTop > 100 ? 'block' : 'none';
}
// 入力フォームのinputイベントを監視し、入力内容を表示する関数を定義
function updateDivContent() {
  cartItem1ExtText.textContent = inputElement.value;
}

function handleImageSelection1(image) {
  const isAlreadySelected = image.classList.contains("selected_1");
  
  if (isAlreadySelected) {
    // クリックした画像がすでに選択されている場合
    image.classList.remove("selected_1");
    image.style.border = "";
    
    removeImageFromDiv('cartImage1', 'cart_item1');
    cartItem1Price.textContent = "";
    
    if (window.getComputedStyle(notesText).display === "block") {
      cartItem1ExtText.textContent = "";
      inputElement.value = "";
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
      
      showAllOptions();
    }
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
        addImageToCart(cartItem1, 'cartImage1', "cart-image", image, startPosition, animationDuration);
        
        cartItem1Price.textContent = value;
        
        if (key === 'image1_8') {
          notesText.style.display = "block";
          selected_1_ImageInfo.appendChild(inputElement);
        } else if (key === 'image1_1') {
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
            }
          });
          
          reduceOptions();
          removeImageFromDiv('cartImage2', 'cart_item2');
          addImageToCart(cartItem2, 'cartImage2', "cart-image2", included2Image, startPosition, animationDuration);
          cartItem2Price.textContent = map_priceObject2.get('image2_1');
          
          cartItem1ExtText.textContent = "";
          inputElement.value = "";
          notesText.style.display = "none";
        } else {
          cartItem1ExtText.textContent = "";
          inputElement.value = "";
          removeImageFromDiv("cartItem1ExtInput", "selected_1_ImageInfo");
          notesText.style.display = "none";
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
    removeImageFromDiv('cartImage2', 'cart_item2');
    cartItem2Price.textContent = "";
  } else {  // クリックした画像が未選択状態の場合
    if (image.classList.contains('grayed-out')){
      ;
    } else {
      images.forEach(function (otherImage) {
        if (otherImage.classList.contains("select2")){
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
    // 選択状況おしらせ表示初期化
    selected_3_ImageInfo.textContent = "";
    // カートからアイテム除去、内部価格情報も初期化
    removeImageFromDiv('cartImage3', 'cart_item3');
    cartItem3Price.textContent = "";
  } else {  // クリックした画像が未選択状態の場合
    if (image.classList.contains('grayed-out')){
      ;
    } else {
      images.forEach(function (otherImage) {
        if (otherImage.classList.contains("select3")){
          otherImage.classList.remove("selected_3");
          otherImage.style.border = "";
        }
      });
      image.classList.add("selected_3");
      image.style.border = "2px solid #FF6CC4";
      // カートに追加
      // cartItem1.textContent = map_productNameObject.get(image.id);
      removeImageFromDiv('cartImage3', 'cart_item3');
      addImageToCart(cartItem3, 'cartImage3', "cart-image3", image, startPosition, animationDuration);
      } 
    }
}


  // カートから
  function removeImageFromDiv(contentId, divId) {
    const content = document.getElementById(contentId);
    const div = document.getElementById(divId);
  
    if (content && div && div.contains(content)) {
      div.removeChild(content);
    }
  }


  // うちわ or ボード用コンストラクタ
  const title1 = document.getElementById("title1");
  const title2 = document.getElementById("title2");
  const group1 = document.querySelector(".group1");
  const group2 = document.querySelector(".group2");
  const images = document.querySelectorAll("img");
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

  // うちわ or ボード用　input要素
  const inputElement = document.createElement('input');
  inputElement.type = 'text';
  inputElement.placeholder = "(例) B3 / 縦 〇cm、横 〇cm など  ";
  inputElement.style.width = '500px';
  inputElement.setAttribute('id', 'cartItem1ExtInput');

  // カート機能用コンストラクタ
  const cartItem1 = document.getElementById("cart_item1");
  const cartItem2 = document.getElementById("cart_item2");
  const cartItem3 = document.getElementById("cart_item3");
  const cartItem4 = document.getElementById("cart_item4");
  const cartItem1Price = document.getElementById("cart_item1_price");
  const cartItem2Price = document.getElementById("cart_item2_price");
  const cartItem3Price = document.getElementById("cart_item3_price");
  const cartItem4Price = document.getElementById("cart_item4_price");
  // image1_8選んだ時の入力フォーム(image1_8はサイズ指定)
  const cartItem1ExtText = document.getElementById("cart_item1_extText");

  // howManySelect要素を取得
  var howManySelectElement = document.querySelector('select[name="howManySelect"]');


// カート追加アニメーション処理
const animationDuration = 1000; // アニメーションの時間（ミリ秒）
const startPosition = -100; // アニメーションの開始位置（左からの位置、ピクセル単位）
const endPosition = 0; // アニメーションの終了位置（左からの位置、ピクセル単位）

  
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

      resetImageSelection3conbo()
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
      }
    });
  });
}


// howManySelect要素の変更を検知するイベントリスナーを追加
howManySelectElement.addEventListener('change', function() {
  // 変更されたときの処理を記述する
  var selectedValue = howManySelectElement.value;
  console.log('Selected value changed: ' + selectedValue);
});

// 何連オプションの1以外非表示にする
function reduceOptions() {
  for (var i = 0; i < howManySelectElement.options.length; i++) {
    var option = howManySelectElement.options[i];
    
    // valueが1以外のオプションを非表示にする
    if (option.value !== '1') {
        option.style.display = 'none';
    }
    // ユーザーが何も選択していない場合にvalueが1のオプションを選択する
    if (howManySelectElement.value === '') {
      howManySelectElement.value = '1';
    }
  }
}

// オプションを再表示する関数
function showAllOptions() {
  // オプションをループして再表示
  for (var i = 0; i < howManySelectElement.options.length; i++) {
    var option = howManySelectElement.options[i];
    
    option.style.display = ''; // デフォルトの表示設定に戻す
    howManySelectElement.value = ''
  }
}

function resetImageSelection3conbo(){
  // カートの中身もクリアにする
  cartItem1.textContent = ""
  cartItem1Price.textContent = ""
  cartItem2.textContent = ""
  cartItem2Price.textContent = ""
  cartItem3.textContent = ""
  cartItem3Price.textContent = ""
  showAllOptions();
  images.forEach(function (image) { // 全イメージ画像ループ
    // select1のクラスがついた画像は選択状態を解除し、選択ボーダーも取り除く。グレーアウトはすべての画像から取り除く
    if (!image.classList.contains("select1_title")){
      image.classList.remove("grayed-out");
      if(image.classList.contains("select1")){
        image.classList.remove("selected_1");
        if ( image.id == "image1_8" ){ // title1がクリック -> サイズ指定の入力フォームを初期化 (title2と同じ処理のためまとめれそう)
          inputElement.value = "";
          cartItem1ExtText.textContent = "";
        }
      } else if (image.classList.contains("select2")){
        image.classList.remove("selected_2");
      } else if (image.classList.contains("select3")){
        image.classList.remove("selected_3"); 
      }
      removeImageFromDiv("cartItem1ExtInput", "selected_1_ImageInfo");
      image.style.border = "";
    }
  });
}

function resetImageSelection1(){
  // カートの中身もクリアにする
  cartItem1.textContent = ""
  cartItem1Price.textContent = ""
  images.forEach(function (image) { // 全イメージ画像ループ
    // select1のクラスがついた画像は選択状態を解除し、選択ボーダーも取り除く。グレーアウトはすべての画像から取り除く
    if (image.classList.contains("select1")){
      image.classList.remove("grayed-out"); 
      image.classList.remove("selected_1");
      image.style.border = "";
      if ( image.id == "image1_8" ){ // title1がクリック -> サイズ指定の入力フォームを初期化 (title2と同じ処理のためまとめれそう)
        inputElement.value = "";
        cartItem1ExtText.textContent = "";
      }
    }
  });

}

// カート追加関数 (カートitem名, 追加ID名, 追加クラス名, 画像, スタート位置, アニメーション時間)
function addImageToCart(cartItem, cartID, cartClass, image, startPosition, animationDuration) {
  const copiedImage = image.cloneNode(true);
  copiedImage.id = cartID;
  copiedImage.classList.add(cartClass);
  copiedImage.classList.remove("btn-image");
  copiedImage.classList.remove("image-width");
  copiedImage.style.border="";
  cartItem.appendChild(copiedImage);
  
  copiedImage.style.position = 'relative';
  copiedImage.style.left = startPosition + 'px';
  copiedImage.style.transition = 'left ' + animationDuration + 'ms ease';

  setTimeout(function() {
    copiedImage.style.left = '0px';
  }, 0);
}

// 初期化関数を呼び出して画像の選択機能を有効にする
initializeImageSelection();
window.addEventListener('scroll', updateCartVisibility);

// 入力フォームのinputイベントに関数を登録
inputElement.addEventListener('input', updateDivContent);