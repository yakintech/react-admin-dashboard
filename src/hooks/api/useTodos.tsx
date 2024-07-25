import { useEffect, useState } from "react"



export const useTodos = () => {

    const [todos, settodos] = useState([])
    const [loading, setloading] = useState(true)


    useEffect(() => {
      
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => {
            settodos(json)
            setloading(false)
        })

    }, [])

    return {todos, loading}
    
}
    