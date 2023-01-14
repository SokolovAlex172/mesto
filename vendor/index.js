let pupupElement = document.querySelector('.popup');
let closePopup = pupupElement.querySelector('.popup__close');
let openPupup = document.querySelector('.profile__edit');



openPupup.addEventListener('click', () => {
    pupupElement.classList.add('popup_opened');
});

closePopup.addEventListener('click', () => {
    pupupElement.classList.remove('popup_opened');
});



let formElement = document.querySelector('.form');

let nameInput = formElement.querySelector('.form__field-name');
let jobInput = formElement.querySelector('.form__field-job');

function handleFormSubmit (evt) {
    evt.preventDefault();
    
    let nameText = nameInput.value;
    let jobText = jobInput.value;

    let nameProfile = document.querySelector('.profile__text-name');
    let jobProfile = document.querySelector('.profile__text-job')

    nameProfile.textContent = nameText; 
    jobProfile.textContent = jobText;


    pupupElement.classList.remove("popup_opened");
}

formElement.addEventListener('submit', handleFormSubmit); 