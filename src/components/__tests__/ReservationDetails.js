import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { Provider } from 'react-redux';
import store from '../__mocks__/configureStore';
import ReservationDetails from '../reservations/ReservationDetails';

describe('ReservationDetails page is working fine', () => {
  test('renders ReservationDetails', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <ReservationDetails />
        </BrowserRouter>
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
