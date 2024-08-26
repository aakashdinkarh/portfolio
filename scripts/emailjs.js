(async function() {
	async function loadEmailjs() {
		return new Promise(function(resolve, reject) {
			loadJs('https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js',
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

		document.querySelector('form').addEventListener('submit', function(event) {
			event.preventDefault();
	
			emailjs.sendForm('portfolio_service', 'portfolio_contact_form', this)
				.then(() => {
					console.log('SUCCESS!');
				}, (error) => {
					console.log('FAILED...', error);
				});
		});
    } catch (err) {
        console.error('Error email js' ,err);
    }
})();
