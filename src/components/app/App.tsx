import React, { Dispatch } from 'react';
import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux';
import { TodoState, VisibilityFilter, Todo } from '../../store/app/reducer';
import { Action } from 'redux';

type AppProps = {
  todos: Todo[]
}
type TodoActions = {
  toggleTodo: (id: number) => void
}

const App = ({todos}: AppProps) => {
  return <div>
    <ul>
      {
        todos.map(todo => <li key={todo.id}>{todo.text}</li>)
      }
    </ul>
  </div>
};

const mapStateToProps: MapStateToProps<AppProps, AppProps, TodoState> = (state: AppProps) => ({
  todos: state.todos
});

/*const mapDispatchToProps: MapDispatchToProps<TodoActions, AppProps> = (dispatch) => {
  toggleTodo: (id) => dispatch(id)
}*/

export default connect(mapStateToProps, {
})(App);