var projects = [

	{
		isLive: true,
		title: "TODO App",
		description:"TODO APP is made with html, css, javascript and data is stored in html5 localStorage so that the data remains even though the app is closed.",
		thumbnail: "assets/img/todo-app-thumbnail.png",
		githubLink: "https://github.com/avirahmandev/todo-app",
		liveUrl: "https://avirahmandev.github.io/todo-app/"
	},
	{
		isLive: false,
		title: "Walking LED",
		description: "A simple walking LED using Arduino, written in C++",
		thumbnail: "assets/img/walking-led-thumbnail.gif",
		githubLink: "https://github.com/avirahmandev/walking-led",
		liveUrl: "javascript:void(0)"
	}

];


function generateProjects() {
	
	var itemProject = "";

	for (let i=0; i < projects.length; i++) {

		if (projects[i].isLive) {

			itemProject += `
				<div class="project-card">
					<div class="thumbnail">
						<img src="${projects[i].thumbnail}">
					</div>
					<div class="project-desc-box">
						<h2 class="title-project">${projects[i].title}</h2>
						<div class="desc-project">
							${projects[i].description}
						</div>
					</div>
					<br>
					<div class="button-card">
						<a href="${projects[i].liveUrl}"><i class="fas fa-link"></i> VISIT</a>
						<a href="${projects[i].githubLink}" target="_blank"><i class="fab fa-github"></i> SOURCE</a>
					</div>
				</div>
			`;
		} else {

			itemProject += `
				<div class="project-card">
					<div class="thumbnail">
						<img src="${projects[i].thumbnail}">
					</div>
					<div class="project-desc-box">
						<h2 class="title-project">${projects[i].title}</h2>
						<div class="desc-project">
							${projects[i].description}
						</div>
					</div>
					<br>
					<div class="button-card">
						<a href="${projects[i].liveUrl}" style="opacity:0.5;"><i class="fas fa-link"></i> VISIT</a>
						<a href="${projects[i].githubLink}" target="_blank"><i class="fab fa-github"></i> SOURCE</a>
					</div>
				</div>
			`;
		}
		
		

		$(".project-items").html(itemProject);
	}
}