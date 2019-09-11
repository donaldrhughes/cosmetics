import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Text } from 'react-native';
import { expect } from 'chai';

import App from './App';

Enzyme.configure({ adapter: new Adapter() });

describe('<App>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });
  it('renders default Text', () => {
    expect(wrapper.find(Text)).to.have.lengthOf(3);
  });
});