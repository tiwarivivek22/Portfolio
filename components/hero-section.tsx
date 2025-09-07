"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Download, ExternalLink, Mail, Phone, Github, Linkedin, Twitter } from "lucide-react"
import { useEffect, useState } from "react"

export function HeroSection() {
  const roles = [
    "Web Developer",
    "B.Tech CSE Student",
    "Researcher",
    "Front-end Developer",
    "Problem Solver",
    "Tech Enthusiast",
    "Content Writer",
    "Community Volunteer",
  ]

  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPreviewOpen, setIsPreviewOpen] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        const current = roles[currentRole]

        if (isDeleting) {
          setDisplayText(current.substring(0, displayText.length - 1))
          if (displayText === "") {
            setIsDeleting(false)
            setCurrentRole((prev) => (prev + 1) % roles.length)
          }
        } else {
          setDisplayText(current.substring(0, displayText.length + 1))
          if (displayText === current) {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        }
      },
      isDeleting ? 50 : 100,
    )

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentRole, roles])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="pt-20 sm:pt-24 pb-12 sm:pb-16 bg-gradient-to-br from-background to-muted min-h-screen flex items-center">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-balance">
            Vivek Prabhat
          </h1>

          <div className="text-lg sm:text-xl md:text-2xl text-primary mb-3 sm:mb-4 h-7 sm:h-8">
            I'm a <span className="font-semibold">{displayText}</span>
            <span className="animate-pulse">|</span>
          </div>

          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-balance max-w-3xl mx-auto text-muted-foreground px-4">
            B.Tech Computer Science Engineering student from New Delhi, passionate about creating innovative web
            applications that solve real-world problems and make a positive impact on communities.
          </p>


          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 sm:mb-8 px-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 w-full sm:w-auto"
              onClick={() => scrollToSection("projects")}
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              View My Work
            </Button>
            <a href="https://drive.google.com/uc?export=download&id=1TKgeN-WSv9p_v5-2-6K76muv4SL63Ygc" download target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="w-full sm:w-auto bg-transparent">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </a>
            <Button variant="outline" size="lg" className="w-full sm:w-auto bg-transparent" onClick={() => setIsPreviewOpen(true)}>
              <ExternalLink className="mr-2 h-4 w-4" />
              Preview Resume
            </Button>
          </div>

          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center px-4">
              <a href="mailto:tiwarivivek8765@gmail.com" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80 text-xs sm:text-sm">
                  <Mail className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="truncate">tiwarivivek8765@gmail.com</span>
                </Button>
              </a>
              <a href="tel:+917654406307" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80 text-xs sm:text-sm">
                  <Phone className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                  +91 7654406307
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <Dialog open={isPreviewOpen} onOpenChange={setIsPreviewOpen}>
        <DialogContent className="max-w-4xl w-full h-[80vh]">
          <iframe src="https://drive.google.com/file/d/1TKgeN-WSv9p_v5-2-6K76muv4SL63Ygc/preview" className="w-full h-full border-0" title="Resume Preview" />
        </DialogContent>
      </Dialog>
    </section>
  )
}
