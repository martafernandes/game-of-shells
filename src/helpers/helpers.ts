import { gameOptions } from './constants';

const { NR_CONTAINERS } = gameOptions;
const gameBoardSize: number = NR_CONTAINERS * NR_CONTAINERS;


export const initValues ={
    gameBoardSize,
    gameBoard: Array.from(Array(gameBoardSize), (v, i) => i),
    containerPos: Array.from(Array(NR_CONTAINERS), (v, i) => i),
};

export const descriptionSteps = {
        start: 'Please pay attention where the ball is hidden.',
        readyStart: 'Ready... go!',
        shuffle: 'Do you still remember where the ball is hidden? Give it a try!',
        fail: 'Sorry... you failed...',
        win: 'Yeah!!',
};

export const randomBallPosition = () => Math.floor(Math.random() * NR_CONTAINERS);