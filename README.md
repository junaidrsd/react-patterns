# React Patterns

Reusable React component library that supports storybook driven development.

## Using components in Project

Install using NPM

```
npm install git+https://github.com/junaidrsd/react-patterns.git
```
or

Add into package.json in dependencies section

```
"react-patterns": "git+https://github.com/junaidrsd/react-patterns.git"
```

And use it!

```
import React, {Component} from 'react';
import { Checkbox } from 'react-patterns';
import 'react-patterns/dist/styles.css';


class Application extends Component {
  state = {
    checked: false,
  };

  handleChange = (e) => {
    if(e.target.checked) {
      // do something
    }
    this.setState({ checked: !this.state.checked })
  }

  render() {
    return (
      <div>
        <H1>Hello World</H1>
        <Checkbox
          id="chk-1"
          label="basic checkbox"
          checked={this.state.checked}
          onChange={(e) => handleChange(e)}
        />
      </div>)
  }
}
```
