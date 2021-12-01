const mongoose = require('mongoose')
const bcrypt = require ('bcryptjs')

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            require: true,
            unique: true,
        },
        email: {
            type: String,
            requires: true,
            unique: true,
        },
        password: {
            type: String,
            require: true,
        },
        pic: {
            type: String,
            requires: true,
            default: "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
        }, 
    },
    {
        timestamps: true, 
    }
);

userSchema.pre('save', async function(next){
    if(this.isModified('password')){
        next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password=await bcrypt.hash(this.password, salt);
});

userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
}


const User = mongoose.model('User', userSchema);

module.exports = User;