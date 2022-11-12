import {useState} from 'react'


export default function Counter (props){


let [count, setCount] = useState(0)
let [number, setNumber] = useState("")

const handleIncrement = () => {
	
   setCount(count + Number(number))
};

const handleDecrement = () => {
	
    setCount(count - number)
    
};
const handleIncrement2 = () => {
    
    setCount(count * number)
    
};
const handleDecrement2 = () => {
    
    setCount(count / number)
    
};
const handleChange = (e) => {
        setNumber(e.target.value)
}
return (

<>
<span>Current Count: {count}</span>
<section>
    <input type = "number" value = {number} onChange = {handleChange}/> <br />
    <button onClick={handleIncrement}>+</button>
    <button onClick={handleDecrement}>-</button>
    <button onClick={handleIncrement2}>*</button>
    <button onClick={handleDecrement2}>/</button>
    
</section>

</>

)
}