import constants from '../../helpers/constants';

const { gameOptions: { NR_CONTAINERS }} = constants;

export default {
    initValues: {
        gameBoard: Array.from(Array(NR_CONTAINERS * NR_CONTAINERS), (v, i) => i),
        containerPos: Array.from(Array(NR_CONTAINERS), (v, i) => i),
    },
    gameSteps: {
        start: 'START',
        shuffle: 'SHUFFLE',
        playing: 'PLAYING',
    },
    randomBallPosition: () => Math.floor(Math.random() * (Math.floor(NR_CONTAINERS))),
}