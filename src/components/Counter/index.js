import { useEffect, useState } from "react"

const Counter = ({initialValue = 0}) =>{

    const [counter, setCounter] = useState(initialValue)

    const increment = () =>{
        setCounter(counter => counter += 1)
    }

     const decrement = () =>{
        setCounter(counter => counter -= 1)
     }

     useEffect(() =>{
        if(counter < 0){
            setCounter(0)
        }
     }, [counter])

    return (
        <div className={"w-full h-10 bg-red-500"}>
            <button disabled={counter -1 < 0} id="decrement" onClick={decrement}>decrement</button>
            <span data-test-id={"counter"}>{counter}</span>
            <button id="increment" onClick={increment}>increment</button>
        </div>
    )
}

export default Counter