"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ExperiencePage() {
  const experiences = [
    {
      title: "Internship in Python Programming",
      company: "Internpe",
      date: "12th Aug 2024 – 8th Sep 2024",
      description: [
        "Built a real time Digital Clock using Python and Tkinter",
        "Developed Tic Tac Toe game with dynamic board display and win detection",
        "Created a classic Snake game using pygame library",
        "Implemented a Connect Four game with two-player mode",
      ],
    },
    {
      title: "AI Creators Program Internship",
      company: "Swecha Telangana",
      date: "12th Aug 2024 – 26th Aug 2024",
      description: [
        "Built AI chatbot for preserving culture and Language environment",
        "Utilized React.js and Node.js for development",
        "Implemented natural language processing features",
      ],
    },
  ]

  const certifications = [
    "3rd position in Hackathon by Brainovision Pvt. Ltd",
    "Python for Data Science from NPTEL",
    "Oracle Certified Professional in Oracle Cloud Infrastructure Generative AI",
    "Data Analytics and Visualization Job Simulation from Accenture",
    "Google Analytics for Beginners from Google",
    "3rd position in Code-A-Thon by Forge Alumnus Service",
    "Programming in Java from NPTEL",
  ]

  return (
    <div className="container px-4 py-16 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-12"
      >
        <section className="space-y-8">
          <h1 className="text-4xl font-bold">Experience</h1>
          <div className="grid gap-6 md:grid-cols-2">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>{exp.title}</CardTitle>
                    <CardDescription>
                      {exp.company} | {exp.date}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-4 space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="space-y-8">
          <h2 className="text-3xl font-bold">Certifications</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
              >
                <Card>
                  <CardContent className="p-4">
                    <p>{cert}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>
      </motion.div>
    </div>
  )
}

