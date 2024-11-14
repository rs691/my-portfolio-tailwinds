import PropTypes from 'prop-types';

function HeroSection({ title, description, buttonText, bgColor }) {
  return (
    <div className={`hero min-h-screen ${bgColor} text-center`}>
      <div className="hero-content">
        <div className="max-w-lg">
          <h1 className="text-5xl font-bold">{title}</h1>
          <p className="py-6">{description}</p>
          <button className="btn btn-primary">{buttonText}</button>
        </div>
      </div>
    </div>
  );
}

HeroSection.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
};

export default HeroSection;
