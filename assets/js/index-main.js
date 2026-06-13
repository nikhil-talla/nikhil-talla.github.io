(function () {
	'use strict';

	const portfolioData = {
		experience: [
			{
				id: 'ge-aerospace',
				title: 'GE Aerospace',
				role: 'Engineering experience',
				time: 'Most recent',
				location: 'Location coming soon',
				logo: 'images/GE-Aerospace-Emblem-Circular.png',
				summary: 'Aerospace engineering experience with role, date, and impact details coming soon.',
				skills: ['Software Engineering', 'Systems', 'C++', 'Python'],
				details: [
					'Role title, team, and dates can be edited in this data array.',
					'Technical work, tools, and languages can be expanded here.',
					'Measurable outcomes, ownership, and collaboration details can be added here.'
				]
			},
			{
				id: 'michigan-mars-rover',
				title: 'Michigan Mars Rover Team',
				role: 'Robotics team',
				time: 'Earlier',
				location: 'Ann Arbor, MI',
				logo: 'images/mrover_logo.jpg',
				summary: 'Robotics team experience focused on building practical systems with a multidisciplinary engineering group.',
				skills: ['Robotics', 'Autonomy', 'Integration', 'Team Development'],
				details: [
					'Subsystem and team details can be added once finalized.',
					'Software, mechanical, or electrical contributions can be expanded here.',
					'Competition, testing, or field results can be added when available.'
				]
			},
			{
				id: 'otherside-games',
				title: 'Otherside Games',
				role: 'Game development',
				time: 'Earlier',
				location: 'Location coming soon',
				logo: 'images/OthersideGamesLogo.jpeg',
				summary: 'Game development experience combining programming, design iteration, and creative production.',
				skills: ['Unity', 'C#', 'Gameplay Systems', 'Collaboration'],
				details: [
					'Role, dates, and project scope can be added once finalized.',
					'Gameplay systems, tooling, or production responsibilities can be expanded here.',
					'Launch, playtest, or team impact details can be added here.'
				]
			}
		],
		project: [
			{
				id: 'flo-state-autonomous-robot',
				type: 'Project',
				title: 'Flo State Autonomous Robot',
				subtitle: 'Autonomous robotics',
				time: 'Featured project',
				cover: 'images/AutonomousRobotMovingBallAway.jpg',
				coverAlt: 'Autonomous robot moving a ball away',
				summary: 'Autonomous robot project with goals, architecture, sensors, and results coming soon.',
				skills: ['Robotics', 'Autonomy', 'Controls', 'Computer Vision'],
				images: [
					{ src: 'images/AutonomousRobotMovingBallAway.jpg', alt: 'Autonomous robot moving a ball away' },
					{ src: 'images/AutonomousRobotStoppingForHuman.png', alt: 'Autonomous robot stopping for a person' }
				],
				details: [
					'Problem statement and robot behavior details can be added soon.',
					'Hardware, sensors, planning, and control details can be expanded here.',
					'Testing results, demos, and lessons learned can be added when ready.'
				]
			},
			{
				id: 'dill-study',
				type: 'Project',
				title: 'Dill.Study',
				subtitle: 'Study tool',
				time: 'Featured project',
				cover: 'images/WeightedTool_Cover.jpg',
				coverAlt: 'A software tool interface cover image',
				summary: 'Study tool project with feature, stack, and user workflow details coming soon.',
				skills: ['Web Development', 'JavaScript', 'UI Design', 'Study Tools'],
				images: [
					{ src: 'images/WeightedTool_Cover.jpg', alt: 'A software tool interface cover image' },
					{ src: 'images/SearchEngine_Cover.jpg', alt: 'A software search interface cover image' }
				],
				details: [
					'Core studying workflow and intended audience details can be added soon.',
					'Technical stack, architecture, and notable features can be expanded here.',
					'Screenshots, deployment links, or usage metrics can be added when ready.'
				]
			}
		]
	};

	const experienceList = document.getElementById('experience-list');
	const experiencePanel = document.getElementById('experience-panel');
	const experiencePanelLogo = document.getElementById('experience-panel-logo');
	const experiencePanelTitle = document.getElementById('experience-panel-title');
	const experiencePanelRole = document.getElementById('experience-panel-role');
	const experiencePanelMeta = document.getElementById('experience-panel-meta');
	const experiencePanelSummary = document.getElementById('experience-panel-summary');
	const experiencePanelDetails = document.getElementById('experience-panel-details');
	const experiencePanelSkills = document.getElementById('experience-panel-skills');
	const projectList = document.getElementById('project-list');
	const modal = document.getElementById('detail-modal');
	const modalTitle = document.getElementById('modal-title');
	const modalKicker = document.getElementById('modal-kicker');
	const modalMeta = document.getElementById('modal-meta');
	const modalSummary = document.getElementById('modal-summary');
	const modalGallery = document.getElementById('modal-gallery');
	const modalSkills = document.getElementById('modal-skills');
	const modalDetails = document.getElementById('modal-details');
	let lastFocusedElement = null;

	if (!experienceList || !experiencePanel || !projectList || !modal) {
		return;
	}

	function createSkillList(skills) {
		const list = document.createElement('ul');
		list.className = 'skill-list';

		skills.forEach(function (skill) {
			const item = document.createElement('li');
			item.textContent = skill;
			list.appendChild(item);
		});

		return list;
	}

	function findItem(type, id) {
		const collection = portfolioData[type] || [];
		return collection.find(function (item) {
			return item.id === id;
		});
	}

	function renderExperienceTimeline(items) {
		experienceList.innerHTML = '';

		items.forEach(function (item, index) {
			const button = document.createElement('button');
			button.type = 'button';
			button.className = 'experience-timeline-item';
			button.dataset.itemId = item.id;
			button.setAttribute('aria-label', item.title);
			button.setAttribute('aria-pressed', index === 0 ? 'true' : 'false');

			const image = document.createElement('img');
			image.className = 'experience-timeline-logo';
			image.src = item.logo;
			image.alt = '';

			button.appendChild(image);
			experienceList.appendChild(button);
		});
	}

	function setActiveExperience(itemId) {
		const item = findItem('experience', itemId);

		if (!item) {
			return;
		}

		experienceList.querySelectorAll('.experience-timeline-item').forEach(function (button) {
			const isActive = button.dataset.itemId === itemId;
			button.classList.toggle('is-active', isActive);
			button.setAttribute('aria-pressed', isActive ? 'true' : 'false');
		});

		experiencePanelLogo.src = item.logo;
		experiencePanelLogo.alt = item.title + ' logo';
		experiencePanelTitle.textContent = item.title;
		experiencePanelRole.textContent = item.role || '';
		experiencePanelMeta.textContent = [item.time, item.location].filter(Boolean).join(' | ');
		experiencePanelSummary.textContent = item.summary;

		experiencePanelDetails.innerHTML = '';
		item.details.forEach(function (detail) {
			const detailItem = document.createElement('li');
			detailItem.textContent = detail;
			experiencePanelDetails.appendChild(detailItem);
		});

		experiencePanelSkills.innerHTML = '';
		item.skills.forEach(function (skill) {
			const skillItem = document.createElement('li');
			skillItem.textContent = skill;
			experiencePanelSkills.appendChild(skillItem);
		});
	}

	function renderProjectCards(container, items) {
		container.innerHTML = '';

		items.forEach(function (item) {
			const card = document.createElement('button');
			card.type = 'button';
			card.className = 'project-card';
			card.dataset.itemId = item.id;
			card.dataset.itemType = item.type.toLowerCase();

			const media = document.createElement('div');
			media.className = 'project-card-media';

			const image = document.createElement('img');
			image.src = item.cover;
			image.alt = item.coverAlt || '';
			media.appendChild(image);

			const body = document.createElement('div');
			body.className = 'project-card-body';

			const title = document.createElement('h3');
			title.textContent = item.title;

			const meta = document.createElement('p');
			meta.className = 'project-card-meta';
			meta.textContent = [item.subtitle, item.time].filter(Boolean).join(' | ');

			const summary = document.createElement('p');
			summary.className = 'project-card-summary';
			summary.textContent = item.summary;

			body.appendChild(title);
			body.appendChild(meta);
			body.appendChild(summary);
			body.appendChild(createSkillList(item.skills));

			card.appendChild(media);
			card.appendChild(body);
			container.appendChild(card);
		});
	}

	function openModal(item) {
		lastFocusedElement = document.activeElement;
		modalKicker.textContent = item.type;
		modalTitle.textContent = item.title;
		modalMeta.textContent = [item.subtitle, item.time].filter(Boolean).join(' | ');
		modalSummary.textContent = item.summary;

		modalGallery.innerHTML = '';
		(item.images || []).forEach(function (imageData) {
			const figure = document.createElement('figure');
			const image = document.createElement('img');
			image.src = imageData.src;
			image.alt = imageData.alt || '';
			figure.appendChild(image);
			modalGallery.appendChild(figure);
		});

		modalSkills.innerHTML = '';
		item.skills.forEach(function (skill) {
			const skillItem = document.createElement('li');
			skillItem.textContent = skill;
			modalSkills.appendChild(skillItem);
		});

		modalDetails.innerHTML = '';
		item.details.forEach(function (detail) {
			const detailItem = document.createElement('li');
			detailItem.textContent = detail;
			modalDetails.appendChild(detailItem);
		});

		modal.hidden = false;
		document.body.classList.add('is-modal-visible');
		modal.querySelector('.modal-close').focus();
	}

	function closeModal() {
		modal.hidden = true;
		document.body.classList.remove('is-modal-visible');

		if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
			lastFocusedElement.focus();
		}
	}

	function smoothScrollTo(hash) {
		if (!hash || hash === '#menu') {
			return;
		}

		const target = document.getElementById(hash.slice(1));

		if (!target) {
			return;
		}

		const header = document.getElementById('header');
		const offset = header ? header.offsetHeight - 2 : 0;
		const top = target.getBoundingClientRect().top + window.pageYOffset - offset;

		window.scrollTo({
			top: top,
			behavior: 'smooth'
		});
	}

	renderExperienceTimeline(portfolioData.experience);
	setActiveExperience(portfolioData.experience[0].id);
	renderProjectCards(projectList, portfolioData.project);

	experienceList.addEventListener('click', function (event) {
		const button = event.target.closest('.experience-timeline-item');

		if (button) {
			setActiveExperience(button.dataset.itemId);
		}
	});

	projectList.addEventListener('click', function (event) {
		const card = event.target.closest('.project-card');

		if (!card) {
			return;
		}

		const item = findItem(card.dataset.itemType, card.dataset.itemId);

		if (item) {
			openModal(item);
		}
	});

	modal.addEventListener('click', function (event) {
		if (event.target.closest('[data-close-modal]')) {
			closeModal();
		}
	});

	document.addEventListener('keydown', function (event) {
		if (event.key === 'Escape' && !modal.hidden) {
			closeModal();
		}
	});

	document.querySelectorAll('#menu a[href^="#"]').forEach(function (link) {
		link.addEventListener('click', function (event) {
			const hash = link.getAttribute('href');

			event.preventDefault();
			event.stopPropagation();
			document.body.classList.remove('is-menu-visible');

			window.setTimeout(function () {
				smoothScrollTo(hash);
			}, 120);
		}, true);
	});
})();
