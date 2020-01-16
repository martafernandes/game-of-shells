import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line
import styles from "./Container.css";

const Container = ({ onClick, content }) => (
    <div className="container">
        <figure
            className="shell"
            onClick={onClick}
        >
                {content}
        </figure>
    </div>
);

Container.propTypes = {
    onClick: PropTypes.func.isRequired,
    content: PropTypes.element
};

Container.defaultProps = {
    content: null,
};

export default Container;