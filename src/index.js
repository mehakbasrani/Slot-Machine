/*import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />π°π€π€π₯
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();*/


import React from 'react'
import ReactDOM from 'react-dom'
import './index.css';
import App from './Apps'
          

ReactDOM.render(<>
 <h1 style = {{fontWeight : "bold" , textAlign : "center"}}>π°Slot Machine Gameπ°</h1>
 <div id = "container">
  <App  x = "π₯"  y = "π₯"  z = "π₯"/><hr />
 <App  x = "π₯"  y = "π€"  z = "π₯"/><hr />
 <App  x = "π€"  y = "π€"  z = "π€"/>
 </div>
 </>

  ,document.getElementById("root"))
