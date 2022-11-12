import Todo from "./Todo";
import {useSelector} from 'react-redux'


function Todos() {

    const {todos} = useSelector((state)=> state.todos)

    
    return ( 
        <div>
            <h3>Todos:</h3>

            <ul>

                {todos.map((todo, i) => 
                    <Todo key={i} todo={todo} />
                )}
            </ul>
               
        </div>
    );
}

export default Todos;