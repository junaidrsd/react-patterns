import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import Checkbox from './';


class Parent extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      checked: false,
    }
  }

  handleChange = (e) => {
    action('Checkbox clicked');
    this.setState({ checked: !this.state.checked});
  }

  render() {
    const { id, disabled } = this.props;
    return (
      <Checkbox
        id={id}
        label="Basic checkbox"
        onChange={(e) => this.handleChange(e)}
        checked={this.state.checked}
        disabled={disabled}
        />
    )
  }
}

storiesOf('Checkbox', module)
  .add('Basic checkbox', withInfo()(() => (
    <Parent id="chk-3" />
  )))
  .add('Checked Checkbox', withInfo()(() => (
    <Checkbox id="chk-2" label="Baic checkbox" checked />
  )))
  .add('I am disabled', withInfo()(() => (
    <Checkbox id="chk-2" label="I am disabled" disabled />
  )))
