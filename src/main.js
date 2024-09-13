import { Game } from './core/game/index.js';
import { GameScreens } from './shared/logic/screens/game-screens.js';

import './main.css';

GameScreens.start({ game: Game, gameScreens: GameScreens });
