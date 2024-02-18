const doc = document.querySelector(".container-video");
const video = doc.querySelector("video");

const windowWidth = window.innerWidth;
let duration = 0;

function scrollVideo(event) {
    const prWidthScroll = event.movementX / windowWidth;
    const prLengthScroll = prWidthScroll * duration;

    const time = video.currentTime + prLengthScroll;
    if(time < 0) {
        video.currentTime = (duration + time);
    } else if(time > duration) {
        video.currentTime = (time - duration);
    } else {
        video.currentTime = (time);
    }
}

function deactivateScrollVideo() {
    window.removeEventListener('mousemove', scrollVideo);
}

function activeScrollVideo() {
    window.addEventListener('mousemove', scrollVideo);
    window.addEventListener('mouseup', deactivateScrollVideo);
}

video.onloadedmetadata = function() {
    //this.dataset['swipe-unit'] = 'vw'
    this.addEventListener('mousedown', activeScrollVideo);
    duration = this.duration;
};

