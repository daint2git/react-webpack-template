const PLUGINS = [
  'postcss-custom-selectors',
  'postcss-sassy-mixins',
  'postcss-nested',
  'postcss-partial-import',
  'postcss-simple-vars',
  'autoprefixer',
]

module.exports = {
  plugins: PLUGINS.map(plugin => require(plugin)),
}
