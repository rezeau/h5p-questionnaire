import './styles/success-screen.css';

export default class SuccessScreen {
  constructor({ successMessage }) {
    this.wrapper = document.createElement('div');
    this.wrapper.className = 'h5p-questionnaire-success';
    this.wrapper.classList.add('hide');

    const successIcon = document.createElement('div');
    successIcon.className = 'h5p-questionnaire-success-icon';

    const successText = document.createElement('div');
    successText.className = 'h5p-questionnaire-success-message';
    successText.innerHTML = successMessage;

    this.wrapper.appendChild(successIcon);
    this.wrapper.appendChild(successText);
  }

  show() {
    this.wrapper.classList.remove('hide');
  }

  attachTo(container) {
    container.appendChild(this.wrapper);
  }
}