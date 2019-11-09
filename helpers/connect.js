import mongoose from 'mongoose'

export default (database) => mongoose.createConnection(database,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})