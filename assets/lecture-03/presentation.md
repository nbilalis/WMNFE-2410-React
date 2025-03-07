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

### React #3 | Managing State

---
template: section

## Περιεχόμενα

---
layout: true
template: section-details

### Περιεχόμενα

---

- Hooks
  - `useState`
  - `useReducer`
- Controlled Components
  - `useRef`

---
template: section

## Hooks

---
layout: true
template: chapter

### Hooks

---

#### Stateful Components

Στο παρελθόν, τα `Function Components` χρησιμοποιούνταν για απλά στοιχεία, που δεν είχαν τρόπο να "διατηρούν" την κατάστασή στην οποία βρίσκονται (_stateless_).

Με την εμφάνιση των `React Hooks` στην έκδοση _16.8_, αυτό άλλαξε και πλέον τα στοιχεία αυτά μπορούν να έχουν τη λειτουργικότητα που έχουν και και τα `Class Component`.

---

#### `Class Component` issues

Λόγοι που οδήγησαν σε αυτή την αλλαγή:

> - It’s hard to reuse stateful logic between components
> - Complex components become hard to understand
> - Classes confuse both people and machines

---

#### `Hook` advantages

Τι προσφέρουν;

> - Hooks allow you to reuse stateful logic without changing your component hierarchy.
> - Hooks let you split one component into smaller functions based on what pieces are related (such as setting up a subscription or fetching data).
> - Hooks let you use state without classes.

---

#### `useState` `hook`

Η μέθοδος `useState` δέχεται ως όρισμα μια αρχική τιμή/κατάσταση και επιστρέφει έναν πίνακα με δύο στοιχεία (θυμίζει `tuple`).

Το πρώτο στοιχείο είναι η τρέχουσα τιμή/κατάσταση και το δεύτερο μια συνάρτηση που θα πρέπει να χρησιμοποιηθεί για να αλλάζει η τιμή αυτή.

```js
const [state, setState] = useState(initialState);

```

Και εδώ, η τεχνική του _destructuring_ είναι πολύ συνηθισμένη.

---

#### `useState` `hook`

- Το πρώτο στοιχείο (ίδιου τύπου με την αρχική τιμή), θα χρησιμοποιηθεί μέσα στην `JSX` για να αναπαραστήσει τη συγκεκριμένη τιμή.
- Το δεύτερο στοιχείο (συνάρτηση), θα χρησιμοποιηθεί για την αλλαγή της τιμής, καθώς "απαγορεύεται" (_immutability_) να επέμβουμε απευθείας σε αυτή.
  - Αν δοθεί, ως όρισμα, μια τιμή, αυτή η τιμή θα αντικαταστήσει την παλιά.
  - Αν η νέα τιμή εξαρτάται από την προηγούμενη, τότε πρέπει να δοθεί, ως όρισμα, μια συνάρτηση που να περιγράφει την αλλαγή, βάσει της προηγούμενης τιμής.

---

#### Παράδειγμα #1

```jsx
const Counter = ({ initial }) => {
  const [count, setCount] = useState(initial);
  return (
    <>
      Count: {count}
      <button onClick={() => setCount(initial)}>Reset</button>
      <button onClick={() => setCount(prev => prev - 1)}>-</button>
      <button onClick={() => setCount(prev => prev + 1)}>+</button>
    </>
  );
}

```

---
class: long-code

#### Παράδειγμα #2

```jsx
function ClickCounter() {
  const [count, setCount] = React.useState(0);

  const incrementCounter = () => { setCount((prev) => prev + 1); };
  const resetCounter = () => { setCount(0); };

  return (
    <div>
      <button onClick={incrementCounter}>Click me!</button>
      <button onClick={resetCounter}>Reset</button>
      <span>Clicks: {count}</span>
    </div>
  );
};

function App() {
  return (<ClickCounter />);
};

ReactDOMClient.createRoot(document.getElementById('root')).render(<App />);
```

---

#### `useReducer` `hook`

