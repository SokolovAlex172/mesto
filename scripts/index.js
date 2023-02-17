const popupElement = document.querySelector('.popup');

//popup-edit 

const popupElementEdit = document.querySelector('#popup-edit');
const closePopupEdit = popupElementEdit.querySelector('#popup__close-edit');
const openPupupEdit = document.querySelector('.profile__edit');

const toggleOpenPopupEdit = () => {
  popupElementEdit.classList.toggle('popup_opened');
};

const handleEditButtonClick = () => {
  toggleOpenPopupEdit();
};

const handeOverlayClickEdit = (event) => {
  if (event.target === event.currentTarget) {
    toggleOpenPopupEdit();
  }
};

openPupupEdit.addEventListener('click', handleEditButtonClick);
closePopupEdit.addEventListener('click', handleEditButtonClick);
popupElementEdit.addEventListener('click', handeOverlayClickEdit);  

let formElement = document.forms['form-popup'];
let nameInput = formElement.querySelector('.form__field_type_name');
let jobInput = formElement.querySelector('.form__field_type_job');
let nameProfile = document.querySelector('.profile__text-name');
let jobProfile = document.querySelector('.profile__text-job')

const handleFormSubmit = (evt) => {
  evt.preventDefault();

  let nameText = nameInput.value;
  let jobText = jobInput.value;

  nameProfile.textContent = nameText;
  jobProfile.textContent = jobText;

  handleEditButtonClick();
};

formElement.addEventListener('submit', handleFormSubmit);

//popup-place

const popupElementPlace = document.querySelector('#popup-place');
const openPopupPlace = document.querySelector('.profile__add');
const closePopupPlace = popupElementPlace.querySelector('#popup__close-place');

const toggleOpenPopupPlace = () => {
  popupElementPlace.classList.toggle('popup_opened');
};
const handleEditButtonClickPlace = () => {
  toggleOpenPopupPlace();
};
const handeOverlayClickPlace = (event) => {
  if (event.target === event.currentTarget) {
    toggleOpenPopupPlace();
  } 
};

openPopupPlace.addEventListener('click', handleEditButtonClickPlace);
closePopupPlace.addEventListener('click', handleEditButtonClickPlace);
popupElementPlace.addEventListener('click', handeOverlayClickPlace);  

//popup-image

const popupElementImage = document.querySelector('#popup-image');
const closePopupImage = popupElementImage.querySelector('#popup__close-image');

const toggleOpenPopupImage = () => {
  popupElementImage.classList.toggle('popup_opened');
};

const handleEditButtonClickImage = () => {
  toggleOpenPopupImage();
};

const handeOverlayClickImage = (element) => {
  if (element.target === element.currentTarget) {
    toggleOpenPopupImage();
  } 
};

closePopupImage.addEventListener('click', handleEditButtonClickImage);
popupElementImage.addEventListener('click', handeOverlayClickImage);  

const initialCards = [
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

const template = document.querySelector('#places-card');
const wrapPlace = document.querySelector('.places__item');

const getItemElement = ((link, name) => {
  const newItemElement = template.content.cloneNode(true);

  const newItemName = newItemElement.querySelector('.places__info-title');
  newItemName.textContent = name;

  const newItemLink = newItemElement.querySelector('.places__image');
  newItemLink.src = link;
  
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
  newItemLink.addEventListener('click', () => {
    openPopupImage(name, link);
  });

  return newItemElement;
});

const renderItem = ((link, name) => {
  template.append(getItemElement(link, name));
});

initialCards.forEach((item) => {
  renderItem(item.link, item.name);
});

///Создание новой карточки

const formPlace = document.querySelector('#form-place');
const itemPlaceName = formPlace.querySelector('.form__field_type_place');
const itemPlaceLink = formPlace.querySelector('.form__field_type_link');

const handleFormSubmitPlace = (evt) => {
  evt.preventDefault();
  const newItemElement = template.content.cloneNode(true);
  const newItemNamePlace = newItemElement.querySelector('.places__info-title');
  const newItemLinkPlace = newItemElement.querySelector('.places__image');

  newItemNamePlace.textContent = itemPlaceName.value;
  newItemLinkPlace.src = itemPlaceLink.value;
 
  template.prepend(getItemElement(itemPlaceLink.value , itemPlaceName.value));

  handleEditButtonClickPlace();
};

formPlace.addEventListener('submit', handleFormSubmitPlace);

// попап при клике на картинку
const popupImage = document.querySelector('#popup-image')
function openPopupImage (name, link) {
  const itemPipupImage = popupImage.querySelector('.popup__image');
  itemPipupImage.src = link;
  const itemPopUpText = popupImage.querySelector('.popup__text');
  itemPopUpText.textContent = name;
  popupImage.classList.add('popup_opened');
};



