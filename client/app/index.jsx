import React from 'react';
import {render} from 'react-dom';
import TodoItem from './TodoItem.jsx';

class App extends React.Component {
  render () {
    return (
      <div>
        <h1>My TODO Application</h1>
        <TodoItem />
      </div>
    );
  }
}

render(<App/>,document.getElementById('app'));