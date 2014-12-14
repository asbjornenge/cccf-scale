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
		if (!(config instanceof Array)) config = [config]
		if (cccf.validate(config)) return cccf.validate(config)
		return scaleUp(config)
	},
	down : function(config) {
		if (!(config instanceof Array)) config = [config]
		if (cccf.validate(config)) return cccf.validate(config)
		return scaleDown(config)
	}
}