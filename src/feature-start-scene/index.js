function startScene({ game }) {
    game.scene(html());

    setupCounter(document.querySelector('#counter'));
}

function html() {
    return `
	<div>
		<h1>The Fifteen Puzzle!</h1>
		<div>
			<button id="counter" type="button"></button>
		</div>
	</div>
`
}

function setupCounter(element) {
    let counter = 0
    const setCounter = (count) => {
        counter = count
        element.innerHTML = `count is ${counter}`
    }
    element.addEventListener('click', () => setCounter(counter + 1))
    setCounter(0)
}


export { startScene };
