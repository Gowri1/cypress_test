// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor')
const nodePolyfills = require('@esbuild-plugins/node-modules-polyfill').NodeModulesPolyfillPlugin
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')
// const getCompareSnapshotsPlugin = require('cypress-image-diff-js/dist/plugin')
const addCucumberPreprocessorPlugin = require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin
// const { addMatchImageSnapshotPlugin } = require('cypress-image-snapshot/plugin');

module.exports = async (on, config) => {
  await addCucumberPreprocessorPlugin(on, config) // to allow json to be produced
  // To use esBuild for the bundler when preprocessing
  on(
    'file:preprocessor',
    createBundler({
      plugins: [nodePolyfills(), createEsbuildPlugin(config)],
    })
  )
  on('task', { queryDb: query => { return queryTestDb(query, config)},downloadFile}); //For running sql query
  // getCompareSnapshotsPlugin(on, config) // for visual regression
  on('before:browser:launch', (browser = {}, launchOptions) => {
    if (browser.name === 'chrome') {
      launchOptions.args.push('--lang=ru');
      return launchOptions;
    }
  on('uncaught:exception', (err, runnable) => {
      return false;
    });
  });
  // getCompareSnapshotsPlugin(on, config); // for visual regression
  //addMatchImageSnapshotPlugin(on, config); 

  return config
}

const mysql = require('mysql')
function queryTestDb(query, config) {
  // creates a new mysql connection using credentials from cypress.json env's
  const connection = mysql.createConnection(config.env.db)
  // start connection to db
  connection.connect()
  // exec query + disconnect to db as a Promise
  return new Promise((resolve, reject) => {
    connection.query(query, (error, results) => {
      if (error) reject(error)
      else {
        connection.end()
        return resolve(results)
      }
    })
  })
}