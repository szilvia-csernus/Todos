import React from 'react';
import TodoDetailViewContainer from './todo_detail_view_container';

class TodoListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {detail: false};
    }

    toggleDetail = (event) => {
        event.preventDefault();
        this.setState({ detail: !this.state.detail });
    }

    toggleTodo = (event) => {
        event.preventDefault();
        const toggledTodo = Object.assign({}, this.props.todo, {done: !this.props.todo.done});
        this.props.receiveTodo(toggledTodo);
    }

    render() {
        const { todo } = this.props;
        let details;
        if (this.state.detail) {
            details = <TodoDetailViewContainer todo={todo} />;
        }
        return (
            <div>
                <li className="todo-list-item">
                    <div>
                        <h3 ><a onClick={this.toggleDetail}>{todo.title}</a></h3>
                        {details}
                    </div>
                    <div className="list-item-status">
                        <p >Status: {todo.done ? "Done" : "Pending"}</p>
                        <button onClick={this.toggleTodo}>{todo.done ? "Undo" : "Done"}</button>
                    </div>
                    
                </li>
            </div>
        )
    }
}

export default TodoListItem;