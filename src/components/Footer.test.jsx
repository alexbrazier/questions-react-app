import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Footer from './Footer';

describe('<Footer />', () => {
  it('renders 4 sections', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find('.section')).to.have.length(4);
  });
});
