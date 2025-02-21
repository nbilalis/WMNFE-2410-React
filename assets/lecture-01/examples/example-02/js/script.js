import React from "https://esm.sh/react@19/?dev"
import ReactDOMClient from "https://esm.sh/react-dom@19/client/?dev"

const h1 = React.createElement('h1', {id: 'main', className: 'main-title'}, 'Hello, World!');

/* const h2 = document.createElement('h2');
h2.id = 'secondary';
h2.textContent = 'This is a subheading'; */
const h2 = React.createElement('h2', {id: 'secondary'}, 'Welcome to React!');

console.log({h1, h2});

/* const app = document.getElementById('app');
app.append(h1, h2); */
const root = ReactDOMClient.createRoot(document.getElementById('app'));

root.render([h1, h2]);
