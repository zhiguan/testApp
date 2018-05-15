const mocha = require('mocha');
const assert = require('assert');

const images = require('../models/images');
//Database tests
describe('save test', function(){

	//create tests
	it('save record to the db', function(){
		var test = new images({
							url: 'test url',
							title: 'test title',
							context: 'test context'
						});
		test.save().then(function(){
			//if isNew ture, which means didn't save to db
			assert(test.isNew === false);
			done();
		});
	});
});