import React, {Component} from 'react';
import './App.css';
import Header from './Header';
import Article from './Article';
import Clickbait from './Clickbait';
import Ad from './Ad';
import ArticleTitle from './ArticleTitle';
import Footer from './Footer';

class App extends Component{
	render(){
		return (
			<div className="App">
				<Header/>
				<main className="expanded row">
					<ArticleTitle/>
					<Article/>
					<Ad/>
					<Clickbait/>
				</main>
				<Footer/>
			</div>
		);
	}
}

// to start live React view, run:
// yarn start
export default App;