let pupupElement = document.querySelector('.popup');
let closePopup = pupupElement.querySelector('.popup__close');
let openPupup = document.querySelector('.profile__edit');



openPupup.addEventListener('click', () => {
    pupupElement.classList.add('popup_opened');
});

closePopup.addEventListener('click', () => {
    pupupElement.classList.remove('popup_opened');
});



let formElement = document.forms['form-popup'];

let nameInput = formElement.querySelector('.form__field-name');
let jobInput = formElement.querySelector('.form__field-job');

let nameProfile = document.querySelector('.profile__text-name');
let jobProfile = document.querySelector('.profile__text-job')

function handleFormSubmit (evt) {
    evt.preventDefault();
    
    let nameText = nameInput.value;
    let jobText = jobInput.value;

    nameProfile.textContent = nameText; 
    jobProfile.textContent = jobText;

}
function handleFormSubmitSave (evt) {
    evt.preventDefault();
    pupupElement.classList.remove("popup_opened");
}

formElement.addEventListener('submit', handleFormSubmit); 
formElement.addEventListener('submit', handleFormSubmitSave); 