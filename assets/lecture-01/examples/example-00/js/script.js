const h1 = document.createElement('h1');
h1.id = 'main';
h1.textContent = 'Hello, World!';
h1.className = 'main-title';

const h2 = document.createElement('h2');
h2.id = 'secondary';
h2.textContent = 'Welcome to the DOM!';

console.log({h1, h2});

const app = document.getElementById('app');
app.append(h1, h2);
