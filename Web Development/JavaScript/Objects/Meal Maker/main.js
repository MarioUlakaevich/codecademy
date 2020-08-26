const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },

  get courses() {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts
    };
  },

  get appetizers() {
    return this._course['appetizers'];
  },
  set appetizers(appIn) {
    this._course['appetizers'] = appIn;
  },

  get mains() {
    return this._course['mains'];
  },
  set mains(mainIn) {
    this._course['mains'] = mainIn;
  },

  get desserts() {
    return this._course['desserts'];
  },
  set desserts(desIn) {
    this._course['desserts'] = desIn;
  },

  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice
    };
    this._courses[courseName].push(dish);
  },

  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },

  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;

    return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name}. The price is $${totalPrice}.`;
  }
};

menu.addDishToCourse('appetizers', 'Salsa', 4);
menu.addDishToCourse('appetizers', 'Peanuts', 2);
menu.addDishToCourse('appetizers', 'Twists', 5);
menu.addDishToCourse('mains', 'Kebab', 14);
menu.addDishToCourse('mains', 'Durum', 6);
menu.addDishToCourse('mains', 'Durum Teller', 12);
menu.addDishToCourse('desserts', 'Kunefe', 5);
menu.addDishToCourse('desserts', 'Tee', 3);
menu.addDishToCourse('desserts', 'Pachlava', 4);

const meal = menu.generateRandomMeal();

console.log(meal);
s