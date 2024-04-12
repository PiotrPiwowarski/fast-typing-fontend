import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import AppArea from './components/AppArea';
import Result from './components/Result';

function App() {
	const [userInput, setUserInput] = useState('');
	const [display, setDisplay] = useState('app');

	const checkButtonHandler = () => {
		setDisplay('reslut');
	}

	const returnButtonHandler = () => {
		setDisplay('app');
	}

	const textInputHandler = () => {

	}

	return (
		<div className='application'>
			<Header />
			{
				display === 'app' ? 
				<AppArea 
					checkButtonHandler={checkButtonHandler} 
					textInputHandler={textInputHandler} 
				/> 
				: 
				<Result returnButtonHandler={returnButtonHandler}  />
			}
		</div>
	);
}

export default App;
