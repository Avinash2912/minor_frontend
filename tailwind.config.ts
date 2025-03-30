import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            keyframes: {
                spotlight: {
                    "0%": {
                        opacity: "0",
                        transform: "translate(-72%, -62%) scale(0.5)",
                    },
                    "100%": {
                        opacity: "1",
                        transform: "translate(-50%, -40%) scale(1)",
                    },
                },
                gradient: {
                    "0%, 100%": {
                        backgroundPosition: "0% 50%",
                    },
                    "50%": {
                        backgroundPosition: "100% 50%",
                    },
                },
                blob: {
                    "0%, 100%": {
                        transform: "translate(0, 0) scale(1)",
                    },
                    "25%": {
                        transform: "translate(20px, -30px) scale(1.1)",
                    },
                    "50%": {
                        transform: "translate(-20px, 20px) scale(0.9)",
                    },
                    "75%": {
                        transform: "translate(-40px, -20px) scale(1.05)",
                    },
                },
            },
            animation: {
                spotlight: "spotlight 2s ease .75s 1 forwards",
                gradient: "gradient 15s ease infinite",
                blob: "blob 7s infinite",
            },
        },
    },
    plugins: [require("@tailwindcss/forms")],
};
export default config;
