const { execSync } = require('child_process')
const fs = require('fs')

module.exports = class ConfigGenerator {
  constructor(framework, config) {
    this.framework = framework
    this.config = config
  }

  generate() {
    switch (this.framework) {
      case '1. JavaScript':
        new VanillaConfigGenerator(this.config).generate()
        break
      case '2. React':
        new ReactConfigGenerator(this.config).generate()
        break
      case '3. Vue':
        new VueConfigGenerator(this.config).generate()
        break
      default:
        console.log('Invalid framework choice')
    }
  }
}

class VanillaConfigGenerator {
  constructor(config) {
    this.config = config
  }

  prettierConfig() {
    console.log('Initializing ESLint and Prettier setup...')

    // Step 1: Install ESLint, Prettier, and relevant plugins
    console.log('Installing dependencies...')
    execSync(
      'npm install --save-dev eslint prettier eslint-config-prettier eslint-plugin-prettier',
      { stdio: 'inherit' }
    )

    // Step 2: Create ESLint configuration file
    const eslintConfig = {
      env: {
        browser: true,
        es2021: true,
        node: true,
      },
      extends: ['eslint:recommended', 'plugin:prettier/recommended'],
      parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
      },
      rules: {
        'prettier/prettier': 'error',
      },
    }

    console.log('Creating .eslintrc.json file...')
    fs.writeFileSync('.eslintrc.json', JSON.stringify(eslintConfig, null, 2))

    // Step 3: Create Prettier configuration file
    const prettierConfig = {
      semi: true,
      singleQuote: true,
      trailingComma: 'es5',
    }

    console.log('Creating .prettierrc file...')
    fs.writeFileSync('.prettierrc', JSON.stringify(prettierConfig, null, 2))

    // Optional: Add an ignore file for ESLint and Prettier
    console.log('Creating .eslintignore and .prettierignore files...')
    const ignoreContent = 'node_modules\n'
    fs.writeFileSync('.eslintignore', ignoreContent)
    fs.writeFileSync('.prettierignore', ignoreContent)

    console.log('ESLint and Prettier setup complete.')
  }

  airBnbConfig() {
    console.log('Initializing ESLint with Airbnb configuration...')

    // Step 1: Install ESLint and Airbnb config along with peer dependencies
    console.log('Installing dependencies...')
    execSync('npx install-peerdeps --dev eslint-config-airbnb-base', {
      stdio: 'inherit',
    })
    execSync('npm install --save-dev eslint-plugin-import', {
      stdio: 'inherit',
    })

    // Step 2: Create ESLint configuration file
    const eslintConfig = {
      env: {
        browser: true,
        es2021: true,
        node: true,
      },
      extends: ['airbnb-base'],
      parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
      },
      rules: {
        // Add custom rules here, if needed
      },
    }

    console.log('Creating .eslintrc.json file...')
    fs.writeFileSync('.eslintrc.json', JSON.stringify(eslintConfig, null, 2))

    // Step 3: Optionally create an ignore file
    console.log('Creating .eslintignore file...')
    const ignoreContent = 'node_modules\n'
    fs.writeFileSync('.eslintignore', ignoreContent)

    console.log('ESLint setup with Airbnb style guide complete.')
  }

  standardConfig() {
    console.log('Initializing ESLint with Standard configuration...')

    // Step 1: Install ESLint and Standard config
    console.log('Installing dependencies...')
    execSync(
      'npm install --save-dev eslint eslint-config-standard eslint-plugin-import eslint-plugin-node eslint-plugin-promise',
      { stdio: 'inherit' }
    )

    // Step 2: Create ESLint configuration file
    const eslintConfig = {
      env: {
        browser: true,
        es2021: true,
        node: true,
      },
      extends: ['standard'],
      parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
      },
      rules: {
        // Add custom rules here if needed
      },
    }

    console.log('Creating .eslintrc.json file...')
    fs.writeFileSync('.eslintrc.json', JSON.stringify(eslintConfig, null, 2))

    // Step 3: Optionally create an ignore file
    console.log('Creating .eslintignore file...')
    const ignoreContent = 'node_modules\n'
    fs.writeFileSync('.eslintignore', ignoreContent)

    console.log('ESLint setup with Standard configuration complete.')
  }

  errorPreventionConfig() {
    console.log('Initializing ESLint for error prevention only...')

    // Step 1: Install ESLint
    console.log('Installing ESLint...')
    execSync('npm install --save-dev eslint', { stdio: 'inherit' })

    // Step 2: Create ESLint configuration file
    const eslintConfig = {
      env: {
        browser: true,
        es2021: true,
        node: true,
      },
      extends: ['eslint:recommended'], // Uses only error prevention rules
      parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
      },
      rules: {
        // Customize or override rules here if needed
      },
    }

    console.log('Creating .eslintrc.json file...')
    fs.writeFileSync('.eslintrc.json', JSON.stringify(eslintConfig, null, 2))

    // Step 3: Optionally create an ignore file
    console.log('Creating .eslintignore file...')
    const ignoreContent = 'node_modules\n'
    fs.writeFileSync('.eslintignore', ignoreContent)

    console.log('ESLint setup for error prevention only complete.')
  }

  generate() {
    switch (this.config) {
      case '1. ESLint + Prettier config':
        this.prettierConfig()
        break
      case '2. ESLint + Airbnb config':
        this.airBnbConfig()
        break
      case '3. ESLint + standard config':
        this.standardConfig()
        break
      case '4. ESLint with error prevention only':
        this.errorPreventionConfig()
        break
      default:
        console.log('Invalid configuration choice')
    }
  }
}

