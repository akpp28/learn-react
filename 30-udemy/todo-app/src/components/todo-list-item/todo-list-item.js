import React from 'react';

import './todo-list-item.css';



export default class TodoListItem extends React.Component{
  render() {
    const {label, important = false} = this.props;

    const style = {
      color: important ? 'steelblue' : 'black',
      fontWeight: important ? 'bold' : 'normal'
    };

    <span className={classNames}>
      <span
          className="todo-list-item-label"
          onClick={onToggleDone}>{label}</span>

      <button type="button"
              className="btn btn-outline-success btn-sm float-right"
              onClick={onToggleImportant}>
        <i className="fa fa-exclamation"></i>
      </button>

      <button type="button"
              className="btn btn-outline-danger btn-sm float-right"
              onClick={onDelete}>
        <i className="fa fa-trash-o"></i>
      </button>
    </span>

  }
}


export default TodoListItem;