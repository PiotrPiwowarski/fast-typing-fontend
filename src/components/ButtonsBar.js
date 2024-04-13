import React from 'react';
import { url, firstValue, secondValue, thirdValue } from '../App';

const ButtonsBar = ({ setPattern, setError }) => {

    const sendRequest = async (value) => {
        await fetch(`${url}?length=${value}`, {method: 'GET'})
            .then(response => response.json())
            .then(data => setPattern(data.text))
            .catch(error => console.error(error));
    }

    const firstButtonHandler = () => {
        setError('');
        const value = firstValue;
        sendRequest(value);
    }

    const secondButtonHandler = () => {
        setError('');
        const value = secondValue;
        sendRequest(value);
    }

    const thirdButtonHandler = () => {
        setError('');
        const value = thirdValue;
        sendRequest(value);
    }

    return (
        <div className='buttons-bar'>
            <button className='btn' onClick={firstButtonHandler}>{firstValue} słów</button>
            <button className='btn' onClick={secondButtonHandler}>{secondValue} słów</button>
            <button className='btn' onClick={thirdButtonHandler}>{thirdValue} słów</button>
        </div>
    );
}

export default ButtonsBar;