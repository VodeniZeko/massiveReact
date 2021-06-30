module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: () => ({
        couple:
          "url('https://media.istockphoto.com/photos/senior-couple-relaxing-at-home-picture-id1152602619')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
