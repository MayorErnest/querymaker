import React from 'react';
import SubApp from './subapp';

function App(props) {
  return (
    <div>
      <h1 className="bg-success text-light container-fluid py-2 px-4" id="headerText"><a href="index.html">QueryMe.</a></h1>
      <SubApp/>
    </div>
  )
}

export default App;
