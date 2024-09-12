import { startScene } from './feature-start-scene/index.js';

import './main.css';

const game = {
	scene: {
		render: (html) => document.querySelector('#app').innerHTML = html,
		functionality: (code) => code()
	}
};

startScene({ game });
