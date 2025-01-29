"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, Phone } from "lucide-react"

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "satyapoojith2@gmail.com",
      link: "mailto:satyapoojith2@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 9391994524",
      link: "tel:+919391994524",
    },
    {
      icon: Github,
      title: "GitHub",
      value: "github.com/SatyaPujith",
      link: "https://github.com/SatyaPujith",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "linkedin.com/in/botukusatyapujith",
      link: "https://linkedin.com/in/botukusatyapujith",
    },
  ]

  return (
    <div className="container px-4 py-16 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid gap-8 md:grid-cols-2"
      >
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold">Get in Touch</h1>
            <p className="text-lg text-muted-foreground">
              Feel free to reach out for collaborations or just a friendly hello
            </p>
          </div>
          <div className="grid gap-4">
            {contactInfo.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <Card className="group transition-colors hover:bg-accent">
                      <CardContent className="flex items-center gap-4 p-4">
                        <Icon className="h-5 w-5" />
                        <div>
                          <p className="font-medium">{item.title}</p>
                          <p className="text-sm text-muted-foreground">{item.value}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </a>
                </motion.div>
              )
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Send me a message</CardTitle>
              <CardDescription>I'll try to get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="space-y-2">
                  <Input placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <Input type="email" placeholder="Your email" />
                </div>
                <div className="space-y-2">
                  <Textarea placeholder="Your message" className="min-h-[150px]" />
                </div>
                <Button className="w-full">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  )
}

