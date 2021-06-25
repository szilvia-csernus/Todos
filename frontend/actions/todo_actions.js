export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";


// this type of return (as opposed to implicit return) is preferred in 
// rails-redux projects as this allows to use "debugger" in the code.
export const receiveTodos = (todos) => {
    return {
        type: RECEIVE_TODOS,
        todos,
    };
};


//singular!!!
export const receiveTodo = (todo) => {
    return {
        type: RECEIVE_TODO,
        todo,
    };
};

export const removeTodo = (todo) => {
    return {
        type: REMOVE_TODO,
        todo
    }
}

