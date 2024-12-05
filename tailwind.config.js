/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // Enable dark mode
  theme: {
    extend: {
      colors: {
        primary: "#8A2BE2", // Blue Violet (Use for primary buttons and highlights)
        secondary: "#50E3C2", // Teal (Use for success messages and notifications)
        accent: "#F5A623", // Orange (Use for attention-grabbing elements like notifications)
        background: "#FFFFFF", // White (Use for the main background)
        text: "#2C3E50", // Midnight Blue (Use for primary text and icons)
        border: "#DDE6E8", // Very Light Grey (Use for borders and dividers)
        success: "#27AE60", // Emerald Green (Use for positive actions and messages)
        warning: "#F39C12", // Sunflower Yellow (Use for warnings and important notices)
        error: "#E74C3C", // Alizarin (Use for errors and critical alerts)
        highlight: "#FFCE00", // Bright Yellow (Use for special highlights and important elements)

        darkPrimary: "#4B0082", // Indigo (Use for primary background in dark mode)
        darkSecondary: "#16A085", // Green Sea (Use for success messages and notifications in dark mode)
        darkAccent: "#F39C12", // Sunflower Yellow (Use for attention-grabbing elements like notifications in dark mode)
        darkBackground: "#2C3E50", // Midnight Blue (Use for the main background in dark mode)
        darkText: "#ECF0F1", // Clouds (Use for primary text and icons in dark mode)
        darkOnHover: "#34495E", // Wet Asphalt (Use for hover states on buttons and links in dark mode)
        darkBorder: "#95A5A6", // Concrete (Use for borders and dividers in dark mode)
        darkSuccess: "#1ABC9C", // Aqua (Use for positive actions and messages in dark mode)
        darkWarning: "#F39C12", // Sunflower Yellow (Use for warnings and important notices in dark mode)
        darkError: "#E74C3C", // Alizarin (Use for errors and critical alerts in dark mode)
        darkHighlight: "#FFCE00", // Bright Yellow (Use for special highlights and important elements in dark mode)
      },
      fontSize: {
        cXS: ".75rem",
        cSM: ".875rem",
        cMD: "1rem",
        cLG: "1.125rem",
        cXL: "1.25rem",
        c2XL: "1.5rem",
        c3XL: "1.875rem",
        c4XL: "2.25rem",
        C5XL: "3rem",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        fadeOut: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
        slideIn: {
          "0%": { transform: "translateX(100%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        slideOut: {
          "0%": { transform: "translateX(10%)", opacity: 1 },
          "100%": { transform: "translateX(100%)", opacity: 0 },
        },
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in-out",
        fadeOut: "fadeOut 1s ease-in-out",
        slideIn: "slideIn 0.4s ease-out",
        slideOut: "slideOut 0.4s ease-out",
      },
    },
  },
  plugins: [],
};
