import React, {Component} from 'react';
import './App.css';
import Header from './Header';
import Article from './Article';
import Clickbait from './Clickbait';
import Ad from './Ad';
import ArticleLinks from './ArticleLinks'
import Author from './Author'

class App extends Component{
	render(){
		return (
			<div className="App">
				<Header/>
				<main className="expanded row">
					<div className="large-8 medium-12 columns article">
						<h2 className="article-title">Gold Madness - Fact or Fiction?</h2>
						<div className="avatar">
							<img src="http://www.zbrushcentral.com/attachment.php?attachmentid=376082" alt="author"/>
							<Author/>
						</div>
						<Article/>
						<ArticleLinks/>
					</div>
					<aside className="large-4 medium-12 columns">
						<Ad/>
					</aside>
					<Clickbait/>
				</main>

				<footer className="expanded row">
					<h6>&copy; 2017 Erebor Industries</h6>
					<h6 className="float-right">All rights reserved</h6>
				</footer>
			</div>
		);
	}
}

// to start live React view, run:
// yarn start
export default App;