import { Picture } from '../../../../shared/components/atoms/picture';
import { pictureKawaiiGamerDog } from '../../../../shared/components/atoms/picture/variants';

import './style.css';

function GameArtwork() {
    const picture = Picture(pictureKawaiiGamerDog);


    return (
        `
        <section class="game-artwork">
            ${picture}
        </section>
        `
    );
}

export { GameArtwork };
