/**
 * @see https://prettier.io/docs/configuration
 * TODO migrate to TS when node lts supports it without flags
 * @type {import("prettier").Config}
 */
const config = {
  plugins: ["prettier-plugin-sort-json"],

  // sort packageRule lists
  jsonRecursiveSort: true,
};

export default config;
