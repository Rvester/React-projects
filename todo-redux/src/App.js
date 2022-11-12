import Todos from "./components/Todos";
import Form from "./components/Form";
import { useState } from "react";
import {store} from './store';
import {Provider} from 'react-redux';



function App() {

    let [todos, setTodos] = useState([])

    const addTodo = (newTodo) => {
        setTodos([...todos, newTodo])
    }

    return ( 
        <Provider store = {store}>

            <Todos todos={todos} />

            <Form addTodo={addTodo} />

        </Provider>
    );
}

export default App;