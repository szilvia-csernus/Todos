import { RECEIVE_STEP, RECEIVE_STEPS, REMOVE_STEP } from "../actions/step_actions";

const initialSteps = {
    1: { // this is the step with id = 1
        id: 1,
        title: 'walk to store',
        done: false,
        todo_id: 1
    },
    2: { // this is the step with id = 2
        id: 2,
        title: 'buy soap',
        done: false,
        todo_id: 1
    }
}

const stepsReducer = (state = initialSteps, action) => {
    let new_steps = {};
    Object.freeze(state);
    
    switch (action.type) {
        case RECEIVE_STEPS:
            action.steps.forEach(step => {
                new_steps[step.id] = step;
            })
            return new_steps;
        case RECEIVE_STEP:        
            new_steps = JSON.parse(JSON.stringify(state));
            new_steps[action.step.id] = action.step;
            return new_steps;
        case REMOVE_STEP:
            new_steps = JSON.parse(JSON.stringify(state));
            delete new_steps[action.step.id];
            return new_steps;
        default:
            return state;
    }
};

export default stepsReducer;