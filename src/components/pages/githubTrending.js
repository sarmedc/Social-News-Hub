import React, { Component } from 'react';
import '../../Assets/css/page.min.css';

var Loading = require('./loading');
const trending = require('trending-github');




class Githubtrending extends Component{
	constructor(props){
		super(props);

		this.state = {
			posts: null
		}
	}

	componentDidMount(){
		trending()
  			.then(repos => {
  				const posts = repos.map(obj=>obj);	
				this.setState({posts:posts});
  			});
	}
	render(){
		var counter = 0;
		return(
			<div className="news">
				<h1>Github Trending</h1>
				<ol className="list">
					{!this.state.posts ? <Loading /> : 
						this.state.posts.map(post => 							
							<div key={counter} className="card">
								<div key={counter++} className="content">
									<li key={post.id} className="post">	
										<a href={post.url} className="title">{post.name} - {post.description}</a><br/>	
										<label>by <em>{post.author}</em> {post.language}</label><br/>																					
									</li>								
								</div>							
							</div>
						)
					}
				</ol>
			</div>
		);
	}
}

export default Githubtrending;