var db = require('../lib/db.js')
	, mongojs = require('mongojs');

module.exports = function(app) {
	
	/**
	 * Spec b2.1 get the most recent 20 postcode with GET
	 */
	app.get('/api/postcode', function(req, res) {
		// order by 'postcode' with aescendant. 
		var sort = [['postcode', 1]];
		db.find('postcode',{sort:sort,limit:20}, function(err, postcode) {
			if (!err) {
				//var result = db.filterId(postcode);
				return res.send(200,postcode);
			} else {
				return console.log(err);
			}
		});
	});

	/**
	 * Spec 1.2 get the postcode by object id with GET
	 */
	app.get('/api/postcode/:id', function(req, res){
		var id = req.params.id;
		db.findOne('postcode', {'_id': mongojs.ObjectId(id)}, {}, function(err, postcode){
			if (!err) {
				return res.send(200,postcode);
			} else {
				return console.log(err);
			}
		});
	});
	
	/**
	 * Spec 1.4 edit a postcode with PUT
	 */
	app.put('/api/postcode/:id', function(req, res){
		var id = req.params.id;
		db.update('postcode',  {'_id': mongojs.ObjectId(id)}, {$set: req.body},
			{upsert: false, multi:false}, function(){res.send(200,req.body);
		});
	});
	
	/**
	 * Spec 1.5 delete a postcode by object id with DELETE
	 */
	app.delete('/api/postcode/:id', function(req, res){
		var id = req.params.id;
		db.remove('postcode', {'_id': mongojs.ObjectId(id)}, function(err, message){
			if (!err) {
				res.json(true);
			} else {
				console.log(err);
				res.json(false);
			}
		});
	});
};
