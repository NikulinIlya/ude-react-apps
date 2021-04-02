import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <div>
      <HookSwitcher/>
    </div>
  )
};

const HookSwitcher = () => {
  const [color, setColor] = useState('gray');
  const [fonSize, setFonSize] = useState(14);

  return (
    <div style={{ padding: '10px', background: color, fontSize: `${fonSize}px`}}>
      Hello World
      <button onClick={() => setColor('gray')}>Dark</button>
      <button onClick={() => setColor('white')}>Light</button>
      <button onClick={() => setFonSize((s) => s + 2)}>+</button>
    </div>
  )
};

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
