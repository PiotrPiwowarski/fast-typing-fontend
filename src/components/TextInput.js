import React from 'react';

const TextInput = ({ statisticsButtonHandler, setUserText, setStartTime, patternText, setError }) => {
	const textInputHandler = (event) => {
		if (event.target.value.length === 1) {
			setError('');
			setStartTime(new Date());
		}
		setUserText(event.target.value);
	};

	return (
		<div className='text-input'>
			<input className='input' onChange={textInputHandler} placeholder={patternText} />
			<button className='btn' onClick={statisticsButtonHandler}>
				sprawdź
			</button>
		</div>
	);
};

export default TextInput;
