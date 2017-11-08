import React, { Component } from 'react';
import axios from 'axios'
import '../../Assets/css/page.min.css';

var Loading = require('./loading');

class Medium extends Component{
	constructor(props){
		super(props);

		this.state = {
			posts: null
		}
	}

	componentDidMount(){
		axios.get('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/topic/popular/').then(res => {			
			const posts = res.data.items.map(obj => obj);
			console.log(res.data.items)
			this.setState({posts:posts});
		});
	}

	render(){
		var counter = 0;
		return(
			<div className="news">
				<h1>Medium</h1>
				<ol className="list">
					{!this.state.posts ? <Loading /> : 
						this.state.posts.map(post => 							
							<div key={counter} className="card">
								<div key={counter++} className="content">
									<li key={post.id} className="post">	
										<a href={post.link} className="title">{post.title}</a><br/>	
										<label className="author">by <em>{post.author}</em></label><br/>																					
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

export default Medium;