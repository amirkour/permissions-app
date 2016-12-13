var React = require("react"),
	Organization = require('./organization.jsx');

module.exports = React.createClass({
	getDefaultProps:function(){
		var orgs = window.organizations_bootstrapped ? window.organizations_bootstrapped : [];
		return {organizations: orgs};
	},
	render: function(){
		var orgs = <p>none</p>;

		if(this.props.organizations && this.props.organizations.length > 0){
			orgs = this.props.organizations.map(function(org){
				return <Organization org={org} key={org.id} />
			});
		}

		return (
			<div>
				<h1>Orgs!?</h1>
				{orgs}
			</div>
		);
	}
});
