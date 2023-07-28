const buttonDeleteColorItem1 = document.getElementById('delete_color_1');
const buttonDeleteColorItem2 = document.getElementById('delete_color_2');
const buttonDeleteColorItem3 = document.getElementById('delete_color_3');
const buttonDeleteColorItem4 = document.getElementById('delete_color_4');
const buttonDeleteUserDecoImage = document.getElementById('delete_deco');
const buttonDeleteAllColorItems1 = document.getElementById('delete_Allcolors_1');
const buttonDeleteAllColorItems2 = document.getElementById('delete_Allcolors_2');
const buttonDeleteAllColorItems3 = document.getElementById('delete_Allcolors_3');
const buttonDeleteAllColorItems4 = document.getElementById('delete_Allcolors_4');
const summary_price = document.getElementById('cart_summary_price');
const list_cartPriceList = ['cart_item1_price', 'cart_item2_price', 'cart_item3_price', 'cart_itemChara_price', 'cart_item4_price',
    'cart_item5-1-1_price', 'cart_item5-1-2_price', 'cart_item5-1-3_price', 'cart_item5-1-4_price', 'cart_item5-1-5_price', 'cart_item5-1-6_price', 'cart_item5-2_price', 'cart_item5-2_inputUserPartsSet_price',
    'cart_item5-3-1_price', 'cart_item5-3-2_price', 'cart_item5-3-3_price', 'cart_item5-4_price', 'cart_item5-5-1_price', 'cart_item5-5-2_price',
    'cart_item5-5-3_price', 'cart_item5-5-4_price', 'cart_item5-5-5_price', 'cart_item5-5-6_price', 'cart_item5-18_price', 'cart_item5-19_price',
    'cart_item5-20_price', 'cart_item6-1_price', 'cart_item6-2_price', 'cart_item6-3_price', 'cart_item6-4_price', 'cart_item7-1_price', 'cart_item7-2_price', 'cart_item8-1_price','cart_item8-2_price','cart_item8-3_price','cart_item8-4_price','cart_item8-5_price',];

const container = document.getElementById("touchable_text");
const container_paletteDecoMain = document.getElementById("palette_DecoMain");
container.addEventListener("click", placeImage);
var user_decoList = [];
var user_decoListOnlyOne = [];
var user_decoALLList = [];
const cancelPutImage = document.getElementById('cancelPutImage');

const cartPartsName = document.getElementById("cart_item5-2_PartsName");
const cartPartsSetName = document.getElementById("cart_item5-2_PartsSetName");

const map_partsName = new Map([
    ['select5_decoParts2-1-1', 'ハート1'],
    ['select5_decoParts2-1-2', 'ハート2'],
    ['select5_decoParts2-1-3', '星1'],
    ['select5_decoParts2-1-4', '星2'],
    ['select5_decoParts2-1-5', '肉球'],
    ['select5_decoParts2-1-6', 'C'],
    ['select5_decoParts2-2-1', 'ダイヤ'],
    ['select5_decoParts2-2-2', 'リボン'],
    ['select5_decoParts2-2-3', 'バラ'],
    ['select5_decoParts2-2-4', '王冠'],
    ['select5_decoParts2-2-5', 'いちご'],
    ['select5_decoParts2-2-6', '魚の骨'],
    ['select5_decoParts2-3-1', '指定パーツ'],
    ['select5_userInputParts', '持込印刷パーツ'],
    ['select5_decoParts2-5-1', '天使 羽'],
    ['select5_decoParts2-5-2', '悪魔 羽1'],
    ['select5_decoParts2-5-3', '悪魔 羽2'],
    ['select5_decoParts2-5-4', '猫耳 シンプル'],
    ['select5_decoParts2-5-5', '犬耳 シンプル'],
    ['select5_decoParts2-6-1', 'うさ耳1'],
    ['select5_decoParts2-6-2', 'うさ耳2'],
    ['select5_decoParts2-6-3', 'うさ耳3'],
    ['select5_decoParts2-6-4', '猫耳1'],
    ['select5_decoParts2-6-5', '猫耳2'],
    ['select5_decoParts2-6-6', '犬耳1'],
    ['select5_decoParts2-6-7', '犬耳2'],
    ['select5_decoParts2-6-8', 'クマ耳1'],
    ['select5_decoParts2-6-9', 'クマ耳2'],
    ['select5_decoParts2-6-10', 'クマ耳3'],
    ['select5_decoParts2-7-1', '天使セット'],
    ['select5_decoParts2-7-2', '悪魔セット1'],
    ['select5_decoParts2-7-3', '悪魔セット2'],
    ['select5_decoParts2-7-4', '猫耳セット シンプル'],
    ['select5_decoParts2-7-5', '犬耳セット シンプル'],
    ['select5_decoParts2-8-1', 'うさ耳セット1'],
    ['select5_decoParts2-8-2', 'うさ耳セット2'],
    ['select5_decoParts2-8-3', 'うさ耳セット3'],
    ['select5_decoParts2-8-4', '猫耳セット1'],
    ['select5_decoParts2-8-5', '猫耳セット2'],
    ['select5_decoParts2-8-6', '犬耳セット1'],
    ['select5_decoParts2-8-7', '犬耳セット2'],
    ['select5_decoParts2-8-8', 'クマ耳セット1'],
    ['select5_decoParts2-8-9', 'クマ耳セット2'],
    ['select5_decoParts2-8-10', 'クマ耳セット3'],
]);


