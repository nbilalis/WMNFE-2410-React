import React from 'react'
import ReactDOMClient from 'react-dom/client'

// Create & render some elements, utilizing a JS array

// Some recipe ingredients
const ingredients = [
    { title: 'flour', quantity: '2 cups', vegan: true },
    { title: 'sugar', quantity: '1 cup', vegan: true },
    { title: 'milk', quantity: '1 cup' },
    { title: 'oil', quantity: '1/2 cup', vegan: true },
    { title: 'egg(s)', quantity: '1' },
];

const h1 = React.createElement('h1', null, 'Recipe');

const lis = [];

for (const ingredient of ingredients) {
    const li = React.createElement('li', { key: ingredient.title }, `${ingredient.title} - ${ingredient.quantity}`);
    lis.push(li);
}

const ul = React.createElement('ul', { id: 'ingredients', className: 'ingredients-list' }, lis);

const root = ReactDOMClient.createRoot(document.getElementById('app'));

root.render([h1, ul]);
