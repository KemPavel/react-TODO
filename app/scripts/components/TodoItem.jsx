import React from 'react';


var TodoItem = React.createClass({

  propTypes: {
    removeTodo: React.PropTypes.func.isRequired,
    todo: React.PropTypes.object.isRequired
  },

  handleRemoveTodoClick() {
    this.props.removeTodo(this.props.todo.id);
  },

  render() {
    return (
      <li onClick={this.handleRemoveTodoClick}>
        {this.props.todo.text}
      </li>
    );
  }

});

export default TodoItem;