Η μέθοδος `useReducer` δέχεται ως όρισμα μια μία _reducer function_ και μια αρχική τιμή/κατάσταση και επιστρέφει έναν πίνακα με δύο στοιχεία (θυμίζει `tuple`).

Το πρώτο στοιχείο είναι η τρέχουσα τιμή/κατάσταση και το δεύτερο μια συνάρτηση που θα πρέπει να χρησιμοποιηθεί για να αλλάζει η τιμή αυτή.

```js
const [state, dispatch] = useReducer(reducer, initialState);

```

---

#### `useReducer` `hook`

- Πρόκειται για εναλλακτική προσέγγιση, αντί της `useState`.
- Εκτός από την αρχική τιμή/κατάσταση δέχεται και μία <br>
  _reducer function_, πάνω στην οποία θα βασιστεί η _function_ που επιστρέφεται.
- Είναι, συνήθως, προτιμότερη όταν:
  - πρέπει να διαχειριστούμε πολύπλοκη λογική <br>
    (_complex state logic_).
  - κάθε αλλαγή βασίζεται στην προηγούμενη κατάσταση.

---

#### reducer function

Η _reducer function_ έχει συνήθως μια μορφή όπως η παρακάτω, χωρίς αυτό να είναι δεσμευτικό.

```jsx
const reducer = (state, action) => {
  switch (action.type) {
    case 'ACTION_TYPE_1':
      return ...;
    case 'ACTION_TYPE_2':
      return ...;
    ...
    default:
      throw new Error(`Invalid action type: ${action.type}`);
  }
};

```

---

#### The _reducer_ pattern

Μια απλοποιημένη υλοποίηση της `useReducer` είναι η παρακάτω.

Στην ουσία δεν προσφέρει κάτι νέο, απλά βοηθάει στην εφαρμογή μιας διαδομένης τεχνικής.

```jsx
function useReducer(reducer, initialState) {
  const [state, setState] = useState(initialState);

  function dispatch(action) {
    const nextState = reducer(state, action);
    setState(nextState);
  }

  return [state, dispatch];
}

```

---
class: extra-long-code

#### Παράδειγμα #1

```jsx
const reducer = (state, action) => {
  switch (action.type) {
    case 'SET':
      return action.payload;
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      throw new Error(`Invalid action type: ${action.type}`);
  }
};

function Counter({ initial }) {
  const [count, dispatch] = useReducer(reducer, initial);
  return (
    <>
      Count: {count}
      <button onClick={() => dispatch({ action: 'SET', payload: initial })}>Reset</button>
      <button onClick={() => dispatch({ action: 'DECREMENT' })}>-</button>
      <button onClick={() => dispatch({ action: 'INCREMENT' })}>+</button>
    </>
  );
}

```

---
class: extra-long-code

#### Παράδειγμα #2

```jsx
const reducer = (state, action) => {
  switch (action.type) {
    case 'SET':
      return action.payload;
    case 'INCREMENT':
      return state + 1;
    default:
      throw new Error(`Invalid action type: ${action.type}`);
  }
};

function ClickCounter() {
  const [count, dispatch] = useReducer(reducer, 0);
  const incrementCounter = () => { dispatch({ action: 'INCREMENT' }) };
  const resetCounter = () => { dispatch({ action: 'SET', payload: 0 }) };

  return (
    <div>
      <button onClick={incrementCounter}>Click me!</button>
      <button onClick={resetCounter}>Reset</button>
      <span>Clicks: {count}</span>
    </div>
  );
};

```

---
template: section

## Controlled Components

---
layout: true
template: chapter

### Controlled Components

---
class: long-text

#### Single source of truth

Τα στοιχεία σε μια `HTML` φόρμα κρατούν εσωτερικά την κατάσταση (_state_) στην οποία βρίσκονται.

Στη `React` ιδανικά θέλουμε να υπάρχει ένα σημείο αναφοράς για την κατάσταση της φόρμας και, καθώς δεν υπάρχει η δυνατότητα για <br>
 _2-way binding_, φροντίσουμε τα στοιχεία της φόρμας να ενημερώνουν το _state_ του `component` σε κάθε αλλαγή.

