'use client';

import HeroSection from './components/HeroSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';

import ReactGA from 'react-ga4';
const TRACKING_ID = "G-21STSKJ9L4"; // OUR_TRACKING_ID

export default function SimplePortfolio() {

	ReactGA.initialize(TRACKING_ID);
	ReactGA.send({ hitType: "pageview", page: "/home", title: "home page viewed" });


	return (
		<main className="min-h-screen bg-gray-900 pt-12">
			<HeroSection />
			<SkillsSection />
			<ProjectsSection />
			<ContactSection />
		</main>
	);
}
