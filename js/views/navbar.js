// views.navbar = function(current){

// 	var navPages = `
//     <nav class="navbar navbar-expand navbar-dark bg-dark">
//       <a class="navbar-brand" href="#">RASTA</a>
//       <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample02" aria-controls="navbarsExample02" aria-expanded="false" aria-label="Toggle navigation">
//         <span class="navbar-toggler-icon"></span>
//       </button>

//       <div class="collapse navbar-collapse" id="navbarsExample02">
//         <ul class="navbar-nav mr-auto">
//           `;

// 	for(page in views){
// 		if(page != "navbar" && page[0]){
// 			if(page == current){
// 				navPages += "<li class='nav-item active'><a class='nav-link' href='#" + page + "'>" + page.charAt(0).toUpperCase() + page.slice(1) + "</li>";
// 			}
// 			else {
// 				navPages += "<li class='nav-item'><a class='nav-link' href='#" + page + "'>" + page.charAt(0).toUpperCase() + page.slice(1) + "</li>";
// 			}
// 		}
// 	}

//     navPages += `</ul></div></nav>`;




// 	return navPages;
// }



