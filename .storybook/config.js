import { configure } from '@storybook/react';

const req = require.context('../src', true, /\.stories\.js$/)

function loadStories() {

  req.keys().forEach((filename) => req(filename))
  //require('../stories/index.js');
  // You can require as many stories as you need.
}

configure(loadStories, module);