// パレットに画像置く
function placeImage(event) {

    selectedPaletteImage = '';
    var isOnlyOne = false;
    images.forEach(function (otherImage) { // すべての画像をループ
        if (otherImage.classList.contains("selected_5_decoParts")) { // 現在選択されているパレットImageを検索
            if (otherImage.classList.contains("onlyOneSelection")) {
                selectedPaletteImage = '';
            } else {
                selectedPaletteImage = otherImage;
                if (otherImage.classList.contains("select5_decoPartsOnlyOneSelectionDivided")) {
                    isOnlyOne = true;
                }
            }

        }
    });
    if (selectedPaletteImage != '') {
        copiedPartsImage = selectedPaletteImage.cloneNode(true);
        copiedPartsImage.style.position = "absolute";

        var rect = container.getBoundingClientRect();
        var x = event.clientX - rect.left;
        var y = event.clientY - rect.top;

        copiedPartsImage.style.left = x + "px";
        copiedPartsImage.style.top = y + "px";
        copiedPartsImage.style.border = "";
        copiedPartsImage.classList.remove('box-width100');
        copiedPartsImage.classList.remove('box-width60');
        copiedPartsImage.classList.remove('box-width45');
        copiedPartsImage.classList.remove('selected_5_decoParts');
        copiedPartsImage.classList.remove('select5_decoParts');
        copiedPartsImage.classList.remove('select5_decoPartsOnlyOneSelectionDivided');
        copiedPartsImage.classList.add('decoPreviewImageNormal');
        copiedPartsImage.classList.add('decoPreviewImagePosition');
        if (isOnlyOne) {
            copiedPartsImage.classList.add('isOnlyOne');
        }

        setID = 'userDecoID_' + (user_decoALLList.length + 1).toString();
        if (!isOnlyOne) {
            if (window.user_decoList.length <= 7) {
                window.user_decoList.push(setID);
                calcDecoPartsAddPrice(copiedPartsImage, setID);
                copiedPartsImage.id = setID;
                container.appendChild(copiedPartsImage);
                // console.log("x:" + x + ", y:" + y);

            } else {
                cancelPutImage.style.display = 'block';
            }
            window.user_decoALLList.push(setID);
        } else {
            setID = setID + "_onlyone";
            if (window.user_decoListOnlyOne.length < currentPartsSetLength) {
                window.user_decoListOnlyOne.push(setID);
                copiedPartsImage.id = setID;
                container.appendChild(copiedPartsImage);
                window.user_decoALLList.push(setID);
            }
        }


        if (user_decoList.length > 0) {
            parts_frame_Container.classList.remove("hidden");
        }
        console.log("---------------------");
        console.log("ALL");
        console.log(user_decoALLList);
        console.log("normal");
        console.log(user_decoList);
        console.log("Only");
        console.log(user_decoListOnlyOne);
        console.log("---------------------");

    }
}


function partsTextUpdate(divElem, partsName) {
    var parts_currentText = divElem.textContent;
    if (parts_currentText != '') {
        divElem.textContent = parts_currentText + ',' + partsName;
    } else {
        divElem.textContent = partsName;
    }
}

function calcDecoPartsSubtractPrice(image, imageID) {
    calc_price = 0;
    if (cartItem5_2Price.textContent != '') {
        calc_price = parseInt(cartItem5_2Price.textContent);
    }
    if (image) {

        if (image.classList.contains('decoParts99')) {
            calc_price += -99;
        } else if (image.classList.contains('decoParts120')) {
            calc_price += -120;
        } else if (image.classList.contains('decoParts210')) {
            calc_price += -210;
        } else if (image.classList.contains('decoParts299')) {
            calc_price += -299;
        } else if (image.classList.contains('decoParts399')) {
            calc_price += -399;
        } else if (image.classList.contains('decoParts599')) {
            calc_price += -599;
        } else if (image.classList.contains('decoParts720')) {
            calc_price += -720;
        } else if (image.classList.contains('decoParts980')) {
            calc_price += -980;
        }
        cartItem5_2Price.textContent = calc_price;

        cartImage = document.getElementById(imageID);
        cartImage.parentElement.removeChild(cartImage);
    }
    console.log("price:" + calc_price);

}

