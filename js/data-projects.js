var projects = [
	
	{
		haveLivePrev: true,
		haveSourceCode: false,
		haveVideoPrev: true,
		title: "Cube Knight Adventure",
		description:"Cube Knight Adventure is a 2D platformer adventure game made with GDscript and Godot Engine.",
		thumbnail: "assets/video/preview-cube-knight-adventure.webm",
		githubLink: "javascript:void(0)",
		liveUrl: "https://play.google.com/store/apps/details?id=com.avirahmandev.CubeKnightAdventure"
	},
	{
		haveLivePrev: false,
		haveSourceCode: false,
		haveVideoPrev: true,
		title: "Cube Platformer 2D",
		description:"My first 2D basic platformer game made with Godot Engine",
		thumbnail: "assets/video/preview-cube-platformer.webm",
		githubLink: "javascript:void(0)",
		liveUrl: "javascript:void(0)"
	},
	{
		haveLivePrev: true,
		haveSourceCode: true,
		haveVideoPrev: false,
		title: "TODO App",
		description:"TODO APP is made with html, css, javascript and data is stored in html5 localStorage so that the data remains even though the app is closed.",
		thumbnail: "assets/img/todo-app-thumbnail.png",
		githubLink: "https://github.com/avirahmandev/todo-app",
		liveUrl: "https://avirahmandev.github.io/todo-app/"
	}
	// {
	// 	haveLivePrev: false,
	// 	haveSourceCode: true,
	// 	haveVideoPrev: true,
	// 	title: "Walking LED",
	// 	description: "A simple walking LED using Arduino, written in C++",
	// 	thumbnail: "assets/video/preview-walking-led.webm",
	// 	githubLink: "https://github.com/avirahmandev/walking-led",
	// 	liveUrl: "javascript:void(0)"
	// }

];


function generateProjects() {
	
	var itemProject = "";

	for (let i=0; i < projects.length; i++) {

		// template card
		var headWithVideo = `
			<div class="project-card">
				<div class="thumbnail">
					<video autoplay loop muted>
						<source src="${projects[i].thumbnail}" type="video/webm">
						Your browser doesn't support the video tag.
					</video>
				</div>
			`;

		var headWithImg = `
			<div class="project-card">
				<div class="thumbnail">
					<img src="${projects[i].thumbnail}" alt="thumbnail">
				</div>
			`;

		var bodySection = `
					<div class="project-desc-box">
							<h2 class="title-project">${projects[i].title}</h2>
							<div class="desc-project">
								${projects[i].description}
							</div>
					</div>
					<br>
				`;

		var footerNormal = `
				<div class="button-card">
					<a href="${projects[i].liveUrl}" target="_blank"><i class="fas fa-link"></i> VISIT</a>
					<a href="${projects[i].githubLink}" target="_blank"><i class="fab fa-github"></i> SOURCE</a>
				</div>
			</div>
			`;

		var footerBtn1Disabled = `
				<div class="button-card">
					<a href="${projects[i].liveUrl}" style="opacity: 0.5;"><i class="fas fa-link"></i> VISIT</a>
					<a href="${projects[i].githubLink}" target="_blank"><i class="fab fa-github"></i> SOURCE</a>
				</div>
			</div>
			`;

		var footerBtn2Disabled = `
				<div class="button-card">
					<a href="${projects[i].liveUrl}" target="_blank"><i class="fas fa-link"></i> VISIT</a>
					<a href="${projects[i].githubLink}" style="opacity: 0.5;"><i class="fab fa-github"></i> SOURCE</a>
				</div>
			</div>
			`;

		var footerBtnBothDisabled = `
				<div class="button-card">
					<a href="${projects[i].liveUrl}" style="opacity: 0.5;"><i class="fas fa-link"></i> VISIT</a>
					<a href="${projects[i].githubLink}" style="opacity: 0.5;"><i class="fab fa-github"></i> SOURCE</a>
				</div>
			</div>
			`;

		// cek apakah thumbnail video/gambar
		if (projects[i].haveVideoPrev) {
			itemProject += headWithVideo;
		} else {
			itemProject += headWithImg;
		}

		itemProject += bodySection;

		// cek apakah punya live preview & akses source code
		if (!projects[i].haveLivePrev && projects[i].haveSourceCode) {

			itemProject += footerBtn1Disabled;
		} else if (projects[i].haveLivePrev && !projects[i].haveSourceCode) {
			
			itemProject += footerBtn2Disabled;
		} else if (!projects[i].haveLivePrev && !projects[i].haveSourceCode) {
			
			itemProject += footerBtnBothDisabled;
		} else {
			
			itemProject += footerNormal;
		}


		$(".project-items").html(itemProject);
	}
}