import mongoose from 'mongoose'

const Schema = mongoose.Schema

export default new Schema({
    name:{
        type:String,
        default:"My Raid"
    },
    date:{
        type:String,
        default:new Date().toUTCString()
    }
})