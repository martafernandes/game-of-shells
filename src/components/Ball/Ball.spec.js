import React from 'react';
import { shallow } from 'enzyme';

import Ball from './Ball';

describe('Ball Component', () => {
    it('renders the component correctly', () => {
        const ball = shallow(<Ball isDisplayed={true}/>);

        expect(ball).toMatchSnapshot();
    });
});