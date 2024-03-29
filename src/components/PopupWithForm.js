import Popup from './Popup.js';

export default class PopupWithForm extends Popup{
    constructor(popupSelector, submitHandler) {
        super(popupSelector);
        this._form = this._popup.querySelector('.form');
        this._inputList = this._form.querySelectorAll('.form__input');
        this._submitHandler = submitHandler;
    }   

    closePopup() {
        super.closePopup();
        this._form.reset();
    }
    
    _getInputValues() {
        this._formValues = {};
        this._inputList.forEach((input) => {
            this._formValues[input.name] = input.value;
        });
        return this._formValues;
    }
    renderLoading(isLoading, initialText) {
        this._textButton = this._popup.querySelector(".form__submit");
        if (isLoading) {
            this._textButton.textContent = "Сохранение...";
        } else {
            this._textButton.textContent = initialText;
        }
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._submitHandler(this._getInputValues());
        });
    }
}

