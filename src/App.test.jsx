import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import App from './App';

describe('<App />', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('renders header', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('header')).to.have.length(1);
  });

  it('renders Footer', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Footer')).to.have.length(1);
  });
});
