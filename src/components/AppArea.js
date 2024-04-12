import React from 'react';
import ButtonsBar from './ButtonsBar';
import DisplayText from './DisplayText';
import TextInput from './TextInput';

const AppArea = ({ checkButtonHandler }) => {
    return (
        <div>
            <ButtonsBar />
			<DisplayText />
			<TextInput checkButtonHandler={checkButtonHandler}/>
        </div>
    );
}

export default AppArea;