import './styles.scss';

const gameBoard = document.querySelector('#gameBoard');
const buttons = [...document.querySelectorAll('.sizes')];
buttons.forEach(e => e.addEventListener('click', () => {
    const size = e.getAttribute('data-size');

    for (let i = 0; i < Math.pow(size, 2); i++) {
        const div = document.createElement('div');
        gameBoard.append(div);
        gameBoard.setAttribute("style", `grid-template-columns: repeat(${size}, 1fr);`);
    }
}));