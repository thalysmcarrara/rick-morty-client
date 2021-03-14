import React, { useState } from 'react';
import PropTypes from 'prop-types';
import context from './context';

export default function Provider({ children }) {
  const [inputSelected, setInputSelected] = useState('character');
  const [data, setData] = useState();
  const [isFetching, setIsFetching] = useState(true);

  const value = {
    inputSelected,
    setInputSelected,
    data,
    setData,
    isFetching,
    setIsFetching,
  };
  return (
    <div>
      <context.Provider value={ value }>
        {children}
      </context.Provider>
    </div>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
