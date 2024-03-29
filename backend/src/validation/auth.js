const { body, validationResult } = require('express-validator');

// this is validation code of data of Signup
exports.validateSignupRequest = [
    body('firstname', "First Name is Required").notEmpty(),
    body('lastname', "Last Name is Required").notEmpty(),
    body('email',"Enter a Valid Email").isEmail(),
    body('password',"Password Must be atleast 8 Characters").isLength({min: 8})
];

// this is validation code of data of Login
// exports.validateLoginRequest = [
//     check('email').isEmail().withMessage("Enter a Valid Email"),
//     check('password').isLength({min: 8}).withMessage("Password Must be atleast 8 Characters"),
// ];

// this is check to valid request
exports.isRequestValidated = (req, res, next) => {
    let errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ error: errors.array()[0].msg })
    }
    next();
}