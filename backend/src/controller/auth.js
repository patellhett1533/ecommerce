const User = require('../model/User');
const jwt = require('jsonwebtoken');
const JWT_SECRET = "Ecommerce";

exports.signup = (req, res) => {
    User.findOne({ email: req.body.email })
        .exec((error, user) => {
            if (error) {
                return res.status(400).json({error});
            }
            if (user) {
                return res.status(400).json({
                    message: "User Has Already Exists."
                });
            }

                const { firstname, lastname, email, password } = req.body;
                const _user = new User({
                    firstname,
                    lastname,
                    email,
                    password,
                    username: Math.random().toString()
                });

                _user.save((error, data) => {
                    if (error) {
                        return res.status(400).json({
                            message: "Something Went Wrong."
                        });
                    }

                    if (data) {
                        return res.status(201).json({
                            message: "User created successfully"
                        })
                    }
                })
            
        });
}

exports.login = (req, res) => {
    User.findOne({ email: req.body.email })
        .exec((error, user) => {
            if (error) {
                return res.status(400).json({error});
            }

            if(user){
                if(user.authenticate(req.body.password)){
                    const token = jwt.sign({_id: user._id, role: user.role}, JWT_SECRET, {expiresIn: '1h'});
                    const {_id, firstname, lastname, email, role, fullname} = user;

                    res.status(200).json({
                        token,
                        user: {
                            _id, firstname, lastname, email, role, fullname
                        }
                    });
                }
                else{
                    return res.status(400).json({
                        message: "Invalid Password"
                    });
                }
            }
            else{
                return res.status(400).json({
                    message: "Something Went Wrong"
                });
            }
        });
}

