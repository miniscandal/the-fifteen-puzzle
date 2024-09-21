import { Game } from '@core-game/index.js';

import { Screens } from '@shared-logic/screens/game-screens.js';

import './main.css';

Game.screen.render(Screens.start({ game: Game, screens: Screens }));
