document.addEventListener('DOMContentLoaded', function () {
	const projects = [
		{
			id: 'project1',
			status: 'in-progress', // options: 'completed', 'in-progress', 'not-started'
			release: '',
			version: '',
		},
		{
			id: 'project2',
			status: 'completed', // options: 'completed', 'in-progress', 'not-started'
			release:
				'https://github.com/miracletimothy/project-setup-tool/releases/download/v0.1.0-beta/create_project',
			version: 'v0.1.0-beta',
		},
	];

	projects.forEach(project => {
		const projectElement = document.getElementById(project.id);
		if (projectElement) {
			const statusElement = projectElement.querySelector('.status');
			if (statusElement) {
				statusElement.classList.add(project.status);
			}
			if (project.release) {
				const releaseButtonElement =
					projectElement.querySelector('.release-button');
				if (releaseButtonElement) {
					releaseButtonElement.innerHTML = `<a href="${project.release}" class="btn-download" download>Download Release ${project.version}</a>`;
				}
			}
		}
	});
});
