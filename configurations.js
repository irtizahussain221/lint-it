exports.VanillaJSConfigs = {
  EsLintWithPrettierConfig: {
    env: {
      browser: true,
      es2021: true,
      node: true
    },
    extends: ['eslint:recommended', 'plugin:prettier/recommended'],
    parserOptions: {
      ecmaVersion: 12,
      sourceType: 'module'
    },
    rules: {
      'prettier/prettier': 'error'
    },
    ignores: ['node_modules', 'dist']
  },

  PrettierConfig: {
    semi: true,
    singleQuote: true,
    trailingComma: 'es5'
  },

  EslintAirbnbConfig: {
    env: {
      browser: true,
      es2021: true,
      node: true
    },
    extends: ['airbnb-base'],
    parserOptions: {
      ecmaVersion: 12,
      sourceType: 'module'
    },
    rules: {
      // Add custom rules here, if needed
    },
    ignores: ['node_modules', 'dist']
  },

  EslintStandardConfig: {
    env: {
      browser: true,
      es2021: true,
      node: true
    },
    extends: ['standard'],
    parserOptions: {
      ecmaVersion: 12,
      sourceType: 'module'
    },
    rules: {
      // Add custom rules here if needed
    },
    ignores: ['node_modules', 'dist']
  },

  EslintWithErrorPreventionConfig: {
    env: {
      browser: true,
      es2021: true,
      node: true
    },
    extends: ['eslint:recommended'], // Uses only error prevention rules
    parserOptions: {
      ecmaVersion: 12,
      sourceType: 'module'
    },
    rules: {
      // Customize or override rules here if needed
    },
    ignores: ['node_modules', 'dist']
  }
}

exports.ReactConfigs = {
  EsLintWithPrettierConfig: {
    env: {
      browser: true,
      es2021: true,
      node: true
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:prettier/recommended'
    ],
    parserOptions: {
      ecmaVersion: 12,
      sourceType: 'module'
    },
    plugins: ['react', 'react-hooks'],
    rules: {
      'prettier/prettier': 'error'
    },
    ignores: ['node_modules', 'dist']
  },

  PrettierConfig: {
    semi: true,
    singleQuote: true,
    trailingComma: 'es5'
  },

  EslintAirbnbConfig: {
    env: {
      browser: true,
      es2021: true,
      node: true
    },
    extends: ['airbnb', 'plugin:react/recommended'],
    parserOptions: {
      ecmaVersion: 12,
      sourceType: 'module'
    },
    plugins: ['react', 'react-hooks'],
    rules: {
      // Add custom rules if needed
    },
    ignores: ['node_modules', 'dist']
  },
  EslintStandardConfig: {
    env: {
      browser: true,
      es2021: true,
      node: true
    },
    extends: ['standard', 'plugin:react/recommended'],
    parserOptions: {
      ecmaVersion: 12,
      sourceType: 'module'
    },
    plugins: ['react', 'react-hooks'],
    rules: {
      // Add custom rules if needed
    },
    ignores: ['node_modules', 'dist']
  },

  EslintWithErrorPreventionConfig: {
    env: {
      browser: true,
      es2021: true,
      node: true
    },
    extends: ['eslint:recommended', 'plugin:react/recommended'],
    parserOptions: {
      ecmaVersion: 12,
      sourceType: 'module'
    },
    plugins: ['react', 'react-hooks'],
    rules: {
      // Add custom rules if needed
    },
    ignores: ['node_modules', 'dist']
  }
}

exports.VueConfigs = {
  EsLintWithPrettierConfig: {
    env: {
      browser: true,
      es2021: true,
      node: true
    },
    extends: [
      'eslint:recommended',
      'plugin:vue/vue3-recommended',
      'plugin:prettier/recommended'
    ],
    parserOptions: {
      ecmaVersion: 12,
      sourceType: 'module'
    },
    plugins: ['vue'],
    rules: {
      'prettier/prettier': 'error'
    },
    ignores: ['node_modules', 'dist']
  },

  PrettierConfig: {
    semi: true,
    singleQuote: true,
    trailingComma: 'es5'
  },

  EslintAirbnbConfig: {
    env: {
      browser: true,
      es2021: true,
      node: true
    },
    extends: ['airbnb-base', 'plugin:vue/vue3-recommended'],
    parserOptions: {
      ecmaVersion: 12,
      sourceType: 'module'
    },
    plugins: ['vue'],
    rules: {
      // Add custom rules if needed
    },
    ignores: ['node_modules', 'dist']
  },

  EslintStandardConfig: {
    env: {
      browser: true,
      es2021: true,
      node: true
    },
    extends: ['standard', 'plugin:vue/vue3-recommended'],
    parserOptions: {
      ecmaVersion: 12,
      sourceType: 'module'
    },
    plugins: ['vue'],
    rules: {
      // Add custom rules if needed
    },
    ignores: ['node_modules', 'dist']
  },

  EslintWithErrorPreventionConfig: {
    env: {
      browser: true,
      es2021: true,
      node: true
    },
    extends: ['eslint:recommended', 'plugin:vue/vue3-recommended'],
    parserOptions: {
      ecmaVersion: 12,
      sourceType: 'module'
    },
    plugins: ['vue'],
    rules: {
      // Add custom rules if needed
    },
    ignores: ['node_modules', 'dist']
  }
}
