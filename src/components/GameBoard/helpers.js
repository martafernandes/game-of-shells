import constants from '../../helpers/constants';

const { gameOptions: { NR_CONTAINERS }} = constants;
const gameBoardSize = NR_CONTAINERS * NR_CONTAINERS;

export default {
    initValues: {
        gameBoardSize,
        gameBoard: Array.from(Array(gameBoardSize), (v, i) => i),
        containerPos: Array.from(Array(NR_CONTAINERS), (v, i) => i),
    },
    gameSteps: {
        start: 'START',
        shuffle: 'SHUFFLE',
        playing: 'PLAYING',
    },
    descriptionSteps: {
        start: 'Please pay attention where the ball is hidden.',
        shuffle: 'Do you still remember where the ball is hidden? Give it a try!',
        fail: 'Sorry... you failed...',
        win: 'Yeah!!',
    },
    randomBallPosition: () => Math.floor(Math.random() * NR_CONTAINERS),
}