import Image from 'next/image';
import { IProject } from './ProjectsSection'

export default function Project({ project, selected }: { project: IProject, selected: () => void }) {

   
    return (
   
        <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-video bg-gray-700 relative">
                <Image src={project.imageUrl} alt={`Project ${project.title}`} fill className="object-cover" />
            </div>
            <div className="p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-sm sm:text-base text-gray-300 mb-4">{project.description}</p>
                <div className="grid grid-cols-2 place-content-between gap-4">
                    <p onClick={selected} className="cursor-pointer text-blue-400 hover:text-blue-300 font-medium text-sm sm:text-base">
                        More info →
                    </p>
                    <a href={project.projectUrl} target="_blank" className="text-blue-400 hover:text-blue-300 font-medium text-sm sm:text-base">
                        View Project →
                    </a>
                </div>						
            </div>
        </div>
                
    );
}
