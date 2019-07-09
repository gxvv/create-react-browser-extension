# Create React Browser Extension [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-green.svg)](https://github.com/gxvv/create-react-browser-extension/pulls)

Create React webextensions like Create React App.

## Feature

- Features in create-react-app
  - React, JSX, ES6, TypeScript and Flow syntax support.
  - Language extras beyond ES6 like the object spread operator.
  - Autoprefixed CSS.
  - ...
- Features in [webextension-toolbox/webpack-webextension-plugin](https://github.com/webextension-toolbox/webpack-webextension-plugin).
  - Manifest generator.(validation, defaults, [vendor keys](https://github.com/webextension-toolbox/webextension-toolbox#manifest-vendor-keys))
  - Livereload server.
- [Webextension-polyfill](https://github.com/mozilla/webextension-polyfill) Support
  - So always use the webextension browser api. This will polyfill it for you in chrome and opera.
- Multiple Browser Support
  - chrome (auto polyfilled)
  - opera (auto polyfilled **not test**)
  - firefox
  - edge (**not test**)
- Packing for distribution

## Get Started

```sh
create-react-app my-extension --scripts-version browser-extension-react-scripts
// or create extension using typescript
// create-react-app my-extension --typescript --scripts-version browser-extension-react-scripts

cd my-extension
npm start chrome
// npm start chrome/firefox...
```

Then load the unpacked extension in the dev folder.<br>
When you’re ready to distribution, create a packed extension with `npm run build`.

## Acknowledgements

Thanks for this projects:

- [facebook/create-react-app](https://github.com/facebook/create-react-app)
- [webextension-toolbox/webextension-toolbox](https://github.com/webextension-toolbox/webextension-toolbox)
- [mozilla/webextension-polyfill](https://github.com/mozilla/webextension-polyfill)

## License

Create React Browser Extension is open source software [licensed as MIT](https://github.com/gxvv/create-react-browser-extension/blob/master/LICENSE).
