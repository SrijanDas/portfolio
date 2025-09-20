"use client";

import { Button } from "@/components/ui/button";
import {
    ArrowDown,
    Github,
    Linkedin,
    Mail,
    Code,
    Database,
    Server,
} from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

function InteractiveParticles() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [mouse, setMouse] = useState({ x: 0, y: 0 });
    const particlesRef = useRef<any[]>([]);
    const animationRef = useRef<number>();

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        // Initialize particles
        const particleCount = 200;
        particlesRef.current = Array.from({ length: particleCount }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.8,
            vy: (Math.random() - 0.5) * 0.8,
            size: Math.random() * 3 + 1,
            opacity: Math.random() * 0.8 + 0.2,
            color: `hsl(${200 + Math.random() * 60}, 70%, ${
                50 + Math.random() * 30
            }%)`,
            originalX: 0,
            originalY: 0,
        }));

        // Store original positions
        particlesRef.current.forEach((particle) => {
            particle.originalX = particle.x;
            particle.originalY = particle.y;
        });

        // Mouse move handler
        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            setMouse({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            });
        };
        // canvas.addEventListener("mousemove", handleMouseMove);

        // Animation loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particlesRef.current.forEach((particle, index) => {
                // Add wave motion
                const time = Date.now() * 0.001;
                particle.x +=
                    particle.vx +
                    Math.sin(time + particle.originalX * 0.01) * 0.5;
                particle.y +=
                    particle.vy +
                    Math.cos(time + particle.originalY * 0.01) * 0.5;

                // Boundary check with bounce
                if (particle.x < 0 || particle.x > canvas.width) {
                    particle.vx *= -0.8;
                    particle.x = Math.max(
                        0,
                        Math.min(canvas.width, particle.x)
                    );
                }
                if (particle.y < 0 || particle.y > canvas.height) {
                    particle.vy *= -0.8;
                    particle.y = Math.max(
                        0,
                        Math.min(canvas.height, particle.y)
                    );
                }

                // Apply friction
                particle.vx *= 0.99;
                particle.vy *= 0.99;

                // Draw particle with glow effect
                ctx.save();
                ctx.globalAlpha = particle.opacity;

                // Outer glow
                ctx.shadowColor = particle.color;
                ctx.shadowBlur = 15;
                ctx.fillStyle = particle.color;
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                ctx.fill();

                // Inner bright core
                ctx.shadowBlur = 0;
                ctx.globalAlpha = particle.opacity * 1.5;
                ctx.fillStyle = "#ffffff";
                ctx.beginPath();
                ctx.arc(
                    particle.x,
                    particle.y,
                    particle.size * 0.3,
                    0,
                    Math.PI * 2
                );
                ctx.fill();

                ctx.restore();

                // Draw connections
                particlesRef.current
                    .slice(index + 1)
                    .forEach((otherParticle) => {
                        const dx = particle.x - otherParticle.x;
                        const dy = particle.y - otherParticle.y;
                        const distance = Math.sqrt(dx * dx + dy * dy);

                        if (distance < 120) {
                            ctx.save();
                            ctx.globalAlpha = ((120 - distance) / 120) * 0.3;
                            ctx.strokeStyle = particle.color;
                            ctx.lineWidth = 1;
                            ctx.beginPath();
                            ctx.moveTo(particle.x, particle.y);
                            ctx.lineTo(otherParticle.x, otherParticle.y);
                            ctx.stroke();
                            ctx.restore();
                        }
                    });
            });

            animationRef.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            canvas.removeEventListener("mousemove", handleMouseMove);
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [mouse.x, mouse.y]);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-auto"
            style={{ background: "transparent" }}
        />
    );
}

function FloatingTechIcons() {
    const icons = [
        { Icon: Code, color: "text-blue-400", delay: 0, position: "20%" },
        {
            Icon: Database,
            color: "text-purple-400",
            delay: 0.5,
            position: "50%",
        },
        { Icon: Server, color: "text-amber-400", delay: 1, position: "80%" },
    ];

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {icons.map(({ Icon, color, delay, position }, index) => (
                <motion.div
                    key={index}
                    className={`absolute ${color} opacity-20`}
                    style={{
                        left: position,
                        top: `${30 + index * 20}%`,
                    }}
                    animate={{
                        y: [0, -30, 0],
                        rotate: [0, 15, -15, 0],
                        scale: [1, 1.2, 1],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                        duration: 6,
                        delay,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                    }}
                >
                    <Icon className="h-12 w-12" />
                </motion.div>
            ))}

            {/* Additional floating geometric shapes */}
            {[...Array(8)].map((_, i) => (
                <motion.div
                    key={`shape-${i}`}
                    className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-30"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                        y: [0, -50, 0],
                        x: [0, Math.random() * 20 - 10, 0],
                        opacity: [0.3, 0.8, 0.3],
                        scale: [1, 1.5, 1],
                    }}
                    transition={{
                        duration: 4 + Math.random() * 2,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: Math.random() * 2,
                        ease: "easeInOut",
                    }}
                />
            ))}
        </div>
    );
}

