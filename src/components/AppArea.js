import React from 'react';
import ButtonsBar from './ButtonsBar';
import DisplayPattern from './DisplayPattern';
import TextInput from './TextInput';

const AppArea = ({
	setUserText,
	patternText,
	setPatternText,
	statisticsButtonHandler,
	error,
	setError,
	setStartTime,
}) => {
	return (
		<div>
			<ButtonsBar setPatternText={setPatternText} setError={setError} />
			<p className='error'>{error}</p>
			<DisplayPattern patternText={patternText} />
			<TextInput
				setUserText={setUserText}
				statisticsButtonHandler={statisticsButtonHandler}
				setStartTime={setStartTime}
			/>
		</div>
	);
};

export default AppArea;
