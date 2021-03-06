var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
	render: function(){
		return(
			<div className="top-bar">
				<div className="top-bar-left">
					<ul className="menu">
						<li className="menu-text">Time App</li>
						<li><IndexLink to="/" activeClassName="active-link" activeStyle={{fontWeight: 'bold'}}>Timer</IndexLink></li>
						 <li><Link to="/countdown" activeClassName="active-link" activeStyle={{fontWeight: 'bold'}}>Count Down</Link></li>
					</ul>
				</div>
				<div className="top-bar-right">
					<ul className="menu">
						<li className="menu-text">Created by Juan Arciniega</li>
					</ul>
					
				</div>
			</div>
		)
	}
});

module.exports = Nav;