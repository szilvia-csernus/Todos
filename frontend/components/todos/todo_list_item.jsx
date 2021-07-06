import React from 'react';
import TodoDetailView from './todo_detail_view';

class TodoListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {detail: false};
        // this.toggleTodo = this.toggleTodo.bind(this);
        // this.toggleDetail = this.toggleDetail.bind(this);
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
        const { className, todo, receiveTodo, removeTodo } = this.props;
        let details;
        if (this.state.detail) {
            details = <TodoDetailView todo={todo} toggleTodo={this.toggleTodo} removeTodo={removeTodo} />;
        }
        return (
            <div>
                <li className={className}>
                    <p><a onClick={this.toggleDetail}>{todo.title}</a></p>
                    <p>Status: {todo.done ? "Done" : "Pending"}</p>
                    { details }
                </li>
            </div>
        )
    }
}

export default TodoListItem;