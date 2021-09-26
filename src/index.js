const uniqueRandomArray = require('unique-random-array')
const starWarsNames = require('./starwars-names.json')
var getRandomItem = uniqueRandomArray(starWarsNames)

module.exports = {
	all: starWarsNames,
	random: random,
	getList: getNum,
}

function random(number) {
	if (number === undefined) {
		return getRandomItem()
	} else {
		var randomItems = []
		for (var i = 0; i < number; i++) {
			randomItems.push(getRandomItem())
		}
		return randomItems
	}
}

function getNum(number) {
	if (number === undefined || number === starWarsNames.length) {
		return starWarsNames
	} else {
		var items = []
		for (var i = 0; i < number - 1; i++) {
			items.push(starWarsNames[i])
		}
		return items
	}
}
