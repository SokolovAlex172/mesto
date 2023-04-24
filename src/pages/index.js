import './index.css';

import Card from '../components/Card.js';
import PicturePopup from '../components/PicturePopup.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithForm from "../components/PopupWithForm.js";
import ConfirmationPopup from "../components/ConfirmationPopup.js";
import Section from '../components/Section.js'
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";
import {
  options,
  cardContainer,
  popupElementEdit,
  popupElementPlace,
  popupElementAvatar,
  openPopupElementEdit,
  openPopupElementPlace,
  openPopupElementAvatar,
  nameProfile,
  jobProfile,
} from '../utils/constants.js';

const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-64",
  headers: {
    authorization: "79ee610d-0667-436e-9f24-0d4f28a2fc48",
    "Content-Type": "application/json",
  },
});

const userInfo = new UserInfo({
  nameSelector: '.profile__text-name',
  aboutSelector: '.profile__text-job',
  avatarSelector: '.profile__avatar-img',
});

let userID;

//Form validation
const validatorEditProfile = new FormValidator(popupElementEdit, options);
validatorEditProfile.enableValidation();

const validatorPlaceProfile = new FormValidator(popupElementPlace, options);
validatorPlaceProfile.enableValidation();

const validatorAvatarProfile = new FormValidator(popupElementAvatar, options);
validatorAvatarProfile.enableValidation();

function createCard(data) {
  const cardElement = new Card({
    data,
    templateSelector: "#places-card",
    openPopupHandler: zoomPopupImage,
    openDeliteConfirm: openConfirmationPopup,
    toggleLikeHendler: toggleCardLike,

  });
  return cardElement.generateCard({
    cardID: data._id,
    likesArr: data.likes,
    authorID: data.owner._id,
    userID,
  });
}

const userCards = new Section({
  renderer: (card) => {
    userCards.addCard(createCard(card))
  },
}, cardContainer);

Promise.all([
    api.getUserInfo(),
    api.getInitialCards(),
  ])
  .then((result) => {
    userInfo.setUserInfo(result[0]);
    userInfo.setUserAvatar(result[0]);
    userID = result[0]["_id"];

    userCards.renderItems(result[1].reverse());
  })
  .catch((err) => {
    console.log(err);
  });

function toggleCardLike(thisCard, likeHandler) {
  const likeBtn = thisCard.querySelector('.places__like');

  if (!likeBtn.classList.contains('places__like_active')) {
    api
      .addLike(thisCard.id)
      .then((result) => {
        likeHandler(result.likes.length);
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    api
      .removeLike(thisCard.id)
      .then((result) => {
        likeHandler(result.likes.length);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

// PicturePopup WORK!
const openPopupImage = new PicturePopup("#popup-image");
openPopupImage.setEventListeners();

function zoomPopupImage(name, link) {
  openPopupImage.openPopup(name, link);
};

//Popup Edit
const popupEditProfile = new PopupWithForm(
  "#popup-edit",
  (data) => {
    popupEditProfile.renderLoading(true);
    api
      .setUserInfo(data)
      .then((data) => {
        userInfo.setUserInfo(data);
        popupEditProfile.closePopup();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        popupEditProfile.renderLoading(false, "Сохранить");
      })
  }
);

popupEditProfile.setEventListeners();

//Open Edit
function openPopupEditProfile({
  name,
  about
}) {
  nameProfile.value = name;
  jobProfile.value = about;
  popupEditProfile.openPopup();
};

openPopupElementEdit.addEventListener("click", () => {
  openPopupEditProfile(userInfo.getUserInfo());
  validatorEditProfile.removeValidationErrors();

});
popupEditProfile.setEventListeners();

//PopupPlace
const popupEditPlace = new PopupWithForm(
  "#popup-place",
  (data) => {
    popupEditPlace.renderLoading(true);
    api
      .addNewCard(data)
      .then((data) => {
        userCards.addCard(createCard(data));
        popupEditPlace.closePopup();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        popupEditPlace.renderLoading(false, "Создать");
      });
  }
);
popupEditPlace.setEventListeners();

//OpenPlace
openPopupElementPlace.addEventListener("click", () => {
  validatorPlaceProfile.removeValidationErrors();
  popupEditPlace.openPopup();
});

const popupConfirmDelete = new ConfirmationPopup(
  "#popup-confirm",
  (deletedElement, deleteHandler) => {
    popupConfirmDelete.renderLoading(true);
    api
      .deleteCard(deletedElement.id)
      .then(() => {
        deleteHandler();
        popupConfirmDelete.closePopup();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        popupConfirmDelete.renderLoading(false, "Да");
      });
  }
);
popupConfirmDelete.setEventListeners();

function openConfirmationPopup(deletedElement, deleteHandler) {
  popupConfirmDelete.openPopup(deletedElement, deleteHandler);
}

//PopupAvatar
const popupChangeAvatar = new PopupWithForm(
  "#popup-avatar",
  ({
    avatar
  }) => {
    popupChangeAvatar.renderLoading(true);
    api
      .setUserAvatar({
        avatar
      })
      .then(({
        avatar
      }) => {
        userInfo.setUserAvatar({
          avatar
        });
        popupChangeAvatar.closePopup();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        popupChangeAvatar.renderLoading(false, "Сохранить");
      });
  }
);

popupChangeAvatar.setEventListeners();

//OpenAvatar
openPopupElementAvatar.addEventListener("click", () => {
  popupChangeAvatar.openPopup();
  validatorAvatarProfile.removeValidationErrors();
});