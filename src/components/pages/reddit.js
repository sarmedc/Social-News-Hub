import React, { Component } from 'react';
import axios from 'axios';
import '../../Assets/css/page.min.css';

var Loading = require('./loading');

class Reddit extends Component{
	constructor(props){
		super(props);

		this.state = {
			posts: null
		}	
	}

	componentDidMount(){
		axios.get('https://www.reddit.com/.json').then(res=>{
			const posts = res.data.data.children.map(obj=>obj.data);
			this.setState({posts: posts});
		});
	}

	render(){		
		var redditComments = "http://www.reddit.com/r/";
		var counter = 0;
		return(
			<div className="news">
				<h1>Reddit</h1>
				<ol className="list">
					{!this.state.posts ? <Loading /> : 
						this.state.posts.map(post => 							
							<div key={counter} className="card">
								<div key={counter++} className="content">
									<li key={post.id} className="post">																			
										<a href={post.url} className="title">{post.title}</a><br/>
										<label className="author">Submitted by <em>{post.author}</em> to r/{post.subreddit}</label><br/>
										<a href= {redditComments + post.subreddit + "/comments/" + post.id + "/" + ((post.title).toLowerCase()).split(' ').join('_')} 
										   className="comments">{post.num_comments} comments
										</a>										
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

export default Reddit;