import React from 'react';


var TodoForm = React.createClass({

  propTypes: {
    addTodo: React.PropTypes.func.isRequired
  },

  handleAddTodoClick() {
    if (this.refs.input.value.length !== 0) {
      this.props.addTodo(this.refs.input.value);
      this.refs.input.value = '';
    }
    this.refs.input.focus();
  },

  componentDidMount() {
    this.refs.input.focus();
  },

  render() {
    return (
      <div>
        <input ref="input" maxLength="50" placeholder="Add todo"/>
        <button onClick={this.handleAddTodoClick}>╋</button>
      </div>
    );
  }

});

export default TodoForm;