import Image from 'next/image';

export default function ProjectsSection() {

	interface IProject { key: number, title: string; description: string; imageUrl: string; projectUrl: string; }

	const projects: IProject[] = [ 
		{
			key: 1,
			title: '3D Stereonet',
			description: 'An interactive 2D and 3D stereonet built using the THREE.js library.',
			imageUrl: '/stereonet.jpg',
			projectUrl: 'https://michael-hello.github.io/stereonet/',
		},
		{
			key: 2,
			title: 'Python image analysis',
			description: 'Using python and openCV to perform image analysis of an analog screen.',
			imageUrl: '/analog2.png',
			projectUrl: '#',
		},
		{
			key: 3,
			title: 'Android location logging app',
			description: 'An android location logging app and web visualiser.',
			imageUrl: '/map.jpg',
			projectUrl: 'https://michael-hello.github.io/react-app/',
		},
		{
			key: 4,
			title: '2D survival game',
			description: 'A 2D survival game built with VueJS, SVG and TypeScript.',
			imageUrl: '/blaster.jpg',
			projectUrl: 'https://michael-hello.github.io/blaster/'
		}
	]; 

	return (
		<section className="py-12 sm:py-20">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 text-center">Featured Projects</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
					{projects.map((project) => (
						<div key={project.key} className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
							<div className="aspect-video bg-gray-700 relative">
								<Image src={project.imageUrl} alt={`Project ${project.title}`} fill className="object-cover" />
							</div>
							<div className="p-4 sm:p-6">
								<h3 className="text-base sm:text-lg font-semibold text-white mb-2">{project.title}</h3>
								<p className="text-sm sm:text-base text-gray-300 mb-4">{project.description}</p>
								<div className="grid h-12 grid-cols-2 place-content-between gap-4">
									<p className="cursor-pointer text-blue-400 hover:text-blue-300 font-medium text-sm sm:text-base">
										More info →
									</p>
									<a href={project.projectUrl} target="_blank" className="text-blue-400 hover:text-blue-300 font-medium text-sm sm:text-base">
										View Project →
									</a>
								</div>						
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
