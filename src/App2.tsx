import { useReducer } from 'react'
import axios from 'axios'

interface ITodo {
    id: number,
    title: string,
    userId: number,
    completed: boolean
}

type State = {
    value: number;
    todos: ITodo[];
    loading: boolean;
}

const initialCounterState: State = {
    value: 0,
    todos: [],
    loading: false
}

enum ActionKind {
    Increase = 'INCREASE',
    Decrease = 'DECREASE',
    Call_API = 'CALL_API',
    Set_loading = 'SET_LOADING'
}

type Action = {
    type: ActionKind,
    payload: any
}

const increaseAction: Action = {
    type: ActionKind.Increase,
    payload: 1
}

const decreaseAction: Action = {
    type: ActionKind.Decrease,
    payload: 1
}

function counterReducer(state: State, action: Action): State {
    const { type, payload } = action;
    switch (type) {
        case ActionKind.Increase:
            return {
                ...state,
                value: state.value + payload
            }
        case ActionKind.Decrease:
            return {
                ...state,
                value: state.value - payload
            }
        case ActionKind.Call_API:
            return {
                ...state,
                todos: payload,
                loading: false
            }
        case ActionKind.Set_loading:
            return {
                ...state,
                todos: [],
                loading: payload
            }
        default:
            return state;
    }
}

const App2 = (): JSX.Element => {

    const [state, dispatch] = useReducer(counterReducer, initialCounterState);

    return (
        <>
            <div>
                Count: {state.value}
                <button onClick={() => dispatch(decreaseAction)}>
                    -
                </button>
                <button onClick={() => dispatch(increaseAction)}>
                    +
                </button>
                <button
                    onClick={async (): Promise<void> => {
                        dispatch({ type: ActionKind.Set_loading, payload: true })
                        const { data } = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos')
                        dispatch({ type: ActionKind.Call_API, payload: data })
                    }}>
                    Call API
                </button>
            </div>
            <div>

                {state.loading && <h2>Loading...</h2>}

                {state.todos.map((todo) => (
                    <h5 key={todo.id}>{todo.title}</h5>
                ))}

            </div>
        </>
    )
}

export default App2