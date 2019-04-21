const mongoose = require('mongoose');

//Define a schema
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    
    name: {
		type: String,
		trim: true,		
		required: true,
	},
            
}, {
    timestamps: true

});

module.exports = mongoose.model('Category', CategorySchema)