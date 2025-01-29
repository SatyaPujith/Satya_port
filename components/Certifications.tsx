export default function Certifications() {
  const certifications = [
    "3rd position in Hackathon by Brainovision Pvt. Ltd (5th – 6th December 2024)",
    "Python for Data Science from NPTEL (Jul – Aug 2024)",
    "Oracle Certified Professional in Oracle Cloud Infrastructure Generative AI (August 2024)",
    "Data Analytics and Visualization Job Simulation from Accenture (May 2024)",
    "Google Analytics for Beginners from Google",
    "3rd position in Code-A-Thon by Forge Alumnus Service (March 2024)",
    "Programming in Java from NPTEL (Jan -Apr 2024)",
  ]

  return (
    <section id="certifications" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Certifications & Achievements</h2>
        <ul className="list-disc list-inside space-y-4 max-w-3xl mx-auto">
          {certifications.map((cert, index) => (
            <li key={index} className="text-lg text-gray-700">
              {cert}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

