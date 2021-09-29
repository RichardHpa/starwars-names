import { expect } from 'chai'
import { all, random, getList, searchCharacters } from './index'

describe('starwars-names', () => {
	describe('all', () => {
		it('should be an array of strings', () => {
			expect(all).to.satisfy(isArrayOfStrings)

			function isArrayOfStrings(array) {
				return array.every((item) => {
					return typeof item === 'string'
				})
			}
		})

		it('should contain `Luke Skywalker`', () => {
			expect(all).to.includes('Luke Skywalker')
		})
	})

	describe('random', () => {
		it('should return a random item from starWars.all', () => {
			const randomItem = random()
			expect(all).to.includes(randomItem)
		})
		it('should return an array of random items if passed a number', function () {
			var randomItems = random(3)
			expect(randomItems).to.have.length(3)
			randomItems.forEach(function (item) {
				expect(all).to.include(item)
			})
		})
	})

	describe('list', () => {
		it('should return a list of 5 item from starWars.all', () => {
			const items = getList(5)
			expect(items).to.have.length(5)
			items.forEach(function (item) {
				expect(all).to.include(item)
			})
		})

		it('if number is longer than starWars.all length then it returns the whole list', () => {
			const items = getList(100)
			expect(items).to.have.length(all.length)
		})
	})

	describe('searchCharacters', () => {
		it('should return everything if no query is specified', () => {
			const items = searchCharacters()
			expect(items).to.have.length(all.length)
		})

		it('should return Luke Skywalker if searching for luke', () => {
			const items = searchCharacters('luke')
			expect(items).to.includes('Luke Skywalker')
		})

		it('should return `Bastila Shan`,	`Satele Shan`,`Shaak Ti` if searching for SHA', () => {
			const items = searchCharacters('SHA')
			expect(items).to.includes('Bastila Shan')
			expect(items).to.includes('Satele Shan')
			expect(items).to.includes('Shaak Ti')
		})

		it('should return an empty list if nothing is found', () => {
			const items = searchCharacters('Adam')
			expect(items).to.have.length(0)
		})
	})
})
