import React, { useEffect, useReducer } from 'react';
import './App.css';
import chef from './images/chef.jpeg';

// Constants
const items = ['Mac and Cheese', 'Salmon and Potatoes', 'Chicken and Rice'];
const dishObjects = items.map((dish, i) => ({
	id: i,
	title: dish,
}));

// Start of functions
function Header({ name, year }) {
	return (
		<header>
			<h1>{name}'s Restaurant</h1>
			<p>Copywrite {year}</p>
		</header>
	);
}

function Main({ dishes, openStatus, onStatus }) {
	return (
		<>
			<div>
				<button onClick={() => onStatus(true)}>Open</button>
				<h2>Welcome to my restaurant! {openStatus ? 'open' : 'closed'}</h2>
			</div>
			<main>
				<img src={chef} alt="Chef" height="200" />
				<ul>
					{dishes.map((dish) => (
						<li key={dish.id} style={{ listStyleType: 'none' }}>
							{dish.title}
						</li>
					))}
				</ul>
			</main>
		</>
	);
}

function App() {
	//const [status, setStatus] = useState(true);
	const [status, toggle] = useReducer((status) => !status, true);

	useEffect(() => {
		console.log('The restaurant is  ${status ? "open" : "closed"}.');
	}, []);

	return (
		<div>
			<h1>The restaurant is currently {status ? 'open' : 'closed'}</h1>
			<button onClick={toggle}>{status ? 'Close' : 'Open'} Restaurant</button>
			<Header name="Logan" year={new Date().getFullYear()} />
			<Main dishes={dishObjects} openStatus={status} onStatus={toggle} />
		</div>
	);
}

export default App;
