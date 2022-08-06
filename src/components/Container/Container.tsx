import React, { MouseEventHandler, ReactElement } from 'react';
import type * as CSS from 'csstype';

const css: CSS.Properties = {
    background: 'radial-gradient(ellipse at top, #deebff, transparent), radial-gradient(ellipse at bottom, #555, transparent)',
    borderRadius: '50% 50% 10% 10%',
    height: '6rem',
    margin: 'auto',
    position: 'relative',
    width: '6rem',
}

const Container = ({ onClick, content }: Props) => (
    <figure
        style={css}
        onClick={onClick}
    >
            {content}
    </figure>
);

type Props = {
    onClick: MouseEventHandler,
    content?: ReactElement,
};

export default Container;