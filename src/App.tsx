import React from 'react'
import './App.css'
import Highlight from 'react-highlight.js';

function App() {
  return (
    <div className="App">
      <h1>hello world</h1>
      <Highlight language='php'>
        {`<?php
  echo phpinfo();
`}
        </Highlight>
    </div>
  )
}

export default App
