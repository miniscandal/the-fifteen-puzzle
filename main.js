import './main.css'
import { startScene } from './src/feature-start-scene/index.js'

const game = {
	scene: (html) => document.querySelector('#app').innerHTML = html
}

startScene({ game });
