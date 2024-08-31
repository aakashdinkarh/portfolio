(async function() {
	async function loadEmailjs() {
		return new Promise(function(resolve, reject) {
			loadJs('scripts/cdn/email.js',
				() => {
					resolve(window.emailjs);
				},
				(err) => {
					reject(err);
				}
			)
		})
	}

    try {
        const emailjs = await loadEmailjs();

        emailjs.init({ publicKey: "ql5OHlL_FT89AsFH6" });

		const form = document.querySelector('form');

		form.addEventListener('submit', function(event) {
			event.preventDefault();

			const submitButton = document.querySelector('form button');
			const buttonTextElement = submitButton.querySelector('span');
			
			form.classList.add('loading');
			submitButton.disabled = true;

			const emailCallback = (success = true) => {
				form.classList.remove('loading');
				buttonTextElement.innerText = success ? 'Sent ✅' : 'Failed ❌';
				setTimeout(() => {
					buttonTextElement.innerText = 'Send Me';
					submitButton.disabled = false;
				}, 2000);
			}
	
			emailjs.sendForm('portfolio_service', 'portfolio_contact_form', this)
				.then(() => {
					emailCallback(true);
					form.reset();
				}, (error) => {
					emailCallback(false);
					console.error('FAILED...', error);
				});
		});
    } catch (err) {
        console.error('Error email js' ,err);
    }
})();
