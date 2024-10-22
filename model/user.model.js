// const {Schema, model} = require("mongoose");
import {Schema, model} from 'mongoose'

const UserSchema = new Schema({
    firstname:{type: String},
    lastname:{type:String},
    gender:{type: String},
    age:{type:Number},
    email: {type:String},
    phone: {type: Number},
    password: {type:String}
})

const User = model('user', UserSchema)

export default User