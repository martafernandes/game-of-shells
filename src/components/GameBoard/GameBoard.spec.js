import React from 'react';
import { shallow } from 'enzyme';

import GameBoard from './GameBoard';
import Button from '../Button/Button';

describe('GameBoard Component', () => {
    it('renders the component correctly', () => {
        const gameBoard = shallow(<GameBoard />);

        expect(gameBoard).toMatchSnapshot();
    });

    it('updates the state for', () => {
        const setState = jest.fn();
        const useStateSpy = jest.spyOn(React, 'useState');

        useStateSpy.mockImplementation((ballDisplayed) => [ballDisplayed, setState]);
        useStateSpy.mockImplementation((gameStep) => [gameStep, setState]);
        useStateSpy.mockImplementation((description) => [description, setState]);

        const gameBoard = shallow(<GameBoard />);
        const button = gameBoard.find(Button);
        button.simulate('click');

        expect(setState).toHaveBeenCalled;
    });
});