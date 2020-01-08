const { addSideEffect } = require('@babel/helper-module-imports');

function getCoreJsPath(mod) {
  return `core-js/modules/${mod}`;
}

function importCoreJs(path, mod) {
  return addSideEffect(path, getCoreJsPath(mod));
}

const injectedFlag = Symbol('iteratorPolyfillInjected');

// add es.array.iterator for webpack dynamic import
// see: https://github.com/babel/babel/issues/9872
module.exports = ({ types }) => {
  return {
    name: 'webpack-dynamic-import-polyfill',
    visitor: {
      Import(path, state) {
        if (!this[injectedFlag]) {
          this[injectedFlag] = true;
          importCoreJs(path, 'es.array.iterator');
        }
      }
    }
  };
};
