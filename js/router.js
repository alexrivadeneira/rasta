var router = {
	router: function(){
		route = location.hash.split("#")[1] || "home";

		if(controllers[route]){
			controllers[route]();
		}

		if(views[route]){
			controllers.navbar(route)
		};
		
	},

	render: function(target, content, convert_markdown){
		convert_markdown = convert_markdown || false;
		if(convert_markdown){
			var converter = new showdown.Converter();
			target.innerHTML = converter.makeHtml(content);
		} else {
			target.innerHTML = content;
		}
	}
}