class ReactConfigGenerator {
  constructor(config) {
    this.config = config
  }

  prettierConfig() {
    console.log('Generating Prettier config...')
  }

  airBnbConfig() {
    console.log('Generating Airbnb config...')
  }

  standardConfig() {
    console.log('Generating standard config...')
  }

  errorPreventionConfig() {
    console.log('Generating error prevention config...')
  }

  generate() {
    switch (this.config) {
      case '1. ESLint + Prettier config':
        this.prettierConfig()
        break
      case '2. ESLint + Airbnb config':
        this.airBnbConfig()
        break
      case '3. ESLint + standard config':
        this.standardConfig()
        break
      case '4. ESLint with error prevention only':
        this.errorPreventionConfig()
        break
      default:
        console.log('Invalid configuration choice')
    }
  }
}

class VueConfigGenerator {
  constructor(config) {
    this.config = config
  }

  prettierConfig() {
    console.log('Generating Prettier config...')
  }

  airBnbConfig() {
    console.log('Generating Airbnb config...')
  }

  standardConfig() {
    console.log('Generating standard config...')
  }

  errorPreventionConfig() {
    console.log('Generating error prevention config...')
  }

  generate() {
    switch (this.config) {
      case '1. ESLint + Prettier config':
        this.prettierConfig()
        break
      case '2. ESLint + Airbnb config':
        this.airBnbConfig()
        break
      case '3. ESLint + standard config':
        this.standardConfig()
        break
      case '4. ESLint with error prevention only':
        this.errorPreventionConfig()
        break
      default:
        console.log('Invalid configuration choice')
    }
  }
}

class AngularConfigGenerator {
  constructor(config) {
    this.config = config
  }

  prettierConfig() {
    console.log('Generating Prettier config...')
  }

  airBnbConfig() {
    console.log('Generating Airbnb config...')
  }

  standardConfig() {
    console.log('Generating standard config...')
  }

  errorPreventionConfig() {
    console.log('Generating error prevention config...')
  }

  generate() {
    switch (this.config) {
      case '1. ESLint + Prettier config':
        this.prettierConfig()
        break
      case '2. ESLint + Airbnb config':
        this.airBnbConfig()
        break
      case '3. ESLint + standard config':
        this.standardConfig()
        break
      case '4. ESLint with error prevention only':
        this.errorPreventionConfig()
        break
      default:
        console.log('Invalid configuration choice')
    }
  }
}
