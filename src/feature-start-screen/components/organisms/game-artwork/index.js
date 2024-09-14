import { Picture } from '../../../../shared/components/atoms/picture';
import { pictureKawaiiGamerDog } from '../../../../shared/components/atoms/picture/variants';

function GameArtwork() {
    const picture = Picture(pictureKawaiiGamerDog);


    return (
        `
        <section>
            ${picture}
        </section>
        `
    );
}

export { GameArtwork };
