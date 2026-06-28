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
				role: 'Embedded Software Subteam',
				time: 'August 2025 - Present',
				location: 'Ann Arbor, Michigan',
				logo: 'images/mrover_logo.jpg',
				summary: 'MRover is a university engineering design team that builds a fully autonomous rover for NASA\'s University Rover Challenge. As a member of MRover\'s embedded software subteam, I develop software for the rover\'s CAN-based communication and telemetry systems. My work includes implementing a runtime DBC parsing library, building a low-latency CAN-FD telemetry pipeline on Linux, and programming embedded drivers for sensors and actuators. These projects strengthened my experience with C/C++, embedded systems, multithreading, hardware integration, and defensive software design.',
				skills: ['C++', 'C', 'Concurrency', 'Embedded Systems', 'CAN-FD', 'Linux', 'Hardware Integration'],
				links: [
					{ label: 'View MRover Site', url: 'https://mrover.org/' }
				],
				details: [
					'Implemented a DBC runtime library in C++ that parses CAN protocol definitions at startup into an object graph of messages and signals, including bit offset and endianness, enabling runtime frame decoding via bit manipulation.',
					'Developed a low-latency CAN-FD frame logger on Linux using non-blocking kernel sockets and a producer-consumer pipeline synchronized with std::thread, std::atomic, and std::lock_guard to ingest, decode, and publish telemetry to InfluxDB, significantly reducing debugging time; deployed as a systemd service.',
					'Programmed embedded C drivers using non-blocking I2C to read temperature sensor data and CAN 2.0B to pack and unpack servo commands. Integrated hardware components, including an MCP2551 CAN transceiver and AHT20 sensor, with defensive parsing, retries, UART logs, and LED fault codes to cut debugging time and improve system reliability.'
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
				subtitle: '',
				time: '',
				cover: 'images/AutonomousRobotMovingBallAway.jpg',
				coverAlt: 'Autonomous robot moving a ball away',
				summary: 'A PID path-following autonomous robot with computer vision powered by machine learning.',
				modalSummary: 'For my ENGR 100-400 class project, I managed a small team of 4, where we named ourselves Flo State, in the development of software for an autonomous robot designed to autonomously clear obstacles. Through this role, I developed skills in computer vision, machine learning, PyTorch, C++, and Python. This role taught me the importance of clear communication for expectations from members and offered experience with employing agile methodologies with version control tools like Git and GitHub.',
				skills: ['C++', 'Python', 'OpenCV', 'PyTorch'],
				links: [
					{ label: 'GitHub', url: 'https://github.com/nikhil-talla/Autonomous_Vehicle' }
				],
				images: [
					{ src: 'images/AutonomousRobotMovingBallAway.jpg', alt: 'Autonomous robot moving a ball away' },
					{ src: 'images/AutonomousRobotStoppingForHuman.png', alt: 'Autonomous robot stopping for a person' }
				],
				details: [
					'Led a 4-person team to ship an MVP autonomous robot early by instituting weekly sprints and test-day checklists.',
					'Architected a multi-threaded computer vision stack in Python to enable concurrent capture and control, making network I/O between host and ESP32-CAMs more efficient. Improved obstacle class detection by fine-tuning a YOLO model with PyTorch using CUDA acceleration and distance estimation with ground homography.',
					'Programmed PID line following in C++ by processing ESP32-CAM feeds on host with OpenCV. Designed lightweight protocols over TCP and UART to offload image processing and achieve real-time, low-latency inference.'
				]
			},
			{
				id: 'dill-study',
				type: 'Project',
				title: 'Dill.Study',
				subtitle: '',
				time: '',
				cover: 'images/Dill_Study_PDF_Upload.png',
				coverAlt: 'Dill.Study PDF upload interface',
				summary: 'An AI-powered study tool that guides students toward understanding without simply revealing answers.',
				modalSummaryHtml: 'At MHacks 2025, my teammates <a href="https://www.linkedin.com/in/anshah18/" target="_blank" rel="noopener">Ansh</a>, <a href="https://www.linkedin.com/in/nirav-jaiswal-a35272252/" target="_blank" rel="noopener">Nirav</a>, <a href="https://www.linkedin.com/in/amanthallapally" target="_blank" rel="noopener">Aman</a>, and I built Dill.Study to address a problem we had all seen firsthand: when students get stuck, the easiest option is often asking AI for the answer, while office hours can be inconvenient and tutoring can be expensive. We designed Dill.Study so AI acts as a teacher and guidance tool rather than a task completer, and the project won 1st place in the MLH track at MHacks 2025. The hackathon also gave me valuable experience with version control, rapid collaboration, and learning new technologies under a tight deadline.',
				skills: ['React', 'TypeScript', 'Google Gemini API', 'Firestore'],
				links: [
					{ label: 'View Site', url: 'https://dill-study.vercel.app/' },
					{ label: 'GitHub', url: 'https://github.com/niravjaiswal/dill-study' },
					{ label: 'Devpost', url: 'https://devpost.com/software/dill-study' }
				],
				images: [
					{ src: 'images/Dill_Study_PDF_Upload.png', alt: 'Dill.Study PDF upload interface' },
					{ src: 'images/Dill_Study_AI_View.png', alt: 'Dill.Study AI study assistant interface' }
				],
				details: [
					'Engineered and collaborated on a homework-tutoring web app using React and TypeScript with PDF parsing and LaTeX rendering. Accelerated multi-page parsing by 3 times via an adaptive concurrency pool and local caching.',
					'Integrated the Google Gemini API for real-time AI chatbot tutoring, providing explanations with under 500 ms first-token latency and generating personalized practice problems similar to users\' past homework stored in Firestore.'
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
	const experiencePanelLinks = document.getElementById('experience-panel-links');
	const projectList = document.getElementById('project-list');
	const modal = document.getElementById('detail-modal');
	const modalTitle = document.getElementById('modal-title');
	const modalKicker = document.getElementById('modal-kicker');
	const modalMeta = document.getElementById('modal-meta');
	const modalSummary = document.getElementById('modal-summary');
	const modalLinks = document.getElementById('modal-links');
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

	function createProjectLinks(links) {
		const list = document.createElement('div');
		list.className = 'project-link-list';

		(links || []).forEach(function (linkData) {
			const link = document.createElement('a');
			link.href = linkData.url;
			link.target = '_blank';
			link.rel = 'noopener';
			link.textContent = linkData.label;
			list.appendChild(link);
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

		experiencePanelLinks.innerHTML = '';
		(item.links || []).forEach(function (linkData) {
			const link = document.createElement('a');
			link.href = linkData.url;
			link.target = '_blank';
			link.rel = 'noopener';
			link.textContent = linkData.label;
			experiencePanelLinks.appendChild(link);
		});
		experiencePanelLinks.hidden = !experiencePanelLinks.children.length;
	}

	function renderProjectCards(container, items) {
		container.innerHTML = '';

		items.forEach(function (item) {
			const card = document.createElement('article');
			card.className = 'project-card';
			card.dataset.itemId = item.id;
			card.dataset.itemType = item.type.toLowerCase();
			card.tabIndex = 0;
			card.setAttribute('role', 'button');
			card.setAttribute('aria-label', 'Open details for ' + item.title);

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
			if (meta.textContent) {
				body.appendChild(meta);
			}
			body.appendChild(summary);
			body.appendChild(createSkillList(item.skills));
			if (item.links && item.links.length) {
				body.appendChild(createProjectLinks(item.links));
			}

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
		modalMeta.hidden = !modalMeta.textContent;
		if (item.modalSummaryHtml) {
			modalSummary.innerHTML = item.modalSummaryHtml;
		} else {
			modalSummary.textContent = item.modalSummary || item.summary;
		}

		modalLinks.innerHTML = '';
		(item.links || []).forEach(function (linkData) {
			const link = document.createElement('a');
			link.href = linkData.url;
			link.target = '_blank';
			link.rel = 'noopener';
			link.textContent = linkData.label;
			modalLinks.appendChild(link);
		});
		modalLinks.hidden = !modalLinks.children.length;

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
		if (event.target.closest('a')) {
			return;
		}

		const card = event.target.closest('.project-card');

		if (!card) {
			return;
		}

		const item = findItem(card.dataset.itemType, card.dataset.itemId);

		if (item) {
			openModal(item);
		}
	});

	projectList.addEventListener('keydown', function (event) {
		if (event.key !== 'Enter' && event.key !== ' ') {
			return;
		}

		const card = event.target.closest('.project-card');

		if (!card || event.target.closest('a')) {
			return;
		}

		event.preventDefault();
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
