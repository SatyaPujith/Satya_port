"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  const skills = [
    {
      category: "Programming Languages",
      items: ["JAVA", "PYTHON"],
    },
    {
      category: "Web Technologies",
      items: ["HTML", "CSS", "React.js", "Node.js"],
    },
    {
      category: "Development Tools",
      items: ["Flutter", "Android Studio", "Visual Studio"],
    },
    {
      category: "Data & Analytics",
      items: ["MySQL", "Power BI", "Google Analytics"],
    },
  ]

  return (
    <div className="container px-4 py-16 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">About Me</h1>
          <p className="text-lg text-muted-foreground">
            Motivated and passionate second-year Computer Science student specializing in Data Science, with experience
            in programming languages such as Java, Python, and web technologies including HTML, CSS, and React.js. Eager
            to apply my technical skills and problem-solving abilities to real-world challenges.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">{skillGroup.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-sm font-medium"
                      >
                        {skill}
                      </span>
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

