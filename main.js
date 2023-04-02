let timeLeft = 10 * 60; // 10 minutes en secondes
let timerId;

function startCountdown() {
	timerId = setInterval(updateCountdown, 1000);
}

function stopCountdown() {
	clearInterval(timerId);
}

function updateCountdown() {
	if (timeLeft <= 0) {
		clearInterval(timerId);
		document.getElementById("countdown").innerHTML = "Terminé !";
	} else {
		let minutes = Math.floor(timeLeft / 60);
		let seconds = timeLeft % 60;
		document.getElementById("countdown").innerHTML = `${minutes}:${seconds.toString().padStart(2, "0")}`;
		timeLeft--;
	}
}
