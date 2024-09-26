import React, { useState } from "react";
import { EyeIcon } from "@heroicons/react/24/outline";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const ProjectCard = ({ imgUrl, title, descriptionFull, company, technology, gitUrl, previewUrl, HelpFrom }) => {
  const [showModal, setShowModal] = useState(false);

  const handleGitLinkClick = (gitUrl) => {
    if (gitUrl === "#PrivateRepository") {
      setShowModal(true);
    } else {
      window.open(gitUrl, "_blank");
    }
  };

  return (
    <div>
      <div className="bg-tertiary w-full p-7 rounded-[20px] flex flex-col md:flex-row">
        {/* Image on the left */}
        <img 
          src={imgUrl} 
          alt={"Project image of " + title} 
          className="w-full md:w-2/5 rounded-lg object-cover mb-4 md:mb-0 md:mr-4"
        />
        {/* Text content on the right */}
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold mb-5">{title}</h3>
            <p className="text-m text-secondary">For company: {company}</p>
            <p className="text-m text-secondary">Technology used: {technology}</p>
            {HelpFrom && (
              <p className="text-m text-secondary">
                Built with: {HelpFrom}
              </p>
            )}
            <p className="text-base mt-5">
              {descriptionFull.split('\n').map((line, index) => (
                <span key={index}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
          </div>
          <div className="flex mt-4">
          <button 
            onClick={() => handleGitLinkClick(gitUrl)} 
            className="flex items-center h-10 mr-5 px-4 border-2 rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <FontAwesomeIcon 
              icon={faGithub} 
              className="h-6 w-6 text-[#ADB7BE] mr-2 group-hover/link:text-white" 
            />
            <span className="text-[#ADB7BE] group-hover/link:text-white">
              GitHub
            </span>
          </button>
          <a 
            href={previewUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center h-10 px-4 border-2 rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <EyeIcon 
              className="h-6 w-6 text-[#ADB7BE] mr-2 group-hover/link:text-white" 
            />
            <span className="text-[#ADB7BE] group-hover/link:text-white">
              View
            </span>
          </a>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg">
            <h3 className="text-xl font-bold text-black">Private Repository</h3>
            <p className="text-black my-5">
              Sorry, this repository is private by request of the client.<br />
              You can still view the project using the view button.
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 bg-tertiary text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
