import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FileText, Users, Award, BookOpen } from "lucide-react"

interface Publication {
  title: string
  authors: string
  conference: string
  year: string
  tags: string[]
  link?: string
}

export function ResearchSection() {
  const stats = [
    { icon: FileText, label: "Publications", value: "4" },
    { icon: Award, label: "Citations", value: "25+" },
    { icon: Users, label: "Collaborations", value: "8" },
    { icon: BookOpen, label: "Projects", value: "3" },
  ]

  const publications: Publication[] = [
    {
      title: "A Research Review on the Role of Plastic-Eating Microscopic Organisms in interept Global Pollution",
      authors: "Dr. Manisha Agrawal, Vivek Prabhat, Mr. Deepak Kumar",
      conference: "G-CARED 2025 - First Global Conference on AI Research and Emerging Developments",
      year: "2025",
      tags: ["Plastic Pollution", "Microbial Degradation", "Sustainability", "Environmental Science"],
      link: "https://gcared.ganitara.com/proceedings/gcared25/paper.php?id=GCARED2025-0287",
    },
    {
      title:
        "A Theoretical Analysis of Using Traditional Method of Teaching to Get Around Some Of the Challenges of E-Learning Programmes",
      authors: "Dr. Manisha Agrawal, Vivek Prabhat, Dr. Puneet Garg",
      conference: "30st International Conference of International Academy of Physical Sciences (CONIAPS XXX)",
      year: "2024",
      tags: ["Traditional Teaching", "E-Learning", "Student Engagement", "Digital Divide"],
    },
  ]

  return (
    <section id="research" className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Research & Publications</h2>

          {/* Research Stats */}
          {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <stat.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                  <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div> */}

          {/* Research Interests */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle>Research Interests</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Machine Learning in Software Engineering",
                  "Web Application Security",
                  "Database Optimization and NoSQL Technologies",
                  "Frontend Performance Optimization",
                  "Sustainable Software Development",
                  "Blockchain Applications in Education",
                  "Microservices Architecture",
                  "AI-Assisted Code Analysis",
                ].map((interest, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span>{interest}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Publications */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-center mb-8">Published Papers & Publications</h3>
            {publications.map((pub, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold mb-2 text-balance">{pub.title}</h4>
                      <p className="text-muted-foreground mb-2">
                        <strong>Authors:</strong> {pub.authors}
                      </p>
                      <p className="text-muted-foreground mb-3">
                        <strong>Published in:</strong> {pub.conference}
                      </p>
                    </div>
                    <div className="flex flex-col items-start lg:items-end gap-2">
                      <Badge variant="outline">{pub.year}</Badge>
                      {/* <div className="text-sm text-muted-foreground">{pub.citations} Citations</div> */}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {pub.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <a
                    href={
                      pub.title.includes("Plastic-Eating")
                        ? "https://drive.google.com/uc?export=download&id=118DthK9oTubMMlJpS31PucU-dRXNJ51L"
                        : "https://docs.google.com/document/d/1gAMSaDrWxRdfzWA_DsoLMEaC6koNgS64/export?format=pdf"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                  >
                    <Button size="sm" variant="outline">
                      <FileText className="mr-2 h-3 w-3" />
                      Download PDF
                    </Button>
                  </a>
                  <a
                    href={
                      pub.title.includes("Plastic-Eating")
                        ? "https://drive.google.com/file/d/118DthK9oTubMMlJpS31PucU-dRXNJ51L/preview"
                        : "https://docs.google.com/document/d/1gAMSaDrWxRdfzWA_DsoLMEaC6koNgS64/preview"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="sm" variant="outline" className="ml-2">
                      Preview PDF
                    </Button>
                  </a>
                  {pub.link && (
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button size="sm" variant="outline" className="ml-2">
                        Published Site
                      </Button>
                    </a>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
