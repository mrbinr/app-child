import React, { useState, useEffect } from 'react';

const MyHelloComponent = () => {
  /*eslint no-unused-vars: ["error", { "varsIgnorePattern": "[tT]est" }]*/
  const [test, setTest] = useState('EEE');

  useEffect(() => {
    setTest('XXXXX');
  }, []);

  return (<div>Hello {test}</div>);
}

export default MyHelloComponent;
