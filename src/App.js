import React from 'react';
import './App.css';
import Main from './Main';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCaretLeft, faCaretRight, faInfo, faCircle } from '@fortawesome/free-solid-svg-icons'

function App() {
  document.body.style.overflow = "hidden";
  library.add(faCaretLeft, faCaretRight, faInfo, faCircle);
  return (
    <div className="App">
      <Main />      
    </div>
  );
}

export default App;
