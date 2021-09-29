import uniqueRandomArray from 'unique-random-array'
import starWarsNames from './starwars-names.json'

const getRandomItem = uniqueRandomArray(starWarsNames)

export const all = starWarsNames

export const random = (number) => {
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

export const getList = (number) => {
	if (number === undefined || number > starWarsNames.length) {
		return starWarsNames
	} else {
		var items = []
		for (var i = 0; i < number; i++) {
			items.push(starWarsNames[i])
		}
		return items
	}
}
