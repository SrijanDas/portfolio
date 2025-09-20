"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export function Contact() {
    return (
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="space-y-12">
                    <div className="text-center space-y-4">
                        <Badge variant="outline" className="w-fit mx-auto">
                            Contact
                        </Badge>
                        <h2 className="text-3xl md:text-4xl font-bold text-balance">
                            Let's Work Together
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto text-balance">
                            If you would like to discuss a project or just say
                            hi, I'm always down to chat.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        <div className="space-y-8">
                            <div className="space-y-6">
                                <h3 className="text-xl font-semibold">
                                    Get in Touch
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    I'm passionate about building scalable web
                                    solutions and always excited to work on
                                    challenging projects. Whether you're looking
                                    for a full-stack developer to join your
                                    team, or you have an interesting project
                                    that needs expertise in MERN stack, cloud
                                    infrastructure, or AI integration, I'd love
                                    to discuss how we can work together.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <Mail className="h-5 w-5 text-primary" />
                                    <span className="text-muted-foreground">
                                        srijandas18.sd@gmail.com
                                    </span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Phone className="h-5 w-5 text-primary" />
                                    <span className="text-muted-foreground">
                                        +91 9836262393
                                    </span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <MapPin className="h-5 w-5 text-primary" />
                                    <span className="text-muted-foreground">
                                        India
                                    </span>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <Button variant="outline" size="icon">
                                    <Github className="h-5 w-5" />
                                </Button>
                                <Button variant="outline" size="icon">
                                    <Linkedin className="h-5 w-5" />
                                </Button>
                                <Button variant="outline" size="icon">
                                    <Mail className="h-5 w-5" />
                                </Button>
                            </div>
                        </div>

                        <Card className="p-6">
                            <form className="space-y-6">
                                <div className="space-y-4">
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label
                                                htmlFor="name"
                                                className="text-sm font-medium"
                                            >
                                                Name
                                            </label>
                                            <Input
                                                id="name"
                                                placeholder="Your name"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label
                                                htmlFor="email"
                                                className="text-sm font-medium"
                                            >
                                                Email
                                            </label>
                                            <Input
                                                id="email"
                                                type="email"
                                                placeholder="your@email.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label
                                            htmlFor="subject"
                                            className="text-sm font-medium"
                                        >
                                            Subject
                                        </label>
                                        <Input
                                            id="subject"
                                            placeholder="Project inquiry"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label
                                            htmlFor="message"
                                            className="text-sm font-medium"
                                        >
                                            Message
                                        </label>
                                        <Textarea
                                            id="message"
                                            placeholder="Tell me about your project..."
                                            className="min-h-[120px]"
                                        />
                                    </div>
                                </div>

                                <Button type="submit" className="w-full">
                                    Send Message
                                </Button>
                            </form>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}
