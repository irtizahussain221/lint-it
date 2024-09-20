const readline = require('readline')
const ConfigGenerator = require('./config-generator')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

let frameworkChosen = ''
const frameworkChoices = ['1. JavaScript', '2. React', '3. Vue']

let configurationChosen = ''
const eslintConfigurationChoices = [
  '1. ESLint + Prettier config',
  '2. ESLint + Airbnb config',
  '3. ESLint + standard config',
  '4. ESLint with error prevention only'
]

const askAboutEslintConfig = () => {
  console.log('Please select one of the following options:')
  eslintConfigurationChoices.forEach((choice) => console.log(choice))

  rl.question('Enter the number of your choice: ', (answer) => {
    const choiceIndex = parseInt(answer, 10) - 1

    if (choiceIndex >= 0 && choiceIndex < eslintConfigurationChoices.length) {
      configurationChosen = eslintConfigurationChoices[choiceIndex]

      new ConfigGenerator(frameworkChosen, configurationChosen).generate()
    } else {
      console.log('Invalid choice. Please select a number between 1 and 3.')
    }

    rl.close()
  })
}
const askAboutFramework = () => {
  console.log('Please select one of the following options:')
  frameworkChoices.forEach((choice) => console.log(choice))

  rl.question('Enter the number of your choice: ', (answer) => {
    const choiceIndex = parseInt(answer, 10) - 1

    if (choiceIndex >= 0 && choiceIndex < frameworkChoices.length) {
      frameworkChosen = frameworkChoices[choiceIndex]

      askAboutEslintConfig()
    } else {
      console.log('Invalid choice. Please select a number between 1 and 3.')
      rl.close()
    }
  })
}

// Start asking user the questions
askAboutFramework()

// TODO
// Lint on save
// Delete existing files, packages, related to eslint and prettier
// Test all sorts of configurations and unit tests if possible
// Add a lint command in package.json
// Add some pretty standard rules
