var video = document.querySelector(".video");

window.addEventListener("load", function() {
	console.log("play", video);
	video.autoplay = false;
	video.loop = false;
	video.volume = document.querySelector("#slider").value / 100;
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML = video.volume;
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down");
	video.playbackRate *= 0.9;
	console.log ("The New Speed is " + video.playbackRate);
});
document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up");
	video.playbackRate /= 1.1;
	console.log ("The New Speed is " + video.playbackRate);
});
document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Ahead");
	video.currentTime = 0;
	if (video.currentTime += 10 > video.duration){
		video.currentTime= 0;
	} else {
		video.currentTime += 10;
	}
	console.log ("The current location is " + video.currentTime);
});
document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted) {
		video.muted = false;
		this.textContent = "Mute";
	} else {
		video.muted = true;
		this.textContent = "Unmute";
	}
});
document.querySelector("#slider").addEventListener("click", function() {
	video.volume = this.value / 100;
	documentquerySelector("#volume").textContent = this.value;
});
document.querySelector("#vintage").addEventListener("click", function() {
video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
});
