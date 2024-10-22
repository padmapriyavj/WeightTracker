import express from 'express'
import {mongoose} from 'mongoose'
import bodyParser from 'body-parser';
import userRoute from './route/user.route.js'
import User from './model/user.model.js';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const app = express()
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", userRoute)









const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.set('view engine', 'ejs')
app.set('views', join(__dirname, 'views'));


// app.get('/login', (req, res)=>{
//     res.render('login', {title: 'Login Page'})
// })

app.get('/signup', (req, res)=>{
    res.render('signup', {title: 'Sign Up'})
})



// app.get('/dashboard', (req, res)=>{
//     res.render('dashboard', {title: 'bashboard'}); 
// })



// app.get("/",async(req,res)=>{
//     try{
//     //console.log(req.params)
//     const email = req.params.id
//     const user = await User.find({email})
//     console.log(user)
//     // res.status(200).json({user})
//     } catch(err){
//         console.log(err);
//     }

// })

// app.get("/get-user/:emal",async(req,res)=>{
// //     try{
// //     console.log('put request', req.body)
// //     const email = req.param.email
// //     const updateUserData = req.body
// //     console.log(eamil, updateUserData)

// //     await User.findOneAndUpated({email}, updateUserData)         //why using updateUserData instead of ""
// //     res.status(200).json({status: "updated successfully"})
// //     } catch(err){
// //         console.log(err);
// //     }
// })



// app.post("/signup",(req,res)=>{
//     try {
//         res.send('this request is sent')
//         console.log(req.body)
//         User.create(req.body)
//         res.json({"status": "user added successfully"})
//     }catch(err){
//         console.log(err)
//         res.status(400).json({"stauts": "somthing went wrong"})
//     }
    
// })



const mongoConnect = async() => {
    await mongoose.connect('mongodb://localhost:27017/449group');
    console.log('DB connected')

}

mongoConnect()  

app.listen (3000, () => console.log('servre started on port 3000'))

