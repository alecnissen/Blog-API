const { body, validationResult } = require('express-validator');
const asyncHandler = require('express-async-handler');

exports.create_user_post = [ 

    asyncHandler(async (req, res) => {
        console.log(req.body);
    })

];
