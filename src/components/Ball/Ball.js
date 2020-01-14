import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line
import styles from "./Ball.css";

const Ball = ({
    isDisplayed,
}) => (
    isDisplayed && <figure
        className="ball"
    >
    </figure>
);

Ball.propTypes = {
    isDisplayed: PropTypes.bool.isRequired,
};

export default Ball;