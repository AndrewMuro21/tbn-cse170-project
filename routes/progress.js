/*
 * GET progress page.
 */

var data = require("../public/data.json");
var newAct = require("../public/activities.json")

exports.view = function(req, res){

	//console.log(x);
	/*var newActivity = {
		"name": $(".text-center #inAct").val()	
	}
	console.log(newActivity)
	newAct.activity.push(newActivity);*/

	res.render('progress',data);
};

