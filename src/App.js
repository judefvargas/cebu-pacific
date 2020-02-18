import React from 'react';
import './App.css';
import Main from './Main';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCaretLeft, faCaretRight, faInfo, faCircle, faLayerGroup, faCheck, faSquare, faSpinner } from '@fortawesome/free-solid-svg-icons'
import './custom.css';

function App() {
  document.body.style.overflow = "hidden";
  library.add(faCaretLeft, faCaretRight, faInfo, faCircle, faLayerGroup, faCheck, faSquare, faSpinner);
  return (
    <div className="App">
      <Main />
      <link href="./static/css/custom.css" rel="stylesheet" />
    </div>
  );
}

export default App;
