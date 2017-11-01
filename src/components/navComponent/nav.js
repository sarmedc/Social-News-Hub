import React, { Component } from 'react';
import {	
	Link
} from 'react-router-dom';

class Nav extends Component{
	render(){
		return(
			<header>
				<nav>
					<h4>SNN</h4>
					<ul>						
						<li>
							<Link to="/Reddit">Reddit</Link>
						</li>
						<li>
							<Link to="/Hackernews">Hackernews</Link>
						</li>
						<li>
							<Link to="/Githubtrending">Github Trending</Link>
						</li>
						<li>
							<Link to="/Medium">Medium</Link>
						</li>
					</ul>
				</nav>
			</header>
		);
	}
}

export default Nav;