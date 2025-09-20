"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    period: "2024 — Present",
    title: "Senior Frontend Engineer, Accessibility",
    company: "TechCorp",
    description:
      "Build and maintain critical components used to construct TechCorp's frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.",
    technologies: ["JavaScript", "TypeScript", "React", "Storybook"],
  },
  {
    period: "2022 — 2024",
    title: "Frontend Developer",
    company: "InnovateLab",
    description:
      "Developed and maintained multiple client projects using modern web technologies. Focused on creating responsive, accessible, and performant web applications. Collaborated with design teams to implement pixel-perfect interfaces.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    period: "2020 — 2022",
    title: "Junior Frontend Developer",
    company: "StartupXYZ",
    description:
      "Started my professional journey building user interfaces for a fast-growing startup. Gained experience in agile development, version control, and modern frontend frameworks while contributing to the company's main product.",
    technologies: ["JavaScript", "React", "CSS", "Git"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <Badge variant="outline" className="w-fit mx-auto">
              Experience
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-balance">Professional Journey</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-balance">
              Building exceptional web experiences across different industries and company sizes.
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{exp.title}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <Badge variant="secondary" className="w-fit">
                      {exp.period}
                    </Badge>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">{exp.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
