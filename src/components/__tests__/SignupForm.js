import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { Provider } from 'react-redux';
import store from '../__mocks__/configureStore';
import SignupForm from '../login/SignupForm';

describe('Signup page is working fine', () => {
  test('renders Signup', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <SignupForm />
        </BrowserRouter>
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
