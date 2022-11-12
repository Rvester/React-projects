import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";



export default function Borough(){
    
    const params = useParams()
    
    const borough = params.id.toUpperCase
    
    const url = `https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD&borough=${borough}&$limit=10`
    
    const [bborough, setBorough] = useState("")

     const getBorough = async () => {
        try {
            const response = await fetch(url)
            const data = await response.json()
            setBorough(data)
        }catch(err){
            console.error(err)
        }
     }

     useEffect(()=>{
     getBorough();
     },[borough])

    return (
        <div>
            <h1>
                {params.borough.toUpperCase()}
            </h1>
            
        </div>
    )
}
