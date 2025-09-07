import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { ExperienceSection } from "@/components/experience-section"
import { CertificationsSection } from "@/components/certifications-section"
import { BlogsSection } from "@/components/blogs-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { EducationSection } from "@/components/education-section"
import { ResearchSection } from "@/components/research-section"

export default function Home() {
  const sections = [
    <HeroSection key="hero" />,
    <AboutSection key="about" />,
    <SkillsSection key="skills" />,
    <ExperienceSection key="experience" />,
    <ProjectsSection key="projects" />,
    <EducationSection key="education" />,
    <ResearchSection key="research" />,
    <CertificationsSection key="certifications" />,
    <BlogsSection key="blogs" />,
    <ContactSection key="contact" />,
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {sections.map((section, index) => (
          <div key={index} className={index % 2 === 0 ? "bg-theme-background" : "bg-theme-muted"}>
            {section}
          </div>
        ))}
      </main>
      <Footer />
    </div>
  )
}
