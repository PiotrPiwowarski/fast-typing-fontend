import React from 'react';

const Result = ({ statistics, setTime, time, setUserInput, setNavigation, setPattern }) => {

    const returnButtonHandler = () => {
		setUserInput('');
        setPattern('');
		setNavigation('playground');
	}

	return (
		<div className='result'>
			<table>
				<thead>
					<tr>
						<th>poprawne słowa</th>
						<th>niepoprawne słowa</th>
						<th>trafność</th>
						<th>czas</th>
						<th>słów na minute</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>{statistics.correctWords}</td>
						<td>{statistics.incorrectWords}</td>
						<td>{statistics.accuracy}%</td>
						<td>{statistics.time}s</td>
						<td>{statistics.wordsPerMinute}</td>
					</tr>
				</tbody>
			</table>
			<button className='btn' onClick={returnButtonHandler}>
				nowa gra
			</button>
		</div>
	);
};

export default Result;
