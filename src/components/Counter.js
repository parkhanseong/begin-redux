import React from 'react';

const Counter = ({
    number,
    onIncrement,
    onDoubleIncrement,
    onDecrement,
    onDoubleDecrement,
    onZero
}) => {
    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrement}> 증가</button>
            <button onClick={onDoubleIncrement}> 2배 증가</button>
            <button onClick={onDecrement}> 감소</button>
            <button onClick={onDoubleDecrement}> 2배 감소</button>
            <button onClick={onZero}> 초기화</button>
        </div>
    );
};

Counter.defaultProps = {
    number: 0
}

export default Counter;