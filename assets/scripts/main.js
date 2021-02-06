// main.js
var LEVEL3 = 67;
var LEVEL2 = 34;
var LEVEL1 = 1;

//honk button
var honkButton = document.getElementById('honk-btn');
honkButton.addEventListener("click", honk);

//audio source
var audio = document.getElementById('horn-sound');

//volume input field
var volumeNumber = document.getElementById('volume-number');
volumeNumber.addEventListener("change", setSpeakerImage);

//speaker image
var volumeImage = document.getElementById('volume-image');

//slider
var slider = document.getElementById('volume-slider');
slider.addEventListener("change", setVolumeNumber);

//sound image
var soundImage = document.getElementById('sound-image');
var audioSelection = document.getElementById("audio-selection");
audioSelection.addEventListener("change", setSound);

//sets the speaker image in accordance with the volume level
//also sets the slider
function setSpeakerImage() {
    if (volumeNumber.value > LEVEL3) {
        volumeImage.src = "./assets/media/icons/volume-level-3.svg"; 
    }
    else if (volumeNumber.value > LEVEL2) {
        volumeImage.src = "./assets/media/icons/volume-level-2.svg"; 
    }
    else if (volumeNumber.value > LEVEL1){ 
        volumeImage.src = "./assets/media/icons/volume-level-1.svg"; 
    }
    else {
        volumeImage.src = "./assets/media/icons/volume-level-0.svg";
    }
    slider.value = volumeNumber.value;
}

//sets the volume level according to the slider value
//also adjusts the speaker image to correct image
function setVolumeNumber() {
    volumeNumber.value = slider.value;
    setSpeakerImage();
}

//sets the image of the horn and the sound to be played when the horn is honked
function setSound() {
    if(document.getElementById("radio-air-horn").checked) {
        soundImage.src = "./assets/media/images/air-horn.svg";
        audio.src = "./assets/media/audio/air-horn.mp3" 
    }
    else if(document.getElementById("radio-car-horn").checked) {
        soundImage.src = "./assets/media/images/car.svg";  
        audio.src = "./assets/media/audio/car-horn.mp3"
    }
    else if(document.getElementById("radio-party-horn").checked) {
        soundImage.src = "./assets/media/images/party-horn.svg";
        audio.src = "./assets/media/audio/party-horn.mp3"
    }
}

//play the sound at the specified volume
function honk() {
    if(volumeNumber.value != 0) {
        audio.volume = volumeNumber.value/100;
        audio.play();
    }
    alert("honk");
};