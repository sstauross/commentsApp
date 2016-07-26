import React from 'react';
import { render } from 'react-dom';
import TodoItem from './TodoItem.jsx';
import TodoForm from './TodoForm.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>My TODO Application</h1>
        <TodoForm />
        <TodoItem />
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
