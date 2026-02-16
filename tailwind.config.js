/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        background: "#1A1A1A",
        textPrimary: "#F0ECE2",
        textBody: "#DCD7C9",
        textSecondary: "#A8A8A8",
        accent: "#9381FF",
        card: "#222222",
        divider: "#2A2A2A",
      },
      fontFamily: {
        sans: ["GoogleSansRegular"],
        sansSemi: ["GoogleSansSemiBold"],
        sansBold: ["GoogleSansBold"],
        serif: ["LibreRegular"],
        serifBold: ["LibreBold"],
        serifItalic: ["LibreItalic"],
      },
    },
  },
  plugins: [],
}