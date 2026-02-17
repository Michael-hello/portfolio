'use client';

import Image from 'next/image';
import myImageLoader from '../image-loader';

export default function HeroSection() {
	
	return (
		<section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
			<div className="text-center">
				<div className="mb-6 sm:mb-8">
					<Image src={myImageLoader("/portrait.jpg")} alt="Profile Picture" width={260} height={260} className="rounded-full mx-auto border-4 border-gray-700 shadow-lg" />
				</div>
				<h1 className="text-3xl sm:text-4xl font-bold text-white mb-3 sm:mb-4">Michael Jones</h1>
				<p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8">Software Developer</p>
				<p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base px-4">
					With 7+ years of professional experience as a Software Developer and 3+ years experience in a variety of technical and geo related fields I bring a unique perspective 
					to the table. I am passionate about creating robust and effective solutions to complex problems. 
				</p>
			</div>
		</section>
	);
}
