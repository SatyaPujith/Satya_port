export default function Skills() {
  const skills = [
    "Java",
    "Python",
    "HTML",
    "CSS",
    "React.js",
    "Node.js",
    "Flutter",
    "MySQL",
    "Power BI",
    "Google Analytics",
  ]

  return (
    <section id="skills" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <span key={index} className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

