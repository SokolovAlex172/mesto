class FormValidator {
    constructor(formSelector, data) {
        this._formSelector = formSelector;
        this._data = data;
        this._button = this._formSelector.querySelector(this._data.submitSelector);
        this._inputList = Array.from(this._formSelector.querySelectorAll(data.inputSelector));
    };

    _showError = (inputElement) => {
        const errorElement = this._formSelector.querySelector(this._data.inputErrorSelector);
        errorElement.classList.add(this._data.inputErrorClass);
        errorElement.textContent = inputElement.validationMessage;
    };

    _hiddenError = () => {
        const errorElement = this._formSelector.querySelector(this._data.inputErrorSelector);
        errorElement.classList.remove(this._data.inputErrorClass);
        errorElement.textContent = '';

    };

    _checkInputValidity = (inputElement) => {
        if (!inputElement.validity.valid) {
            this._showError(inputElement);
        } else {
            this._hiddenError(inputElement);
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
            this._hiddenError(inputElement);
        });
    };

    enableValidation = () => {
        this._formSelector.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        this._setEventListeners();
    };
}

export default FormValidator;