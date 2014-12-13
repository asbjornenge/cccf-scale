var assert  = require('assert')
var clone   = require('clone')
var example = require('cccf/example.json')
var cs      = require('../index')

var config   = clone(example)
config.scale = 10

describe('cccf-scale', function() {

	it('can scale up', function() {
		var upscaled = cs.up(config)
		console.log(upscaled)
		assert(upscaled != null)
		assert(upscaled.length == 10)
	})

})