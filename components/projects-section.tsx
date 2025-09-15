"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import { useState } from "react"

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("All")

  const projects = [
    {
      title: "Namaste Kutumbh",
      description:
        "Namaste Kutumbh is a travel web application that provides users with information about the Indian Culture, including event details, schedules, and accommodations. It also offers features like trip planning, booking options, and user reviews to enhance the travel experience.",
      technologies: ["React", "Next.js", "Tailwind CSS", "JavaScript"],
      category: "Travel",
      demoLink: "#",
      codeLink: "https://github.com/tiwarivivek22",
    },
    {
      title: "Sports Sync",
      description:
        "Sports Sync is a sports event management web application that allows users to create, manage, and participate in various sports events. It provides features such as event scheduling, team management, score tracking, and real-time updates to enhance the overall sports experience.",
      technologies: ["React", "Next.js", "Tailwind CSS", "JavaScript"],
      category: "Sports",
      demoLink: "#",
      codeLink: "https://github.com/tiwarivivek22",
    },
{
      title: "CareSync AI",
      description:
        "CareSync AI is a healthcare web application that leverages artificial intelligence to provide personalized health recommendations and insights. Users can track their health metrics, receive tailored advice, and connect with healthcare professionals for virtual consultations.",
      technologies: ["React", "Next.js", "Tailwind CSS", "JavaScript"],
      category: "Healthcare",
      demoLink: "#",
      codeLink: "https://github.com/tiwarivivek22",
    },

    {
      title: "Gym Website",
      description:
        "This is a responsive Gym Website built using HTML, CSS, and JavaScript. It features a modern design with sections for services, trainers, pricing, and contact information. The website is optimized for both desktop and mobile devices, providing an engaging user experience.",
      technologies: ["HTML", "CSS", "JavaScript"],
      category: "Web",
      demoLink: "#",
      codeLink: "https://github.com/tiwarivivek22",
    },
    {
      title: "VidhiVani",
      description:
        "A next-gen AI virtual assistant for the Department of Justice to simplify public access to judicial services.",
      technologies: ["React", "Next.js", "Tailwind CSS", "JavaScript", "AI/ML"],
      category: "AI/ML",
      codeLink: "https://github.com/tiwarivivek22",
    },
    {
      title: "Mental Health System",
      description:
        "An AI-powered mental health support system that provides personalized assistance and resources to individuals seeking help for mental health issues.",
      technologies: ["Python", "Django", "AI/ML"],
      category: "AI/ML",
      codeLink: "https://github.com/tiwarivivek22",
    },
    // {
    //   title: "Code Snippet Manager",
    //   description:
    //     "The Code Snippet Manager is a Python application that allows you to store, organize, and retrieve reusable code snippets. It provides a user-friendly interface to manage your snippets, making it easier to find and reuse code for your projects.",
    //   technologies: ["Python", "GUI", "Database"],
    //   category: "Python",
    //   codeLink: "#",
    // },
    // {
    //   title: "AI-Driven Code Formatter",
    //   description:
    //     "An AI-Driven Code Formatter is a powerful tool that leverages artificial intelligence and machine learning techniques to automatically format and optimize code written in various programming languages. It aims to improve code readability, maintainability..",
    //   technologies: ["Python", "AI/ML", "Code Analysis"],
    //   category: "Python",
    //   codeLink: "#",
    // },
  ]

  const categories = ["All"]

  const filteredProjects =
    activeFilter === "All" ? projects : projects.filter((project) => project.category === activeFilter)

  return (
    <section id="projects" className="py-12 sm:py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">My Recent Projects!</h2>

            <div className="flex flex-wrap justify-center gap-2 mb-6 sm:mb-8">
              {categories.map((category, index) => (
                <Badge
                  key={index}
                  variant={activeFilter === category ? "default" : "outline"}
                  className="px-3 sm:px-4 py-2 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors text-xs sm:text-sm"
                  onClick={() => setActiveFilter(category)}
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {filteredProjects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow group h-full flex flex-col">
                <CardHeader className="pb-3 flex-shrink-0">
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="text-base sm:text-lg leading-tight">{project.title}</CardTitle>
                    <Badge variant="secondary" className="text-xs flex-shrink-0">
                      {project.category}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-muted-foreground mb-4 text-xs sm:text-sm leading-relaxed text-pretty flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2 mt-auto">
                    <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="w-full">
                      <Button
                        size="sm"
                        variant="outline"
                        className={`${project.demoLink ? "flex-1" : "w-full"} text-xs sm:text-sm`}
                      >
                        <Github className="mr-1 sm:mr-2 h-3 w-3" />
                        <span className="hidden sm:inline">View Code</span>
                        <span className="sm:hidden">Code</span>
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
