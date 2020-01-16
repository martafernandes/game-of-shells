import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line
import styles from "./Container.css";

const Container = ({ onClick, content }) => (
    <figure
        className="container"
        onClick={onClick}
    >
            {content}
    </figure>
);

Container.propTypes = {
    onClick: PropTypes.func.isRequired,
    content: PropTypes.element
};

Container.defaultProps = {
    content: null,
};

export default Container;