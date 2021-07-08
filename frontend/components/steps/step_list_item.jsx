import React from 'react';

class StepListItem extends React.Component {
    constructor(props) {
        super(props);
    }

    toggleStep = (event) => {
        event.preventDefault();
        const toggledStep = Object.assign({}, this.props.step, { done: !this.props.step.done });
        this.props.receiveStep(toggledStep);
    }

    render() {
        const { title, done } = this.props.step;
        
        return (
            <div>
                <li className="step-list-item">
                    <p>{title}</p>
                    <div className="list-item-status">
                        <p>Status: {done ? "Done" : "Pending"}</p>
                        <button onClick={this.toggleStep}>{done ? "Undo" : "Done"}</button>
                    </div>
                    
                </li>
            </div>
        )
    }
}

export default StepListItem;