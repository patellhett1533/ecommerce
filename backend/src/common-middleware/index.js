const jwt = require('jsonwebtoken');
const JWT_SECRET = "Ecommerce";

exports.requireLogin = (req, res, next) => {
    if(req.headers.authorization){
        const token = req.headers.authorization.split(" ")[1];
        const user = jwt.verify(token, JWT_SECRET);
        req.user = user;
    }
    else{
        res.status(400).json({message: "Authorization is required"})
    }
    
    next();
};

exports.adminMiddleware = (req, res, next) => {
    if(req.user.role !== 'admin'){
        return res.status(400).json({message : "Access Denied"})
    }
    next();
};

exports.userMiddleware = (req, res, next) => {
    if(req.user.role !== 'user'){
        return res.status(400).json({message : "Access Denied"})
    }
    next();
};