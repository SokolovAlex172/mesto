import Popup from './Popup.js';

export default class PicturePopup extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._itemPipupImage = document.querySelector('.popup__image');
        this._itemPopUpText = document.querySelector('.popup__text');
    }

    openPopup = (name, link) => {
        this._itemPipupImage.src = link;
        this._itemPipupImage.alt = name;
        this._itemPopUpText.textContent = name;
        super.openPopup();
    };
}