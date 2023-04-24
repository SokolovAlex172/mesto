export default class Card {
    constructor({data, templateSelector, openPopupHandler, openDeliteConfirm, toggleLikeHendler}) {
        this._name = data.name;
        this._link = data.link;
        this._templateSelector = templateSelector;
        this._openPopupHandler = openPopupHandler;
        this._openDeliteConfirm = openDeliteConfirm;
        this._toggleLikeHendler = toggleLikeHendler;
    }
    
    _getTemplate() {
      return document
        .querySelector(this._templateSelector)
        .content.cloneNode(true)
        .querySelector(".places__item");
    }

    _likeCount(count) {
      this._element.querySelector(".places__like-counter").textContent = count;
    }

    _toggleLike = (count) => {
      this._likeCount(count);
        this._elementLike.classList.toggle('places__like_active');
      }

    _deleteCard = () => {
        this._element.remove();
        this._element = null;
      }

    _handleImageClick() {
        this._elementImage.addEventListener('click', () => {
            this._openPopupHandler(this._name, this._link);
        });
    };

    _setEventListeners() {
        this._elementLike.addEventListener('click', () => {
          this._toggleLikeHendler(this._element, this._toggleLike)
        });
        this._elementDelite.addEventListener('click', () => {
          this._openDeliteConfirm(this._element, this._deleteCard);
        });
        this._handleImageClick();
      };
      
    generateCard({cardID, likesArr, authorID, userID }) {
        this._element = this._getTemplate();
        this._elementLike = this._element.querySelector('.places__like');
        this._elementDelite = this._element.querySelector('.places__delete');
        this._elementTitle = this._element.querySelector('.places__info-title');
        this._elementImage = this._element.querySelector('.places__image');

        this._setEventListeners();
        this._likeCount(likesArr.length);

         if (likesArr.find((user) => user._id === userID)) {
           this._elementLike.classlist.add('places__like_active');
         }
         if (userID !== authorID) {
           this._elementDelite.remove();
           this._elementDelite = null;
         }
         this._elementTitle.textContent = this._name;
         this._elementImage.alt = this._name;
         this._elementImage.src = this._link;

         this._element.id = cardID;
        return this._element;
    }
}