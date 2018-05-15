const express = require('express');
//load db in this isolated environment
const db = require('../config/db');

const Images = require('../models/images');
const imgur = require('../services/imgur');


//update local db data
imgur.getImage.getList().then(result => {
	var result = result;
	//run the fetch in an asynchronous operation
	return new Promise((resolve, reject) => {
	try {
		//remove first, then bulk insert 
        Images.remove().exec().then(function(){
			result.map(img => {
				//save one by one
				new Images(img).save(function(error, img){
		   			console.log(img);
				});
			});
        });
      } catch (ex) {
        reject(ex);
      }
      resolve('Success!');
	});
});