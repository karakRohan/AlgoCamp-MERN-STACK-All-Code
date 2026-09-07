// export default {
//   plugins: {
//     tailwindcss: {},
//     autoprefixer: {},
//   },
// }

// // postcss.config.js
module.exports = {
  plugins: [
    require('@tailwindcss/postcss')({
      config: './tailwind.config.js',
    }),
    require('autoprefixer'),
  ],
} 

// export default {
//   plugins: {
//     tailwindcss: {},
//     autoprefixer: {},
//   },
// };