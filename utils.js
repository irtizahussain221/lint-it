const fs = require('fs');
const { execSync } = require('child_process');
const path = require('path');

function getPackageJson() {
  // Get the current working directory
  const currentDirectory = process.cwd();

  // Build the path to the package.json file
  const packageJsonPath = path.join(currentDirectory, 'package.json');

  // Check if package.json exists
  if (fs.existsSync(packageJsonPath)) {
    // Read the package.json file
    const packageJson = fs.readFileSync(packageJsonPath, 'utf8');
    return JSON.parse(packageJson);
  }
  console.error('Error: package.json not found in the current directory');
  process.exit(1);
}

function removeEslintPackages() {
  const packageJson = getPackageJson();
  const eslintPackages = [
    ...Object.keys(packageJson.devDependencies || {}).filter(
      (packageName) =>
        packageName.includes('eslint') || packageName.includes('globals')
    ),
    ...Object.keys(packageJson.dependencies || {}).filter(
      (packageName) =>
        packageName.includes('eslint') || packageName.includes('globals')
    ),
  ];

  eslintPackages.forEach((packageName) => {
    delete packageJson.devDependencies[packageName];
  });

  fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2));
}

function removePrettierPackages() {
  const packageJson = getPackageJson();
  const prettierPackages = Object.keys(
    packageJson.devDependencies || {}
  ).filter((packageName) => packageName.includes('prettier'));

  prettierPackages.forEach((packageName) => {
    delete packageJson.devDependencies[packageName];
  });

  fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2));
}

function removeEslintConfigFiles() {
  const currentDirectory = process.cwd();

  const eslintFiles = [
    '.eslintrc',
    '.eslintrc.js',
    '.eslintrc.json',
    '.eslintrc.yml',
    '.eslintrc.yaml',
    '.eslintignore',
    'eslint.config.js',
  ];

  eslintFiles.forEach((eslintFile) => {
    const filePath = path.join(currentDirectory, eslintFile);

    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }
  });
}

function removePrettierConfigFiles() {
  const currentDirectory = process.cwd();

  const prettierFiles = [
    '.prettierrc',
    '.prettierrc.js',
    '.prettierrc.json',
    '.prettierrc.yml',
    '.prettierrc.yaml',
    'prettier.config.js',
    '.prettierrc.toml',
    '.prettierignore',
  ];

  prettierFiles.forEach((prettierFile) => {
    const filePath = path.join(currentDirectory, prettierFile);

    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }
  });
}

function removeEslintConfigFromPackageJson() {
  const packageJson = getPackageJson();
  if ('eslintConfig' in packageJson) {
    delete packageJson.eslintConfig;
    fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2));
  }
}

function removePrettierFromPackageJson() {
  const packageJson = getPackageJson();
  if ('prettier' in packageJson) {
    delete packageJson.prettier;
    fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2));
  }
}

function addLintCommandToPackageJson() {
  const packageJson = getPackageJson();
  packageJson.scripts = packageJson?.scripts || {};
  packageJson.scripts.lint = 'eslint .';
  fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2));
}

exports.preprocessPackageJson = function () {
  removeEslintPackages();
  removePrettierPackages();
  removeEslintConfigFiles();
  removePrettierConfigFiles();
  removeEslintConfigFromPackageJson();
  removePrettierFromPackageJson();
  addLintCommandToPackageJson();
};

exports.createEslintConfig = function (config) {
  const outputDir = process.cwd();

  console.log('Creating eslint.config.cjs file...');
  const configString = `module.exports = ${JSON.stringify(config, null, 2)};\n`;
  const filePath = path.join(outputDir, '.eslintrc.cjs');

  // Write the file to the disk
  fs.writeFile(filePath, configString, (err) => {
    if (err) {
      console.error('Error writing eslint.config.cjs:', err);
    } else {
      execSync('npx @eslint/migrate-config .eslintrc.cjs --commonjs', {
        stdio: 'inherit',
      });

      fs.unlinkSync(filePath);

      console.log('eslint.config.cjs file created successfully!');
    }
  });
};

exports.createPrettierConfig = function (config) {
  console.log('Creating .prettierrc file...');
  fs.writeFileSync('.prettierrc', JSON.stringify(config, null, 2));

  console.log('Creating .prettierignore files...');

  const ignoreContent = 'node_modules\n';
  fs.writeFileSync('.prettierignore', ignoreContent);
};

exports.installDependencies = function (dependencies) {
  console.log('Installing dependencies...');

  execSync(dependencies, { stdio: 'inherit' });
};
