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
			<ButtonsBar setUserText={setUserText} setPatternText={setPatternText} setError={setError} />
			<p className='error'>{error}</p>
			<DisplayPattern patternText={patternText} />
			<TextInput
				patternText={patternText}
				setUserText={setUserText}
				statisticsButtonHandler={statisticsButtonHandler}
				setStartTime={setStartTime}
				setError={setError}
			/>
		</div>
	);
};

export default AppArea;
