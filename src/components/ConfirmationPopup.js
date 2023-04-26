import Popup from "./Popup.js";

export default class ConfirmationPopup extends Popup {
  constructor(popupSelector, submitHandler) {
    super(popupSelector);
    this._submitHandler = submitHandler;
    this._form = this._popup.querySelector('.form');
  }


  openPopup = (deletedElement, deleteHandler) => {
    this._deletedElement = deletedElement;
    this._deleteHandler = deleteHandler;
    super.openPopup();
  };


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
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._submitHandler(this._deletedElement, this._deleteHandler);
    });
  }
}