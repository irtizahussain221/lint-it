const { execSync } = require('child_process')
const fs = require('fs')
const { preprocessPackageJson } = require('./utils')
const {VanillaJSConfigs, ReactConfigs, VueConfigs}  = require('./configurations')

module.exports = class ConfigGenerator {
  constructor(framework, config) {
    this.framework = framework
    this.config = config
  }

  generate() {
    preprocessPackageJson()

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

    console.log('Installing dependencies...')
    execSync(
      'npm install --save-dev eslint prettier eslint-config-prettier eslint-plugin-prettier',
      { stdio: 'inherit' }
    )

    const eslintConfig = VanillaJSConfigs.EsLintWithPrettierConfig

    console.log('Creating .eslintrc.json file...')
    fs.writeFileSync('.eslintrc.json', JSON.stringify(eslintConfig, null, 2))

    const prettierConfig = VanillaJSConfigs.PrettierConfig

    console.log('Creating .prettierrc file...')
    fs.writeFileSync('.prettierrc', JSON.stringify(prettierConfig, null, 2))

    console.log('Creating .eslintignore and .prettierignore files...')
    const ignoreContent = 'node_modules\n'
    fs.writeFileSync('.eslintignore', ignoreContent)
    fs.writeFileSync('.prettierignore', ignoreContent)

    console.log('ESLint and Prettier setup complete.')
  }

  airBnbConfig() {
    console.log('Initializing ESLint with Airbnb configuration...')

    console.log('Installing dependencies...')
    execSync('npx install-peerdeps --dev eslint-config-airbnb-base', {
      stdio: 'inherit',
    })
    execSync('npm install --save-dev eslint-plugin-import', {
      stdio: 'inherit',
    })

    const eslintConfig = VanillaJSConfigs.EslintAirbnbConfig

    console.log('Creating .eslintrc.json file...')
    fs.writeFileSync('.eslintrc.json', JSON.stringify(eslintConfig, null, 2))

    console.log('Creating .eslintignore file...')
    const ignoreContent = 'node_modules\n'
    fs.writeFileSync('.eslintignore', ignoreContent)

    console.log('ESLint setup with Airbnb style guide complete.')
  }

  standardConfig() {
    console.log('Initializing ESLint with Standard configuration...')

    console.log('Installing dependencies...')
    execSync(
      'npm install --save-dev eslint eslint-config-standard eslint-plugin-import eslint-plugin-node eslint-plugin-promise',
      { stdio: 'inherit' }
    )

    const eslintConfig = VanillaJSConfigs.EslintStandardConfig

    console.log('Creating .eslintrc.json file...')
    fs.writeFileSync('.eslintrc.json', JSON.stringify(eslintConfig, null, 2))

    console.log('Creating .eslintignore file...')
    const ignoreContent = 'node_modules\n'
    fs.writeFileSync('.eslintignore', ignoreContent)

    console.log('ESLint setup with Standard configuration complete.')
  }

  errorPreventionConfig() {
    console.log('Initializing ESLint for error prevention only...')

    console.log('Installing ESLint...')
    execSync('npm install --save-dev eslint', { stdio: 'inherit' })

    const eslintConfig = VanillaJSConfigs.EslintWithErrorPreventionConfig

    console.log('Creating .eslintrc.json file...')
    fs.writeFileSync('.eslintrc.json', JSON.stringify(eslintConfig, null, 2))

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
    console.log('Initializing ESLint and Prettier setup for React...')

    console.log('Installing dependencies...')
    execSync(
      'npm install --save-dev eslint prettier eslint-config-prettier eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks',
      { stdio: 'inherit' }
    )

    const eslintConfig = ReactConfigs.EsLintWithPrettierConfig

    console.log('Creating .eslintrc.json file...')
    fs.writeFileSync('.eslintrc.json', JSON.stringify(eslintConfig, null, 2))

    const prettierConfig = ReactConfigs.PrettierConfig

    console.log('Creating .prettierrc file...')
    fs.writeFileSync('.prettierrc', JSON.stringify(prettierConfig, null, 2))

    console.log('Creating .eslintignore and .prettierignore files...')
    const ignoreContent = 'node_modules\n'
    fs.writeFileSync('.eslintignore', ignoreContent)
    fs.writeFileSync('.prettierignore', ignoreContent)

    console.log('ESLint and Prettier setup complete for React.')
  }

  airBnbConfig() {
    console.log('Initializing ESLint with Airbnb configuration for React...')

    console.log('Installing dependencies...')
    execSync('npx install-peerdeps --dev eslint-config-airbnb', {
      stdio: 'inherit',
    })
    execSync(
      'npm install --save-dev eslint-plugin-import eslint-plugin-react eslint-plugin-react-hooks',
      {
        stdio: 'inherit',
      }
    )

    const eslintConfig = ReactConfigs.EslintAirbnbConfig
    console.log('Creating .eslintrc.json file...')
    fs.writeFileSync('.eslintrc.json', JSON.stringify(eslintConfig, null, 2))

    console.log('ESLint setup with Airbnb style guide complete for React.')
  }

  standardConfig() {
    console.log('Initializing ESLint with Standard configuration for React...')

    console.log('Installing dependencies...')
    execSync(
      'npm install --save-dev eslint eslint-config-standard eslint-plugin-import eslint-plugin-node eslint-plugin-promise eslint-plugin-react eslint-plugin-react-hooks',
      { stdio: 'inherit' }
    )

    const eslintConfig = ReactConfigs.EslintStandardConfig

    console.log('Creating .eslintrc.json file...')
    fs.writeFileSync('.eslintrc.json', JSON.stringify(eslintConfig, null, 2))

    console.log('ESLint setup with Standard configuration complete for React.')
  }

  errorPreventionConfig() {
    console.log('Initializing ESLint for error prevention only for React...')

    console.log('Installing ESLint...')
    execSync(
      'npm install --save-dev eslint eslint-plugin-react eslint-plugin-react-hooks',
      { stdio: 'inherit' }
    )

    const eslintConfig = ReactConfigs.EslintWithErrorPreventionConfig

    console.log('Creating .eslintrc.json file...')
    fs.writeFileSync('.eslintrc.json', JSON.stringify(eslintConfig, null, 2))

    console.log('ESLint setup for error prevention only complete for React.')
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
    console.log('Initializing ESLint and Prettier setup for Vue...')

    console.log('Installing dependencies...')
    execSync(
      'npm install --save-dev eslint prettier eslint-config-prettier eslint-plugin-prettier eslint-plugin-vue',
      { stdio: 'inherit' }
    )

    const eslintConfig = VueConfigs.EsLintWithPrettierConfig

    console.log('Creating .eslintrc.json file...')
    fs.writeFileSync('.eslintrc.json', JSON.stringify(eslintConfig, null, 2))

    const prettierConfig = VueConfigs.PrettierConfig

    console.log('Creating .prettierrc file...')
    fs.writeFileSync('.prettierrc', JSON.stringify(prettierConfig, null, 2))

    console.log('ESLint and Prettier setup complete for Vue.')
  }

  airBnbConfig() {
    console.log('Initializing ESLint with Airbnb configuration for Vue...')

    console.log('Installing dependencies...')
    execSync('npx install-peerdeps --dev eslint-config-airbnb-base', {
      stdio: 'inherit',
    })
    execSync('npm install --save-dev eslint-plugin-vue eslint-plugin-import', {
      stdio: 'inherit',
    })

    const eslintConfig = VueConfigs.EslintAirbnbConfig

    console.log('Creating .eslintrc.json file...')
    fs.writeFileSync('.eslintrc.json', JSON.stringify(eslintConfig, null, 2))

    console.log('ESLint setup with Airbnb style guide complete for Vue.')
  }

  standardConfig() {
    console.log('Initializing ESLint with Standard configuration for Vue...')

    console.log('Installing dependencies...')
    execSync(
      'npm install --save-dev eslint eslint-config-standard eslint-plugin-vue eslint-plugin-import eslint-plugin-node eslint-plugin-promise',
      { stdio: 'inherit' }
    )

    const eslintConfig = VueConfigs.EslintStandardConfig
    console.log('Creating .eslintrc.json file...')
    fs.writeFileSync('.eslintrc.json', JSON.stringify(eslintConfig, null, 2))

    console.log('ESLint setup with Standard configuration complete for Vue.')
  }

  errorPreventionConfig() {
    console.log('Initializing ESLint for error prevention only for Vue...')

    console.log('Installing ESLint...')
    execSync('npm install --save-dev eslint eslint-plugin-vue', {
      stdio: 'inherit',
    })

    const eslintConfig = VueConfigs.EslintWithErrorPreventionConfig

    console.log('Creating .eslintrc.json file...')
    fs.writeFileSync('.eslintrc.json', JSON.stringify(eslintConfig, null, 2))

    console.log('ESLint setup for error prevention only complete for Vue.')
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
