export interface IDictionary {
    START: string,
    TITLE: string,
    SHUFFLE: string
};

export interface IGameOptions {
    NR_CONTAINERS: number,
    NR_SHUFFLE: number,
};

export enum gameSteps { 'START', 'SHUFFLE', 'PLAYING'};