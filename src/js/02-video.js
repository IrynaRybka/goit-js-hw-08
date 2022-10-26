// import Player from '@vimeo/player';
const throttle = require('lodash.throttle');
const player = new Viemo.Player(iframe);

const PLAYER_SAVE_TIME = 'videoplayer-current-time';
const iframe = document.querySelector('iframe');


player.on('timeupdate', throttle(timeToPlay, 1000));
   
function timeToPlay({seconds}) {
    localStorage.setItem(PLAYER_SAVE_TIME, seconds)
};
player.setVolume(0.1); //настройка лично от себя, надоело что громко воспроизводится))
player.setCurrentTime(localStorage.getItem(PLAYER_SAVE_TIME));


