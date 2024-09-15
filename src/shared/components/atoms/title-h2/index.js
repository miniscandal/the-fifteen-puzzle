import './style.css';

function TitleH2({ text = 'Title h2' }) {
    return (
        `
        <h2 class="title-h2">${text}</h2>
        `
    );
}

export { TitleH2 };