function calcDecoPartsAddPrice(image, setID) {
    calc_price = 0;
    var selectedPartsName = '';

    for (const [key, value] of map_partsName) {
        if (key === image.id) {
            selectedPartsName = value;
        }
    }
    if (cartItem5_2Price.textContent != '') {
        calc_price = parseInt(cartItem5_2Price.textContent);
    }
    if (image.classList.contains('decoParts99')) {
        parentImage = document.getElementById('imageDeco_2-1');
        addImageToCart('cart_item5-2', 'cart_' + setID, 'cart-image5', parentImage, startPosition, animationDuration);
        calc_price += 99;
        cartItem5_2Price.textContent = calc_price;
        partsTextUpdate(cartPartsName, selectedPartsName);
    } else if (image.classList.contains('decoParts120')) {
        parentImage = document.getElementById('imageDeco_2-2');
        addImageToCart('cart_item5-2', 'cart_' + setID, 'cart-image5', parentImage, startPosition, animationDuration);
        calc_price += 120;
        cartItem5_2Price.textContent = calc_price;
        partsTextUpdate(cartPartsName, selectedPartsName);
    } else if (image.classList.contains('decoParts210')) {
        parentImage = document.getElementById('imageDeco_2-3');
        addImageToCart('cart_item5-2', 'cart_' + setID, 'cart-image5', parentImage, startPosition, animationDuration);
        calc_price += 210;
        cartItem5_2Price.textContent = calc_price;
        partsTextUpdate(cartPartsName, selectedPartsName);
    } else if (image.classList.contains('decoParts299')) {
        parentImage = document.getElementById('imageDeco_2-4');
        addImageToCart('cart_item5-2', 'cart_' + setID, 'cart-image5', parentImage, startPosition, animationDuration);
        calc_price += 299;
        cartItem5_2Price.textContent = calc_price;
        partsTextUpdate(cartPartsName, selectedPartsName);
    } else if (image.classList.contains('decoParts399')) {
        parentImage = document.getElementById('imageDeco_2-5');
        addImageToCart('cart_item5-2', 'cart_' + setID, 'cart-image5', parentImage, startPosition, animationDuration);
        calc_price += 399;
        cartItem5_2Price.textContent = calc_price;
        partsTextUpdate(cartPartsSetName, selectedPartsName);
    } else if (image.classList.contains('decoParts599')) {
        parentImage = document.getElementById('imageDeco_2-6');
        addImageToCart('cart_item5-2', 'cart_' + setID, 'cart-image5', parentImage, startPosition, animationDuration);
        calc_price += 599;
        cartItem5_2Price.textContent = calc_price;
        partsTextUpdate(cartPartsSetName, selectedPartsName);
    } else if (image.classList.contains('decoParts720')) {
        parentImage = document.getElementById('imageDeco_2-7');
        addImageToCart('cart_item5-2', 'cart_' + setID, 'cart-image5', parentImage, startPosition, animationDuration);
        calc_price += 720;
        cartItem5_2Price.textContent = calc_price;
        partsTextUpdate(cartPartsSetName, selectedPartsName);
    } else if (image.classList.contains('decoParts980')) {
        parentImage = document.getElementById('imageDeco_2-8');
        addImageToCart('cart_item5-2', 'cart_' + setID, 'cart-image5', parentImage, startPosition, animationDuration);
        calc_price += 980;
        cartItem5_2Price.textContent = calc_price;
        partsTextUpdate(cartPartsSetName, selectedPartsName);
    }
}

function customUserImage(image) {
    lastUserImageID = user_decoALLList.slice(-1)[0];
    customImage = document.getElementById(lastUserImageID);
    if (customImage.classList.contains("isOnlyOne")) {
        if (image.id == 'changeSize_S') {
            customImage.classList.remove('decoPreviewImageNormal');
            customImage.classList.remove('decoPreviewImageSmall');
            customImage.classList.remove('decoPreviewImageLarge');
            customImage.classList.remove('decoPreviewImageXLarge');
            customImage.classList.add('decoPreviewImageNormal');
        } else if (image.id == 'changeSize_M') {
            customImage.classList.remove('decoPreviewImageNormal');
            customImage.classList.remove('decoPreviewImageSmall');
            customImage.classList.remove('decoPreviewImageLarge');
            customImage.classList.remove('decoPreviewImageXLarge');
            customImage.classList.add('decoPreviewImageLarge');
        } else if (image.id == 'changeSize_L') {
            customImage.classList.remove('decoPreviewImageNormal');
            customImage.classList.remove('decoPreviewImageSmall');
            customImage.classList.remove('decoPreviewImageLarge');
            customImage.classList.remove('decoPreviewImageXLarge');
            customImage.classList.add('decoPreviewImageXLarge');
        } else {
            ;
        }

    } else {
        if (image.id == 'changeSize_S') {
            customImage.classList.remove('decoPreviewImageNormal');
            customImage.classList.remove('decoPreviewImageSmall');
            customImage.classList.remove('decoPreviewImageLarge');
            customImage.classList.add('decoPreviewImageSmall');
        } else if (image.id == 'changeSize_M') {
            customImage.classList.remove('decoPreviewImageNormal');
            customImage.classList.remove('decoPreviewImageSmall');
            customImage.classList.remove('decoPreviewImageLarge');
            customImage.classList.add('decoPreviewImageNormal');
        } else if (image.id == 'changeSize_L') {
            customImage.classList.remove('decoPreviewImageNormal');
            customImage.classList.remove('decoPreviewImageSmall');
            customImage.classList.remove('decoPreviewImageLarge');
            customImage.classList.add('decoPreviewImageLarge');
        } else {
            ;
        }

    }

    const currentRotation = parseInt(customImage.dataset.rotation) || 0;
    var newRotation = currentRotation;
    if (image.id == 'changeRotate_right') {
        newRotation += 15;
        if (newRotation == 360) {
            newRotation = 0;
        }

        customImage.dataset.rotation = newRotation;
        customImage.style.transform = `rotate(${newRotation}deg) translate(-50%, -50%)`;
    } else if (image.id == 'changeRotate_left') {
        newRotation += -15;
        if (newRotation == -360) {
            newRotation = 0;
        }

        customImage.dataset.rotation = newRotation;
        customImage.style.transform = `rotate(${newRotation}deg) translate(-50%, -50%)`;
    } else {
        ;
    }
}

