import React from 'react';

import TodoItem from './TodoItem.jsx';


var TodoList = React.createClass({

  propTypes: {
    items: React.PropTypes.array,
    removeTodo: React.PropTypes.func.isRequired
  },

  handleRemoveTodo(id) {
    this.props.removeTodo(id);
  },

  render() {
    return (
      <ul>
        {this.props.todos.map((todo) => {
          return (
            <TodoItem todo={todo} key={todo.id} removeTodo={this.handleRemoveTodo} />
          );
        })}
      </ul>
    );
  }

});

export default TodoList;