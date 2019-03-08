import React, { useState } from 'react';

const MyHelloComponent = () => {
  /*eslint no-unused-vars: ["error", { "varsIgnorePattern": "[tT]est" }]*/
  const [test, setTest] = useState();

  return (<div>Hello</div>);
}

export default MyHelloComponent;
