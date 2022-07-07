import React from 'react';
import ReactDOM from 'react-dom/client';

const sum = (a,b)=> a+b;

const result = <h1>The result is: {sum(33,36)}</h1>;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {result}
  </React.StrictMode>
);

//Penso sia giusto così....
