const videos = document.querySelectorAll('.video');
const secondsDelay = [
    3,
    'finish',
    'finish',
    2,
    4,
    6,
    9,
    11,
    14,
    16,
    19,
    21,
    24,
    27,
    30,
    31,
    34,
    36,
    39,
    41,
    44,
    46,
    49,
    51,
    54,
    56,
    59,
    61,
    64,
    'finish',
    5,
    'repeat'
];
let clickCount = 0;
let videoCount = 1;
let canClick = false;
let currentVideo = Array.from(videos).filter(video => video.id === 'video-1')[0];
let button = document.querySelector('button')

document.addEventListener('DOMContentLoaded', () => {
    playVideo();
})

for (let video of videos) {
    video.addEventListener('ended', function () {
        currentVideo.classList.add('hidden');
        ++videoCount;
        ++clickCount;
        if (videoCount > 4) {
            currentVideo.classList.add('hidden');
            currentVideo = Array.from(videos).filter(video => video.id === 'video-1')[0];
            currentVideo.classList.remove('hidden');
            videoCount = 1;
            clickCount = 0;
        }
        else {
            currentVideo = Array.from(videos).filter(video => video.id === `video-${videoCount}`)[0];
            currentVideo.classList.remove('hidden');
        }
        playVideo();
    });
}

document.addEventListener('click', () => {
    if (canClick) {
        ++clickCount;
        playVideo();
    }
})

function playVideo() {
    button.classList.add('hidden')
    canClick = false;
    currentVideo.play();
    currentVideo.addEventListener('timeupdate', function () {
        if (Math.floor(currentVideo.currentTime) === secondsDelay[clickCount]) {
            currentVideo.pause();
            button.classList.remove('hidden')
            canClick = true;
        }
    })
}