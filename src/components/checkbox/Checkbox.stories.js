import React from 'react';
import { storiesOf } from '@storybook/react';
import { action, configureActions } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import centered from '@storybook/addon-centered/react';
import Checkbox from './';


class Parent extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      checked: false,
    }
  }

  handleChange = (e) => {
    action('checkbox-click');
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
  .addDecorator(centered)
  .addDecorator(withInfo)
  .add('Checkbox with different states', () => (
    <div>
      <Parent id="chk-4" />
      <Checkbox id="chk-5" label="Checked checkbox" checked />
      <Checkbox id="chk-6" label="I am disabled" disabled />
    </div>
  ))
