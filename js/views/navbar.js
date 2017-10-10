views.navbar = function(current){

	var navPages = "<ul id='nav' class='nav nav-tabs'>";

	// should there be so much logic here?

	for(page in views){
		if(page != "navbar" && page[0]){
			if(page == current){
				navPages += "<li class='active'><a href='#" + page + "'>" + page.charAt(0).toUpperCase() + page.slice(1) + "</li>";
			}
			else {
				navPages += "<li><a href='#" + page + "'>" + page.charAt(0).toUpperCase() + page.slice(1) + "</li>";
			}
		}
	}
	navPages += "</ul>";

	return navPages;
}

