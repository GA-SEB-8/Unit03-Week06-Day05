import { useState } from "react"

function MyComponent(props) {

    const [count, setCount] = useState(0)

    function handleClick() {
        console.log('Ouch you clicked me!')
        // count++
        setCount(count + 1)
        console.log(count)
    }

    console.log(`re-rendered component number ${props.componentNumber}`)
    return (
        <>
            <button onClick={handleClick}>Count Up!</button>
            <h3>{count}</h3>

        </>
    )
}

export default MyComponent