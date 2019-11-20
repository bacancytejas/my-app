import React from 'react';
import App from './App';

import {shallow} from 'enzyme';

it('renders without crashing', () => {
  const wrapper = shallow(<App />);
  const welcome = <h1 className="App-title">Edit</h1>;
  expect(wrapper.contains(welcome)).toEqual(true);
});
