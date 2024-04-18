import React from 'react';
import { url, firstValue, secondValue, thirdValue } from '../App';

const ButtonsBar = ({ setPatternText, setError, setUserText }) => {
	const sendRequest = async (value) => {
		await fetch(`${url}?length=${value}`, { method: 'GET' })
			.then((response) => response.json())
			.then((data) => setPatternText(data.patternText))
			.catch((error) => console.error(error));
	};

	const firstButtonHandler = () => {
		setUserText('');
		setError('');
		const value = firstValue;
		sendRequest(value);
	};

	const secondButtonHandler = () => {
		setUserText('');
		setError('');
		const value = secondValue;
		sendRequest(value);
	};

	const thirdButtonHandler = () => {
		setUserText('');
		setError('');
		const value = thirdValue;
		sendRequest(value);
	};

	return (
		<div className='buttons-bar'>
			<button className='btn' onClick={firstButtonHandler}>
				{firstValue} słów
			</button>
			<button className='btn' onClick={secondButtonHandler}>
				{secondValue} słów
			</button>
			<button className='btn' onClick={thirdButtonHandler}>
				{thirdValue} słów
			</button>
		</div>
	);
};

export default ButtonsBar;
