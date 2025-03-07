name: common
layout: true
class: common

.logo-sae[![SAE Logo](img/logo-sae.png)]
.logo-web[![WEB logo](img/logo-web.png)]

.ruler.one[· · · · · · · ·]
.ruler.two[· · · · · · · ·]
.ruler.three[· · · · · · · ·]
.ruler.four[· · · · · · · ·]
.ruler.five[· · · · · · · ·]
.ruler.six[· · · · · · · ·]
.ruler.seven[· · · · · · · ·]

.footer[Nikos Bilalis - n.bilalis@sae.edu]

---
name: cover
layout: true
template: common
class: cover

---
name: section
layout: true
template: common
class: section, center, middle

---
name: section-details
layout: true
template: common
class: section-details, topbar-space

---
name: chapter
layout: true
template: common
class: chapter, topbar-space

---
name: list
layout: true
template: common
class: list, topbar-space

---
template: cover

# WMNFE 2410

## Front-end Development

### React #2 | Components

---
template: section

## Περιεχόμενα

---
layout: true
template: section-details

### Περιεχόμενα

---

- Components
  - JSX
  - Props
- Rendering
  - Conditionals
  - Loops
- Events

---
template: section

## Components

---
layout: true
template: chapter

### Components

---

#### Composition & Re-usability

Η `React` βασίζεται στη φιλοσοφία της σύνθεσης (_composition_) και όχι σε αυτή της κληρονομικότητας (_inheritance_).

Τα `Components` επιτρέπουν το διαχωρισμό του _UI_ σε μικρά, ανεξάρτητα, επαναχρησιμοποιούμενα κομμάτια κώδικα.

Παρέχουν ένα βαθμό ενθυλάκωσης (_encapsulation_), όπως και τα _Web Components_, αν και δεν είναι αυτός ο βασικός σκοπός της `React`.

Βασικός σκοπός της `React` είναι να αποτυπώνει τα δεδομένα μιας εφαρμογής στο `DOM`.

---

#### `Virtual DOM`

Το `Virtual DOM` είναι ένα μια ιδεατή αναπαράσταση του `UI`, στη μνήμη, η οποία συγχρονίζει με το πραγματικό `DOM` μέσω μιας βιβλιοθήκης όπως η `ReactDOM`.

Η παραπάνω διαδικασία ονομάζεται _reconciliation_.

Η προσέγγιση αυτή επιτρέπει την _declarative_ φύση της `React`. Δηλώνεις την κατάσταση στην οποία θες να βρίσκεται το `UI` και η βιβλιοθήκη αναλαμβάνει να το κάνει.

Αντί να αναφέρεται απευθείας στο `DOM`, δημιουργεί μια αφηρημένη εκδοχή του.

---

#### Function vs Class Components

Ο ενδεδειγμένος τρόπος για να δηλωθεί ένα `Component` στη `React`, από την έκδοση _16.8_ και έπειτα, είναι μέσω μιας `JS` συνάρτησης (_function component_).

Πριν την έκδοση αυτή, για τον ίδιο σκοπό, χρησιμοποιούνταν κλάσεις (_class component_).

Τα _function component_ υπήρχαν και νωρίτερα από την έκδοση _16.8_, αλλά περιορίζονταν σε απλές χρήσεις, καθώς δεν μπορούσαν να διαχειριστούν _internal state_ κ.λπ.

Αυτό άλλαξε με την εισαγωγή των _React hooks_.

---

#### Κανόνες

Ένα _function component_ πρέπει:

- Να επιστρέφει ένα _React element_, είτε μέσω της _createElement_, είτε με χρήση της `JSX`.
  - Αν δεν υπάρχει ένα μοναδικό _root element_ αλλά περισσότερα, μπορεί να γίνει χρήση του `<React.Fragment>`.
- Να έχει όνομα που ξεκινά με κεφαλαίο γράμμα.

---
class: long-code

#### Παράδειγμα

```js
const styles = { color: '#61DAFB', backgroundColor: 'black' };

function Header() {
  return React.createElement(
    'h1',
    {
      id: 'main-header',
      style: styles
    },
    'Hello, from JSX! Time is ',
    new Date().toLocaleTimeString()
  );
}

const root = ReactDOMClient.createRoot(document.getElementById('app'));
root.render(React.createElement(Header));

```

