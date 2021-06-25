import { RECEIVE_TODO, RECEIVE_TODOS, REMOVE_TODO } from "../actions/todo_actions";

const initialState = {
    1: {
        id: 1,
        title: "wash car",
        body: "with soap",
        done: false
    },
    2: {
        id: 2,
        title: "wash dog",
        body: "with shampoo",
        done: true
    }
};

const todosReducer = (state = initialState, action) => {
    let new_todos = {};
    switch (action.type) {
        case RECEIVE_TODOS:
            action.todos.forEach(todo => {
                new_todos[todo.id] = todo;
            })
            return new_todos;
        case RECEIVE_TODO:
            Object.freeze(state);
            new_todos = JSON.parse(JSON.stringify(state));
            new_todos[action.todo.id] = action.todo;
            return new_todos;
        case REMOVE_TODO:
            Object.freeze(state);
            new_todos = JSON.parse(JSON.stringify(state));
            delete new_todos[action.todo.id];
            return new_todos;
        default:
            return state;
    }
};

export default todosReducer;