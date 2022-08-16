import { IDictionary, IGameOptions } from './helpers.interface';

export const dictionary: IDictionary = {
    TITLE: 'Welcome to Game of Shells',
    START: 'Start playing',
    SHUFFLE: 'Shuffle the shells',
};

export const gameOptions: IGameOptions = {
    NR_CONTAINERS: 3,
    NR_SHUFFLE: 4,
};

export const descriptionSteps = {
    start: 'Please pay attention where the ball is hidden.',
    readyStart: 'Ready... go!',
    shuffle: 'Do you still remember where the ball is hidden? Give it a try!',
    fail: 'Sorry... you failed...',
    win: 'Yeah!!',
};