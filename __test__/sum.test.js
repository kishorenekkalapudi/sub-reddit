import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import MyComponent from '../pages';

describe('<MyComponent />', () => {


  it('renders an `.main`', () => {
    const wrapper = shallow(<MyComponent />);
    expect(wrapper.find('.main')).to.have.lengthOf(1);
  });


});