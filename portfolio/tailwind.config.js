/** @type {import('tailwindcss').Config} */
module.exports = {
     darkMode: "class",
     content: [
     "./src/**/*.{js,jsx,ts,tsx}",
     "./app/**/*.{js,jsx,ts,tsx}",
     "./components/**/*.{js,jsx,ts,tsx}",
     ],
     theme: {
          extend: {
               colors: {
                    background: "var(--color-background)",
                    foreground: "var(--color-foreground)",
                    border: "var(--color-border)",
                    ring: "var(--color-ring)",
                    input: "var(--color-input)",
                    primary: "var(--color-primary)",
                    "primary-foreground": "var(--color-primary-foreground)",
               },

               fontFamily: {
                    sans: ["var(--font-sans)", "ui-sans-serif", "system-ui"],
                    mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular"],
               },

               borderRadius: {
                    sm: "var(--radius-sm)",
                    md: "var(--radius-md)",
                    lg: "var(--radius-lg)",
                    xl: "var(--radius-xl)",
               },
          },
     },
     plugins: [],
};
