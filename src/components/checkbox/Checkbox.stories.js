import React from 'react';
import { storiesOf } from '@storybook/react';

storiesOf('Button', module)
  .add('with text', () => (
    <button>Hello Button</button>
  ))
  .add('with emoji', () => (
    <span role="img" aria-label="so cool">😀 😎 👍 💯</span>
  ));
