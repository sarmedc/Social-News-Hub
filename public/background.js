$(document).ready({
	if (history.length >= 1) {  // Um, needs to be 0 for IE, 1 for Firefox
    window.location.href = 'http://localhost:3000/Hackernews';
	}
});

function openTab() {
    window.location.href = 'http://localhost:3000/Hackernews';
}