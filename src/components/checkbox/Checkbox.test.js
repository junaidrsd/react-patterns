import React from 'react';
import { shallow } from 'enzyme';
import Checkbox from './Checkbox';

describe('<Checkbox />', () => {
  it('is a valid component', () => {
    const wrapper = shallow(<Checkbox />);
    const input = wrapper.find({ type: 'checkbox' });
    console.log(input.debug());
    expect(input.exists).toBeTruthy();
  });
});

