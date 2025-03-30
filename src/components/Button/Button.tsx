"use client";

import { useState, useRef, useEffect } from "react";
import ReactiveButton from "reactive-button";
import { motion } from "framer-motion";

type ButtonProps = {
    onClick: (e: React.MouseEvent<Element, MouseEvent>) => Promise<void>;
    className?: string;
    children: string;
    variant?: "primary" | "secondary" | "danger";
};

const Button: React.FC<ButtonProps> = ({ 
    onClick, 
    className = "", 
    children,
    variant = "primary" 
}) => {
    const [state, setState] = useState("idle");
    const [glarePosition, setGlarePosition] = useState({ x: 0, y: 0 });
    const buttonRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!buttonRef.current) return;
        
        const rect = buttonRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        setGlarePosition({ x, y });
    };

    const handleMouseLeave = () => {
        setGlarePosition({ x: 0, y: 0 });
    };

    const onClickHandler = async (e: React.MouseEvent) => {
        setState("loading");
        await onClick(e);
        setState("success");
        setTimeout(() => setState("idle"), 1500);
    };

    const getButtonColors = () => {
        switch (variant) {
            case "primary":
                return "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700";
            case "secondary":
                return "bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700";
            case "danger":
                return "bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700";
            default:
                return "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700";
        }
    };

    return (
        <motion.div
            ref={buttonRef}
            className="relative"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {/* Glare Effect */}
            <div
                className="absolute inset-0 overflow-hidden rounded-lg pointer-events-none"
                style={{
                    opacity: glarePosition.x ? 0.15 : 0,
                    transition: "opacity 0.3s ease",
                }}
            >
                <div
                    className="absolute w-32 h-32 bg-white blur-xl rounded-full -translate-x-1/2 -translate-y-1/2"
                    style={{
                        left: glarePosition.x,
                        top: glarePosition.y,
                        transition: glarePosition.x ? "none" : "all 0.3s ease",
                    }}
                />
            </div>

            {/* Button Content */}
            <ReactiveButton
                buttonState={state}
                idleText={children}
                loadingText={
                    <div className="flex items-center space-x-2">
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                            <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                            />
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                        </svg>
                        <span>Processing</span>
                    </div>
                }
                successText={
                    <div className="flex items-center space-x-2">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Complete</span>
                    </div>
                }
                onClick={onClickHandler}
                className={`
                    relative overflow-hidden rounded-lg px-6 py-3 text-sm font-medium text-white shadow-lg
                    transition-all duration-300 ease-out
                    ${getButtonColors()}
                    ${className}
                `}
                shadow
                rounded
            />
        </motion.div>
    );
};

export default Button;

