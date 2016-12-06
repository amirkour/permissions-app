var Foo = require("./jsx/foo.jsx"),
	React = require('react'),
	ReactDOM = require('react-dom');

(function($,window,document,undefined){
	$(document).ready(function(){
		console.log("hi wadsforldasdf!?");
		ReactDOM.render(
			<Foo />,
			document.getElementById('app-body')
		);
	});
	
})($,window,document);
