import React from 'react';
import { shallow } from 'enzyme';

import Container from './Container';

describe('Container Component', () => {
    it('renders the component correctly', () => {
        const container = shallow(<Container />);

        expect(button).toMatchSnapshot();
    });
});