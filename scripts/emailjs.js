async function loadEmailjs() {
	return new Promise(function(resolve, reject) {
		const script = document.createElement('script');
		script.type = 'text/javascript';
		script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
		script.onload = () => {
			resolve(window.emailjs);
		}

		script.onerror = () => {
			reject(new Error('Failed to load emailjs'));
			script.remove();
		}
		document.body.appendChild(script);
	})
}

(async function() {
    try {
        const emailjs = await loadEmailjs();
        emailjs.init({
          publicKey: "ql5OHlL_FT89AsFH6",
        });
    } catch (err) {
        console.error(err);
    }
})();
