const path = require('path');

module.exports = {
  plugins: {
    'postcss-import': {
      resolve(id, basedir) {
        // Risolvi @artivism/* dal root node_modules
        if (id.startsWith('@artivism/')) {
          return path.resolve(__dirname, '../../node_modules', id.replace('/css', '/dist/index.css'));
        }
        return id;
      }
    },
    '@tailwindcss/postcss': {},
  },
}
