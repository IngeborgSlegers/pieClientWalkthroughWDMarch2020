import React, {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth';

function App() {
  //      variable        function               initial value
  const [sessionToken, setSessionToken] = useState('undefined');
  //let sessionToken = undefined;
  //let setSessionToken = () => {};

  return (
    <div className="App">
      <Navbar />
      <Auth />
    </div>
  );
}

export default App;
