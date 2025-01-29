"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  const education = [
    {
      degree: "Bachelor of Technology - Computer Science Engineering in Data Science",
      institution: "Institute of Aeronautical Engineering, Dundigal",
      year: "2023-Present",
      grade: "CGPA - 8.15",
    },
    {
      degree: "Intermediate - Maths, Physics, Chemistry",
      institution: "Narayana Junior College, Vijayawada",
      year: "2021-2023",
      grade: "92.7%",
    },
    {
      degree: "SSC",
      institution: "Narayana High School",
      year: "2020-2021",
      grade: "CGPA – 10.0",
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

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="space-y-4"
        >
          <h2 className="text-2xl font-bold">Education</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">{edu.degree}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{edu.institution}</p>
                    <p className="text-sm">{edu.year}</p>
                    <p className="font-medium">{edu.grade}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

