import React from 'react';
import type * as CSS from 'csstype';

const css: CSS.Properties = {
    background: 'radial-gradient(circle at 2rem 2rem, #5cabff, #000)',
    borderRadius: '50%',
    margin: '0',
    height: '3rem',
    width: '3rem',
    position: 'absolute',
    bottom: '0',
    left: '25%',
};

const Ball = ({
    isDisplayed,
}: Props) => (
    isDisplayed && <figure
        style={css}
    >
    </figure>
);

type Props = {
    isDisplayed: boolean
}

export default Ball;