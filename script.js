let startTime = 0;
let currentTime = 0;
let lapTimes = [];
let intervalId = 0;
let isRunning = false;

document.getElementById('start-button').addEventListener('click', startStopwatch);
document.getElementById('pause-button').addEventListener('click', pauseStopwatch);
document.getElementById('reset-button').addEventListener('click', resetStopwatch);

function startStopwatch() {
	startTime = new Date().getTime();
	intervalId = setInterval(updateStopwatch, 1000);
	isRunning = true;
	document.getElementById('start-button').disabled = true;
	document.getElementById('pause-button').disabled = false;
	document.getElementById('reset-button').disabled = false;
}

function pauseStopwatch() {
	clearInterval(intervalId);
	isRunning = false;
	document.getElementById('start-button').disabled = false;
	document.getElementById('pause-button').disabled = true;
}

function resetStopwatch() {
	clearInterval(intervalId);
	startTime = 0;
	currentTime = 0;
	lapTimes = [];
	document.getElementById('stopwatch-display').innerHTML = '00:00:00';
	document.getElementById('lap-times').innerHTML = '';
	isRunning = false;
	document.getElementById('start-button').disabled = false;
	document.getElementById('pause-button').disabled = true;
	document.getElementById('reset-button').disabled = true;
}

function updateStopwatch() {
	currentTime = new Date().getTime() - startTime;
	let hours = Math.floor(currentTime / 3600000);
	let minutes = Math.floor((currentTime % 3600000) / 60000);
	let seconds = Math.floor((currentTime % 60000) / 1000);
	document.getElementById('stopwatch-display').innerHTML = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(number) {
	return (number < 10? '0' : '') + number;
}

document.getElementById('stopwatch-display').addEventListener('dblclick', function() {
	lapTimes.push(document.getElementById('stopwatch-display').innerHTML);
	document.getElementById('lap-times').innerHTML += `<p>${lapTimes[lapTimes.length - 1]}</p>`;
});