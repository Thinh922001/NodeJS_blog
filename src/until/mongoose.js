

module.exports={
    multipleMongoose:function (mongooseArr)
    {
        return mongooseArr.map(mongooseArr=>mongooseArr.toObject());
    },
    Mongoose:function(mongoose){
            return mongoose ? mongoose.toObject() : mongoose
    }
};
