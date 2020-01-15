import React from 'react';

import Ball from '../Ball/Ball';
import Container from '../Container/Container';
import constants from '../../config/constants';

// eslint-disable-next-line
import styles from "./ContainerBoard.css";

const ContainerBoard = () => {
    const { gameOptions: { NR_CONTAINERS }} = constants;

    return (
        <div className="containerBoard">
            {
                Array.from(Array(NR_CONTAINERS), index => <Container key={index} />)
            }
        </div>
    );
};

export default ContainerBoard;