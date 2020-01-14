import React from 'react';
import { shallow } from 'enzyme';

import Button from './Button';

describe('Button Component', () => {
    it('renders the component correctly', () => {
        const TITLE='some title';
        const noop = () => {};
        const button = shallow(<Button label={TITLE} onClick={noop}/>);

        expect(button).toMatchSnapshot();
    });

    it('renders the component with correct props', () => {
        const TITLE='some title';
        const noop = jest.fn();
        const button = shallow(<Button label={TITLE} onClick={noop}/>);

        expect(button.text()).toBe(TITLE);
        button.simulate('click');
        expect(noop).toHaveBeenCalled();
    });
});