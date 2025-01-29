import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Projects() {
  const projects = [
    {
      title: "Fashion Fusion",
      description: "Web application for fashion enthusiasts to share and receive style suggestions.",
      tools: "TypeScript, Tailwind CSS, MongoDB",
    },
    {
      title: "Star Nova",
      description: "Web portal for film industry auditions with location-based prioritization.",
      tools: "HTML, CSS, JavaScript",
    },
    {
      title: "FPS ZOMBIE Game",
      description: "Basic PC gaming application developed using Unity.",
      tools: "C#, Unity Gaming Assets",
    },
    {
      title: "SORO",
      description: "Static website to reduce Surface Water Pollution through user incentives.",
      tools: "Web Technologies",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.tools}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

