import React, { useState } from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './style.css';

const quotes = require('./quotes.json');

function App() {
	const [index, setIndex] = useState(getRandomInt(quotes.length));

	const showRandomQuote = () => {
		console.log('showAnotherQuote invoked');
		let new_index = getRandomInt(quotes.length);
		while(new_index === index){
			new_index = getRandomInt(quotes.length);
		}
		setIndex(new_index);
	}

	const showPreviousQuote = () => {
		console.log('showPreviousQuote invoked');
		if(index > 0){
			let new_index = index - 1;
			setIndex(new_index);
		}
	}

	const showNextQuote = () => {
		console.log('showNextQuote invoked');
		let max_index = quotes.length - 1;
		if(index < max_index){
			let new_index = index + 1;
			setIndex(new_index);
		}
	}

	const quote = quotes[index].quote;
	const author = quotes[index].author;

	let previousBtnClass = index == 0 ? 'btn btn-outline-secondary disabled' : 'btn btn-outline-secondary';
	let nextBtnClass = index == quotes.length - 1 ? 'btn btn-outline-secondary disabled' : 'btn btn-outline-secondary';

  	return (
		<div className="container d-flex justify-content-center">
	    		<div id="quote-box">
				<div className="d-flex flex-row">
					<div className="d-flex flex-fill justify-content-start py-3 px-0 text-secondary">{index+1}/{quotes.length}</div>
					<div className="d-flex flex-fill justify-content-end"><a target="_blank" rel="noreferrer" id="tweet-quote" href={"https://twitter.com/intent/tweet?text="+quote}><button className="my-3 mx-0 btn btn-outline-info">Share on Tweeter</button></a></div>
				</div>
				<div className="d-flex flex-row justify-content-center my-3">
					<button id="previous-quote" className={previousBtnClass} onClick={showPreviousQuote} >Previous</button>
					<button id="new-quote" className="mx-3 btn btn-outline-primary" onClick={showRandomQuote} >Random Quote</button>
					<button id="next-quote" className={nextBtnClass} onClick={showNextQuote} >Next</button>
				</div>
				<div className="m-3">
					<h1 id="text" className="text-center">{quote}</h1>
					<h4 id="author" className="text-end">--{author}</h4>
				</div>
    			</div>
		</div>
  	);
}

function getRandomInt(max){
	return Math.floor(Math.random()*max);
}

export default App;
