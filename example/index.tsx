import * as React from 'react';
import { useState } from 'react';
import 'react-app-polyfill/ie11';
import * as ReactDOM from 'react-dom';
import { ToggleMenuButton } from '../.';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <ToggleMenuButton isMenuOpen={isOpen} setIsMenuOpen={setIsOpen} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
