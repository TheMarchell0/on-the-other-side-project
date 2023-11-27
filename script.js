const videos = document.querySelectorAll('.video');
const secondsDelay = [
    3.0,
    'finish',
    'finish',
    1.8, //1
    4.2, // 1
    5.7, // 2
    8.2, // 2
    9.7, // 3
    12.2, // 3
    13.7, // 4
    16.2, // 4
    17.7, // 5
    20.2, // 5
    21.7, // 6
    24.2, // 6
    25.7, // 7
    28.2, // 7
    29.7, // 8
    32.2, // 8
    33.7, // 9
    36.2, // 9
    37.7, // 10
    40.2, // 10
    41.7, // 11
    44.2, // 11
    45.7, // 12
    48.2, // 12
    49.7, // 13
    52.2, // 13
    53.7, // 14
    56.2, // 14
    57.7, // 15
    60.2, // 15
    'finish',
    5.1,
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
    handleTimeUpdate();
}

function handleTimeUpdate () {
    let videoInterval = setInterval(()=> {
        if (currentVideo.currentTime.toFixed(1) == secondsDelay[clickCount] ||
            currentVideo.currentTime.toFixed(1) == secondsDelay[clickCount]+0.1 ||
            currentVideo.currentTime.toFixed(1) == secondsDelay[clickCount]-0.1) {
            currentVideo.pause();
            button.classList.remove('hidden')
            canClick = true;
            clearInterval(videoInterval);
        }}, 100)
}