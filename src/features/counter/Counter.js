import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const Counter = () => {
    const [count, setCount] = useState(0);

    const IncrementCount = () => {
        return (
            setCount(count + 1)
        )
    }

    const DecrementCount = () => {
        return(
            setCount(count - 1)
        )
    }

    return (
        <>
            <button onClick={DecrementCount}><FontAwesomeIcon icon={faMinus} /></button>
                <span> {count} </span>
            <button onClick={IncrementCount}><FontAwesomeIcon icon={faPlus} /></button>
        </>
    )
}

export default Counter;