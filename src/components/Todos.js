import Todo from "./Todo";

function Todos({ todos }) {

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