function Todo({ todo }) {

    const handleClick = () => {
        // complete a todo and remove it
    }

    return ( 
        <li onClick={handleClick}>
            {todo.notes}
        </li>
     );
}

export default Todo;