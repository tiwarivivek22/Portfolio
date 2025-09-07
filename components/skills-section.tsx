import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Programming",
      skills: [
        { name: "C++", level: 65 },
        { name: "Python", level: 70 },
        { name: "Java", level: 80 },
        { name: "SQL", level: 60 },
      ],
    },
    {
      title: "Web Skills",
      skills: [
        { name: "HTML/CSS", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "ReactJS", level: 85 },
        { name: "NodeJS", level: 80 },
        { name: "MongoDB", level: 78 },
      ],
    },
  ]

  const toolsAndFrameworks = {
    "Tools & OS": ["Git", "Github", "Jupyter Notebook", "Google Colab"],
    // "Libraries/Frameworks": ["Pandas", "Numpy", "scikit-learn", "Tensorflow", "Pytorch"],
    "Additional Skills": ["Content Writing", "Research", "Data Analysis", "Data Visualization"],
  }

  return (
    <section id="skills" className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">My Technical Proficiency</h2>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {skillCategories.map((category, categoryIndex) => (
              <Card key={categoryIndex}>
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.skills.map((skill, index) => (
                      <div key={index}>
                        <div className="flex justify-between mb-2">
                          <span className="font-medium text-sm">{skill.name}</span>
                          <span className="text-muted-foreground text-sm">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(toolsAndFrameworks).map(([category, tools], index) => (
              <Card key={index}>
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {tools.map((tool, toolIndex) => (
                      <Badge key={toolIndex} variant="secondary" className="text-xs">
                        {tool}
                      </Badge>
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
