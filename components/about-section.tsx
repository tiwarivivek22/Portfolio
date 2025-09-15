import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function AboutSection() {
  return (
    <section id="about" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About Me</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
              <p className="text-muted-foreground mb-4 text-pretty">
                I'm a passionate B.Tech Computer Science Engineering student from New Delhi with a strong foundation in
                web development and software engineering. My journey in tech has been driven by a desire to create
                meaningful solutions that address real-world challenges.
              </p>
              <p className="text-muted-foreground text-pretty">
                Currently working as a Freelancer, where I explore innovative
                approaches to solve real-world community challenges through technology, data analysis, and social impact
                initiatives.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-full max-w-xs aspect-square bg-muted rounded-full flex items-center justify-center mx-auto">
                <img
                  src="/Vivek.jpg"
                  alt="Vivek Prabhat"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
