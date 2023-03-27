import Card from './Card.js';
import FormValidator from './FormValidator.js';
import {
  initialCards,
  options,
  cardContainer,
  popupElementEdit,
  popupElementPlace,
  openPopupElementEdit,
  openPopupElementPlace,
  popupElementImage,
  formEdit,
  nameInput,
  jobInput,
  nameProfile,
  jobProfile,
  cardsContainer,
  formPlace,
  itemPlaceName,
  itemPlaceLink,
  itemPipupImage,
  itemPopUpText,
} from './constants.js';

const createCard = (data) => {
  const cardElement = new Card(data, "#places-card", openPopupImage);
  return cardElement.generateCard();
};
const addCard = (data) => {
  cardContainer.prepend(data);
};

initialCards.forEach((data) => {
  addCard(createCard(data));
});


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

function openPopupImage(name, link) {
  itemPipupImage.src = link;
  itemPipupImage.alt = name;
  itemPopUpText.textContent = name;
  openPopup(popupElementImage);
};

const validatorEditProfile = new FormValidator(popupElementEdit, options);
validatorEditProfile.enableValidation();

const validatorPlaceProfile = new FormValidator(popupElementPlace, options);
validatorPlaceProfile.enableValidation();

const handleFormSubmitPlace = (evt) => {
  evt.preventDefault();

  const userData = {
    name: itemPlaceName.value,
    link: itemPlaceLink.value,
  }

  cardsContainer.prepend(createCard(userData, "#places-card"));
  closePopup(popupElementPlace);
  validatorPlaceProfile.disableButton(options);

  formPlace.reset();
};

formPlace.addEventListener('submit', handleFormSubmitPlace);

const handleProfileFormSubmit = (evt) => {
  evt.preventDefault();

  const nameText = nameInput.value;
  const jobText = jobInput.value;

  nameProfile.textContent = nameText;
  jobProfile.textContent = jobText;

  closePopup(popupElementEdit);
  validatorEditProfile.disableButton(options);
};

formEdit.addEventListener('submit', handleProfileFormSubmit);

openPopupElementEdit.addEventListener('click', () => {
  validatorEditProfile.removeValidationErrors();
  openPopup(popupElementEdit);
});

openPopupElementPlace.addEventListener('click', () => {
  validatorPlaceProfile.removeValidationErrors();
  openPopup(popupElementPlace)
});