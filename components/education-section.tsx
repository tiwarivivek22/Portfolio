import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award } from "lucide-react"

export function EducationSection() {
  const education = [
    {
      degree: "Bachelor of Engineering",
      field: "Computer Science and Engineering",
      institution: "St. Andrew's Institute of Technology and Management, Farukjanagar, Haryana",
      period: "2022 - 2026",
      status: "Currently Pursuing",
      description:
        "Eagerly exploring the realms of advanced technology to drive innovation and create transformative solutions.",
      grade: "C.G.P.A - To Be Declared",
    },
    {
      degree: "Senior Secondary School Education - C.B.S.E.",
      institution: "Modern Public School, Motihari, Bihar",
      period: "2021 - 2022",
      description:
        "Completed class 12th from Modern Public School, Motihari, Bihar. Scoring a total of 75% in Senior Secondary School Examination.",
      grade: "Percentage: 75%",
    },
    {
      degree: "Secondary School Education - C.B.S.E.",
      institution: "Modern Public School, Motihari, Bihar",
      period: "2019 - 2020",
      description:
        "Completed class 10th from Modern Public School, Motihari, Bihar. Scoring a total of 65% in Senior Secondary School Examination.",
      grade: "Percentage: 65%",
    },
  ]

  return (
    <section id="education" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education Journey</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My academic foundation and continuous learning path in technology and engineering.
          </p>
        </div>

        <div className="grid gap-6 max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2">{edu.degree}</CardTitle>
                    {edu.field && (
                      <CardDescription className="text-lg font-medium text-primary mb-1">{edu.field}</CardDescription>
                    )}
                    <CardDescription className="text-sm">{edu.institution}</CardDescription>
                  </div>
                  <Badge variant={edu.status ? "default" : "outline"}>{edu.period}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">{edu.description}</p>
                <div className="flex items-center gap-2">
                  <Award className="h-4 w-4 text-primary" />
                  <span className="font-medium text-primary">{edu.grade}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
