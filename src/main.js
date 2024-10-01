import { Game } from '@core-game-management/main';

import { Screens } from '@core-screen-management/main';

import './main.css';

const { html, logic, name } = Screens.start({ Game, Screens });

Game.screen.htmlRender({ html });
Game.screen.setupLogic({ logic });
Game.screen.currentName = name;
