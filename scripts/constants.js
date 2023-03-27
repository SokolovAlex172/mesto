export const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    },
      
  ]; 
 export const options = {
    formSelector: '.form',
    submitSelector: '.form__submit',
    inputSelector: '.form__input',
    inputSectionSelector: '.form__section',
    inputErrorSelector: '.form__input-error',
    inputErrorClass: 'form__input-error_active',
    disabledButtonClass: 'form__submit_inactive',
  }
  
export const cardContainer = document.querySelector('.places'),
      popupElementEdit = document.querySelector('#popup-edit'),
      popupElementPlace = document.querySelector('#popup-place'),
      openPopupElementEdit = document.querySelector('.profile__edit'),
      openPopupElementPlace = document.querySelector('.profile__add'),
      popupElementImage = document.querySelector('#popup-image'),
      formEdit = document.forms['form-popup'],
      nameInput = document.querySelector('.form__input_type_name'),
      jobInput = document.querySelector('.form__input_type_job'),
      nameProfile = document.querySelector('.profile__text-name'),
      jobProfile = document.querySelector('.profile__text-job'),
      cardsContainer = document.querySelector('#places-card'),
      formPlace = document.querySelector('#form-place'),
      itemPlaceName = document.querySelector('.form__input_type_place'),
      itemPlaceLink = document.querySelector('.form__input_type_link'),
      itemPipupImage = document.querySelector('.popup__image'),
      itemPopUpText = document.querySelector('.popup__text');
