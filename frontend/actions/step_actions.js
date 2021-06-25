export const RECEIVE_STEPS = "RECEIVE_STEPS";
export const RECEIVE_STEP = "RECEIVE_STEP";
export const REMOVE_STEP = "REMOVE_STEP";


// this type of return (as opposed to implicit return) is preferred in 
// rails-redux projects as this allows to use "debugger" in the code.
export const receiveSteps = (steps) => {
    return {
        type: RECEIVE_STEPS,
        steps,
    };
};


//singular!!!
export const receiveStep = (step) => {
    return {
        type: RECEIVE_STEP,
        step,
    };
};

export const removeStep = (step) => {
    return {
        type: REMOVE_STEP,
        step
    }
}