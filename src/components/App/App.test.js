import React from 'react';
import { shallow } from 'enzyme';

import App from './App';
import GameBoard from '../GameBoard/GameBoard';

describe('App Component', () => {
    it('renders the component correctly', () => {
        const app = shallow(<App />);

        expect(app).toMatchSnapshot();
    });

    it('it does not render the component if the flag to display is set to false', () => {
        const app = shallow(<App />);

        expect(app.find('header')).toHaveLength(1);
        expect(app.find(GameBoard)).toHaveLength(1);
    });
});
