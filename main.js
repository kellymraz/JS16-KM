console.log('Hello!!')

var Nutrition = function(name, calories, vegan, glutenFree, citrusFree){

	this.name        = name;
	this.calories    = calories;
	this.vegan       = vegan;
	this.glutenFree  = glutenFree;
	this.citrusFree  = citrusFree;
}

var bread      = new Nutrition ('Bread', 1700, true, false, true)
var cheeseCake = new Nutrition ('Cheese Cake', 1200, false, true, true)
var greenBeans = new Nutrition ('Green Beans', 2, true, true, true)


Nutrition.prototype.string = function(){
	var output = this.name + ' has ' + this.calories + ' calories. Vegan: ' + 
	this.vegan + '. Gluten free: ' + this.glutenFree + '. Citrus free: ' + this.citrusFree
	return output
}

Nutrition.prototype.isVegan = function(){
	if (this.vegan === true){
		return 'Is Vegan'
	}
	else {
		return 'Not Vegan'
	}
}

Nutrition.prototype.isGlutenFree = function(){
	if (this.glutenFree === true){
		return 'Is gluten free'
	}
	else {
		return 'Not gluten free'
	}
}

Nutrition.prototype.isCitrusFree = function(){
	if (this.citrusFree === true){
		return 'Is citrus free'
	}
	else {
		return 'Not citrus free'
	}
}


console.log(bread.string())
console.log(cheeseCake.string())
console.log(greenBeans.string())



console.log('---------------------')
console.log('---------------------')
console.log('---------------------')


//================================= Part 2 =================================================
//============================== Constructors =========================================

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

//=================================== Methods ============================================================

Drink.prototype.toString = function(){
	return '\nDrink name: ' + this.name + '\nThis drink is ' + this.description + 
	'\nIt costs: ' + this.price + ' dollars' + '\nIt contains: ' + this.ingredients.join(', ')
}

Plate.prototype.toString = function(){
	return '\nPlate name: ' + this.name + '\nThis plate is ' + this.description + 
	'\nIt costs: ' + this.price + ' dollars' + '\nIt contains: ' + this.ingredients.join(', ')
}

Plate.prototype.isVegan = function(){
	if (this.vegan){
		return 'Is Vegan'
	}
	else {
		return 'Not Vegan'
	}
}

Plate.prototype.isGlutenFree = function(){
	if (this.glutenFree){
		return 'Is gluten free'
	}
	else {
		return 'Not gluten free'
	}
}

Plate.prototype.isCitrusFree = function(){
	if (this.citrusFree){
		return 'Is citrus free'
	}
	else {
		return 'Not citrus free'
	}
}

Order.prototype.toString = function(){
	return 'Plates: ' + this.plates.join(', ')
}

Menu.prototype.toString = function(){
	return this.plates.join(', ')
}

Restaurant.prototype.toString = function(){
	return 'Restaurants name: ' + this.name + '\nThis restaurant is ' + 
	this.description + '\nMenu: ' + this.menu
}

Customer.prototype.toString = function(){
	return 'Dietary preference' + this.dietaryPreference
}

//================================  Variables ============================================================

// Burrito Plate, a Guacamole Plate, and a Margarita Drink.

var burrioPlate    = new Plate('Burrito', 'Delicious', 12, ['beef', 'cheese', 'hotsauce', 'beans'])

var guacamolePlate = new Plate('Guacamole', 'Green', 7, ['advocatos', 'tomatos', 'onions', 'haberneros'])



var margaritaDrink = new Drink('Margarita', 'Fantastic', 5, ['tequilla', 'salt', 'sugar', 'more salt'])





var mainMenu = new Menu([burrioPlate, guacamolePlate, margaritaDrink])





var myRestaurant = new Restaurant ('Ricos Mexican', 'The Best around', mainMenu)





var output = myRestaurant.toString()


console.log(output)



//========================================================================================================


Restaurant.prototype.create = function(){
	var newEl = $('<div></div>')
	newEl.text(output)
	this.el = newEl
	return this.el
}

$('body').append(myRestaurant.create())












