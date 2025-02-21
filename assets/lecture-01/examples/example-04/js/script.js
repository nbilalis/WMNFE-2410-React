import React from 'react'
import ReactDOMClient from 'react-dom/client'

// Switch from simple elements to function components

const movies = [
    { imdb_id: 'tt0076759', title: 'Star Wars', rating: 8.7, sum: 121 },
    { imdb_id: 'tt0080684', title: 'Raiders of the Lost Ark', rating: 8.5, sum: 39 },
    { imdb_id: 'tt0086190', title: 'E.T. the Extra-Terrestrial', rating: 7.9, sum: 43.5 },
    { imdb_id: 'tt0099785', title: 'Indiana Jones and the Last Crusade', rating: 8.3, sum: 48 },
    { imdb_id: 'tt0120338', title: 'Forrest Gump', rating: 8.8, sum: 55 },
];

const topMovies = [
    { imdb_id: 'tt0076759', title: 'Star Wars', rating: 8.7 },
    { imdb_id: 'tt0120338', title: 'Forrest Gump', rating: 8.8 },
];

function Header({level, title}) {
    return React.createElement(`h${level}`, null, title);
}

function MovieList({movies, styles}) {
    const lis = [];
    for (const movie of movies) {
        const li = React.createElement('li', { key: movie.imdb_id }, `${movie.title} - ${movie.rating}`);
        lis.push(li);
    }
    return React.createElement('ul', { style: styles }, lis);
}

// Render components inside the 'root' div
// Need to call React.createElement here too
const root = ReactDOMClient.createRoot(document.getElementById('app'));

root.render([
    React.createElement(Header, {level: 1, title: 'Movies'}),
    React.createElement(Header, {level: 2, title: 'Box Office'}),
    React.createElement(MovieList, {movies, styles: {color: 'blue'}}),
    React.createElement(MovieList, {movies: topMovies, styles: {color: 'red'}}),
]);
