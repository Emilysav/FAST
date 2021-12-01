const asynchandler = require('express-async-handler')
const User = require('../models/userModel');
const generateToken = require('../utils/generateToken');

const registerUser = asynchandler(async(req, res) => {
    const {name, email, password, pic} = req.body;

    const userExists = await User.findOne({email});

    if(userExists) {
        res.status(400)
        throw new Error('User already exists');
    }

    const user = await User.create({
        name, 
        email, 
        password, 
        pic
    })

    if(user){
        res.status(201).json({
            _id:user._id,
            name:user.name,
            email:user.email,
            pic:user.pic,
          token:generateToken(user._id),
        })
    } else {
        res.status(400)
        throw new Error('error occures')
    }
});


const authUser = asynchandler(async (req, res) => {
    const { email, password } = req.body;
  
    const user = await User.findOne({ email });
  
    if (user && (await user.password)) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        pic: user.pic,
       token:generateToken(user._id)
      });
    } else {
      res.status(401);
      throw new Error("Invalid Email or Password");
    }
  });

  const updateUserProfile = asynchandler( async (req, res) => {

  })

module.exports={registerUser, authUser, updateUserProfile};