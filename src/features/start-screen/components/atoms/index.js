import './style.css';

function AnimeCharacter({
    src = URL.createObjectURL(new Blob([], { type: 'image/png' })),
    alt = 'picture'
}) {

    return (
        `
        <div class="anime-character"> 
            <img src=${src} alt=${alt} />
        </div>
        `
    );
}

export { AnimeCharacter };
