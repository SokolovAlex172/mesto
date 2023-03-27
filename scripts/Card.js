class Card {
    constructor(data, templateSelector, openPopup) {
        this._name = data.name;
        this._link = data.link;
        this._templateSelector = templateSelector;
        this._openPopup = openPopup;
    }
    
    _getTemplate() {
        const cardElement = document
            .querySelector(this._templateSelector)
            .content
            .querySelector('.places__item')
            .cloneNode(true);

        return cardElement;
    };

    _setEventListeners() {
        this._element.querySelector('.places__like').addEventListener('click', (evt) => {
            evt.target.classList.toggle('places__like_active');
        });
        this._element.querySelector('.places__delete').addEventListener('click', (evt) => {
            evt.target.closest('.places__item').remove();
        });
        this._elementImage.addEventListener('click', () => {
            this._openPopup(this._name, this._link);
        });

    };

    generateCard() {
        this._element = this._getTemplate();

        this._elementTitle = this._element.querySelector('.places__info-title');
        this._elementImage = this._element.querySelector('.places__image');

        this._elementTitle.textContent = this._name;
        this._elementImage.alt = this._name;
        this._elementImage.src = this._link;

        this._setEventListeners();

        return this._element;
    }

}

export default Card;