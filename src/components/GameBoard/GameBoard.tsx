import React, { useState } from 'react';

import Ball from '../Ball/Ball';
import Button from '../Button/Button';
import Container from '../Container/Container';
import {dictionary, gameOptions, descriptionSteps} from '../../helpers/constants';
import {randomBallPosition, initValues } from '../../helpers/helpers';
import { gameSteps } from '../../helpers/helpers.interface';
import type * as CSS from 'csstype';

const containerBoardCSS: CSS.Properties = {
    display: 'inline-flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    border: '0.1rem dotted dimgrey',
    padding: '1rem',
    width: `${7 * gameOptions.NR_CONTAINERS}rem`,
};

const containerWrapperCSS: CSS.Properties = {
    height: '6rem',
    width: '6rem',
    margin: '0.5rem',
};

const descriptionCSS: CSS.Properties = {
    marginTop: '2rem',
    fontSize: 'calc(2vmin)',
}

const ContainerBoard = () => {
    const { NR_SHUFFLE, NR_CONTAINERS } = gameOptions;
    const { START, SHUFFLE } = gameSteps;
    const {
        gameBoard, containerPos, gameBoardSize 
    } = initValues;
    
    // because of the animations, we can't setState on this
    let containerPositions = [...containerPos];
    
    const [ballDisplayed, displayBall] = useState(false);
    const [playing, hideButton] = useState(false);
    const [gameStep, setStep] = useState(START);
    const [description, setDescription] = useState('');
    const [ballPosition] = useState(randomBallPosition());

    const onClickContainer = (containerIndex: number) => () => {
        containerIndex = containerPositions.findIndex(c => c === containerIndex);

        if (gameStep === SHUFFLE) {
            if (containerIndex === ballPosition && playing) {
                displayBall(true);
                hideButton(false);
                setDescription(descriptionSteps.win);
                setStep(START);
            } else {
                setDescription(descriptionSteps.fail);
            }
        }
    }

    const initBoard = () => (
        Array.from(gameBoard, index => 
            <div style={containerWrapperCSS} className={`container_${index}`} key={index}>
                {
                    containerPositions.includes(gameBoard[index]) &&
                    <Container
                        key={index}
                        onClick={onClickContainer(index)}
                        content={
                            containerPositions.findIndex(c => c === index) === ballPosition ?
                            <Ball isDisplayed={ballDisplayed} /> : undefined
                        }
                    />
                }
            </div>    
        )
    );

    const startGame = () => {
        displayBall(true);
        setStep(SHUFFLE);
        setDescription(descriptionSteps.start);
    }

    const shuffleGame = () => {
        let i = 0;
        const shuffledContainerPositions: number[] = [];
        displayBall(false);
        hideButton(true);
        setDescription(descriptionSteps.readyStart);

        const interval = setInterval(() => {
            setDescription(descriptionSteps.shuffle);

            if (i < NR_SHUFFLE) {
                containerPositions.forEach((_, index: number) => {
                    let newIndex: number = Math.floor(Math.random() * gameBoardSize);
        
                    // this includes complexitiy but we need to ensure there is no multiple containers in the same position
                    while (shuffledContainerPositions.includes(newIndex)) {
                        newIndex = Math.floor(Math.random() * gameBoardSize);
                    }
                
                    const oldElement: Element = document.getElementsByClassName(`container_${index}`)[0];
                    const newElement: Element = document.getElementsByClassName(`container_${newIndex}`)[0];
    
                    const offset = calculateOffset(oldElement as HTMLElement, newElement as HTMLElement);

                    oldElement.setAttribute('style',`transition: transform 1s ease-in-out; transform: translate(${offset.x}px, ${offset.y}px);`);

                    shuffledContainerPositions[index] = newIndex;
                });

                // set the elements into an array without changing the state
                containerPositions = [...shuffledContainerPositions];
                i++;
            } else {
                clearInterval(interval);
            }
        }, 1000);
    }

    const onClickButton = () => {
        switch (gameStep) {
            case START: {
                return startGame();
            }
            case SHUFFLE: {
                return shuffleGame();
            }
            default:
                return () => {};
        }
    }

    const calculateOffset = (oldElem: HTMLElement, newElem: HTMLElement) => {
        const oldY = oldElem.offsetTop;
        const oldX = oldElem.offsetLeft;

        const newY = newElem.offsetTop;
        const newX = newElem.offsetLeft;

        return {
            x: newX - oldX,
            y: newY - oldY
        }
    }

    const getStringForStep = (): string => {

        switch(gameStep) {
            case gameSteps.START:
                return dictionary.START;
            case gameSteps.SHUFFLE:
                return dictionary.SHUFFLE;
            default:
                return '' ;       
        }
    }

    return (
        <div className="gameBoard">
            <div style={containerBoardCSS}>
                {
                    initBoard()
                }
            </div>
            <p style={descriptionCSS}>{description}</p>
            {!playing && <Button label={getStringForStep()} onClick={onClickButton} />}
        </div>
    );
};

export default ContainerBoard;