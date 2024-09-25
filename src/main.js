import { Game } from '@core-game/index.js';

import { Screens } from '@shared-logic/screens/game-screens.js';

import './main.css';

const { html, logic, name } = Screens.start({ Game, Screens });

Game.screen.htmlRender({ html });
Game.screen.setupLogic({ logic });
Game.screen.name = name;