---
class: long-text

#### `JSX`

Είναι μια `XML` επέκταση της `ECMAScript` που επιτρέπει να συνδυάζουμε `markup` με κώδικα `JavaScript` με έναν ευπαρουσίαστο τρόπο.

```jsx
const element = <h1>Hello, world!</h1>;

```

Η `JSX` θυμίζει αλλά δεν είναι ούτε _HTML_, ούτε κάποια _template engine_.

Ως μη επίσημη επέκταση της `ECMAScript`:

- δεν μπορεί να εκτελεστεί απευθείας από το _browser_, χρειάζεται είτε τη βοήθεια μιας βιβλιοθήκης (`Babel`), είτε _transpilation_.
- μπορεί να εμπεριέχει οποιονδήποτε κώδικα `JavaScript`.

---

#### `Props`

Εννοιολογικά, τα `Components` είναι σαν οποιαδήποτε άλλη συνάρτηση σε `JavaScript`.

Δέχονται είσοδο (`props`) και επιστρέφουν `React element`, τα οποία περιγράφουν τι πρέπει να αποτυπωθεί στο `UI`.

Όλα τα _attributes_ που υπάρχουν στη `JSX` περνούν, μέσω του αντικειμένου `props`, στο αντίστοιχο `Component`.

Επιπλέον, αν ένα `Component` περικλείει άλλα `Component` ή `HTML tag`, αυτά είναι διαθέσιμα μέσω του `props.children`.

---
class: long-text

#### `JSX` & _Curly Braces_

Αν ένα `property`/`attribute` παίρνει τιμή "δυναμικά", τότε πρέπει να χρησιμοποιηθούν τα `{ }` αντί των `" "` / `' '`.

Το ίδιο ισχύει και όταν θέλουμε να περάσουμε μια τιμή που δεν είναι αλφαριθμητική (`string`).

Τα `{ }` μπορούν να χρησιμοποιηθούν και για εκφράσεις. Αυτό σημαίνει ότι μπορούμε να ενσωματώσουμε οποιαδήποτε έγκυρη έκφραση `JavaScript` (όπως μεταβλητές, κλήσεις συναρτήσεων ή υπολογισμούς) απευθείας μέσα στην `JSX`.

Η έκφραση αυτή "αποτιμάται" και το αποτέλεσμα της εμφανίζεται στην τελική , επιτρέποντας έτσι τη δυναμική δημιουργία περιεχομένου.

---

#### Παράδειγμα #1

```jsx
const title = 'This is a title';

function App() {
  return (
    <Header title={title} size={2} />
  );
}

const root = ReactDOMClient.createRoot(document.getElementById('app'));
root.render(<App />);

```

---

#### Παράδειγμα #2

```jsx
const styles = { color: '#61DAFB', backgroundColor: 'black' };

function Header() {
  return (
    <h1 id="main-header" style={styles}>
      Hello, from JSX! Time is {new Date().toLocaleTimeString()}
    </h1>
  );
}
```

---

#### `JSX` & `HTML` Attributes

Η `JSX` δεν είναι απλά _markup_, για αυτό και έχει κάποιες ιδιότητες που την κάνουν να ξεχωρίζει από την _HTML_.

- Αντί της ιδιότητας `class`, χρησιμοποιούμε `className`.
- Αντί της ιδιότητας `for` χρησιμοποιούμε `htmlFor`.
- Τα ονόματα των ιδιοτήτων των στυλ είναι γραμμένα σε _camelCase_, π.χ. `fontSize` και `backgroundColor`.

---

#### Παράδειγμα #1

```jsx
const cssAttrs = { color: '#61DAFB', backgroundColor: 'black' };

function Header(props) {
  return (
    <h1 id="main-header" style={props.style}>
      Hello, from {props.greeter}!
      Time is {new Date().toLocaleTimeString()}
    </h1>
  );
}

```

---

#### Παράδειγμα #2

