import React from 'react';
import { NavBar } from './Component/NavBar';

import 'bootstrap/dist/css/bootstrap.min.css';
import AllContent from './Component/AllContent';



function App() {
    return(
      <div>
        <NavBar/>
        <AllContent/>
        
      </div>
      
    )
  }

  export default App;

// export default () => <div className="App">React Course 1</div>;
