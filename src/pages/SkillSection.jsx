

function SkillsSection() {
  const skills = ['JavaScript', 'React', 'Node.js', 'HTML', 'CSS', 'Tailwind CSS', 'DaisyUI'];

  return (
    <div className="p-10 bg-base-200">
      <h2 className="text-6xl font-bold mb-5">My Skills</h2>
      <div className="flex flex-wrap gap-2 text-3xl">
        {skills.map((skill) => (
          <span key={skill} className="badge badge-outline">{skill}</span>
        ))}
      </div>
    </div>
  );
}

export default SkillsSection;
