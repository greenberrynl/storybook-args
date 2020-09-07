# Storybook Args

![Node.js Package](https://github.com/greenberrynl/storybook-args/workflows/Node.js%20Package/badge.svg)

This package holds the util helper for setting up arguments within Storybook. It will automatically arrange the suited controls based on a given value and speed up declaring any custom arguments.

## Example

Add arguments by importing the `args` helper. This will return an array containing the `argsTypes` key. Meaning you can spread the object withing the export of the story like so:

```
const types = args([
  {
    name: 'name',
    value: 'Sander',
  },
]);

export default {
  title: 'Component/Example',
  component: Example,
  ...types,
};
```

### Default

By default the `args` util will assume you are trying to pass a string. This means that you only need to pass the name of the argument, any other values would are automatically assigned, for instance the type of the argument.

```
const types = args([
  {
    name: 'name',
  },
]);
```

This will result in the following setup.

## Storybook docs

Storybook has their own documentation about adding new types in the documentation, these can be found [here](https://storybook.js.org/docs/react/api/argtypes).
