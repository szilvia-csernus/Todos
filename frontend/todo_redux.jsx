import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { allTodos } from './reducers/selectors';
import { receiveTodo, receiveTodos, removeTodo } from './actions/todo_actions';
import { receiveStep, removeStep  } from './actions/step_actions';


// TODO just for testing!
const store = configureStore;
window.store = store;
window.receiveTodos = receiveTodos;
window.receiveTodo = receiveTodo;
window.removeTodo = removeTodo;
window.receiveStep = receiveStep;
window.removeStep = removeStep;
window.allTodos = allTodos;



document.addEventListener("DOMContentLoaded", () => {
    ReactDOM.render(
        <Root store={configureStore}/>,
        document.getElementById('content')
    );
});