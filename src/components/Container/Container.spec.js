import React from 'react';
import { shallow } from 'enzyme';

import Container from './Container';

describe('Container Component', () => {
    it('renders the component correctly', () => {
        const container = shallow(<Container onClick={() => {}} />);

        expect(container).toMatchSnapshot();
    });

    it('renders the component with all props', () => {
        const elem = <div className="someContent"/>
        const container = shallow(<Container onClick={() => {}} content={elem}/>);

        expect(container.find('figure')).toHaveLength(1);
        expect(container.find('.someContent')).toHaveLength(1);
    });
});