```jsx
function StyledComponent() {
  return (
    <div
      className="container"
      style={{
        fontSize: '16px',
        backgroundColor: '#f0f0f0'
      }}>
      <label htmlFor="nameInput">Όνομα:</label>
      <input id="nameInput" type="text" />
    </div>
  );
}
```

---

#### `Prop` destructuring

Τα `function components`, όπως προαναφέρθηκε, δέχονται το πολύ μία παράμετρο.

Η παράμετρος αυτή, συνήθως, έχει το όνομα `props`, χωρίς αυτό να είναι δεσμευτικό.

Για να αποφευχθεί η συνεχής αναφορά στην παράμετρο αυτή, πολύ συχνά χρησιμοποιείται η τεχνική του _destructuring_.

```jsx
const Header = (props) => (<h1>{props.title}</h1>);

const Header = ({ title }) => (<h1>{title}</h1>);

```

---
class: long-code

#### Παράδειγμα #1 (με τη χρήση _arrow function_)

```jsx
const Header = () => (
  <h1>Box Office</h1>
);

const Movie= ({ title, sum, ratingh }) => (
  <div>{`${title} | $${sum}m | ${rating}⭐`}</div>
);

const App = () => (
  <>
    <Header />
    <Movie title="The Godfather" sum={134} rating={9.2} />
    <Movie title="The Shawshank Redemption" sum={58} rating={9.3} />
  </>
);

const root = ReactDOMClient.createRoot(document.getElementById('app'));
root.render(<App />);

```

---
class: long-code

#### Παράδειγμα #2

```jsx
function CodeFormatter({ children }) {
  const style = {
    backgroundColor: "lightgrey",
    padding: "1em",
  };
  return (<pre style={style}>{children}</pre>);
}

function App() {
  return (
    <CodeFormatter>
      let a = 1;
    </CodeFormatter>
  );
}

const root = ReactDOMClient.createRoot(document.getElementById('app'));
root.render(React.createElement(Header));

```

---
template: section

## Rendering

---
layout: true
template: chapter

### Rendering

---
class: long-text

#### Loops & Conditionals

Η `React` ακολουθεί τη φιλοσοφία του _Functional Programming_.

Σε αυτή επικρατεί η _declarative_ προσέγγιση, έναντι της _imperative_. Μέσα στα _curly brackets_ της `JSX` ενσωματώνουμε _expression_ και όχι _statement_.

Για το λόγο αυτό, σε κώδικα `React` θα δούμε να χρησιμοποιείται συχνά η μέθοδος `map`, στη θέση εντολών όπως οι `for`, `while`, κ.λπ.

Επίσης, η _conditional_ λογική αναπαριστάται, όχι με τις εντολές `if` ή `switch`, αλλά με τους _ternary_, _logical_ και _nullish coalescing_ τελεστές.

Αυτά αφορούν κυρίως στη `JSX`.

---

#### Παράδειγμα #1 (_conditionals_)

```jsx
// user = { name: 'John', age: 25, isAdmin: true };

function UserDetails({user}) {
  const isAdmin = user.isAdmin ? 'Admin' : 'User';
  const age = user.age || 'Unknown';
  const name = user.name && <strong>{user.name}</strong>;

  return (
    <div>
      <p>{isAdmin}</p>
      <p>{age}</p>
      <p>{name}</p>
    </div>
  );
};

```

---

#### Παράδειγμα #2 (inline _conditionals_)

```jsx
// user = { name: 'John', age: 25, isAdmin: true };

function UserDetails({user}) {
  return (
    <div>
      <p>{user.isAdmin ? 'Admin' : 'User'}</p>
      <p>{user.age || 'Unknown'}</p>
      {user.name &&
        <p><strong>{user.name}</strong></p>
      }
    </div>
  );
};

```

---
class: long-code

#### Παράδειγμα #3 (_conditionals_)

```jsx
function App() {
  ...
  return (
    <>
      <div>
        {user.name ?? user.username}
      </div>
      <div>
        {user.isLoggedIn ? (
          <button>Logout</button>
        ) : (
          <button>Login</button>
        )}
      </div>
      {user.isAdmin && <AdminPanel />}
    </>
  );
}
```

---

#### Παράδειγμα #4 (_loops_)

