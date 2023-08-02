"use client"

import {useEffect, useState} from "react"
import Button from "@/components/Button";

const Counter = ({initialValue = 0}) => {

    const [counter, setCounter] = useState(initialValue)

    const increment = () => {
        setCounter(counter => counter += 1)
    }

    const decrement = () => {
        setCounter(counter => counter -= 1)
    }

    useEffect(() => {
        if (counter < 0) {
            setCounter(0)
        }
    }, [counter])

    return (
        <div className={"flex justify-center items-center w-full h-screen bg-red-100"}>
            <div className={"flex justify-around items-center gap-5"}>
                <Button
                    disabled={counter - 1 < 0}
                    id="decrement"
                    onClick={decrement}
                    variant={counter - 1 < 0 ? "warning" : "primary"}
                >
                    decrement
                </Button>
                <span data-test-id={"counter"}>
                    {counter}
                </span>
                <Button
                    id="increment"
                    onClick={increment}
                >
                    increment
                </Button>
            </div>
        </div>
    )
}

export default Counter