import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import BookList from './components/BookList';
import BookDetails from './components/BookDetails';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <h1>Book App</h1>
        </header>
        <main>
          <BookList />
          <hr />
          <BookDetails />
        </main>
      </div>
    </Provider>
  );
}

export default App;
