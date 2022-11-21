import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const Counter = () => {
    const [count, setCount] = useState(0);

    const Increment = () => {
        return (
            setCount(count + 1)
        )
    }
    const Decrement = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }
    const reset = () => {
        setCount(0)
    }

    return (
        <>
            <button className='counter-button' onClick={Decrement}><FontAwesomeIcon icon={faMinus} /></button>
                <span className='counter-number'>{count}</span>
            <button className='counter-button' onClick={Increment}><FontAwesomeIcon icon={faPlus} /></button>
                <br />
                <br />
            <button className='trash-button' onClick={reset}>Remove Item</button>
        </>
    )
}

export default Counter;