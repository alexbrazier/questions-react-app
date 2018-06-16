import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Answer from './Answer';

describe('<Answer />', () => {
  it('renders highlight div', () => {
    const data = {
      options: ['a', 'b'],
      selected: 0,
      index: 0,
      toggle: () => {},
    };
    const wrapper = shallow(<Answer {...data} />);
    expect(wrapper.find('.highlighted')).to.have.length(1);
  });

  it('renders a button for each option', () => {
    const data = {
      options: ['a', 'b'],
      selected: 0,
      index: 0,
      toggle: () => {},
    };
    const wrapper = shallow(<Answer {...data} />);
    expect(wrapper.find('button')).to.have.length(2);
  });

  it('marks correct button as selected when first is selected', () => {
    const data = {
      options: ['a', 'b'],
      selected: 0,
      index: 0,
      toggle: () => {},
    };
    const wrapper = shallow(<Answer {...data} />);
    expect(wrapper.find('button').at(0).hasClass('selected')).to.equal(true);
    expect(wrapper.find('button').at(1).hasClass('selected')).to.equal(false);
  });

  it('marks correct button as selected when second is selected', () => {
    const data = {
      options: ['a', 'b'],
      selected: 1,
      index: 0,
      toggle: () => {},
    };
    const wrapper = shallow(<Answer {...data} />);
    expect(wrapper.find('button').at(0).hasClass('selected')).to.equal(false);
    expect(wrapper.find('button').at(1).hasClass('selected')).to.equal(true);
  });

  it('should call toggle when button clicked', () => {
    const data = {
      options: ['a', 'b'],
      selected: 0,
      index: 0,
      toggle: sinon.spy(),
    };
    const wrapper = shallow(<Answer {...data} />);
    wrapper.find('button').at(0).simulate('click');
    wrapper.find('button').at(1).simulate('click');
    expect(data.toggle.called).to.equal(true);
    expect(data.toggle.calledTwice).to.equal(true);
  });
});
