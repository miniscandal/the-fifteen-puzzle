import { Game } from '@core-game-management/main';

import { Screens } from '@core-screen-management/main';

import './main.css';

const { html, logic, screenSymbol } = Screens.play({ Game, Screens });

Game.setupScreenRoutine({ html, logic, screenSymbol });
