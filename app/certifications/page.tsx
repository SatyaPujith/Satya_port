"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function CertificationsPage() {
  const certifications = [
    {
      title: "Python for Data Science",
      issuer: "NPTEL",
      date: "Jul – Aug 2024",
      details: "Completed the course with 68% consolidated score",
    },
    {
      title: "Oracle Certified Professional",
      issuer: "Oracle",
      date: "August 2024",
      details: "Oracle Cloud Infrastructure Generative AI",
    },
    {
      title: "Data Analytics and Visualization Job Simulation",
      issuer: "Accenture",
      date: "May 2024",
      details: "Completed practical simulation of real-world data analytics tasks",
    },
    {
      title: "Google Analytics for Beginners",
      issuer: "Google",
      date: "2024",
      details: "Mastered fundamentals of digital analytics",
    },
    {
      title: "Programming in Java",
      issuer: "NPTEL",
      date: "Jan -Apr 2024",
      details: "Completed the course with 58% consolidated score",
    },
  ]

  const achievements = [
    {
      title: "3rd Position in Hackathon",
      organization: "Brainovision Pvt. Ltd",
      date: "5th – 6th December 2024",
      location: "MLRIT College Hyderabad",
    },
    {
      title: "3rd Position in Code-A-Thon",
      organization: "Forge Alumnus Service",
      date: "March 2024",
      location: "IIT Hyderabad",
    },
    {
      title: "TCS CodeVita Season 10",
      organization: "Tata Consultancy Services",
      date: "2024",
      details: "Participated in global coding competition",
    },
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
          <h1 className="text-4xl font-bold">Certifications</h1>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>{cert.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm font-medium">{cert.issuer}</p>
                    <p className="text-sm text-muted-foreground">{cert.date}</p>
                    <p className="mt-2 text-sm">{cert.details}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="space-y-8">
          <h2 className="text-3xl font-bold">Achievements</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>{achievement.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm font-medium">{achievement.organization}</p>
                    <p className="text-sm text-muted-foreground">{achievement.date}</p>
                    {achievement.location && <p className="mt-2 text-sm">{achievement.location}</p>}
                    {achievement.details && <p className="mt-2 text-sm">{achievement.details}</p>}
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

