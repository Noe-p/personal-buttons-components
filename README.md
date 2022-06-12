# React Buttons Components

## ToggleMenuButton

![](https://github.com/Noe-p/gif-server/blob/main/ToggleMenuButtonComponent.gif?raw=true)
### Installation

```jsx
yarn add @noe-p/react-buttons-components
```

### Usage

```jsx
import { ToggleMenuButton } from '@noe-p/react-buttons-components';
import { useState } from 'react';

export function Button(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  return <ToggleMenuButton isMenuOpen={isOpen} setIsMenuOpen={setIsOpen} />;
}
```

### Required Props

| Props | Type | Description |
| --- | --- | --- |
| isMenuOpen | boolean | Boolean to change button state |
| onClick | function(value: boolean) | Function to change button state |

### Optional Props

| Props | Default | Type | Description |
| --- | --- | --- | --- |
| colorOpen | black | string | Bar colors when the menu is open |
| colorClose | black | string | Bar colors when the menu is close |
| width | 40 | number | Width and height (it’s a square) of the component (px) |
| spaceBetweenBars | 35% | string | Space between the two bars (%) |
| barThickness | 3 | number | Bar thickness (px) |
| animationDuration | 0.3s | string | Animation duration |
| mobileWidth | 30 | number | Mobile width and height (it’s a square) of the component (px) |
| mobileBarThickness | 2 | number | Mobile bar thickness (px) |