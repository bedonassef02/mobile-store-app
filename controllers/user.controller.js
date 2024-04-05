const userService = require('../services/user.service');

exports.register = (req,res)=>{
    const {name, email, password} = req.body;
    const user = userService.createUser({name, email, password});
    res.status(201).json(user);
}