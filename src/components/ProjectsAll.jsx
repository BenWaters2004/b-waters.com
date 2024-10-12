import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { projectsData } from "../constants";
import ProjectAllCard from "./ProjectAllCard";

const ProjectsAll = () => {
  const [activeFilter, setActiveFilter] = useState("All"); // Default to 'All' projects
  const [searchTerm, setSearchTerm] = useState(""); // For search functionality
  const ref = useRef(null); // For animation
  const [showModal, setShowModal] = useState(false); // For modal visibility
  const isInView = useInView(ref, { once: true });

  // Handle GitHub link click
  const handleGitLinkClick = (gitUrl) => {
    if (gitUrl === "#PrivateRepository") {
      setShowModal(true); // Show modal if repository is private
    } else {
      window.open(gitUrl, "_blank"); // Open GitHub link in a new tab
    }
  };

  // Filter projects based on the active filter and search term
  const filteredProjects = projectsData.filter((project) => {
    const searchInLowerCase = searchTerm.toLowerCase();

    return (
      (activeFilter === "All" || project.tag.includes(activeFilter)) &&
      (
        project.title.toLowerCase().includes(searchInLowerCase) ||
        project.description.toLowerCase().includes(searchInLowerCase) ||
        project.tag.some(tag => tag.toLowerCase().includes(searchInLowerCase))
      )
    );
  });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <>
      <motion.div variants={textVariant()} className="mt-20">
        <p className={`${styles.sectionSubText} `}>{"<My work />"}</p>
        <h2 className={`${styles.sectionHeadText}`}>All Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Here you can view all my projects in more detail. Learn how I designed and developed them. You can also experience the project for yourself by clicking the view link or view the code repository by clicking the GitHub icon.
        </motion.p>
      </div>

      {/* Search and Filters */}
      <div className="mt-10 mb-10" id="filters">
        <div className="search">
          <FontAwesomeIcon icon={faMagnifyingGlass} style={{ marginRight: "25px" }} />
          <input
            type="search"
            id="ProjectsSearch"
            placeholder="Search projects"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="filterButtons">
          {/* Apply the 'active' class when the filter is active */}
          <button
            onClick={() => setActiveFilter("All")}
            className={activeFilter === "All" ? "active" : ""}
          >
            All
          </button>
          <button
            onClick={() => setActiveFilter("Web")}
            className={activeFilter === "Web" ? "active" : ""}
          >
            Websites
          </button>
          <button
            onClick={() => setActiveFilter("Mobile")}
            className={activeFilter === "Mobile" ? "active" : ""}
          >
            Mobile
          </button>
        </div>
      </div>

      {/* Displaying Filtered Projects */}
      <div className="projects">
        {filteredProjects.length > 0 ? (
          <ul
            ref={ref}
            className="grid gap-8 md:gap-12"
            key={`${activeFilter}-${searchTerm}`} // Add key to force re-render on filter or search change
          >
            {filteredProjects.map((project, index) => (
              <motion.li
                key={project.id} // Unique key for each project
                variants={cardVariants}
                initial="initial"
                animate={isInView ? "animate" : "initial"}
                transition={{ duration: 0.3, delay: index * 0.4 }}
              >
                <ProjectAllCard
                  title={project.title}
                  descriptionFull={project.descriptionFull}
                  company={project.company}
                  imgUrl={project.image}
                  gitUrl={project.gitUrl}
                  previewUrl={project.previewUrl}
                  technology={project.technology}
                  HelpFrom={project.HelpFrom}
                />
              </motion.li>
            ))}
          </ul>
        ) : (
          <div className="no-projects-message">
            <p className="text-center text-xl mb-5">No projects match your search!</p>
            <p className="text-center text-secondary">Tip: try searching for languages or frameworks</p>
          </div>
        )}

        {/* Modal for Private Repositories */}
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
    </>
  );
};

export default SectionWrapper(ProjectsAll, "");
