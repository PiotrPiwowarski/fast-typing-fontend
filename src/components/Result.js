import React from 'react';

const Result = ({ result, time, returnButtonHandler }) => {
	return (
		<div className='result'>
			<div className='row-container'>
				<div className='column-container'>
					<p>poprawne słowa: </p>
					<p>niepoprawne słowa: </p>
					<p>trafność: </p>
					<p>czas: </p>
				</div>
				<div className='column-container'>
					<p>result.correctWords</p>
					<p>result.incorrectWords</p>
					<p>result.accuracy</p>
					<p>time</p>
				</div>
			</div>
			<button className='btn' onClick={returnButtonHandler}>
				nowa gra
			</button>
		</div>
	);
};

export default Result;
