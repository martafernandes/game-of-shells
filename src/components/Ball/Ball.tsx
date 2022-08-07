import React from 'react';
import type * as CSS from 'csstype';

const css: CSS.Properties = {
    background: 'radial-gradient(circle at 2rem 2rem, #5cabff, #000)',
    borderRadius: '50%',
    margin: '0',
    height: '3rem',
    width: '3rem',
    position: 'absolute',
    top: '50%', 
    left: '50%',
    transform: 'translate(-50%, -25%)',
};

const Ball = ({
    isDisplayed,
}: Props) => (
    isDisplayed ? <figure
        style={css}
    >
    </figure> : null
);

type Props = {
    isDisplayed: boolean
}

export default Ball;