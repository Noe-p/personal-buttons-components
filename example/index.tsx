import * as React from 'react';
import { useState } from 'react';
import 'react-app-polyfill/ie11';
import * as ReactDOM from 'react-dom';
import { ToggleTextButton } from '../.';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* <ToggleMenuButton
        isMenuOpen={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      /> */}
      <ToggleTextButton
        isMenuOpen={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        animationSpeed={0.1}
        style={{ margin: '100px' }}
        fontSize={'50px'}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
