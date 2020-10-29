module.exports = {
  setupFilesAfterEnv: ["./jest.setup.js"],
  moduleNameMapper: {
    "\\.(scss|sass|css)$": "identity-obj-proxy",
  },
  // modulePathIgnorePatterns: ["src/components/r"],
  // reporters: [
  //   "default",
  //   [
  //     "./node_modules/jest-html-reporter",
  //     {
  //       pageTitle: "Test Report",
  //     },
  //   ],
  // ],
};
