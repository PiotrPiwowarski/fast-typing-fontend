import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import AppArea from './components/AppArea';
import Result from './components/Result';

export const url = 'http://localhost:8080/api/text';

export const firstValue = 10;
export const secondValue = 20;
export const thirdValue = 30;

const App = () => {
	const [userInput, setUserInput] = useState('');
	const [pattern, setPattern] = useState('');
	const [navigation, setNavigation] = useState('playground');
	const [statistics, setStatistics] = useState(null);
	const [start, setStart] = useState(-1);
	const [end, setEnd] = useState(-1);
	const [time, setTime] = useState(-1);
	const [error, setError] = useState('');

	const timeHandler = () => {
		console.log('start' + start);
		console.log('end' + end);
		console.log(end - start);
		return end - start;
	}

	const statisticsButtonHandler = () => {
		if(pattern === '') {
			setError('wybierz rodzaj gry');
		} else {
			setEnd(new Date());
			const dataToVerification = {
				textToVerification: userInput,
				pattern: pattern,
			};
			fetch(url, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(dataToVerification),
			})
				.then((response) => response.json())
				.then((response) => setStatistics(response))
				.then(() => setTime(timeHandler()))
				.then(() => setNavigation('statistics'))
				.catch((error) => console.error(error))
		}
	};

	const keyDownHandler = (event) => {
		if (event.key === 'Enter') {
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
					time={time}
					setUserInput={setUserInput}
					setNavigation={setNavigation}
					setPattern={setPattern}
				/>
			)}
		</div>
	);
};

export default App;
