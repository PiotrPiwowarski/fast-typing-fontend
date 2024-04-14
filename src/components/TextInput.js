import React from 'react';

const TextInput = ({ statisticsButtonHandler, setUserText, setStartTime }) => {
	const textInputHandler = (event) => {
		if (event.target.value.length === 1) {
			setStartTime(new Date());
		}
		setUserText(event.target.value);
	};

	return (
		<div className='text-input'>
			<input className='input' onChange={textInputHandler} />
			<button className='btn' onClick={statisticsButtonHandler}>
				sprawdź
			</button>
		</div>
	);
};

export default TextInput;
