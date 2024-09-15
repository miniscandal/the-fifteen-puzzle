import './style.css';

function TitleH1({ text = 'Title h1' }) {
    return (
        `
        <h1 class="title-h1">${text}</h1>
        `
    );
}

export { TitleH1 };
