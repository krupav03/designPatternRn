import React, { useState } from 'react';

const withLogging = (WrappedComponent) => {
    
  return (props) => {
    const [value,setValue] = useState('')
    const logInteraction = (message) => {
      console.log(message);
      setValue(message)
    };
    onClear= () => {
        setValue('')
    }

    return <WrappedComponent {...props} logInteraction={logInteraction} displayMessage={value} onClearMessage={onClear}/>;
  };
};

export default withLogging;
