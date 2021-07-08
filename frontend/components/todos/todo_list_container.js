import { connect } from 'react-redux';
import { allTodos } from '../../reducers/selectors';
import { receiveTodo, receiveTodos, removeTodo } from '../../actions/todo_actions';
// import { receiveStep, receiveSteps, removeStep } from '../../actions/step_actions';
import TodoList from './todo_list';

const mapStateToProps = state => ({
    todos: allTodos(state),
    state
});

const mapDispatchToProps = dispatch => ({
    receiveTodo: (todo) => dispatch(receiveTodo(todo))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);