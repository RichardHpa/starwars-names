const expect = require('chai').expect
const starWars = require('./index')

describe('starwars-names', () => {
	describe('all', () => {
		it('should be an array of strings', () => {
			expect(starWars.all).to.satisfy(isArrayOfStrings)

			function isArrayOfStrings(array) {
				return array.every((item) => {
					return typeof item === 'string'
				})
			}
		})

		it('should contain `Luke Skywalker`', () => {
			expect(starWars.all).to.includes('Luke Skywalker')
		})
	})

	describe('random', () => {
		it('should return a random item from starWars.all', () => {
			const randomItem = starWars.random()
			expect(starWars.all).to.includes(randomItem)
		})
		it('should return an array of random items if passed a number', function () {
			var randomItems = starWars.random(3)
			expect(randomItems).to.have.length(3)
			randomItems.forEach(function (item) {
				expect(starWars.all).to.include(item)
			})
		})
	})

	describe('list', () => {
		it('should return a list of 5 item from starWars.all', () => {
			const items = starWars.getList(5)
			expect(items.length === 5)
			items.forEach(function (item) {
				expect(starWars.all).to.include(item)
			})
		})
	})
})
