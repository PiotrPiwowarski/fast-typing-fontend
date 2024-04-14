import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import AppArea from './components/AppArea';
import Result from './components/Result';

export const url = 'http://localhost:8080/api/text';

export const firstValue = 5;
export const secondValue = 10;
export const thirdValue = 30;

const App = () => {
	const [userInput, setUserInput] = useState('');
	const [pattern, setPattern] = useState('');
	const [navigation, setNavigation] = useState('playground');
	const [statistics, setStatistics] = useState(null);
	const [start, setStart] = useState(0);
	const [error, setError] = useState('');

	const statisticsButtonHandler = () => {
		if(pattern === '') {
			setError('wybierz rodzaj gry');
		}
		else if(userInput === '') {
			setError('wprowadź tekst');
		} else {
			setError('');
			const dataToVerification = {
				textToVerification: userInput,
				pattern: pattern,
				time: (new Date() - start)
			};
			console.log(dataToVerification);
			fetch(url, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(dataToVerification),
			})
				.then((response) => response.json())
				.then((response) => setStatistics(response))
				.then(() => setNavigation('statistics'))
				.catch((error) => console.error(error))
		}
	};

	const keyDownHandler = (event) => {
		if (event.keyCode === 13) {
			statisticsButtonHandler();
		}
	};

	return (
		<div className='application' onKeyDown={keyDownHandler}>
			<Header />
			{navigation === 'playground' ? (
				<AppArea
					setUserInput={setUserInput}
					pattern={pattern}
					setPattern={setPattern}
					statisticsButtonHandler={statisticsButtonHandler}
					error={error}
					setError={setError}
					setStart={setStart}
				/>
			) : (
				<Result
					statistics={statistics}
					setUserInput={setUserInput}
					setNavigation={setNavigation}
					setPattern={setPattern}
				/>
			)}
		</div>
	);
};

export default App;
