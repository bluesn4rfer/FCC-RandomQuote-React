import React, { useState } from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './style.css';

const quotes = [
	{
		quote: 'Be the change that you wish to see in the world.',
		author: 'Mahatma Gandhi'
	},
	{
		quote: 'Be yourself; everyone else is already taken.',
		author: 'Oscar Wilde'
	},
	{
		quote: 'Without music, life would be a mistake.',
		author: 'Friedrich Nietzsche'
	},
	{
		quote: 'We accept the love we think we deserve.',
		author: 'Stephen Chbosky'
	},
	{
		quote: "I have not failed.  I've just found 10,000 ways that won't work.",
		author: 'Thomas A. Edison'
	}
];


function App() {
	const [index, setIndex] = useState(getRandomInt(quotes.length));

	const showAnotherQuote = () => {
		console.log('showAnotherQuote invoked');
		let new_index = getRandomInt(quotes.length);
		while(new_index === index){
			new_index = getRandomInt(quotes.length);
		}
		setIndex(new_index);
	}

	const quote = quotes[index].quote;
	const author = quotes[index].author;

  return (
	<div className="container d-flex justify-content-center">
	    	<div id="quote-box">
			<h1 id="text" className="text-center">{quote}</h1>
			<h4 id="author" className="text-end">--{author}</h4>
			<center>
				<button id="new-quote" className="m-3 btn btn-outline-primary" onClick={showAnotherQuote} >Show Another Quote</button>
				<a target="_blank" rel="noreferrer" id="tweet-quote" href={"https://twitter.com/intent/tweet?text="+quote}><button className="m-3 btn btn-outline-info">Share Quote On Tweeter</button></a>
			</center>
    		</div>
	</div>
  );
}

function getRandomInt(max){
	return Math.floor(Math.random()*max);
}

export default App;
