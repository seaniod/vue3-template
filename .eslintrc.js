// Compatible with the following 'atom beautify' settings:
// CSS > Preserve newlines > off
// CSS > Newline between rules > off
// Vue > Default Beautifier > Prettier
// Vue > Preserve newlines > off
// Vue > Indent level > 2  = will(?) indent JS within <script> tag - but not yet
// See https://github.com/Glavin001/atom-beautify/blob/master/docs/options.md
module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
  },
  "extends": [
    "eslint:recommended",
    'plugin:vue/vue3-recommended'
  ],
  "parserOptions": {
    "ecmaVersion": 13,
    "sourceType": "module"
  },
  "plugins": [
    "vue"
  ],
  "rules": {
    "semi": ["warn", "always"],
    "no-unused-vars": "warn",
    // below: fixes atom beautify issues with <router-link>, <div>, <h2>
    // https://stackoverflow.com/questions/54603407
    'vue/singleline-html-element-content-newline': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    // below: allows multiple attributes on one line
    // https://eslint.vuejs.org/rules/max-attributes-per-line.html
    "vue/max-attributes-per-line": ["warn", {
      "singleline": 4,
      "multiline": 1
    }],
    'indent': 'off',
    "vue/html-indent": [
      "warn", 2, {
        "attribute": 1,
        "closeBracket": 0,
        "alignAttributesVertically": false,
        "ignores": []
      }
    ],
    "comma-dangle": ["error", { // https://eslint.org/docs/rules/comma-dangle
      "arrays": "ignore",
      "objects": "ignore",
      "imports": "ignore",
      "exports": "ignore",
      "functions": "ignore"
    }],
    "vue/html-self-closing": ["error", {
      "html": {
        "void": "always",
        "normal": "always",
        "component": "always"
      },
      "svg": "always",
      "math": "always"
    }]
  }
};
