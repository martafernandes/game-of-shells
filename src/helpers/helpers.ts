import { gameOptions } from './constants';

const { NR_CONTAINERS } = gameOptions;
const gameBoardSize: number = NR_CONTAINERS * NR_CONTAINERS;


export const initValues ={
    gameBoardSize,
    gameBoard: Array.from(Array(gameBoardSize), (v, i) => i),
    containerPos: Array.from(Array(NR_CONTAINERS), (v, i) => i),
};

export const randomBallPosition = () => Math.floor(Math.random() * NR_CONTAINERS);