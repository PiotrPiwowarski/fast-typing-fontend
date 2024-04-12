import React from 'react';

const TextInput = ({ checkButtonHandler, textInputHandler }) => {
    return (
        <div className='text-input'>
            <input
                className='input'
                onInput={textInputHandler}
            />
            <button className='btn' onClick={checkButtonHandler}>sprawdź</button>
        </div>
    );
}

export default TextInput;