# React Patterns

Reusable React component library that supports storybook driven development.

## Using library in Project


# Using from git
* Include the library to your package.json dependencies:

```
"react-patterns": "git+ssh://git+https://github.com/junaidrsd/react-patterns.git"
```

And use it!

```
import React, {Component} from 'react';
import { Checkbox } from 'react-patterns';

class Application extends Component {
  render() {
    return (
      <div>
        <H1>Hello World</H1>
        <Checkbox />
      </div>)
  }
}
```

# Contents
```
checkbox
|-- Checkbox
``

## Developement and contribution process

```
npm install
```

# Start developing with Storybook

```
npm run storybook
```

# Running test

```
npm run test
```

# Release the library
```
npm run build
```
## Link react-patterns npm package to consumer's environment

In react-patterns root enter
```
npm link
```
Once it returns a linked string then from app project enter the following command
```
npm link react-patterns
```


