import './main.css';
import { startScene } from './feature-start-scene/index.js';

const game = {
	scene: (html) => document.querySelector('#app').innerHTML = html
};

startScene({ game });
