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

## Distributing Policies

Files generated by webpack are compiled. There are some rules you should know about the addon store.

### Chrome——Code Readability Requirements [Link](https://developer.chrome.com/webstore/program_policies#content_policies)

> Code Readability Requirements: Developers must not obfuscate code or conceal functionality of their extension. This also applies to any external code or resource fetched by the extension package. Minification is allowed, including the following forms:<br><br>
> Removal of whitespace, newlines, code comments, and block delimiters<br>
> Shortening of variable and function names<br>
> Collapsing files together

### Mozilla——Source Code Submission [Link](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/AMO/Policy/Reviews#Source_Code_Submission)

> Add-ons may contain transpiled, minified or otherwise machine-generated code, but Mozilla needs to review a copy of the human-readable source code. The author must provide this information to Mozilla during submission along with instructions on how to reproduce the build.<br><br>
> The provided source code will be reviewed by an administrator and will not be redistributed in any way. The code will only be used for the purpose of reviewing the add-on. Failure to provide this information will result in rejection.<br><br>
> Add-ons are not allowed to contain obfuscated code, nor code that hides the purpose of the functionality involved. If external resources are used in combination with add-on code, the functionality of the code must not be obscured. To the contrary, minification of code with the intent to reduce file size is permitted.

## Acknowledgements

Thanks for this projects:

- [facebook/create-react-app](https://github.com/facebook/create-react-app)
- [webextension-toolbox/webextension-toolbox](https://github.com/webextension-toolbox/webextension-toolbox)
- [mozilla/webextension-polyfill](https://github.com/mozilla/webextension-polyfill)

## License

Create React Browser Extension is open source software [licensed as MIT](https://github.com/gxvv/create-react-browser-extension/blob/master/LICENSE).
