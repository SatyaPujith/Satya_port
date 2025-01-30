"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

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

export default function ProjectsPage() {
  return (
    <div className="container px-4 py-16 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Projects</h1>
          <p className="text-lg text-muted-foreground">
            Here are some of the projects I've worked on. Each project represents a unique challenge and learning
            experience.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <Badge key={tool} variant="secondary">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

