import React from 'react';
import ReactDOM from 'react-dom/client';

/*const hello = <h1>Hello, World!</h1>;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {hello}
  </React.StrictMode>
);*/ 

//Mi funzionano entrambi i modi


const root = ReactDOM.createRoot(document.getElementById('root'));
const hello = <h1>Hello, world!</h1>;
root.render(hello);

