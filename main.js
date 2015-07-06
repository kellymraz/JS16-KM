// $(document).on('ready', function() {
  
// });

// console.log('hello')

var Nutrition = function(name, calories, vegan, glutenFree, citrusFree){
	this.name        = name;
	this.calories    = calories;
	this.vegan       = vegan;
	this.glutenFree = glutenFree;
	this.citrusFree  = citrusFree;
}

var bread = new Nutrition ('Bread', 1700, true, false, true)
var cheeseCake = new Nutrition ('Cheese Cake', 1200, false, true, true)
var greenBeans = new Nutrition ('Green Beans', 2, true, true, true)


Nutrition.prototype.string = function(){
	var output = this.name + ' has ' + this.calories + ' calories. Vegan: ' + this.vegan + '. Gluten free: ' + this.glutenFree + '. Citrus free: ' + this.citrusFree
	return output
}

console.log(bread.string())
console.log(cheeseCake.string())
console.log(greenBeans.string())









var Drink = function(name, description, price, ingredients){
	this.name        = name;
	this.description = description;
	this.price       = price;
	this.ingredients = ingredients
}

var Plate = function(name, description, price, ingredients){
	this.name        = name;
	this.description = description;
	this.price       = price;
	this.ingredients = ingredients;
}

var Order = function(plates){
	this.plates = plates;
}

var Menu = function(plates){
	this.plates = plates;
}

var Restaurant = function(name, description, menu){
	this.name        = name;
	this.description = description;
	this.menu        = menu;
}

var Customer = function(dietaryPreference){
	this.dietaryPreference = dietaryPreference;
}



var lunchOrder = new Order (['pasta', 'soup', 'cat'])
Order.prototype.lunch = function(){
	var output = 'This order contains: ' + this.plates.join(', ')
	return output
}
console.log(lunchOrder.lunch())

var bluePlate = new Plate ("Speical", "delicious", 12, ['meat', 'cheese', 'oranges'])

// var bluePlate = new Plate ("Speical", "delicious", 12, [bread, cheeseCake, greenBeans])

Plate.prototype.isVegan = function(){
	var output = 0
	this.ingredients.forEach(function(elements){
		if (elements === 'meat'){
			output ++
			}
	})
		if (output > 0){
			return 'Not Vegan'
		}
		else {
			return 'vegan'
		}
}





 // Plate.prototype.isVegan = function(){
 // 	this.ingredients.map(function(bread){
 		
 // 	})
 // }

console.log(bluePlate.isVegan())












