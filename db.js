const massive = require('massive')
const connectionString = "postgres://vernonmu@localhost/menuapp";
const massiveInstance = massive.connectSync({connectionString : connectionString})
module.exports = massiveInstance
