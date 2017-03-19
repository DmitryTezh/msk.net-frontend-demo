/**
 * Created by DIMOS on 18.03.2017.
 */
if (process.env.NODE_ENV === 'production') {
    module.exports = require('./settings.prod.js')
}
else {
    module.exports = require('./settings.dev.js')
}