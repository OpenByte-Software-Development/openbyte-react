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
        "how-we-work": "url('../public/how-we-work-background.svg')",
        "how-we-work-buddy": "url('../public/how-we-work-buddy.svg')",
        "how-we-work-services": "url('../public/how-we-work-services.svg')",
        "mobile-apps-background": "url('../public/mobile-apps-background.svg')",
        benefits: "url('../public/benefits-background.svg')",
        dots: "url('../public/dots-background.svg')",
        hearth: "url('../public/hearth.svg')",
        "project-timeline": "url('../public/project-timeline-background.svg')",
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
      raleway: ["sans-serif", "Raleway"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
