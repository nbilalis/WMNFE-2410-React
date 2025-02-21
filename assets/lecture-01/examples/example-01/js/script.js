/* const h1 = document.createElement('h1');
h1.id = 'main';
h1.textContent = 'Hello, World!';
h1.className = 'main-title'; */
const h1 = React.createElement('h1', {id: 'main', className: 'main-title'}, 'Hello, World!');

/* const h2 = document.createElement('h2');
h2.id = 'secondary';
h2.textContent = 'This is a subheading'; */
const h2 = React.createElement('h2', {id: 'secondary'}, 'Welcome to React!');

console.log({h1, h2});

/* const app = document.getElementById('app');
app.append(h1, h2); */
const root = ReactDOM.createRoot(document.getElementById('app'));

root.render([h1, h2]);
