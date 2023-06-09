import React from 'react';
import { useSelector } from 'react-redux';

import TodoListItem from './TodoListItem';

//const selectTodos = state => state.todos

const selectTodoIds = state => state.todos.map(todo => todo.id)

const TodoList = () => {
  //const todos = useSelector(selectTodos)
  const todoIds = useSelector(selectTodoIds)
  //const todos = useSelector(state => state.todos)

  const renderedListItems = todoIds.map((todoId) => {
    return <TodoListItem key={todoId} id={todoId} />
  })

  return <ul className="todo-list">{renderedListItems}</ul>
}

export default TodoList;
