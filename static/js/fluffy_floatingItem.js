const buttonDeleteColorItem1 = document.getElementById('delete_color_1');
const buttonDeleteColorItem2 = document.getElementById('delete_color_2');
const buttonDeleteColorItem3 = document.getElementById('delete_color_3');
const buttonDeleteColorItem4 = document.getElementById('delete_color_4');
const buttonDeleteAllColorItems1 = document.getElementById('delete_Allcolors_1');
const buttonDeleteAllColorItems2 = document.getElementById('delete_Allcolors_2');
const buttonDeleteAllColorItems3 = document.getElementById('delete_Allcolors_3');
const buttonDeleteAllColorItems4 = document.getElementById('delete_Allcolors_4');


// フロート機能(カート、パレットなど)
function updateFloatingVisibility() {
    const cart = document.getElementById('cart');
    const materialPalette = document.getElementById('materialPalette');
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const scrollPosition = scrollTop + windowHeight * (3 / 5); // 画面下部から三分の一の高さ

    cart.style.display = scrollTop > 100 ? 'block' : 'none';


    const targetElement = document.getElementById('openColorRanking');
    const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
    const targetOffset = windowHeight / 5; // 画面の高さの三分の一

    materialPalette.style.display = (scrollPosition >= targetPosition - targetOffset) ? 'block' : 'none';

}

// ユーザーには見えないカート情報を初期化
function resetHiddenCart(cartItem, cartItemName, cartItemPrice) {
    cartItem.textContent = "";
    cartItemName.textContent = "";
    cartItemPrice.textContent = "";
}


// カートからイメージ削除
function removeImageFromDiv(contentId, divId) {
    const content = document.getElementById(contentId);
    const div = document.getElementById(divId);

    if (content && div && div.contains(content)) {
        div.removeChild(content);
    }
}


// パレットからカートへカラーItemを移すためのコンストラクタ
function cartMaterials(divname, imageobj1, imageobj2, imageobj3, imageobj4, text) {
    this.divname = divname;
    this.colorNameImage = [];
    this.text = text;
    if (imageobj1 != '') {
        this.imageobj1 = imageobj1.id;
        for (type of list_materialClassObject) {
            if (imageobj1.classList.contains(type)) {
                this.colorNameImage.push(document.getElementById(type));
                break;
            }
        }
    } else {
        this.imageobj1 = '';
    }
    if (imageobj2 != '') {
        this.imageobj2 = imageobj2.id;
        for (type of list_materialClassObject) {
            if (imageobj2.classList.contains(type)) {
                this.colorNameImage.push(document.getElementById(type));
                break;
            }
        }
    } else {
        this.imageobj2 = '';
    }
    if (imageobj3 != '') {
        this.imageobj3 = imageobj3.id;
        for (type of list_materialClassObject) {
            if (imageobj3.classList.contains(type)) {
                this.colorNameImage.push(document.getElementById(type));
                break;
            }
        }
    } else {
        this.imageobj3 = '';
    }
    if (imageobj4 != '') {
        this.imageobj4 = imageobj4.id;
        for (type of list_materialClassObject) {
            if (imageobj4.classList.contains(type)) {
                this.colorNameImage.push(document.getElementById(type));
                break;
            }
        }
    } else {
        this.imageobj4 = '';
    }

}

// カート追加関数 (カートオブジェクト, 追加ID名, 追加クラス名, 画像, スタート位置, アニメーション時間)
function addImageToCart(cartItem, cartID, cartClass, image, startPosition, animationDuration) {
    const copiedImage = image.cloneNode(true);
    copiedImage.id = cartID;
    copiedImage.classList.add(cartClass);
    copiedImage.classList.remove("btn-image");
    copiedImage.classList.remove("box-width100");
    copiedImage.classList.remove("box-width180");
    copiedImage.classList.remove("box-width300");
    copiedImage.classList.remove("box-width350");
    copiedImage.classList.remove("box-width400");
    copiedImage.classList.remove("margin-top-10");
    copiedImage.style.border = "";
    copiedImage.style.display = "block";
    cartItem.appendChild(copiedImage);

    copiedImage.style.position = 'relative';
    copiedImage.style.left = startPosition + 'px';
    copiedImage.style.transition = 'left ' + animationDuration + 'ms ease';

    setTimeout(function () {
        copiedImage.style.left = '0px';
    }, 0);
}


// パレット追加関数 (パレットオブジェクト, 追加ID名, 追加クラス名, 画像)
function addImageToPalette(paletteObj, addImageClass, image) {
    const copiedImage = image.cloneNode(true);

    for (const [key, value] of map_nightSingleImage) {
        if (key === copiedImage.id){
            copiedImage.src = value;
            copiedImage.classList.remove("box-width200");
            copiedImage.classList.add("box-width100");
            break;
        }
    }
    copiedImage.removeAttribute('id');
    copiedImage.classList.add(addImageClass);
    copiedImage.classList.add('select6_palette');
    copiedImage.classList.remove("margin-top-10");
    copiedImage.classList.remove("select6");
    copiedImage.style.border = "";
    copiedImage.style.display = "block";
    paletteObj.appendChild(copiedImage);
}


function deleteColorItem(){
    images.forEach(function (image) { // 全イメージ画像ループ
        // select4のクラスがついた画像は選択状態を解除し、選択ボーダーも取り除く。
        if (image.classList.contains("selected_6_palette")) {
            map_paletteImage.set(image.id, '');
            image.src = default_palette_src;
        }
      });
}

function deleteAllColorItems(){

    cartArray=['cart_item6-1', 'cart_item6-2', 'cart_item6-3', 'cart_item6-4'];

    images.forEach(function (image) { // 全イメージ画像ループ
        // select4のクラスがついた画像は選択状態を解除し、選択ボーダーも取り除く。
        if (image.classList.contains("select6_palette")) {
            map_paletteImage.set(image.id, '');
            image.src = default_palette_src;
        }
      });
      cartArray.forEach(cartDiv => {
        cartForColors = document.getElementById(cartDiv);
        cartForColors_name = document.getElementById(cartDiv + '_name');
        cartForColors_price = document.getElementById(cartDiv + '_price');
        cartForColors_multiple = document.getElementById(cartDiv + '_multiple');
        cartForColors.innerHTML = '';
        cartForColors_price.textContent = '';
        cartForColors_multiple.innerHTML = '';
      });
        
}


buttonDeleteColorItem1.addEventListener('click', deleteColorItem);
buttonDeleteColorItem2.addEventListener('click', deleteColorItem);
buttonDeleteColorItem3.addEventListener('click', deleteColorItem);
buttonDeleteColorItem4.addEventListener('click', deleteColorItem);

buttonDeleteAllColorItems1.addEventListener('click', deleteAllColorItems);
buttonDeleteAllColorItems2.addEventListener('click', deleteAllColorItems);
buttonDeleteAllColorItems3.addEventListener('click', deleteAllColorItems);
buttonDeleteAllColorItems4.addEventListener('click', deleteAllColorItems);

// 初期化関数を呼び出して画像の選択機能を有効にする
initializeImageSelection();
window.addEventListener('scroll', updateFloatingVisibility);