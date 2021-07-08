export const allTodos = ({ todos }) => 
    Object.keys(todos).map(id => todos[id]);

const allSteps = ({ steps }) =>
    Object.keys(steps).map(id => steps[id]);

export const stepsByTodoId = (state, todoId) => {
    const new_steps = [];
    allSteps(state).forEach(step => {
        if (step.todo_id === todoId) { 
            new_steps.push(step);
        }
    });
    return new_steps;
}
    