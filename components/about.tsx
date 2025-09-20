"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const highlights = [
        "Full Stack Developer at Dezy It with 3+ years experience",
        "Developed and deployed 5+ full-stack applications for clients",
        "Expert in MERN stack, cloud infrastructure, and DevOps",
        "Built AI-powered applications serving 5000+ users",
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    return (
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8" ref={ref}>
            <div className="max-w-6xl mx-auto">
                <motion.div
                    className="grid lg:grid-cols-2 gap-12 items-center"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    <motion.div className="space-y-6" variants={itemVariants}>
                        <div className="space-y-4">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={
                                    isInView
                                        ? { opacity: 1, scale: 1 }
                                        : { opacity: 0, scale: 0.8 }
                                }
                                transition={{ duration: 0.5 }}
                            >
                                <Badge variant="outline" className="w-fit">
                                    About
                                </Badge>
                            </motion.div>
                            <motion.h2
                                className="text-3xl md:text-4xl font-bold text-balance"
                                initial={{ opacity: 0, x: -30 }}
                                animate={
                                    isInView
                                        ? { opacity: 1, x: 0 }
                                        : { opacity: 0, x: -30 }
                                }
                                transition={{ duration: 0.7, delay: 0.2 }}
                            >
                                Delivering scalable full-stack solutions
                            </motion.h2>
                        </div>

                        <motion.div
                            className="space-y-4 text-muted-foreground leading-relaxed"
                            variants={itemVariants}
                        >
                            {[
                                "I'm a Full Stack Developer passionate about building scalable web solutions that make a real impact. With over 3 years of experience in the MERN stack, I specialize in creating end-to-end applications that seamlessly integrate frontend user experiences with robust backend architectures.",
                                "Currently, I'm a Full Stack Developer at Dezy It, where I've successfully developed and deployed 5+ full-stack applications for clients, ensuring on-time delivery and exceptional quality. I build scalable backend services with Node.js, Express, Socket.io, MongoDB, and PostgreSQL, while creating reusable and responsive UI components with React and Tailwind CSS.",
                                "My expertise extends beyond development to DevOps and cloud infrastructure. I set up CI/CD pipelines with GitHub Actions, containerize applications with Docker, and deploy to AWS and Azure. I've built AI-powered applications like Happi.ai, serving over 5000+ users, and healthcare solutions like Diva that increased patient satisfaction by 30%.",
                            ].map((paragraph, index) => (
                                <motion.p
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={
                                        isInView
                                            ? { opacity: 1, y: 0 }
                                            : { opacity: 0, y: 20 }
                                    }
                                    transition={{
                                        duration: 0.6,
                                        delay: 0.3 + index * 0.1,
                                    }}
                                >
                                    {paragraph.includes("Dezy It") ? (
                                        <>
                                            {paragraph.split("Dezy It")[0]}
                                            <span className="text-primary font-medium">
                                                Dezy It
                                            </span>
                                            {paragraph.split("Dezy It")[1]}
                                        </>
                                    ) : (
                                        paragraph
                                    )}
                                </motion.p>
                            ))}
                        </motion.div>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <Card className="p-8 space-y-6">
                            <motion.h3
                                className="text-xl font-semibold"
                                initial={{ opacity: 0 }}
                                animate={
                                    isInView ? { opacity: 1 } : { opacity: 0 }
                                }
                                transition={{ duration: 0.5, delay: 0.5 }}
                            >
                                Key Highlights
                            </motion.h3>
                            <ul className="space-y-3">
                                {highlights.map((highlight, index) => (
                                    <motion.li
                                        key={index}
                                        className="flex items-start gap-3"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={
                                            isInView
                                                ? { opacity: 1, x: 0 }
                                                : { opacity: 0, x: -20 }
                                        }
                                        transition={{
                                            duration: 0.5,
                                            delay: 0.6 + index * 0.1,
                                        }}
                                        whileHover={{ x: 5 }}
                                    >
                                        <motion.div
                                            className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"
                                            initial={{ scale: 0 }}
                                            animate={
                                                isInView
                                                    ? { scale: 1 }
                                                    : { scale: 0 }
                                            }
                                            transition={{
                                                duration: 0.3,
                                                delay: 0.7 + index * 0.1,
                                            }}
                                        />
                                        <span className="text-muted-foreground">
                                            {highlight}
                                        </span>
                                    </motion.li>
                                ))}
                            </ul>

                            <motion.div
                                className="pt-4"
                                initial={{ opacity: 0 }}
                                animate={
                                    isInView ? { opacity: 1 } : { opacity: 0 }
                                }
                                transition={{ duration: 0.5, delay: 1 }}
                            >
                                <p className="text-sm text-muted-foreground">
                                    In my spare time, I enjoy exploring new
                                    technologies, contributing to open-source
                                    projects, and staying updated with the
                                    latest trends in web development and cloud
                                    computing.
                                </p>
                            </motion.div>
                        </Card>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
