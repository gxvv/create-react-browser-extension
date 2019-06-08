const fs = require('fs-extra');
const paths = require('../../config/paths');

function copyPublicFolder(publicFolder) {
  fs.copySync(paths.appPublic, publicFolder, {
    dereference: true,
    filter: file => file !== paths.appHtml,
  });
}

module.exports = copyPublicFolder;
