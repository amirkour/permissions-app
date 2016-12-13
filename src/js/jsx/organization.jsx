var React = require("react");

module.exports = React.createClass({
	getInitialState:function(){
		return {
			name: this.props.org.name
		}
	},
	onChange:function(e){
		this.setState({name: e.target.value});
	},
	onSaveClick:function(e){
		console.log("TODO - save");
	},
	render: function(){
		return (
			<div>
				<input className="form-control" type="text" value={this.state.name} onChange={this.onChange} />
				<button type="button" className="btn btn-success" onClick={this.onSaveClick}>
				Save
				</button>
			</div>
		);
	}
});
