function Skills() {
    const skills = [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Java",
        "C",
        "C++",
        "GitHub",
    ];

    return (
        <section id="skills">
            <h2>Skills</h2>

            <div className="skills-container">
                {skills.map((skill, index) => (
                    <div className="skill-card" key={index}>
                        {skill}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skills;