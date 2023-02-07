import { useState, createContext } from 'react';
import { ToggleButton, ToggleTitle } from './ToggleButton';

export const ToggleContext = createContext();

const Toggle = ({ children }) => {
  const [on, setOn] = useState(false);
  const toggle = () => setOn(!on);

  return <ToggleContext.Provider value={{ on, toggle }}>{children}</ToggleContext.Provider>;
};

export default Toggle;

Toggle.Button = ToggleButton;
Toggle.Title = ToggleTitle;
