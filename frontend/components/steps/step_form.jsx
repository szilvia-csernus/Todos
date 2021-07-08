import React from 'react';
import { uniqueId } from '../../util/id_generator';

class StepForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { id: uniqueId, todo_id: this.props.todo_id, title: "", done: false };

    };

    update(property) {
        return event => this.setState({ [property]: event.currentTarget.value })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const step = Object.assign({}, this.state, { id: uniqueId() });
        this.props.receiveStep(step);
        this.setState({ title: "" }); // reset form
    }

    render() {
        return (
            <div>
                
                <form onSubmit={this.handleSubmit}>
                    <fieldset >
                        <label>New step: 
                            <input
                                ref="title"
                                onChange={this.update('title')}
                                value={this.state.title}
                                placeholder="walk to store"
                                required />
                        </label>

                        <div >
                            <button>Submit</button>
                        </div>

                    </fieldset>
                </form>
            </div>
        )
    };
}

export default StepForm;