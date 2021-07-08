import React from 'react';
import { uniqueId } from '../../util/id_generator';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { id: uniqueId, title: "", body: "", done: false };
    
    };

    update(property) {
        return event => this.setState({[property]: event.currentTarget.value})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const todo = Object.assign({}, this.state, { id: uniqueId() });
        this.props.receiveTodo(todo);
        this.setState({ title: "", body: "" }); // reset form
    }

    render() {
        return (
        <div className="todo-list-item">
            
            <form  onSubmit={this.handleSubmit}>
                    <fieldset className="form-fieldset">
                        <h3>New Todo</h3>
                        <label className="input">Title:
                            <input 
                                ref="title"
                                onChange={this.update('title')}
                                value={this.state.title}
                                placeholder="e.g. buy milk"
                                required/>
                        </label>

                        <label className="input">Body:
                            <input 
                                ref="body"
                                onChange={this.update('body')} 
                                value={this.state.body}
                                required/>
                        </label>

                        <div className="submit">
                            <button>Submit</button>
                        </div>
        
                    </fieldset>
            </form>
        </div>
        )
    };
}

export default TodoForm;