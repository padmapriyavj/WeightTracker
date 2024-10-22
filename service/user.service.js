import User from "../model/user.model.js";

export const getUserByemail = async(email)=>{
    const user = await User.find({email})
    return user

}

export const createNewUser = async(userData) =>{
    await User.create(userData);
}

export const findUserAndUpdate = async(userEmail,userData)=>{
    await User.findUserAndUpdate({userEmail, userData})
}

