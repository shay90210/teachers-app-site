import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, selectCount } from "./counterSlice";

const Counter = () => {
    const count = useSelector(selectCount);
    const dispatch = useDispatch();

    return (
        <>
            <button 
                className='counter-button' 
                onClick={() => dispatch(decrement())}
            >
                <FontAwesomeIcon icon={faMinus} />
            </button>
                <span className='counter-number'
            >
                {count}
            </span>
            <button 
                className='counter-button' 
                onClick={() => dispatch(increment())}
            >
                <FontAwesomeIcon icon={faPlus} />
            </button>
        </>
    )
}

export default Counter;