// フロート機能(カート、パレットなど)
function updateFloatingVisibility() {
    const cart = document.getElementById('cart');
    const materialPalette = document.getElementById('materialPalette');
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const scrollPosition = scrollTop + windowHeight * (3 / 5); // 画面下部から三分の一の高さ

    cart.style.display = scrollTop > 100 ? 'block' : 'none';

    if (controll_step == '1st' || controll_step == '4th') {
        materialPalette.style.display = 'none';
    } else {
        const targetElement = document.getElementById('decoPartsContainer');
        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
        const targetOffset = windowHeight / 5; // 画面の高さの三分の一

        materialPalette.style.display = (scrollPosition >= targetPosition - targetOffset) ? 'block' : 'none';

        // カーソル追従Image
        document.getElementById('corsor_decoPreview').style.display = (scrollPosition >= targetPosition - targetOffset) ? 'block' : 'none';
    }


}

function resetAllCartItem() {
    resetHiddenCart(cartItem1, cartItem1Name, cartItem1Price);
    cartItem1ExtText.textContent = "";
    resetHiddenCart(cartItem2, cartItem2Name, cartItem2Price);
    resetHiddenCart(cartItem3, cartItem3Name, cartItem3Price);
    resetHiddenCart(cartItem4, cartItem4Name, cartItem4Price);
    cartItem4SmallFontText.textContent = "";
    cartItem4ExtText.textContent = "";
    inputFontElement.value = "";
    inputSmallCharaFontElement.value = "";
    document.getElementById("cart_item5-1-1").textContent = "";
    document.getElementById("cart_item5-1-1_name").textContent = "";
    document.getElementById("cart_item5-1-1_price").textContent = "";
    radio_btn_tuya_decoON.checked = false;
    radio_btn_tuya_decoOFF.checked = true;
    document.getElementById("cart_item5-1-2").textContent = "";
    document.getElementById("cart_item5-1-2_name").textContent = "";
    document.getElementById("cart_item5-1-2_price").textContent = "";
    document.getElementById("cart_item5-1-2_extText").textContent = "";
    input_charaKatanuki.value = "";
    charaKatanukiDecoDiv.classList.add("hidden");
    radio_btn_charaKatanuki_decoON.checked = false;
    radio_btn_charaKatanuki_decoOFF.checked = true;

    document.getElementById("cart_item5-1-3").textContent = "";
    document.getElementById("cart_item5-1-3_name").textContent = "";
    document.getElementById("cart_item5-1-3_price").textContent = "";
    document.getElementById("cart_item5-1-3_extText").textContent = "";
    input_partsKatanuki.value = "";
    partsKatanukiDecoDiv.classList.add("hidden");
    radio_btn_partsKatanuki_decoON.checked = false;
    radio_btn_partsKatanuki_decoOFF.checked = true;

    document.getElementById("cart_item5-1-4").textContent = "";
    document.getElementById("cart_item5-1-4_name").textContent = "";
    document.getElementById("cart_item5-1-4_price").textContent = "";
    document.getElementById("cart_item5-1-4_extText").textContent = "";
    if (document.getElementById('maruKatanukiSelectionMenu')) {
        maruKatanukiDecoDiv.removeChild(document.getElementById('maruKatanukiSelectionMenu'));
    }
    radio_btn_maruKatanuki_decoON.checked = false;
    radio_btn_maruKatanuki_decoOFF.checked = true;

    document.getElementById("cart_item5-1-5").textContent = "";
    document.getElementById("cart_item5-1-5_name").textContent = "";
    document.getElementById("cart_item5-1-5_price").textContent = "";
    document.getElementById("cart_item5-1-5_extText").textContent = "";
    if (document.getElementById('dakutenSelectionMenu')) {
        dakutenDecoDiv.removeChild(document.getElementById('dakutenSelectionMenu'));
    }
    radio_btn_dakuten_decoON.checked = false;
    radio_btn_dakuten_decoOFF.checked = true;

    document.getElementById("cart_item5-1-6").textContent = "";
    document.getElementById("cart_item5-1-6_name").textContent = "";
    document.getElementById("cart_item5-1-6_price").textContent = "";
    radio_btn_choko_decoON.checked = false;
    radio_btn_choko_decoOFF.checked = true;

    document.getElementById("cart_item5-2").textContent = "";
    document.getElementById("cart_item5-2_price").textContent = "";
    document.getElementById("cart_item5-2_PartsName").textContent = "";
    document.getElementById("cart_item5-2_PartsSetName").textContent = "";
    document.getElementById("cart_item5-2_inputUserParts").textContent = "";
    document.getElementById("cart_item5-2_inputUserPartsSet").textContent = "";
    document.getElementById("cart_item5-2_inputUserPartsSet_extText").textContent = "";
    document.getElementById("cart_item5-2_inputUserPartsSet_price").textContent = "";
    inputPartsName.value = "";
    inputSetPartsName.value = "";
    inputSetPartsExtText.value = "";
    inputSetPartsExtText.style.display = 'none';

    document.getElementById("cart_item5-3-1").textContent = "";
    document.getElementById("cart_item5-3-1_name").textContent = "";
    document.getElementById("cart_item5-3-1_price").textContent = "";
    radio_btn_nametitle_frameON.checked = false;
    radio_btn_nametitle_frameOFF.checked = true;

    document.getElementById("cart_item5-3-2").textContent = "";
    document.getElementById("cart_item5-3-2_name").textContent = "";
    document.getElementById("cart_item5-3-2_price").textContent = "";
    radio_btn_catchphrase_frameON.checked = false;
    radio_btn_catchphrase_frameOFF.checked = true;

    document.getElementById("cart_item5-3-3").textContent = "";
    document.getElementById("cart_item5-3-3_name").textContent = "";
    document.getElementById("cart_item5-3-3_price").textContent = "";
    radio_btn_parts_frameON.checked = false;
    radio_btn_parts_frameOFF.checked = true;

    document.getElementById("cart_item5-4").textContent = "";
    document.getElementById("cart_item5-4_name").textContent = "";
    document.getElementById("cart_item5-4_price").textContent = "";

    document.getElementById("cart_item5-5-1").textContent = "";
    document.getElementById("cart_item5-5-1_name").textContent = "";
    document.getElementById("cart_item5-5-1_price").textContent = "";
    document.getElementById('ribbon_on').checked = false;

    document.getElementById("cart_item5-5-2").textContent = "";
    document.getElementById("cart_item5-5-2_name").textContent = "";
    document.getElementById("cart_item5-5-2_price").textContent = "";
    document.getElementById('braided_on').checked = false;

    document.getElementById("cart_item5-5-3").textContent = "";
    document.getElementById("cart_item5-5-3_name").textContent = "";
    document.getElementById("cart_item5-5-3_price").textContent = "";
    document.getElementById('whip_on').checked = false;

    document.getElementById("cart_item5-5-4").textContent = "";
    document.getElementById("cart_item5-5-4_name").textContent = "";
    document.getElementById("cart_item5-5-4_price").textContent = "";
    document.getElementById('chain_on').checked = false;

    document.getElementById("cart_item5-5-5").textContent = "";
    document.getElementById("cart_item5-5-5_name").textContent = "";
    document.getElementById("cart_item5-5-5_price").textContent = "";
    document.getElementById('lace_on').checked = false;

    document.getElementById("cart_item5-5-6").textContent = "";
    document.getElementById("cart_item5-5-6_name").textContent = "";
    document.getElementById("cart_item5-5-6_price").textContent = "";
    document.getElementById('fuwadeco_on').checked = false;

    resetHiddenCart(cartItem7_1, cartItem7_1Name, cartItem7_1Price);
    resetHiddenCart(cartItem7_2, cartItem7_2Name, cartItem7_2Price);
    resetHiddenCart(cartItem8_1, cartItem8_1Name, cartItem8_1Price);
    resetHiddenCart(cartItem8_2, cartItem8_2Name, cartItem8_2Price);
    resetHiddenCart(cartItem8_3, cartItem8_3Name, cartItem8_3Price);
    resetHiddenCart(cartItem8_4, cartItem8_4Name, cartItem8_4Price);
    resetHiddenCart(cartItem8_5, cartItem8_5Name, cartItem8_5Price);


    var divElement = document.getElementById('decoPartsOnlyOneSelectionDiv');
    images.forEach(function (image) {
        if (image.classList.contains("select2")) { // select2のクラスがついた画像は選択状態を解除し、選択ボーダーも取り除く。グレーアウトはすべての画像から取り除く
            image.classList.remove("selected_2");
            image.style.border = "";
        } else if (image.classList.contains("select3")) { // select2のクラスがついた画像は選択状態を解除し、選択ボーダーも取り除く。グレーアウトはすべての画像から取り除く
            image.classList.remove("selected_3");
            image.style.border = "";
        } else if (image.classList.contains("select4")) { // select2のクラスがついた画像は選択状態を解除し、選択ボーダーも取り除く。グレーアウトはすべての画像から取り除く
            image.classList.remove("selected_4");
            image.style.border = "";
        } else if (image.classList.contains("selected_5_decoParts")) { // クリックした画像がすでに選択されている場合
            image.classList.remove("selected_5_decoParts");
            image.style.border = "";
        } else if (image.classList.contains("selected_5_decoPartsOnlyOneSelection")) { // クリックした画像がすでに選択されている場合
            if (divElement) {
                divElement.remove();
            }
            image.classList.remove("selected_5_decoPartsOnlyOneSelection");
            image.style.border = "";
        } else if (image.classList.contains("selected_5_4")) { // クリックした画像がすでに選択されている場合
            image.classList.remove("selected_5_4");
            image.style.border = "";
        } else if (image.classList.contains("selected_7_1")) { // クリックした画像がすでに選択されている場合
            image.classList.remove("selected_7_1");
            image.style.border = "";
        } else if (image.classList.contains("selected_7_2")) { // クリックした画像がすでに選択されている場合
            image.classList.remove("selected_7_2");
            image.style.border = "";
        } else if (image.classList.contains("selected_8_1")) { // クリックした画像がすでに選択されている場合
            image.classList.remove("selected_8_1");
            image.style.border = "";
        } else if (image.classList.contains("selected_8_2")) { // クリックした画像がすでに選択されている場合
            image.classList.remove("selected_8_2");
            image.style.border = "";
        }
    });
    document.getElementById("touchable_text").textContent = "";

}

