module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    borderWidth: {
      DEFAULT: "1px",
      3: "3px",
      2: "2px",
    },
    fontSize: {
      sm: ["14px", "18px"],
      base: ["16px", "20px"],
      lg: ["18px", "28px"],
      xl: ["22px", "30px"],
      "2xl": ["24px", "30px"],
      "3xl": ["32px", "40px"],
      "4xl": ["40px", "50px"],
      "6xl": ["56px", "70px"],
      "8xl": ["64px", "75px"],
    },
    extend: {
      zIndex: {
        "-10": "-10",
      },
      backgroundImage: {
        noise: "url('../public/noise.svg')",
        "select-icon": "url('../public/icons/arrow.svg')",
        "radio-icon": "url('../public/icons/radio-background.svg')",
        "checkbox-icon": "url('../public/icons/checkbox-checkmark.svg')",
        "hero-section": "url('../public/hero-background.svg')",
        "hero-wave": "url('../public/hero-wave.svg')",
        "cta-background": "url('../public/cta-background.svg')",
        "cta-background-mobile": "url('../public/cta-background-mobile.svg')",
        "building-experience-background":
          "url('../public/building-experience-background.svg')",
        "cta-price-estimation-background":
          "url('../public/cta-price-estimation-background.svg')",
        "cta-price-estimation-background-mobile":
          "url('../public/cta-price-estimation-background-mobile.svg')",
        "workflow-section": "url('../public/workflow-background.svg')",
        "avatar-background": "url('../public/avatar-background.svg')",
        "our-works": "url('../public/our-works.svg')",
        "about-us": "url('../public/about-us.svg')",
        solution:
          "url('../public/puzzle.png'), url('../public/puzzle-buddy.png')",
        "how-we-work": "url('../public/how-we-work-background.svg')",
        "how-we-work-buddy": "url('../public/how-we-work-buddy.svg')",
        "how-we-work-services": "url('../public/how-we-work-services.svg')",
        "mobile-apps-background": "url('../public/mobile-apps-background.svg')",
        "project-timeline-mobile": "url('../public/mvp-process-mobile.svg')",
        benefits: "url('../public/benefits-background.svg')",
        dots: "url('../public/dots-background.svg')",
        hearth: "url('../public/hearth.svg')",
        "project-timeline": "url('../public/project-timeline-background.svg')",
        "dark-gradient":
          "linear-gradient(180deg, rgba(0, 0, 0, 0) 2.23%, rgba(0, 0, 0, 0.335) 42.46%, rgba(0, 0, 0, 0.5762) 74.54%, rgba(0, 0, 0, 0.67) 100%);",
      },
      padding: {
        8: "32px",
      },
    },
    screens: {
      lg: "1184px",
    },
    colors: {
      orange: "#F94E1E",
      "pale-orange": "#FEEDE9",
      red: "#FF756C",
      "pale-red": "#FFF2F1",
      beige: "#FFFAF6",
      yellow: "#FFD27C",
      white: "#FFFFFF",
      "light-black": "#323232",
      darkGray: "#767676",
      gray: "#5c5c5c",
      lightGray: "#C6C5C8",
      black: "#070323",
      green: "#9FCA78",
      babyBlue: "#B6EBE8",
      transparent: "transparent",
    },
    fontFamily: {
      lato: ["Lato", "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
