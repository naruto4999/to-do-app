module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        "todo-header-img": "url('/src/todolist.jpg')",
      })
    },
  },
  variants: {
    extend: {
      borderWidth: ['hover', 'focus', 'focus-within'],
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      useFormClasses: true,
    })
  ],
};
