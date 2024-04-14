import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import AppArea from './components/AppArea';
import Result from './components/Result';

export const url = 'http://localhost:8080/api/text';

export const firstValue = 5;
export const secondValue = 10;
export const thirdValue = 30;

const App = () => {
	const [userText, setUserText] = useState('');
	const [patternText, setPatternText] = useState('');
	const [navigation, setNavigation] = useState('playground');
	const [statistics, setStatistics] = useState(null);
	const [startTime, setStartTime] = useState(0);
	const [error, setError] = useState('');

	const statisticsButtonHandler = () => {
		if (patternText === '') {
			setError('wybierz rodzaj gry');
		} else if (userText === '') {
			setError('wprowadź tekst');
		} else {
			setError('');
			const dataToVerification = {
				userText: userText,
				patternText: patternText,
				time: new Date() - startTime,
			};
			fetch(url, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(dataToVerification),
			})
				.then((response) => response.json())
				.then((response) => setStatistics(response))
				.then(() => setNavigation('statistics'))
				.catch((error) => console.error(error));
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
					setUserText={setUserText}
					patternText={patternText}
					setPatternText={setPatternText}
					statisticsButtonHandler={statisticsButtonHandler}
					error={error}
					setError={setError}
					setStartTime={setStartTime}
				/>
			) : (
				<Result
					statistics={statistics}
					setUserText={setUserText}
					setNavigation={setNavigation}
					setPatternText={setPatternText}
				/>
			)}
		</div>
	);
};

export default App;
