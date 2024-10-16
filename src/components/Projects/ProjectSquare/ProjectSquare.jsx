import "./ProjectSquare.css";

function ProjectSquare({ project }) {
  return (
    <div className="pj-square">
      <section className="image-section">
        <img src={project.image} alt={project.imagetitle} />
      </section>
      <section className="information-section">
        <div className="title-section">
          <h2>{project.title}</h2>
        </div>
        <div className="description-section">
          <p>{project.description}</p>
        </div>
        <div className="button-tags">
          <a href={project.link} target="_blank" rel="noreferrer">
            <button>View</button  >
          </a>
          <section className="tags_container">
            {project.tags.map((tag, index) => (
              <p key={index} className="tag">{tag}</p>
            ))}
          </section>
        </div>
      </section>
    </div>
  );
};

export default ProjectSquare;

