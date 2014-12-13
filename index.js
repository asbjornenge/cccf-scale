var cccf  = require('cccf')
var clone = require('clone')

var scaleUp = function(config) {
	return config
}

module.exports = {
	up : function(config) {
		if (!(config instanceof Array)) config = [config]
		if (cccf.validate(config)) return cccf.validate(config)
		return scaleUp(config)
	},
	down : function(config) {

	}
}