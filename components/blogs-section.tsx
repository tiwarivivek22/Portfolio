import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, BookOpen } from "lucide-react"

export function BlogsSection() {
  const blogs = [
    {
      title: "Music Player GUI",
      description:
        "A Music Player lets you manage and listen to all your music files quickly and easily. In this article, I will take you through how to create a Music Player GUI with Python.",
      link: "#",
    },
    {
      title: "Pong Game Using Python Turtle",
      description:
        "Pong is a well-known computer game that is similar to table tennis. The two players in this game control the two paddles on either side of the game window.",
      link: "#",
    },
    {
      title: "Deploy AngularJs App - Kubernetes",
      description:
        "The angular app can be served on the server in several ways if the app is a static app and no server-side rendering is involved, the best way is to serve it using Nginx.",
      link: "#",
    },
    {
      title: "Hangman Game using Python",
      description:
        "The goal of a Hangman Game in Python is to guess the name of the movie by guessing the letters (A-Z), when the number of wrong guesses is over, a hanged man is shown and that's where the game ends.",
      link: "#",
    },
    {
      title: "Rock Paper Scissors Game - Python",
      description:
        "Rock Paper Scissors is a hand game originating from China, usually played between two people, in which each player simultaneously forms one of three shapes with an outstretched hand.",
      link: "#",
    },
    {
      title: "Wireless debugging in Android 11",
      description:
        "Android 11 came with lots of new and amazing features focusing on 5G integration, scoped storage, improved privacy and security, etc. It is a new method for deploying and debugging your app wirelessly.",
      link: "#",
    },
  ]

  return (
    <section id="blogs" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Sharing what I learnt</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technical articles and tutorials on various programming topics, sharing knowledge with the community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {blogs.map((blog, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <BookOpen className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg leading-tight">{blog.title}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4 text-sm leading-relaxed">{blog.description}</CardDescription>
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Read Blog
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button variant="ghost" className="text-primary hover:text-primary/80">
            Please consider exploring my additional blogs available HERE as well.
          </Button>
        </div>
      </div>
    </section>
  )
}
