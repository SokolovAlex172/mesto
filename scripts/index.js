//popup-edit 

const popupElementEdit = document.querySelector('#popup-edit');
const closePopupElementEdit = popupElementEdit.querySelector('#popup__close-edit');
const openPopupElementEdit = document.querySelector('.profile__edit');



const openPopupEdit = () => {
  popupElementEdit.classList.add('popup_opened');
}
const closePopupEdit = () => {
  popupElementEdit.classList.remove('popup_opened');
}

const handeOverlayClickEdit = (event) => { 
  if (event.target === event.currentTarget) { 
    closePopupEdit(event.currentTarget);
  }
}

openPopupElementEdit.addEventListener('click', openPopupEdit);
closePopupElementEdit.addEventListener('click', closePopupEdit);
popupElementEdit.addEventListener('click', handeOverlayClickEdit);  

const formEdit = document.forms['form-popup'];
const nameInput = formEdit.querySelector('.form__field_type_name');
const jobInput = formEdit.querySelector('.form__field_type_job');
const nameProfile = document.querySelector('.profile__text-name');
const jobProfile = document.querySelector('.profile__text-job');

const handleFormSubmit = (evt) => {
  evt.preventDefault();

  let nameText = nameInput.value;
  let jobText = jobInput.value;

  nameProfile.textContent = nameText;
  jobProfile.textContent = jobText;

  closePopupEdit();
};

formEdit.addEventListener('submit', handleFormSubmit);

//popup-place

const popupElementPlace = document.querySelector('#popup-place');
const openPopupElementPlace = document.querySelector('.profile__add');
const closePopupElementPlace = popupElementPlace.querySelector('#popup__close-place');

const openPopupPlace = () => {
  popupElementPlace.classList.add('popup_opened');
}
const closePopupPlace = () => {
  popupElementPlace.classList.remove('popup_opened');
}

const handeOverlayClickPlace = (event) => { 
  if (event.target === event.currentTarget) { 
    closePopupPlace(event.currentTarget);
  }
}

openPopupElementPlace.addEventListener('click', openPopupPlace);
closePopupElementPlace.addEventListener('click', closePopupPlace);
popupElementPlace.addEventListener('click', handeOverlayClickPlace);  

//popup-image

const popupElementImage = document.querySelector('#popup-image');
const closePopupElementImage = document.querySelector('#popup__close-image');

const OpenPopupImage = () => {
  popupElementImage.classList.add('popup_opened');
}
const closePopupImage = () => {
  popupElementImage.classList.remove('popup_opened');
}

const handeOverlayClickImage = (event) => { 
  if (event.target === event.currentTarget) { 
    closePopupImage(event.currentTarget);
  }
}

closePopupElementImage.addEventListener('click', closePopupImage);
popupElementImage.addEventListener('click', handeOverlayClickImage);  

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
const itemPlaceName = formPlace.querySelector('.form__field_type_place');
const itemPlaceLink = formPlace.querySelector('.form__field_type_link');

const handleFormSubmitPlace = (evt) => {
  evt.preventDefault();

  const newItemElement = cardsContainer.content.cloneNode(true);
  const newItemNamePlace = newItemElement.querySelector('.places__info-title');
  const newItemImagePlace = newItemElement.querySelector('.places__image');

  newItemNamePlace.textContent = itemPlaceName.value;
  newItemImagePlace.src = itemPlaceLink.value;
 
  cardsContainer.prepend(getItemElement(itemPlaceLink.value , itemPlaceName.value));
  closePopupPlace();

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
  OpenPopupImage();
};