Ένα στοιχείο του οποίου η τιμή ελέγχεται από τη `React` ονομάζεται <br>
 _Controlled Component_.

Αν σε ένα τέτοιο στοιχείο δεν ορίσουμε _event handler_, για να διαχειριστεί τις αλλαγές, τότε δεν θα μπορεί ο χρήστης να αλλάξει την τιμή του.

---
class: extra-long-code

#### Παράδειγμα #1

```jsx
function NameForm() {
  const [name, setName] = useState('');

  const handleChange = (event) => {
    setName(event.currentTarget.value);
  }

  const handleSubmit = (event) => {
    console.log(`A name was submitted: ${name}`);
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={handleChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

```

---
class: extra-long-text, extra-long-code

#### Παράδειγμα #2

```jsx
function FavoriteFlavorForm() {
  const [favoriteFlavor, setFavoriteFlavor] = useState('coconut');

  const handleChange = (event) => {
    setFavoriteFlavor(event.currentTarget.value);
  }

  const handleSubmit = (event) => {
    console.log(`Your favorite flavor is: ${favoriteFlavor}`);
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label> Pick your favorite flavor:
        <select value={value} onChange={handleChange}>
          <option value="lime">Lime</option>
          <option value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </select>
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};
```

---
layout: true
template: chapter

### Uncontrolled Components

---

#### `useRef`

Τα `Controlled Components` είναι ο ενδεδειγμένος τρόπος για να υλοποιούμε στοιχεία σε φόρμες.

Παρόλα αυτά, υπάρχει η δυνατότητα για `Uncontrolled Components`, όπου, αντί να ενημερώνεται το _state_ σε κάθε αλλαγή του στοιχείου, παίρνουμε την τιμή του όταν τη χρειαζόμαστε.

Για να αναφερθούμε σε ένα στοιχείο, είτε για να πάρουμε την τιμή του, είτε για οποιοδήποτε άλλο λόγο, μπορούμε να κάνουμε χρήση του
`useRef` `hook`.

---
class: extra-long-code

#### Παράδειγμα

```jsx
function NameForm() {
  const [name, setName] = useState('');

  const inputEl = useRef(null);

  const handleSubmit = (event) => {
    console.log(`A name was submitted: ${inputEl.current.value}`);
    inputEl.current.value = '';
    inputEl.current.focus();

    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" ref={inputEl} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

```

---
template: list

### Χρήσιμα links

- ![](https://www.google.com/s2/favicons?domain=react.dev) Built-in React Hooks – React https://react.dev/reference/react/hooks
- ![](https://www.google.com/s2/favicons?domain=react.dev) useState – React https://react.dev/reference/react/useState
- ![](https://www.google.com/s2/favicons?domain=react.dev) useReducer – React https://react.dev/reference/react/useReducer
- ![](https://www.google.com/s2/favicons?domain=react.dev) useRef – React https://react.dev/reference/react/useRef
- ![](https://www.google.com/s2/favicons?domain=dmitripavlutin.com) An Easy Guide to React useReducer() Hook https://dmitripavlutin.com/react-usereducer/

---
template: list

### Extra info

- ![](https://www.google.com/s2/favicons?domain=react.dev) Reusing Logic with Custom Hooks – React https://react.dev/learn/reusing-logic-with-custom-hooks
- ![](https://www.google.com/s2/favicons?domain=react.dev) Rules of Hooks – React https://react.dev/reference/rules/rules-of-hooks
- ![](https://www.google.com/s2/favicons?domain=react.dev) Components and Hooks must be pure – React https://react.dev/reference/rules/components-and-hooks-must-be-pure
- ![](https://www.google.com/s2/favicons?domain=react.dev) React calls Components and Hooks – React https://react.dev/reference/rules/react-calls-components-and-hooks

---
template: section

## Thank You!
