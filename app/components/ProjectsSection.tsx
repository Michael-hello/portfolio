import Project from './Project';
import { useState } from 'react';
import { StaticImageData } from 'next/image';

import stereonet from "../../public/stereonet_mini.jpg";
import analog from "../../public/analog.png";
import map from "../../public/map.jpg";
import blaster from "../../public/blaster.jpg";


export interface IProject { 
	//unique key
	key: number, 
	title: string; 
	//short description, always visible
	description: string; 
	//longer description of the project, only visible when the user clicks 'more info'
	info: string; 
	image: StaticImageData; 
	projectUrl: string;
	selected: boolean;
};


export default function ProjectsSection() {	

	const [projects, setProjects] = useState<IProject[]>(
		[
			{
				key: 1,
				title: '3D Stereonet',
				description: 'An interactive 2D and 3D stereonet built using the THREE.js library.',
				info: `This project involved experimenting with the THREE.js library to create an interactive stereonet in both 2D and 3D.
					The stereonet can display planes or poles based on user inputted dip and strike (RH rule) values. I also used this project 
					as a chance to experiment with building a UI using raw HTML rather than a frontend framework.`,
				image: stereonet,
				projectUrl: 'https://michael-hello.github.io/stereonet/',
				selected: false
			},
			{
				key: 2,
				title: 'Python image analysis',
				description: 'Using python and openCV to perform image analysis of an analog screen.',
				info: `The aim of this project was to take a video of an analog screen from a digital set of scales and digitise the 
					numerical values. To do this I used the openCV library to perform image analysis on the individual video frames. Firstly
					I isolated the position of the rectangular screen and then isolated the dynamic numerical values from the static values 
					inside the screen area. Once this was achieved I had a number of options to translate these isolated shapes into numerical 
					values. One option was to train a machine learning model, however, due to time constraints I opted for a logic based approach.
					This approach involved identifying each character based on the number and location of segments, which is unique to each character. To test 
					my results I manually identified the numerical values in each frame for a short section of video and comapred with the digital outputs,
					showing that my approach had a 100% accuracy where all segments could be correctly identified. The link is a youtube clip created using OpenCV
					showing the original video and the processed results.`,
				image: analog,
				projectUrl: 'https://youtu.be/wKVvwEeg1m8',
				selected: false
			},
			{
				key: 3,
				title: 'Android location logging app',
				description: 'An android location logging app and web visualiser.',
				info: `This project aimed to fulfill a personal requirement of mine while travelling. I required an app that would record my current location
					at a specficied time interval and then allow others to view this data. An added challenge was to create a solution that would not cost a penny to run.
					The solution involved creating an android application that logs my location and then updates a single JSON file stored using JSON.bin, a free Restful 
					JSON data store. The second part of the solution was to create a web visualiser that reads the JSON file and display the data on a map which can be seen by clicking the
					"View Project" button.`,
				image: map,
				projectUrl: 'https://michael-hello.github.io/react-app/',
				selected: false
			},
			{
				key: 4,
				title: '2D survival game',
				description: 'A 2D survival game built with VueJS, SVG and TypeScript. WIP.',
				info: `This project was a personal attempt to re-build a 2D survival game that was a favourite of mine as a child. The tech stack includes
					VueJS, SVG and TypeScript. This project is still a work in progress but the core mechanics of the game are in place.`,
				image: blaster,
				projectUrl: 'https://michael-hello.github.io/blaster/',
				selected: false
			}
		]
	);

	const showClicked = (key: number) => {
		setProjects(prevProjects => 
			prevProjects.map(project => 
				project.key === key ? { ...project, selected: !project.selected } : project
			)
		);
	};

	return (
		<section className="py-12 sm:py-20">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 text-center">Personal Projects</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
					{projects.map((project) => (
						<div key={project.key}>
							<Project project={project} selected={() => showClicked(project.key)} />
							{
								project.selected ? 
								<div className="p-4 sm:p-4 pt-2 bg-gray-300 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
									<p className="text-sm sm:text-base text-gray-900 mb-4">{project.info}</p>
								</div>
								: null
							}
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
