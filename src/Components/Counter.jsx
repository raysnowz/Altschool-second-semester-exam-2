import useCounter from './useCounter';

const Counter = () => {
    const [count, setCount] = useCounter(0);

    let increment = () => {
        setCount(count + 5);
    };

    let decrement = () => {
        setCount(count - 5);
    };

    return (
        <div className="counter">
            <h2>Rahman Counter App</h2>

            <div>
            <button className='dec' onClick={decrement}>-</button>
                <input style={{padding: '8px 16px', border: '1px solid #8c8c8c'}} value={count} onChange={(e) => e.target.value} />
            <button className='inc'                                                                                                  onClick={increment}>+</button>
            </div>

            <div>
            <button className='reset' onClick={() => setCount(0)}>Reset</button>
            </div>
        </div>
    );
}
 
export default Counter;