const mongoose = require("mongoose")

module.exports = ()=>{

    mongoose.connect(
        'mongodb://localhost:27017/vietpro_mobile_shop', 
         {useNewUrlParser: true}
    )
    return mongoose
}


