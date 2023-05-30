const { defineConfig } = require('cypress');

module.exports = defineConfig({
    e2e: {
        supportFile: false,
        reporter: './node_modules/mocha-junit-reporter',
        screenshotsFolder: './cypress/screenshots',
        reporterOptions: {
            testsuiteTitle: 'CypressDemo',
            rootSuiteTitle: 'e2e.CypressDemo',
            jenkinsMode: true,
            jenkinsCLassnamePrefix: 'live-demo',
            mochaFile: './cypress/surefire-reports/[hash].xml',
            toConsole: false
        },
        video: false
    }
});