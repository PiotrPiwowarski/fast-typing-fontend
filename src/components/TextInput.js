import React, { useRef, useEffect } from 'react';

const TextInput = ({ statisticsButtonHandler, setUserText, setStartTime, patternText, setError }) => {

	const inputRef = useRef(null);

	const textInputHandler = (event) => {
		if (event.target.value.length === 1) {
			setError('');
			setStartTime(new Date());
		}
		setUserText(event.target.value);
	};

	useEffect(() => {
		inputRef.current.focus();
	},[]);

	return (
		<div className='text-input'>
			<input ref={inputRef} className='input' onChange={textInputHandler} placeholder={patternText} />
			<button className='btn' onClick={statisticsButtonHandler}>
				sprawdź
			</button>
		</div>
	);
};

export default TextInput;
