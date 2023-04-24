///<reference types="cypress"/>

const { defineConfig } = require("cypress");
module.exports = defineConfig({
  env: {
    BaseUrl: "https://cmsweb-new-qa2.skylab.world/",
    Dashboard: "https://cmsweb-new-qa2.skylab.world/home"
  },

  e2e: {
    watchForFileChanges: false, //test will not run after immediate change in the script 
    defaultCommandTimeout: 5000, //execution will be delayed for mentioned millisecond if any failure occurs in the command 
    setupNodeEvents(on, config) {
      require('@cypress/code-coverage/task')(on, config)
      on('task', {
        log(message) {
          console.log(message)
          return null// implement node event listeners here
        },

        experimentalRunAllSpecs: true
      })
      return config
    }
  }
});