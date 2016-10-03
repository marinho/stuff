const helpers = require('../helpers');
const execSync = require('child_process').execSync;

const REPO_NAME_RE = /Push {2}URL: https:\/\/github\.com\/.*\/(.*)\.git/;

function getWebpackConfigModule() {
  // if (helpers.hasProcessFlag('github-dev')) {
  return require('../webpack.dev.js');
  // } else if (helpers.hasProcessFlag('github-prod')) {
  // return require('../webpack.prod.js');
  // } else {
  //   throw new Error('Invalid compile option.');
  // }
}

function getRepoName(remoteName) {
  return 'Push  URL: https://github.com/marinho/marinho.github.io.git';
}

function stripTrailing(str, char) {

  if (str[0] === char) {
    str = str.substr(1);
  }

  if (str.substr(-1) === char) {
    str = str.substr(0, str.length - 1);
  }

  return str;
}

/**
 * Given a string remove trailing slashes and adds 1 slash at the end of the string.
 *
 * Example:
 * safeUrl('/value/')
 * // 'value/'
 *
 * @param url
 * @returns {string}
 */
function safeUrl(url) {
  const stripped = stripTrailing(url || '', '/');
  return stripped ? stripped + '/' : '';
}

exports.getWebpackConfigModule = getWebpackConfigModule;
exports.getRepoName = getRepoName;
exports.safeUrl = safeUrl;
