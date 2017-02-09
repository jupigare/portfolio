$( document ).ready(function() {
	// Each section below will add info overlaid on the thumbnails upon hover.
	// Replace "Project1", "Project2", (etc.), and URL and GITHUB links according to your needs.

	$(".project1").hover(function(){
		html_str = '<div><h4><a href="#URL1" target="_blank">Project1</a></h4>';
		html_str += '<p>Description</p>';
		html_str += '<p><a href="#GITHUB_FOR_PROJECT1" target="_blank"><img src="icons/github_mark_16px_white.png" alt="Github" /> Source Code</a></p></div>';
		$(this).append(html_str);
		}, function(){
		$(".project1 div").remove();
	});

	$(".project2").hover(function(){
		html_str = '<div><h4><a href="#URL2" target="_blank">Project2</a></h4>';
		html_str += '<p>Description</p>';
		html_str += '<p><a href="#GITHUB_FOR_PROJECT2" target="_blank"><img src="icons/github_mark_16px_white.png" alt="Github" /> Source Code</a></p></div>';
		$(this).append(html_str);
		}, function(){
		$(".project2 div").remove();
	});

	$(".project3").hover(function(){
		html_str = '<div><h4><a href="#URL3" target="_blank">Project3</a></h4>';
		html_str += '<p>Description</p>';
		html_str += '<p><a href="#GITHUB_FOR_PROJECT3" target="_blank"><img src="icons/github_mark_16px_white.png" alt="Github" /> Source Code</a></p></div>';
		$(this).append(html_str);
		}, function(){
		$(".project3 div").remove();
	});

	$(".project4").hover(function(){
		html_str = '<div><h4><a href="#URL4" target="_blank">Project4</a></h4>';
		html_str += '<p>Description</p>';
		html_str += '<p><a href="#GITHUB_FOR_PROJECT4" target="_blank"><img src="icons/github_mark_16px_white.png" alt="Github" /> Source Code</a></p></div>';
		$(this).append(html_str);
		}, function(){
		$(".project4 div").remove();
	});

	$(".project5").hover(function(){
		html_str = '<div><h4><a href="#URL5" target="_blank">Project5</a></h4>';
		html_str += '<p>Description</p>';
		html_str += '<p><a href="#GITHUB_FOR_PROJECT5" target="_blank"><img src="icons/github_mark_16px_white.png" alt="Github" /> Source Code</a></p></div>';
		$(this).append(html_str);
		}, function(){
		$(".project5 div").remove();
	});

	$(".project6").hover(function(){
		html_str = '<div><h4><a href="#URL6" target="_blank">Project6</a></h4>';
		html_str += '<p>Description</p>';
		html_str += '<p><a href="#GITHUB_FOR_PROJECT6" target="_blank"><img src="icons/github_mark_16px_white.png" alt="Github" /> Source Code</a></p></div>';
		$(this).append(html_str);
		}, function(){
		$(".project6 div").remove();
	});

	$(".project7").hover(function(){
		html_str = '<div><h4><a href="#URL7" target="_blank">Project7</a></h4>';
		html_str += '<p>Description</p>';
		html_str += '<p><a href="#GITHUB_FOR_PROJECT7" target="_blank"><img src="icons/github_mark_16px_white.png" alt="Github" /> Source Code</a></p></div>';
		$(this).append(html_str);
		}, function(){
		$(".project7 div").remove();
	});

	$(".project8").hover(function(){
		html_str = '<div><h4><a href="#URL8" target="_blank">Project8</a></h4>';
		html_str += '<p>Description</p>';
		html_str += '<p><a href="#GITHUB_FOR_PROJECT8" target="_blank"><img src="icons/github_mark_16px_white.png" alt="Github" /> Source Code</a></p></div>';
		$(this).append(html_str);
		}, function(){
		$(".project8 div").remove();
	});
});
