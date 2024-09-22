import './style.css';

function Picture({
    src = URL.createObjectURL(new Blob([], { type: 'image/png' })),
    alt = 'picture',
    size = 'default'
}) {

    return (
        `
        <div class="picture" data-size=${size}> 
            <img src=${src} alt=${alt} />
        </div>
        `
    );
}

export { Picture };
