import React from 'react';
import ButtonsBar from './ButtonsBar';
import DisplayPattern from './DisplayPattern';
import TextInput from './TextInput';

const AppArea = ({
    setUserInput,
	pattern,
    setPattern,
	statisticsButtonHandler,
    error,
    setError,
    setStart
}) => {
	return (
		<div>
			<ButtonsBar setPattern={setPattern} setError={setError} />
            <p className='error'>{error}</p>
			<DisplayPattern pattern={pattern} />
			<TextInput
                setUserInput={setUserInput}
                statisticsButtonHandler={statisticsButtonHandler}
                setStart={setStart}
			/>
		</div>
	);
};

export default AppArea;
