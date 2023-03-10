
///Form

const hiddenError = (errorElement, inputErrorClass) => {
    errorElement.textContent = '';
    errorElement.classList.remove(inputErrorClass);
};

const showError = (errorElement, message, inputErrorClass) => {
    errorElement.textContent = message; 
    errorElement.classList.add(inputErrorClass);
};

const toggleInputState = (inputElement, options) => {
    const isValid = inputElement.validity.valid;
    const inputSectionElement = inputElement.closest(options.inputSectionSelector);
    const errorElement = inputSectionElement.querySelector(options.inputErrorSelector);
    if (isValid) {
        hiddenError(errorElement);
    }else {
       showError(errorElement, inputElement.validationMessage, options.inputErrorClass);
    }
};

const enableButton = (buttonElement, disabledButtonClass) => {
    buttonElement.removeAttribute('disabled');
    buttonElement.classList.remove(disabledButtonClass);
};

const disableButton = (buttonElement, disabledButtonClass) => {
    buttonElement.setAttribute('disabled', true);
    buttonElement.classList.add(disabledButtonClass);
};

const toggleButtonState = (inputs, submitElement, disabledButtonClass) => {
    const formIsValid = inputs.every(inputElement => inputElement.validity.valid);

    if(formIsValid) {
        enableButton(submitElement, disabledButtonClass);
    } else{
        disableButton(submitElement, disabledButtonClass);
    }
};

const setEvenListeners = (form, options) => {
    const submitElement = form.querySelector(options.submitSelector);
    const inputs = Array.from(form.querySelectorAll(options.inputSelector));

    inputs.forEach(inputElement => {
        inputElement.addEventListener('input', () => {
            toggleInputState(inputElement, options);
            toggleButtonState(inputs, submitElement, options.disabledButtonClass);
        });
    });

    toggleButtonState(inputs, submitElement, options.disabledButtonClass);

    form.addEventListener('reset', () => {
      setTimeout(() => {
        toggleButtonState(inputs, submitElement, options.disabledButtonClass);
      }, 0);
    });
};

const enableValidation = (options) => {
    const forms = Array.from(document.querySelectorAll(options.formSelector));

    forms.forEach(form => {
        setEvenListeners(form, options);
    });
};
