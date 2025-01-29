import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Education() {
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
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Education</h2>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{edu.degree}</CardTitle>
                <CardDescription>{edu.institution}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{edu.year}</p>
                <p>{edu.grade}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

