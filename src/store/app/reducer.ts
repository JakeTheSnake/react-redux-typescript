export enum VisibilityFilter {
  ALL,
  COMPLETED,
  ACTIVE
};

export type Todo = {
  id: number,
  text: string,
  completed: boolean
};

export type TodoState = {
  todos: Todo[],
  visibilityFilter: VisibilityFilter
};

export type AddTodo = { text: string }
export type ToggleTodo = { id: number }

export type TodoAction = AddTodo | ToggleTodo;

const initialState: TodoState = {
  todos: [],
  visibilityFilter: VisibilityFilter.ALL
};

let id = 0;

const addReducer = (state: TodoState = initialState, action: AddTodo): TodoState => {
  return {...state, todos: [...state.todos, {id: id++, text: action.text, completed: false }]}
}

const toggleReducer = (state: TodoState = initialState, action: ToggleTodo): TodoState => {
  return {...state, todos: state.todos.map(todo => {
    if (todo.id === action.id) {
      return {...todo, completed: !todo.completed}
    }
  })}
}

export const reducers = {
  addReducer,
  toggleReducer
}