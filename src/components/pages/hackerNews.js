import React, { Component } from 'react';
import axios from 'axios';
import '../../Assets/css/page.min.css';

var Loading = require('./loading');

class Hackernews extends Component{
	constructor(props){
		super(props);

		this.state = {
			posts: null
		}
	}

	componentDidMount(){
		axios.get('https://hacker-news.firebaseio.com/v0/topstories.json').then(res => {			
			axios.all(res.data.slice(0,25).map(id=> {
				return axios.get('https://hacker-news.firebaseio.com/v0/item/' + id + '.json').then(res=>res)
			})).then(res=>{
				const posts = res.map(obj=>obj.data);
				this.setState({posts: posts});
			});
			
		});
	}

	render(){
		var counter = 0;
		return(
			<div className="news">
				<h1>Hackernews</h1>
				<ol className="list">
					{!this.state.posts ? <Loading /> : 
						this.state.posts.map(post => 							
							<div key={counter} className="card">
								<div key={counter++} className="content">
									<li key={post.id} className="post">	
										<a href={post.url} className="title">{post.title}</a><br/>	
										<label>{post.score} pts by <em>{post.by}</em> {post.descendants} comments</label><br/>																					
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

export default Hackernews;