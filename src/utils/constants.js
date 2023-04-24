export const options = {
  formSelector: '.form',
  submitSelector: '.form__submit',
  inputSelector: '.form__input',
  inputSectionSelector: '.form__section',
  inputErrorBorder: 'input-error',
  inputErrorClass: 'form__input-error_active',
  disabledButtonClass: 'form__submit_inactive',
}

export const cardContainer = document.querySelector(".places"),
  popupElementEdit = document.querySelector('#popup-edit'),
  popupElementPlace = document.querySelector('#popup-place'),
  popupElementAvatar = document.querySelector('#popup-avatar'),
  openPopupElementEdit = document.querySelector('.profile__edit'),
  openPopupElementPlace = document.querySelector('.profile__add'),
  openPopupElementAvatar = document.querySelector('.profile__avatar'),
  popupElementImage = document.querySelector('#popup-image'),
  nameProfile = document.querySelector('.form__input_type_name'),
  jobProfile = document.querySelector('.form__input_type_job');
