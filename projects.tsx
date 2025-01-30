const projects = [
  {
    title: "Fashion Fusion",
    description: "Web application for fashion enthusiasts to share and receive style suggestions.",
    tools: ["TypeScript", "Tailwind CSS", "MongoDB"],
    link: "#",
  },
  {
    title: "Star Nova",
    description: "Web portal for film industry auditions with location-based prioritization.",
    tools: ["HTML", "CSS", "JavaScript"],
    link: "#",
  },
  {
    title: "FPS ZOMBIE Game",
    description: "Basic PC gaming application developed using Unity.",
    tools: ["C#", "Unity Gaming Assets"],
    link: "#",
  },
  {
    title: "SORO",
    description: "Static website to reduce Surface Water Pollution through user incentives.",
    tools: ["React", "Node.js", "Express"],
    link: "#",
  },
]

function ProjectCard({ project }) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{project.title}</Card.Title>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <Badge key={tool} variant="secondary">
                {tool}
              </Badge>
            ))}
          </div>
          <p className="mt-2 text-sm text-muted-foreground">{project.description}</p>
        </CardContent>
        <Card.Footer>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </Card.Footer>
      </Card.Body>
    </Card>
  )
}

function Projects() {
  return (
    <section id="projects">
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

