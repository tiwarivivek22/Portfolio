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
      title: "Insta-Cypher",
      description:
        "The Instagram Password Cracker is a Bash script designed to perform brute-force attacks on Instagram accounts to recover forgotten or lost passwords. It uses list of possible passwords and various techniques to attempt to recover Instagram account.",
      technologies: ["Bash", "Cybersecurity", "Ethical Hacking"],
      category: "Security",
      demoLink: "#",
      codeLink: "#",
    },
    {
      title: "Memory Game",
      description:
        "This is a simple Web Application memory game implemented using HTML, CSS, and JavaScript. The goal of the game is to match pairs of cards with the same emoji. Have fun matching the cards and enhancing your memory!",
      technologies: ["HTML", "CSS", "JavaScript"],
      category: "Web",
      demoLink: "#",
      codeLink: "#",
    },
    {
      title: "Task Manager",
      description:
        "This is a simple to-do list web application created with HTML, CSS, and JavaScript. It allows users to add and manage tasks in a list format. Never lose a track of your pending tasks. With integrated reminder feature, it won't let you miss on your important tasks!",
      technologies: ["HTML", "CSS", "JavaScript"],
      category: "Web",
      demoLink: "#",
      codeLink: "#",
    },
    {
      title: "Quotes Web Application",
      description:
        "With this Quotes Web Application, you have access to all the random quotes on internet at one place! Save and share your favorite quotes with everyone in just a click. The app's clean and stylish design, powered by CSS and Font Awesome icons, enhances the user experience.",
      technologies: ["HTML", "CSS", "JavaScript", "Font Awesome"],
      category: "Web",
      demoLink: "#",
      codeLink: "#",
    },
    {
      title: "Authentication and Authorization API",
      description:
        "This is a simple RESTful API built with Flask that provides user registration, login, and token-based authentication. It allows users to register, log in, and access protected endpoints by providing a valid access token.",
      technologies: ["Python", "Flask", "REST API", "JWT"],
      category: "API",
      codeLink: "#",
    },
    {
      title: "Facial Recognition API",
      description:
        "This API allows users to upload images and receive facial recognition results, including bounding boxes around detected faces and corresponding labels. This can be used in many other projects which require Facial Recognition system.",
      technologies: ["Python", "Computer Vision", "AI/ML"],
      category: "API",
      codeLink: "#",
    },
    {
      title: "Code Snippet Manager",
      description:
        "The Code Snippet Manager is a Python application that allows you to store, organize, and retrieve reusable code snippets. It provides a user-friendly interface to manage your snippets, making it easier to find and reuse code for your projects.",
      technologies: ["Python", "GUI", "Database"],
      category: "Python",
      codeLink: "#",
    },
    {
      title: "AI-Driven Code Formatter",
      description:
        "An AI-Driven Code Formatter is a powerful tool that leverages artificial intelligence and machine learning techniques to automatically format and optimize code written in various programming languages. It aims to improve code readability, maintainability..",
      technologies: ["Python", "AI/ML", "Code Analysis"],
      category: "Python",
      codeLink: "#",
    },
  ]

  const categories = ["All", "Web", "Python", "API", "Security"]

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
                    <Button
                      size="sm"
                      variant="outline"
                      className={`${project.demoLink ? "flex-1" : "w-full"} text-xs sm:text-sm`}
                    >
                      <Github className="mr-1 sm:mr-2 h-3 w-3" />
                      <span className="hidden sm:inline">View Code</span>
                      <span className="sm:hidden">Code</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-6 sm:mt-8">
            <p className="text-muted-foreground mb-4 text-sm sm:text-base px-4">
              Source codes of all these projects are available on my GitHub!
            </p>
            <Button variant="ghost" className="text-primary hover:text-primary/80 text-xs sm:text-sm">
              I also have additional projects that are waiting for your consideration on my GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
