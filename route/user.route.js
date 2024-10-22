import Router from "express"
import express from 'express'
import {signup,
        login,
        renderLogoutPage,
        renderProfilePage,
        // getUserData
        renderLoginPage,
        renderDashboardPage
} from '../controller/user.controller.js'
//import User from './model/user.js'


const userRoute = express.Router()

//userRoute.get("/get-user/:id",() =>{

// })

userRoute.get('/login', renderLoginPage);
userRoute.post('/login', login)


userRoute.post('/signup', signup)

userRoute.post('/dashboard', renderDashboardPage)

userRoute.get('/profile', renderProfilePage)


userRoute.get('/logout', renderLogoutPage)




// userRoute.get('/profile', profile)
// userRoute.get('/dashboard', getUserData)



export default userRoute