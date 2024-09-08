function getDifferenceText(joiningDate, today) {
	let years = today.getFullYear() - joiningDate.getFullYear();
	let months = today.getMonth() - joiningDate.getMonth();
	let days = today.getDate() - joiningDate.getDate();
	let hours = today.getHours() - joiningDate.getHours();
	let minutes = today.getMinutes() - joiningDate.getMinutes();
	let seconds = today.getSeconds() - joiningDate.getSeconds();

	if (seconds < 0) {
		minutes--;
		seconds += 60;
	}

	if (minutes < 0) {
		hours--;
		minutes += 60;
	}

	if (hours < 0) {
		days--;
		hours += 24;
	}

	if (days < 0) {
		months--;
		const previousMonth = today.getMonth() === 0 ? 11 : today.getMonth() - 1;
		const daysInPreviousMonth = new Date(today.getFullYear(), previousMonth + 1, 0).getDate();
		days += daysInPreviousMonth;
	}

	if (months < 0) {
		years--;
		months += 12;
	}

	// const result = `${years}y ${months}m ${days}d | ${hours}h : ${minutes}m : ${seconds}s`;
	const result = `${years}y ${months}m ${days}d`;

	return result.trim();
}

function updateExperienceTime(experienceTimeElement) {
    const joiningDate = new Date('11 July 2022');
	const today = new Date();
	
	experienceTimeElement.innerText = getDifferenceText(joiningDate, today);

	const tomorrow = new Date();
	tomorrow.setDate(tomorrow.getDate() + 1);
	tomorrow.setHours(0,0,0,0);

	const diff = tomorrow - today;

	setTimeout(() => {
        experienceTimeElement.innerText = getDifferenceText(joiningDate, tomorrow);
	}, diff);
}

updateExperienceTime(document.getElementById('exp-time-calc'));
