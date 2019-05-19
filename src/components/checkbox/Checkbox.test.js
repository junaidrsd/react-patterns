import React from 'react';
import { shallow } from 'enzyme';
import Checkbox from './Checkbox';

describe('<Checkbox />', () => {
  let wrapper;
  beforeEach(()=> {
    wrapper = shallow(<Checkbox id="chk-1" label="Basic checkbox" />);
  });

  it('is a valid component', () => {
    expect(wrapper.hasClass('te-checkbox')).toBe(true);
    expect(wrapper.find('.te-checkbox__input')).toHaveLength(1);
    expect(wrapper.find('.te-checkbox__label').exists).toBeTruthy();
  });

  it('renders input with id', () => {
    expect(wrapper.find('input').prop('id')).toBe('chk-1');
  });

  it('renders label for input', () => {
    expect(wrapper.find('[htmlFor="chk-1"]')).toHaveLength(1);
  });

  it('renders unchecked checkbox', () => {
    expect(wrapper.find('.te-checkbox__input').checked).toBe(undefined);
  });

  it('renders correctly checked checkbox', () => {
    wrapper.setProps({ checked: true });
    expect(wrapper.find('.te-checkbox__input').prop('checked')).toBe(true);
  });

  it('renders disabled checkbox', () => {
    wrapper.setProps({ disabled: true });
    expect(wrapper.find('.te-checkbox__input').prop('disabled')).toBe(true);
  });

  it('simulates onChange events', () => {
    const onCheckboxClick = jest.fn();
    const event = { target: { checked: true } };
    wrapper.setProps({ onChange: onCheckboxClick });
    wrapper.find('.te-checkbox__input').simulate('change', event);
    expect(onCheckboxClick).toBeCalled();
    expect(onCheckboxClick).toHaveBeenLastCalledWith(event);
  });

});

