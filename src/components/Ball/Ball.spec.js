import React from 'react';
import { shallow } from 'enzyme';

import Ball from './Ball';

describe('Ball Component', () => {
    it('renders the component correctly', () => {
        const ball = shallow(<Ball isDisplayed={true}/>);

        expect(ball).toMatchSnapshot();
    });

    it('it does not render the component if the flag to display is set to false', () => {
        const ball = shallow(<Ball isDisplayed={false}/>);

        expect(ball.find('figure')).toHaveLength(0);
    });
});