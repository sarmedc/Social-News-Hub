import React, { Component } from 'react';
import {	
	Link
} from 'react-router-dom';

import '../../Assets/css/nav.min.css';

class Nav extends Component{
	render(){
		return(
			<header>
				<nav>									
					<ul className="navList">						
						<li className="logo">
							<img src={require("../../Assets/img/news_icon.png")} alt=""/>	
						</li>
						<li>
							<h4>Social News Hub</h4>							
						</li>						
						<div className="divLink">
						<hr/>
						<li className="Link">
							<Link to="/Reddit">Reddit</Link>
						</li>
						<li className="Link">
							<Link to="/Hackernews">Hackernews</Link>
						</li>
						<li className="Link">
							<Link to="/Githubtrending">Github Trending</Link>
						</li>
						<li className="Link">
							<Link to="/Medium">Medium</Link>
						</li>
						<hr/>
						</div>						
						<li>
							<h5 className="copy">&copy;Sarmed Chaudhry</h5>
						</li>
					</ul>										
				</nav>
			</header>
		);
	}
}

export default Nav;