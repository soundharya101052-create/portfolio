import profile from "../assets/profile.jpg";

function Hero() {
    return (
        <section id="home" className="hero-section">
            <img
                src={profile}
                alt="Soundharya"
                className="profile-image"
            />

            <h1>Soundharya K</h1>

            <h3>
                React Developer | Web Development Intern |
                AI Enthusiast
            </h3>

            <p>
                B.Sc Physics with Computer Applications Student.
                Passionate about building modern web applications
                and exploring Artificial Intelligence.
            </p>

            <div className="hero-buttons">
                <button className="resume-btn">
                    Download Resume
                </button>

                <button className="project-btn">
                    View Projects
                </button>
            </div>
        </section>
    );
}

export default Hero;