const categoryModel = require('../models/category');	
module.exports = {

    create: function(req, res, next) {
		categoryModel.create({ name: req.body.name }, function (err, result) {
				  if (err) 
				  	next(err);
				  else
				  	res.json({status: "success", message: "category added successfully!!!", data: null});
				  
				});
	},
	updateById: function(req, res, next) {
		categoryModel.findByIdAndUpdate(req.params.categoryId,{name:req.body.name}, function(err, categoryInfo){

			if(err)
				next(err);
			else {
				console.log("categoryInfo:"+categoryInfo)
				res.json({status:"success", message: "category updated successfully!!!", data:null});
			}
		});
	},
	deleteById: function(req, res, next) {
		categoryModel.findByIdAndRemove(req.params.categoryId, function(err, categoryInfo){
			if(err)
				next(err);
			else {
				res.json({status:"success", message: "category deleted successfully!!!", data:null});
			}
		});
	},

    getAll: function(req, res, next) {
		let categoryList = [];

		categoryModel.find({}, function(err, category){
			if (err){
				next(err);
			} else{
				for (let categor of category) {
					categoryList.push({id: categor._id,name: categor.name});
				}
				res.json({status:"success", message: "categories list found!!!", data:{category: categoryList}});
							
			}

		});
	},

}