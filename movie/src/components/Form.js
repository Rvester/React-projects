import { useState } from "react"

export default function Form(props){
    let [movieName, setMovieName] = useState('')

    const handleChange = (e) => {
        setMovieName(e.target.value)
    }
    const handleSumbit = (e)=> {
        e.preventDefault()
        props.getMovie(movieName)
    }
    return (
        <div>
            <form onSubmit= {handleSumbit}>
                <input type= 'text' value= {movieName} onChange = {handleChange}/>
                <input type= 'submit' value ='submit'/>
            </form>
        </div>
    )
}