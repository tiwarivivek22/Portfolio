import { Button } from "@/components/ui/button"
import { Github, Linkedin, Twitter, Mail, Heart, Instagram } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8">
            {/* About Section */}
            <div className="lg:col-span-2">
              <h3 className="text-lg font-semibold mb-3">Vivek Prabhat</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                B.Tech CSE student passionate about web development, cybersecurity, and creating innovative solutions
                that make a positive impact on communities.
              </p>
               <div className="flex gap-3">
              <a href="https://github.com/tiwarivivek22" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="text-primary hover:text-primary/80">
                  <Github className="h-5 w-5" />
                </Button>
              </a>
              <a href="https://www.linkedin.com/in/vivek-prabhat-a67752247/" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="text-primary hover:text-primary/80">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </a>
              <a href="https://x.com/VivekTi43867192/" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="text-primary hover:text-primary/80">
                  <Twitter className="h-5 w-5" />
                </Button>
              </a>
              <a href="https://www.instagram.com/tiwarivivek_07/" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="text-primary hover:text-primary/80">
                  <Instagram className="h-5 w-5" />
                </Button>
              </a>
            </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-3">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a>
                </li>
                <li>
                  <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</a>
                </li>
                <li>
                  <a href="#experience" className="text-muted-foreground hover:text-primary transition-colors">Experience</a>
                </li>
                <li>
                  <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold mb-3">Get In Touch</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>New Delhi, India</p>
                <p>tiwarivivek8765@gmail.com</p>
                <p>+91 7654406307</p>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-border pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center sm:text-left">
              © {currentYear} Vivek Prabhat. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
