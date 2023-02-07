import { useContext } from 'react';
import { ToggleContext } from './Toggle';

export const ToggleTitle = () => {
  const { on } = useContext(ToggleContext);
  return on ? <div>켜졌습니다.</div> : <div>꺼졌습니다.</div>;
};

export const ToggleButton = ({ children, renderProp }) => {
  const { on, toggle } = useContext(ToggleContext);

  return (
    <button type='button' onClick={toggle} renderProp={renderProp}>
      {renderProp(on)}
      {children}
    </button>
  );
};