// ユーザーには見えないカート情報を初期化
function resetHiddenCart(cartItem, cartItemName, cartItemPrice) {
    cartItem.textContent = "";
    cartItemName.textContent = "";
    cartItemPrice.textContent = "";
}


// カートからイメージ削除 引数1 消したい要素ID, 親の要素ID
function removeElemFromDiv(contentId, divId) {
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
                if (is_name) {
                    if (is_half) {
                        this.colorNameImage.push(document.getElementById(type + '_half'));
                    } else {
                        this.colorNameImage.push(document.getElementById(type));
                    }

                } else {
                    this.colorNameImage.push(document.getElementById(type + '_free'));
                }


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
                if (is_name) {
                    if (is_half) {
                        this.colorNameImage.push(document.getElementById(type + '_half'));
                    } else {
                        this.colorNameImage.push(document.getElementById(type));
                    }

                } else {
                    this.colorNameImage.push(document.getElementById(type + '_free'));
                }
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
                if (is_name) {
                    if (is_half) {
                        this.colorNameImage.push(document.getElementById(type + '_half'));
                    } else {
                        this.colorNameImage.push(document.getElementById(type));
                    }

                } else {
                    this.colorNameImage.push(document.getElementById(type + '_free'));
                }
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
                if (is_name) {
                    if (is_half) {
                        this.colorNameImage.push(document.getElementById(type + '_half'));
                    } else {
                        this.colorNameImage.push(document.getElementById(type));
                    }

                } else {
                    this.colorNameImage.push(document.getElementById(type + '_free'));
                }
                break;
            }
        }
    } else {
        this.imageobj4 = '';
    }

}

