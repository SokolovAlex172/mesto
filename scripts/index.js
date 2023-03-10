

const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEscape);

};

const openPopup = (popup) => {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEscape); 
};

function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
};


const popups = document.querySelectorAll('.popup')

popups.forEach((popup) => {
    popup.addEventListener('mousedown', (evt) => {
        if (evt.target.classList.contains('popup_opened')) {
            closePopup(popup)
        }
        if (evt.target.classList.contains('popup__close-image')) {
          closePopup(popup)
        }
    })
});

const popupElementEdit = document.querySelector('#popup-edit');
// const closePopupElementEdit = popupElementEdit.querySelector('#popup__close-edit');
// Если вы не против я оставлю этот участок кода в закомментированом виде
const openPopupElementEdit = document.querySelector('.profile__edit');



openPopupElementEdit.addEventListener('click', () => openPopup(popupElementEdit));
// closePopupElementEdit.addEventListener('mousedown', () => closePopup(popupElementEdit)); 
// Если вы не против я оставлю этот участок кода в закомментированом виде


//popup-place

const popupElementPlace = document.querySelector('#popup-place');
const openPopupElementPlace = document.querySelector('.profile__add');
// const closePopupElementPlace = popupElementPlace.querySelector('#popup__close-place');
// Если вы не против я оставлю этот участок кода в закомментированом виде

openPopupElementPlace.addEventListener('click', () => openPopup(popupElementPlace));
// closePopupElementPlace.addEventListener('mousedown', () => closePopup(popupElementPlace)); 
// Если вы не против я оставлю этот участок кода в закомментированом виде

//popup-image

const popupElementImage = document.querySelector('#popup-image');
// const closePopupElementImage = document.querySelector('#popup__close-image'); 
// Если вы не против я оставлю этот участок кода в закомментированом виде

// closePopupElementImage.addEventListener('mousedown',() => closePopup(popupElementImage)); 
// Если вы не против я оставлю этот участок кода в закомментированом виде

const formEdit = document.forms['form-popup'];
const nameInput = formEdit.querySelector('.form__input_type_name');
const jobInput = formEdit.querySelector('.form__input_type_job');
const nameProfile = document.querySelector('.profile__text-name');
const jobProfile = document.querySelector('.profile__text-job');

const handleProfileFormSubmit = (evt) => {
  evt.preventDefault();

  const nameText = nameInput.value;
  const jobText = jobInput.value;

  nameProfile.textContent = nameText;
  jobProfile.textContent = jobText;

  closePopup(popupElementEdit);
};

formEdit.addEventListener('submit', handleProfileFormSubmit);

const cardsContainer = document.querySelector('#places-card');

const getItemElement = ((link, name) => {
  const newItemElement = cardsContainer.content.cloneNode(true);

  const newItemName = newItemElement.querySelector('.places__info-title');
  newItemName.textContent = name;

  const newItemImage = newItemElement.querySelector('.places__image');
  newItemImage.src = link;
  newItemImage.alt = name;

  // Лайк
  newItemElement.querySelector('.places__like').addEventListener('click', (evt) => {
    evt.target.classList.toggle('places__like_active');
  });

  // Удаление карточки
  const deleteCard = newItemElement.querySelector('.places__delete');
  deleteCard.addEventListener('click', () => {
    const cardDel = deleteCard.closest('.places__item');
    cardDel.remove();
  });

  // открываем картинку из карточки
  newItemImage.addEventListener('click', () => {
    openPopupImage(name, link);
  });

  return newItemElement;
});

const renderInitialCard = ((link, name) => {
  cardsContainer.append(getItemElement(link, name));
});

initialCards.forEach((item) => {
  renderInitialCard(item.link, item.name);
});

///Создание новой карточки

const formPlace = document.querySelector('#form-place');
const itemPlaceName = formPlace.querySelector('.form__input_type_place');
const itemPlaceLink = formPlace.querySelector('.form__input_type_link');

const handleFormSubmitPlace = (evt) => {
  evt.preventDefault();
 
  cardsContainer.prepend(getItemElement(itemPlaceLink.value , itemPlaceName.value));
  closePopup(popupElementPlace);

  formPlace.reset();
  
};

formPlace.addEventListener('submit', handleFormSubmitPlace);

// попап при клике на картинку
const itemPipupImage = popupElementImage.querySelector('.popup__image');
const itemPopUpText = popupElementImage.querySelector('.popup__text');

function openPopupImage (name, link) {
  itemPipupImage.src = link;
  itemPipupImage.alt = name;
  itemPopUpText.textContent = name;
  openPopup(popupElementImage);
};

const options = {
  formSelector: '.form',
  submitSelector: '.form__submit',
  inputSelector: '.form__input',
  inputSectionSelector: '.form__section',
  inputErrorSelector: '.form__input-error',
  inputErrorClass: 'form__input-error_active',
  disabledButtonClass: 'form__submit_inactive',
}
enableValidation(options); 
