# `@usertech/styled-utils`

> ⚠ This is an early stage work in progress

There are [many accompanying libraries](https://github.com/styled-components/awesome-styled-components#helpers)
meant to be used with `styled-components` to make styles more readable.
This document guides developers through common scenarios when styling components.
It discourages overusing helper/theming libraries and tries to pick ones which respect the css nature of styled-components.

## IDE Support

[Syntax Highlighting](https://www.styled-components.com/docs/tooling#syntax-highlighting)

- An alternative for [Sublime Text 2](https://github.com/babel/babel-sublime/issues/333#issuecomment-371478335) if official plugin fails.

## Common scenarios

### Accessing component props - `sget`

**s**tyled **get** - getter for retrieving values from props in styled-components tagged template string.

    sget(path, defaultValue, modifierFunction)

Params:

    path: string|string[] - Lodash get property path
    defaultValue?: string|number - default value to use when property is undefiend
    modifierFunction?: Function - function from `polished` package to modify value with

Example:

    import styled from 'styled-components';
    import { lighten } from 'polished';
    import { sget } from '@usertech/styled-utils';

    # Bad
    const OldButton = styled.button`
        color: ${({ theme: { COLOR_PRIMARY } }) => COLOR_PRIMARY ? lighten(0.3, COLOR_PRIMARY) : 'black'};
        color: ${({ color }) => color || 'black'};
    `

    # Good
    const NewButton = styled.button`
        color: ${sget('theme.COLOR_PRIMARY', 'black', lighten(0.3))};
        color: ${sget('color', 'black'};
    `


## Mapping boolean props to style modifiers - `styled-map`

[Why Styled Map?](https://github.com/scf4/styled-map#why-styled-map)

## Conditionally applying styles based on boolean props - `styled-is`

[styled-is Usage](https://github.com/yldio/styled-is#usage)
