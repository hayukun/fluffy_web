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

// うちわorボード
function handleImageSelection(image) {
    if (image.classList.contains("selected")) {
      image.classList.remove("selected");
      image.style.border = "";
      selectedImageInfo.textContent = "";
      if (window.getComputedStyle(notesText).display == "block") {
        cartItem1ExtText.textContent = "";
        inputElement.value = "";
        notesText.style.display = "none";
      } 
    } else {
      images.forEach(function (otherImage) {
        otherImage.classList.remove("selected");
        otherImage.style.border = "";
      });
      image.classList.add("selected");
      image.style.border = "2px solid #FF6CC4";
      for (const [key, value] of map_priceObject) {
        if ( key == image.id){
          // カートに追加
          cartItem1.textContent = `${map_productNameObject.get(image.id)}`;
          cartItem1Price.textContent = `${value}`;
          if ( value == 0 ){
              
              notesText.style.display = "block";
              selectedImageInfo.textContent = "";
              selectedImageInfo.appendChild(inputElement);
              break;
          }
          // image8以外がクリックされるとカートの備考欄もクリアにする
          cartItem1ExtText.textContent = "";
          inputElement.value = "";
          notesText.style.display = "none";
          selectedImageInfo.textContent = `値段: ${value}￥`;
          break;
        }
      }
      
    }
  }
  



  // うちわ or ボード用コンストラクタ
  const title1 = document.getElementById("title1");
  const title2 = document.getElementById("title2");
  const group1 = document.querySelector(".group1");
  const group2 = document.querySelector(".group2");
  const images = document.querySelectorAll("img");
  const selectedImageInfo = document.getElementById("selectedImageInfo");
  const notesText = document.getElementById('notesText');
  const map_priceObject = new Map([
    ['image1', 690],
    ['image2', 1480],
    ['image3', 990],
    ['image4', 1380],
    ['image5', 1500],
    ['image6', 1800],
    ['image7', 2100],
    ['image8', 0]
  ]);
  const map_productNameObject = new Map([
    ['image1', '顔うちわ文字'],
    ['image2', 'うちわ文字'],
    ['image3', 'ボードB6'],
    ['image4', 'ボードB5'],
    ['image5', 'ボードA4'],
    ['image6', 'ボードB4'],
    ['image7', 'ボードA3'],
    ['image8', 'サイズ指定']
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
  const cartItem1ExtText = document.getElementById("cart_item1_extText");

  
  function initializeImageSelection() {
    title1.addEventListener("click", function () {
      notesText.style.display = "none";
      selectedImageInfo.textContent = "";
      group1.style.display = "flex";
      group2.style.display = "none";
      if (title1.classList.contains("selected")) {
        ;
      } else {
        title1.classList.add("selected");
        title2.classList.remove("selected");
        // カートの中身もクリアにする
        cartItem1.textContent = ""
        cartItem1Price.textContent = ""
      }

      images.forEach(function (image) {
        if (image === title2) {
          if (title1.classList.contains("selected")) {
            image.classList.add("grayed-out");
          } else {
            image.classList.remove("grayed-out");
          }
        } else {
          if (image === title1){
            image.classList.remove("grayed-out"); 
          } else {
            image.classList.remove("grayed-out");
            image.classList.remove("selected");
            image.style.border = "";
            if ( image.id == "image8" ){
              inputElement.value = "";
              cartItem1ExtText.textContent = "";
            }
          }
        }
      });
    });
  
    title2.addEventListener("click", function () {
      notesText.style.display = "none";
      selectedImageInfo.textContent = "";
      group1.style.display = "none";
      group2.style.display = "flex";
      if (title2.classList.contains("selected")) {
        ;
      } else {
        title1.classList.remove("selected");
        title2.classList.add("selected");
        // カートの中身もクリアにする
        cartItem1.textContent = ""
        cartItem1Price.textContent = ""
      }

      images.forEach(function (image) {
        if (image === title1) {
          if (title2.classList.contains("selected")) {
            image.classList.add("grayed-out");
          } else {
            image.classList.remove("grayed-out");
          }
        } else {
          if (image === title2){
            image.classList.remove("grayed-out"); 
          } else {
            image.classList.remove("grayed-out");
            image.classList.remove("selected");
            image.style.border = "";
            if ( image.id == "image8" ){
              inputElement.value = "";
              cartItem1ExtText.textContent = "";
            }
          }
        }
      });
    });
  
    images.forEach(function (image) {
      image.addEventListener("click", function () {
        if (image.classList.contains("select1")){
            handleImageSelection(image);
        }
      });
    });
  }
  
// 初期化関数を呼び出して画像の選択機能を有効にする
initializeImageSelection();
window.addEventListener('scroll', updateCartVisibility);

// 入力フォームのinputイベントに関数を登録
inputElement.addEventListener('input', updateDivContent);