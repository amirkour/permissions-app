var Promise = require('es6-promise').Promise,
	Organizations = require('./jsx/organizations.jsx'),
	React = require('react'),
	ReactDOM = require('react-dom');

(function($,window,document,undefined){
	$(document).ready(function(){
		ReactDOM.render(
			<Organizations />,
			document.getElementById('app-body')
		);
	});
	
})($,window,document);
