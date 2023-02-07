// 팝업 display none
const findPassWordForm = document.querySelector('.ec-base-button');
const isModal = document.querySelector('.popup_bg');

function modal() {
  isModal.classList.toggle('active');
}

findPassWordForm.addEventListener('click', modal);
