import React from 'react';
import logo from './logo.svg';
import './App.css';
import CakeContainer from './component/CakeContainer';
import { Provider } from 'react-redux'
import store from './redux/store'
import HooksCakeContainer from './component/HooksCakeContainer';
import Cake from './component/Cake';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <HooksCakeContainer/> */}
      {/* <CakeContainer/> */}
      <Cake/>
    </div>
    </Provider>
    
  );
}

export default App;
