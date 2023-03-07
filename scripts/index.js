
const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
};

const openPopup = (popup) => {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', (evt) => {
    if(evt.key === "Escape") {
      closePopup(popup);
       };
  });
};

const handeOverlayClickEdit = (event) => { 
  if (event.target === event.currentTarget) { 
    closePopup(event.currentTarget);
  }
};



const popupElementEdit = document.querySelector('#popup-edit');
const closePopupElementEdit = popupElementEdit.querySelector('#popup__close-edit');
const openPopupElementEdit = document.querySelector('.profile__edit');



openPopupElementEdit.addEventListener('click', () => openPopup(popupElementEdit));
closePopupElementEdit.addEventListener('click', () => closePopup(popupElementEdit));
popupElementEdit.addEventListener('click', handeOverlayClickEdit);  


//popup-place

const popupElementPlace = document.querySelector('#popup-place');
const openPopupElementPlace = document.querySelector('.profile__add');
const closePopupElementPlace = popupElementPlace.querySelector('#popup__close-place');

openPopupElementPlace.addEventListener('click', () => openPopup(popupElementPlace));
closePopupElementPlace.addEventListener('click', () => closePopup(popupElementPlace));
popupElementPlace.addEventListener('click', handeOverlayClickEdit);  

//popup-image

const popupElementImage = document.querySelector('#popup-image');
const closePopupElementImage = document.querySelector('#popup__close-image');

closePopupElementImage.addEventListener('click',() => closePopup(popupElementImage));
popupElementImage.addEventListener('click', handeOverlayClickEdit);  

const formEdit = document.forms['form-popup'];
const nameInput = formEdit.querySelector('.form__input_type_name');
const jobInput = formEdit.querySelector('.form__input_type_job');
const nameProfile = document.querySelector('.profile__text-name');
const jobProfile = document.querySelector('.profile__text-job');

const handleFormSubmit = (evt) => {
  evt.preventDefault();

  const nameText = nameInput.value;
  const jobText = jobInput.value;

  nameProfile.textContent = nameText;
  jobProfile.textContent = jobText;

  closePopup(popupElementEdit);
};

formEdit.addEventListener('submit', handleFormSubmit);

const cardsContainer = document.querySelector('#places-card');

const getItemElement = ((link, name) => {
  const newItemElement = cardsContainer.content.cloneNode(true);

  const newItemName = newItemElement.querySelector('.places__info-title');
  newItemName.textContent = name;

  const newItemImage = newItemElement.querySelector('.places__image');
  newItemImage.src = link;

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

  const popupImage = document.querySelector('#popup-image');
  const popupImageClose = document.querySelector('.popup__close-image');
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
const popupImageItem = document.querySelector('#popup-image')
function openPopupImage (name, link) {
  const itemPipupImage = popupImageItem.querySelector('.popup__image');
  itemPipupImage.src = link;
  itemPipupImage.alt = name;
  const itemPopUpText = popupImageItem.querySelector('.popup__text');
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
