const {
  preprocessPackageJson,
  createEslintConfig,
  createPrettierConfig,
  installDependencies
} = require('./utils')
const {
  VanillaJSConfigs,
  ReactConfigs,
  VueConfigs
} = require('./configurations')

module.exports = class ConfigGenerator {
  constructor (framework, config) {
    this.framework = framework
    this.config = config
  }

  generate () {
    preprocessPackageJson()
    console.log('Initializing ESLint setup...')
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

    console.log('ESLint setup complete.')
  }
}

class VanillaConfigGenerator {
  constructor (config) {
    this.config = config
  }

  prettierConfig () {
    installDependencies(
      'npm install --save-dev eslint prettier eslint-config-prettier eslint-plugin-prettier',
      { stdio: 'inherit' }
    )

    createEslintConfig(VanillaJSConfigs.EsLintWithPrettierConfig)
    createPrettierConfig(VanillaJSConfigs.PrettierConfig)
  }

  airBnbConfig () {
    installDependencies('npm install --save-dev eslint eslint-config-airbnb-base eslint-plugin-import')
    installDependencies('npm install globals @eslint/js @eslint/eslintrc')
    createEslintConfig(VanillaJSConfigs.EslintAirbnbConfig)
  }

  standardConfig () {
    installDependencies(
      'npm install --save-dev eslint eslint-config-standard eslint-plugin-import eslint-plugin-node eslint-plugin-promise'
    )

    createEslintConfig(VanillaJSConfigs.EslintStandardConfig)
  }

  errorPreventionConfig () {
    installDependencies('npm install --save-dev eslint')

    createEslintConfig(VanillaJSConfigs.EslintWithErrorPreventionConfig)
  }

  generate () {
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
  constructor (config) {
    this.config = config
  }

  prettierConfig () {
    installDependencies(
      'npm install --save-dev eslint prettier eslint-config-prettier eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks @eslint/compat'
    )
    createEslintConfig(ReactConfigs.EsLintWithPrettierConfig)
    createPrettierConfig(ReactConfigs.PrettierConfig)
  }

  airBnbConfig () {
    installDependencies('npx install-peerdeps --dev eslint-config-airbnb')
    installDependencies(
      'npm install --save-dev eslint-plugin-import eslint-plugin-react eslint-plugin-react-hooks'
    )
    createEslintConfig(ReactConfigs.EslintAirbnbConfig)
  }

  standardConfig () {
    installDependencies(
      'npm install --save-dev eslint eslint-config-standard eslint-plugin-import eslint-plugin-node eslint-plugin-promise eslint-plugin-react eslint-plugin-react-hooks @eslint/compat'
    )
    createEslintConfig(ReactConfigs.EslintStandardConfig)
  }

  errorPreventionConfig () {
    installDependencies(
      'npm install --save-dev eslint eslint-plugin-react eslint-plugin-react-hooks @eslint/compat'
    )
    createEslintConfig(ReactConfigs.EslintWithErrorPreventionConfig)
  }

  generate () {
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
  constructor (config) {
    this.config = config
  }

  prettierConfig () {
    installDependencies(
      'npm install --save-dev eslint prettier eslint-config-prettier eslint-plugin-prettier eslint-plugin-vue'
    )
    createEslintConfig(VueConfigs.EsLintWithPrettierConfig)
    createPrettierConfig(VueConfigs.PrettierConfig)
  }

  airBnbConfig () {
    installDependencies('npx install-peerdeps --dev eslint-config-airbnb-base')
    installDependencies(
      'npm install --save-dev eslint-plugin-vue eslint-plugin-import'
    )
    createEslintConfig(VueConfigs.EslintAirbnbConfig)
  }

  standardConfig () {
    installDependencies(
      'npm install --save-dev eslint eslint-config-standard eslint-plugin-vue eslint-plugin-import eslint-plugin-node eslint-plugin-promise'
    )
    createEslintConfig(VueConfigs.EslintStandardConfig)
  }

  errorPreventionConfig () {
    installDependencies('npm install --save-dev eslint eslint-plugin-vue')
    createEslintConfig(VueConfigs.EslintWithErrorPreventionConfig)
  }

  generate () {
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
