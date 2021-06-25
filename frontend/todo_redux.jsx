import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/store';
import { receiveTodo, receiveTodos, removeTodo } from './actions/todo_actions';
import { receiveSteps, receiveStep, removeStep  } from './actions/step_actions';


// TODO just for testing!
const store = configureStore;
window.store = store;
window.receiveTodos = receiveTodos;
window.receiveTodo = receiveTodo;
window.removeTodo = removeTodo;
window.receiveSteps = receiveSteps;
window.receiveStep = receiveStep;
window.removeStep = removeStep;

// window.addOrange = addOrange;
// window.addApple = addApple;
// window.clearFruit = clearFruit;

const App = () => (
    <div>
        <h1>TODOs App</h1>
    </div>
);

document.addEventListener("DOMContentLoaded", () => {
    ReactDOM.render(
        <App />,
        document.getElementById('content')
    );
});