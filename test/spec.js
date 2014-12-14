var assert  = require('assert')
var clone   = require('clone')
var example = require('cccf/example.json')
var cs      = require('../index')

var config   = clone(example)
config.scale = 10

describe('cccf-scale', function() {

	it('can scale up', function() {
		var upscaled = cs.up(config)
		assert(upscaled != null)
		assert(upscaled.length == 10)
	})

	it('can scale down', function() {
		var up = cs.up(config)
		assert(up != null)
		assert(up.length == 10)
		var down = cs.down(up)
		assert(down != null)
		assert(down.length == 1)
	})

})