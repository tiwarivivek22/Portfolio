"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Award, Calendar } from "lucide-react"

export function CertificationsSection() {
  const certifications = [
    {
      title: "GCARED 2025 - First Global Conference on AI Research and Emerging Developments",
      issuer: "International Academy of Physical Sciences",
      date: "March 15-17, 2025",
      link: "https://drive.google.com/file/d/1BL6_K3Xp0YT6acnr7GJjmnXSg9Bz_tQB/view?usp=drive_link",
    },
    {
      title: "RASTAS 2023 - International Conference on Recent Advances in Science, Technology and Sustainability",
      issuer: "International Academy of Physical Sciences",
      date: "December 15-17, 2023",
      link: "https://drive.google.com/file/d/1NZxjjw5VsnJ0btInZEjMJTlONw3wvE2M/view?usp=drive_link",
    },
    {
      title: "Research and Development Internship",
      issuer: "Vrikshit Foundation  ",
      date: "23 July, 2023",
      link: "https://drive.google.com/file/d/15KNOJlbJ5j4vDEHLDmpZhMsfjjfDpY2N/view?usp=drive_link",
    },
    
    {
      title: "Data Structures and Algorithms Using Java",
      issuer: "Apna College",
      date: "04 Sept, 2025",
      link: "https://drive.google.com/file/d/1u_Egdc0xKY_ezhTNIL_basF_gJRtZ-Fi/view?usp=drive_link",
    },
    {
      title: "Content Writing Internship",
      issuer: "Vrikshit Foundation",
      date: "23 June, 2024",
      link: "https://drive.google.com/file/d/1LigY2yfUZrfrAlQBHJ-ULoROiKdgALac/view?usp=drive_link",
    },
  ]

  return (
    <section id="certifications" className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Learnings</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Continuous learning and skill development through various certifications and courses.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg leading-tight mb-2">{cert.title}</CardTitle>
                    <CardDescription className="font-medium text-primary">{cert.issuer}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex items-center gap-2 mb-3">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{cert.date}</span>
                </div>
                {cert.link !== "#" ? (
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full bg-transparent"
                    onClick={() => window.open(cert.link, '_blank')}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Certificate
                  </Button>
                ) : (
                  <Button variant="outline" size="sm" className="w-full bg-transparent" disabled>
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Certificate Not Available
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* <div className="text-center mt-8">
          <Button variant="ghost" className="text-primary hover:text-primary/80">
            View All Other Certifications
          </Button>
        </div> */}
      </div>
    </section>
  )
}
