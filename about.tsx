const About = () => {
  return (
    <div className="space-y-4">
      <h1 className="text-4xl font-bold">About Me</h1>
      <p className="text-lg text-muted-foreground">
        Motivated and passionate second-year Computer Science student specializing in Data Science, with experience in
        programming languages such as Java, Python, and web technologies including HTML, CSS, and React.js. Eager to
        apply my technical skills and problem-solving abilities to real-world challenges.
      </p>
      <div>
        <h2 className="text-2xl font-semibold mt-4">Skills</h2>
        <ul className="list-disc list-inside mt-2">
          <li>Programming Languages: Java, Python</li>
          <li>Web Technologies: HTML, CSS, React.js, Node.js</li>
          <li>Software Development: Flutter (Android and Visual Studio)</li>
          <li>Database: MySQL</li>
          <li>Data Analytics: Power BI, Google Analytics, Google Spreadsheets</li>
        </ul>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mt-4">Interests</h2>
        <p>Story Writing, Volleyball, Online Games, Chess</p>
      </div>
    </div>
  )
}

export default About

