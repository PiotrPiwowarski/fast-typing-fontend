import React from 'react';

const Result = ({ statistics, setUserText, setNavigation, setPatternText }) => {
	const returnButtonHandler = () => {
		setUserText('');
		setPatternText('');
		setNavigation('playground');
	};

	return (
		<div className='result'>
			<table>
				<thead>
					<tr>
						<th>czas</th>
						<th>słów na minute</th>
						<th>znaków na minute</th>
						<th>trafność</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>{statistics.time.toFixed(2)}s</td>
						<td>{statistics.wordsPerMinute.toFixed(2)}</td>
						<td>{statistics.lettersPerMinute.toFixed(2)}</td>
						<td>{statistics.accuracy.toFixed(2)}%</td>
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
