import React from 'react';
import ReactDOM from 'react-dom/client';


function sayHello (user){
  return `${user.firstName} ${user.lastName}!`
};



const user = {
  firstName: 'Tiziano',
  lastName: 'Forte',
};

const hello = <h1>Hello, {sayHello(user)}</h1>;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {hello}
  </React.StrictMode>
);

//Penso sia giusto così....
