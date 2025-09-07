"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Briefcase, Calendar } from "lucide-react"

export function ExperienceSection() {
  const experiences = [
    {
      title: "Web Development",
      company: "Freelancer",
      period: "March 2022 - Present",
      type: "Freelance",
      location: "Remote",
      skills: ["HTML", "CSS", "JavaScript", "React", "Vue.js", "PHP", "WordPress"],
      highlights: [
        "Developed 20+ responsive websites with modern UI/UX principles",
        "Specialized in cross-browser compatibility and performance optimization",
        "Built custom WordPress themes and RESTful API integrations",
      ],
      links: [{ label: "Portfolio", href: "https://portfolio-website-one-blond-25.vercel.app/" }],
    },
    {
      title: "Project Head",
      company: "Coralreaf Innovations Pvt. Ltd.",
      period: "June 2023 - Present",
      type: "Freelance",
      location: "Remote",
      skills: ["Full-Stack Development", "React", "Node.js", "Express", "MongoDB", "UI/UX Design"],
      highlights: [
        "Built full-stack web applications from concept to deployment",
        "Implemented responsive designs with modern JavaScript frameworks",
        "Managed databases and API development",
      ],
      links: [
        { label: "Projects", href: "#" },
        { label: "Certificate", href: "#" },
      ],
    },
    {
      title: "Research & Development Intern",
      company: "Vrikshit Foundation",
      period: "Apr 2023 - July 2023",
      type: "Internship",
      location: "Remote",
      skills: ["Management", "Research", "Data Analysis", "Collaboration", "Problem Solving"],
      highlights: [
        "Analyzed experimental data to derive insights and improve designs.",
        "Collaborated within a multidisciplinary team to drive impactful outcomes.",
        "Worked on scalable solutions applicable to real-life challenges.",
      ],
    },
    {
      title: "Front-end Developer Intern",
      company: "Figmanet Solutions",
      period: "October 2023 - November 2023",
      type: "Internship",
      location: "Remote",
      skills: ["Frontend", "Backend", "Database", "UI/UX", "Version Control"],
      highlights: [
        "Contributed to web performance optimization and ensured cross-browser compatibility for smooth user experiences.",
        "Recognized for problem-solving, accuracy, and meeting tight deadlines in project delivery.",
        "Collaborated with backend developers to deliver seamless and scalable digital solutions.",
      ],
      links: [
        { label: "Projects", href: "https://github.com/tiwarivivek22/PAGES-OF-FIGMAGMENT-SOLUTION" },
        { label: "Certificate", href: "#" },
      ],
    },
    {
      title: "Content Writer Intern",
      company: "Vrikshit Foundation",
      period: "July 2023 - Oct 2024",
      type: "Internship",
      location: "Remote",
      skills: ["Content Writing", "Research", "Storytelling", "Social Media", "Communication"],
      highlights: [
        "Blended storytelling with inspiration to support the foundation’s vision of building a positive, change-driven world.",
        "Focused on well-researched, meaningful storytelling to raise awareness on social issues and mobilize communities.",
        "Produced engaging content across various formats, including articles, blogs, social media posts, and newsletters.",
      ],
      links: [
        { label: "Certificate", href: "#" },
        { label: "Project", href: "#" },
      ],
    },
    {
      title: "Student Coordinator",
      company: "SAITM College",
      period: "Jun 2023 - Aug 2024",
      type: "Internship",
      location: "Remote",
      skills: ["Event Management", "Communication", "Leadership", "Teamwork", "Problem Solving"],
      highlights: [
        "Organized and coordinated college events, workshops, and seminars, ensuring smooth execution and participant engagement.",
        "Acted as a liaison between students and faculty, effectively communicating important information and addressing student concerns.",
        "Demonstrated strong leadership and teamwork skills while managing a team of volunteers for various college activities.",
      ],
      links: [
        { label: "Certificate", href: "#" },
        { label: "Project", href: "#" },
      ],
    },
  ]

  return (
    <section id="experience" className="py-12 sm:py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Experience</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {experiences.map((exp, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow group h-full flex flex-col">
                <CardHeader className="pb-3 flex-shrink-0">
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="text-base sm:text-lg leading-tight">{exp.title}</CardTitle>
                    <Badge variant="secondary" className="text-xs flex-shrink-0">
                      {exp.type}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-muted-foreground mb-4 text-xs sm:text-sm leading-relaxed text-pretty flex-1">
                    {exp.highlights.map((highlight, i) => (
                      <span key={i} className="block mb-1">
                        • {highlight}
                      </span>
                    ))}
                  </p>

                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-4">
                    {exp.skills.map((skill, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2 mt-auto flex-wrap">
                    {exp.links &&
                      exp.links.map((link, i) => (
                        <a
                          key={i}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 rounded-md border border-border px-3 py-1 text-xs sm:text-sm text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                          <ExternalLink className="mr-1 sm:mr-2 h-3 w-3" />
                          {link.label}
                        </a>
                      ))}
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
