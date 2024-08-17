import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                "p-red": "rgba(var(--theme-red))",
            },
            screens: {
                xs: { max: "35.9375rem" },
            },
        },
    },
    plugins: [],
};
export default config;
