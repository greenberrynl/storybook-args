# Storybook Args

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
