const mongoose = require('mongoose');
const mongodb = require('mongodb');

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://jsancal99:Clgupyuv8@snapshat0.rbpnsyt.mongodb.net/snap?retryWrites=true&w=majority", {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
    } catch (err){
        console.error(err);
    }
}

module.exports = connectDB;

//mongodb+srv://mongotut:testing123@cluster0.rbpnsyt.mongodb.net/CompanyDB?retryWrites=true&w=majority