import { styles } from "../styles";

const AboutHero = () => {
  return (
    <section className="relative w-full h-screen mx-auto p-10">
      <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-6 h-[90%] mt-10">
        {/* Education (full left column) */}
        <div className="bg-tertiary p-5 rounded-lg shadow-lg flex items-center justify-center md:row-span-2">
          <h3 className="text-xl font-bold">Education</h3>
          {/* Add content here */}
        </div>

        {/* Additional Info (top-middle column) */}
        <div className="bg-tertiary p-5 rounded-lg shadow-lg flex items-center justify-center">
          <h3 className="text-xl font-bold">Additional Info</h3>
          {/* Add content here */}
        </div>

        {/* Fun Fact (top-right column) */}
        <div className="bg-tertiary p-5 rounded-lg shadow-lg flex items-center justify-center">
          <h3 className="text-xl font-bold">Fun Fact</h3>
          {/* Add content here */}
        </div>

        {/* Technologies (bottom-middle and bottom-right columns) */}
        <div className="bg-tertiary p-5 rounded-lg shadow-lg flex md:col-span-2">
          <h3 className="text-xl font-bold">Technologies</h3>
          {/* Add content here */}
        </div>
      </div>
    </section>
  );
};

export default AboutHero;