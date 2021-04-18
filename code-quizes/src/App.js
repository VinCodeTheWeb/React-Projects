import { useState } from 'react';

import logo from './logo.svg';
import './App.css';

const App = () => {
  const [color, setColor] = useState('blue');
  const [backgroundColor, setBackgroundColor] = useState('red');
  const [checked, setChecked] = useState(false);

  const updateColor = () => {
    if (color === 'red') {
      setColor('blue');
      setBackgroundColor('red');
    }
    if (color === 'blue') {
      setColor('red');
      setBackgroundColor('blue');
    }
  };

  const onChange = (e) => {
    const { checked } = e.target;

    setChecked(checked);
    setColor('red');
    setBackgroundColor(checked === true ? 'gray' : 'blue');
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button
          style={{ backgroundColor }}
          className='App-link'
          onClick={updateColor}
          disabled={checked}
        >
          Change to {color}
        </button>
        <input
          type='checkbox'
          id='disbale-button-checkbox'
          checked={checked}
          onChange={onChange}
        />
        <label htmlFor='disbale-button-checkbox'>Disabled Button</label>
      </header>
    </div>
  );
};

export default App;
