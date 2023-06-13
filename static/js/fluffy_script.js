// カート機能
function updateCartVisibility() {
  var cart = document.getElementById('cart');
  var scrollTop = window.scrollY || document.documentElement.scrollTop;
  
  if (scrollTop > 100) {
    cart.style.display = 'block';
  } else {
    cart.style.display = 'none';
  }
}

// 入力フォームのinputイベントを監視し、入力内容を表示する関数を定義
function updateDivContent() {
  cartItem1ExtText.textContent = inputElement.value;
}

// うちわorボードに含まれる画像がクリックされたときに呼び出される関数
function handleImageSelection1(image) { 
    if (image.classList.contains("selected_1")) { // クリックした画像がすでに選択されている場合
      // 選択状態を解除し、ボーダーも除去
      image.classList.remove("selected_1");
      image.style.border = "";
      // 選択状況おしらせ表示初期化
      selected_1_ImageInfo.textContent = "";
      // カートからアイテム除去、内部価格情報も初期化
      removeImageFromDiv('cartImage1', 'cart_item1');
      cartItem1Price.textContent = "";
      // うちわorボードの備考情報初期化 (カートからも)
      if (window.getComputedStyle(notesText).display == "block") {
        cartItem1ExtText.textContent = "";
        inputElement.value = "";
        notesText.style.display = "none";
      } 

      
    } else { // クリックした画像が未選択状態の場合
      images.forEach(function (otherImage) { // すべての画像をループする(選択状態をクリックした画像に移動させるため、うちわorボード内で一度初期化する)
        if (otherImage.classList.contains("select1") || otherImage.classList.contains("select1_title")){ // うちわ or ボード内の画像なら
          if (otherImage.classList.contains('selected1')){ // クリック前に選択状態になっていた画像が顔うちわ文字なら
            if (otherImage.id === 'image1_1'){

            }
          }
          // 選択解除し、ボーダーを取り除く
          otherImage.classList.remove("selected_1");
          otherImage.style.border = "";
        }
      });
      // クリックした画像を選択状態にし、ボーダーを付与
      image.classList.add("selected_1");
      image.style.border = "2px solid #FF6CC4";

      for (const [key, value] of map_priceObject1) {
        if (key === image.id) { // 選択されたimageとkey値が同じなら
          // カートに追加 > テキスト表示は不要か？最後の注文確定画面で必要となりそう
          // cartItem1.textContent = map_productNameObject.get(image.id);
          // 
          removeImageFromDiv('cartImage1', 'cart_item1');
          copiedImage = image.cloneNode(true);
          copiedImage.id = 'cartImage1';
          copiedImage.classList.add("cart-image");
          copiedImage.classList.remove("btn-image");
          cartItem1.appendChild(copiedImage);

          cartItem1Price.textContent = value;
          if (key === 'image1_8') { // image1_8が選択された

            notesText.style.display = "block";
            selected_1_ImageInfo.textContent = "";
            selected_1_ImageInfo.appendChild(inputElement);
          } else if (key === 'image1_1') { // 顔うちわ文字を選択した場合
            images.forEach(function (otherImage) { // すべての画像をループ
              if (otherImage.classList.contains("excluded2")){ // 文字サイズSの画像以外なら
                otherImage.classList.add("grayed-out"); // グレーアウトする
                if (otherImage.classList.contains('selected_2')){ // 文字サイズS以外の画像がすでに選択されていたら
                  otherImage.classList.remove('selected_2'); //　選択解除し、ボーダー除去
                  otherImage.style.border = "";
                  removeImageFromDiv('cartImage2', 'cart_item2'); // カートからアイテム除去
                  cartItem2Price.textContent = ""; // カート内部の金額情報初期化
                }
              } else if (otherImage.classList.contains("autoincluded2")) { // 文字サイズSの画像なら
                copiedImage = otherImage.cloneNode(true); // カート追加処理
                copiedImage.id = 'cartImage2';
                copiedImage.classList.add("cart-image2");
                copiedImage.classList.remove("image-width");
                copiedImage.classList.remove("btn-image");
                cartItem2.appendChild(copiedImage);
                otherImage.classList.add('selected_2'); // 選択状態にしてボーダー追加
                otherImage.style.border = "2px solid #FF6CC4";
              } else {
                ;
              }
            });
          } else { // image8_1以外が選択された

            // image8以外がクリックされるとカートの備考欄もクリアにする
            cartItem1ExtText.textContent = "";
            // ユーザー入力フォーム初期化
            inputElement.value = "";
            // 注意書きの非表示
            notesText.style.display = "none";
            // 選択した商品の値段表示
            selected_1_ImageInfo.textContent = `値段: ${value}￥`;
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
    // 選択状況おしらせ表示初期化
    selected_2_ImageInfo.textContent = "";
    // カートからアイテム除去、内部価格情報も初期化
    removeImageFromDiv('cartImage2', 'cart_item2');
    cartItem2Price.textContent = "";
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
        copiedImage = image.cloneNode(true);
        copiedImage.id = 'cartImage2';
        copiedImage.classList.add("cart-image2");
        copiedImage.classList.remove("image-width");
        copiedImage.classList.remove("btn-image");
        cartItem2.appendChild(copiedImage);

        cartItem2Price.textContent = value;
        selected_2_ImageInfo.textContent = `値段: ${value}￥`;

        break;
      }
    }
    
  }
}


  // カートから
  function removeImageFromDiv(imageId, divId) {
    const image = document.getElementById(imageId);
    const div = document.getElementById(divId);
  
    if (image && div && div.contains(image)) {
      div.removeChild(image);
    }
  }


  // うちわ or ボード用コンストラクタ
  const title1 = document.getElementById("title1");
  const title2 = document.getElementById("title2");
  const group1 = document.querySelector(".group1");
  const group2 = document.querySelector(".group2");
  const images = document.querySelectorAll("img");
  const excluded2images = document.getElementsByClassName("excluded2");
  const included2image = document.getElementsByClassName("autoincluded2");

  // 選択状況おしらせ表示
  // うちわorボード
  const selected_1_ImageInfo = document.getElementById("selected_1_ImageInfo");
  // 文字サイズ
  const selected_2_ImageInfo = document.getElementById("selected_2_ImageInfo");
  
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

  
  function initializeImageSelection() {
    // title1(うちわ)のイベントリスナー
    title1.addEventListener("click", function () { // title1がクリックされたら
      notesText.style.display = "none";
      selected_1_ImageInfo.textContent = "";

      // group1を有効化、group2は見えなくする
      group1.style.display = "flex";
      group2.style.display = "none";
      if (title1.classList.contains("selected_1")) {
        ;
      } else {
        title1.classList.add("selected_1");
        title2.classList.remove("selected_1");
        // カートの中身もクリアにする
        cartItem1.textContent = ""
        cartItem1Price.textContent = ""
      }

      images.forEach(function (image) { // 全イメージ画像ループ
        if (image === title2) {
          // title1がクリックされているため、title2はグレーアウトする
          image.classList.add("grayed-out");
        } else {
          if (image === title1){
            // title1がクリックされているため、title1がグレーアウトしているかどうかに関わらずグレーアウトを外す
            image.classList.remove("grayed-out"); 
          } else {
            // それ以外の画像(select1のクラスがついた画像のみ)は選択状態を解除し、選択ボーダーも取り除く
            if (image.classList.contains("select1")){
              image.classList.remove("selected_1");
              image.style.border = "";
              if ( image.id == "image1_8" ){ // title1がクリック -> サイズ指定の入力フォームを初期化 (title2と同じ処理のためまとめれそう)
                inputElement.value = "";
                cartItem1ExtText.textContent = "";
              }
            }
          }
        }
      });
    });

    // title2(ボード)のイベントリスナー
    title2.addEventListener("click", function () { // title2がクリックされたら
      notesText.style.display = "none";
      selected_1_ImageInfo.textContent = "";

      // group1を見えなくする、group2を有効化
      group1.style.display = "none";
      group2.style.display = "flex";
      if (title2.classList.contains("selected_1")) {
        ;
      } else {
        title1.classList.remove("selected_1");
        title2.classList.add("selected_1");
        // カートの中身もクリアにする
        cartItem1.textContent = ""
        cartItem1Price.textContent = ""
      }

      images.forEach(function (image) { // 全イメージ画像ループ
        if (image === title1) {
          // title2がクリックされているため、title1はグレーアウトする
          image.classList.add("grayed-out");
        } else {
          if (image === title2){
            // title2がクリックされているため、title2がグレーアウトしているかどうかに関わらずグレーアウトを外す
            image.classList.remove("grayed-out"); 
          } else {
            // それ以外の画像(select1のクラスがついた画像のみ)は選択状態を解除し、選択ボーダーも取り除く
            if (image.classList.contains("select1")){
              image.classList.remove("selected_1");
              image.style.border = "";
              if ( image.id == "image1_8" ){ // title1がクリック -> サイズ指定の入力フォームを初期化 (title2と同じ処理のためまとめれそう)
                inputElement.value = "";
                cartItem1ExtText.textContent = "";
              }
            }
          }
        }
      });
    });
  
    images.forEach(function (image) {
      image.addEventListener("click", function () {
        if (image.classList.contains("select1")){
            handleImageSelection1(image);
        } else if (image.classList.contains("select2")) {
          handleImageSelection2(image);
        }
      });
    });
  }
  
// 初期化関数を呼び出して画像の選択機能を有効にする
initializeImageSelection();
window.addEventListener('scroll', updateCartVisibility);

// 入力フォームのinputイベントに関数を登録
inputElement.addEventListener('input', updateDivContent);