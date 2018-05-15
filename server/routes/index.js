const express = require('express');
const router = express.Router();

const Images = require('../models/images');
const imgur = require('../services/imgur');

router.get('/search/:q', (req, res) => {
  imgur.getImage.search(req.params.q).then(ans => {
  	//output result as json
    res.json(ans);
  });
});

router.get('/list', (req, res) => {
	//get all valid(not null) data by model
	Images.find({ url: { $ne: null } }).then(function(docs){
		//output result as json
  		res.json(docs);
	});
});

module.exports = router;
