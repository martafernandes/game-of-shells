import React, { MouseEventHandler } from 'react';
import type * as CSS from 'csstype';

const css: CSS.Properties = {
    backgroundColor: '#282c34',
    color: 'white',
    marginTop: '1rem',
    padding: '0.7rem 1rem',
    fontSize: 'calc(2vmin)',
    borderRadius: '0.8rem',
    borderColor: 'white',
}

const Button = ({
    label,
    onClick,
}: Props) => (
    <button
        style={css}
        onClick={onClick}
    >
        {label}
    </button>
);

type Props = {
    label: string,
    onClick: MouseEventHandler,
};

export default Button;