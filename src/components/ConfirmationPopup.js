import Popup from "./Popup.js";

export default class ConfirmationPopup extends Popup {
  constructor(popupSelector, submitHandler) {
    super(popupSelector);
    this._submitHandler = submitHandler;
    this._form = this._popup.querySelector('.form');
  }

  closePopup() {
    super.closePopup();
    document.removeEventListener('keydown', this._closeByEnter);
  };

  openPopup = (deletedElement, deleteHandler) => {
    this._deletedElement = deletedElement;
    this._deleteHandler = deleteHandler;
    super.openPopup();

    document.addEventListener('keydown', this._closeByEnter);
  };

  _closeByEnter = (evt) => {
    if (evt.key === 'Enter') {
      this._submitHandler(this._deletedElement, this._deleteHandler);
    }
  };

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._submitHandler(this._deletedElement, this._deleteHandler);
    });
  }
}