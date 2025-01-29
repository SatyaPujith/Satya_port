import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Experience() {
  const experiences = [
    {
      title: "Internship in Python Programming",
      company: "Internpe",
      date: "12th Aug 2024 – 8th Sep 2024",
      description:
        "Built various Python projects including a Digital Clock, Tic Tac Toe game, Snake game, and Connect Four game.",
    },
    {
      title: "AI Creators Program Internship",
      company: "Swecha Telangana",
      date: "12th Aug 2024 – 26th Aug 2024",
      description: "Built AI chatbot for preserving culture and Language environment using React.js and Node.js.",
    },
  ]

  return (
    <section id="experience" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{exp.title}</CardTitle>
                <CardDescription>
                  {exp.company} | {exp.date}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>{exp.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

