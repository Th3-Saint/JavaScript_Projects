'use strict';
const modal = document.querySelector('.modal');
const btnCloseModal = document.querySelector('.close-modal');
const bntsOpenModal = document.querySelectorAll('.show-modal');
const overLay = document.querySelector('.overlay');


const openModal = function () {
    modal.classList.remove('hidden');
    overLay.classList.remove('hidden');

}

const closeModal = function () {
    modal.classList.add('hidden');
    overLay.classList.add('hidden');

}
for (let i = 0; i < bntsOpenModal.length; i++) {

    bntsOpenModal[i].addEventListener('click', openModal);
    btnCloseModal.addEventListener('click', closeModal);
    overLay.addEventListener('click', closeModal);

    document.addEventListener('keydown', function(e) {
        if (e.key === "Escape" && !modal.classList.contains('hidden'))
                closeModal();
    }
)
}