import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { Provider } from 'react-redux';
import store from '../__mocks__/configureStore';
import ReservationMain from '../reservations/ReservationMain';

describe('Login page is working fine', () => {
  test('renders Login', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <ReservationMain />
        </BrowserRouter>
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
