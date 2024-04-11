import './App.css';
import { useState } from 'react';
import DisplayText from './components/DisplayText';

function App() {
  const [text, setText] = useState('');

	return (
		<div className='app'>
			<div className='Header'>
				<h1>Fast Typing App</h1>
			</div>
      <p>{text}</p>
			<div className='main-container'>
				<p className='Text'>Lorem ipsum itd...</p>
				<DisplayText setText={setText} />
			</div>
		</div>
	);
}

export default App;
