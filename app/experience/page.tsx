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
    "TCS Codevita Season 12 Round 1 Global Rank 125",
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
        className="space-y-8"
      >
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Experience & Certifications</h1>
          <p className="text-lg text-muted-foreground">
            My professional experiences and certifications that have shaped my skills and knowledge.
          </p>
        </div>
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Work Experience</h2>
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>{exp.title}</CardTitle>
                  <CardDescription>
                    {exp.company} | {exp.date}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-1">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Certifications & Achievements</h2>
          <Card>
            <CardContent className="pt-6">
              <ul className="list-disc pl-5 space-y-2">
                {certifications.map((cert, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {cert}
                  </motion.li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </div>
  )
}

