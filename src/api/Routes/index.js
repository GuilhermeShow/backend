const bodyParser = require('body-parser');
const route = require('./teste')

module.exports = app => {
        app.use(
                bodyParser.json(),
                route
        )
}