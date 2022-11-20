import { useState } from "react";

const Increment = () => {
    const [count, setCount] = useState(0);

    const IncreaseCount = () => {
        return (
            setCount(count + 1)
        )
    }

    return (
        <button onClick={IncreaseCount}>Count is: {count}</button>
    )
}

export default Increment;