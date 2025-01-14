import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        secondary: "var(--secondary)", 
        accent: "var(--accent)",
        pepe: {
          green: "#3ED54B",
          yellow: "#FFE162",
          red: "#FF6B6B",
          blue: "#4ECDC4",
        }
      },
      animation: {
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'spin-slow': 'spin 3s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
        'shake': 'shake 0.5s infinite',
        'pepe-dance': 'pepeDance 1s infinite',
        'coin-flip': 'coinFlip 1s ease-in-out',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-2px)' },
          '75%': { transform: 'translateX(2px)' },
        },
        pepeDance: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '25%': { transform: 'translateY(-5px) rotate(-5deg)' },
          '75%': { transform: 'translateY(5px) rotate(5deg)' },
        },
        coinFlip: {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(360deg)' },
        }
      }
    },
  },
  plugins: [],
} satisfies Config;
