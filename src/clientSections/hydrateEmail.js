import { getFirework } from "./fireworks-gravity";
import { emailJSSDK } from "./cdn/email";

export const hydrateEmail = async () => {
  const { sendForm } = emailJSSDK();

  try {
    const form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
      event.preventDefault();

      const submitButton = document.querySelector('form button');
      const buttonTextElement = submitButton.querySelector('span');

      form.classList.add('loading');
      submitButton.disabled = true;

      const emailCallback = (success = true) => {
        let createFooterFirework = () => { };
        if (getFirework) {
          const footerFireworkCanvas = document.querySelector('canvas#fireworksFooter');
          createFooterFirework = getFirework(footerFireworkCanvas);
        }
        if (success) {
          setTimeout(createFooterFirework, 0);
          setTimeout(createFooterFirework, 100);
          setTimeout(createFooterFirework, 200);
        }
        form.classList.remove('loading');
        buttonTextElement.innerText = success ? 'Sent ✅' : 'Failed ❌';
        setTimeout(() => {
          buttonTextElement.innerText = 'Send Me';
          submitButton.disabled = false;
          form.reset();
        }, 2000);
      };

      sendForm(this).then(
        () => {
          emailCallback(true);
        },
        (error) => {
          emailCallback(false);
          console.error('FAILED...', error);
        },
      );
    });
  } catch (err) {
    console.error('Error email js', err);
  }
};
