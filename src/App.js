
import './App.css';
import Navbar from './Component/Navbar';
import TextForm from './Component/TextForm';
//import About from './Component/About';
import React, { useState } from 'react';
import Alert from './Component/Alert';

//import {
  //BrowserRouter as Router,
  //Routes,Link,
 // Route} from 'react-router-dom';


function App() {
  const [mode, setMode] = useState('light');//wether dark mode is enabled
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#1a4cb8';
      showAlert("Dark mode is enabled!", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode is enabled!", "success");
    }
  }
  const changeColor = () => {
    document.body.style.backgroundColor = '#1a4cb8';
  }
  return (
    <div>
  {/*<Router>*/}
      <Navbar  title="TEXTUTILS" mode={mode} toggleMode={toggleMode} changeColor={changeColor} />
      <Alert alert={alert} />
      <div className="container my-3">
        
        {/*<Routes>
                <Route path="/about" element={ <About />}/>
                 
                
                <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />}/>
                
                
          </Routes>
    </div>
    
  </Router>*/}
    <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
     </div> 
     </div>
  );
}

export default App;
