import React from 'react';
import { NavBar } from './Component/NavBar';

import 'bootstrap/dist/css/bootstrap.min.css';
import AllContent from './Component/AllContent';

import { StoreList } from './Store/store';
import { Provider } from 'react-redux';



function App() {
    return(
      <Provider store={StoreList}>
      <div>
        <NavBar/>
        <AllContent/>
      </div>
      </Provider>
    )
  }

  export default App;

// export default () => <div className="App">React Course 1</div>;
