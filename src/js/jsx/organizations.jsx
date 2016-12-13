var React = require("react"),
	Organization = require('./organization.jsx');

module.exports = React.createClass({
	getDefaultProps:function(){
		var orgs = window.organizations_bootstrapped ? window.organizations_bootstrapped : [];
		return {
			organizations: orgs
		};
	},
	getInitialState:function(){
		return {
			newOrgName: ""
		};
	},
	onFormSubmit:function(e){
		e.preventDefault();
		console.log("new org name: " + this.state.newOrgName);
	},
	onNewOrgNameChange:function(e){
		this.setState({
			newOrgName: e.target.value
		});
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
				<h1>Permissions!?</h1>
				<hr />

				<h2>Create new Org</h2>
				<form className="form-horizontal" onSubmit={this.onFormSubmit}>
  					<div className="form-group">
    					<label htmlFor="newOrgName" className="col-sm-2 control-label">Org Name</label>
    					<div className="col-sm-10">
      						<input type="text" className="form-control" id="newOrgName" placeholder="new org name" value={this.state.newOrgName} onChange={this.onNewOrgNameChange} />
    					</div>
  					</div>
  					<div className="form-group">
    					<div className="col-sm-offset-2 col-sm-10">
      						<button type="submit" className="btn btn-default">Save</button>
    					</div>
  					</div>
				</form>
				<hr />

				<h2>Orgs</h2>
				{orgs}
			</div>
		);
	}
});
