//import User from './model/user.model.js'

import {createNewUser, getUserByemail} from '../service/user.service.js'


export const renderLoginPage = (req, res) => {
    res.render("login"); 
};

export const renderDashboardPage = (req, res) => {
    
    res.render("user/dashboard"); 
};

export const renderProfilePage = (req, res) => {
    res.render("user/profile")
}

export const renderLogoutPage = (req, res) => {
    res.render("user/logout")
}

export const signup = async(req, res) => {
    try {
        const user = req.body;
        await createNewUser(user); 
        res.render('success', { msg: 'New user is created!', url: './login' });
        
    } catch (err) {
        console.error(err);
        res.render('error', { msg: 'Error creating user. Please try again.' });
    }
};


export const login = async(req, res) => {
    try{
        console.log(req.body)
        const {email, password} = req.body;
        const user = await getUserByemail(email)
        
        if (password == user[0].password)
            return res.render('user/dashboard', { user: user[0] });
      }catch (err){
        console.log(err);
      }
   
}


// export const getUserData = async (req, res) => {
//     try {
//       const email = req.params.id;
//       const user = await getUserByemail(email);
//       res.status(200).json({ "status": "user fetched" });
//     } catch (err) {
//       console.log(err);
//     }
//   };


