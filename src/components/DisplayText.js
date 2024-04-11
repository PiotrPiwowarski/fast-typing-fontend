import React, {useState, Button} from 'react';

const DisplayText = ({ setText }) => {

    const handleTextInputChange = (event) => {
        setText(event.target.value);
    }

    const handleButtonClick = () => {

    }

    return (
        <div className='display-text'>
            <label>
                <input type='text' onChange={handleTextInputChange} />
            </label>
            <button className='button' onPress={handleButtonClick}>kliknij mnie</button>
        </div>
    );
}

export default DisplayText;