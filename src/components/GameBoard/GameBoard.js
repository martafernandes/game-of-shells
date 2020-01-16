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
    } = constants;
    const {
        gameSteps: { start, shuffle },
        randomBallPosition,
        initValues: { gameBoard, containerPos }
    } = helpers;
    
    const [ballDisplayed, toggleBallVisible] = useState(false);
    const [playing, toggleButtonVisible] = useState(false);
    const [gameStep, setStep] = useState(start);
    const [containerPositions, setContainerPositions] = useState(containerPos);
    const [ballPosition, hideBall] = useState(randomBallPosition())

    const onClickContainer = containerIndex => () => {
        if (containerIndex === ballPosition && playing) {
            toggleBallVisible(true);
            toggleButtonVisible(false);
        }
    }

    const startGame = () => {
        toggleBallVisible(true);
        setStep(shuffle);
    }

    const shuffleGame = () => {
        toggleBallVisible(false);
        toggleButtonVisible(true);
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
                    Array.from(gameBoard, index => 
                        <div className="containerWrapper" key={index}>
                            {
                                containerPositions.includes(gameBoard[index]) &&
                                <Container
                                    key={index}
                                    onClick={onClickContainer(index)}
                                    content={
                                      index === ballPosition ? <Ball isDisplayed={ballDisplayed} /> : null
                                    }
                                />
                            }
                        </div>    
                    )
                }
            </div>
            {!playing && <Button label={dictionary[gameStep]} onClick={() => onClickButton()} />}
            
        </div>
    );
};

export default ContainerBoard;