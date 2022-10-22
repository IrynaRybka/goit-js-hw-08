import Player from '@vimeo/player';
const throttle = require('lodash.throttle');


const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(timeToPlay, 1000));
   
function timeToPlay({seconds}) {
    localStorage.setItem('videoplayer-current-time', seconds)
};
player.setVolume(0.1); //настройка лично от себя, надоело что громко воспроизводится))
player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));


