import { GameScreen } from '../shared/components/templates/game-screen';

function TrainScreen() {
    const children = (
        `
        <span>train screen</span>
        `
    );

    return GameScreen({
        children
    });
}
export { TrainScreen };
