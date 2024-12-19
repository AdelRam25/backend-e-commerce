const User = require("../models/User");
const jwt = require ('jsonwebtoken')

module.exports = async (req , res , next ) => {
    try {
        const header = req.headers.authorization;
        const token = header.split(' ')[1];
        const {id} = jwt.verify(token , 'ksdfksvnsdvisdvisdnpzsdfgnsoidhgskvgsoi')
        const user = await User.findById(id);
        req.user = user;
        next()
}catch(e) {
    res.status(401).json({message : 'Unauthentificated'})
}
}