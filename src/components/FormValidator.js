export default class FormValidator {
    constructor(form, data) {
        this._form = form;
        this._data = data;
        this._button = this._form.querySelector(this._data.submitSelector);
        this._inputList = Array.from(this._form.querySelectorAll(data.inputSelector));
    };

    _showError = (inputElement) => {
        const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(this._data.inputErrorBorder);
        errorElement.classList.add(this._data.inputErrorClass);
        errorElement.textContent = inputElement.validationMessage;
    };

    _hideInputError = (inputElement) => {
        const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(this._data.inputErrorBorder);
        errorElement.classList.remove(this._data.inputErrorClass);
        errorElement.textContent = '';

    };
    _checkInputValidity = (inputElement) => {
        if (!inputElement.validity.valid) {
            this._showError(inputElement);
        } else {
            this._hideInputError(inputElement);
        }
    };

    disableButton = (data) => {
        this._button.disabled = 'true';
        this._button.classList.add(data.disabledButtonClass);
    };

    _enableButton = (data) => {
        this._button.disabled = '';
        this._button.classList.remove(data.disabledButtonClass);
    };

    _hasInvalidInput = () => {
        return this._inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        });
    };

    _toggleButtonState = () => {
        if (this._hasInvalidInput(this._inputList)) {
            this.disableButton(this._data);
        } else {
            this._enableButton(this._data);
        }
    };

    _setEventListeners = () => {
        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(inputElement);
                this._toggleButtonState();
            });
        });
    };

    removeValidationErrors = () => {
        this._toggleButtonState();
        this._inputList.forEach((inputElement) => {
            this._hideInputError(inputElement);
        });
    };

    enableValidation = () => {
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        this._setEventListeners();
    };
}
