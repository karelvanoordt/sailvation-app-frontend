import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { Provider } from 'react-redux';
import store from '../__mocks__/configureStore';
import Nav from '../nav/Nav';

describe('Nav page is working fine', () => {
  test('renders Nav', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <Nav />
        </BrowserRouter>
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
