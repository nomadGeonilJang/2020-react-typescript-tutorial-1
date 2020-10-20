const ADD_TODO = "ADD_TODO" as const;
const REMOVE_TODO = "REMOVE_TODO" as const;
const TOGGLE_TODO = "TOGGLE_TODO" as const;

let nextId = 1;

export const addTodo = (text: string) => ({
  type: ADD_TODO,
  payload: {
    id: nextId++,
    text,
    done: false,
  },
});

export const toggleTodo = (id: number) => ({
  type: TOGGLE_TODO,
  payload: id,
});

export const removeTodo = (id: number) => ({
  type: REMOVE_TODO,
  payload: id,
});

type ActionsTodo =
  | ReturnType<typeof addTodo>
  | ReturnType<typeof toggleTodo>
  | ReturnType<typeof removeTodo>;

export type Todo = {
  id: number;
  text: string;
  done: boolean;
};

type TodosState = Todo[];

const initialState: TodosState = [];

export default function todo(
  state: TodosState = initialState,
  action: ActionsTodo
): TodosState {
  switch (action.type) {
    case ADD_TODO: {
      return state.concat({
        id: action.payload.id,
        text: action.payload.text,
        done: action.payload.done,
      });
    }
    case TOGGLE_TODO: {
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            done: !todo.done,
          };
        }
        return todo;
      });
    }
    case REMOVE_TODO: {
      return state.filter((todo) => todo.id !== action.payload);
    }

    default:
      return state;
  }
}
