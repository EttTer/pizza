import './style.css';
import { usePrefs } from '../../prefContext';
import React from 'react';

const Check = ({checked, onChange, vegan}) => {
  const value = usePrefs();
  
  const handleClick = () => {
    onChange(!checked);;
  };

  const isDisabled = value.veganOnly === "vegan" && !vegan

  return (
    <button
      className={isDisabled ? "check--disabled " : "check"}
      onClick={handleClick}
      disabled={isDisabled}  
      >
      {checked ? '✓' : ''}
    </button>
  )
};

export default Check;