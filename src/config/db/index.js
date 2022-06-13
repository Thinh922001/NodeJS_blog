const mongoose = require('mongoose');
async function connection(){
    try {
        await mongoose.connect('mongodb://localhost:27017/F8_education_dev');
        console.log('Connection successfully');
    } catch (error) {
        console.log('Loi');
    }
   
}

module.exports={ connection }