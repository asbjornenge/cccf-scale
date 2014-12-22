var cccf  = require('cccf')
var clone = require('clone')

var scaleUp = function(config) {
	return config.reduce(function(containers, container) {
		containers.push(container)
		if (!container.scale) return containers
		if (typeof container.scale != 'number') return containers
		var i = 1
		while(i < container.scale) {
			var scale = clone(container)
			delete scale.scale
			scale.id = scale.id+'-scale-'+i
			containers.push(scale)
			i++
		}
		return containers
	}, [])
}

var scaleDown = function(config) {
	return config.reduce(function(containers, container) {
		if (container.id.indexOf('-scale-') > 0) return containers
		containers.push(container)
		return containers
	}, [])
}

module.exports = {
	up : function(config) {
		return scaleUp(cccf.validate((config instanceof Array) ? config : [config]))
	},
	down : function(config) {
		return scaleDown(cccf.validate((config instanceof Array) ? config : [config]))
	}
}