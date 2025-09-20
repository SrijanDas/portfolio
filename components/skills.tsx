"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const skillCategories = [
    {
        title: "Frontend Technologies",
        skills: [
            { name: "React", level: 95 },
            { name: "JavaScript", level: 95 },
            { name: "TypeScript", level: 90 },
            { name: "Tailwind CSS", level: 92 },
        ],
    },
    {
        title: "Backend & Database",
        skills: [
            { name: "Node.js", level: 90 },
            { name: "Express", level: 88 },
            { name: "MongoDB", level: 85 },
            { name: "PostgreSQL", level: 80 },
        ],
    },
    {
        title: "Cloud & DevOps",
        skills: [
            { name: "AWS", level: 85 },
            { name: "Azure", level: 80 },
            { name: "Docker", level: 85 },
            { name: "GitHub Actions", level: 80 },
        ],
    },
];

const technologies = [
    "JavaScript",
    "TypeScript",
    "Python",
    "HTML",
    "CSS",
    "React",
    "Next.js",
    "Redux",
    "Node.js",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "Socket.io",
    "Tailwind CSS",
    "AWS",
    "Azure",
    "Firebase",
    "Supabase",
    "Vercel",
    "Docker",
    "GitHub Actions",
    "Git",
    "GitHub",
    "VS Code",
    "PyCharm",
    "Jira",
    "Linux",
    "Postman",
];

export function Skills() {
    return (
        <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
            <div className="max-w-6xl mx-auto">
                <div className="space-y-12">
                    <div className="text-center space-y-4">
                        <Badge variant="outline" className="w-fit mx-auto">
                            Skills
                        </Badge>
                        <h2 className="text-3xl md:text-4xl font-bold text-balance">
                            Technical Expertise
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto text-balance">
                            A comprehensive toolkit of modern technologies and
                            frameworks for building exceptional web experiences.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {skillCategories.map((category, index) => (
                            <Card key={index} className="p-6 space-y-6">
                                <h3 className="text-lg font-semibold text-foreground">
                                    {category.title}
                                </h3>
                                <div className="space-y-4">
                                    {category.skills.map((skill) => (
                                        <div
                                            key={skill.name}
                                            className="space-y-2"
                                        >
                                            <div className="flex justify-between items-center">
                                                <span className="text-sm font-medium text-foreground">
                                                    {skill.name}
                                                </span>
                                                <span className="text-xs text-muted-foreground">
                                                    {skill.level}%
                                                </span>
                                            </div>
                                            <Progress
                                                value={skill.level}
                                                className="h-2"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </Card>
                        ))}
                    </div>

                    <Card className="p-8">
                        <div className="space-y-6">
                            <h3 className="text-xl font-semibold text-center">
                                Technologies & Tools
                            </h3>
                            <div className="flex flex-wrap gap-3 justify-center">
                                {technologies.map((tech) => (
                                    <Badge
                                        key={tech}
                                        variant="secondary"
                                        className="text-sm"
                                    >
                                        {tech}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    );
}