```jsx
const products = [
  { id: '0001', name: 'Awesome dress', price: 100 },
  { id: '0002', name: 'Cool shoes', price: 50 },
  { id: '0003', name: 'Nice hat', price: 20 },
];

function ProductList({ products }) {
  const items = [];
  for (const product of products) {
    items.push(
      <li key={product.id}>
        {product.name} (${product.price})
      </li>
    );
  }

  return (<ul>{items}</ul>);
}
```

---

#### Παράδειγμα #5 (_loops_ with `map`)

```jsx
const products = [
  { id: '0001', name: 'Awesome dress', price: 100 },
  { id: '0002', name: 'Cool shoes', price: 50 },
  { id: '0003', name: 'Nice hat', price: 20 },
];

function ProductList({ products }) {
  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>
          {product.name} (${product.price})
        </li>
      ))}
    </ul>
  );
}
```

---
template: section

## Events

---
layout: true
template: chapter

### Events

---
class: long-code

#### Responding to events

Η εκτέλεση κώδικα, ως "απάντηση" σε κάποιο _UI event_, γίνεται με την προσθήκη _event handler_ στα στοιχεία του _UI_.

Στην `JSX`, οι _event handler_ προστίθενται ως _attributes_ με την προσθήκη του προθέματος `on`.

```jsx
const handleClick = () => { alert('Button clicked!'); };

<button onClick={handleClick}>Click me!</button>
```

```jsx
<button onClick={() => { alert('Button clicked!'); }}>Click me!</button>
```

---

#### Παράδειγμα #1

```jsx
function TextInput() {
  function handleChange(event) {
    console.log('Input changed to:', event.target.value);
  }

  return (
    <input type="text"
           placeholder="Type here..."
           onChange={handleChange} />
  );
}
```

---

#### Παράδειγμα #2

```jsx
function SelectLIbrary({ items }) {
  return (
    <select onChange={(event) => { alert(event.target.value); }}>
      {items.map(item => (
        <option key={item.id} value={item.id}>{item.name}</option>
      ))}
    </select>
  );
}
```

---
template: list

### Χρήσιμα links

- ![](https://www.google.com/s2/favicons?domain=react.dev) Your First Component – React https://react.dev/learn/your-first-component
- ![](https://www.google.com/s2/favicons?domain=react.dev) Importing and Exporting Components – React https://react.dev/learn/importing-and-exporting-components
- ![](https://www.google.com/s2/favicons?domain=react.dev) Writing Markup with JSX – React https://react.dev/learn/writing-markup-with-jsx
- ![](https://www.google.com/s2/favicons?domain=react.dev) JavaScript in JSX with Curly Braces – React https://react.dev/learn/javascript-in-jsx-with-curly-braces
- ![](https://www.google.com/s2/favicons?domain=react.dev) Passing Props to a Component – React https://react.dev/learn/passing-props-to-a-component
- ![](https://www.google.com/s2/favicons?domain=react.dev) Conditional Rendering – React https://react.dev/learn/conditional-rendering
- ![](https://www.google.com/s2/favicons?domain=react.dev) Rendering Lists – React https://react.dev/learn/rendering-lists
- ![](https://www.google.com/s2/favicons?domain=react.dev) Responding to Events – React https://react.dev/learn/responding-to-events
- ![](https://www.google.com/s2/favicons?domain=www.robinwieruch.de) React Function Components https://www.robinwieruch.de/react-function-component

---
template: list

### Extra info

- ![](https://www.google.com/s2/favicons?domain=developer.mozilla.org) Conditional (ternary) operator - JavaScript | MDN https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
- ![](https://www.google.com/s2/favicons?domain=developer.mozilla.org) Nullish coalescing operator (??) - JavaScript | MDN https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator
- ![](https://www.google.com/s2/favicons?domain=developer.mozilla.org) Destructuring assignment - JavaScript | MDN https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#object_destructuring
- ![favicon](https://www.google.com/s2/favicons?domain=www.telerik.com) A Beginner’s Guide to Loops in React JSX https://www.telerik.com/blogs/beginners-guide-loops-in-react-jsx

---
template: section

## Thank You!
