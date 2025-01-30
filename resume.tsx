import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Download } from "lucide-react"

export default function Resume() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Resume</h2>
        <Card>
          <CardHeader>
            <CardTitle>Botuku Satya Pujith</CardTitle>
            <CardDescription>Computer Science Student specializing in Data Science</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">Contact Information</h3>
                <p>Darsi, Prakasam District, Andhra Pradesh</p>
                <p>Phone: +(91)-9391994524</p>
                <p>Email: satyapoojith2@gmail.com</p>
                <p>
                  GitHub:{" "}
                  <a href="https://github.com/SatyaPujith" className="text-blue-600 hover:underline">
                    github.com/SatyaPujith
                  </a>
                </p>
                <p>
                  LinkedIn:{" "}
                  <a href="https://linkedin.com/in/botukusatyapujith" className="text-blue-600 hover:underline">
                    linkedin.com/in/botukusatyapujith
                  </a>
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Education</h3>
                <p>Bachelor of Technology - Computer Science Engineering in Data Science</p>
                <p>Institute of Aeronautical Engineering, Dundigal (CGPA - 8.15)</p>
                <p>2023-Present</p>
              </div>
              <div>
                <h3 className="font-semibold">Skills</h3>
                <ul className="list-disc list-inside">
                  <li>Programming Languages: JAVA, PYTHON</li>
                  <li>Web Technologies: HTML, CSS, React.js, Node.js</li>
                  <li>Software Development Kit: Flutter (Both Android and Visual Studio)</li>
                  <li>Database: MySQL</li>
                  <li>Data Analytics and Visualization: Power BI, Google Analytics, Google Spreadsheets</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold">Projects</h3>
                <ul className="list-disc list-inside">
                  <li>Fashion Fusion Web-based Project</li>
                  <li>Star Nova Web-based Project</li>
                  <li>FPS ZOMBIE Game Project</li>
                  <li>SORO Web-based Project</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold">Certifications</h3>
                <ul className="list-disc list-inside">
                  <li>3rd position in Hackathon by Brainovision Pvt. Ltd</li>
                  <li>Python for Data Science from NPTEL</li>
                  <li>Oracle Certified Professional in Oracle Cloud Infrastructure Generative AI</li>
                  <li>Data Analytics and Visualization Job Simulation from Accenture</li>
                  <li>Google Analytics for Beginners from Google</li>
                </ul>
              </div>
            </div>
            <div className="mt-6">
              <Button asChild>
                <a href="/Botuku_Satya_Pujith_Resume.pdf" download>
                  <Download className="mr-2 h-4 w-4" /> Download Full Resume
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

