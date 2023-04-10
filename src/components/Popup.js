export default class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this.openedPopup = 'popup_opened';
    }

    closePopup() {
        this._popup.classList.remove(this.openedPopup);
        document.removeEventListener('keydown', this._closeByEscape);
    };

    openPopup() {
        this._popup.classList.add(this.openedPopup);
        document.addEventListener('keydown', this._closeByEscape);
    };

    _closeByEscape = (evt) => {
        if (evt.key === 'Escape') {
            this.closePopup();
        }
    };

    setEventListeners() {
        this._popup.addEventListener('mousedown', (evt) => {
            if (evt.target === this._popup || evt.target.classList.contains('popup__close-image')) {
                this.closePopup();
            }
        });
    }
}