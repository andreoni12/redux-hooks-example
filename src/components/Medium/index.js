import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function Medium() {
    const numbers = useSelector(state => state.medium.numbers);
    const dispatch = useDispatch();
    const [newNumber, setNewNumber] = React.useState(0);
    const [medium, setMedium] = React.useState(0);

    React.useEffect(() => {
        function sumNumbers() {
            let sum = 0;
            numbers.forEach(number => sum = sum + number);
            console.log(sum);
            return sum;
        }

        return setMedium(sumNumbers() / numbers.length);
    }, [numbers]);


    function addNewNumber() {
        dispatch({ type: 'ADD_NUMBER', number: parseInt(newNumber) });
    }

    function resetNumbers() {
        dispatch({ type: 'RESET'});
    }

    return (
        <>
            <ul>
                {numbers.map((number, index) => (<li key={index}>{number}</li>))}
            </ul>
            <h2>Medium: {medium}</h2>
            <input type="number" min="1" onChange={({ target }) => setNewNumber(target.value)} />
            <button type="button" onClick={addNewNumber}>Add Number</button>
            <button type="button" onClick={resetNumbers}>Reset</button>
        </>
    )
}
