"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
    {
        period: "Jan 2023 — Present",
        title: "Full Stack Developer",
        company: "Dezy It",
        description:
            "Developed and deployed 5+ full-stack applications for clients, ensuring on-time delivery. Building scalable backend services with Node.js, Express, Socket.io, MongoDB, and PostgreSQL. Creating reusable and responsive UI components with React and Tailwind CSS. Setting up CI/CD pipelines with GitHub Actions, containerizing apps with Docker and deploying to AWS and Azure.",
        technologies: [
            "Node.js",
            "Express",
            "React",
            "MongoDB",
            "PostgreSQL",
            "Socket.io",
            "Tailwind CSS",
            "Docker",
            "AWS",
            "Azure",
            "GitHub Actions",
        ],
    },
    {
        period: "Feb 2022 — Aug 2022",
        title: "Programmer Analyst Intern",
        company: "Cognizant",
        description:
            "Developed Python scripts to collect data from APIs and databases. Cleaned and prepared datasets for the data science team, enhancing data quality and accuracy. Gained experience in data processing, API integration, and working with large datasets in a corporate environment.",
        technologies: ["Python", "APIs", "Databases", "Data Processing"],
    },
];

export function Experience() {
    return (
        <section
            id="experience"
            className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20"
        >
            <div className="max-w-4xl mx-auto">
                <div className="space-y-12">
                    <div className="text-center space-y-4">
                        <Badge variant="outline" className="w-fit mx-auto">
                            Experience
                        </Badge>
                        <h2 className="text-3xl md:text-4xl font-bold text-balance">
                            Professional Journey
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto text-balance">
                            Building exceptional web experiences across
                            different industries and company sizes.
                        </p>
                    </div>

                    <div className="space-y-8">
                        {experiences.map((exp, index) => (
                            <Card
                                key={index}
                                className="p-6 hover:shadow-lg transition-shadow duration-300"
                            >
                                <div className="space-y-4">
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                                        <div>
                                            <h3 className="text-lg font-semibold text-foreground">
                                                {exp.title}
                                            </h3>
                                            <p className="text-primary font-medium">
                                                {exp.company}
                                            </p>
                                        </div>
                                        <Badge
                                            variant="secondary"
                                            className="w-fit"
                                        >
                                            {exp.period}
                                        </Badge>
                                    </div>

                                    <p className="text-muted-foreground leading-relaxed">
                                        {exp.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {exp.technologies.map((tech) => (
                                            <Badge
                                                key={tech}
                                                variant="outline"
                                                className="text-xs"
                                            >
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
    );
}
