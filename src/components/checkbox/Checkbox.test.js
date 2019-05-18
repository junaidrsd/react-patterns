import React from 'react';
import { shallow } from 'enzyme';
import Checkbox from './Checkbox';

describe('<Checkbox />', () => {

  it('is a valid component', () => {
    const wrapper = shallow(<Checkbox id="chk-1" label="Basic checkbox" />);
    expect(wrapper.find('input')).toHaveLength(1);
    expect(wrapper.find('label').exists).toBeTruthy();
  });

  it('renders input with id', () => {
    const wrapper = shallow(<Checkbox id="chk-1" label="Basic checkbox" />);
    expect(wrapper.find('input').prop('id')).toBe('chk-1');
  });

  it('renders input with label', () => {
    const wrapper = shallow(<Checkbox id="chk-1" label="Basic checkbox" />);
    expect(wrapper.find('[htmlFor="chk-1"]')).toHaveLength(1);
  });

  it('Renders unchecked checkbox', () => {
    const wrapper = shallow(<Checkbox id="chk-1" label="Unchecked checkbox" />);
    expect(wrapper.find('input').checked).toBe(undefined);
  });

  it('Renders correctly checked checkbox', () => {
    const wrapper = shallow(<Checkbox id="chk-1" label="Checked checkbox" checked />);
    expect(wrapper.find('input').prop('checked')).toBe(true);
  });

  it('Renders disabled checkbox', () => {
    const wrapper = shallow(<Checkbox id="chk-1" label="Checked checkbox" disabled />);
    expect(wrapper.find('input').prop('disabled')).toBe(true);
  });

});

