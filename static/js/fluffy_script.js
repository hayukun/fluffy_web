function handleImageSelection(image) {
    if (image.classList.contains("selected")) {
      image.classList.remove("selected");
      image.style.border = "";
      selectedImageInfo.textContent = "";
    } else {
      images.forEach(function (otherImage) {
        otherImage.classList.remove("selected");
        otherImage.style.border = "";
      });
      image.classList.add("selected");
      image.style.border = "2px solid #FF6CC4";
      for (const [key, value] of map_priceObject) {
        if ( key == image.id){
            if ( value == 0 ){
                selectedImageInfo.textContent = "";
                selectedImageInfo.appendChild(inputElement);
                break;
            }
            selectedImageInfo.textContent = `値段: ${value}￥`;
            break;
        }
      }
      
    }
  }
  

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

  const title1 = document.getElementById("title1");
  const title2 = document.getElementById("title2");
  const group1 = document.querySelector(".group1");
  const group2 = document.querySelector(".group2");
  const images = document.querySelectorAll("img");
  const selectedImageInfo = document.getElementById("selectedImageInfo");

  // input要素を作成
  const inputElement = document.createElement('input');
  inputElement.type = 'text';
  inputElement.placeholder = "(例) B3 / 縦 〇cm、横 〇cm など  ";
  inputElement.style.width = '500px';

  
  function initializeImageSelection() {
    title1.addEventListener("click", function () {
      group1.style.display = "flex";
      group2.style.display = "none";
      if (title1.classList.contains("selected")) {
        ;
      } else {
        title1.classList.add("selected");
        title2.classList.remove("selected");
      }

      images.forEach(function (image) {
        if (image === title2) {
          if (title1.classList.contains("selected")) {
            image.classList.add("grayed-out");
          } else {
            image.classList.remove("grayed-out");
          }
        } else {
          image.classList.remove("grayed-out");
        }
      });
    });
  
    title2.addEventListener("click", function () {
      group1.style.display = "none";
      group2.style.display = "flex";
      if (title2.classList.contains("selected")) {
        ;
      } else {
        title1.classList.remove("selected");
        title2.classList.add("selected");
      }

      images.forEach(function (image) {
        if (image === title1) {
          if (title2.classList.contains("selected")) {
            image.classList.add("grayed-out");
          } else {
            image.classList.remove("grayed-out");
          }
        } else {
          image.classList.remove("grayed-out");
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