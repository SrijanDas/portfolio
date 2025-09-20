"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

interface MousePosition {
    x: number;
    y: number;
}

export function MouseBubble() {
    const [mousePosition, setMousePosition] = useState<MousePosition>({
        x: 0,
        y: 0,
    });
    const [bubbleSize, setBubbleSize] = useState(20);
    const [isVisible, setIsVisible] = useState(false);
    const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);
    const previousPosition = useRef<MousePosition>({ x: 0, y: 0 });
    const velocityRef = useRef(0);
    const animationFrameRef = useRef<number>();

    useEffect(() => {
        let lastTime = Date.now();
        let hideTimeout: NodeJS.Timeout;

        const updateMousePosition = (e: MouseEvent) => {
            const currentTime = Date.now();
            const deltaTime = currentTime - lastTime;

            // Calculate velocity based on distance moved over time
            const deltaX = e.clientX - previousPosition.current.x;
            const deltaY = e.clientY - previousPosition.current.y;
            const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
            const velocity = deltaTime > 0 ? distance / deltaTime : 0;

            // Smooth velocity using exponential moving average
            velocityRef.current = velocityRef.current * 0.8 + velocity * 0.2;

            // Update positions
            setMousePosition({ x: e.clientX, y: e.clientY });
            previousPosition.current = { x: e.clientX, y: e.clientY };

            // Show bubble when mouse moves
            if (!isVisible) {
                setIsVisible(true);
            }

            // Clear existing hide timeout
            if (hideTimeout) {
                clearTimeout(hideTimeout);
            }

            // Hide bubble after 2 seconds of no movement
            hideTimeout = setTimeout(() => {
                setIsVisible(false);
            }, 2000);

            lastTime = currentTime;
        };

        const checkInteractiveElement = (e: MouseEvent) => {
            const element = document.elementFromPoint(e.clientX, e.clientY);
            if (element) {
                const isInteractive =
                    element.matches(
                        'a, button, input, textarea, select, [role="button"], [tabindex]:not([tabindex="-1"])'
                    ) ||
                    element.closest(
                        'a, button, input, textarea, select, [role="button"], [tabindex]:not([tabindex="-1"])'
                    );
                setIsHoveringInteractive(!!isInteractive);
            }
        };

        const updateBubbleSize = () => {
            // Map velocity to bubble size with much larger range
            const minSize = isHoveringInteractive ? 40 : 30;
            const maxSize = isHoveringInteractive ? 200 : 150;
            const velocityMultiplier = 100; // Increased sensitivity for more dramatic growth

            const targetSize = Math.min(
                maxSize,
                minSize + velocityRef.current * velocityMultiplier
            );

            // Smooth size transition
            setBubbleSize((prevSize) => prevSize * 0.9 + targetSize * 0.1);

            animationFrameRef.current = requestAnimationFrame(updateBubbleSize);
        };

        const handleMouseLeave = () => {
            setIsVisible(false);
        };

        const handleMouseEnter = () => {
            setIsVisible(true);
        };

        // Add event listeners
        document.addEventListener("mousemove", updateMousePosition);
        document.addEventListener("mousemove", checkInteractiveElement);
        document.addEventListener("mouseleave", handleMouseLeave);
        document.addEventListener("mouseenter", handleMouseEnter);

        // Start animation loop
        updateBubbleSize();

        return () => {
            document.removeEventListener("mousemove", updateMousePosition);
            document.removeEventListener("mousemove", checkInteractiveElement);
            document.removeEventListener("mouseleave", handleMouseLeave);
            document.removeEventListener("mouseenter", handleMouseEnter);

            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }

            if (hideTimeout) {
                clearTimeout(hideTimeout);
            }
        };
    }, [isVisible, isHoveringInteractive]);

    if (!isVisible) return null;

    return (
        <motion.div
            className="fixed pointer-events-none z-[9999] mix-blend-difference"
            style={{
                left: mousePosition.x - bubbleSize / 2,
                top: mousePosition.y - bubbleSize / 2,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{
                scale: 1,
                opacity: 0.3,
                width: bubbleSize,
                height: bubbleSize,
            }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{
                type: "spring",
                stiffness: 500,
                damping: 28,
                mass: 0.5,
            }}
        >
            <div
                className="w-full h-full rounded-full bg-white shadow-lg transition-all duration-300"
                style={{
                    background: isHoveringInteractive
                        ? `radial-gradient(circle at 30% 30%, 
                rgba(59, 130, 246, 0.4) 0%, 
                rgba(147, 51, 234, 0.3) 40%, 
                rgba(59, 130, 246, 0.2) 70%, 
                rgba(147, 51, 234, 0.1) 100%)`
                        : `radial-gradient(circle at 30% 30%, 
                rgba(255, 255, 255, 0.4) 0%, 
                rgba(255, 255, 255, 0.3) 40%, 
                rgba(255, 255, 255, 0.2) 70%, 
                rgba(255, 255, 255, 0.1) 100%)`,
                    backdropFilter: "blur(1px)",
                    border: isHoveringInteractive
                        ? "1px solid rgba(59, 130, 246, 0.2)"
                        : "1px solid rgba(255, 255, 255, 0.15)",
                }}
            />

            {/* Inner glow effect */}
            <div
                className="absolute inset-0 rounded-full transition-all duration-300"
                style={{
                    background: isHoveringInteractive
                        ? `radial-gradient(circle at 50% 50%, 
                rgba(59, 130, 246, 0.2) 0%, 
                rgba(147, 51, 234, 0.15) 50%, 
                transparent 70%)`
                        : `radial-gradient(circle at 50% 50%, 
                rgba(59, 130, 246, 0.15) 0%, 
                rgba(147, 51, 234, 0.1) 50%, 
                transparent 70%)`,
                    animation: isHoveringInteractive
                        ? "pulse 1s ease-in-out infinite"
                        : "pulse 2s ease-in-out infinite",
                }}
            />

            {/* Outer ring effect for high velocity */}
            {bubbleSize > 60 && (
                <motion.div
                    className="absolute inset-0 rounded-full border-2 border-blue-400/20"
                    initial={{ scale: 1, opacity: 0.3 }}
                    animate={{
                        scale: 1.8,
                        opacity: 0,
                    }}
                    transition={{
                        duration: 1.2,
                        repeat: Infinity,
                        ease: "easeOut",
                    }}
                />
            )}

            {/* Additional outer ring for very high velocity */}
            {bubbleSize > 100 && (
                <motion.div
                    className="absolute inset-0 rounded-full border-1 border-purple-400/15"
                    initial={{ scale: 1, opacity: 0.2 }}
                    animate={{
                        scale: 2.2,
                        opacity: 0,
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeOut",
                    }}
                />
            )}
        </motion.div>
    );
}
