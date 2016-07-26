import React from 'react';

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="What needs to be done" />
        <button>Add</button>
      </div>
    );
  }
}

export default TodoForm;
