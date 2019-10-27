var jwt = require('jsonwebtoken');
var config = require('../config.js');

module.exports = function(router) {
    router.post('/login', function(req, res) {
        /*
         * Check if the email and password is correct
         */
        if( req.body.email === 'admin@example.com' && req.body.password === 'admin' ) {
            res.json({
                id: 1,
                email: 'admin@example.com',
                jwt: jwt.sign({
                    id: 1,
                }, config.JWT_SECRET, { expiresIn: 60*60 })
            });
        } else {
            /*
             * If the email or password was wrong, return 401 ( Unauthorized )
             * status code and JSON error message
             */
            res.status(401).json({
                error: {
                    message: 'Wrong email or password!'
                }
            });
        }
    });

    return router;
};