function HeroContent() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" as any },
        },
    };

    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-background/80"
        >
            {/* Interactive Particle Background */}
            <div className="absolute inset-0">
                <InteractiveParticles />
            </div>

            {/* Floating Tech Icons */}
            <FloatingTechIcons />

            {/* Content */}
            <motion.div
                className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="space-y-8">
                    <motion.div className="space-y-4" variants={itemVariants}>
                        <motion.h1
                            className="text-5xl md:text-7xl font-bold text-balance"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <span className="text-foreground">Srijan</span>{" "}
                            <span className="text-primary">Das</span>
                        </motion.h1>
                        <motion.div
                            className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.8, duration: 0.6 }}
                        >
                            <motion.h2 className="text-xl md:text-2xl text-muted-foreground font-mono">
                                Full Stack Developer
                            </motion.h2>
                            <motion.div
                                className="hidden sm:flex items-center gap-2"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 1.0, duration: 0.5 }}
                            >
                                <Code className="h-5 w-5 text-blue-400" />
                                <Database className="h-5 w-5 text-purple-400" />
                                <Server className="h-5 w-5 text-amber-400" />
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    <motion.p
                        className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed"
                        variants={itemVariants}
                    >
                        Full Stack Developer with over 3 years of experience
                        delivering scalable web solutions using the MERN stack.
                        Skilled in developing and deploying full stack
                        applications with expertise in cloud infrastructure,
                        CI/CD pipelines, and DevOps tools. Proven ability to
                        increase efficiency, improve user engagement, and
                        deliver production-ready solutions.
                    </motion.p>

                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                        variants={itemVariants}
                    >
                        <motion.div
                            className="flex flex-col sm:flex-row gap-3"
                            whileHover={{ scale: 1.02 }}
                        >
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Button
                                    size="lg"
                                    className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                                >
                                    <Code className="mr-2 h-4 w-4" />
                                    View Projects
                                    <motion.div
                                        animate={{ y: [0, 3, 0] }}
                                        transition={{
                                            repeat: Number.POSITIVE_INFINITY,
                                            duration: 1.5,
                                        }}
                                    >
                                        <ArrowDown className="ml-2 h-4 w-4" />
                                    </motion.div>
                                </Button>
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="group border-2 hover:bg-primary/10"
                                >
                                    <Database className="mr-2 h-4 w-4" />
                                    Tech Stack
                                </Button>
                            </motion.div>
                        </motion.div>
                        <motion.div
                            className="flex gap-3"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1.2, duration: 0.5 }}
                        >
                            {[
                                {
                                    Icon: Github,
                                    label: "GitHub",
                                    color: "hover:bg-gray-800",
                                },
                                {
                                    Icon: Linkedin,
                                    label: "LinkedIn",
                                    color: "hover:bg-blue-600",
                                },
                                {
                                    Icon: Mail,
                                    label: "Email",
                                    color: "hover:bg-green-600",
                                },
                            ].map(({ Icon, label, color }, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="relative group"
                                >
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        className={`transition-all duration-300 ${color} hover:text-white`}
                                    >
                                        <Icon className="h-5 w-5" />
                                    </Button>
                                    <motion.div
                                        className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                                        initial={{ opacity: 0, y: 5 }}
                                        whileHover={{ opacity: 1, y: 0 }}
                                    >
                                        {label}
                                    </motion.div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>

            {/* Enhanced Scroll Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
                whileHover={{ scale: 1.2 }}
            >
                <motion.div
                    className="text-xs text-muted-foreground font-mono tracking-wider"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 1 }}
                >
                    SCROLL TO EXPLORE
                </motion.div>
                <motion.div
                    className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center"
                    whileHover={{ borderColor: "#60a5fa" }}
                >
                    <motion.div
                        className="w-1 h-3 bg-muted-foreground rounded-full mt-2"
                        animate={{ y: [0, 12, 0] }}
                        transition={{
                            repeat: Number.POSITIVE_INFINITY,
                            duration: 1.5,
                        }}
                        whileHover={{ backgroundColor: "#60a5fa" }}
                    />
                </motion.div>
            </motion.div>

            {/* Background Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20 pointer-events-none" />

            {/* Floating Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-primary/20 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -100, 0],
                            opacity: [0, 1, 0],
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Number.POSITIVE_INFINITY,
                            delay: Math.random() * 2,
                        }}
                    />
                ))}
            </div>
        </section>
    );
}

export const Hero = HeroContent;
