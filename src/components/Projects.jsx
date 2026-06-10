function Projects() {
    const projects = [
        {
            title: "E-Commerce Website",
            description:
                "Responsive e-commerce platform with product listing and shopping cart."
        },
        {
            title: "Hotel Booking System",
            description:
                "Hotel booking application with room listing and booking features."
        },
        {
            title: "Student Management System",
            description:
                "Manage student records, attendance and academic details."
        },
        {
            title: "Portfolio Website",
            description:
                "Personal portfolio showcasing skills, projects and experience."
        },
        {
            title: "AI Project",
            description:
                "AI-powered application with intelligent recommendations."
        }
    ];

    return (
        <section id="projects">
            <h2>Projects</h2>

            <div className="projects-container">
                {projects.map((project, index) => (
                    <div className="project-card" key={index}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;