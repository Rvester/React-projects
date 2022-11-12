import { useRef } from "react";
import { v4 as uuid } from 'uuid'

function Form({ addTodo }) {

    let notesRef = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()

        let newTodo = {
            notes: notesRef.current.value,
            completed: false,
            id: uuid()
        }

        addTodo(newTodo)
        console.log(newTodo)

        notesRef.current.value = ""
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <label htmlFor="notes">I need to...</label>
            <br/>
            <input 
                id="notes" 
                type="text" 
                ref={notesRef} 
            />
            <br/><br/>
            <button>Submit</button>
        </form>
     );
}

export default Form;