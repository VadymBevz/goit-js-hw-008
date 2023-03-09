import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('#vimeo-player');
const players = new Player(iframe);
const KEY = "videoplayer-current-time";
players.setCurrentTime(Number(localStorage.getItem(KEY)) || 0);
const saveCurrentTime = event => {
localStorage.setItem(KEY, event.seconds);
}
players.on("timeupdate", throttle(saveCurrentTime,1000));


