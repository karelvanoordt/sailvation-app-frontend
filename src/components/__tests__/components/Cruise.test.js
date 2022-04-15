import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../../__mocks__/configureStore';
import Cruise from '../../cruises/Cruise';


describe('Choose a Cruise', () => {
    it('renders correctly', () => {
      const tree = render(<Provider store={store}><Router><Cruise /></Router></Provider>);
      expect(tree).toMatchSnapshot();
    });
});
