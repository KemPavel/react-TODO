import React from 'react';


var TodoFooter = React.createClass({

  propTypes: {
    showAll: React.PropTypes.func.isRequired,
    showActive: React.PropTypes.func.isRequired,
    showCompleted: React.PropTypes.func.isRequired,
    deleteCompleted: React.PropTypes.func.isRequired
  },

  handleShowAllClick() {
    this.props.showAll();
  },

  handleShowActiveClick() {
    this.props.showActive();
  },

  handleShowCompletedClick() {
    this.props.showCompleted();
  },

  handleDeleteCompletedClick() {
    this.props.deleteCompleted();
  },

  render() {
    return(
      <footer className="footer">
        <button className="footer__button" onClick={this.handleShowAllClick}>All</button>
        <button className="footer__button" onClick={this.handleShowActiveClick}>Active</button>
        <button className="footer__button" onClick={this.handleShowCompletedClick}>Completed</button>
        <button className="footer__button footer__button--delete-completed" onClick={this.handleDeleteCompletedClick}>Delete completed</button>
      </footer>
    );
  }

});

export default TodoFooter;