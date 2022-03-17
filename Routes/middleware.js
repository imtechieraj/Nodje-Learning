const { serversideValidation } = require('../Controllers/componets')

const validationMiddleware = (req, res, next) => {
    serversideValidation(req, res, next)
}



module.exports = {
    validationMiddleware
}