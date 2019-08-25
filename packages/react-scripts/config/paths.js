// @remove-on-eject-begin
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
// @remove-on-eject-end
'use strict';

const path = require('path');
const fs = require('fs');
const url = require('url');

// Make sure any symlinks in the project folder are resolved:
// https://github.com/facebook/create-react-app/issues/637
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

function ensureSlash(inputPath, needsSlash) {
  const hasSlash = inputPath.endsWith('/');
  if (hasSlash && !needsSlash) {
    return inputPath.substr(0, inputPath.length - 1);
  } else if (!hasSlash && needsSlash) {
    return `${inputPath}/`;
  } else {
    return inputPath;
  }
}

const moduleFileExtensions = [
  'web.mjs',
  'mjs',
  'web.js',
  'js',
  'web.ts',
  'ts',
  'web.tsx',
  'tsx',
  'json',
  'web.jsx',
  'jsx',
];

// Resolve file paths in the same order as webpack
const resolveModule = (resolveFn, filePath) => {
  const extension = moduleFileExtensions.find(extension =>
    fs.existsSync(resolveFn(`${filePath}.${extension}`))
  );

  if (extension) {
    return resolveFn(`${filePath}.${extension}`);
  }

  return resolveFn(`${filePath}.js`);
};

// config after eject: we're in ./config/
module.exports = {
  dotenv: resolveApp('.env'),
  appPath: resolveApp('.'),
  appBuild: resolveApp('build'),
  appDev: resolveApp('dev'),
  appPublic: resolveApp('public'),
  appHtml: resolveApp('public/index.html'),
  appPopupJs: resolveModule(resolveApp, 'src/popup'),
  appBackgroundJs: resolveModule(resolveApp, 'src/background'),
  appOptionsJs: resolveModule(resolveApp, 'src/options'),
  appContentScript: resolveApp('src/content-scripts'),
  appManifestJson: resolveApp('manifest.json'),
  appPackageJson: resolveApp('package.json'),
  appSrc: resolveApp('src'),
  appTsConfig: resolveApp('tsconfig.json'),
  appJsConfig: resolveApp('jsconfig.json'),
  yarnLockFile: resolveApp('yarn.lock'),
  testsSetup: resolveModule(resolveApp, 'src/setupTests'),
  appNodeModules: resolveApp('node_modules'),
};

// @remove-on-eject-begin
const resolveOwn = relativePath => path.resolve(__dirname, '..', relativePath);

// config before eject: we're in ./node_modules/react-scripts/config/
module.exports = {
  dotenv: resolveApp('.env'),
  appPath: resolveApp('.'),
  appBuild: resolveApp('build'),
  appDev: resolveApp('dev'),
  appPublic: resolveApp('public'),
  appHtml: resolveApp('public/index.html'),
  appPopupJs: resolveModule(resolveApp, 'src/popup'),
  appBackgroundJs: resolveModule(resolveApp, 'src/background'),
  appOptionsJs: resolveModule(resolveApp, 'src/options'),
  appContentScript: resolveApp('src/content-scripts'),
  appManifestJson: resolveApp('manifest.json'),
  appPackageJson: resolveApp('package.json'),
  appSrc: resolveApp('src'),
  appTsConfig: resolveApp('tsconfig.json'),
  appJsConfig: resolveApp('jsconfig.json'),
  yarnLockFile: resolveApp('yarn.lock'),
  testsSetup: resolveModule(resolveApp, 'src/setupTests'),
  appNodeModules: resolveApp('node_modules'),
  // These properties only exist before ejecting:
  ownPath: resolveOwn('.'),
  ownNodeModules: resolveOwn('node_modules'), // This is empty on npm 3
  appTypeDeclarations: resolveApp('src/react-app-env.d.ts'),
  ownTypeDeclarations: resolveOwn('lib/react-app.d.ts'),
};

const ownPackageJson = require('../package.json');
const reactScriptsPath = resolveApp(`node_modules/${ownPackageJson.name}`);
const reactScriptsLinked =
  fs.existsSync(reactScriptsPath) &&
  fs.lstatSync(reactScriptsPath).isSymbolicLink();

// config before publish: we're in ./packages/react-scripts/config/
if (
  !reactScriptsLinked &&
  __dirname.indexOf(path.join('packages', 'react-scripts', 'config')) !== -1
) {
  module.exports = {
    dotenv: resolveOwn('template/.env'),
    appPath: resolveApp('.'),
    appBuild: resolveOwn('../../build'),
    appDev: resolveOwn('../../dev'),
    appPublic: resolveOwn('template/public'),
    appHtml: resolveOwn('template/public/index.html'),
    appPopupJs: resolveModule(resolveOwn, 'template/src/popup'),
    appBackgroundJs: resolveModule(resolveOwn, 'template/src/background'),
    appOptionsJs: resolveModule(resolveOwn, 'template/src/options'),
    appContentScript: resolveOwn('template/src/content-scripts'),
    appManifestJson: resolveOwn('template/manifest.json'),
    appPackageJson: resolveOwn('package.json'),
    appSrc: resolveOwn('template/src'),
    appTsConfig: resolveOwn('template/tsconfig.json'),
    appJsConfig: resolveOwn('template/jsconfig.json'),
    yarnLockFile: resolveOwn('template/yarn.lock'),
    testsSetup: resolveModule(resolveOwn, 'template/src/setupTests'),
    appNodeModules: resolveOwn('node_modules'),
    // These properties only exist before ejecting:
    ownPath: resolveOwn('.'),
    ownNodeModules: resolveOwn('node_modules'),
    appTypeDeclarations: resolveOwn('template/src/react-app-env.d.ts'),
    ownTypeDeclarations: resolveOwn('lib/react-app.d.ts'),
  };
}
// @remove-on-eject-end

module.exports.moduleFileExtensions = moduleFileExtensions;
