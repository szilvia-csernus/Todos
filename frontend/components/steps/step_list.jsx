import React from 'react';

import StepListItemContainer from './step_list_item_container';
import StepForm from './step_form';

const StepList = ({ steps, todo_id, receiveStep }) => {
    const stepItems = steps.map((step) => (
        <StepListItemContainer
            key={step.id}
            step={step}
            receiveStep={receiveStep}
        />
    ));

    return (
        <div className="step-list">
            <h3>Steps to take:</h3>
            <ul >
                {stepItems}
            </ul>
            <StepForm todo_id={ todo_id } receiveStep={receiveStep} />
        </div>
    )
    
} 

export default StepList;