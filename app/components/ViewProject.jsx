import React from 'react';
import Image from 'next/image';

const ViewProject = ({ project, onClose }) => {
  const images = project.images || []; // Default to an empty array if images is undefined
  const backendImages = project.backendImages || []; // Default to an empty array if backendImages is undefined
  const frontendImages = project.frontendImages || []; // Default to an empty array if frontendImages is undefined

  return (
    <div className="fixed inset-0 bg-pink-50 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg max-w-4xl w-full relative shadow-xl overflow-y-auto max-h-[90vh]">
        <button onClick={onClose} className="absolute top-4 right-4 text-xl text-gray-500 hover:text-gray-700 focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h2 className="text-3xl font-semibold text-gray-800 mb-4">{project.title}</h2>
        <p className="text-lg text-gray-700 mb-6">{project.description}</p>

        {/* Display functionalities */}
        {project.functionalities && project.functionalities.length > 0 && (
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800">Key Functionalities:</h3>
            <ul className="list-disc pl-6 text-lg text-gray-600">
              {project.functionalities.map((func, index) => (
                <li key={index}>{func}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Display tools */}
        {project.tools && project.tools.length > 0 && (
          <div className="mb-6 text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Tools Used:</h3>
            <div className="flex flex-wrap justify-center gap-6">
              {project.tools.map((tool, index) => (
                <div key={index} className="flex flex-col items-center">
                  <Image src={tool.icon} alt={`${tool.name} icon`} width={48} height={48} />
                  <span className="text-sm mt-2 text-gray-600">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Display backend images
        {backendImages.length > 0 && (
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800">Backend Images:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {backendImages.map((image, index) => (
                <div key={index} className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                  <Image 
                    src={image} 
                    alt={`${project.title} backend image ${index + 1}`} 
                    layout="responsive" 
                    width={500} 
                    height={300} 
                    className="transition-transform duration-300 ease-in-out transform hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        )} */}

        {/* Display frontend images
        {frontendImages.length > 0 && (
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800">Frontend Images:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {frontendImages.map((image, index) => (
                <div key={index} className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                  <Image 
                    src={image} 
                    alt={`${project.title} frontend image ${index + 1}`} 
                    layout="responsive" 
                    width={500} 
                    height={300} 
                    className="transition-transform duration-300 ease-in-out transform hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        )} */}

        {/* Display other project images */}
        {/* {images.length > 0 && (
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800">Other Images:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {images.map((image, index) => (
                <div key={index} className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                  <Image 
                    src={image} 
                    alt={`${project.title} image ${index + 1}`} 
                    layout="responsive" 
                    width={500} 
                    height={300} 
                    className="transition-transform duration-300 ease-in-out transform hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default ViewProject;
