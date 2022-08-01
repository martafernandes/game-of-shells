import React, { useState } from 'react';

import Ball from '../Ball/Ball';
import Button from '../Button/Button';
import Container from '../Container/Container';
import constants from '../../helpers/constants';
import helpers from './helpers';

// eslint-disable-next-line
import styles from "./GameBoard.css";

const ContainerBoard = () => {
    const { 
        dictionary,
        gameOptions: { NR_SHUFFLE }
    } = constants;
    const {
        gameSteps: { start, shuffle },
        randomBallPosition,
        descriptionSteps,
        initValues: { gameBoard, containerPos, gameBoardSize }
    } = helpers;
    
    // because of the animations, we can't setState on this
    let containerPositions = [...containerPos];
    
    const [ballDisplayed, displayBall] = useState(false);
    const [playing, hideButton] = useState(false);
    const [gameStep, setStep] = useState(start);
   // const [containerPositions, setContainerPositions] = useState(containerPos);
    const [ballPosition, hideBall] = useState(randomBallPosition());
    const [description, setDescription] = useState('');

    const onClickContainer = containerIndex => () => {
        containerIndex = containerPositions.findIndex(c => c === containerIndex);

        if (gameStep === shuffle) {
            if (containerIndex === ballPosition && playing) {
                displayBall(true);
                hideButton(false);
                setDescription(descriptionSteps.win);
                setStep(start);
            } else {
                setDescription(descriptionSteps.fail);
            }
        }
    }

    const initBoard = () => (
        Array.from(gameBoard, index => 
            <div className={`containerWrapper container_${index}`} key={index}>
                {
                    containerPositions.includes(gameBoard[index]) &&
                    <Container
                        key={index}
                        onClick={onClickContainer(index)}
                        content={
                            containerPositions.findIndex(c => c === index) === ballPosition ?
                            <Ball isDisplayed={ballDisplayed} /> : null
                        }
                    />
                }
            </div>    
        )
    );

    const startGame = () => {
        displayBall(true);
        setStep(shuffle);
        setDescription(descriptionSteps.start);
    }

    const shuffleGame = () => {
        let i = 0;
        const shuffledContainerPositions = [];
        displayBall(false);
        hideButton(true);

        // setTimeOut is just to simulate the shuffle efect, event without the CSS transitions 
        const interval = setInterval(() => {
            if (i < NR_SHUFFLE) {
                containerPositions.forEach((container, index) => {
                    let newIndex = Math.floor(Math.random() * gameBoardSize);
        
                    // this includes complexitiy but we need to ensure there is no multiple containers in the same position
                    while (shuffledContainerPositions.includes(newIndex)) {
                        newIndex = Math.floor(Math.random() * gameBoardSize);
                    }
                
                    const oldElement = document.getElementsByClassName(`container_${index}`)[0]
                    const newElement = document.getElementsByClassName(`container_${newIndex}`)[0]
    
                    const oldY = oldElement.offsetTop;
                    const oldX = oldElement.offsetLeft;

                    const newY = newElement.offsetTop;
                    const newX = newElement.offsetLeft;

                    oldElement.style = `transition: transform 1s ease-in-out; transform: translate(${newX - oldX}px, ${newY - oldY}px);`;

                    shuffledContainerPositions[index] = newIndex;
                });

            // setContainerPositions(shuffledContainerPositions);
                // set the elements into an array without changing the state
                containerPositions = [...shuffledContainerPositions];
                i++;
            } else {
                clearInterval(interval);
            }
        }, 1000);

        setDescription(descriptionSteps.shuffle);
    }

    const onClickButton = () => {
        switch (gameStep) {
            case start: {
                return startGame();
            }
            case shuffle: {
                return shuffleGame();
            }
            default:
                return () => {};
        }
    }

    return (
        <div className="gameBoard">
            <div className="containerBoard">
                {
                    initBoard()
                }
            </div>
            <div className="description">{description}</div>
            {!playing && <Button label={dictionary[gameStep]} onClick={() => onClickButton()} />}
        </div>
    );
};

export default ContainerBoard;