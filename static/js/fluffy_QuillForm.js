// function updateDivContent(divElem, inputContent) {
//     divElem.appendChild(inputContent);
//   }
  
//   // <div class="ql-editor">要素を取得
//   const qlEditorElement = document.querySelector('.ql-editor');
//   const divUserExampleForm = document.getElementById("input_user_example_form");


//   // MutationObserverの設定
// const observer = new MutationObserver(function(mutationsList, observer) {
//     // <div>以下の要素をまるまるコピー
//     var copiedElement = qlEditorElement.cloneNode(true);
//     divUserExampleForm.innerHTML="";
//     updateDivContent(divUserExampleForm, copiedElement);
//   });


//   // 監視の開始
// observer.observe(qlEditorElement, { childList: true, subtree: true });
// qlEditorElement.addEventListener('input', function() {
//     var copiedElement = qlEditorElement.cloneNode(true);
//     divUserExampleForm.innerHTML="";
//     updateDivContent(divUserExampleForm, copiedElement);
//   });