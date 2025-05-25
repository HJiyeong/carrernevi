/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            animation: {
                popupModal: "popupModal 0.35s ease-out forwards",
            },
            keyframes: {
                popupModal: {
                    "0%": { opacity: "0", transform: "scale(0.8)" },
                    "100%": { opacity: "1", transform: "scale(1)" },
                },
            },
        },
    },
    plugins: [],
};
