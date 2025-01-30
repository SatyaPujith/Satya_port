"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, FileText } from "lucide-react"
import dynamic from "next/dynamic"

const DynamicPDFViewer = dynamic(() => import("@/components/PDFViewer"), {
  ssr: false,
  loading: () => <p>Loading PDF viewer...</p>,
})

const PDF_URL = "/Botuku_Satya_Pujith_Resume.pdf"

export default function ResumePage() {
  const [pdfError, setPdfError] = useState<string | null>(null)

  useEffect(() => {
    // Check if the PDF file exists
    fetch(PDF_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error("PDF file not found")
        }
      })
      .catch((error) => {
        console.error("Error checking PDF:", error)
        setPdfError("Unable to load PDF. Please use the download link.")
      })
  }, [])

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
          <h1 className="text-4xl font-bold">Resume</h1>
          <p className="text-lg text-muted-foreground">View my full resume and download it for your records.</p>
          <Button asChild>
            <a href={PDF_URL} download>
              <Download className="mr-2 h-4 w-4" /> Download Full Resume
            </a>
          </Button>
        </div>
        <Card>
          <CardContent className="p-6">
            {pdfError ? (
              <div className="text-center text-red-500">
                <FileText className="h-16 w-16 mx-auto mb-4" />
                <p>{pdfError}</p>
              </div>
            ) : (
              <DynamicPDFViewer pdfUrl={PDF_URL} />
            )}
          </CardContent>
        </Card>
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

