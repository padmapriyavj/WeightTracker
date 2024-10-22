// const {Schema, model} = require("mongoose");
import {Schema, model} from 'mongoose'

const WeightSchema = new Schema({
    email:{type: String},
    date:{type: date},
    weight:{type: Number},
})

const weightCollection = model('weight', WeightSchema )

export default weightCollection