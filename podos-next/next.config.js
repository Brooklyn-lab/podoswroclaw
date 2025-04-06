const path = require("path");

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,

//   webpack(config) {
//     const rules =
//       config.module.rules.find((rule) => Array.isArray(rule.oneOf))?.oneOf ||
//       [];

//     rules.forEach((rule) => {
//       if (Array.isArray(rule.use)) {
//         rule.use.forEach((use) => {
//           if (typeof use === "object" && use?.loader?.includes("sass-loader")) {
//             const existingOptions =
//               typeof use.options === "object" ? use.options : {};
//             use.options = {
//               ...existingOptions,
//               additionalData: `@import "@styles/_globals.scss";`,
//             };
//           }
//         });
//       }
//     });

//     config.resolve.alias = {
//       ...(config.resolve.alias || {}),
//       "@styles": path.resolve(__dirname, "styles"),
//     };

//     return config;
//   },
// };

// module.exports = nextConfig;

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "app/styles")],
  },
};

module.exports = nextConfig;