// カート追加関数 (カートオブジェクト, 追加ID名, 追加クラス名, 画像, スタート位置, アニメーション時間)
function addImageToCart(cartItem, cartID, cartClass, image, startPosition, animationDuration) {
    cartItemDiv = document.getElementById(cartItem);
    copiedImage = image.cloneNode(true);
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
    cartItemDiv.appendChild(copiedImage);

    copiedImage.style.position = 'relative';
    copiedImage.style.left = startPosition + 'px';
    copiedImage.style.transition = 'left ' + animationDuration + 'ms ease';

    setTimeout(function () {
        copiedImage.style.left = '0px';
    }, 0);
}


// パレット追加関数 (パレットオブジェクト, 追加クラス名, 画像)
function addImageToPalette(paletteObj, addImageClass, image) {
    const copiedImage = image.cloneNode(true);

    for (const [key, value] of map_nightSingleImage) {
        if (key === copiedImage.id) {
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


function deleteColorItem() {
    images.forEach(function (image) { // 全イメージ画像ループ
        // select4のクラスがついた画像は選択状態を解除し、選択ボーダーも取り除く。
        if (image.classList.contains("selected_6_palette")) {
            map_paletteImage.set(image.id, '');

            if (image.id === 'select6_palette6_1' || image.id === 'select6_palette6_5' || image.id === 'select6_palette6_9' || image.id === 'select6_palette6_13') {
                image.src = default_palette_mozi_src;
            } else if (image.id === 'select6_palette6_2' || image.id === 'select6_palette6_6' || image.id === 'select6_palette6_10' || image.id === 'select6_palette6_14') {
                image.src = default_palette_frame1_src;
                if (!check_nametitle_frame) {
                    document.getElementById('select6_palette6_6').src = default_palette_frame1_src;
                    document.getElementById('select6_palette6_10').src = default_palette_frame1_src;
                }
                if (!check_catchphrase_frame) {
                    document.getElementById('select6_palette6_14').src = default_palette_frame1_src;
                }
            } else if (image.id === 'select6_palette6_3') {
                image.src = default_palette_frame2_src;
                document.getElementById('select6_palette6_7').src = default_palette_frame2_src;
                document.getElementById('select6_palette6_11').src = default_palette_frame2_src;
                document.getElementById('select6_palette6_15').src = default_palette_frame2_src;
            } else if (image.id === 'select6_palette6_4') {
                image.src = default_palette_outframe_src;
                document.getElementById('select6_palette6_8').src = default_palette_outframe_src;
                document.getElementById('select6_palette6_12').src = default_palette_outframe_src;
                document.getElementById('select6_palette6_16').src = default_palette_outframe_src;
            } else {
                ;
            }
        }
    });
}

function deleteAllColorItems() {

    cartArray = ['cart_item6-1', 'cart_item6-2', 'cart_item6-3', 'cart_item6-4'];

    images.forEach(function (image) { // 全イメージ画像ループ
        // select4のクラスがついた画像は選択状態を解除し、選択ボーダーも取り除く。
        if (image.classList.contains("select6_palette")) {
            map_paletteImage.set(image.id, '');
            if (image.id === 'select6_palette6_1' || image.id === 'select6_palette6_5' || image.id === 'select6_palette6_9' || image.id === 'select6_palette6_13') {
                image.src = default_palette_mozi_src;
            } else if (image.id === 'select6_palette6_2') {
                image.src = default_palette_frame1_src;
            } else if (image.id === 'select6_palette6_3') {
                image.src = default_palette_frame2_src;
            } else if (image.id === 'select6_palette6_4') {
                image.src = default_palette_outframe_src;
            }
        }
    });

    for (const [key, value] of map_paletteImage) {
        map_paletteImage.set(key, '');
    }
    document.getElementById('select6_palette6_6').src = default_palette_frame1_src;
    document.getElementById('select6_palette6_10').src = default_palette_frame1_src;
    document.getElementById('select6_palette6_14').src = default_palette_frame1_src;
    document.getElementById('select6_palette6_7').src = default_palette_frame2_src;
    document.getElementById('select6_palette6_11').src = default_palette_frame2_src;
    document.getElementById('select6_palette6_15').src = default_palette_frame2_src;
    document.getElementById('select6_palette6_8').src = default_palette_outframe_src;
    document.getElementById('select6_palette6_12').src = default_palette_outframe_src;
    document.getElementById('select6_palette6_16').src = default_palette_outframe_src;
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

function deleteUserDecoImage() {

    calc_price = 0;
    count = 0;

    var isDeleted = false;
    do {
        if (count == user_decoALLList.length) {
            break;
        }
        count += 1;

        lastUserImageID = window.user_decoALLList.slice(-1)[0];
        var image = document.getElementById(lastUserImageID);
        if (user_decoList.slice(-1)[0] == lastUserImageID) {

            let arr = cartPartsName.textContent.split(","); // 文字列をカンマで分割し、配列に格納する
            arr.pop(); // 配列の最後の要素を削除する
            let arrJoin = arr.join(",");
            cartPartsName.textContent = arrJoin;

            if (cartItem5_2Price.textContent != '') {
                calc_price = parseInt(cartItem5_2Price.textContent);
            }
            if (image) {

                calcDecoPartsSubtractPrice(image, 'cart_' + lastUserImageID);
                image.parentElement.removeChild(image);
                window.user_decoList.pop();
                cancelPutImage.style.display = 'none';
                isDeleted = true;
            }
            window.user_decoALLList.pop();
        } else {
            if (image) {
                image.parentElement.removeChild(image);
                window.user_decoListOnlyOne.pop();
                isDeleted = true;
            }
            window.user_decoALLList.pop();
        }
    } while (!isDeleted);


    if (user_decoList.length == 0) {
        parts_frame_Container.classList.add("hidden");
    }

    console.log("---------------------");
    console.log("ALL");
    console.log(user_decoALLList);
    console.log("normal");
    console.log(user_decoList);
    console.log("Only");
    console.log(user_decoListOnlyOne);
    console.log("---------------------");
}

function deleteUserDecoAllImage() {

    for (let image_id of window.user_decoListOnlyOne) {

        var deleteImage = document.getElementById(image_id);
        if (deleteImage) {
            deleteImage.parentElement.removeChild(deleteImage);
            var index = window.user_decoALLList.indexOf(image_id);
            window.user_decoALLList.splice(index, 1)
        }
    }

    window.user_decoListOnlyOne = [];
    console.log("deleted" + window.user_decoListOnlyOne);

    console.log("---------------------");
    console.log("ALL");
    console.log(user_decoALLList);
    console.log("normal");
    console.log(user_decoList);
    console.log("Only");
    console.log(user_decoListOnlyOne);
    console.log("---------------------");
}

function resetAllImages() {
    for (let image_id of window.user_decoListOnlyOne) {

        var deleteImage = document.getElementById(image_id);
        if (deleteImage) {
            deleteImage.parentElement.removeChild(deleteImage);
        }
    }

    for (let image_id of window.user_decoList) {

        var deleteImage = document.getElementById(image_id);
        if (deleteImage) {
            deleteImage.parentElement.removeChild(deleteImage);
        }
    }

    window.user_decoListOnlyOne = [];
    window.user_decoALLList = [];
    window.user_decoList = [];
}



function updateSummaryPrice() {
    let sum = 0;
    list_cartPriceList.forEach(function (priceDivID) {
        let price = document.getElementById(priceDivID).textContent;
        if (price != '') {
            sum += parseInt(document.getElementById(priceDivID).textContent);
        }

    });
    console.log('Price:' + sum.toString());
    summary_price.textContent = sum.toString();
}


// function showDiv(showDivName) {
//     var div = document.getElementById(showDivName);
//     div.style.display = "block";
//   }

document.getElementById("komozi_detail_link").addEventListener("click", function (event) {
    event.preventDefault(); // デフォルトのリンクの挙動をキャンセル
    modalDetailKomozi.style.display = 'block';
});

document.getElementById("dakutenParts_detail_link").addEventListener("click", function (event) {
    event.preventDefault(); // デフォルトのリンクの挙動をキャンセル
    modalDetailDakuten.style.display = 'block';
});

buttonCloseDetailKomozi.addEventListener('click', function () { modalClose(modalDetailKomozi); });
buttonCloseDetailDakutenParts.addEventListener('click', function () { modalClose(modalDetailDakuten); });

buttonDeleteColorItem1.addEventListener('click', deleteColorItem);
buttonDeleteColorItem2.addEventListener('click', deleteColorItem);
buttonDeleteColorItem3.addEventListener('click', deleteColorItem);
buttonDeleteColorItem4.addEventListener('click', deleteColorItem);
buttonDeleteUserDecoImage.addEventListener('click', deleteUserDecoImage);

buttonDeleteAllColorItems1.addEventListener('click', deleteAllColorItems);
buttonDeleteAllColorItems2.addEventListener('click', deleteAllColorItems);
buttonDeleteAllColorItems3.addEventListener('click', deleteAllColorItems);
buttonDeleteAllColorItems4.addEventListener('click', deleteAllColorItems);

// 初期化関数を呼び出して画像の選択機能を有効にする
window.addEventListener('scroll', updateFloatingVisibility);

function loopAnime(id, animationClassName, loopSec) {
    var loopImage = document.getElementById(id);

    function animate() {
        loopImage.classList.add(animationClassName);
        setTimeout(function () {
            loopImage.classList.remove(animationClassName);
            setTimeout(animate, loopSec);
        }, loopSec);
    }
    animate();
}

// ラジオボタンの要素を取得
const radioButtons = document.querySelectorAll('input[name="tab_item"]');
var is_name = true;
// ラジオボタンの変更イベントに対してリスナーを登録
radioButtons.forEach((radioButton) => {
    radioButton.addEventListener('change', function () {
        if (this.checked) {
            // チェックされたラジオボタンの処理
            const selectedTab = this.id;
            console.log(`選択されたタブ: ${selectedTab}`);
            if (selectedTab == 'nickname' || selectedTab == 'nametitle' || selectedTab == 'catchphrase') {
                onlyNameMaterial.forEach(function (material) {
                    material.classList.add("hidden");
                });
                is_name = false;
                updateMaterialImage();
            } else {
                onlyNameMaterial.forEach(function (material) {
                    material.classList.remove("hidden");
                });
                is_name = true;
                updateMaterialImage();
            }
        }
    });
});

loopAnime('PartsDisp1', 'purupuru', 1600);
loopAnime('PartsDisp2', 'purupuru', 1800);
loopAnime('PartsDisp3', 'purupuru', 2000);
loopAnime('PartsDisp4', 'purupuru', 2200);