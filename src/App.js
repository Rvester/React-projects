import Todos from "./components/Todos";
import Form from "./components/Form";
import { useState } from "react";


function App() {

    let [todos, setTodos] = useState([])

    const addTodo = (newTodo) => {
        setTodos([...todos, newTodo])
    }

    return ( 
        <div>

            <Todos todos={todos} />

            <Form addTodo={addTodo} />

        </div>
    );
}

export default App;