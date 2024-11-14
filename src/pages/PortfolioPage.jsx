
import HeroSection from './HeroSection';

function PortfolioPage() {
  return (
    <div>
      <HeroSection
        title="Welcome to My Portfolio"
        description="I'm a web developer passionate about creating digital experiences."
        buttonText="Discover More"
        bgColor="bg-base-200"
      />
      <HeroSection
        title="About Me"
        description="Experienced in React, Node.js, and creating user-focused web applications."
        buttonText="Read More"
        bgColor="bg-accent"
      />
      <HeroSection
        title="My Projects"
        description="Check out my recent projects, from e-commerce sites to custom web applications."
        buttonText="View Projects"
        bgColor="bg-primary text-primary-content"
      />
      <HeroSection
        title="Contact Me"
        description="Interested in collaborating? Let's get in touch!"
        buttonText="Get in Touch"
        bgColor="bg-secondary text-secondary-content"
      />
    </div>
  );
}

export default PortfolioPage;
