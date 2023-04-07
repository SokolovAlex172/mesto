import './pages/index.css';

import Card from './components/Card.js';
import PicturePopup from './components/PicturePopup.js';
import FormValidator from './components/FormValidator.js';
import PopupWithForm from "./components/PopupWithForm.js";
import Section from './components/Section.js'
import UserInfo from "./components/UserInfo.js";
import {
  initialCards,
  options,
  cardContainer,
  popupElementEdit,
  popupElementPlace,
  openPopupElementEdit,
  openPopupElementPlace,
  nameProfile,
  jobProfile,
} from './components/constants.js';


const userInfo = new UserInfo({
  nameSelector: '.profile__text-name',
  jobSelector: '.profile__text-job',
});

//Form validation
const validatorEditProfile = new FormValidator(popupElementEdit, options);
validatorEditProfile.enableValidation();

const validatorPlaceProfile = new FormValidator(popupElementPlace, options);
validatorPlaceProfile.enableValidation();

/// Create cards
const createCard = (data) => {
  const card = new Card(data, "#places-card", ZoomPopupImage);
  const cardElement = card.generateCard();
  cardList.addCard(cardElement);
};

const cardList = new Section({
  items: initialCards,
  renderer: createCard
}, cardContainer);
cardList.renderItems();

// PicturePopup WORK!
const openPopupImage = new PicturePopup("#popup-image");
openPopupImage.setEventListeners();

function ZoomPopupImage(name, link) {
  openPopupImage.openPopup(name, link);
};


//Popup Edit
const popupEditProfile = new PopupWithForm(
  "#popup-edit",
  (data) => {
    userInfo.setUserInfo(data);
    popupEditProfile.closePopup();
  }
);

//Open Edit
function openPopupEditProfile({ name,job}) {
  nameProfile.value = name;
  jobProfile.value = job;
  popupEditProfile.openPopup();
};
openPopupElementEdit.addEventListener("click", () => {
  validatorEditProfile.removeValidationErrors();
  openPopupEditProfile(userInfo.getUserInfo());
});
popupEditProfile.setEventListeners();

//PopupPlace
const popupEditPlace = new PopupWithForm(
  "#popup-place",
  ({link,name}) => {
    createCard({link,name});
    popupEditPlace.closePopup();
  }
);
popupEditPlace.setEventListeners();

//OpenPlace
openPopupElementPlace.addEventListener("click", () => {
  validatorPlaceProfile.removeValidationErrors();
  popupEditPlace.openPopup();
});